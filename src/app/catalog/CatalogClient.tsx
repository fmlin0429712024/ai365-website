'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import CatalogCard from '@/components/CatalogCard'
import FilterChips from '@/components/FilterChips'
import type { CatalogItem, Industry } from '../../../plugin-interface/types'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Manufacturing', value: 'manufacturing' },
  { label: 'Automotive', value: 'automotive' },
  { label: 'Smart Buildings', value: 'smart-buildings' },
  { label: 'Smart Cities', value: 'smart-cities' },
]

type Props = {
  items: CatalogItem[]
}

export default function CatalogClient({ items }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeFilter = searchParams.get('industry') ?? 'all'

  const handleFilterChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === 'all') {
        params.delete('industry')
      } else {
        params.set('industry', value)
      }
      router.push(`/catalog?${params.toString()}`, { scroll: false })
    },
    [router, searchParams]
  )

  const filtered =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.industry.includes(activeFilter as Industry))

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-40 bg-background-primary/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <FilterChips
            filters={FILTERS}
            active={activeFilter}
            onFilterChange={handleFilterChange}
            resultCount={filtered.length}
          />
        </div>
      </div>

      {/* Card grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((item) => (
            <CatalogCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
