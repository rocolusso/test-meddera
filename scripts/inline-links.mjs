#!/usr/bin/env node
/**
 * Adds inline links to article paragraphs: [[target|anchor]] tokens around phrases that already exist.
 * No sentences are added. Targets come from related-articles.ts (articles) and article-services.ts (services).
 * Usage: node scripts/inline-links.mjs [--apply] [--only=<article id>]
 * Without --apply it only prints the plan and the coverage report.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { ARTICLE_ANCHORS, SERVICE_ANCHORS } from './inline-link-anchors.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const here = path.dirname(fileURLToPath(import.meta.url));
const bd = path.join(here, '../src/blog-data');
const APPLY = process.argv.includes('--apply');
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7);

const MAX_ARTICLE_LINKS = 4;
const MAX_SERVICE_LINKS = 2;
const TOKEN = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

function loadTs(file, shims = {}) {
  const src = fs.readFileSync(file, 'utf8');
  const out = ts.transpileModule(src, { compilerOptions: { module: 'commonjs', target: 'es2020' } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', out)(m, m.exports, (n) => shims[n] ?? {});
  return m.exports;
}

// ---- data
const rewriteFiles = fs.readdirSync(path.join(bd, 'rewrites')).filter((f) => f.endsWith('.ts') && !['index.ts', 'types.ts'].includes(f));
const articles = new Map(); // id -> { file, sectionsRu, sectionsRo }
for (const f of rewriteFiles) {
  const mod = loadTs(path.join(bd, 'rewrites', f));
  for (const v of Object.values(mod)) for (const [id, a] of Object.entries(v)) articles.set(id, { file: path.join(bd, 'rewrites', f), ...a });
}
const RELATED = loadTs(path.join(bd, 'related-articles.ts')).RELATED_ARTICLES;
const svcMod = loadTs(path.join(bd, 'article-services.ts'), { '@/lib/service-slugs': { servicePath: () => '' } });
const clusterOf = {};
for (const f of fs.readdirSync(bd).filter((x) => /-cluster-articles-part\d\.ts$/.test(x))) {
  const s = fs.readFileSync(path.join(bd, f), 'utf8');
  for (const m of s.matchAll(/id: '([^']+)',[\s\S]*?clusterId: '([^']+)'/g)) clusterOf[m[1]] = m[2];
}

// ---- helpers
const strip = (t) => t.replace(TOKEN, (_m, _t, a) => a);
// same length, Latin diacritics removed (Cyrillic untouched), lower case: positions map back to the original text
const fold = (t) => t.replace(/[\u00C0-\u024F]/gu, (c) => c.normalize('NFD')[0]).toLowerCase();

function findAnchor(paragraphs, regexSrc, spans) {
  const re = new RegExp(`(?<![\\p{L}\\p{N}])(?:${regexSrc})(?![\\p{L}\\p{N}])`, 'giu');
  for (let i = 0; i < paragraphs.length; i++) {
    const used = spans.get(i) || [];
    if (used.length >= 2) continue;
    const f = fold(paragraphs[i].text);
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(f))) {
      const start = m.index, end = m.index + m[0].length;
      const words = m[0].trim().split(/\s+/).length;
      if (words > 5) continue;
      if (used.some((u) => start < u.end + 60 && end > u.start - 60)) continue;
      return { par: i, start, end };
    }
  }
  return null;
}

const report = [];
const edits = new Map(); // file -> [{from, to}]

for (const [id, art] of articles) {
  if (ONLY && id !== ONLY) continue;
  const related = RELATED[id] || [];
  const own = clusterOf[id];
  const sameRubric = [...articles.keys()].filter((x) => x !== id && clusterOf[x] === own && !related.includes(x));
  // disease names work as anchors in any rubric (acne, sweating, sun damage...), other rubrics only via the curated list
  const crossSpecific = [...articles.keys()].filter(
    (x) => x !== id && clusterOf[x] === 'dermatologist' && own !== 'dermatologist' && x !== 'dermatolog-beltsy-kogda-nuzhna-konsultaciya' && !related.includes(x),
  );
  const targets = [...related, ...sameRubric, ...crossSpecific];
  const services = svcMod.servicesForArticle({ id, clusterId: clusterOf[id] ?? null });
  for (const lang of ['ru', 'ro']) {
    const sections = lang === 'ru' ? art.sectionsRu : art.sectionsRo;
    const paragraphs = [];
    sections.forEach((s, si) => s.paragraphs.forEach((p, pi) => paragraphs.push({ si, pi, orig: p, text: strip(p) })));
    const spans = new Map();
    const picks = [];
    const idx = lang === 'ru' ? 0 : 1;
    const take = (target, kind, rx) => {
      const hit = rx && findAnchor(paragraphs, rx, spans);
      if (!hit) return false;
      if (!spans.has(hit.par)) spans.set(hit.par, []);
      spans.get(hit.par).push({ start: hit.start, end: hit.end });
      picks.push({ target, kind, ...hit });
      return true;
    };
    let nSvc = 0, nArt = 0;
    // the main service first, so a mention of it is not used up by article links
    for (const slug of services) {
      if (nSvc >= 1) break;
      if (take(`svc:${slug}`, 'service', SERVICE_ANCHORS[slug]?.[idx])) nSvc++;
    }
    for (const t of targets) {
      if (nArt >= MAX_ARTICLE_LINKS) break;
      if (take(t, 'article', ARTICLE_ANCHORS[t]?.[idx])) nArt++;
    }
    for (const slug of services) {
      if (nSvc >= MAX_SERVICE_LINKS) break;
      if (picks.some((x) => x.target === `svc:${slug}`)) continue;
      if (take(`svc:${slug}`, 'service', SERVICE_ANCHORS[slug]?.[idx])) nSvc++;
    }
    report.push({ id, lang, articles: nArt, services: nSvc, picks: picks.map((p) => `${p.kind === 'article' ? 'A' : 'S'}:${p.target.slice(0, 28)} «${paragraphs[p.par].text.slice(p.start, p.end)}»`) });
    // build new paragraph texts
    for (const p of paragraphs) {
      const mine = picks.filter((x) => paragraphs[x.par] === p).sort((a, b) => b.start - a.start);
      let t = p.text;
      for (const x of mine) t = `${t.slice(0, x.start)}[[${x.target}|${t.slice(x.start, x.end)}]]${t.slice(x.end)}`;
      if (t !== p.orig) {
        if (/['\\\n]/.test(p.orig) || /['\\\n]/.test(t)) { report.push({ id, lang, skipped: 'quote or backslash in paragraph' }); continue; }
        if (!edits.has(art.file)) edits.set(art.file, []);
        edits.get(art.file).push({ from: p.orig, to: t, id });
      }
    }
  }
}

// ---- report
let lowA = 0, lowS = 0, none = 0;
for (const r of report) {
  if (r.skipped) { console.log(`SKIP ${r.id} ${r.lang}: ${r.skipped}`); continue; }
  const flag = (r.articles < 2 ? ' LOW-ARTICLES' : '') + (r.services < 1 ? ' NO-SERVICE' : '');
  if (r.articles < 2) lowA++;
  if (r.services < 1) lowS++;
  if (r.articles + r.services === 0) none++;
  if (process.argv.includes('--verbose') || flag) console.log(`${r.id} [${r.lang}] A${r.articles} S${r.services}${flag}  ${r.picks.join(' | ')}`);
}
const total = report.filter((r) => !r.skipped).length;
console.log(`\nplans: ${total}, fewer than 2 article links: ${lowA}, without service link: ${lowS}, without any link: ${none}`);

if (APPLY) {
  let changed = 0;
  for (const [file, list] of edits) {
    let src = fs.readFileSync(file, 'utf8');
    for (const e of list) {
      const needle = `'${e.from}'`;
      const keyIdx = src.indexOf(`'${e.id}': {`);
      if (keyIdx < 0) { console.log(`no key for ${e.id}`); continue; }
      const nextKey = src.slice(keyIdx + 5).search(/\n  '[a-z0-9-]+': \{/);
      const end = nextKey < 0 ? src.length : keyIdx + 5 + nextKey;
      const seg = src.slice(keyIdx, end);
      const n = seg.split(needle).length - 1;
      if (n < 1) { console.log(`cannot place edit for ${e.id} (${n} matches)`); continue; }
      // replace only the first occurrence in this article's segment (RU and RO texts differ)
      const i = seg.indexOf(needle);
      src = src.slice(0, keyIdx + i) + `'${e.to}'` + src.slice(keyIdx + i + needle.length);
      changed++;
    }
    fs.writeFileSync(file, src);
  }
  console.log(`paragraphs changed: ${changed}`);
}
