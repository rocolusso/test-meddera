#!/usr/bin/env node
/**
 * Browser checks for the home-page banner (src/components/hero-banner) against a running production server.
 * Usage: node scripts/verify-hero-banner.mjs [--base=http://localhost:3111] [--expect=on|off] [--shots=DIR]
 * Start the server with HERO_BANNER_ENABLED=true (expect=on, default) or without it (expect=off) after a build
 * made with the same value. Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const expectOn = arg('expect', 'on') === 'on';
const shots = arg('shots', '');
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = createRequire(process.cwd() + '/')('playwright'));
}
if (shots) mkdirSync(shots, { recursive: true });

let failed = 0;
const ok = (cond, msg) => {
  if (cond) console.log('ok   ' + msg);
  else {
    failed += 1;
    console.log('FAIL ' + msg);
  }
};

const browser = await chromium.launch();

async function open(url, { w = 390, h = 844, reduced = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    reducedMotion: reduced ? 'reduce' : 'no-preference',
    isMobile: w < 768,
    hasTouch: w < 768,
  });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    // The tracker stays silent for automated browsers; pretend to be a person to see the event.
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    window.__cls = 0;
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
    }).observe({ type: 'layout-shift', buffered: true });
  });
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page };
}

const banner = (p) => p.locator('[data-hero-banner]');

/** Freezes the banner at the middle of scene k (0-based) and returns nothing. */
async function freezeAt(page, k) {
  await page.evaluate((t) => {
    for (const a of document.getAnimations()) {
      if (a.effect && a.effect.target && a.effect.target.closest && a.effect.target.closest('[data-hero-banner]')) {
        a.pause();
        a.currentTime = t;
      }
    }
  }, k * 2000 + 1000);
  await page.waitForTimeout(80);
}

// ---------------------------------------------------------------- off
if (!expectOn) {
  for (const url of ['/', '/ro']) {
    const t = await open(url);
    ok((await banner(t.page).count()) === 0, `off ${url}: no banner`);
    await t.ctx.close();
  }
  await browser.close();
  console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
  process.exit(failed ? 1 : 0);
}

// ---------------------------------------------------------------- on
const EXPECTED_H = (w) => (w < 768 ? 580 : w < 1100 ? 460 : 520);
const WIDTHS = [[320, 700], [360, 740], [390, 844], [430, 900], [768, 1024], [900, 800], [1024, 768], [1100, 800], [1440, 900], [1920, 1080]];
const BANNED = /(\d+\s*(лей|lei|mdl|€|₽|\$))|((пн|вт|ср|чт|пт|сб|вс)\b)|(\d{1,2}[:.]\d{2})|бесплатн|gratuit|скидк|reducer|ieftin/i;

for (const url of ['/', '/ro']) {
  const ro = url === '/ro';
  for (const [w, h] of WIDTHS) {
    const t = await open(url, { w, h });
    const p = t.page;
    ok((await banner(p).count()) === 1, `${url} ${w}: one banner`);
    const box = await banner(p).boundingBox();
    ok(Math.abs(box.width - w) <= 1, `${url} ${w}: full width (${box.width})`);
    ok(Math.abs(box.height - EXPECTED_H(w)) <= 1, `${url} ${w}: reserved height ${EXPECTED_H(w)} (${box.height})`);
    ok((await p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)), `${url} ${w}: no horizontal scroll`);
    ok((await p.locator('h1').count()) === 1, `${url} ${w}: exactly one h1`);
    const text = await banner(p).innerText();
    ok(!/[а-яa-zăîșțâ][,.][а-яa-zăîșțâ]/i.test(text.replace(/\s+/g, ' ')) && !/[а-яa-zăîșțâ][А-ЯA-ZĂÎȘȚÂ]/.test(text), `${url} ${w}: no glued words`);
    ok(!BANNED.test(text), `${url} ${w}: no price, weekday, time or "free" wording`);
    ok(await p.locator('.hb__photo').evaluate((img) => img.complete && img.naturalWidth > 0), `${url} ${w}: photo loaded`);

    // each scene fits its slot, tags do not leave the screen
    for (let k = 0; k < 6; k += 1) {
      await freezeAt(p, k);
      const fit = await p.evaluate((idx) => {
        const slot = document.querySelector('.hb__slot').getBoundingClientRect();
        const sc = document.querySelector(`.hb__sc--${idx + 1}`);
        const circ = document.querySelector('.hb__circ').getBoundingClientRect();
        const bad = [];
        const opacity = Number(getComputedStyle(sc).opacity);
        if (opacity < 0.95) bad.push(`opacity ${opacity}`);
        for (const el of sc.querySelectorAll('p, .hb__step, .hb__cta, .hb__bar')) {
          const r = el.getBoundingClientRect();
          if (r.right > slot.right + 1 || r.left < slot.left - 1) bad.push(`${el.className} x ${Math.round(r.left)}-${Math.round(r.right)} slot ${Math.round(slot.left)}-${Math.round(slot.right)}`);
          if (el.tagName === 'P' && el.scrollWidth > el.clientWidth + 1) bad.push(`${el.className} text wider than its box (${el.scrollWidth} > ${el.clientWidth})`);
          if (r.bottom > slot.bottom + 1 || r.top < slot.top - 1) bad.push(`${el.className} y ${Math.round(r.top)}-${Math.round(r.bottom)} slot ${Math.round(slot.top)}-${Math.round(slot.bottom)}`);
          if (window.innerWidth >= 768 && r.right > circ.left + 8 && r.bottom > circ.top && r.top < circ.bottom) bad.push(`${el.className} overlaps the photo`);
        }
        for (const el of document.querySelectorAll('.hb__plate > span')) {
          if (getComputedStyle(el.parentElement).display === 'none') continue;
          const r = el.getBoundingClientRect();
          if (r.left < 0 || r.right > window.innerWidth) bad.push(`plate ${el.textContent} off screen ${Math.round(r.left)}-${Math.round(r.right)}`);
        }
        return bad;
      }, k);
      ok(fit.length === 0, `${url} ${w}: scene ${k + 1} fits${fit.length ? ' -> ' + fit.join('; ') : ''}`);
      if (shots && [390, 768, 1440].includes(w)) {
        await banner(p).screenshot({ path: `${shots}/${ro ? 'ro' : 'ru'}-${w}-s${k + 1}.png` });
      }
    }
    await t.ctx.close();
  }

  // details on one phone and one desktop
  for (const [w, h] of [[390, 844], [1440, 900]]) {
    // animation really runs, first scene is on screen right away, CLS stays near zero
    const t = await open(url, { w, h });
    const p = t.page;
    await p.waitForTimeout(500);
    const op1 = await p.locator('.hb__sc--1').evaluate((e) => Number(getComputedStyle(e).opacity));
    ok(op1 > 0.9, `${url} ${w}: first scene visible at once (${op1})`);
    let op2 = 0;
    for (let i = 0; i < 20; i += 1) {
      op2 = Math.max(op2, await p.locator('.hb__sc--2').evaluate((e) => Number(getComputedStyle(e).opacity)));
      await p.waitForTimeout(200);
    }
    ok(op2 > 0.9, `${url} ${w}: scene 2 shows up within 4 s (max opacity ${op2.toFixed(2)})`);
    const cls = await p.evaluate(() => window.__cls);
    ok(cls < 0.01, `${url} ${w}: layout shift ${cls.toFixed(4)}`);

    // the global scroll cue steps aside, the banner has its own chevron
    ok((await p.locator('[data-scroll-cue]').count()) === 0, `${url} ${w}: global scroll cue absent`);
    ok((await p.locator('.hb__chev').count()) === 1, `${url} ${w}: banner chevron present`);

    // pauses off screen and resumes
    await p.evaluate(() => window.scrollTo(0, 1600));
    await p.waitForTimeout(400);
    ok((await banner(p).getAttribute('data-paused')) === 'true', `${url} ${w}: paused when scrolled away`);
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.waitForTimeout(400);
    ok((await banner(p).getAttribute('data-paused')) === 'false', `${url} ${w}: running again at the top`);

    // keyboard reaches the button, Enter opens the quiz and sends cta_source
    await p.locator('.hb__cta').focus();
    await p.waitForTimeout(150);
    const opacityCta = await p.locator('.hb__sc--cta').evaluate((e) => Number(getComputedStyle(e).opacity));
    ok(opacityCta === 1, `${url} ${w}: focused button scene is held visible`);
    await p.keyboard.press('Enter');
    await p.waitForTimeout(600);
    const events = await p.evaluate(async () => (await Promise.all(window.__beacons)).map((s) => JSON.parse(s)));
    const click = events.flatMap((b) => b.events).find((e) => e.name === 'lead_sticky_cta_click');
    ok(click && click.params.cta_source === 'hero_banner', `${url} ${w}: GA4 lead_sticky_cta_click with cta_source=hero_banner`);
    const label = await p.locator('.hb__cta').innerText();
    ok(label.includes(ro ? 'consultație' : 'консультацию'), `${url} ${w}: button text (${label.trim()})`);
    await t.ctx.close();
  }

  // reduced motion: one still frame with the thesis and the button
  {
    const t = await open(url, { w: 390, h: 844, reduced: true });
    const p = t.page;
    const state = await p.evaluate(() => {
      const d = (s) => getComputedStyle(document.querySelector(s)).display;
      const cta = document.querySelector('.hb__cta').getBoundingClientRect();
      return {
        thesis: d('.hb__sc--thesis'),
        s1: d('.hb__sc--1'),
        s5: d('.hb__sc--5'),
        ctaVisible: cta.width > 0 && cta.height > 0,
        animations: document.getAnimations().filter((a) => a.effect?.target?.closest?.('[data-hero-banner]')).length,
      };
    });
    ok(state.thesis === 'flex' && state.s1 === 'none' && state.s5 === 'none', `${url} reduced motion: only thesis and button scenes shown`);
    ok(state.ctaVisible, `${url} reduced motion: button visible`);
    ok(state.animations === 0, `${url} reduced motion: no running animations (${state.animations})`);
    if (shots) await banner(p).screenshot({ path: `${shots}/${ro ? 'ro' : 'ru'}-reduced.png` });
    await t.ctx.close();
  }
}

// banner only on the two home pages; the global cue still works elsewhere
for (const url of ['/about', '/contacts', '/services', '/blog', '/ro/about', '/ro/contacts']) {
  const t = await open(url, { w: 390, h: 844 });
  ok((await banner(t.page).count()) === 0, `${url}: no banner`);
  await t.page.waitForTimeout(1000);
  ok((await t.page.locator('[data-scroll-cue]').count()) === 1, `${url}: global scroll cue still shown`);
  await t.ctx.close();
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
