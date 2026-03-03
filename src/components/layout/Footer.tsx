import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'

export function Footer() {
  const { locale } = useLanguage()
  const nav = getContent(locale).navigation

  const moduleLinks = nav.links.find(
    (l) => 'children' in l && l.children,
  ) as { children: { label: string; href: string }[] } | undefined

  return (
    <footer className="bg-navy-950 text-white">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">{nav.brand}</h3>
            <p className="mt-2 text-sm text-slate-400">
              {locale === 'sv'
                ? 'En ny generation av tillgångsfinansiering'
                : 'A new generation of asset financing'}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {locale === 'sv' ? 'Funktioner' : 'Capabilities'}
            </h4>
            <ul className="mt-4 space-y-2">
              {moduleLinks?.children.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Ramn
            </h4>
            <p className="mt-4 text-sm text-slate-400">
              Digital transformation & ventures
            </p>
            <p className="mt-2">
              <a
                href="https://ramn.com"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                ramn.com
              </a>
            </p>
            <p className="mt-2">
              <a
                href="mailto:contact@ramn.com"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                contact@ramn.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ramn. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
