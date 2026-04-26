export interface UseCase {
  title: string
  desc: string
}

export interface Domain {
  id: string
  name: string
  lead: string
  subverticals: string
  useCases: UseCase[]
  slug: string // industry filter slug for /catalog?industry=[slug]
}

export const domains: Domain[] = [
  {
    id: '01',
    name: 'Manufacturing',
    lead: 'We bring AI to the production floor. Predictive maintenance, vision-based quality, and operational intelligence — for plants running on legacy equipment, modern lines, or anything in between.',
    subverticals: 'Discrete manufacturing · Food & beverage · Process industries',
    useCases: [
      { title: 'Predictive maintenance', desc: 'Anticipate failures before they stop the line.' },
      { title: 'Vision quality inspection', desc: 'Catch defects before they ship.' },
      { title: 'OEE intelligence', desc: 'Surface the real reasons for downtime.' },
    ],
    slug: 'manufacturing',
  },
  {
    id: '02',
    name: 'Automotive',
    lead: 'From OEM assembly to tier-1 suppliers and EV battery production, we deliver edge AI for the highest-stakes manufacturing in the world.',
    subverticals: 'OEM assembly · Tier-1 suppliers · EV battery production',
    useCases: [
      { title: 'Line balancing', desc: 'Keep takt times honest.' },
      { title: 'Defect detection', desc: 'Vision systems for paint, weld, and trim.' },
      { title: 'Energy per unit', desc: 'Make every watt count.' },
    ],
    slug: 'automotive',
  },
  {
    id: '03',
    name: 'Smart Buildings',
    lead: "Lower energy spend and improve occupant comfort without rip-and-replace. We work with what's already in your building.",
    subverticals: 'Commercial real estate · Hospitals · Campuses',
    useCases: [
      { title: 'Energy intelligence', desc: 'Find waste, prove savings.' },
      { title: 'Occupancy optimization', desc: 'Heat and cool the rooms people use.' },
      { title: 'Fault detection & diagnostics', desc: 'Catch issues before tenants do.' },
    ],
    slug: 'smart-buildings',
  },
  {
    id: '04',
    name: 'Smart Cities',
    lead: 'Operational intelligence for the spaces, systems, and infrastructure that cities run on.',
    subverticals: 'Municipal infrastructure · Transit · Public facilities',
    useCases: [
      { title: 'Traffic intelligence', desc: 'Turn cameras and sensors into decisions.' },
      { title: 'Public asset monitoring', desc: 'Know when something is breaking.' },
      { title: 'Energy & utilities', desc: 'Manage demand across distributed systems.' },
    ],
    slug: 'smart-cities',
  },
]
