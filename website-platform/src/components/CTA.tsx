import React from 'react'
import clsx from 'clsx'
import { Section } from './Section'
import { Container } from './Container'

export interface CTAProps {
  headline: string
  subheadline?: string
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
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
    return (
      <Section
        spacing={spacing}
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
      className={className}
    >
      {body}
    </Section>
  )
}

export default CTA
