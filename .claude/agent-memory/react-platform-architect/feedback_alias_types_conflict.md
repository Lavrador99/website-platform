---
name: Alias @types conflicts with TypeScript built-in resolution
description: Using @types as a path alias causes TS error TS6137 (cannot import type declaration files). The alias must be named @app-types instead.
type: feedback
---

Do NOT use `@types` as a Vite/TypeScript path alias. TypeScript treats `@types` as a special namespace (DefinitelyTyped resolution), and any import like `import type { Foo } from '@types/my-module'` triggers TS6137: "Cannot import type declaration files."

**Why:** TypeScript 6 enforces this more strictly. The collision is silent in some setups but breaks under `verbatimModuleSyntax` and `moduleDetection: force`.

**How to apply:** Always use `@app-types` as the alias name for `src/types/` in both `vite.config.ts` and `tsconfig.app.json`. Document this at the top of tsconfig.app.json paths section so future contributors don't revert it.
