import { Link, useLocation } from 'react-router-dom'
import { X, Globe } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { locale, setLocale } = useLanguage()
  const content = getContent(locale).navigation
  const location = useLocation()

  const toggleLang = () => {
    setLocale(locale === 'sv' ? 'en' : 'sv')
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <span className="text-lg font-bold text-navy-800">{content.brand}</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-50"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {content.links.map((link) =>
            'children' in link && link.children ? (
              <div key={link.label}>
                <span className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {link.label}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={onClose}
                    className={cn(
                      'block rounded-lg px-3 py-2 pl-6 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-800',
                      location.pathname === child.href && 'bg-slate-50 font-medium text-navy-800',
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                to={(link as { href: string }).href}
                onClick={onClose}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-800',
                  location.pathname === (link as { href: string }).href && 'text-navy-800',
                )}
              >
                {link.label}
              </Link>
            ),
          )}

          <hr className="my-2 border-slate-200" />

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-navy-800"
          >
            <Globe className="h-4 w-4" />
            {content.langSwitch}
          </button>

          <div className="mt-4">
            <Button href="/kontakt" className="w-full" variant="primary">
              {content.cta}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
