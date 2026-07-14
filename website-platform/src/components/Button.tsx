import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import clsx from 'clsx'

// --- Spinner ---

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// --- Variant / size maps ---

const variantClasses = {
  primary:
    'bg-[var(--color-primary)] text-white hover:opacity-90 hover:-translate-y-0.5',
  secondary:
    'bg-[var(--color-secondary)] text-white hover:opacity-90 hover:-translate-y-0.5',
  outline:
    'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  ghost:
    'text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10',
} as const

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
} as const

const baseClasses =
  'inline-flex items-center gap-2 rounded-md font-medium transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:opacity-50 disabled:pointer-events-none'

// --- Discriminated union for href vs button ---

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  ref?: Ref<HTMLAnchorElement>
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
  ref?: Ref<HTMLButtonElement>
}

type SharedProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
}

export type ButtonProps = SharedProps & (AnchorProps | NativeButtonProps)

// --- Component ---
// React 19: ref is a plain prop — forwardRef is no longer needed.

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)

  const iconLeft = loading ? <Spinner /> : leftIcon

  const content = (
    <>
      {iconLeft}
      {/* When loading, wrap children so screen readers hear "Loading" prefix */}
      {loading ? (
        <>
          <span className="sr-only">Loading, </span>
          {children}
        </>
      ) : (
        children
      )}
      {/* Suppress rightIcon while loading to avoid visual clutter */}
      {!loading && rightIcon}
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    const { href, ref, ...anchorRest } = rest as AnchorProps
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...anchorRest}
      >
        {content}
      </a>
    )
  }

  const { ref, ...buttonRest } = rest as NativeButtonProps
  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      aria-busy={loading || undefined}
      disabled={loading || buttonRest.disabled}
      {...buttonRest}
    >
      {content}
    </button>
  )
}

export default Button
