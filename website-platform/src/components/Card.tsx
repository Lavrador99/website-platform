import { forwardRef } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

const variantClasses = {
  default: 'bg-[var(--color-surface)] rounded-xl',
  elevated:
    'bg-[var(--color-surface)] rounded-xl shadow-md hover:shadow-lg transition-[box-shadow]',
  outlined: 'bg-transparent border border-[var(--color-border)] rounded-xl',
  ghost: 'bg-transparent rounded-xl',
} as const

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card({ variant = 'default', padding = 'md', children, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={clsx(variantClasses[variant], paddingClasses[padding], className)}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

export default Card
