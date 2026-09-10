/* Strip git conflict markers, keeping the INCOMING (newer) side.
   The platform snapshot sometimes restores a conflicted tree at turn start.
   Usage: node scripts/resolve-markers.mjs */
import fs from 'fs';
import path from 'path';
const EXT = ['.ts', '.tsx', '.css', '.md', '.mjs'];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(e.name)) continue;
      walk(p);
    } else if (EXT.includes(path.extname(e.name))) {
      const src = fs.readFileSync(p, 'utf8');
      if (!src.includes('<<<<<<<')) continue;
      const out = [];
      let mode = 'keep';
      for (const line of src.split('\n')) {
        if (line.startsWith('<<<<<<<')) { mode = 'drop'; continue; }
        if (line.startsWith('=======') && mode === 'drop') { mode = 'keep'; continue; }
        if (line.startsWith('>>>>>>>')) { mode = 'keep'; continue; }
        if (mode === 'drop') continue;
        out.push(line);
      }
      fs.writeFileSync(p, out.join('\n'));
      console.log('resolved', p);
    }
  }
}
walk(process.cwd());
console.log('done');
