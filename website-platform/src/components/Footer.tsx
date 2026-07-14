import React from 'react'
import clsx from 'clsx'
import { Container } from './Container'

export interface FooterLinkGroup {
  group: string
  items: Array<{ label: string; href: string }>
}

export interface FooterSocialLink {
  label: string
  href: string
  icon: React.ReactNode
}

export interface FooterProps {
  logo: React.ReactNode
  tagline?: string
  links?: FooterLinkGroup[]
  socialLinks?: FooterSocialLink[]
  copyright?: string
  className?: string
}

export function Footer({ logo, tagline, links, socialLinks, copyright, className }: FooterProps) {
  return (
    <footer
      className={clsx(
        'bg-[var(--color-surface)] border-t border-[var(--color-border)]',
        className,
      )}
    >
      <Container size="xl">
        {/* Top row */}
        <div className="py-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto]">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            {logo}
            {tagline && (
              <p className="max-w-xs text-sm text-[var(--color-text-muted)]">{tagline}</p>
            )}
          </div>

          {/* Link groups — each group is wrapped in a <nav> landmark so AT users
              can navigate directly to footer link sections. aria-labelledby ties
              the landmark label to the visible heading — WCAG 1.3.1, 2.4.1. */}
          {links && links.length > 0 && (
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
              {links.map((group) => {
                const headingId = `footer-group-${group.group.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <nav key={group.group} aria-labelledby={headingId}>
                    <h3
                      id={headingId}
                      className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text)]"
                    >
                      {group.group}
                    </h3>
                    <ul className="flex flex-col gap-2 list-none m-0 p-0">
                      {group.items.map((item) => (
                        <li key={`${group.group}:${item.href}`}>
                          <a
                            href={item.href}
                            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] rounded-sm"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )
              })}
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[var(--color-border)] py-6 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          {copyright && (
            <p className="text-sm text-[var(--color-text-muted)]">{copyright}</p>
          )}

          {/* Social links — aria-label on the <a> provides the accessible name
              for icon-only links (WCAG 4.1.2). The <ul> is wrapped in a <nav>
              so AT users can reach the social links as a landmark. Any SVG icons
              passed as social.icon must have aria-hidden="true" and focusable="false"
              at the call site, since this component cannot control their markup. */}
          {socialLinks && socialLinks.length > 0 && (
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-4 list-none m-0 p-0">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
