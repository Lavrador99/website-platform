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

          {/* Link groups */}
          {links && links.length > 0 && (
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
              {links.map((group) => (
                <div key={group.group}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-text)]">
                    {group.group}
                  </h3>
                  <ul className="flex flex-col gap-2 list-none m-0 p-0">
                    {group.items.map((item) => (
                      <li key={`${group.group}:${item.href}`}>
                        <a
                          href={item.href}
                          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[var(--color-border)] py-6 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          {copyright && (
            <p className="text-sm text-[var(--color-text-muted)]">{copyright}</p>
          )}

          {socialLinks && socialLinks.length > 0 && (
            <ul className="flex items-center gap-4 list-none m-0 p-0">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
