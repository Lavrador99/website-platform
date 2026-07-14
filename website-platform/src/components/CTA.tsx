import type { ReactNode } from 'react'
import clsx from 'clsx'
import { Section } from './Section'
import { Container } from './Container'

export interface CTAProps {
  headline: string
  subheadline?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  background?: 'primary' | 'surface' | 'gradient'
  /**
   * Controls vertical padding. Defaults to 'lg'. Applied consistently across
   * all background variants — previously the gradient branch hardcoded its own
   * spacing independent of the Section spacing system.
   */
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const ctaHeadlineClasses =
  'font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl'

export function CTA({
  headline,
  subheadline,
  primaryAction,
  secondaryAction,
  background = 'primary',
  spacing = 'lg',
  className,
}: CTAProps) {
  const hasActions = primaryAction !== undefined || secondaryAction !== undefined

  const body = (
    <Container size="lg">
      {/* h2 is correct here — CTA sections always appear below an h1 Hero.
          Heading level should be adjusted if the document outline requires it
          by passing a different element via the caller. WCAG 1.3.1. */}
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className={ctaHeadlineClasses}>{headline}</h2>
        {subheadline && (
          <p
            className={clsx(
              'max-w-2xl text-lg',
              background === 'surface'
                ? 'text-[var(--color-text-muted)]'
                : 'opacity-90',
            )}
          >
            {subheadline}
          </p>
        )}
        {hasActions && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryAction}
            {secondaryAction}
          </div>
        )}
      </div>
    </Container>
  )

  if (background === 'gradient') {
    // White text on the gradient (primary #2563eb → secondary #7c3aed) yields
    // ~4.75:1 at the lightest point (primary end). This passes 4.5:1 for normal
    // text at the design token values but should be re-verified if tokens change.
    // aria-label on the <section> gives the region an accessible name so AT users
    // can identify it in the landmarks list — WCAG 1.3.6, 2.4.6.
    return (
      <Section
        spacing={spacing}
        aria-label={headline}
        className={clsx(
          'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white',
          className,
        )}
      >
        {body}
      </Section>
    )
  }

  return (
    <Section
      background={background === 'primary' ? 'primary' : 'surface'}
      spacing={spacing}
      aria-label={headline}
      className={className}
    >
      {body}
    </Section>
  )
}

export default CTA
