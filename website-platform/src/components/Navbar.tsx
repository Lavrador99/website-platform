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
    <>
      {/* Skip navigation link — WCAG 2.4.1 Bypass Blocks (Level A).
          sr-only hides it visually; focus:not-sr-only makes it visible on focus.
          The target #main-content id must be placed on the page's <main> element. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[var(--color-primary)] focus:text-white focus:font-medium focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>

      <header
        className={clsx(
          'border-b border-[var(--color-border)]',
          sticky && 'sticky top-0 z-50 backdrop-blur-md bg-[var(--color-background)]/90',
          className,
        )}
      >
        <Container size="xl">
          {/* <nav> carries an implicit role="navigation"; no explicit role needed.
              aria-label="Main" disambiguates when multiple nav landmarks exist —
              WCAG 1.3.1 Info and Relationships, 4.1.2 Name Role Value. */}
          <nav
            aria-label="Main"
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
                      'text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]',
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

            {/* Hamburger button — WCAG 4.1.2 Name/Role/Value, 2.1.1 Keyboard.
                aria-expanded communicates open/closed state to screen readers.
                aria-controls points to the menu element (always in DOM).
                focus-visible styles provide a visible keyboard focus indicator. */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              aria-expanded={mobileOpen}
              aria-controls={toggleId}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                /* X icon — decorative; button label carries the meaning */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon — decorative */
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                  focusable="false"
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

        {/* Mobile menu — always in the DOM so aria-controls always resolves to
            a real element (WCAG 4.1.2). When closed, CSS hidden removes it from
            layout and tab order; aria-hidden removes it from the AT tree.
            Both are required: hidden alone doesn't update all AT implementations,
            and aria-hidden alone leaves items keyboard-reachable. */}
        <div
          id={toggleId}
          aria-hidden={!mobileOpen}
          className={clsx(
            'md:hidden border-t border-[var(--color-border)]',
            !mobileOpen && 'hidden',
          )}
        >
          <Container size="xl">
            <ul className="flex flex-col py-4 gap-1 list-none m-0 px-0">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={clsx(
                      'block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]',
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
    </>
  )
}

export default Navbar
