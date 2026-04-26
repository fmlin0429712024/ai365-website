import type { Metadata } from 'next'
import Link from 'next/link'
import { domains } from '@/data/industries'
import IndustrySection from '@/components/IndustrySection'

export const metadata: Metadata = {
  title: 'Industries | ai365.business',
  description:
    'Four domains, one technology stack. Claude-powered AI for manufacturing, automotive, smart buildings, and smart cities.',
  openGraph: {
    title: 'Industries | ai365.business',
    description:
      'Claude-powered AI for manufacturing, automotive, smart buildings, and smart cities.',
    url: 'https://ai365.business/industries',
    siteName: 'ai365.business',
    type: 'website',
  },
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-accent text-[8px]">●</span>
          <span className="font-mono text-xs tracking-widest uppercase text-accent">
            Industries / 2025
          </span>
        </div>
        <h1
          className="font-sans font-semibold text-text-primary leading-none mb-14"
          style={{
            fontSize: 'clamp(56px, 8.4vw, 112px)',
            letterSpacing: '-0.035em',
            lineHeight: 0.98,
          }}
        >
          Built for the floor
          <br />
          and the field.
        </h1>
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-end">
          <div className="border-t border-border pt-4 font-mono text-xs text-text-tertiary leading-relaxed tracking-wider">
            <div className="text-text-secondary mb-1">04 domains</div>
            <div>01 stack · Claude-powered</div>
          </div>
          <p
            className="text-[22px] leading-snug text-text-secondary max-w-2xl"
            style={{ letterSpacing: '-0.005em' }}
          >
            Four domains, one technology stack. We bring Claude-powered AI to
            the operations that move the physical world.
          </p>
        </div>
      </section>

      {/* Domain framing — asset vs environment */}
      <section className="border-t border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-16 pb-6">
            <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              How we group what we do
            </span>
          </div>
          <div className="grid md:grid-cols-2 border-t border-border">
            {[
              {
                tag: 'Group A',
                title: 'Asset-intensive operations',
                body: 'Where the machines, lines, and products are the subject. Manufacturing and Automotive.',
                domains: ['01 Manufacturing', '02 Automotive'],
              },
              {
                tag: 'Group B',
                title: 'Environment-intensive operations',
                body: 'Where the space, occupants, and infrastructure are the subject. Smart Buildings and Smart Cities.',
                domains: ['03 Smart Buildings', '04 Smart Cities'],
              },
            ].map((group, i) => (
              <div
                key={group.tag}
                className={`px-12 py-14 ${i === 1 ? 'border-t md:border-t-0 md:border-l border-border' : ''}`}
              >
                <div className="font-mono text-[11px] tracking-widest uppercase text-text-tertiary mb-6">
                  {group.tag}
                </div>
                <h3
                  className="font-sans font-semibold text-[32px] text-text-primary leading-tight mb-4 max-w-sm"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {group.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-text-secondary max-w-md mb-10">
                  {group.body}
                </p>
                <div className="flex flex-col gap-2">
                  {group.domains.map((d) => (
                    <div key={d} className="font-mono text-[13px] text-text-tertiary">
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four domain sections */}
      {domains.map((domain, i) => (
        <IndustrySection key={domain.id} domain={domain} reversed={i % 2 === 1} />
      ))}

      {/* Closing CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-40">
          <div className="grid md:grid-cols-2 gap-24 items-end">
            <div>
              <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-8">
                Adjacent domains
              </div>
              <h2
                className="font-sans font-semibold text-text-primary leading-tight"
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  letterSpacing: '-0.025em',
                }}
              >
                Don&apos;t see your industry?
                <br />
                <span className="text-text-tertiary">
                  We work in adjacent domains too.
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-8 items-start pb-2">
              <p className="text-[16px] leading-relaxed text-text-secondary max-w-md">
                Logistics, utilities, agriculture, mining — if it&apos;s an operation
                that moves the physical world, the stack is the same. Tell us
                what you run.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#EDEDED] text-background-primary font-medium text-[15px] px-5 py-3.5 rounded-lg hover:bg-white transition-colors"
              >
                Talk to us <span className="font-mono">→</span>
              </Link>
              <p className="font-mono text-xs text-text-tertiary">
                hello@ai365.business · response in 1 business day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
