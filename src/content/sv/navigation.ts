export const navigation = {
  brand: 'Project Halo',
  tagline: 'by Ramn',
  links: [
    { label: 'Hem', href: '/' },
    { label: 'Lösningen', href: '/losningen' },
    {
      label: 'Funktioner',
      children: [
        { label: 'Tillgångsfinansiering', href: '/funktioner/tillgangsfinansiering' },
        { label: 'IFRS-rapportering', href: '/funktioner/ifrs-rapportering' },
        { label: 'Enhetsfinansiering (DaaS)', href: '/funktioner/enhetsfinansiering' },
        { label: 'Värdeåtervinning', href: '/funktioner/vardeatervinning' },
        { label: 'Hållbarhetsrapportering', href: '/funktioner/hallbarhetsrapportering' },
        { label: 'Koncernöverblick', href: '/funktioner/koncernoverblick' },
      ],
    },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  langSwitch: 'EN',
  cta: 'Boka demo',
}
