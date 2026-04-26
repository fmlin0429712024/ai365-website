export type Industry =
  | 'manufacturing'
  | 'automotive'
  | 'smart-buildings'
  | 'smart-cities'

export interface CatalogItem {
  id: string
  title: string
  description: string
  industry: Industry[]
  slug: string
  status: 'available' | 'coming-soon'
  link: string
  tags: string[]
  // Detail page fields
  what_it_does?: string[]
  use_case?: string
  data_needed?: string[]
  outcome_metrics?: string[]
}
