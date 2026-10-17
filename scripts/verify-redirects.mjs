#!/usr/bin/env node
/**
 * Every merged or removed blog URL answers with a permanent redirect to the expected target.
 * Usage: node scripts/verify-redirects.mjs <baseUrl> [blog-redirects.json]
 * Example: node scripts/verify-redirects.mjs http://localhost:3111
 * Also checks that targets are not themselves redirect sources (no chains) and that each target page answers 200.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const base = (process.argv[2] || 'http://localhost:3111').replace(/\/$/, '');
const file = process.argv[3] || path.join(here, '../src/blog-data/blog-redirects.json');
const rows = JSON.parse(fs.readFileSync(file, 'utf8'));
const errors = [];
const sources = new Set(rows.flatMap((r) => [`/blog/${r.ruSlug}`, `/ro/blog/${r.roSlug}`]));

const limit = 4;
const queue = rows.flatMap((r) => [
  { from: `/blog/${r.ruSlug}`, to: r.ruTo },
  { from: `/ro/blog/${r.roSlug}`, to: r.roTo },
]);
const targetsChecked = new Map();

async function check({ from, to }) {
  if (sources.has(to)) errors.push(`redirect chain: ${from} -> ${to} (target is also a source)`);
  const res = await fetch(base + from, { redirect: 'manual' });
  const loc = res.headers.get('location') || '';
  const pathOnly = loc.replace(/^https?:\/\/[^/]+/, '');
  if (![301, 308].includes(res.status)) errors.push(`${from}: status ${res.status}, expected 301/308`);
  else if (pathOnly !== to) errors.push(`${from}: redirects to ${pathOnly}, expected ${to}`);
  if (!targetsChecked.has(to)) {
    const t = await fetch(base + to, { redirect: 'manual' });
    targetsChecked.set(to, t.status);
    if (t.status !== 200) errors.push(`target ${to} answers ${t.status}`);
  }
}

const workers = Array.from({ length: limit }, async () => {
  while (queue.length) await check(queue.shift());
});
await Promise.all(workers);

if (errors.length) {
  console.error(errors.slice(0, 60).join('\n'));
  console.error(`\nverify-redirects: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`verify-redirects: OK (${rows.length * 2} redirects, ${targetsChecked.size} targets)`);
