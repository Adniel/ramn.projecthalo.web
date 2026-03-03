import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  title: string
  subtitle?: string
  steps: Step[]
}

export function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={cn(
                'relative transition-all duration-500',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 hidden h-px w-[calc(100%-1.5rem)] bg-slate-300 lg:block" />
              )}
              <h3 className="text-lg font-semibold text-navy-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
