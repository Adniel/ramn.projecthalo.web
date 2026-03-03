import { icons } from 'lucide-react'

export type IconName = keyof typeof icons

export function getIcon(name: string) {
  return icons[name as IconName] ?? null
}
