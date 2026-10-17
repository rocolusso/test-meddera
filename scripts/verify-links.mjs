#!/usr/bin/env node
/**
 * Internal linking check on rendered HTML (a crawl directory with _index.txt).
 *
 *   node scripts/verify-links.mjs <htmlDir>
 *
 * Checks (errors fail the run):
 *  - no leftover link tokens ("[[", "]]", "svc:") in the visible text;
 *  - every internal link in <main> leads to a crawled page, stays in the page language, has no external links;
 *  - every article has at least 2 distinct links to other articles and at least 1 link to a service;
 *  - every article has at least 2 inbound links from other articles;
 *  - every article is listed in exactly one hub of its language, and every hub lists only its own cluster once;
 *  - every service page links to 2..6 blog pages (the protected lips service page keeps its single link to the lips hub).
 * Warnings (do not fail): articles without inline links inside paragraphs.
 */
import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2];
if (!dir) {
  console.error('usage: verify-links.mjs <htmlDir>');
  process.exit(2);
}

const HUBS = new Set([
  '/blog/dermatolog-beltsy-hub', '/ro/blog/dermatolog-balti-hub',
  '/blog/botoks-beltsy-hub', '/ro/blog/botox-balti-hub',
  '/blog/mezoterapiya-lica-beltsy-hub', '/ro/blog/mezoterapie-fata-balti-hub',
  '/blog/biorevitalizaciya-beltsy-hub', '/ro/blog/biorevitalizare-balti-hub',
  '/blog/konturnaya-plastika-beltsy-hub', '/ro/blog/conturare-faciala-balti-hub',
  '/blog/uvelichenie-gub-beltsy', '/ro/blog/marire-buzelor-balti',
]);

const PROTECTED_SERVICES = new Set(['/services/uvelychenye-gub-v-belczah', '/ro/services/uvelychenye-gub-v-belczah']);

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const strip = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

const pages = new Map();
for (const line of fs.readFileSync(path.join(dir, '_index.txt'), 'utf8').trim().split('\n')) {
  const [p, file] = line.split(' ');
  const html = fs.readFileSync(path.join(dir, file), 'utf8').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  const anchors = [...main.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({ href: decode(m[1]), text: strip(m[2]) }));
  const inPara = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].flatMap((m) =>
    [...m[1].matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
      .filter((a) => !/^(Română|Русский|RO|RU)$/.test(strip(a[2])))
      .map((a) => decode(a[1])),
  );
  const inList = [...main.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].flatMap((m) =>
    [...m[1].matchAll(/<a\b[^>]*href="([^"]*)"/g)].map((a) => decode(a[1])),
  );
  pages.set(p || '/', { main, text: strip(main), anchors, inPara, inList });
}

const isBlogPath = (p) => /^(\/ro)?\/blog\/[^/]+$/.test(p);
const isHub = (p) => HUBS.has(p);
const isArticle = (p) => isBlogPath(p) && !isHub(p) && !/\/page\//.test(p);
const isService = (p) => /^(\/ro)?\/services\/[^/]+$/.test(p);
const lang = (p) => (p.startsWith('/ro/') || p === '/ro' ? 'ro' : 'ru');
const norm = (h) => {
  const x = h.split('#')[0].split('?')[0];
  return x.length > 1 ? x.replace(/\/$/, '') : x;
};

const errors = [];
const warns = [];
const err = (m) => errors.push(m);

const articles = [...pages.keys()].filter(isArticle);
const inbound = new Map(articles.map((a) => [a, new Set()]));
const hubOf = new Map(articles.map((a) => [a, []]));

for (const [p, pg] of pages) {
  if (!isArticle(p) && !isHub(p) && !isService(p)) continue;
  if (/\[\[|\]\]|svc:/.test(pg.text)) err(`${p}: leftover link token in text`);
  for (const a of pg.anchors) {
    if (/^(https?:)?\/\//.test(a.href) || a.href.startsWith('mailto:')) {
      err(`${p}: external link in main (${a.href})`);
      continue;
    }
    if (a.href.startsWith('tel:')) continue;
    const t = norm(a.href);
    if (!pages.has(t)) err(`${p}: link to a page that was not crawled (${a.href})`);
    if (t.startsWith('/') && pages.has(t) && lang(t) !== lang(p) && !a.text.match(/^(RO|RU|Română|Русский)$/)) {
      err(`${p}: link changes language (${a.href})`);
    }
  }
  const targets = [...new Set(pg.anchors.map((a) => norm(a.href)))].filter((t) => t !== p);
  if (isArticle(p)) {
    const arts = targets.filter(isArticle);
    const svcs = targets.filter(isService);
    if (arts.length < 2) err(`${p}: only ${arts.length} links to other articles`);
    if (svcs.length < 1) err(`${p}: no link to a service`);
    for (const t of arts) inbound.get(t)?.add(p);
    if (pg.inPara.length === 0) warns.push(`${p}: no inline links inside paragraphs`);
  }
  if (isHub(p)) {
    const listed = pg.inList.map(norm).filter(isArticle);
    const dupList = listed.filter((t, i) => listed.indexOf(t) !== i);
    if (dupList.length) err(`${p}: article listed twice in the hub list (${[...new Set(dupList)].join(', ')})`);
    for (const t of new Set(listed)) hubOf.get(t)?.push(p);
    if (!targets.some(isService)) err(`${p}: hub without a service link`);
  }
  if (isService(p)) {
    const blog = targets.filter((t) => isBlogPath(t));
    // the lips service page is a protected page (text stays as it is): one link to the lips hub is enough there
    if (blog.length < (PROTECTED_SERVICES.has(p) ? 1 : 2)) err(`${p}: only ${blog.length} blog links`);
    if (blog.length > 6) err(`${p}: ${blog.length} blog links (max 6)`);
    if (!targets.some((t) => t.endsWith('/contacts'))) warns.push(`${p}: no link to contacts`);
  }
}

for (const a of articles) {
  const n = inbound.get(a).size;
  if (n < 2) err(`${a}: only ${n} inbound links from articles`);
  const hubs = [...new Set(hubOf.get(a))].filter((h) => lang(h) === lang(a));
  if (hubs.length !== 1) err(`${a}: listed in ${hubs.length} hubs (${hubs.join(', ')})`);
}

console.log(`articles: ${articles.length}, hubs: ${[...pages.keys()].filter(isHub).length}, services: ${[...pages.keys()].filter(isService).length}`);
const noInline = warns.filter((w) => w.includes('inline')).length;
console.log(`warnings: ${warns.length} (articles without inline links: ${noInline})`);
if (process.argv.includes('--warn')) warns.forEach((w) => console.log('WARN ' + w));
if (errors.length) {
  console.log(`ERRORS: ${errors.length}`);
  errors.slice(0, 80).forEach((e) => console.log('  ' + e));
  process.exit(1);
}
console.log('verify-links: OK');
