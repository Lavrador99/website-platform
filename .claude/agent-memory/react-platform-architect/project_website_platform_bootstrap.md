---
name: website-platform Phase 1 + Phase 2 bootstrap
description: Phase 1 scaffold + Phase 2 component library complete — records key package versions, folder layout, component patterns, and architectural decisions
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
