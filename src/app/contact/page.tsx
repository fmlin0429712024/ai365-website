import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | ai365.business',
  description:
    'Discovery calls are 30 minutes. We will tell you honestly whether we can help.',
  openGraph: {
    title: 'Contact | ai365.business',
    description: 'Discovery calls are 30 minutes. We will tell you honestly whether we can help.',
    url: 'https://ai365.business/contact',
    siteName: 'ai365.business',
    type: 'website',
  },
}

const options = [
  {
    eyebrow: '01 / book',
    title: 'Book a call',
    desc: '30-minute discovery, on Calendly. Pick a slot that works.',
    actionLabel: 'Open Calendly →',
    href: 'https://calendly.com/ai365/discovery',
    primary: true,
    mono: false,
  },
  {
    eyebrow: '02 / email',
    title: 'Email',
    desc: 'For RFPs, NDAs, or anything you would rather write down.',
    actionLabel: 'hello@ai365.business',
    href: 'mailto:hello@ai365.business',
    primary: false,
    mono: true,
  },
  {
    eyebrow: '03 / linkedin',
    title: 'LinkedIn',
    desc: 'Background, prior work, and the people behind ai365.',
    actionLabel: 'linkedin.com/company/ai365',
    href: 'https://www.linkedin.com/company/ai365',
    primary: false,
    mono: true,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 py-40">
        <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-6">
          Contact
        </div>
        <h1
          className="font-sans font-semibold text-text-primary mb-7"
          style={{ fontSize: 72, letterSpacing: '-2.2px', lineHeight: 1.04 }}
        >
          Talk to us.
        </h1>
        <p className="text-[20px] leading-relaxed text-text-secondary">
          Discovery calls are 30 minutes. We will tell you honestly whether we
          can help.
        </p>
      </section>

      {/* Contact options — 3-col grid with 1px gap */}
      <section className="max-w-6xl mx-auto px-6 pb-40">
        <div
          className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-xl overflow-hidden"
          style={{ gap: 1, background: '#27272A' }}
        >
          {options.map((opt) => (
            <div
              key={opt.eyebrow}
              className="bg-background-primary p-8 flex flex-col min-h-[280px]"
            >
              <div className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-5">
                {opt.eyebrow}
              </div>
              <div
                className="font-sans font-semibold text-[24px] text-text-primary mb-2.5"
                style={{ letterSpacing: '-0.4px' }}
              >
                {opt.title}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary mb-8 flex-1">
                {opt.desc}
              </p>

              {opt.primary ? (
                <a
                  href={opt.href}
                  className="self-start inline-flex items-center bg-[#EDEDED] text-background-primary font-medium text-sm px-4 py-3 rounded-lg hover:bg-white transition-colors"
                >
                  {opt.actionLabel}
                </a>
              ) : (
                <a
                  href={opt.href}
                  className="self-start font-mono text-[13px] text-text-primary border-b border-zinc-600 pb-0.5 hover:text-accent hover:border-accent transition-colors"
                >
                  {opt.actionLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
