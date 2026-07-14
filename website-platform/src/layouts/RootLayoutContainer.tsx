import { Outlet, useLocation } from 'react-router-dom'
import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Button } from '@components'
import { RootLayout } from './RootLayout'

/**
 * RootLayoutContainer — reads config via useWebsiteConfig() and maps it to
 * the pure RootLayout presentational component.
 *
 * This is the ONLY file in src/layouts/ that calls useWebsiteConfig().
 * RootLayout itself is config-unaware.
 */
export function RootLayoutContainer() {
  const config = useWebsiteConfig()
  const { pathname } = useLocation()

  const logoNode = (
    <a
      href="/"
      className="flex items-center gap-2 font-heading font-bold text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] rounded-sm"
      aria-label={`${config.businessName} — home`}
    >
      {config.logo.icon && (
        <span aria-hidden="true" className="text-[var(--color-primary)]">
          {config.logo.icon}
        </span>
      )}
      {config.logo.text}
    </a>
  )

  const navLinks = config.nav.map((link) => ({
    label: link.label,
    href: link.href,
    active: pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)),
  }))

  const ctaNode = (
    <Button href="/contact" variant="primary" size="sm">
      Get in touch
    </Button>
  )

  const footerNavGroup = {
    group: 'Navigation',
    items: config.nav.map((link) => ({ label: link.label, href: link.href })),
  }

  const contactItems: Array<{ label: string; href: string }> = []
  if (config.contact.email) {
    contactItems.push({ label: config.contact.email, href: `mailto:${config.contact.email}` })
  }
  if (config.contact.phone) {
    contactItems.push({ label: config.contact.phone, href: `tel:${config.contact.phone}` })
  }

  const footerLinks =
    contactItems.length > 0
      ? [footerNavGroup, { group: 'Contact', items: contactItems }]
      : [footerNavGroup]

  const copyright = `© ${new Date().getFullYear()} ${config.businessName}. All rights reserved.`

  return (
    <RootLayout
      navbarProps={{
        logo: logoNode,
        links: navLinks,
        cta: ctaNode,
        sticky: true,
      }}
      footerProps={{
        logo: logoNode,
        tagline: config.tagline,
        links: footerLinks,
        socialLinks: [],
        copyright,
      }}
    >
      <Outlet />
    </RootLayout>
  )
}

export default RootLayoutContainer
