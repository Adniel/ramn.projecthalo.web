import { getIcon } from '@/lib/icons'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface ValueItem {
  icon: string
  title: string
  description: string
}

interface ValueGridProps {
  title: string
  subtitle?: string
  items: ValueItem[]
}

export function ValueGrid({ title, subtitle, items }: ValueGridProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div
          ref={ref}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <Card
                key={item.title}
                className={cn(
                  'transition-all duration-500',
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${i * 80}ms` } as React.CSSProperties}
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
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
