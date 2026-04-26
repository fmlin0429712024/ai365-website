import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { loadCatalog } from '../../../plugin-interface/loader'
import CatalogClient from './CatalogClient'

export const metadata: Metadata = {
  title: 'Catalog | ai365.business',
  description:
    'Claude-powered skills, connectors, and plugins for industrial operations. Browse solutions for manufacturing, automotive, smart buildings, and smart cities.',
  openGraph: {
    title: 'Catalog | ai365.business',
    description:
      'Claude-powered plugins for industrial operations.',
    url: 'https://ai365.business/catalog',
    siteName: 'ai365.business',
    type: 'website',
  },
}

export default async function CatalogPage() {
  const items = await loadCatalog()

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              AI consultancy / 2025
            </span>
          </div>
          <h1 className="font-sans font-semibold text-text-primary leading-none tracking-tight mb-7"
            style={{ fontSize: 'clamp(48px, 7.5vw, 88px)', letterSpacing: '-0.035em' }}>
            AI for industrial<br />
            operations<span className="text-accent">.</span>
          </h1>
          <p className="text-lg leading-relaxed text-text-secondary max-w-xl">
            Skills, connectors, and plugins built on Claude — for manufacturing,
            automotive, smart buildings, and smart cities.
          </p>
        </div>
      </section>

      {/* Filters + grid — client component wrapped in Suspense for useSearchParams */}
      <Suspense fallback={
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.map((item) => (
              <div key={item.slug} className="border border-border rounded-lg p-9 min-h-[280px] animate-pulse bg-background-secondary" />
            ))}
          </div>
        </div>
      }>
        <CatalogClient items={items} />
      </Suspense>

      {/* CTA */}
      <section className="border-t border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-32">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              Discovery
            </span>
          </div>
          <h2 className="font-sans font-semibold text-text-primary leading-tight mb-6"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', letterSpacing: '-0.03em' }}>
            Have a use case in mind
            <span className="text-text-tertiary">?</span>
            <br />
            Let&apos;s talk<span className="text-accent">.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-text-secondary mb-10 max-w-lg">
            30 minutes. We listen, you decide if there&apos;s a fit. No deck, no pitch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-text-primary text-background-primary font-medium text-[15px] px-5 py-3.5 rounded-md hover:bg-white transition-colors"
          >
            Book a discovery call <span className="font-mono">→</span>
          </Link>
          <p className="mt-6 font-mono text-xs text-text-tertiary flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Typical response · under 1 business day
          </p>
        </div>
      </section>
    </>
  )
}
