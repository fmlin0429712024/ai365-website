// v2: fetches plugin YAML files from GitHub API at build time.
// All callers are async — only this file changes if the data source changes again.
// Falls back to local static catalog on any GitHub API failure.

import { parse } from 'yaml'
import type { CatalogItem } from './types'
import { GITHUB_CONFIG } from './config'
import { catalog as staticCatalog } from '@/data/catalog'

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN
  return token
    ? { Authorization: `Bearer ${token}`, 'User-Agent': 'ai365-website' }
    : { 'User-Agent': 'ai365-website' }
}

async function fetchSlugs(): Promise<string[]> {
  const { apiBase, owner, repo, branch, pluginMarketplacePath } = GITHUB_CONFIG
  const url = `${apiBase}/repos/${owner}/${repo}/contents/${pluginMarketplacePath}?ref=${branch}`
  const res = await fetch(url, { headers: githubHeaders() })
  if (!res.ok) return []
  const entries: Array<{ type: string; name: string }> = await res.json()
  return entries.filter((e) => e.type === 'dir').map((e) => e.name)
}

async function fetchPlugin(slug: string): Promise<CatalogItem | null> {
  const { apiBase, owner, repo, branch, pluginMarketplacePath } = GITHUB_CONFIG
  const url = `${apiBase}/repos/${owner}/${repo}/contents/${pluginMarketplacePath}/${slug}/plugin.yaml?ref=${branch}`
  const res = await fetch(url, { headers: githubHeaders() })
  if (!res.ok) return null
  const json: { content?: string } = await res.json()
  if (!json.content) return null
  const decoded = Buffer.from(json.content, 'base64').toString('utf-8')
  return parse(decoded) as CatalogItem
}

export async function loadCatalog(): Promise<CatalogItem[]> {
  try {
    const slugs = await fetchSlugs()
    if (slugs.length === 0) return staticCatalog
    const items = await Promise.all(slugs.map(fetchPlugin))
    const valid = items.filter((item): item is CatalogItem => item !== null)
    return valid.length > 0 ? valid : staticCatalog
  } catch {
    return staticCatalog
  }
}

export async function loadCatalogItem(slug: string): Promise<CatalogItem | undefined> {
  try {
    const item = await fetchPlugin(slug)
    return item ?? undefined
  } catch {
    return staticCatalog.find((item) => item.slug === slug)
  }
}

export async function loadAllSlugs(): Promise<string[]> {
  try {
    const slugs = await fetchSlugs()
    return slugs.length > 0 ? slugs : staticCatalog.map((item) => item.slug)
  } catch {
    return staticCatalog.map((item) => item.slug)
  }
}
