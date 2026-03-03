import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '@/lib/icons'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface ModuleItem {
  icon: string
  title: string
  description: string
  href: string
}

interface ModulePreviewProps {
  title: string
  subtitle?: string
  items: ModuleItem[]
}

export function ModulePreview({ title, subtitle, items }: ModulePreviewProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:shadow-lg',
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {Icon && (
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 transition-colors group-hover:text-teal-700">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
