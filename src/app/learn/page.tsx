import type { Metadata } from 'next'
import Link from 'next/link'
import { tracks, pathways } from '@/data/learn'
import SkillTrackCard from '@/components/SkillTrackCard'

export const metadata: Metadata = {
  title: 'Learn | ai365.business',
  description:
    'MCP connectors, Claude skills, edge agents. Learn to build industrial AI — real systems, not toy demos.',
  openGraph: {
    title: 'Learn | ai365.business',
    description:
      'MCP connectors, Claude skills, edge agents. Real systems, not toy demos.',
    url: 'https://ai365.business/learn',
    siteName: 'ai365.business',
    type: 'website',
  },
}

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex items-center gap-2.5 mb-7 font-mono text-xs tracking-widest">
          <span className="text-accent" style={{ fontSize: 8 }}>●</span>
          <span className="text-accent">For builders</span>
          <span className="text-text-tertiary">/</span>
          <span className="text-text-tertiary">2025</span>
        </div>

        <h1
          className="font-sans font-semibold text-text-primary leading-tight mb-8"
          style={{
            fontSize: 'clamp(56px, 8vw, 96px)',
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
          }}
        >
          Learn to build
          <br />
          industrial AI.
        </h1>

        <p className="text-[21px] leading-relaxed text-text-secondary max-w-xl mb-14">
          MCP connectors, Claude skills, edge agents.
          <br />
          Real systems, not toy demos.
        </p>

        {/* Mono detail row */}
        <div className="flex flex-wrap gap-8 font-mono text-xs text-text-tertiary tracking-wide mb-10">
          <span>
            <span className="text-text-tertiary">cohort_size</span>
            {' = '}
            <span className="text-text-primary">14</span>
          </span>
          <span>
            <span className="text-text-tertiary">duration</span>
            {' = '}
            <span className="text-text-primary">&quot;12_weeks&quot;</span>
          </span>
          <span>
            <span className="text-text-tertiary">format</span>
            {' = '}
            <span className="text-text-primary">&quot;remote + 2 onsite&quot;</span>
          </span>
          <span>
            <span className="text-text-tertiary">next_start</span>
            {' = '}
            <span className="text-accent">&quot;2026-06-08&quot;</span>
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#tracks"
            className="inline-flex items-center bg-[#EDEDED] text-background-primary font-medium text-sm px-4.5 py-3 rounded-lg hover:bg-white transition-colors"
            style={{ padding: '12px 18px' }}
          >
            See the tracks
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center border border-zinc-600 text-text-primary font-medium text-sm hover:border-zinc-400 transition-colors rounded-lg"
            style={{ padding: '12px 18px' }}
          >
            Talk to us about training
          </Link>
        </div>
      </section>

      {/* Skill tracks */}
      <section id="tracks" className="max-w-6xl mx-auto px-6 pb-32">
        <div className="flex items-baseline justify-between mb-12 gap-8 flex-wrap">
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-4">
              Skill tracks · 04
            </div>
            <h2
              className="font-sans font-semibold text-[48px] text-text-primary leading-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              Four tracks. Pick one, or stack them.
            </h2>
          </div>
          <p className="text-[15px] text-text-tertiary max-w-sm leading-relaxed">
            Each track is project-based. You ship a working system against a real
            industrial dataset.
          </p>
        </div>

        {/* 2×2 grid with 1px gap on border background */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-xl overflow-hidden"
          style={{ gap: 1, background: '#27272A' }}
        >
          {tracks.map((track) => (
            <SkillTrackCard key={track.slug} track={track} />
          ))}
        </div>
      </section>

      {/* Career pathways */}
      <section className="border-t border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="mb-16">
            <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-4">
              Career pathways
            </div>
            <h2
              className="font-sans font-semibold text-[48px] text-text-primary leading-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              What happens after the cohort.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-border">
            {pathways.map((pathway, i) => (
              <div
                key={pathway.tag}
                className={`py-10 ${
                  i === 0 ? 'pr-8' : i === 2 ? 'pl-8' : 'px-8'
                } ${i < 2 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] tracking-widest text-text-tertiary">
                    {pathway.tag}
                  </span>
                  <span className="font-mono text-[11px] text-text-tertiary">
                    · {pathway.meta}
                  </span>
                </div>
                <h3
                  className="font-sans font-semibold text-[24px] text-text-primary leading-tight mb-3"
                  style={{ letterSpacing: '-0.015em' }}
                >
                  {pathway.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-primary mb-4">
                  {pathway.desc}
                </p>
                <p className="text-sm leading-relaxed text-text-tertiary max-w-xs">
                  {pathway.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div
          className="border border-border rounded-xl bg-background-secondary grid md:grid-cols-[1.4fr_1fr] gap-12 items-center"
          style={{ padding: '72px 56px' }}
        >
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-accent mb-5">
              → next cohort · june 8, 2026
            </div>
            <h2
              className="font-sans font-semibold text-[48px] text-text-primary leading-tight mb-5"
              style={{ letterSpacing: '-0.025em', lineHeight: 1.05 }}
            >
              Talk to us about training.
            </h2>
            <p className="text-[17px] leading-relaxed text-text-secondary max-w-md">
              Individual seats, corporate cohorts, or a custom track for your
              team. A 20-minute call is the fastest way to scope it.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-background-primary font-medium text-[15px] px-5 py-3.5 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Talk to us about training <span className="font-mono">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-zinc-600 text-text-primary font-medium text-[15px] px-5 py-3.5 rounded-lg hover:border-zinc-400 transition-colors"
            >
              Apply for the june cohort
            </Link>
            <div className="mt-4 font-mono text-xs text-text-tertiary leading-relaxed">
              <div>● 14 seats per cohort</div>
              <div>● ~12 weeks · remote-first</div>
              <div>● applications close 4 weeks prior</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
