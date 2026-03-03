import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { Hero } from '@/components/sections/Hero'
import { ValueGrid } from '@/components/sections/ValueGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { UseCases } from '@/components/sections/UseCases'
import { ModulePreview } from '@/components/sections/ModulePreview'
import { CTASection } from '@/components/sections/CTASection'
import { StandardsBar } from '@/components/sections/StandardsBar'

export default function HomePage() {
  const { locale } = useLanguage()
  const c = getContent(locale).home

  return (
    <>
      <Helmet>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
      </Helmet>
      <Hero
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
        primaryCtaHref={c.hero.primaryCtaHref}
        secondaryCtaHref={c.hero.secondaryCtaHref}
      />
      <ValueGrid
        title={c.values.title}
        subtitle={c.values.subtitle}
        items={c.values.items}
      />
      <ProcessSteps
        title={c.process.title}
        subtitle={c.process.subtitle}
        steps={c.process.steps}
      />
      <UseCases
        title={c.useCases.title}
        subtitle={c.useCases.subtitle}
        items={c.useCases.items}
      />
      <ModulePreview
        title={c.modules.title}
        subtitle={c.modules.subtitle}
        items={c.modules.items}
      />
      <StandardsBar title={c.standards.title} items={c.standards.items} />
      <CTASection
        title={c.cta.title}
        description={c.cta.description}
        primaryCta={c.cta.primaryCta}
        secondaryCta={c.cta.secondaryCta}
        primaryCtaHref={c.cta.primaryCtaHref}
        secondaryCtaHref={c.cta.secondaryCtaHref}
      />
    </>
  )
}
