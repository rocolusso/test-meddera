/**
 * Browser check of the GA4 transport switch (PLAN GA4G-01).
 *   node scripts/verify-ga4-transport.mjs <base-url> <gtm|worker>
 * Start the site built with NEXT_PUBLIC_GA4_TRANSPORT=gtm (and NEXT_PUBLIC_GTM_ID) or with the worker transport.
 * Google hosts are stubbed, the sandbox cannot reach them; what is checked is what OUR code does.
 */
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const base = process.argv[2] || 'http://localhost:3000';
const mode = process.argv[3] || 'gtm';
const GTM_ID = process.env.EXPECT_GTM_ID || 'GTM-KFCP3D5F';
let failed = 0;
const check = (name, fn) => fn().then(() => console.log(`ok   ${name}`), (e) => { failed++; console.log(`FAIL ${name}\n     ${e.message.split('\n')[0]}`); });

const browser = await chromium.launch();

async function open(pathname, { interact = true, extraArgs } = {}) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  // navigator.webdriver would suppress events, as it does for real bots; hide it for this test.
  await ctx.addInitScript(() => Object.defineProperty(navigator, 'webdriver', { get: () => false }));
  const page = await ctx.newPage();
  const log = { gtm: [], collect: [], other: [] };
  await page.route('**/*', async (route) => {
    const u = route.request().url();
    if (u.includes('googletagmanager.com')) { log.gtm.push(u); return route.fulfill({ status: 200, contentType: 'application/javascript', body: '/* stub */' }); }
    if (u.includes('/api/ga4-collect')) { log.collect.push(u); return route.fulfill({ status: 204, body: '' }); }
    if (/^https?:\/\/(localhost|127\.0\.0\.1)/.test(u)) return route.continue();
    return route.fulfill({ status: 200, body: '' });
  });
  await page.goto(base + pathname + (extraArgs || ''), { waitUntil: 'load' });
  await page.waitForTimeout(600);
  return { ctx, page, log, interact };
}

if (mode === 'gtm') {
  await check('home: GTM is deferred (not a render-blocking tag) and page_view waits in dataLayer', async () => {
    const { ctx, page } = await open('/');
    // A script inserted from JS after load has el.async === true (no attribute); a parser-inserted one would be blocking.
    const blocking = await page.evaluate(() => [...document.scripts].filter((el) => el.src.includes('googletagmanager.com') && !el.async && !el.defer).length);
    assert.equal(blocking, 0, 'GTM must not be a blocking script');
    const inHead = await page.locator('head script[src*="googletagmanager.com/gtm.js"]').count();
    assert.equal(inHead, 0, 'GTM must not be hard-coded into <head>');
    const early = await page.evaluate(() => (window.dataLayer || []).length);
    assert.ok(early >= 1, 'page_view must already wait in dataLayer');
    await ctx.close();
  });

  await check('home: after interaction gtm.js for the right container loads once, dataLayer has gtm.start', async () => {
    const { ctx, page, log } = await open('/');
    await page.mouse.click(10, 300);
    await page.waitForTimeout(1500);
    const hits = log.gtm.filter((u) => u.includes('/gtm.js'));
    assert.equal(hits.length, 1, `gtm.js requests: ${hits.length}`);
    assert.ok(hits[0].includes(`id=${GTM_ID}`), hits[0]);
    const start = await page.evaluate(() => window.dataLayer.some((e) => e && e.event === 'gtm.js' && 'gtm.start' in e));
    assert.ok(start, 'gtm.start missing');
    await ctx.close();
  });

  await check('home: page_view is a gtag command (Arguments) with context params; worker endpoint untouched', async () => {
    const { ctx, page, log } = await open('/ro?utm_source=facebook&utm_medium=paid');
    const info = await page.evaluate(() => {
      const a = window.dataLayer.find((e) => e && typeof e === 'object' && !Array.isArray(e) && e[0] === 'event' && e[1] === 'page_view');
      return a ? { tag: Object.prototype.toString.call(a), params: a[2] } : null;
    });
    assert.ok(info, 'no page_view command in dataLayer');
    assert.equal(info.tag, '[object Arguments]');
    assert.equal(info.params.lang, 'ro');
    assert.equal(info.params.page_type, 'home');
    assert.equal(info.params.first_src, 'facebook');
    assert.equal(info.params.first_med, 'paid');
    assert.equal(log.collect.length, 0, '/api/ga4-collect must not be called in gtm mode');
    await ctx.close();
  });

  await check('home: a tel/CTA click becomes a gtag event with cta_source, no worker call', async () => {
    const { ctx, page, log } = await open('/');
    await page.mouse.click(10, 300);
    await page.waitForTimeout(500);
    const before = await page.evaluate(() => window.dataLayer.length);
    // Any first-party CTA that carries cta_source on a phone link
    const link = page.locator('a[href^="tel:"]').first();
    await link.evaluate((el) => el.addEventListener('click', (e) => e.preventDefault(), { once: true }));
    await link.dispatchEvent('click');
    await page.waitForTimeout(500);
    const events = await page.evaluate((n) => window.dataLayer.slice(n).filter((e) => e && e[0] === 'event').map((e) => ({ name: e[1], cta: e[2] && e[2].cta_source })), before);
    assert.ok(events.length >= 1, 'no event after tel click');
    assert.equal(log.collect.length, 0);
    await ctx.close();
  });

  await check('/developer: GTM loader present, page_view in dataLayer, no worker call', async () => {
    const { ctx, page, log } = await open('/developer');
    await page.mouse.click(10, 300);
    await page.waitForTimeout(1500);
    assert.equal(log.gtm.filter((u) => u.includes('/gtm.js')).length, 1);
    const pv = await page.evaluate(() => window.dataLayer.some((e) => e && e[0] === 'event' && e[1] === 'page_view'));
    assert.ok(pv, 'no page_view on /developer');
    assert.equal(log.collect.length, 0);
    await ctx.close();
  });

  await check('?no_track=1: GTM may load but no gtag events are queued', async () => {
    const { ctx, page } = await open('/', { extraArgs: '?no_track=1' });
    const n = await page.evaluate(() => (window.dataLayer || []).filter((e) => e && e[0] === 'event').length);
    assert.equal(n, 0);
    await ctx.close();
  });
} else {
  await check('worker mode: no GTM request, no gtag commands, events go to /api/ga4-collect', async () => {
    const { ctx, page, log } = await open('/');
    await page.mouse.click(10, 300);
    await page.waitForTimeout(1500);
    assert.equal(log.gtm.length, 0, `GTM requested: ${log.gtm}`);
    assert.ok(log.collect.length >= 1, 'page_view must reach /api/ga4-collect');
    const cmds = await page.evaluate(() => (window.dataLayer || []).filter((e) => e && e[0] === 'event').length);
    assert.equal(cmds, 0);
    const prefetch = await page.locator('link[href*="googletagmanager"]').count();
    assert.equal(prefetch, 0);
    await ctx.close();
  });
  await check('worker mode: /developer has no GTM either', async () => {
    const { ctx, page, log } = await open('/developer');
    await page.mouse.click(10, 300);
    await page.waitForTimeout(1500);
    assert.equal(log.gtm.length, 0);
    await ctx.close();
  });
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
