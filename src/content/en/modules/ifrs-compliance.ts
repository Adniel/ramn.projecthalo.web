export const ifrsCompliance = {
  meta: {
    title: 'IFRS Reporting - Project Halo',
    description: 'Automated IFRS reporting with depreciation, impairment testing and lease accounting that saves time and reduces errors.',
  },
  hero: {
    title: 'IFRS Reporting',
    subtitle: 'Automated financial reporting that saves time and reduces errors. Support for IFRS 16, IAS 16, IAS 36 and IAS 38.',
    icon: 'Calculator',
  },
  overview: {
    title: 'Overview',
    description: 'We help you with all financial reporting related to your assets. Depreciation is calculated automatically, lease accounting per IFRS 16 is handled continuously and impairment testing is performed at the correct level. You get accurate reporting without manual work.',
  },
  features: [
    {
      icon: 'Calculator',
      title: 'Automatic depreciation',
      description: 'Depreciation is calculated and scheduled automatically — straight-line, declining balance or units-of-production.',
    },
    {
      icon: 'FileSpreadsheet',
      title: 'Lease accounting (IFRS 16)',
      description: 'Complete handling of right-of-use assets, lease liabilities and payment schedules. No more manual calculations.',
    },
    {
      icon: 'AlertTriangle',
      title: 'Impairment testing',
      description: 'Automatic identification of impairment indicators and calculation at the correct level per IAS 36.',
    },
    {
      icon: 'Building',
      title: 'Group consolidation',
      description: 'Automatic consolidation with correct ownership calculation for groups with subsidiaries.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Audit-ready reporting',
      description: 'Complete documentation with traceability that makes audits faster and easier.',
    },
  ],
  workflow: {
    title: 'Reporting flow',
    steps: ['Registration', 'Classification', 'Automatic calculation', 'Quality check', 'Reporting'],
  },
  standards: ['IFRS 16', 'IAS 16', 'IAS 36', 'IAS 38', 'IFRS 10'],
  relatedModules: [
    { title: 'Asset Financing', href: '/funktioner/tillgangsfinansiering' },
    { title: 'Group Overview', href: '/funktioner/koncernoverblick' },
    { title: 'Sustainability Reporting', href: '/funktioner/hallbarhetsrapportering' },
  ],
}
