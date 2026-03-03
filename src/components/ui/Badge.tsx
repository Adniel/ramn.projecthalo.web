import { cn } from '@/lib/utils'

interface BadgeProps {
  children: string
  variant?: 'default' | 'teal' | 'navy'
  className?: string
}

const variants = {
  default: 'bg-slate-100 text-slate-700',
  teal: 'bg-teal-50 text-teal-700',
  navy: 'bg-navy-50 text-navy-800',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
