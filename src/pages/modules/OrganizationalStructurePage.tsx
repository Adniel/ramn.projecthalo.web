import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { ModulePageTemplate } from './ModulePageTemplate'

export default function OrganizationalStructurePage() {
  const { locale } = useLanguage()
  const content = getContent(locale).modules.orgStructure
  return <ModulePageTemplate content={content} />
}
