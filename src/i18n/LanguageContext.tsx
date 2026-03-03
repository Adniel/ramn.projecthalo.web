import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Locale = 'sv' | 'en'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: <T>(content: Record<Locale, T>) => T
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('halo-locale') as Locale
      if (stored === 'sv' || stored === 'en') return stored
    }
    return 'sv'
  })

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('halo-locale', newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(<T,>(content: Record<Locale, T>): T => {
    return content[locale]
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
