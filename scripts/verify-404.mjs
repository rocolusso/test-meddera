#!/usr/bin/env node
/**
 * Checks the 404 handling of a running server.
 * Usage: node scripts/verify-404.mjs <baseUrl> [--skip-sitemap]
 * Unknown page-like URLs must answer 301 to the home page of their language; technical paths keep a real 404;
 * every URL of the sitemap must answer 200 without a redirect.
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
  return { status: res.status, location: res.headers.get('location'), cache: res.headers.get('cache-control'), reason: res.headers.get('x-redirect-reason') };
}
const loc = (r) => (r.location ? r.location.replace(base, '') : null);

function expect301(name, r, to) {
  if (r.status !== 301) return fail(`${name}: status ${r.status}, expected 301`);
  if (loc(r) !== to) return fail(`${name}: Location ${loc(r)}, expected ${to}`);
  if (r.cache !== 'no-store') fail(`${name}: Cache-Control ${r.cache}, expected no-store`);
  if (r.reason !== 'not-found') fail(`${name}: x-redirect-reason ${r.reason}`);
}

if (!onlySitemap) {
const unknown = [
  ['/nonexistent', '/'],
  ['/nonexistent/deep/path', '/'],
  ['/Blog', '/'],
  ['/ro/nonexistent', '/ro'],
  ['/ro/nonexistent/deep', '/ro'],
  ['/blog/nonexistent-slug', '/'],
  ['/ro/blog/nonexistent-slug', '/ro'],
  ['/services/nonexistent', '/'],
  ['/ro/services/nonexistent', '/ro'],
  ['/blog/page/11', '/blog'],
  ['/blog/page/31', '/blog'],
  ['/blog/page/abc', '/blog'],
  ['/ro/blog/page/11', '/ro/blog'],
  ['/ro/blog/page/31', '/ro/blog'],
  ['/wp-admin', '/'],
  ['/ads/zzz', '/'],
];
for (const [p, to] of unknown) expect301(p, await hit(p), to);
expect301('HEAD /nonexistent', await hit('/nonexistent', 'HEAD'), '/');

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

// redirect targets are alive
for (const t of ['/', '/ro', '/blog', '/ro/blog']) {
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
