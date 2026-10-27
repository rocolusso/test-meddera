#!/usr/bin/env node
/**
 * Checks the site search of a running server.
 * Usage: node scripts/verify-search.mjs <baseUrl> [--skip-index]
 *
 * - API contract: parameters, status codes, cache headers, no reflection of the query
 * - golden queries in both languages, diacritics and letter case, a query without matches
 * - every result URL answers 200 without a redirect and is not an old redirect source
 * - /search and /ro/search: 200, noindex, disallowed in robots.txt, absent from the sitemap
 * - unless --skip-index: the body text of every blog page of the sitemap is searchable
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const base = (args.find((a) => /^https?:/.test(a)) || 'http://localhost:3111').replace(/\/$/, '');
const skipIndex = args.includes('--skip-index');
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const redirects = JSON.parse(fs.readFileSync(path.join(root, 'src/blog-data/blog-redirects.json'), 'utf8'));
const redirectSources = new Set(redirects.flatMap((r) => [`/blog/${r.ruSlug}`, `/ro/blog/${r.roSlug}`]));

const errors = [];
let checks = 0;
const fail = (m) => errors.push(m);
const check = (ok, m) => {
  checks += 1;
  if (!ok) fail(m);
};

async function get(p, init = {}) {
  let res;
  for (let attempt = 0; ; attempt++) {
    try {
      res = await fetch(base + p, { redirect: 'manual', ...init });
      break;
    } catch (e) {
      if (attempt >= 2) throw e;
    }
  }
  return res;
}

async function api(params) {
  const res = await get(`/api/search?${new URLSearchParams(params).toString()}`);
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    /* not JSON */
  }
  return { res, text, json };
}

const CACHE_OK = 'public, s-maxage=3600, stale-while-revalidate=86400';
const seenUrls = new Set();

async function golden(lang, q, { min = 1, max = Infinity, mustInclude } = {}) {
  const { res, json } = await api({ q, lang, limit: '30' });
  const name = `[${lang}] "${q}"`;
  check(res.status === 200, `${name}: status ${res.status}`);
  if (!json || !Array.isArray(json.results)) return fail(`${name}: no results array`);
  check(json.total >= min && json.total <= max, `${name}: total ${json.total}, expected ${min}..${max}`);
  check(res.headers.get('cache-control') === CACHE_OK, `${name}: Cache-Control ${res.headers.get('cache-control')}`);
  check(/noindex/.test(res.headers.get('x-robots-tag') || ''), `${name}: X-Robots-Tag ${res.headers.get('x-robots-tag')}`);
  check(/application\/json/.test(res.headers.get('content-type') || ''), `${name}: content-type ${res.headers.get('content-type')}`);
  const prefix = lang === 'ro' ? '/ro' : '';
  for (const r of json.results) {
    check(r.url.startsWith(prefix || '/') && (lang === 'ro' ? r.url.startsWith('/ro') : !r.url.startsWith('/ro')), `${name}: ${r.url} is in the wrong language`);
    check(!redirectSources.has(r.url), `${name}: ${r.url} is an old redirect source`);
    check(r.snippet === undefined || r.snippet.length <= 200, `${name}: snippet too long (${r.snippet.length})`);
    check(r.titleHl.length % 2 === 0 && r.snippetHl.length % 2 === 0, `${name}: odd highlight array`);
    for (let i = 0; i < r.snippetHl.length; i += 2) check(r.snippetHl[i] < r.snippetHl[i + 1] && r.snippetHl[i + 1] <= r.snippet.length, `${name}: bad snippet highlight in ${r.url}`);
    for (let i = 0; i < r.titleHl.length; i += 2) check(r.titleHl[i] < r.titleHl[i + 1] && r.titleHl[i + 1] <= r.title.length, `${name}: bad title highlight in ${r.url}`);
    seenUrls.add(r.url);
  }
  if (mustInclude) check(json.results.some((r) => r.url === mustInclude), `${name}: ${mustInclude} is missing`);
  return json;
}

// ---------- API contract
{
  const bad = [
    ['no lang', { q: 'ботокс' }],
    ['unknown lang', { q: 'ботокс', lang: 'en' }],
    ['no q', { lang: 'ru' }],
    ['empty q', { q: '', lang: 'ru' }],
    ['one char', { q: 'а', lang: 'ru' }],
    ['spaces only', { q: '   ', lang: 'ru' }],
    ['65 chars', { q: 'а'.repeat(65), lang: 'ru' }],
    ['control char', { q: 'a\u0000b', lang: 'ru' }],
    ['newline', { q: 'a\nb', lang: 'ru' }],
  ];
  for (const [name, params] of bad) {
    const { res } = await api(params);
    check(res.status === 400, `400 expected for ${name}, got ${res.status}`);
    check(res.headers.get('cache-control') === 'no-store', `${name}: error Cache-Control ${res.headers.get('cache-control')}`);
  }
  const edge = await api({ q: 'аб', lang: 'ru' });
  check(edge.res.status === 200, `2-char query: status ${edge.res.status}`);
  const long = await api({ q: 'а'.repeat(64), lang: 'ru' });
  check(long.res.status === 200, `64-char query: status ${long.res.status}`);

  const l1 = await api({ q: 'ботокс', lang: 'ru', limit: '1' });
  check(l1.json?.results.length === 1 && l1.json.total > 1, 'limit=1 returns one result and the full total');
  const l999 = await api({ q: 'ботокс', lang: 'ru', limit: '999' });
  check((l999.json?.results.length ?? 99) <= 30, `limit=999 is clamped (${l999.json?.results.length})`);
  const lbad = await api({ q: 'ботокс', lang: 'ru', limit: 'abc' });
  check(lbad.json?.results.length === 8, `limit=abc falls back to 8 (${lbad.json?.results.length})`);
  const l0 = await api({ q: 'ботокс', lang: 'ru', limit: '0' });
  check(l0.json?.results.length === 1, `limit=0 is raised to 1 (${l0.json?.results.length})`);

  const xss = '<script>alert(1)</script>';
  const reflect = await api({ q: xss, lang: 'ru' });
  check(reflect.res.status === 200 && /application\/json/.test(reflect.res.headers.get('content-type') || ''), 'markup query: JSON answer');
  check(!reflect.text.includes('<script'), 'markup query is not reflected');
  check(!reflect.text.includes('alert'), 'query text is not echoed in the answer');
}

// ---------- golden queries
const ruBotox = await golden('ru', 'ботокс', { min: 15 });
const ruBotoxCase = await golden('ru', 'БОТОКСА', { min: 15 });
check(ruBotox && ruBotoxCase && ruBotox.total === ruBotoxCase.total, 'RU: "ботокс" and "БОТОКСА" give the same total');
await golden('ru', 'губы', { min: 5, mustInclude: '/blog/uvelichenie-gub-beltsy' });
await golden('ru', 'акне', { min: 3 });
await golden('ru', 'Блог', { min: 1, mustInclude: '/blog' });
await golden('ru', 'qwertyzz', { min: 0, max: 0 });
const roBotox = await golden('ro', 'botox', { min: 15 });
await golden('ro', 'balti', { min: 5 });
const roBalti = await golden('ro', 'bălți', { min: 5 });
const roBaltiPlain = await golden('ro', 'BALTI', { min: 5 });
check(roBalti && roBaltiPlain && roBalti.total === roBaltiPlain.total, 'RO: "bălți" and "BALTI" give the same total');
await golden('ro', 'acnee', { min: 3 });
await golden('ro', 'Contacte', { min: 1, mustInclude: '/ro/contacts' });
await golden('ro', 'qwertyzz', { min: 0, max: 0 });
await golden('ru', 'ботокс губы', { min: 0 });
if (ruBotox && roBotox) check(ruBotox.total >= 15 && roBotox.total >= 15, 'both languages index the botox cluster');

// every URL that search returned must be a live page
for (const url of seenUrls) {
  const res = await get(url);
  check(res.status === 200, `result URL ${url}: status ${res.status}`);
}

// ---------- search pages
for (const [p, lang] of [['/search', 'ru'], ['/ro/search', 'ro']]) {
  const res = await get(`${p}?q=test`);
  const html = await res.text();
  check(res.status === 200, `${p}: status ${res.status}`);
  check(/<meta name="robots" content="[^"]*noindex[^"]*"/.test(html), `${p}: no noindex meta`);
  check(!/rel="canonical"/.test(html), `${p}: should not declare a canonical URL`);
  // The field itself is client-rendered (useSearchParams), so the static HTML carries the heading and shell.
  check(/<h1[^>]*>/.test(html), `${p}: no <h1> in the page`);
  check(new RegExp(`<html[^>]*lang="${lang}`).test(html), `${p}: html lang is not ${lang}`);
}
const robots = await (await get('/robots.txt')).text();
check(/^Disallow: \/search$/m.test(robots), 'robots.txt: Disallow: /search is missing');
check(/^Disallow: \/ro\/search$/m.test(robots), 'robots.txt: Disallow: /ro/search is missing');
check(/^Disallow: \/api\/$/m.test(robots), 'robots.txt: Disallow: /api/ is missing');
const sitemap = await (await get('/sitemap.xml')).text();
check(!/\/search/.test(sitemap), 'sitemap.xml must not contain search pages');

// ---------- every blog page is searchable by its own body text
if (!skipIndex) {
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, ''))
    .filter((u) => /^(\/ro)?\/blog\/[^/]+$/.test(u) && !/\/blog\/page$/.test(u));
  check(urls.length > 150, `sitemap lists ${urls.length} blog pages, expected more than 150`);

  const body = (html) => {
    const m = html.match(/<article[\s\S]*?<\/article>/i) || html.match(/<main[\s\S]*?<\/main>/i);
    return (m ? m[0] : html)
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ');
  };
  const paragraphs = (html) =>
    [...body(html).matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((m) => m[1].replace(/<a [^>]*>[\s\S]*?<\/a>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim())
      .filter((t) => t.length > 120);

  let unsearchable = 0;
  for (const url of urls) {
    const lang = url.startsWith('/ro/') ? 'ro' : 'ru';
    const html = await (await get(url)).text();
    const longest = paragraphs(html).sort((a, b) => b.length - a.length)[0];
    if (!longest) {
      fail(`${url}: no body paragraph found in the page`);
      continue;
    }
    const words = [...new Set(longest.toLowerCase().match(/[\p{L}]{9,}/gu) || [])].sort((a, b) => b.length - a.length).slice(0, 4);
    let found = false;
    for (const w of words) {
      const { json } = await api({ q: w, lang, limit: '30' });
      if (json?.results?.some((r) => r.url === url)) {
        found = true;
        break;
      }
    }
    if (!found) {
      unsearchable += 1;
      fail(`${url}: text of the page is not searchable (tried: ${words.join(', ')})`);
    }
  }
  check(unsearchable === 0, `${unsearchable} blog pages are not searchable by their own text`);
}

if (errors.length) {
  console.error(`verify-search: ${errors.length} problem(s) in ${checks} checks`);
  for (const e of errors.slice(0, 60)) console.error(` - ${e}`);
  process.exit(1);
}
console.log(`verify-search: OK (${checks} checks, ${seenUrls.size} result URLs fetched${skipIndex ? ', index check skipped' : ''})`);
