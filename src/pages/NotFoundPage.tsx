import { Helmet } from '@dr.pogodin/react-helmet'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/i18n/LanguageContext'

export default function NotFoundPage() {
  const { locale } = useLanguage()

  return (
    <>
      <Helmet>
        <title>404 - Project Halo</title>
      </Helmet>
      <section className="flex min-h-[60vh] items-center py-24">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <p className="text-6xl font-bold text-navy-800">404</p>
            <h1 className="mt-4 text-2xl font-semibold text-navy-800">
              {locale === 'sv' ? 'Sidan hittades inte' : 'Page not found'}
            </h1>
            <p className="mt-2 text-slate-600">
              {locale === 'sv'
                ? 'Sidan du letar efter finns inte eller har flyttats.'
                : 'The page you are looking for does not exist or has been moved.'}
            </p>
            <Button href="/" variant="primary" className="mt-8">
              {locale === 'sv' ? 'Tillbaka till startsidan' : 'Back to home'}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
