import type { Locale } from '@/i18n/LanguageContext'

import { navigation as svNav } from './sv/navigation'
import { navigation as enNav } from './en/navigation'
import { home as svHome } from './sv/home'
import { home as enHome } from './en/home'
import { platform as svPlatform } from './sv/platform'
import { platform as enPlatform } from './en/platform'
import { contact as svContact } from './sv/contact'
import { contact as enContact } from './en/contact'
import { assetManagement as svAssetMgmt } from './sv/modules/asset-management'
import { assetManagement as enAssetMgmt } from './en/modules/asset-management'
import { ifrsCompliance as svIfrs } from './sv/modules/ifrs-compliance'
import { ifrsCompliance as enIfrs } from './en/modules/ifrs-compliance'
import { daas as svDaas } from './sv/modules/daas'
import { daas as enDaas } from './en/modules/daas'
import { itad as svItad } from './sv/modules/itad'
import { itad as enItad } from './en/modules/itad'
import { csrd as svCsrd } from './sv/modules/csrd'
import { csrd as enCsrd } from './en/modules/csrd'
import { orgStructure as svOrg } from './sv/modules/organizational-structure'
import { orgStructure as enOrg } from './en/modules/organizational-structure'

const content = {
  sv: {
    navigation: svNav,
    home: svHome,
    platform: svPlatform,
    contact: svContact,
    modules: {
      assetManagement: svAssetMgmt,
      ifrsCompliance: svIfrs,
      daas: svDaas,
      itad: svItad,
      csrd: svCsrd,
      orgStructure: svOrg,
    },
  },
  en: {
    navigation: enNav,
    home: enHome,
    platform: enPlatform,
    contact: enContact,
    modules: {
      assetManagement: enAssetMgmt,
      ifrsCompliance: enIfrs,
      daas: enDaas,
      itad: enItad,
      csrd: enCsrd,
      orgStructure: enOrg,
    },
  },
} as const

export function getContent(locale: Locale) {
  return content[locale]
}

export type Content = ReturnType<typeof getContent>
