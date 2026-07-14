import type { HTMLAttributes, ReactNode, Ref } from 'react'
import clsx from 'clsx'

const variantClasses = {
  default: 'bg-[var(--color-surface)] rounded-xl',
  elevated:
    'bg-[var(--color-surface)] rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-[transform,box-shadow] duration-300',
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
  // React 19: ref is a plain prop — forwardRef is no longer needed.
  ref?: Ref<HTMLDivElement>
}

export function Card({ variant = 'default', padding = 'md', children, className, ref, ...rest }: CardProps) {
  return (
    <div
      ref={ref}
      className={clsx(variantClasses[variant], paddingClasses[padding], className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Card
