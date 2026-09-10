/* Ingest real project photography from /home/user/uploads into public/projects/.
   Run AFTER re-attaching the 8 photos:  node scripts/ingest-projects.mjs
   Applies the committed grade (desaturate ~12%, lift blacks into the palette)
   and the two agreed crops: WA0074 (drop overgrown foreground), WA0100 (drop floor litter). */
import sharp from 'sharp';
import fs from 'fs';

const SRC = '/home/user/uploads';
const OUT = 'public/projects';
const MAP = {
  // --- Nasarawa State University, Keffi (Centre for Physical Planning) ---
  'IMG-20210706-WA0124.jpg': ['nsu-courtyard-colonnade', null],
  'nasarawa-physical-planning-c.jpg': ['nsu-corridor', null],
  'IMG-20210706-WA0115.jpg': ['nsu-walkway-tanks', null],
  'IMG-20210706-WA0116.jpg': ['nsu-compound-gate', null],
  'IMG-20210706-WA0118.jpg': ['nsu-side-walkway', null],
  'IMG-20210706-WA0119.jpg': ['nsu-building-corner', null],
  'IMG-20210706-WA0120.jpg': ['nsu-office-interior', null],
  'IMG-20210706-WA0122.jpg': ['nsu-conference-room', null],
  // --- earlier TETFUND / UBEC-SUBEB set ---
  'IMG-20210706-WA0100.jpg': ['lecture-theatre-interior', { heightFrac: 0.85 }],
  'IMG-20210706-WA0104.jpg': ['telfund-2015-signage', null],
  'IMG-20210706-WA0074.jpg': ['lecture-block-exterior', { heightFrac: 0.62 }],
  'subeb-delta-classroom-2.jpeg.jpg': ['subeb-classroom-block', null],
  'IMG-20210706-WA0013.jpg': ['subeb-2018-signage', null],
  'IMG-20210706-WA0114.jpg': ['courtyard-drainage', null],
};

fs.mkdirSync(OUT, { recursive: true });
for (const [file, [name, crop]] of Object.entries(MAP)) {
  const src = `${SRC}/${file}`;
  if (!fs.existsSync(src)) { console.warn(`skip (missing): ${file}`); continue; }
  let s = sharp(src).rotate();
  const m = await s.metadata();
  if (crop) s = s.extract({ left: 0, width: m.width, top: 0, height: Math.round(m.height * crop.heightFrac) });
  await s
    .modulate({ saturation: 0.88 })
    .linear(1.03, -6)
    .resize({ width: Math.min(m.width, 1600), withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(`${OUT}/${name}.webp`);
  console.log(`${name}.webp  ${(fs.statSync(`${OUT}/${name}.webp`).size / 1024).toFixed(0)}KB`);
}
console.log('done');
