import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { ModulePageTemplate } from './ModulePageTemplate'

export default function CSRDPage() {
  const { locale } = useLanguage()
  const content = getContent(locale).modules.csrd
  return <ModulePageTemplate content={content} />
}
