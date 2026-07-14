/**
 * loadClient — dynamic client configuration loader.
 *
 * Reads the VITE_CLIENT environment variable to determine which client's
 * config to load, then dynamically imports that config module.
 *
 * This is the ONLY place dynamic @clients imports happen. This file is called
 * once in src/main.tsx before the React tree mounts.
 *
 * To add a new client:
 *   1. Create src/clients/<slug>/config.ts exporting a default WebsiteConfig
 *   2. Set VITE_CLIENT=<slug> in your .env file
 *   Zero other files need to change.
 */
import type { WebsiteConfig } from '@app-types/website-config'

/** Returns the active client slug from the environment, falling back to "demo". */
export function getClientSlug(): string {
  // import.meta.env returns `any` for bracket access — the cast to
  // `string | undefined` is the appropriate narrowing here.
  const slug = import.meta.env['VITE_CLIENT'] as string | undefined
  // Check defined-and-non-empty in the natural order so the condition reads
  // left-to-right without relying on optional-chaining short-circuit semantics.
  return slug !== undefined && slug.trim() !== '' ? slug.trim() : 'demo'
}

/**
 * Dynamically loads the config module for the given client slug.
 *
 * Vite resolves the dynamic import at build time via glob analysis. Each
 * client config must live at src/clients/<slug>/config.ts and export its
 * WebsiteConfig as the default export.
 *
 * @throws {Error} If the slug is invalid or the config module cannot be loaded.
 */
export async function loadClient(slug?: string): Promise<WebsiteConfig> {
  const clientSlug = slug ?? getClientSlug()

  // Vite requires a static string prefix for dynamic imports to enable
  // code splitting. The variable portion is the slug only.
  try {
    const module = (await import(`./${clientSlug}/config.ts`)) as {
      default: WebsiteConfig
    }

    if (!module.default) {
      throw new Error(`Client config for "${clientSlug}" has no default export.`)
    }

    return module.default
  } catch (err) {
    // Re-throw with a developer-friendly message
    throw new Error(
      `Failed to load client config for slug "${clientSlug}". ` +
        `Ensure src/clients/${clientSlug}/config.ts exists and exports a default WebsiteConfig. ` +
        `Original error: ${err instanceof Error ? err.message : String(err)}`,
    )
  }
}
