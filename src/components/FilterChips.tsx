'use client'

type Filter = {
  label: string
  value: string
}

type Props = {
  filters: Filter[]
  active: string
  onFilterChange: (value: string) => void
  resultCount: number
}

export default function FilterChips({
  filters,
  active,
  onFilterChange,
  resultCount,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-6 flex-wrap">
      <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter by industry">
        {filters.map((f) => (
          <button
            key={f.value}
            role="tab"
            aria-selected={active === f.value}
            onClick={() => onFilterChange(f.value)}
            className={`text-sm font-medium px-3.5 py-2 rounded-full border transition-all ${
              active === f.value
                ? 'bg-accent border-accent text-background-primary'
                : 'border-border text-text-secondary hover:border-zinc-500 hover:text-text-primary bg-transparent'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <span className="font-mono text-xs tracking-widest text-text-tertiary whitespace-nowrap">
        {resultCount} {resultCount === 1 ? 'solution' : 'solutions'}
        {active === 'all' ? ' · showing all' : ` · ${active.replace('-', ' ')}`}
      </span>
    </div>
  )
}
