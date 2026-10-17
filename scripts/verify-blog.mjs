#!/usr/bin/env node
/**
 * Blog on-page checks on a snapshot from seo-snapshot.mjs.
 * Usage: node scripts/verify-blog.mjs <snapshot.json>
 * Env: WORDS_FILE=<file with one path per line>  pages that must have 600-700 words of main text
 *      REDIRECTS_FILE=<blog-redirects.json>      removed URLs must not be linked from any page
 *
 * Rules (per language, blog article pages):
 *  - title 40-60 chars, unique; hubs, index and pagination pages 30-60
 *  - H1 present once, unique, different from the title (article pages)
 *  - description 120-160 chars, unique (article and hub pages)
 *  - city (Бельцы / Bălți) appears in title, H1 or description
 *  - no superlatives or promises, no prices, no dashes in title / H1 / description
 */
import fs from 'node:fs';

const snap = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const errors = [];
const fail = (url, msg) => errors.push(`${url}: ${msg}`);

const isBlog = (u) => /^\/(ro\/)?blog(\/|$)/.test(u);
const isPagination = (u) => /^\/(ro\/)?blog\/page\/\d+$/.test(u);
const isIndex = (u) => u === '/blog' || u === '/ro/blog';
const isHub = (u) => /-hub$/.test(u) || u === '/blog/uvelichenie-gub-beltsy' || u === '/ro/blog/marire-buzelor-balti';
const lang = (u) => (u.startsWith('/ro/') || u === '/ro' ? 'ro' : 'ru');
const h1Of = (p) => p.headings.filter((h) => h.level === 1).map((h) => h.text);
const city = /Бельц|Bălți|Balti/i;
const banned = /лучш|эффективн|безопасн|гарант|идеальн|cel mai bun|cea mai bună|eficient|garantat|\bMDL\b|\bлей\b|\blei\b/i;

const seen = { title: new Map(), h1: new Map(), description: new Map() };
const dup = (kind, l, value, url) => {
  const key = `${l}|${value}`;
  if (seen[kind].has(key)) fail(url, `duplicate ${kind} with ${seen[kind].get(key)}`);
  else seen[kind].set(key, url);
};

for (const [url, page] of Object.entries(snap)) {
  if (!isBlog(url)) continue;
  const l = lang(url);
  const article = !isHub(url) && !isIndex(url) && !isPagination(url);
  const tl = page.title.length;
  const minTitle = article ? 40 : 30;
  if (tl < minTitle || tl > 60) fail(url, `title length ${tl} (${minTitle}-60): "${page.title}"`);
  if (!isPagination(url)) dup('title', l, page.title, url);

  const h1s = h1Of(page);
  if (h1s.length !== 1) fail(url, `H1 count ${h1s.length}`);
  if (article && h1s[0]) {
    if (h1s[0] === page.title) fail(url, 'H1 equals title');
    if (h1s[0].length < 20) fail(url, `H1 too short (${h1s[0].length}): "${h1s[0]}"`);
    dup('h1', l, h1s[0], url);
  }
  if (!isPagination(url) && !isIndex(url)) {
    const dl = page.description.length;
    if (dl < 120 || dl > 160) fail(url, `description length ${dl} (120-160)`);
    dup('description', l, page.description, url);
  }
  if (article) {
    if (!city.test(`${page.title} ${h1s[0] || ''} ${page.description}`)) fail(url, 'no city in title, H1 or description');
    for (const [name, v] of [['title', page.title], ['H1', h1s[0] || ''], ['description', page.description]]) {
      if (banned.test(v)) fail(url, `${name} has a banned word: "${v}"`);
      if (/[—–]/.test(v)) fail(url, `${name} has a dash`);
    }
  }
}

if (process.env.WORDS_FILE) {
  for (const url of fs.readFileSync(process.env.WORDS_FILE, 'utf8').split('\n').map((x) => x.trim()).filter(Boolean)) {
    const page = snap[url];
    if (!page) { fail(url, 'missing from snapshot'); continue; }
    const w = page.mainText.split(/\s+/).filter(Boolean).length;
    if (w < 600 || w > 700) fail(url, `main text ${w} words (600-700)`);
  }
}

if (process.env.REDIRECTS_FILE) {
  const removed = new Set();
  for (const r of JSON.parse(fs.readFileSync(process.env.REDIRECTS_FILE, 'utf8'))) {
    removed.add(`/blog/${r.ruSlug}`);
    removed.add(`/ro/blog/${r.roSlug}`);
  }
  for (const [url, page] of Object.entries(snap)) {
    for (const link of page.links || []) {
      const href = link.href.replace(/[?#].*$/, '').replace(/\/$/, '');
      if (removed.has(href)) fail(url, `links to removed URL ${href}`);
    }
  }
}

if (errors.length) {
  console.error(errors.slice(0, 80).join('\n'));
  console.error(`\nverify-blog: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`verify-blog: OK (${Object.keys(snap).filter(isBlog).length} blog pages)`);
