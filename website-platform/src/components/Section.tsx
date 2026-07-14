import React from 'react'
import clsx from 'clsx'

const spacingClasses = {
  none: 'py-0',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
} as const

const backgroundClasses = {
  default: 'bg-[var(--color-background)]',
  surface: 'bg-[var(--color-surface)]',
  primary: 'bg-[var(--color-primary)] text-white',
  transparent: 'bg-transparent',
} as const

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'surface' | 'primary' | 'transparent'
  children: React.ReactNode
}

export function Section({
  as: Tag = 'section',
  spacing = 'lg',
  background = 'default',
  children,
  className,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={clsx(spacingClasses[spacing], backgroundClasses[background], className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Section
