import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Section } from './Section'
import { Container } from './Container'

export interface HeroProps {
  headline: string
  subheadline?: string
  primaryCta?: ReactNode
  secondaryCta?: ReactNode
  media?: ReactNode
  layout?: 'centered' | 'split'
  className?: string
}

const headlineClasses =
  'font-heading text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl xl:text-7xl'

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
      // aria-label gives the <section> landmark a name for AT landmark navigation
      // — WCAG 1.3.1 Info and Relationships, 2.4.1 Bypass Blocks.
      // Note: the skip-link target id="main-content" lives on the <main> element
      // in RootLayout, NOT here — placing it on both would create a duplicate ID
      // (invalid HTML, WCAG 4.1.1) and cause the skip link to resolve to the
      // first match, which would be the <main>, the correct target anyway.
      <Section aria-label="Hero" spacing="xl" className={className}>
        <Container size="xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <h1 className={headlineClasses}>{headline}</h1>
              {subheadline && (
                <p className="text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
                  {subheadline}
                </p>
              )}
              {hasCtas && (
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {primaryCta}
                  {secondaryCta}
                </div>
              )}
            </div>

                  {/* Media column — visible on mobile (stacked), side-by-side on lg+ */}
            {media && (
              <div className="flex items-center justify-center mt-8 lg:mt-0">
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
    // Note: no id="main-content" here — see split branch comment above.
    <Section aria-label="Hero" spacing="xl" className={clsx('bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)]', className)}>
      <Container size="lg">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className={headlineClasses}>{headline}</h1>
          {subheadline && (
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
              {subheadline}
            </p>
          )}
          {hasCtas && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
