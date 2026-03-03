import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'

interface StandardsBarProps {
  title: string
  items: string[]
}

export function StandardsBar({ title, items }: StandardsBarProps) {
  return (
    <section className="border-y border-slate-200 py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            {title}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {items.map((item) => (
              <Badge key={item} variant="navy">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
