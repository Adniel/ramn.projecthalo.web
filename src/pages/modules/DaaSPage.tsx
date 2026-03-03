import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { ModulePageTemplate } from './ModulePageTemplate'

export default function DaaSPage() {
  const { locale } = useLanguage()
  const content = getContent(locale).modules.daas
  return <ModulePageTemplate content={content} />
}
