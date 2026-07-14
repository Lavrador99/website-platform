/**
 * useWebsiteConfig — the ONLY access point for client configuration.
 *
 * All components and pages must use this hook to read config. Never import
 * client config files directly. Never import WebsiteConfigContext directly
 * in pages or components — always go through this hook.
 */
import { useContext } from 'react'
import { WebsiteConfigContext } from '@contexts/WebsiteConfigContext'
import type { WebsiteConfig } from '@app-types/website-config'

export function useWebsiteConfig(): WebsiteConfig {
  const config = useContext(WebsiteConfigContext)

  if (config === null) {
    throw new Error(
      'useWebsiteConfig must be used within a <WebsiteConfigProvider>. ' +
        'Ensure your component tree is wrapped by WebsiteConfigProvider in src/main.tsx.',
    )
  }

  return config
}
