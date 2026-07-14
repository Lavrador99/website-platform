import clsx from 'clsx'

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

export interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  titleAs?: 'h1' | 'h2' | 'h3'
  eyebrow?: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  titleAs: Heading = 'h2',
  eyebrow,
  className,
}: SectionTitleProps) {
  return (
    <div className={clsx('mb-12', alignClasses[align], className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {eyebrow}
        </p>
      )}
      <Heading
        className="font-heading text-3xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl"
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={clsx('mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
