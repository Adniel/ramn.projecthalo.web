import { Helmet } from '@dr.pogodin/react-helmet'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '@/lib/icons'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ModuleContent {
  meta: { title: string; description: string }
  hero: { title: string; subtitle: string; icon: string }
  overview: { title: string; description: string }
  features: {
    icon: string
    title: string
    description: string
  }[]
  workflow: { title: string; steps: string[] }
  standards: string[]
  relatedModules: { title: string; href: string }[]
}

interface ModulePageTemplateProps {
  content: ModuleContent
}

export function ModulePageTemplate({ content: c }: ModulePageTemplateProps) {
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation()
  const HeroIcon = getIcon(c.hero.icon)

  return (
    <>
      <Helmet>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            {HeroIcon && (
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-teal-400">
                <HeroIcon className="h-8 w-8" />
              </div>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {c.hero.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {c.hero.subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-navy-800">{c.overview.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {c.overview.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={c.hero.title} />
          <div ref={featRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((feat, i) => {
              const Icon = getIcon(feat.icon)
              return (
                <Card
                  key={feat.title}
                  className={cn(
                    'transition-all duration-500',
                    featVisible
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
                  <h3 className="text-base font-semibold text-navy-800">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feat.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={c.workflow.title} />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {c.workflow.steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-800 text-xs text-white">
                    {i + 1}
                  </span>
                  {step}
                </div>
                {i < c.workflow.steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Standards */}
      {c.standards.length > 0 && (
        <section className="border-y border-slate-200 py-12">
          <Container>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Standards
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {c.standards.map((s) => (
                  <Badge key={s} variant="navy">{s}</Badge>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Related Modules */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={c.relatedModules.length > 0 ? 'Related' : ''} />
          <div className="grid gap-4 sm:grid-cols-3">
            {c.relatedModules.map((mod) => (
              <Link
                key={mod.href}
                to={mod.href}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-6 py-4 transition-all hover:shadow-md"
              >
                <span className="font-medium text-navy-800">{mod.title}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
