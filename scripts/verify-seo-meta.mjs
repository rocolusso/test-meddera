#!/usr/bin/env node
/**
 * On-page SEO rules (Ahrefs-style) on a snapshot from seo-snapshot.mjs.
 * Usage: node scripts/verify-seo-meta.mjs <new.json> [baseline.json]
 * With a baseline, only NEW violations (not present before) fail; hard rules always apply.
 * Env: SERVICE_WORDS=1 enforces 600–700 words of main text on service pages.
 */
import fs from 'node:fs';

const [newFile, baseFile] = process.argv.slice(2);
const cur = JSON.parse(fs.readFileSync(newFile, 'utf8'));
const base = baseFile ? JSON.parse(fs.readFileSync(baseFile, 'utf8')) : {};
const ORIGIN = 'https://meddera.md';
const LIPS = new Set(['/services/uvelychenye-gub-v-belczah', '/ro/services/uvelychenye-gub-v-belczah']);
const isService = (p) => /^\/(ro\/)?services\/[^/]+$/.test(p);
const isRo = (p) => p === '/ro' || p.startsWith('/ro/');
const errors = [];

const violations = (page) => {
  const v = [];
  const h1s = page.headings.filter((h) => h.level === 1);
  if (h1s.length !== 1) v.push(`h1-count:${h1s.length}`);
  // heading order: a heading may not skip more than one level below the previous one
  let prev = 0;
  for (const h of page.headings) {
    if (prev && h.level > prev + 1) {
      v.push(`heading-skip:h${prev}->h${h.level}`);
      break;
    }
    prev = h.level;
  }
  if (!page.title) v.push('no-title');
  else if (page.title.length < 30 || page.title.length > 60) v.push(`title-length:${page.title.length}`);
  if (!page.description) v.push('no-description');
  else if (page.description.length < 110 || page.description.length > 160) v.push(`description-length:${page.description.length}`);
  if (page.imgs.some((i) => i.alt === null)) v.push('img-without-alt');
  return v;
};

const norm = (u) => {
  try {
    const x = new URL(u, ORIGIN);
    if (x.host !== 'meddera.md') return null;
    return decodeURIComponent(x.pathname).replace(/\/$/, '') || '/';
  } catch {
    return null;
  }
};
const paths = new Set(Object.keys(cur).map((p) => p.replace(/\/$/, '') || '/'));

const titleOwners = new Map();
const descOwners = new Map();

for (const [p, page] of Object.entries(cur)) {
  if (page.robots && /noindex/.test(page.robots)) continue;
  const was = base[p] ? new Set(violations(base[p])) : null;
  for (const v of violations(page)) {
    if (!was || !was.has(v.split(':')[0] + ':' + v.split(':').slice(1).join(':')) ) {
      // length violations only count when the value changed (legacy values are tracked separately)
      const legacySame = was && base[p] && ((v.startsWith('title-') && base[p].title === page.title) || (v.startsWith('description-') && base[p].description === page.description));
      if (!legacySame) errors.push(`${p}: ${v}`);
    }
  }
  titleOwners.set(page.title, [...(titleOwners.get(page.title) ?? []), p]);
  descOwners.set(page.description, [...(descOwners.get(page.description) ?? []), p]);

  // canonical is the page itself
  const selfUrl = p === '/' ? `${ORIGIN}/` : `${ORIGIN}${p}`;
  const canonical = page.canonical === ORIGIN ? `${ORIGIN}/` : page.canonical;
  if (canonical !== selfUrl) errors.push(`${p}: canonical ${page.canonical} != ${selfUrl}`);

  // hreflang
  const alt = page.alternates;
  const needsAlt = !LIPS.has(p) && !p.startsWith('/ads') && !p.startsWith('/review');
  if (needsAlt && !Object.keys(alt).length) errors.push(`${p}: no hreflang`);
  if (Object.keys(alt).length) {
    const fix = (u) => (u === ORIGIN ? `${ORIGIN}/` : u);
    if (!alt.ru || !alt.ro || !alt['x-default']) errors.push(`${p}: hreflang needs ru, ro, x-default`);
    else {
      if (fix(alt['x-default']) !== fix(alt.ru)) errors.push(`${p}: x-default must equal ru`);
      const self = isRo(p) ? alt.ro : alt.ru;
      if (fix(self) !== selfUrl) errors.push(`${p}: hreflang self-reference ${self} != ${selfUrl}`);
      const other = norm(isRo(p) ? alt.ru : alt.ro);
      const otherPage = cur[other] ?? cur[other + '/'];
      if (!otherPage) errors.push(`${p}: hreflang target ${other} is not a page`);
      else {
        const back = isRo(p) ? otherPage.alternates.ro : otherPage.alternates.ru;
        if (!back || fix(back) !== selfUrl) errors.push(`${p}: hreflang is not reciprocal with ${other}`);
      }
    }
  }

  // Service pages: visible text size and forbidden claims
  if (isService(p) && !LIPS.has(p)) {
    if (process.env.SERVICE_WORDS === '1') {
      const w = page.mainWords;
      if (w < 600 || w > 700) errors.push(`${p}: main text ${w} words (need 600–700)`);
    }
  }
  const scope = page.mainText;
  if (!LIPS.has(p) && (isService(p) || p === '/' || p === '/ro')) {
    if (/\bMDL\b|\bлей\b|\blei\b|\d\s?₽/i.test(scope)) errors.push(`${p}: price in main text`);
  }
  if (!LIPS.has(p) && /онлайн[- ]консульт|consulta[țt]ii? online|consulta[țt]ie online/i.test(scope)) {
    errors.push(`${p}: mentions online consultation`);
  }

  // internal links resolve to pages
  for (const l of page.links) {
    if (/^(mailto:|tel:|https?:\/\/(?!meddera\.md))/i.test(l.href)) continue;
    const t = norm(l.href);
    if (t && !t.startsWith('/assets') && !t.startsWith('/_next') && !paths.has(t)) {
      if (!/^\/(favicon|api|robots|sitemap)/.test(t)) errors.push(`${p}: broken internal link ${l.href}`);
    }
  }
}

for (const [map, label] of [[titleOwners, 'title'], [descOwners, 'description']]) {
  for (const [v, owners] of map) {
    if (v && owners.length > 1) {
      const before = owners.filter((o) => base[o] && base[o][label] === v).length === owners.length;
      if (!before) errors.push(`duplicate ${label}: "${String(v).slice(0, 60)}" on ${owners.slice(0, 3).join(', ')}`);
    }
  }
}

const uniq = [...new Set(errors)];
if (uniq.length) {
  console.log(uniq.slice(0, 120).join('\n'));
  console.log(`\nverify-seo-meta: ${uniq.length} problem(s)`);
  process.exit(1);
}
console.log(`verify-seo-meta: OK (${Object.keys(cur).length} pages)`);
