export const orgStructure = {
  meta: {
    title: 'Koncernöverblick - Project Halo',
    description: 'Se hela koncernen med aggregerade nyckeltal, dotterbolag och konsolidering.',
  },
  hero: {
    title: 'Koncernöverblick',
    subtitle: 'Se hela koncernen i en samlad vy — med aggregerade nyckeltal, dotterbolagsöversikt och automatisk konsolidering.',
    icon: 'Network',
  },
  overview: {
    title: 'Översikt',
    description: 'Ni får en samlad bild av hela koncernens tillgångar, oavsett hur komplex er struktur är. Dotterbolag, affärsområden och avdelningar visas i en tydlig hierarki med automatiskt aggregerade nyckeltal. Ni ser snabbt var värdena finns och hur de utvecklas.',
  },
  features: [
    {
      icon: 'GitBranch',
      title: 'Tydlig koncernstruktur',
      description: 'Visualisera er organisation med företag, affärsområden och avdelningar i en överskådlig hierarki.',
    },
    {
      icon: 'Building',
      title: 'Dotterbolagsöversikt',
      description: 'Automatisk beräkning av ägande och konsolidering — oavsett hur många nivåer er koncern har.',
    },
    {
      icon: 'Clock',
      title: 'Historisk jämförelse',
      description: 'Se hur organisationen och dess nyckeltal har utvecklats över tid.',
    },
    {
      icon: 'Layers',
      title: 'Aggregerade nyckeltal',
      description: 'Nyckeltal som bokfört värde, avskrivningar och tillgångsantal summeras automatiskt uppåt i hierarkin.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Korrekt tilldelning',
      description: 'Säkerställ att varje tillgång är kopplad till rätt enhet för korrekt rapportering och uppföljning.',
    },
  ],
  workflow: {
    title: 'Så får ni överblick',
    steps: ['Definiera struktur', 'Koppla tillgångar', 'Beräkna ägande', 'Samla nyckeltal', 'Rapportera'],
  },
  standards: ['IFRS 10', 'IAS 36'],
  relatedModules: [
    { title: 'Tillgångsfinansiering', href: '/funktioner/tillgangsfinansiering' },
    { title: 'IFRS-rapportering', href: '/funktioner/ifrs-rapportering' },
    { title: 'Hållbarhetsrapportering', href: '/funktioner/hallbarhetsrapportering' },
  ],
}
