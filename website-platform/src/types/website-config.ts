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

  about?: {
    headline: string
    /** 2-3 paragraph narrative, paragraphs separated by \n\n */
    body: string
    values: Array<{
      icon: string
      title: string
      description: string
    }>
    team?: Array<{
      name: string
      role: string
      bio: string
      /** Initials displayed in the avatar circle, e.g. "JD" for John Doe */
      avatarInitials: string
    }>
  }

  services?: {
    headline: string
    subheadline?: string
    items: Array<{
      icon: string
      title: string
      description: string
      features: string[]
    }>
  }

  portfolio?: {
    headline: string
    subheadline?: string
    items: Array<{
      title: string
      category: string
      description: string
      tags: string[]
      /** CSS color for the card accent bar. Falls back to var(--color-primary). */
      accentColor?: string
    }>
  }

  /**
   * CMS-driven contact page configuration.
   * Distinct from `contact` (phone/email/address) — this configures the form.
   */
  contactPage?: {
    headline: string
    subheadline?: string
    formFields: Array<{
      name: string
      label: string
      type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
      placeholder?: string
      required?: boolean
      /** Valid only when type === 'select' */
      options?: string[]
    }>
    successMessage?: string
  }

  /**
   * Clients can extend the base config with additional sections.
   * Use specific interfaces for known sections; fall back to unknown for
   * fully custom data to preserve type safety downstream.
   */
  [key: string]: unknown
}
