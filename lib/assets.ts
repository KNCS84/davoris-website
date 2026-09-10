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

const FALLBACK = '/dno/project-designbuild.webp';

export function assetExists(p: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', p));
  } catch {
    return false;
  }
}

export function enrichProject<T extends Project>(p: T): T {
  const image = p.image && assetExists(p.image) ? p.image : FALLBACK;
  const gallery = (p.gallery ?? []).filter(assetExists);
  return { ...p, image, gallery };
}

export function enrichAll<T extends Project>(list: T[]): T[] {
  return list.map(enrichProject);
}
