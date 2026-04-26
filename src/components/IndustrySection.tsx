'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Domain } from '@/data/industries'

function UseCaseRow({ idx, title, desc }: { idx: number; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`py-7 grid gap-6 transition-colors duration-200 border-b ${
        hovered ? 'border-zinc-500' : 'border-border'
      }`}
      style={{ gridTemplateColumns: '40px 1fr' }}
    >
      <div
        className={`font-mono text-xs tracking-widest pt-1 transition-colors duration-200 ${
          hovered ? 'text-accent' : 'text-text-tertiary'
        }`}
      >
        {String(idx).padStart(2, '0')}
      </div>
      <div>
        <div className="text-[18px] font-medium text-text-primary tracking-tight mb-1.5">
          {title}
        </div>
        <div className="text-sm leading-relaxed text-text-secondary max-w-md">
          {desc}
        </div>
      </div>
    </div>
  )
}

type Props = {
  domain: Domain
  reversed?: boolean
}

export default function IndustrySection({ domain, reversed = false }: Props) {
  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-32">
        {/* Label row */}
        <div className="flex items-baseline gap-6 mb-12">
          <div className="font-mono text-sm tracking-wide shrink-0">
            <span className="text-accent">{domain.id}</span>
            <span className="text-text-tertiary"> / {domain.name}</span>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Two-column content */}
        <div
          className={`grid gap-24 items-start ${
            reversed ? 'md:grid-cols-[1fr_1.1fr]' : 'md:grid-cols-[1.1fr_1fr]'
          }`}
        >
          {/* Title + lead + sub-verticals + link */}
          <div className={reversed ? 'md:order-2' : 'md:order-1'}>
            <h2
              className="font-sans font-semibold text-text-primary leading-none mb-8"
              style={{
                fontSize: 'clamp(48px, 5.6vw, 80px)',
                letterSpacing: '-0.03em',
              }}
            >
              {domain.name}
            </h2>
            <p className="text-[19px] leading-relaxed text-text-secondary max-w-xl mb-10"
              style={{ letterSpacing: '-0.003em' }}>
              {domain.lead}
            </p>
            <p className="font-mono text-[13px] text-text-tertiary leading-relaxed mb-14">
              {domain.subverticals}
            </p>
            <Link
              href={`/catalog?industry=${domain.slug}`}
              className="inline-flex items-center gap-2 text-sm text-text-primary border-b border-zinc-600 pb-1.5 hover:border-text-secondary transition-colors"
            >
              See related solutions{' '}
              <span className="text-accent font-mono">→</span>
            </Link>
          </div>

          {/* Use cases */}
          <div className={reversed ? 'md:order-1' : 'md:order-2'}>
            <div className="font-mono text-[11px] tracking-widest uppercase text-text-tertiary mb-6">
              Example use cases
            </div>
            <div className="border-t border-border">
              {domain.useCases.map((uc, i) => (
                <UseCaseRow key={i} idx={i + 1} title={uc.title} desc={uc.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
