#!/usr/bin/env node
/**
 * Checks public/llms.txt and public/llms-full.txt (PLAN 404L-01).
 *   node scripts/verify-llms.mjs [--base=http://localhost:3111]
 * Without --base only the files are checked; with it the running site must serve them and answer 200 on every
 * meddera.md link inside. The files are written by hand, so this test is what keeps them in sync with the site.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseArg = process.argv.find((a) => a.startsWith('--base='));
const base = baseArg ? baseArg.slice(7).replace(/\/$/, '') : '';

let passed = 0;
const failures = [];
const ok = (cond, name) => {
  if (cond) {
    passed++;
  } else {
    failures.push(name);
    console.log(`FAIL ${name}`);
  }
};

const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const slugs = [...read('src/lib/service-slugs.ts').matchAll(/^\s+'([a-z0-9-]+)',$/gm)].map((m) => m[1]);
const constants = read('src/lib/schema/constants.ts');
const phone = constants.match(/export const PHONE = '([^']+)'/)[1];
const street = constants.match(/streetAddress: '([^']+)'/)[1];
const postal = constants.match(/postalCode: '([^']+)'/)[1];
const maps = constants.match(/export const MAPS_URL = '([^']+)'/)[1];

ok(slugs.length === 12, `12 service slugs found in service-slugs.ts (got ${slugs.length})`);

for (const file of ['public/llms.txt', 'public/llms-full.txt']) {
  const text = read(file);
  ok(/^# Meddera Beauty Clinic\n/.test(text), `${file}: starts with the H1`);
  ok(/^> /m.test(text), `${file}: has the summary quote`);
  ok(/^## Русский$/m.test(text) && /^## Română$/m.test(text), `${file}: RU and RO sections`);
  for (const slug of slugs) {
    ok(text.includes(`(https://meddera.md/services/${slug})`), `${file}: RU link to ${slug}`);
    ok(text.includes(`(https://meddera.md/ro/services/${slug})`), `${file}: RO link to ${slug}`);
  }
  ok((text.match(new RegExp(phone.replace('+', '\\+'), 'g')) || []).length === 2, `${file}: phone ${phone} in both sections`);
  ok((text.match(new RegExp(`${street}, Bălți, ${postal}`, 'g')) || []).length === 2, `${file}: address in both sections`);
  ok(text.includes(maps), `${file}: map link`);
  ok(!/developer/i.test(text), `${file}: no /developer`);
  ok(!/\bMDL\b|\bлей\b|\blei\b|\d+\s*(?:€|\$)/i.test(text), `${file}: no prices`);
  ok(!/\b\d{1,2}:\d{2}\b/.test(text), `${file}: no opening hours`);
  ok(!/[—–]/.test(text), `${file}: no dashes`);
  ok(!text.includes('!'), `${file}: no exclamation marks`);
  ok(!/бесплатн|гарант|gratuit|garant/i.test(text), `${file}: no "free" or "guarantee"`);
  ok(!/[şţŞŢ]/.test(text), `${file}: Romanian ș and ț with comma below`);
}
ok(read('public/llms.txt').includes('(https://meddera.md/llms-full.txt)'), 'llms.txt links to llms-full.txt');

if (base) {
  for (const file of ['llms.txt', 'llms-full.txt']) {
    const res = await fetch(`${base}/${file}`, { redirect: 'manual' });
    ok(res.status === 200, `${file}: served with 200 (got ${res.status})`);
    ok(/^text\/plain/.test(res.headers.get('content-type') || ''), `${file}: text/plain (got ${res.headers.get('content-type')})`);
    ok((await res.text()) === read(`public/${file}`), `${file}: served as written`);
  }
  const links = new Set();
  for (const file of ['public/llms.txt', 'public/llms-full.txt']) {
    for (const m of read(file).matchAll(/\(https:\/\/meddera\.md(\/[^)]*)\)/g)) links.add(m[1]);
  }
  for (const link of links) {
    const res = await fetch(base + link, { redirect: 'manual' });
    ok(res.status === 200, `link ${link} answers 200 (got ${res.status})`);
  }
}

console.log(`\nverify-llms: ${passed} passed, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
