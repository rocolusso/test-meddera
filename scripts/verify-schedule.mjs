#!/usr/bin/env node
/**
 * Reception schedule drift check on a snapshot from seo-snapshot.mjs.
 * Source of truth: src/lib/contact-reception-schedule.ts (read, never edited).
 * Usage: node scripts/verify-schedule.mjs <snapshot.json>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(path.join(here, '../src/lib/contact-reception-schedule.ts'), 'utf8');
const start = Number(/RECEPTION_WORK_START = (\d+)/.exec(src)[1]);
const end = Number(/RECEPTION_WORK_END = (\d+)/.exec(src)[1]);
const pad = (n) => String(n).padStart(2, '0') + ':00';
const range = `${pad(start)}–${pad(end)}`;
const snap = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const fails = [];

for (const [url, page] of Object.entries(snap)) {
  const text = typeof page.mainText === 'string' ? page.mainText : (page.mainText || []).join(' ');
  for (const m of text.match(/\d{1,2}[:.]\d{2}\s*[–—-]\s*\d{1,2}[:.]\d{2}/g) || []) {
    if (m.replace(/\s+/g, '').replace(/[—-]/, '–').replace(/\./g, ':') !== range) fails.push(`${url}: text hours "${m}" differ from ${range}`);
  }
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach(walk);
    if (node.opens || node.closes) {
      const o = String(node.opens || '').slice(0, 5);
      const c = String(node.closes || '').slice(0, 5);
      if (o !== pad(start) || c !== pad(end)) fails.push(`${url}: JSON-LD hours ${o}-${c} differ from ${range}`);
      const days = [].concat(node.dayOfWeek || []).map((d) => String(d).split('/').pop());
      for (const bad of ['Monday', 'Wednesday', 'Sunday']) if (days.includes(bad)) fails.push(`${url}: JSON-LD lists closed day ${bad}`);
    }
    Object.values(node).forEach(walk);
  };
  walk(page.jsonld);
}

if (fails.length) {
  console.error(`verify-schedule: ${fails.length} problem(s)`);
  for (const f of fails.slice(0, 40)) console.error(' -', f);
  process.exit(1);
}
console.log(`verify-schedule: OK (${Object.keys(snap).length} pages, ${range})`);
