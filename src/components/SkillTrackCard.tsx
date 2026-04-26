'use client'

import { useState } from 'react'
import type { SkillTrack } from '@/data/learn'

export default function SkillTrackCard({ track }: { track: SkillTrack }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-9 pb-8 transition-colors duration-200 cursor-pointer ${
        hovered ? 'bg-background-secondary' : 'bg-background-primary'
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs tracking-widest text-text-tertiary">
          TRACK_{track.n}
        </span>
        <span className="font-mono text-[11px] text-text-tertiary border border-border px-2.5 py-0.5 rounded">
          {track.weeks}w
        </span>
      </div>

      {/* Slug path in amber */}
      <div className="font-mono text-[13px] text-accent mb-3">~/{track.slug}</div>

      {/* Title */}
      <h3
        className="font-sans font-semibold text-[28px] text-text-primary leading-tight mb-3"
        style={{ letterSpacing: '-0.02em' }}
      >
        {track.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-text-secondary mb-7 max-w-md">
        {track.desc}
      </p>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5 mb-7">
        {track.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] text-text-secondary bg-background-secondary border border-border px-2.5 py-0.5 rounded"
          >
            {s}
          </span>
        ))}
      </div>

      {/* View syllabus link */}
      <div
        className={`flex items-center gap-2 font-mono text-xs transition-colors duration-200 ${
          hovered ? 'text-accent' : 'text-text-tertiary'
        }`}
      >
        <span>view syllabus</span>
        <span
          className="transition-transform duration-200"
          style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
        >
          →
        </span>
      </div>
    </div>
  )
}
