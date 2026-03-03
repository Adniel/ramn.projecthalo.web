import { useLanguage } from '@/i18n/LanguageContext'
import { getContent } from '@/content'
import { ModulePageTemplate } from './ModulePageTemplate'

export default function AssetManagementPage() {
  const { locale } = useLanguage()
  const content = getContent(locale).modules.assetManagement
  return <ModulePageTemplate content={content} />
}
