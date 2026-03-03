import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { ModulePageTemplate } from './ModulePageTemplate'

export default function IFRSCompliancePage() {
  const { locale } = useLanguage()
  const content = getContent(locale).modules.ifrsCompliance
  return <ModulePageTemplate content={content} />
}
