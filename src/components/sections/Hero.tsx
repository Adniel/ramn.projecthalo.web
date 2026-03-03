import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: string
  secondaryCta?: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryCtaHref,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      {/* Geometric SVG overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="80%" cy="30%" r="200" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="20%" cy="70%" r="150" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && primaryCtaHref && (
                <Button href={primaryCtaHref} variant="primary">
                  {primaryCta}
                </Button>
              )}
              {secondaryCta && secondaryCtaHref && (
                <Button
                  href={secondaryCtaHref}
                  variant="secondary"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {secondaryCta}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
