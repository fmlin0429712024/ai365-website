// v1: loads plugin data from static TypeScript source
// v2: replace this file's implementation to fetch from GitHub API
// All callers remain unchanged — only this file changes for v2 migration.

import { catalog } from '@/data/catalog'
import type { CatalogItem } from './types'

export function loadCatalog(): CatalogItem[] {
  return catalog
}

export function loadCatalogItem(slug: string): CatalogItem | undefined {
  return catalog.find((item) => item.slug === slug)
}

export function loadAllSlugs(): string[] {
  return catalog.map((item) => item.slug)
}
