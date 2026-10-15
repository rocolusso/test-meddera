#!/usr/bin/env node
/**
 * URL immutability and protected-page checks against a baseline snapshot.
 * Usage: node scripts/verify-protected.mjs <new.json> <baseline.json>
 * Env: ALLOW_LEADER_META=1 permits changing title/description of the leading pages.
 */
import fs from 'node:fs';

const [newFile, baseFile] = process.argv.slice(2);
const cur = JSON.parse(fs.readFileSync(newFile, 'utf8'));
const base = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
const errors = [];
const fail = (m) => errors.push(m);

// T3: every URL is still there and still canonical to itself; nothing new appears
const before = new Set(Object.keys(base));
const after = new Set(Object.keys(cur));
for (const p of before) if (!after.has(p)) fail(`URL removed: ${p}`);
for (const p of after) if (!before.has(p)) fail(`URL added: ${p}`);
for (const p of before) {
  if (cur[p] && cur[p].canonical !== base[p].canonical) {
    fail(`canonical changed: ${p}: ${base[p].canonical} -> ${cur[p].canonical}`);
  }
}

// T4: protected pages
const LIPS_SERVICE = ['/services/uvelychenye-gub-v-belczah', '/ro/services/uvelychenye-gub-v-belczah'];
const LIPS_HUB = ['/blog/uvelichenie-gub-beltsy', '/ro/blog/marire-buzelor-balti'];
const ABOUT = ['/about', '/ro/about'];
const LEADERS = ['/', '/ro', '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye', '/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye'];

for (const p of [...LIPS_SERVICE, ...LIPS_HUB, ...ABOUT]) {
  if (!cur[p] || !base[p]) {
    fail(`protected page missing: ${p}`);
    continue;
  }
  for (const k of ['title', 'description', 'canonical', 'mainText']) {
    if (cur[p][k] !== base[p][k]) fail(`protected page changed (${k}): ${p}`);
  }
  const h = (x) => JSON.stringify(x.headings.filter((v) => v.level <= 2));
  if (h(cur[p]) !== h(base[p])) fail(`protected page headings changed: ${p}`);
}

for (const p of LEADERS) {
  if (!cur[p] || !base[p]) {
    fail(`leader page missing: ${p}`);
    continue;
  }
  if (process.env.ALLOW_LEADER_META !== '1') {
    for (const k of ['title', 'description']) {
      if (cur[p][k] !== base[p][k]) fail(`leader ${k} changed (frozen until the meta step): ${p}`);
    }
  }
  // Doctor facts: the "about me" block that precedes the services strip on the home pages stays word for word
  if (p === '/' || p === '/ro') {
    const b = base[p];
    const secondH2 = b.headings.filter((x) => x.level === 2)[1];
    const cut = secondH2 ? b.mainText.indexOf(secondH2.text) : -1;
    if (cut > 200) {
      const frozen = b.mainText.slice(0, cut);
      if (!cur[p].mainText.includes(frozen)) fail(`doctor facts block changed on ${p}`);
    } else fail(`cannot locate the doctor facts block on ${p}`);
  }
}

// Base paragraphs of every service page (except lips) stay as they are
for (const p of Object.keys(base)) {
  if (/^\/(ro\/)?services\/[^/]+$/.test(p) && !LIPS_SERVICE.includes(p)) {
    const prefix = base[p].mainText.slice(0, 250);
    if (!cur[p]?.mainText.startsWith(prefix)) fail(`service base text changed: ${p}`);
  }
}

if (errors.length) {
  console.log(errors.slice(0, 80).join('\n'));
  console.log(`\nverify-protected: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log('verify-protected: OK');
