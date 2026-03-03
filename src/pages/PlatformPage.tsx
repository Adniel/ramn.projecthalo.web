import { Helmet } from '@dr.pogodin/react-helmet'
import { getIcon } from '@/lib/icons'
import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export default function PlatformPage() {
  const { locale } = useLanguage()
  const c = getContent(locale).platform
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation()
  const { ref: layerRef, isVisible: layerVisible } = useScrollAnimation()

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
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {c.hero.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {c.hero.subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Architecture Layers */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title={c.overview.title} subtitle={c.overview.subtitle} />
          <div ref={layerRef} className="space-y-6">
            {c.overview.layers.map((layer, i) => (
              <div
                key={layer.title}
                className={cn(
                  'rounded-xl border border-slate-200 bg-white p-8 transition-all duration-500',
                  layerVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="text-xl font-semibold text-navy-800">{layer.title}</h3>
                <p className="mt-2 text-slate-600">{layer.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading title={c.features.title} />
          <div ref={featRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.items.map((feat, i) => {
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
                  style={{ transitionDelay: `${i * 60}ms` } as React.CSSProperties}
                >
                  {Icon && (
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
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
    </>
  )
}
