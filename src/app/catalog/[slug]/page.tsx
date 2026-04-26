import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { loadCatalog, loadCatalogItem, loadAllSlugs } from '../../../../plugin-interface/loader'
import Button from '@/components/Button'

const industryLabel: Record<string, string> = {
  manufacturing: 'Manufacturing',
  automotive: 'Automotive',
  'smart-buildings': 'Smart Buildings',
  'smart-cities': 'Smart Cities',
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await loadAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await loadCatalogItem(params.slug)
  if (!item) return {}
  return {
    title: `${item.title} | ai365.business`,
    description: item.description,
    openGraph: {
      title: `${item.title} | ai365.business`,
      description: item.description,
      url: `https://ai365.business/catalog/${item.slug}`,
      siteName: 'ai365.business',
      type: 'website',
    },
  }
}

export default async function PluginDetailPage({ params }: Props) {
  const item = await loadCatalogItem(params.slug)
  if (!item) notFound()

  const all = await loadCatalog()
  const currentIndex = all.findIndex((i) => i.slug === item.slug)
  const prev = all[currentIndex - 1]
  const next = all[currentIndex + 1]

  return (
    <>
      {/* Back breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/catalog"
            className="font-mono text-xs tracking-widest uppercase text-text-tertiary hover:text-text-secondary transition-colors flex items-center gap-1.5"
          >
            <span className="font-mono">←</span> Catalog
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              {item.id} / {industryLabel[item.industry[0]] ?? item.industry[0]}
            </span>
          </div>
          <h1
            className="font-sans font-semibold text-text-primary leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.03em' }}
          >
            {item.title}
          </h1>
          <p className="text-xl leading-relaxed text-text-secondary max-w-2xl">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] tracking-wider uppercase text-text-tertiary border border-border bg-background-secondary px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      {item.what_it_does && item.what_it_does.length > 0 && (
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[200px_1fr] gap-12">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                What it does
              </span>
            </div>
            <div className="space-y-4">
              {item.what_it_does.map((sentence, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-text-secondary">
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries + Use case */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* Industries */}
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary block mb-5">
              Industries
            </span>
            <div className="flex flex-wrap gap-2">
              {item.industry.map((ind) => (
                <Link
                  key={ind}
                  href={`/catalog?industry=${ind}`}
                  className="text-sm font-medium text-text-primary border border-border px-3 py-1.5 rounded hover:border-zinc-500 transition-colors"
                >
                  {industryLabel[ind] ?? ind}
                </Link>
              ))}
            </div>
          </div>

          {/* Typical use case */}
          {item.use_case && (
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary block mb-5">
                Typical use case
              </span>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                {item.use_case}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Data needed + Outcome metrics */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {item.data_needed && item.data_needed.length > 0 && (
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary block mb-5">
                What data it needs
              </span>
              <ul className="space-y-3">
                {item.data_needed.map((d, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-text-secondary">
                    <span className="font-mono text-text-tertiary mt-0.5 shrink-0">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.outcome_metrics && item.outcome_metrics.length > 0 && (
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary block mb-5">
                Outcome metrics
              </span>
              <ul className="space-y-3">
                {item.outcome_metrics.map((m, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-text-secondary">
                    <span className="font-mono text-text-tertiary mt-0.5 shrink-0">—</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2
            className="font-sans font-semibold text-text-primary mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.025em' }}
          >
            Interested? Let&apos;s talk<span className="text-accent">.</span>
          </h2>
          <p className="text-[17px] text-text-secondary mb-8 max-w-md">
            Discovery calls are 30 minutes. We&apos;ll tell you honestly whether we can help.
          </p>
          <Button href="/contact" variant="primary">
            Talk to us →
          </Button>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <nav className="border-b border-border" aria-label="Plugin navigation">
          <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 gap-4">
            <div>
              {prev && (
                <Link
                  href={`/catalog/${prev.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary group-hover:text-text-secondary transition-colors">
                    ← Previous
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-accent transition-colors">
                    {prev.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link
                  href={`/catalog/${next.slug}`}
                  className="group flex flex-col gap-1 items-end"
                >
                  <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary group-hover:text-text-secondary transition-colors">
                    Next →
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-accent transition-colors">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
