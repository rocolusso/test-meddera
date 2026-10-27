/**
 * Checks that a change added content to blog pages without removing or altering any existing
 * text, heading, link, title, canonical or JSON-LD (the site is already indexed).
 *
 *   node scripts/verify-seo-text.mjs --base=http://localhost:3111 --save=/tmp/blog-before.json
 *   ... change the code, rebuild, restart the server ...
 *   node scripts/verify-seo-text.mjs --base=http://localhost:3111 --compare=/tmp/blog-before.json
 *
 * Pages: every /blog and /ro/blog URL of the sitemap (articles, hubs, lists), fetched from --base.
 * Every text fragment, link and heading of the "before" snapshot must still be on the page; the
 * report lists what was added. Titles, canonicals, descriptions and JSON-LD must be identical.
 */

import fs from 'node:fs';

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, ...v] = a.replace(/^--/, '').split('=');
    return [k, v.join('=') || 'true'];
  }),
);
const base = (args.base || 'http://localhost:3111').replace(/\/$/, '');

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#x27;': "'", '&#39;': "'", '&nbsp;': ' ' };
const decode = (s) => s.replace(/&(?:amp|lt|gt|quot|nbsp|#x27|#39);/g, (m) => ENTITIES[m]);
const clean = (s) => decode(s).replace(/\s+/g, ' ').trim();

function extract(html) {
  const first = (re) => {
    const m = html.match(re);
    return m ? clean(m[1]) : '';
  };
  const body = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  return {
    title: first(/<title[^>]*>([\s\S]*?)<\/title>/i),
    description: first(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    canonical: first(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i),
    jsonld: [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1].trim()),
    headings: [...body.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => `h${m[1]}: ${clean(m[2].replace(/<[^>]+>/g, ' '))}`),
    links: [...body.matchAll(/<a\s[^>]*?href="([^"]*)"/gi)].map((m) => decode(m[1])),
    texts: body
      .replace(/<[^>]+>/g, '\n')
      .split('\n')
      .map(clean)
      .filter(Boolean),
  };
}

async function blogUrls() {
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p) => /^\/(ro\/)?blog(\/|$)/.test(p));
  return [...new Set(paths)].sort();
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

async function snapshot() {
  const paths = await blogUrls();
  const pages = await mapLimit(paths, 8, async (p) => {
    const res = await fetch(base + p);
    if (res.status !== 200) throw new Error(`${p}: HTTP ${res.status}`);
    return [p, extract(await res.text())];
  });
  return Object.fromEntries(pages);
}

const count = (arr) => {
  const m = new Map();
  for (const x of arr) m.set(x, (m.get(x) || 0) + 1);
  return m;
};

/** Items of `a` that are missing (or fewer) in `b`, and items added in `b`. */
function diffMulti(a, b) {
  const ca = count(a);
  const cb = count(b);
  const missing = [];
  const added = [];
  for (const [k, n] of ca) if ((cb.get(k) || 0) < n) missing.push(k);
  for (const [k, n] of cb) if ((ca.get(k) || 0) < n) added.push(k);
  return { missing, added };
}

if (args.save) {
  const snap = await snapshot();
  fs.writeFileSync(args.save, JSON.stringify(snap));
  console.log(`saved ${Object.keys(snap).length} pages to ${args.save}`);
} else if (args.compare) {
  const before = JSON.parse(fs.readFileSync(args.compare, 'utf8'));
  const after = await snapshot();
  const problems = [];
  const addedTexts = new Map();
  const addedLinks = new Map();
  const addedHeadings = new Map();
  for (const [p, b] of Object.entries(before)) {
    const a = after[p];
    if (!a) {
      problems.push(`${p}: page is gone from the sitemap/server`);
      continue;
    }
    for (const f of ['title', 'description', 'canonical']) if (a[f] !== b[f]) problems.push(`${p}: ${f} changed: "${b[f]}" -> "${a[f]}"`);
    if (JSON.stringify(a.jsonld) !== JSON.stringify(b.jsonld)) problems.push(`${p}: JSON-LD changed`);
    for (const [field, bucket] of [['texts', addedTexts], ['links', addedLinks], ['headings', addedHeadings]]) {
      const d = diffMulti(b[field], a[field]);
      for (const m of d.missing) problems.push(`${p}: ${field} lost: ${m.slice(0, 120)}`);
      for (const x of d.added) bucket.set(x, (bucket.get(x) || 0) + 1);
    }
  }
  const extra = Object.keys(after).filter((p) => !before[p]);
  const show = (title, map) => {
    console.log(`\n${title}: ${map.size} distinct`);
    for (const [k, n] of [...map].sort((x, y) => y[1] - x[1]).slice(0, 12)) console.log(`  ${String(n).padStart(4)} x ${k.slice(0, 130)}`);
  };
  console.log(`compared ${Object.keys(before).length} pages (new in sitemap: ${extra.length})`);
  show('added text fragments', addedTexts);
  show('added links', addedLinks);
  show('added headings (must be none)', addedHeadings);
  if (addedHeadings.size) problems.push(`headings were added: ${[...addedHeadings.keys()].slice(0, 3).join(' | ')}`);
  if (problems.length) {
    console.log(`\nFAILED: ${problems.length} problem(s)`);
    for (const x of problems.slice(0, 40)) console.log(' - ' + x);
    process.exit(1);
  }
  console.log('\nOK: nothing was removed or changed, only the listed content was added.');
} else {
  console.log('usage: --save=file.json | --compare=file.json  [--base=http://localhost:3111]');
  process.exit(2);
}
