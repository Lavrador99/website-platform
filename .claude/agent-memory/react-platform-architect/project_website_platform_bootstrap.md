---
name: website-platform Phase 1 + Phase 2 + Phase 3 bootstrap
description: Phases 1–3 complete — records key package versions, folder layout, component patterns, page/container pattern, and architectural decisions
type: project
---

Project `website-platform` bootstrapped at `/Users/alexandrelavrador/Documents/reusable-site/website-platform/`.

## Key package versions (as installed 2026-07-14)
- react: ^19.2.7
- react-dom: ^19.2.7
- react-router-dom: ^7.18.1 (data router, createBrowserRouter)
- tailwindcss: ^4.3.2 (v4, CSS-first, no tailwind.config.js)
- @tailwindcss/vite: ^4.3.2
- vite: ^8.1.1
- @vitejs/plugin-react: ^6.0.3
- typescript: ~6.0.2
- eslint: ^10.7.0
- typescript-eslint: ^8.64.0
- prettier: ^3.9.5

## Folder structure
```
src/
  assets/
  clients/
    demo/config.ts        ← first client, fully populated
    loadClient.ts         ← dynamic import, reads VITE_CLIENT env var
  components/
  contexts/
    WebsiteConfigContext.tsx
  hooks/
    useWebsiteConfig.ts
  layouts/
  router/
    index.tsx             ← createBrowserRouter, placeholder root route
  types/
    website-config.ts     ← WebsiteConfig interface
  utils/
  main.tsx
  index.css
```

## Architectural decisions
- `WebsiteConfigProvider` lives in `src/contexts/`, not `src/providers/` — user requested `contexts/` naming
- Client configs loaded via dynamic import in `loadClient.ts`; main.tsx calls it before mounting
- `exactOptionalPropertyTypes: true` is ON — be careful with optional fields in WebsiteConfig
- ESLint `no-restricted-imports` rule blocks direct @clients imports outside contexts/
- `--legacy-peer-deps` was needed for eslint-plugin-jsx-a11y (supports eslint ^9 max, project has eslint ^10)

## Phase 2 — Component library (completed 2026-07-14)

9 generic components created in `src/components/`, all prop-only (no useWebsiteConfig calls):
- `Button` — discriminated union for href/button duality, forwardRef, loading spinner, 4 variants, 3 sizes
- `Card` — 4 variants, 4 padding sizes, forwardRef
- `Container` — 5 size presets, forwardRef, always mx-auto with responsive px
- `Section` — polymorphic `as` prop, 5 spacing presets, 4 background presets
- `SectionTitle` — eyebrow/title/subtitle stack, 3 alignment options, polymorphic heading tag
- `Navbar` — sticky by default, hamburger mobile menu (useState), ARIA-compliant, uses Container internally
- `Footer` — logo+tagline left / link groups right layout, social links, uses Container internally
- `Hero` — centered and split layouts, uses Section+Container internally
- `CTA` — primary/surface/gradient backgrounds, gradient uses raw section (not Section component), uses Container internally
- `index.ts` — barrel file exporting all components and their prop types

### Key component decisions
- `clsx` installed (with --legacy-peer-deps) for class merging
- No hardcoded hex values — all colors via `var(--color-*)` CSS custom properties from @theme block
- `Button` uses a strict discriminated union: `href` present → renders `<a>`, absent → renders `<button type="button">`
- `Section` is NOT forwardRef (polymorphic `as` prop made it complex; callers use id prop instead)
- `CTA` with `gradient` background renders a raw `<section>` to avoid fighting Section's background prop — approved pattern
- All components pass `npx tsc --noEmit` with zero errors under strict + exactOptionalPropertyTypes

**Why:** Phase 2 delivers the reusable UI layer. All components are config-agnostic — layouts/pages in Phase 3+ wire config via useWebsiteConfig props down.
**How to apply:** Pages and layouts receive config values via props from parent containers that call useWebsiteConfig(). Component library itself never touches the hook.

## Phase 3 — Pages, layouts, router (completed 2026-07-14)

### WebsiteConfig additions
Four optional typed sections added to `src/types/website-config.ts`: `about`, `services`, `portfolio`, `contactPage`. The existing `contact` (phone/email/address) is unchanged; `contactPage` is a separate field for CMS-driven form config.

### Layout layer
- `src/layouts/RootLayout.tsx` — pure presentational; accepts `navbarProps`, `footerProps`, `children`
- `src/layouts/RootLayoutContainer.tsx` — sole useWebsiteConfig() call in layouts; builds nav links with active-state detection via useLocation(); renders `<Outlet />` inside RootLayout

### Page + Container pattern
Each page in `src/pages/<Name>/` contains:
- `<Name>.tsx` — props-only component, zero context calls. Local useState only in Contact.tsx (controlled form fields — documented exception).
- `<Name>Container.tsx` — single useWebsiteConfig() call; maps config to page props; handles fallback if optional section is undefined.
- `index.ts` — barrel: `export { <Name>Container as default }; export { <Name> }; export type { <Name>Props }`

Pages: Home, About, Services, Portfolio, Contact.

### Router
`src/router/index.tsx` — RootLayoutContainer + HomeContainer load eagerly. About/Services/Portfolio/Contact use React.lazy + Suspense with a minimal `<PageShell />` fallback. 404 → `<Navigate to="/" replace />`.

### Alias added
`@pages` → `src/pages` added to both `vite.config.ts` and `tsconfig.app.json`.

### Notable decisions
- Contact form state (controlled inputs) lives in `Contact.tsx` as the one documented exception to "no state in page components" — it is purely presentational UI state.
- `ContactContainer.tsx` simulates async submit with 1500ms delay, always sets 'success' for demo.
- Portfolio cards build their accent bar with an inline `style` prop for the accentColor — Tailwind cannot safely interpolate arbitrary dynamic CSS color values.
- `tsc --noEmit` exits 0 with zero errors under strict + exactOptionalPropertyTypes.

**Why:** Phase 3 wires the component library into real navigable pages while maintaining the config-isolation invariant throughout.
**How to apply:** When adding a new page, create the folder, a props-only Page component, a Container that calls useWebsiteConfig(), and an index.ts barrel. Add the route to src/router/index.tsx with React.lazy.
