import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: Variant
  children: ReactNode
  className?: string
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-teal-600 text-white hover:bg-teal-700 shadow-sm',
  secondary:
    'border border-navy-800 text-navy-800 hover:bg-navy-50',
  ghost:
    'text-navy-800 hover:bg-slate-100',
}

export function Button({
  variant = 'primary',
  children,
  className,
  href,
  external,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200',
    variants[variant],
    className,
  )

  if (href) {
    if (external || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
