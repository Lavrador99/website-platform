import type { HTMLAttributes, ReactNode, Ref } from 'react'
import clsx from 'clsx'

const sizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
} as const

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: ReactNode
  className?: string
  // React 19: ref is a plain prop — forwardRef is no longer needed.
  ref?: Ref<HTMLDivElement>
}

export function Container({ size = 'lg', children, className, ref, ...rest }: ContainerProps) {
  return (
    <div
      ref={ref}
      className={clsx('mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Container
