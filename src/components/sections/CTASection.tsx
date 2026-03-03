import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  primaryCtaHref: string
  secondaryCtaHref: string
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryCtaHref,
  secondaryCtaHref,
}: CTASectionProps) {
  return (
    <section className="bg-navy-950 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryCtaHref} variant="primary">
              {primaryCta}
            </Button>
            <Button
              href={secondaryCtaHref}
              variant="secondary"
              className="border-white/30 text-white hover:bg-white/10"
            >
              {secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
