import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { ModulePageTemplate } from './ModulePageTemplate'

export default function ITADPage() {
  const { locale } = useLanguage()
  const content = getContent(locale).modules.itad
  return <ModulePageTemplate content={content} />
}
