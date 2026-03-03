export const navigation = {
  brand: 'Project Halo',
  tagline: 'by Ramn',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Solution', href: '/losningen' },
    {
      label: 'Capabilities',
      children: [
        { label: 'Asset Financing', href: '/funktioner/tillgangsfinansiering' },
        { label: 'IFRS Reporting', href: '/funktioner/ifrs-rapportering' },
        { label: 'Device Financing (DaaS)', href: '/funktioner/enhetsfinansiering' },
        { label: 'Value Recovery', href: '/funktioner/vardeatervinning' },
        { label: 'Sustainability Reporting', href: '/funktioner/hallbarhetsrapportering' },
        { label: 'Group Overview', href: '/funktioner/koncernoverblick' },
      ],
    },
    { label: 'Contact', href: '/kontakt' },
  ],
  langSwitch: 'SV',
  cta: 'Book demo',
}
