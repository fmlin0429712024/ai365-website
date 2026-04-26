import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ai365.business — AI for the operations that move the physical world',
  description:
    'We help industrial companies adopt Claude — building the skills, connectors, and plugins that turn AI into outcomes. Manufacturing, automotive, smart buildings, smart cities.',
  openGraph: {
    title: 'ai365.business — AI for the operations that move the physical world',
    description:
      'Claude-powered skills, connectors, and plugins for industrial operations.',
    url: 'https://ai365.business',
    siteName: 'ai365.business',
    type: 'website',
  },
}

/* ─── Hero ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      {/* Eyebrow */}
      <div className="font-mono text-xs tracking-widest uppercase text-accent mb-6 flex items-center gap-2">
        <span style={{ fontSize: 8 }}>●</span>
        AI consultancy / 2025
      </div>

      {/* Headline */}
      <h1
        className="font-sans font-semibold text-text-primary leading-tight mb-9 max-w-5xl"
        style={{ fontSize: 'clamp(56px, 8vw, 104px)', letterSpacing: '-0.035em', lineHeight: 1.02 }}
      >
        AI for the operations that move the{' '}
        <span className="text-text-tertiary">physical world.</span>
      </h1>

      {/* Subhead */}
      <p className="text-[20px] leading-relaxed text-text-secondary max-w-xl mb-11">
        We help industrial companies adopt Claude — building the skills,
        connectors, and plugins that turn AI into outcomes.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 flex-wrap mb-24">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 bg-text-primary text-background-primary font-medium text-[15px] px-5 py-3.5 rounded-lg hover:bg-white transition-colors"
        >
          See what we do
        </Link>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 border border-zinc-600 text-text-primary font-medium text-[15px] px-5 py-3.5 rounded-lg hover:border-zinc-400 transition-colors"
        >
          Train with us
        </Link>
      </div>

      {/* Mono domain strip */}
      <div className="flex flex-wrap gap-8 font-mono text-xs text-text-tertiary tracking-wide">
        <span><span className="text-text-secondary">01</span>&nbsp;&nbsp;manufacturing</span>
        <span><span className="text-text-secondary">02</span>&nbsp;&nbsp;automotive</span>
        <span><span className="text-text-secondary">03</span>&nbsp;&nbsp;smart buildings</span>
        <span><span className="text-text-secondary">04</span>&nbsp;&nbsp;smart cities</span>
      </div>
    </section>
  )
}

/* ─── Domain Teaser ─────────────────────────────────────────────────── */
function DomainTile({
  kicker,
  title,
  items,
  accent,
}: {
  kicker: string
  title: string
  items: string[]
  accent?: boolean
}) {
  return (
    <Link
      href="/industries"
      className="group flex flex-col justify-between bg-background-secondary border border-border rounded-xl p-10 min-h-[280px] hover:border-zinc-500 transition-colors duration-200 no-underline"
    >
      <div>
        <div
          className={`font-mono text-[11px] tracking-widest uppercase mb-5 ${
            accent ? 'text-accent' : 'text-text-tertiary'
          }`}
        >
          {kicker}
        </div>
        <div
          className="font-sans font-medium text-[32px] text-text-primary leading-tight mb-7"
          style={{ letterSpacing: '-0.02em' }}
        >
          {title}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2.5 text-[15px] text-text-secondary">
            <span
              className={`w-1.5 h-1.5 rounded-full inline-block ${
                accent ? 'bg-accent' : 'bg-text-tertiary'
              }`}
            />
            {item}
          </div>
        ))}
      </div>
    </Link>
  )
}

function DomainTeaser() {
  return (
    <section className="border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-baseline flex-wrap gap-6 mb-12">
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-6">
              Where we work
            </div>
            <h2
              className="font-sans font-semibold text-[40px] text-text-primary leading-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              Industries that run on physical systems.
            </h2>
          </div>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-sm text-text-primary hover:text-accent transition-colors"
          >
            See all industries
            <span className="font-mono transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <DomainTile
            kicker="01 / Asset-intensive"
            title="Manufacturing, Automotive"
            items={['PLC + SCADA', 'Telemetry', 'Maintenance']}
            accent
          />
          <DomainTile
            kicker="02 / Environment-intensive"
            title="Smart Buildings, Smart Cities"
            items={['BMS + HVAC', 'Dispatch', 'Permits']}
          />
        </div>
      </div>
    </section>
  )
}

/* ─── What We Do ────────────────────────────────────────────────────── */
function WhatWeDoBlock({
  num,
  title,
  desc,
  href,
  cta,
}: {
  num: string
  title: string
  desc: string
  href: string
  cta: string
}) {
  return (
    <div className="group flex flex-col p-10 bg-background-primary transition-colors duration-200">
      <div className="font-mono text-[11px] tracking-widest text-text-tertiary mb-14">{num}</div>
      <div
        className="font-sans font-medium text-[28px] text-text-primary mb-4"
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </div>
      <p className="text-[15px] leading-relaxed text-text-secondary mb-8 flex-1">{desc}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm text-text-primary group-hover:text-accent transition-colors"
      >
        {cta}
        <span className="font-mono transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  )
}

function WhatWeDo() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-6">
        How we work
      </div>
      <h2
        className="font-sans font-semibold text-[48px] text-text-primary leading-tight mb-4 max-w-3xl"
        style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
      >
        Three ways we put Claude into industrial work.
      </h2>
      <p className="text-[17px] leading-relaxed text-text-secondary max-w-xl mb-16">
        We deliver outcomes, train the people who can sustain them, and run
        cohorts for teams who want to build their own.
      </p>

      {/* 3-up with 1px gap */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-xl overflow-hidden"
        style={{ gap: 1, background: '#27272A' }}
      >
        <WhatWeDoBlock
          num="01 / Solutions"
          title="Solutions"
          desc="Outcome-focused capabilities packaged from Claude skills and connectors."
          href="/catalog"
          cta="See the catalog"
        />
        <WhatWeDoBlock
          num="02 / Talent"
          title="Talent"
          desc="We train and place professionals into industrial AI roles."
          href="/learn"
          cta="Hire or get hired"
        />
        <WhatWeDoBlock
          num="03 / Training"
          title="Training"
          desc="Cohort programs for engineers and corporate teams."
          href="/learn"
          cta="See cohorts"
        />
      </div>
    </section>
  )
}

/* ─── CTA Close ─────────────────────────────────────────────────────── */
function CtaTile({
  kicker,
  title,
  desc,
  href,
  label,
}: {
  kicker: string
  title: string
  desc: string
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-background-secondary border border-border rounded-xl p-7 min-h-[220px] hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-200 no-underline"
    >
      <div className="font-mono text-[11px] tracking-widest uppercase text-text-tertiary mb-5">
        {kicker}
      </div>
      <div
        className="font-sans font-medium text-[22px] text-text-primary leading-tight mb-3"
        style={{ letterSpacing: '-0.015em' }}
      >
        {title}
      </div>
      <p className="text-sm leading-relaxed text-text-secondary mb-6 flex-1">{desc}</p>
      <div className="font-mono text-[13px] text-text-secondary group-hover:text-accent inline-flex items-center gap-2 transition-colors">
        <span>{label}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}

function CtaClose() {
  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-6">
          Where to next
        </div>
        <h2
          className="font-sans font-semibold text-[40px] text-text-primary leading-tight mb-14"
          style={{ letterSpacing: '-0.025em' }}
        >
          Pick the door that fits.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <CtaTile
            kicker="For operations leaders"
            title="See the catalog of solutions."
            desc="Outcome-priced skills and connectors, ready for pilot."
            href="/catalog"
            label="/catalog"
          />
          <CtaTile
            kicker="For builders and engineers"
            title="Build the next generation of industrial AI."
            desc="Open roles, contract work, and a path into the field."
            href="/learn"
            label="/learn"
          />
          <CtaTile
            kicker="For everyone"
            title="Talk to us."
            desc="A short call beats a long email. Tell us what you run."
            href="/contact"
            label="/contact"
          />
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <DomainTeaser />
      <WhatWeDo />
      <CtaClose />
    </>
  )
}
