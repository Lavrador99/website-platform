/**
 * Core configuration interface for a website client.
 *
 * Each client under src/clients/<slug>/config.ts must export a default value
 * satisfying this interface. The only place this type is consumed from client
 * files is WebsiteConfigContext.tsx — nowhere else.
 */
export interface WebsiteConfig {
  /** Unique slug identifier for the client, e.g. "demo" or "construction-company" */
  client: string

  businessName: string
  tagline: string
  description: string

  logo: {
    text: string
    icon?: string
  }

  colors: {
    primary: string
    secondary: string
    accent: string
  }

  contact: {
    phone?: string
    email?: string
    address?: string
  }

  nav: Array<{
    label: string
    href: string
  }>

  hero: {
    headline: string
    subheadline: string
    ctaLabel: string
    ctaHref: string
  }

  /**
   * Clients can extend the base config with additional sections.
   * Use specific interfaces for known sections; fall back to unknown for
   * fully custom data to preserve type safety downstream.
   */
  [key: string]: unknown
}
