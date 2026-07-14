import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useWebsiteConfig } from '@hooks/useWebsiteConfig'
import { Button } from '@components'
import type { FooterSocialLink } from '@components'
import { RootLayout } from './RootLayout'

/**
 * RootLayoutContainer — reads config via useWebsiteConfig() and maps it to
 * the pure RootLayout presentational component.
 *
 * This is the ONLY file in src/layouts/ that calls useWebsiteConfig().
 * RootLayout itself is config-unaware.
 *
 * Memoization strategy:
 *  - logoNode / ctaNode: stable JSX — depends only on config, which never
 *    changes at runtime. Memoized to give Navbar/Footer memo-stable references.
 *  - navLinks: must re-derive on every pathname change (active flag per link).
 *    Memoized on [config.nav, pathname] so the array identity is stable between
 *    unrelated re-renders.
 *  - footerLinks / copyright: stable — depends only on config. Memoized once.
 *  - navbarProps / footerProps: object literals passed as props. Without
 *    memoization these are new references every render, which defeats memo()
 *    on Navbar and Footer. Memoized to preserve prop identity.
 */
export function RootLayoutContainer() {
  const config = useWebsiteConfig()
  const { pathname } = useLocation()

  // Stable logo node — only changes if config (businessName / logo) changes,
  // which never happens at runtime for a given client deployment.
  const logoNode = useMemo(
    () => (
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
    ),
    [config.businessName, config.logo.icon, config.logo.text],
  )

  // navLinks legitimately changes on every route transition (active flag).
  // Memoized so the array is a new reference only when pathname or nav config
  // actually changes — not on every unrelated render trigger.
  const navLinks = useMemo(
    () =>
      config.nav.map((link) => ({
        label: link.label,
        href: link.href,
        active: pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)),
      })),
    [config.nav, pathname],
  )

  // Stable CTA node — the href and label never change at runtime.
  const ctaNode = useMemo(
    () => (
      <Button href="/contact" variant="primary" size="sm">
        Get in touch
      </Button>
    ),
    [],
  )

  // Footer link groups — stable for the lifetime of the page.
  const footerLinks = useMemo(() => {
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

    return contactItems.length > 0
      ? [footerNavGroup, { group: 'Contact', items: contactItems }]
      : [footerNavGroup]
  }, [config.nav, config.contact.email, config.contact.phone])

  // Copyright string — stable for the lifetime of the page (year is fixed at
  // load time). Memoized to avoid a string allocation every render.
  const copyright = useMemo(
    () => `© ${new Date().getFullYear()} ${config.businessName}. All rights reserved.`,
    [config.businessName],
  )

  // Memoize the prop objects so that Navbar and Footer (both wrapped in memo)
  // only re-render when their props actually change in value. Without this,
  // every useLocation() update (which fires on every navigation) would create
  // new navbarProps/footerProps object references and defeat memo.
  const navbarProps = useMemo(
    () => ({ logo: logoNode, links: navLinks, cta: ctaNode, sticky: true as const }),
    [logoNode, navLinks, ctaNode],
  )

  const footerProps = useMemo(
    () => ({
      logo: logoNode,
      tagline: config.tagline,
      links: footerLinks,
      socialLinks: [] as FooterSocialLink[],
      copyright,
    }),
    [logoNode, config.tagline, footerLinks, copyright],
  )

  return (
    <RootLayout navbarProps={navbarProps} footerProps={footerProps}>
      <Outlet />
    </RootLayout>
  )
}

export default RootLayoutContainer
