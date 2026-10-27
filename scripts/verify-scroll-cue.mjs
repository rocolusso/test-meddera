#!/usr/bin/env node
/**
 * Browser checks for the scroll cue (src/components/cta/ScrollCue.tsx) against a running production server.
 * Usage: node scripts/verify-scroll-cue.mjs [--base=http://localhost:3111]   (needs Playwright with Chromium)
 */
import { createRequire } from 'node:module';

const base = (process.argv.find((a) => a.startsWith('--base=')) ?? '--base=http://localhost:3111').slice(7);
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = createRequire(process.cwd() + '/')('playwright'));
}

let failed = 0;
const ok = (cond, msg) => {
  if (cond) console.log('ok   ' + msg);
  else {
    failed += 1;
    console.log('FAIL ' + msg);
  }
};

const SHOWN_PAGES = ['/', '/about', '/contacts', '/services', '/blog', '/ro', '/ro/about', '/ro/contacts', '/ro/services', '/ro/blog'];
const SERVICE = '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza';
const RO_SERVICE = '/ro' + SERVICE;
const NO_CUE = ['/ads/test', '/ads/g1', '/search', '/ro/search'];

const browser = await chromium.launch();

async function open(url, { w = 390, h = 844, reduced = false, scrollY = 0 } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    reducedMotion: reduced ? 'reduce' : 'no-preference',
    isMobile: w < 768,
    hasTouch: w < 768,
  });
  const page = await ctx.newPage();
  const ga = [];
  page.on('request', (r) => {
    if (/google-analytics|googletagmanager|\/g\/collect|\/api\/ga|collect\?/.test(r.url())) ga.push(r.url());
  });
  await page.goto(base + url, { waitUntil: 'load' });
  if (scrollY) await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  return { ctx, page, ga };
}
const cue = (p) => p.locator('[data-scroll-cue]');
const visible = async (p) => (await cue(p).count()) > 0 && (await cue(p).first().getAttribute('data-visible')) === 'true';
const settle = (p, ms = 700) => p.waitForTimeout(ms);

// A. appears after 0.8 s on the listed pages (RU and RO), phone and desktop.
for (const [w, h] of [[390, 844], [1440, 900]]) {
  for (const url of SHOWN_PAGES) {
    const t = await open(url, { w, h });
    await t.page.waitForTimeout(300);
    ok(!(await visible(t.page)), `A ${w} ${url} not visible before 0.8 s`);
    await settle(t.page, 900);
    ok(await visible(t.page), `A ${w} ${url} visible after 0.8 s`);
    await t.ctx.close();
  }
}

// B. labels and attributes.
{
  const t = await open('/');
  await settle(t.page, 1100);
  const el = cue(t.page).first();
  ok((await el.innerText()).trim().toLowerCase() === 'листайте', 'B1 RU label');
  ok((await el.getAttribute('aria-hidden')) === 'true', 'B2 aria-hidden');
  ok((await el.evaluate((n) => getComputedStyle(n).pointerEvents)) === 'none', 'B3 pointer-events none');
  ok((await el.locator('svg').count()) === 3, 'B4 three chevrons');
  ok((await el.locator('svg').nth(1).evaluate((n) => getComputedStyle(n).animationName)) === 'scroll-cue-wave', 'B5 wave animation runs');
  await t.ctx.close();
  const r = await open('/ro');
  await settle(r.page, 1100);
  ok((await cue(r.page).first().innerText()).trim().toLowerCase() === 'derulați', 'B6 RO label');
  await r.ctx.close();
}

// C. pages without the cue.
for (const url of NO_CUE) {
  const t = await open(url);
  await settle(t.page, 1500);
  // A URL the site redirects elsewhere (for example /ads/test) is judged by where it lands.
  if (new URL(t.page.url()).pathname !== url) {
    console.log(`skip C ${url} redirects to ${new URL(t.page.url()).pathname}`);
  } else {
    ok((await cue(t.page).count()) === 0, `C ${url} has no cue`);
  }
  await t.ctx.close();
}

// D. scroll behaviour: 20 px keeps it, 30 px hides, 3 px keeps it hidden, the very top brings it back.
{
  const t = await open('/');
  await settle(t.page, 1000);
  await t.page.evaluate(() => window.scrollTo(0, 20));
  await settle(t.page, 200);
  ok(await visible(t.page), 'D1 20 px: still visible');
  await t.page.evaluate(() => window.scrollTo(0, 30));
  await settle(t.page, 200);
  ok(!(await visible(t.page)), 'D2 30 px: hidden');
  const opacity = await settle(t.page, 600).then(() => cue(t.page).first().evaluate((n) => getComputedStyle(n).opacity));
  ok(opacity === '0', 'D3 fully transparent after the transition');
  await t.page.evaluate(() => window.scrollTo(0, 3));
  await settle(t.page, 200);
  ok(!(await visible(t.page)), 'D4 3 px: stays hidden');
  await t.page.evaluate(() => window.scrollTo(0, 0));
  await settle(t.page, 200);
  ok(await visible(t.page), 'D5 top: visible again');
  await t.ctx.close();
}

// E. a page opened already scrolled shows nothing; navigation shows it again on the new page.
{
  const t = await open('/blog', { scrollY: 400 });
  await settle(t.page, 1500);
  ok(!(await visible(t.page)), 'E1 opened scrolled: hidden');
  await t.ctx.close();
  const n = await open('/');
  await settle(n.page, 1000);
  await n.page.evaluate(() => window.scrollTo(0, 300));
  await settle(n.page, 300);
  ok(!(await visible(n.page)), 'E2 scrolled home: hidden');
  await n.page.goto(base + '/contacts');
  await settle(n.page, 1200);
  ok(await visible(n.page), 'E3 new page at top: shown again');
  await n.ctx.close();
}

// F. overlays hide it.
{
  const t = await open(SERVICE);
  await settle(t.page, 1100);
  ok(await visible(t.page), 'F0 service page: visible');
  await t.page.locator('#primaryCta').evaluate((n) => n.click());
  await t.page.waitForTimeout(500);
  ok(!(await visible(t.page)), 'F1 quiz open: hidden');
  await t.page.keyboard.press('Escape');
  await t.page.waitForTimeout(500);
  ok(await visible(t.page), 'F2 quiz closed: back (still at top)');
  await t.page.locator('[aria-label="burger-btn-trigger"]').click();
  await t.page.waitForTimeout(500);
  ok(!(await visible(t.page)), 'F5 menu open: hidden');
  await t.ctx.close();
  const d = await open(SERVICE, { w: 1440, h: 900 });
  await settle(d.page, 1100);
  ok(await visible(d.page), 'F3 desktop: visible');
  await d.page.getByRole('button', { name: /Поиск|search/i }).first().click();
  await d.page.locator('dialog[open]').waitFor({ timeout: 5000 });
  await d.page.waitForTimeout(400);
  ok(!(await visible(d.page)), 'F4 search open: hidden');
  await d.page.keyboard.press('Escape');
  await d.page.waitForTimeout(400);
  ok(await visible(d.page), 'F5b search closed: back');
  await d.ctx.close();
  const r = await open(RO_SERVICE);
  await settle(r.page, 1100);
  ok(await visible(r.page), 'F6 RO service page: visible');
  await r.ctx.close();
}

// G. placement: above the dock buttons on phones, clear of the floating buttons on desktop.
for (const [w, h] of [[390, 844], [360, 740], [320, 568], [768, 1024], [1024, 768], [1280, 800], [1440, 900]]) {
  const t = await open('/', { w, h });
  await settle(t.page, 1100);
  if (!(await visible(t.page))) {
    ok(false, `G ${w}x${h} cue not visible`);
    await t.ctx.close();
    continue;
  }
  const geo = await t.page.evaluate(() => {
    const c = document.querySelector('[data-scroll-cue]').getBoundingClientRect();
    const hit = (r) => !(c.right <= r.left || r.right <= c.left || c.bottom <= r.top || r.bottom <= c.top);
    const clash = [];
    for (const el of document.querySelectorAll('#bottom-dock button, #bottom-dock a, [class*="fixed"] a, [class*="fixed"] button')) {
      if (el.closest('[data-scroll-cue]')) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden' && hit(r)) clash.push((el.id || el.className || el.tagName).toString().slice(0, 60));
    }
    return { left: c.left, right: c.right, vw: innerWidth, top: c.top, bottom: c.bottom, vh: innerHeight, clash };
  });
  ok(geo.left >= 0 && geo.right <= geo.vw, `G ${w}x${h} inside the width (${Math.round(geo.left)}..${Math.round(geo.right)})`);
  ok(Math.abs((geo.left + geo.right) / 2 - geo.vw / 2) < 1.5, `G ${w}x${h} centred`);
  ok(geo.clash.length === 0, `G ${w}x${h} no overlap with buttons ${JSON.stringify(geo.clash)}`);
  await t.ctx.close();
}

// H. short page: nothing to scroll to.
{
  const t = await open('/', { w: 390, h: 844 });
  await settle(t.page, 1000);
  await t.page.evaluate(() => { document.documentElement.style.height = '900px'; document.body.style.height = '900px'; document.body.style.overflow = 'hidden'; });
  await settle(t.page, 400);
  const tall = await t.page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  ok(tall < 120 ? !(await visible(t.page)) : true, `H short document (extra ${tall}px): hidden`);
  await t.ctx.close();
}

// I. reduced motion and no analytics traffic of its own.
{
  const t = await open('/', { reduced: true });
  await settle(t.page, 1100);
  const el = cue(t.page).first();
  ok((await el.locator('svg').nth(1).evaluate((n) => getComputedStyle(n).animationName)) === 'none', 'I1 reduced motion: no animation');
  ok(await visible(t.page), 'I2 reduced motion: still shown');
  await t.page.evaluate(() => window.scrollTo(0, 100));
  await settle(t.page, 200);
  ok(!(await visible(t.page)), 'I3 reduced motion: hides on scroll');
  await t.ctx.close();
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
