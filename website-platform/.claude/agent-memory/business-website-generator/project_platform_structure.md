---
name: Platform structure and client config conventions
description: How the website-platform project is organised and what a valid client config must satisfy
type: project
---

The platform lives at `/Users/alexandrelavrador/Documents/reusable-site/website-platform/`.

**Why:** Needed to scope all generated files correctly and avoid modifying shared code.
**How to apply:** Always write new client files under `src/clients/<slug>/config.ts` and `src/clients/<slug>/assets/`. Never touch anything outside `src/clients/`.

Key facts:
- `WebsiteConfig` interface is defined in `src/types/website-config.ts`. Read it before every new config.
- Import path alias: `@app-types/website-config` (not a relative path).
- Config file must use `const config: WebsiteConfig = { ... }` and `export default config`.
- Required top-level fields: `client`, `businessName`, `tagline`, `description`, `logo`, `colors`, `contact`, `nav`, `hero`.
- Optional but always populate: `about`, `services`, `portfolio`, `contactPage`.
- `about.team[].avatarInitials` is required (2-character string like "AS").
- `portfolio.items[].accentColor` is an optional CSS hex color for the card accent bar.
- `contactPage.formFields[].type` is a union: `'text' | 'email' | 'tel' | 'textarea' | 'select'`.
- Only `select` fields can have `options: string[]`.
- The demo config at `src/clients/demo/config.ts` is the canonical reference example.
- Adding a new client requires zero changes outside `src/clients/<slug>/`.
- TypeScript check: `npx tsc --noEmit` from project root.
