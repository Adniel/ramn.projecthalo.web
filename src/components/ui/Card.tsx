import { cn } from '@/lib/utils'
import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export function Card({ children, className, hover = true, style }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white p-6',
        hover && 'transition-shadow duration-200 hover:shadow-lg',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
