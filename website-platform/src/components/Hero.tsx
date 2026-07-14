import React from 'react'
import { Section } from './Section'
import { Container } from './Container'

export interface HeroProps {
  headline: string
  subheadline?: string
  primaryCta?: React.ReactNode
  secondaryCta?: React.ReactNode
  media?: React.ReactNode
  layout?: 'centered' | 'split'
  className?: string
}

const headlineClasses =
  'font-heading text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl'

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  media,
  layout = 'centered',
  className,
}: HeroProps) {
  const hasCtas = primaryCta !== undefined || secondaryCta !== undefined

  if (layout === 'split') {
    return (
      // id="main-content" is the skip-link target placed by the Navbar component.
      // aria-label gives the <section> landmark a name for AT landmark navigation
      // — WCAG 1.3.1 Info and Relationships, 2.4.1 Bypass Blocks.
      <Section id="main-content" aria-label="Hero" spacing="xl" className={className}>
        <Container size="xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <h1 className={headlineClasses}>{headline}</h1>
              {subheadline && (
                <p className="text-lg text-[var(--color-text-muted)] sm:text-xl">
                  {subheadline}
                </p>
              )}
              {hasCtas && (
                <div className="flex flex-wrap items-center gap-4">
                  {primaryCta}
                  {secondaryCta}
                </div>
              )}
            </div>

            {/* Media column — hidden on mobile */}
            {media && (
              <div className="hidden lg:flex items-center justify-center">
                {media}
              </div>
            )}
          </div>
        </Container>
      </Section>
    )
  }

  // centered layout
  return (
    <Section id="main-content" aria-label="Hero" spacing="xl" className={className}>
      <Container size="lg">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className={headlineClasses}>{headline}</h1>
          {subheadline && (
            <p className="max-w-2xl text-lg text-[var(--color-text-muted)] sm:text-xl">
              {subheadline}
            </p>
          )}
          {hasCtas && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {primaryCta}
              {secondaryCta}
            </div>
          )}
          {media && <div className="mt-8 w-full">{media}</div>}
        </div>
      </Container>
    </Section>
  )
}

export default Hero
