#!/usr/bin/env node
/**
 * Messengers and social links (src/lib/social-links.ts, components/ContactChannels.tsx), checked against a running
 * production server: the strip in the footer and the tiles in the contact forms (home, contacts pages, lips pages), their
 * addresses and attributes, labels in the page language, GA4 events with cta_source on click (navigation is blocked
 * in the test), the old tel: tracking, overflow at phone and desktop widths, tab order, the height the tiles add to the
 * form block, and the house rules for the copy (no "free", "!", dashes, "guarantee").
 *
 * Usage: node scripts/verify-footer-social.mjs [--base=http://localhost:3111] [--shots=<dir>]
 * Build and start the site as for verify-reviews.mjs (any mode of GOOGLE_REVIEWS_ENABLED works).
 * Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const shots = arg('shots', '');
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Playwright is not installed (set NODE_PATH to its folder).');
  process.exit(2);
}

let failed = 0;
const ok = (cond, msg) => {
  if (cond) console.log('ok   ' + msg);
  else {
    failed += 1;
    console.log('FAIL ' + msg);
  }
};

const CHANNELS = [
  { key: 'telegram', href: 'https://t.me/+37368550030', newTab: true, event: 'messenger_click', ru: 'Telegram', ro: 'Telegram' },
  { key: 'viber', href: 'viber://chat?number=%2B37368550030', newTab: false, event: 'messenger_click', ru: 'Viber', ro: 'Viber' },
  { key: 'instagram_clinic', href: 'https://www.instagram.com/meddera.md/', newTab: true, event: 'social_click', ru: 'Instagram клиники', ro: 'Instagram clinică' },
  { key: 'instagram_doctor', href: 'https://www.instagram.com/ecaterina_dermatolog.balti/', newTab: true, event: 'social_click', ru: 'Instagram врача', ro: 'Instagram medic' },
  { key: 'facebook', href: 'https://www.facebook.com/p/Meddera-Beauty-Balti-61572519807548/', newTab: true, event: 'social_click', ru: 'Facebook клиники', ro: 'Facebook clinică' },
];
const TITLES = { ru: ['Написать нам', 'Мы в соцсетях'], ro: ['Scrieți-ne', 'Rețele sociale'] };
const BAD_WORDS = /бесплатн|гарант|gratuit|garan|!|—|–/i;

const PAGES = [
  { loc: 'ru', name: 'home', url: '/', form: true },
  { loc: 'ru', name: 'contacts', url: '/contacts', form: true },
  { loc: 'ru', name: 'lips', url: '/services/uvelychenye-gub-v-belczah', form: true },
  { loc: 'ru', name: 'blog', url: '/blog', form: false },
  { loc: 'ro', name: 'home', url: '/ro', form: true },
  { loc: 'ro', name: 'contacts', url: '/ro/contacts', form: true },
  { loc: 'ro', name: 'lips', url: '/ro/services/uvelychenye-gub-v-belczah', form: true },
  { loc: 'ro', name: 'blog', url: '/ro/blog', form: false },
];

const browser = await chromium.launch();
async function open(url, w, { dark = false } = {}) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 768 ? 800 : 900 }, hasTouch: w < 768, colorScheme: dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    window.__cls = 0;
    try {
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {
      // layout-shift is not supported: the check below reads 0
    }
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
    // never leave the site in the test: the click still reaches the tracker, only the navigation is cancelled
    document.addEventListener('click', (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[data-cta-event], a[href^="tel:"]') : null;
      if (a) e.preventDefault();
    }, true);
  });
  if (dark) await page.addInitScript(() => localStorage.setItem('meddera-theme', 'dark'));
  await ctx.route('**/recaptcha/api.js*', (r) => r.fulfill({ contentType: 'text/javascript', body: 'window.grecaptcha={ready:function(cb){cb()},execute:function(){return Promise.resolve("t")}};' }));
  await ctx.route('**/api/form-token', (r) => r.fulfill({ json: { token: '', disabled: true } }));
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page };
}

/** The form loads when its place is near the window: scroll down in steps until the tiles are there. */
async function loadForm(page) {
  for (let i = 0; i < 80; i += 1) {
    if ((await page.locator('[data-contact-channels="form"]').count()) > 0) return true;
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(120);
  }
  return (await page.locator('[data-contact-channels="form"]').count()) > 0;
}
const events = (page) => page.evaluate(async () => (await Promise.all(window.__beacons)).flatMap((s) => JSON.parse(s).events ?? []));

async function readBlock(page, variant) {
  return page.evaluate((v) => {
    const root = document.querySelector(`[data-contact-channels="${v}"]`);
    if (!root) return null;
    return {
      titles: [...root.querySelectorAll(':scope > div > p')].map((p) => p.textContent.trim()),
      links: [...root.querySelectorAll('a')].map((a) => ({
        href: a.getAttribute('href'),
        target: a.getAttribute('target'),
        rel: a.getAttribute('rel'),
        event: a.dataset.ctaEvent,
        source: a.dataset.ctaSource,
        label: a.dataset.ctaLabel,
        text: a.textContent.trim(),
      })),
      text: root.textContent,
    };
  }, variant);
}

function checkBlock(label, loc, variant, b) {
  ok(b !== null, `${label}: block of links (${variant}) is on the page`);
  if (!b) return;
  ok(b.links.length === 5, `${label}: 5 links (${b.links.length})`);
  ok(JSON.stringify(b.titles) === JSON.stringify(TITLES[loc]), `${label}: group titles ${TITLES[loc].join(' / ')} (${b.titles.join(' / ')})`);
  for (const c of CHANNELS) {
    const l = b.links.find((x) => x.label === c.key);
    ok(!!l && l.href === c.href, `${label}: ${c.key} leads to ${c.href}`);
    if (!l) continue;
    ok(l.text === c[loc], `${label}: ${c.key} caption «${c[loc]}» (${l.text})`);
    ok(c.newTab ? l.target === '_blank' && /noopener/.test(l.rel ?? '') && /noreferrer/.test(l.rel ?? '') : !l.target, `${label}: ${c.key} ${c.newTab ? 'opens in a new tab with noopener noreferrer' : 'stays in the tab (app link)'}`);
    ok(l.event === c.event && l.source === `${variant}_${c.key}`, `${label}: ${c.key} counted as ${c.event} / ${variant}_${c.key}`);
  }
  ok(!BAD_WORDS.test(b.text), `${label}: the copy has no «free», «guarantee», «!», dashes`);
}

async function clickAll(label, page, variant) {
  await page.locator('body').click({ position: { x: 3, y: 3 } });
  await page.waitForTimeout(400);
  for (const c of CHANNELS) {
    const before = (await events(page)).length;
    const link = page.locator(`[data-contact-channels="${variant}"] a[data-cta-label="${c.key}"]`).first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await page.waitForTimeout(250);
    const evs = await events(page);
    const e = evs.slice(before).find((x) => x.name === c.event);
    ok(!!e && e.params?.cta_source === `${variant}_${c.key}` && e.params?.event_label === `click_${c.key}`, `${label}: click on ${c.key} sends ${c.event}, cta_source ${variant}_${c.key}`);
  }
}

// ------------------------------------------------------------ 1. addresses, captions, events (desktop width)
for (const P of PAGES) {
  const label = `${P.loc} ${P.name}`;
  const { ctx, page } = await open(P.url, 1280);
  try {
    checkBlock(`${label} footer`, P.loc, 'footer', await readBlock(page, 'footer'));
    await clickAll(`${label} footer`, page, 'footer');
    if (P.form) {
      ok(await loadForm(page), `${label}: the form with the tiles loads`);
      await page.waitForSelector('[data-contact-channels="form"]', { timeout: 15000 });
      checkBlock(`${label} form`, P.loc, 'form', await readBlock(page, 'form'));
      await clickAll(`${label} form`, page, 'form');
    } else {
      ok((await page.locator('[data-contact-channels="form"]').count()) === 0, `${label}: no form on this page, so no tiles`);
    }
    // the old tracking of tel: links is unchanged
    const before = (await events(page)).length;
    await page.locator('footer a[href^="tel:"]').first().click();
    await page.waitForTimeout(250);
    const tel = (await events(page)).slice(before).find((x) => x.name === 'phone_click_simple1');
    ok(!!tel && tel.params?.cta_source === 'inline_tel', `${label}: tel: link in the footer still sends phone_click_simple1 / inline_tel`);
  } catch (e) {
    ok(false, `${label}: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// ------------------------------------------------------------ 2. tab order in the footer strip
for (const loc of ['ru', 'ro']) {
  const { ctx, page } = await open(loc === 'ru' ? '/' : '/ro', 1280);
  const order = await page.evaluate(() => {
    const links = [...document.querySelectorAll('[data-contact-channels="footer"] a')];
    links[0].focus();
    const seen = [document.activeElement?.dataset.ctaLabel];
    return { links: links.map((a) => a.dataset.ctaLabel), seen };
  });
  const seen = [order.seen[0]];
  for (let i = 1; i < 5; i += 1) {
    await page.keyboard.press('Tab');
    seen.push(await page.evaluate(() => document.activeElement?.dataset.ctaLabel));
  }
  ok(JSON.stringify(seen) === JSON.stringify(CHANNELS.map((c) => c.key)), `${loc}: tab goes through the footer links in order (${seen.join(', ')})`);
  await ctx.close();
}

// ------------------------------------------------------------ 3. no overflow at phone and desktop widths
for (const loc of ['ru', 'ro']) {
  const bad = [];
  for (const w of [320, 360, 390, 768, 1024, 1440]) {
    for (const url of loc === 'ru' ? ['/', '/contacts'] : ['/ro', '/ro/contacts']) {
      const { ctx, page } = await open(url, w);
      await page.waitForSelector('[data-contact-channels="footer"]', { timeout: 8000 });
      ok(await loadForm(page), `${loc} ${url} @${w}px: the form with the tiles loads`);
      const m = await page.evaluate(() => {
        const out = { doc: document.documentElement.scrollWidth - window.innerWidth, parts: [] };
        for (const sel of ['[data-contact-channels="footer"]', '[data-contact-channels="form"]']) {
          const el = document.querySelector(sel);
          if (!el) continue;
          for (const a of el.querySelectorAll('a')) {
            const r = a.getBoundingClientRect();
            if (r.right > window.innerWidth + 0.5 || r.left < -0.5) out.parts.push(`${sel.includes('footer') ? 'footer' : 'form'}:${a.dataset.ctaLabel}`);
          }
        }
        return out;
      });
      if (m.doc > 0 || m.parts.length) bad.push(`${url}@${w}: page +${m.doc}px, outside ${m.parts.join(',') || 'none'}`);
      await ctx.close();
    }
  }
  ok(bad.length === 0, `${loc}: no horizontal overflow, all links inside the window at 320..1440px ${bad.join('; ')}`);
}

// ------------------------------------------------------------ 4. the tiles must not make the form block taller on tablet and desktop
// (the form card is the taller column there, the tiles fit into the photo column). On a phone the columns are stacked,
// so the tiles do add height: there it is only checked that they stay moderate. The layout shift of the lazy load itself
// (a skeleton of 24rem replaced by the whole form and map) is the same with and without the tiles, so it is not judged here.
for (const [loc, url] of [['ru', '/contacts'], ['ro', '/ro/contacts']]) {
  for (const w of [390, 768, 1024, 1280, 1440]) {
    const { ctx, page } = await open(url, w);
    ok(await loadForm(page), `${loc} ${url} @${w}px: the form loads while scrolling`);
    await page.waitForTimeout(800);
    const m = await page.evaluate(() => {
      const block = document.querySelector('.new__contacts');
      const withTiles = block.getBoundingClientRect().height;
      const tiles = document.querySelector('[data-contact-channels="form"]');
      const own = tiles.getBoundingClientRect().height;
      tiles.style.display = 'none';
      const without = block.getBoundingClientRect().height;
      tiles.style.display = '';
      return { withTiles, without, own };
    });
    const grew = Math.round(m.withTiles - m.without);
    if (w >= 768) ok(Math.abs(grew) <= 2, `${loc} ${url} @${w}px: the tiles add ${grew}px to the form block (limit 2px)`);
    else ok(m.own <= 320, `${loc} ${url} @${w}px: the tiles are ${Math.round(m.own)}px tall on a phone (limit 320px)`);
    await ctx.close();
  }
}

// ------------------------------------------------------------ 5. screenshots for the eye (optional)
if (shots) {
  mkdirSync(shots, { recursive: true });
  for (const [loc, url] of [['ru', '/contacts'], ['ro', '/ro/contacts']]) {
    for (const w of [390, 1280]) {
      for (const dark of [false, true]) {
        const { ctx, page } = await open(url, w, { dark });
        await loadForm(page);
        await page.waitForTimeout(500);
        const tag = `${loc}-${w}-${dark ? 'dark' : 'light'}`;
        await page.locator('.new__contacts').first().screenshot({ path: `${shots}/form-${tag}.png` });
        await page.locator('footer').first().scrollIntoViewIfNeeded();
        await page.locator('footer').first().screenshot({ path: `${shots}/footer-${tag}.png` });
        await ctx.close();
      }
    }
  }
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
