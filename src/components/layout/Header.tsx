import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Globe, Menu } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const { locale, setLocale } = useLanguage()
  const content = getContent(locale).navigation
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const toggleLang = () => setLocale(locale === 'sv' ? 'en' : 'sv')

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-shadow duration-200',
          scrolled ? 'shadow-sm border-slate-200' : 'border-transparent',
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-navy-800">
                {content.brand}
              </span>
              <span className="text-xs text-slate-500">{content.tagline}</span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {content.links.map((link) =>
                'children' in link && link.children ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-800',
                        location.pathname.startsWith('/funktioner') && 'text-navy-800',
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          dropdownOpen && 'rotate-180',
                        )}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              'block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-800',
                              location.pathname === child.href &&
                                'bg-slate-50 font-medium text-navy-800',
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={(link as { href: string }).href}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-800',
                      location.pathname === (link as { href: string }).href &&
                        'text-navy-800',
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <button
                onClick={toggleLang}
                className="ml-2 flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-navy-800"
              >
                <Globe className="h-4 w-4" />
                {content.langSwitch}
              </button>

              <Button href="/kontakt" className="ml-2" variant="primary">
                {content.cta}
              </Button>
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
