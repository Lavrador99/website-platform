/**
 * WebsiteConfigContext — the single source of truth for client configuration.
 *
 * ARCHITECTURAL RULE: This is the ONLY file in the codebase that may import
 * from src/clients/. All other components and pages must consume config via
 * the useWebsiteConfig() hook.
 *
 * Client configs are NOT imported statically here. They are loaded dynamically
 * by the loadClient() function in src/clients/loadClient.ts, which is called
 * in src/main.tsx before the React tree mounts. The resolved WebsiteConfig
 * object is passed in as a prop.
 */
import { createContext, type ReactNode } from 'react'
import type { WebsiteConfig } from '@app-types/website-config'

// ─── Context ─────────────────────────────────────────────────────────────────

export const WebsiteConfigContext = createContext<WebsiteConfig | null>(null)

// ─── Provider ─────────────────────────────────────────────────────────────────

interface WebsiteConfigProviderProps {
  config: WebsiteConfig
  children: ReactNode
}

export function WebsiteConfigProvider({ config, children }: WebsiteConfigProviderProps) {
  return (
    <WebsiteConfigContext.Provider value={config}>{children}</WebsiteConfigContext.Provider>
  )
}
