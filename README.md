# ai365.business

Marketing website for [ai365.business](https://ai365.business) — a small AI consultancy specializing in industrial operations. We build Claude-powered skills, connectors, and plugins for manufacturing, automotive, smart buildings, and smart cities.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript and App Router
- **Styling**: Tailwind CSS with ai365 design tokens
- **Fonts**: Geist Sans + Geist Mono (local)
- **PWA**: next-pwa with service worker
- **Hosting**: Vercel (Hobby tier)
- **Domain**: ai365.business

## Dev Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Project Structure

```
src/
  app/
    layout.tsx          # Shared layout: Nav + Footer, metadata base
    page.tsx            # Home /
    catalog/
      page.tsx          # Catalog /catalog — filterable plugin grid
      [slug]/page.tsx   # Plugin detail /catalog/[slug]
    industries/page.tsx # Industries /industries
    learn/page.tsx      # Learn /learn
    contact/page.tsx    # Contact /contact
  components/
    Nav.tsx             # Sticky nav with mobile hamburger
    Footer.tsx          # Site footer
    Button.tsx          # Primary + secondary button variants
    CatalogCard.tsx     # Plugin card for catalog grid
    FilterChips.tsx     # Industry filter chips
    IndustrySection.tsx # Domain section with use-case rows
    SkillTrackCard.tsx  # Skill track card for Learn page
  data/
    catalog.ts          # v1 static plugin data (mirrors plugin-marketplace/)
    industries.ts       # Domain data for Industries page
    learn.ts            # Skill track and pathway data

plugin-marketplace/     # YAML + README per plugin (source of truth)
plugin-interface/       # Shared TypeScript types and loader
  types.ts              # CatalogItem interface
  loader.ts             # v1: reads catalog.ts | v2: GitHub API
  config.ts             # GitHub config for v2 migration

public/
  favicon.svg
  manifest.json
  robots.txt
  sitemap.xml
```

## Design System

Dark theme with amber accent. Tokens in `tailwind.config.ts`:

| Token | Value |
|---|---|
| `background.primary` | `#0A0A0A` |
| `background.secondary` | `#18181B` |
| `text.primary` | `#FAFAFA` |
| `text.secondary` | `#A1A1A6` |
| `text.tertiary` | `#71717A` |
| `accent` | `#F5A524` |
| `border` | `#27272A` |

## Deployment

Deployed to Vercel. Auto-deploys on push to `main`. Custom domain configured via Vercel DNS.
