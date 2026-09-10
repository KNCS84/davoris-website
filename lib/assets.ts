/* ==========================================================================
   lib/assets.ts — build-time asset gating (server-only).
   Real project photography is ingested into public/projects/ when the client
   supplies files. Until a file exists on disk we fall back to a graded
   placeholder frame, so the site NEVER shows a broken image and lights up
   automatically on ingest + rebuild.
   ========================================================================== */
import fs from 'fs';
import path from 'path';
import type { Project } from '@/content/projects';

/* First entry that actually exists on disk wins, so the fallback itself can
   never be a broken image. */
const FALLBACK_CHAIN = [
  '/dno/project-designbuild.webp',
  '/dno/hero-built.webp',
  '/dno/section-craft.webp',
  '/dno/section-positioning.webp',
];

export function assetExists(p: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', p));
  } catch {
    return false;
  }
}

export function fallbackImage(): string {
  return FALLBACK_CHAIN.find(assetExists) ?? '';
}

export function enrichProject<T extends Project>(p: T): T {
  const image = p.image && assetExists(p.image) ? p.image : fallbackImage() || p.image;
  const gallery = (p.gallery ?? []).filter(assetExists);
  return { ...p, image, gallery };
}

export function enrichAll<T extends Project>(list: T[]): T[] {
  return list.map(enrichProject);
}
