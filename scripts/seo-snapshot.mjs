#!/usr/bin/env node
/**
 * Builds a JSON snapshot (title, description, canonical, hreflang, headings,
 * JSON-LD nodes, word count, links, images) from a directory of rendered HTML.
 * The directory must contain _index.txt: "<path> <file.html>" per line.
 *
 * Usage: node scripts/seo-snapshot.mjs <htmlDir> <out.json>
 */
import fs from 'node:fs';
import path from 'node:path';

const [dir, outFile] = process.argv.slice(2);
if (!dir || !outFile) {
  console.error('usage: seo-snapshot.mjs <htmlDir> <out.json>');
  process.exit(2);
}

export function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

const stripTags = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

export function parseHtml(html) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const metaTag = (name) => {
    const m = html.match(new RegExp(`<meta[^>]+name="${name}"[^>]*>`));
    if (!m) return null;
    const c = m[0].match(/content="([^"]*)"/);
    return c ? decode(c[1]) : null;
  };
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || null;
  const alternates = {};
  for (const m of html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)) {
    alternates[m[1]] = m[2];
  }
  for (const m of html.matchAll(/<link rel="alternate" href="([^"]+)" hrefLang="([^"]+)"/gi)) {
    alternates[m[2]] = m[1];
  }
  const jsonld = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      jsonld.push(JSON.parse(decode(m[1])));
    } catch {
      jsonld.push({ __parseError: true, raw: m[1].slice(0, 200) });
    }
  }
  const body = (html.match(/<body[\s\S]*<\/body>/) || [html])[0];
  const clean = body
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/g, '');
  const main = (clean.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  const headings = [];
  for (const m of clean.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)) {
    headings.push({ level: Number(m[1]), text: stripTags(m[2]) });
  }
  const links = [];
  for (const m of clean.matchAll(/<a\b[^>]*href="([^"#][^"]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
    links.push({ href: decode(m[1]), text: stripTags(m[2]) });
  }
  const imgs = [];
  for (const m of clean.matchAll(/<img\b[^>]*>/g)) {
    const alt = m[0].match(/\balt="([^"]*)"/);
    imgs.push({ alt: alt ? decode(alt[1]) : null });
  }
  const mainText = stripTags(main);
  return {
    title: title ? decode(title) : null,
    description: metaTag('description'),
    robots: metaTag('robots'),
    canonical,
    alternates,
    headings,
    jsonld,
    links,
    imgs,
    mainText,
    mainWords: mainText ? mainText.split(/\s+/).length : 0,
    htmlText: stripTags(clean),
  };
}

const index = fs.readFileSync(path.join(dir, '_index.txt'), 'utf8').trim().split('\n');
const out = {};
for (const line of index) {
  const [p, file] = line.split(' ');
  out[p || '/'] = parseHtml(fs.readFileSync(path.join(dir, file), 'utf8'));
}
fs.writeFileSync(outFile, JSON.stringify(out));
console.log(`snapshot: ${Object.keys(out).length} pages -> ${outFile}`);
