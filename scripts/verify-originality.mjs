#!/usr/bin/env node
/**
 * Text originality check by 5-word shingles between pages of the new snapshot.
 * Shingles that occur on many pages (menus, footer, shared blocks) are ignored.
 * Usage: node scripts/verify-originality.mjs <new.json> <baseline.json> [maxShare=0.25]
 * Only pages whose main text changed against the baseline are checked.
 * Env: ONLY=<file with one path per line> narrows the checked pages to that list.
 */
import fs from 'node:fs';

const [newFile, baseFile, share = '0.25'] = process.argv.slice(2);
const next = JSON.parse(fs.readFileSync(newFile, 'utf8'));
const base = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
const text = (p) => (typeof p?.mainText === 'string' ? p.mainText : (p?.mainText || []).join(' '));
const words = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);
const shingles = (t) => {
  const w = words(t);
  const set = new Set();
  for (let i = 0; i + 5 <= w.length; i++) set.add(w.slice(i, i + 5).join(' '));
  return set;
};

const sets = new Map();
const df = new Map();
for (const [url, page] of Object.entries(next)) {
  const s = shingles(text(page));
  sets.set(url, s);
  for (const x of s) df.set(x, (df.get(x) || 0) + 1);
}
const only = process.env.ONLY
  ? new Set(fs.readFileSync(process.env.ONLY, 'utf8').split('\n').map((x) => x.trim()).filter(Boolean))
  : null;
const changed = Object.keys(next).filter((u) => text(next[u]) !== text(base[u]) && (!only || only.has(u)));
const fails = [];
for (const url of changed) {
  const own = [...sets.get(url)].filter((x) => df.get(x) <= 8);
  if (!own.length) continue;
  const counts = new Map();
  for (const x of own) {
    for (const [other, s] of sets) if (other !== url && s.has(x)) counts.set(other, (counts.get(other) || 0) + 1);
  }
  for (const [other, c] of counts) {
    const ratio = c / own.length;
    if (ratio > Number(share)) fails.push(`${url} <-> ${other}: ${(ratio * 100).toFixed(0)}% shared 5-word shingles`);
  }
}
if (fails.length) {
  console.error(`verify-originality: ${fails.length} pair(s) above ${share}`);
  for (const f of fails.slice(0, 40)) console.error(' -', f);
  process.exit(1);
}
console.log(`verify-originality: OK (${changed.length} changed pages checked)`);
