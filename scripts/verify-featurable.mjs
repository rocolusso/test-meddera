#!/usr/bin/env node
/**
 * Unit check of src/lib/google-reviews/featurable.ts against the local stub of the API (scripts/mock-featurable.mjs):
 * the mapping (original text instead of the English translation, empty reviews skipped, totals), and every way the
 * API can fail (HTTP error, no widget, no reviews, unreachable, no ID), each of which must give { data: null, reason }.
 * The module is TypeScript, so run it with tsx:   npx tsx scripts/verify-featurable.mjs
 */
import { spawn } from 'node:child_process';

let failed = 0;
const ok = (cond, msg) => {
  if (cond) console.log('ok   ' + msg);
  else {
    failed += 1;
    console.log('FAIL ' + msg);
  }
};

const stubs = [];
const start = (mode, port) =>
  new Promise((resolve) => {
    const p = spawn(process.execPath, ['scripts/mock-featurable.mjs', `--port=${port}`, `--mode=${mode}`], { stdio: ['ignore', 'pipe', 'inherit'] });
    stubs.push(p);
    p.stdout.once('data', () => resolve());
  });
await start('ok', 4121);
await start('fail', 4122);
await start('empty', 4123);
await start('v1', 4124);

async function run(base, id) {
  // base URL and widget ID are read on every call
  process.env.FEATURABLE_API_BASE = base;
  if (id === undefined) delete process.env.FEATURABLE_WIDGET_ID;
  else process.env.FEATURABLE_WIDGET_ID = id;
  const mod = await import('../src/lib/google-reviews/featurable.ts');
  const fn = mod.getFeaturableReviews ?? mod.default?.getFeaturableReviews;
  return fn();
}

const good = await run('http://127.0.0.1:4121', 'test');
ok(good.data !== null, 'ok: reviews returned');
if (good.data) {
  const d = good.data;
  ok(d.reviews.length === 5, `ok: 5 reviews (${d.reviews.length})`);
  ok(d.reviews[0].comment.startsWith('Обращалась за консультацией'), 'ok: the original (Russian) text is used, not the English translation');
  ok(d.reviews.every((r) => !/^[A-Za-z]/.test(r.comment)), 'ok: no review shows Google\'s translation');
  ok(d.totalReviewCount === 8 && d.averageRating === 5, `ok: totals from the Google summary (${d.totalReviewCount} reviews, rating ${d.averageRating})`);
  ok(d.reviews[0].reviewer.displayName === 'Иванова Анна' && d.reviews[0].starRating === 5, 'ok: reviewer name and stars mapped');
  ok(typeof d.reviews[0].createTime === 'string' && !Number.isNaN(Date.parse(d.reviews[0].createTime)), 'ok: the date of the review is the date it was published');
  ok(d.reviews.every((r) => r.updateTime === r.createTime) && new Set(d.reviews.map((r) => r.createTime)).size === d.reviews.length, 'ok: createTime = updateTime = day of publication (not the day of the sync), different per review');
}
for (const [label, base, id, re] of [
  ['HTTP 500', 'http://127.0.0.1:4122', 'test', /answered 500/],
  ['no reviews', 'http://127.0.0.1:4123', 'test', /no reviews/],
  ['v1 id / unknown widget', 'http://127.0.0.1:4124', 'test', /no widget/],
  ['unreachable', 'http://127.0.0.1:9', 'test', /unreachable/],
  ['no widget ID', 'http://127.0.0.1:4121', undefined, /FEATURABLE_WIDGET_ID is not set/],
]) {
  const r = await run(base, id);
  ok(r.data === null && re.test(r.reason), `${label}: no data, reason «${r.reason}»`);
}

stubs.forEach((p) => p.kill());
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
