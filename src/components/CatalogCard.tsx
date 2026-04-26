import Link from 'next/link'
import type { CatalogItem } from '../../plugin-interface/types'

const industryLabel: Record<string, string> = {
  manufacturing: 'Manufacturing',
  automotive: 'Automotive',
  'smart-buildings': 'Smart Buildings',
  'smart-cities': 'Smart Cities',
}

type Props = {
  item: CatalogItem
}

export default function CatalogCard({ item }: Props) {
  const primaryIndustry = item.industry[0]

  return (
    <article className="group flex flex-col bg-background-primary border border-border rounded-lg p-9 min-h-[280px] transition-colors duration-200 hover:border-zinc-500 hover:bg-background-secondary">
      {/* Meta row */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs tracking-widest text-text-tertiary">
          <span className="text-text-secondary">{item.id}</span> /{' '}
          {industryLabel[primaryIndustry] ?? primaryIndustry}
        </span>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {item.industry.map((ind) => (
            <span
              key={ind}
              className="font-mono text-[11px] tracking-wider uppercase text-text-tertiary border border-border bg-background-secondary px-2 py-0.5 rounded group-hover:border-zinc-600 group-hover:text-text-secondary transition-colors"
            >
              {industryLabel[ind] ?? ind}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-sans font-semibold text-3xl leading-tight tracking-tight text-text-primary mb-4">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-text-secondary mb-8 flex-1 max-w-md">
        {item.description}
      </p>

      {/* CTA link */}
      <Link
        href={item.link}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-amber-400 transition-all group/link"
      >
        {item.status === 'available' ? 'Learn more' : 'Talk to us'}
        <span className="font-mono transition-all group-hover/link:translate-x-1">→</span>
      </Link>
    </article>
  )
}
