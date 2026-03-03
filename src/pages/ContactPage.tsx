import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const { locale } = useLanguage()
  const c = getContent(locale).contact

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

      {/* Content */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <form
                action={`mailto:${c.info.email}`}
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
                    {c.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={c.form.namePlaceholder}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
                    {c.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={c.form.emailPlaceholder}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-800">
                    {c.form.company}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={c.form.companyPlaceholder}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
                    {c.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <Button type="submit" variant="primary">
                  {c.form.submit}
                </Button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              <Card hover={false}>
                <h3 className="text-lg font-semibold text-navy-800">{c.info.title}</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <a href={`mailto:${c.info.email}`} className="hover:text-teal-600">
                      {c.info.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                    <a
                      href={`https://${c.info.website}`}
                      className="hover:text-teal-600"
                    >
                      {c.info.website}
                    </a>
                  </div>
                  <p className="text-sm text-slate-500">{c.info.description}</p>
                </div>
              </Card>

              <Card hover={false} className="bg-navy-950 !border-navy-900">
                <h3 className="text-lg font-semibold text-white">{c.info.cta}</h3>
                <p className="mt-2 text-sm text-slate-300">{c.info.ctaDescription}</p>
                <Button
                  href={`mailto:${c.info.email}?subject=${encodeURIComponent(c.info.cta)}`}
                  variant="primary"
                  className="mt-4"
                >
                  {c.info.cta}
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
