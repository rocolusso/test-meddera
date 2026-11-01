#!/usr/bin/env node
/**
 * Checks the 404 handling of a running server.
 * Usage: node scripts/verify-404.mjs <baseUrl> [--skip-sitemap]
 * Unknown page-like URLs must answer 404 with the 404 page of their language (PLAN 404L-01, no more 301 to the home
 * page); moved pages keep their 301; technical paths keep a plain 404; every sitemap URL answers 200 without a redirect.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.argv[2] || 'http://localhost:3111').replace(/\/$/, '');
const skipSitemap = process.argv.includes('--skip-sitemap');
const onlySitemap = process.argv.includes('--only-sitemap');
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const redirects = JSON.parse(fs.readFileSync(path.join(root, 'src/blog-data/blog-redirects.json'), 'utf8'));

const errors = [];
const fail = (msg) => errors.push(msg);

async function hit(p, method = 'GET') {
  let res;
  for (let attempt = 0; ; attempt++) {
    try {
      res = await fetch(base + p, { method, redirect: 'manual' });
      break;
    } catch (e) {
      if (attempt >= 2) throw e;
    }
  }
  const body = method === 'GET' && res.status === 404 ? await res.text() : '';
  return {
    status: res.status,
    location: res.headers.get('location'),
    cache: res.headers.get('cache-control'),
    robots: res.headers.get('x-robots-tag'),
    lang: (body.match(/<html[^>]*\blang="([a-z]+)"/) || [])[1] || null,
    notFoundPage: body.includes('data-page-not-found'),
  };
}
const loc = (r) => (r.location ? r.location.replace(base, '') : null);

function expect404Page(name, r, lang) {
  if (r.status !== 404) return fail(`${name}: status ${r.status}${r.location ? ' -> ' + r.location : ''}, expected 404`);
  if (r.cache !== 'no-store') fail(`${name}: Cache-Control ${r.cache}, expected no-store`);
  if (!/noindex/.test(r.robots || '')) fail(`${name}: X-Robots-Tag ${r.robots}`);
  if (r.lang !== null || r.notFoundPage) {
    if (r.lang !== lang) fail(`${name}: lang ${r.lang}, expected ${lang}`);
    if (!r.notFoundPage) fail(`${name}: not the 404 page`);
  }
}

if (!onlySitemap) {
const unknown = [
  ['/nonexistent', 'ru'],
  ['/nonexistent/deep/path', 'ru'],
  ['/Blog', 'ru'],
  ['/ro/nonexistent', 'ro'],
  ['/ro/nonexistent/deep', 'ro'],
  ['/blog/nonexistent-slug', 'ru'],
  ['/ro/blog/nonexistent-slug', 'ro'],
  ['/services/nonexistent', 'ru'],
  ['/ro/services/nonexistent', 'ro'],
  ['/blog/page/11', 'ru'],
  ['/blog/page/31', 'ru'],
  ['/blog/page/abc', 'ru'],
  ['/ro/blog/page/11', 'ro'],
  ['/ro/blog/page/31', 'ro'],
  ['/wp-admin', 'ru'],
  ['/ads/zzz', 'ru'],
  ['/developer/zzz', 'ru'],
  ['/404-page', 'ru'],
  ['/ro/404-page', 'ro'],
];
for (const [p, lang] of unknown) expect404Page(p, await hit(p), lang);
{
  const r = await hit('/nonexistent', 'HEAD');
  if (r.status !== 404) fail(`HEAD /nonexistent: status ${r.status}, expected 404`);
}

// removed articles keep their successor, never the home page by accident
for (const r of redirects.slice(0, 40)) {
  const a = await hit(`/blog/${r.ruSlug}`);
  if (![301, 308].includes(a.status) || loc(a) !== r.ruTo) fail(`/blog/${r.ruSlug}: ${a.status} ${loc(a)}, expected ${r.ruTo}`);
  const b = await hit(`/ro/blog/${r.roSlug}`);
  if (![301, 308].includes(b.status) || loc(b) !== r.roTo) fail(`/ro/blog/${r.roSlug}: ${b.status} ${loc(b)}, expected ${r.roTo}`);
}

// technical paths keep a real 404
for (const p of ['/_next/static/missing.js', '/api/missing', '/missing.png', '/assets/missing.jpg']) {
  const r = await hit(p);
  if (r.status !== 404) fail(`${p}: status ${r.status}, expected 404`);
}
{
  const res = await fetch(base + '/api/missing', { method: 'POST', redirect: 'manual' });
  if (res.status !== 404) fail(`POST /api/missing: status ${res.status}, expected 404`);
}
for (const p of ['/robots.txt', '/sitemap.xml']) {
  const r = await hit(p);
  if (r.status !== 200) fail(`${p}: status ${r.status}, expected 200`);
}

// main pages are alive
for (const t of ['/', '/ro', '/blog', '/ro/blog', '/developer']) {
  const r = await hit(t);
  if (r.status !== 200) fail(`target ${t}: status ${r.status}`);
}

}

if (!skipSitemap) {
  const xml = await (await fetch(base + '/sitemap.xml')).text();
  const urls = [...xml.matchAll(/<loc>https:\/\/meddera\.md([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
  const rangeArg = process.argv.find((a) => a.startsWith('--range='));
  const [from, to] = rangeArg ? rangeArg.slice(8).split('-').map(Number) : [0, urls.length];
  const part = urls.slice(from, to);
  let i = 0;
  async function worker() {
    while (i < part.length) {
      const p = part[i++];
      const r = await hit(p);
      if (r.status !== 200) fail(`sitemap ${p}: status ${r.status}${r.location ? ' -> ' + r.location : ''}`);
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  console.log(`checked ${part.length} of ${urls.length} sitemap URLs`);
}

if (errors.length) {
  for (const e of errors) console.log(e);
  console.log(`\nverify-404: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log('verify-404: OK');
