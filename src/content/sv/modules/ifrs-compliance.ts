export const ifrsCompliance = {
  meta: {
    title: 'IFRS-rapportering - Project Halo',
    description: 'Automatiserad IFRS-rapportering med avskrivningar, impairment-testning och leasingredovisning som sparar tid och minskar fel.',
  },
  hero: {
    title: 'IFRS-rapportering',
    subtitle: 'Automatiserad finansiell rapportering som sparar tid och minskar fel. Stöd för IFRS 16, IAS 16, IAS 36 och IAS 38.',
    icon: 'Calculator',
  },
  overview: {
    title: 'Översikt',
    description: 'Vi hjälper er med all finansiell rapportering kopplad till era tillgångar. Avskrivningar beräknas automatiskt, leasingredovisning enligt IFRS 16 hanteras löpande och impairment-testning genomförs på rätt nivå. Ni får korrekt rapportering utan manuellt arbete.',
  },
  features: [
    {
      icon: 'Calculator',
      title: 'Automatiska avskrivningar',
      description: 'Avskrivningar beräknas och schemaläggs automatiskt — linjärt, degressivt eller produktionsbaserat.',
    },
    {
      icon: 'FileSpreadsheet',
      title: 'Leasingredovisning (IFRS 16)',
      description: 'Komplett hantering av nyttjanderättstillgångar, leasingskulder och betalningsscheman. Ni slipper manuella beräkningar.',
    },
    {
      icon: 'AlertTriangle',
      title: 'Impairment-testning',
      description: 'Automatisk identifiering av nedskrivningsindikatorer och beräkning på rätt nivå enligt IAS 36.',
    },
    {
      icon: 'Building',
      title: 'Koncernkonsolidering',
      description: 'Automatisk konsolidering med korrekt ägarskapsberäkning för koncerner med dotterbolag.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Revisionsklar rapportering',
      description: 'Komplett dokumentation med spårbarhet som gör revisionen snabbare och enklare.',
    },
  ],
  workflow: {
    title: 'Rapporteringsflöde',
    steps: ['Registrering', 'Klassificering', 'Automatisk beräkning', 'Kvalitetskontroll', 'Rapportering'],
  },
  standards: ['IFRS 16', 'IAS 16', 'IAS 36', 'IAS 38', 'IFRS 10'],
  relatedModules: [
    { title: 'Tillgångsfinansiering', href: '/funktioner/tillgangsfinansiering' },
    { title: 'Koncernöverblick', href: '/funktioner/koncernoverblick' },
    { title: 'Hållbarhetsrapportering', href: '/funktioner/hallbarhetsrapportering' },
  ],
}
