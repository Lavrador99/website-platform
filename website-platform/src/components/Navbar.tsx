import React, { useState } from 'react'
import clsx from 'clsx'
import { Container } from './Container'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface NavbarProps {
  logo: React.ReactNode
  links: NavLink[]
  cta?: React.ReactNode
  sticky?: boolean
  className?: string
}

export function Navbar({ logo, links, cta, sticky = true, className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleId = 'navbar-mobile-menu'

  return (
    <header
      className={clsx(
        'border-b border-[var(--color-border)]',
        sticky && 'sticky top-0 z-50 backdrop-blur-md bg-[var(--color-background)]/90',
        className,
      )}
    >
      <Container size="xl">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between h-16"
        >
          {/* Logo */}
          <div className="flex-shrink-0">{logo}</div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={clsx(
                    'text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)]',
                    link.active
                      ? 'text-[var(--color-primary)] underline underline-offset-4'
                      : 'text-[var(--color-text)]',
                  )}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          {cta && <div className="hidden md:flex items-center">{cta}</div>}

          {/* Hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
            aria-expanded={mobileOpen}
            aria-controls={toggleId}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              /* X icon */
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu — always in the DOM so aria-controls resolves at all times */}
      <div
        id={toggleId}
        className={clsx('md:hidden border-t border-[var(--color-border)]', !mobileOpen && 'hidden')}
      >
          <Container size="xl">
            <ul className="flex flex-col py-4 gap-1 list-none m-0 px-0">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={clsx(
                      'block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]',
                      link.active
                        ? 'text-[var(--color-primary)] bg-[var(--color-surface)]'
                        : 'text-[var(--color-text)]',
                    )}
                    aria-current={link.active ? 'page' : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {cta && (
              <div className="pb-4 px-3">
                {cta}
              </div>
            )}
          </Container>
      </div>
    </header>
  )
}

export default Navbar
