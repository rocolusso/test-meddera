#!/usr/bin/env node
/**
 * Google reviews: the block on the home page, the reviews pages (/otzyvy, /ro/recenzii), sitemap, header, burger and
 * footer links, checked against a running production server. The reviews come from Featurable on the server, so the
 * site is built AND started against the local stub scripts/mock-featurable.mjs (no network, no real data).
 *
 * Usage: node scripts/verify-reviews.mjs [--base=http://localhost:3111] [--expect=on|off|nodata]
 *
 * --expect=on  (default): stub in mode ok running during build and start; built AND started (proxy.ts reads the switch
 *              at run time) with GOOGLE_REVIEWS_ENABLED=true, FEATURABLE_API_BASE=http://127.0.0.1:4111,
 *              FEATURABLE_WIDGET_ID=test, NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<any>.
 * --expect=nodata: same, but the API fails at build (stub mode fail, or a dead port): no block anywhere, pages and
 *              links stay, nothing breaks.
 * --expect=off: built without GOOGLE_REVIEWS_ENABLED: no block, no pages, no sitemap entries, no links.
 * Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const mode = arg('expect', 'on');
const on = mode !== 'off';
const nodata = mode === 'nodata';
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

const copyOf = (loc) => JSON.parse(readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), `../src/components/google-reviews/copy/${loc}.json`), 'utf8'));
const PAGES = {
  ru: { path: '/otzyvy', home: '/', locale: 'ru', phrase: 'дерматолог бельцы отзывы', stems: ['дерматолог', 'бельц', 'отзыв'], footer: 'Отзывы', copy: 'ru' },
  ro: { path: '/ro/recenzii', home: '/ro', locale: 'ro', phrase: 'dermatolog balti recenzii', stems: ['dermatolog', 'balti', 'recenzi'], footer: 'Recenzii', copy: 'ro' },
};
const SOURCE = 'reviews_block';
const MODAL = 'div.fixed.inset-0';

// ---------------------------------------------------------------- 1. HTML of the pages
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
for (const [loc, P] of Object.entries(PAGES)) {
  const url = 'https://meddera.md' + P.path;
  const inMap = sitemap.includes(`<loc>${url}</loc>`);
  ok(inMap === on, `${loc}: sitemap ${on ? 'lists' : 'does not list'} ${P.path}`);

  const res = await fetch(base + P.path, { redirect: 'manual' });
  if (!on) {
    ok(res.status === 301 || res.status === 404, `${loc}: ${P.path} is not served while the switch is off (status ${res.status})`);
    const home = await (await fetch(base + P.home)).text();
    ok(!home.includes('data-google-reviews'), `${loc}: no reviews block on the home page`);
    ok(!new RegExp(`href="${P.path}"`).test(home), `${loc}: no header, burger or footer link to ${P.path}`);
    continue;
  }
  ok(res.status === 200, `${loc}: ${P.path} answers 200 (${res.status})`);
  const html = await res.text();
  const markup = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const h1s = [...markup.matchAll(/<h1[\s>]/g)].length;
  ok(h1s === 1, `${loc}: one h1 (${h1s})`);
  const attr = (re) => (html.match(re) ?? [])[1];
  const title = (html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? '';
  const desc = attr(/<meta name="description" content="([^"]*)"/) ?? '';
  const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
  ok(title.length >= 30 && title.length <= 60, `${loc}: title ${title.length} chars: ${decode(title)}`);
  ok(desc.length >= 110 && desc.length <= 160, `${loc}: description ${desc.length} chars`);
  const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ');
  const h1 = decode((markup.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? [])[1] ?? '').replace(/<[^>]+>/g, '');
  ok(fold(title).includes(P.phrase) && fold(desc).includes(P.phrase) && fold(h1).includes(P.phrase), `${loc}: key phrase in title, description and h1`);
  ok(html.includes(`<link rel="canonical" href="${url}"/>`), `${loc}: canonical ${url}`);
  const alt = (l, u) => html.includes(`hrefLang="${l}" href="${u}"`) || html.includes(`hreflang="${l}" href="${u}"`);
  ok(alt('ru', 'https://meddera.md/otzyvy') && alt('ro', 'https://meddera.md/ro/recenzii') && alt('x-default', 'https://meddera.md/otzyvy'), `${loc}: hreflang ru, ro, x-default`);
  ok(/<meta property="og:site_name" content="Meddera Beauty Clinic"/.test(html) && html.includes('twitter:card'), `${loc}: Open Graph and Twitter tags`);

  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('\n');
  ok(ld.includes('"WebPage"') && ld.includes('"BreadcrumbList"'), `${loc}: JSON-LD has WebPage and BreadcrumbList`);
  ok(!/"Review"|"AggregateRating"|"reviewRating"|"aggregateRating"/.test(ld), `${loc}: JSON-LD has no Review or AggregateRating`);

  const home = await (await fetch(base + P.home)).text();
  const links = [...home.matchAll(new RegExp(`<a[^>]*href="${P.path}"[^>]*>`, 'g'))].length;
  if (nodata) {
    ok(!home.includes('data-google-reviews'), `${loc}: no reviews data: no block on the home page`);
    ok(!html.includes('data-google-reviews'), `${loc}: no reviews data: no block on the reviews page, the text stays`);
    ok(links === 2, `${loc}: link «${P.footer}» in header and footer stays (${links} anchors to ${P.path})`);
    continue;
  }
  ok(home.includes('data-google-reviews'), `${loc}: reviews block on the home page`);
  ok(links === 3, `${loc}: link «${P.footer}» in header and footer of the home page, plus the block's own link (${links} anchors to ${P.path})`);
  const hm = home.replace(/<script[\s\S]*?<\/script>/g, '');
  const blockHtml = (hm.match(/<section data-google-reviews[\s\S]*?<\/section>/) ?? [''])[0];
  ok(!/<h[1-6][\s>]/.test(blockHtml), `${loc}: no heading inside the home block`);
  ok(/data-open-quiz/.test(blockHtml) && blockHtml.includes(`data-cta-source="${SOURCE}"`), `${loc}: home block button opens the quiz with source ${SOURCE}`);
  const hMain = hm.indexOf('<main');
  const bAt = hm.indexOf('data-google-reviews');
  const seoAt = hm.search(/Meddera — |HomeSeo|class="pofo-remap/);
  ok(bAt > hMain && bAt < hm.indexOf('</main>'), `${loc}: block is inside <main> on the home page`);
  void seoAt;
}

if (!on || nodata) {
  console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
  process.exit(failed ? 1 : 0);
}

// ---------------------------------------------------------------- 2. text volume and key frequency, from the rendered page
{
  const browser = await chromium.launch();
  for (const [loc, P] of Object.entries(PAGES)) {
    const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
    await page.goto(base + P.path, { waitUntil: 'load' });
    const parts = await page.evaluate(() =>
      [...document.querySelectorAll('main h1, main h2, main h3, main p, main li')]
        .filter((e) => !e.closest('[data-google-reviews]'))
        .map((e) => e.textContent.trim()),
    );
    const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const text = parts.join(' ');
    const chars = text.length;
    const words = fold(text).match(/[\p{L}\p{N}]+/gu) ?? [];
    ok(chars >= 9000 && chars <= 10000, `${loc}: article text ${chars} chars with spaces (9000..10000)`);
    for (const stem of P.stems) {
      const n = words.filter((w) => w.includes(stem)).length;
      const pct = (n / words.length) * 100;
      ok(pct >= 5 && pct <= 6, `${loc}: ${stem}* ${n} of ${words.length} words = ${pct.toFixed(2)}% (5..6)`);
    }
    const exact = fold(text).replace(/[^\p{L}\p{N}]+/gu, ' ').split(P.phrase).length - 1;
    ok(exact >= 10 && exact <= 14, `${loc}: "${P.phrase}" ${exact} times (10..14)`);
    const h2s = await page.locator('main h2').count();
    ok(h2s >= 8 && h2s <= 20, `${loc}: ${h2s} h2 sections`);
    for (const href of ['/about', '/services', '/contacts', '/blog'].map((h) => (loc === 'ro' ? '/ro' + h : h))) {
      ok((await page.locator(`main a[href="${href}"]`).count()) > 0, `${loc}: internal link ${href}`);
    }
    await page.context().close();
  }
  await browser.close();
}

// ---------------------------------------------------------------- 3. the block: lazy load, content, theme, quiz, overflow
async function open(url, w, { dark = false } = {}) {
  const browser = open.browser;
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 768 ? 800 : 900 }, hasTouch: w < 768, colorScheme: dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  const g = { reqs: [], chunks: [], errors: [], post: null };
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    window.__cls = 0;
    try {
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {
      // layout-shift is not supported: the CLS check below will read 0
    }
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
  });
  if (dark) await page.addInitScript(() => localStorage.setItem('meddera-theme', 'dark'));
  // the browser must never ask Featurable or Google for the reviews: the server does (and caches) that
  page.on('request', (r) => {
    if (/featurable|googleapis\.com|google\.com\/maps/.test(r.url())) g.reqs.push(r.url());
  });
  // the chunk of the carousel library is the one JS file that mentions slidesToShow
  page.on('response', async (r) => {
    if (!/\/_next\/static\/.*\.js/.test(r.url())) return;
    try {
      if ((await r.text()).includes('slidesToShow')) g.chunks.push(r.url());
    } catch {
      // body not available (redirect, aborted)
    }
  });
  // errors of ours only: resources of other sites (fonts, analytics) cannot load in the sandbox and say nothing about the block
  page.on('console', (m) => {
    if (m.type() === 'error' && !/^Failed to load resource/.test(m.text())) g.errors.push(m.text());
  });
  page.on('pageerror', (e) => g.errors.push(String(e)));
  await ctx.route('**/recaptcha/api.js*', (r) => r.fulfill({ contentType: 'text/javascript', body: 'window.grecaptcha={ready:function(cb){cb()},execute:function(){return Promise.resolve("test-token")}};' }));
  await ctx.route('**/api/form-token', (r) => r.fulfill({ json: { token: '', disabled: true } }));
  await ctx.route('**/api/lead-quiz-form', (r) => {
    g.post = r.request().postDataJSON();
    return r.fulfill({ json: { ok: true } });
  });
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page, g };
}
open.browser = await chromium.launch();
const events = (page) => page.evaluate(async () => (await Promise.all(window.__beacons)).flatMap((s) => JSON.parse(s).events ?? []));
const toView = (page) => page.locator('[data-google-reviews]').first().evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
const READY = '.gr__carousel .slick-slide';

const TEXT = {
  ru: { badge: 'Рейтинг Google', sub: 'На основе 8 отзывов', original: 'проблемной кожи', english: 'I came for a consultation', date: /назад/, month: /месяц/, year: /год/, note: false },
  ro: { badge: 'Rating Google', sub: 'Pe baza a 8 recenzii', original: 'проблемной кожи', english: 'I came for a consultation', date: /acum/, month: /lun/, year: /an/, note: true },
};
const WRITE = /write a review|написать (отзыв|обзор)|scrie o recenzie|scrie recenzie/i;

for (const [loc, P] of Object.entries(PAGES)) {
  const T = TEXT[loc];
  for (const [kind, url] of [['home', P.home], ['page', P.path]]) {
    const label = `${loc} ${kind}`;
    const { ctx, page, g } = await open(url, 1280);
    try {
      await page.waitForTimeout(800);
      const farAway = await page.evaluate(() => document.querySelector('[data-google-reviews]').getBoundingClientRect().top > window.innerHeight + 400);
      ok(farAway ? g.chunks.length === 0 : g.chunks.length <= 1, `${label}: ${farAway ? 'block is far below the first screen: the carousel library is not requested before scrolling' : 'block starts within 400px of the first screen: the library may load'} (${g.chunks.length} chunk)`);
      const before = await page.locator('.gr__lazy').first().evaluate((el) => Math.round(el.getBoundingClientRect().height));
      await toView(page);
      await page.waitForSelector(READY, { timeout: 10000 });
      await page.waitForTimeout(600);
      ok(g.chunks.length === 1, `${label}: the carousel library is one lazy chunk (${g.chunks.length})`);
      ok(g.reqs.length === 0, `${label}: the browser asks neither Featurable nor Google for the reviews (${g.reqs.length} requests)`);
      ok(g.errors.length === 0, `${label}: no console errors or hydration warnings${g.errors.length ? ' :: ' + g.errors[0].slice(0, 160) : ''}`);
      const after = await page.locator('.gr__lazy').first().evaluate((el) => Math.round(el.getBoundingClientRect().height));
      ok(Math.abs(after - before) <= 80, `${label}: reserved height ${before}px, loaded block ${after}px (shift ${after - before}px, limit 80)`);

      const txt = await page.locator('[data-google-reviews]').first().innerText();
      ok(txt.includes(T.original) && !txt.includes(T.english), `${label}: reviews show the Russian original, not Google's English translation`);
      ok(!WRITE.test(txt) && !WRITE.test(await page.locator('[data-google-reviews]').first().evaluate((el) => el.innerHTML)), `${label}: no «write a review» anywhere in the block`);
      ok(txt.includes(T.badge) && txt.includes(T.sub) && /5[.,]0/.test(txt), `${label}: badge «${T.badge}», «${T.sub}», rating 5.0`);
      ok(T.date.test(txt) && !/\b1 лет\b/.test(txt), `${label}: relative dates are in the page language and grammatical`);
      ok(T.month.test(txt) && !/1 (день|дня|дней)/.test(txt) && !/acum 1 zi/.test(txt), `${label}: dates are the days of publication (months and years), not the day of the sync`);
      ok(txt.includes('после процедуры') && !/^\.\.\.$/m.test(txt) && !txt.includes('Читать далее') && !txt.includes('Citește mai mult'), `${label}: a long review is shown in full (the library would cut it down to "...")`);
      const hrefs = await page.locator('[data-google-reviews] a[href]').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
      ok(!hrefs.some((h) => /writereview|WRITEREVIEW|data=!4m3/.test(h)), `${label}: no link to the Google «write a review» form`);
      const external = hrefs.filter((h) => /^(https?:)?\/\//i.test(h ?? ''));
      ok(external.length === 0, `${label}: no external links in the block, nothing leads to Google (${external.join(', ') || 'none'})`);
      ok(!hrefs.some((h) => /google\.|goo\.gl|g\.page|g\.co\/|maps\./i.test(h ?? '')), `${label}: no link to Google, Google Maps or a short Google link`);
      ok((await page.locator('a.gr__google, [data-google-reviews] a[target="_blank"]').count()) === 0, `${label}: no «all reviews on Google» link and nothing opens in a new tab`);
      const gAnchors = await page.locator('[data-google-reviews] .gr__wrap a').count();
      ok(gAnchors === 0, `${label}: the rating badge and the cards are not links (${gAnchors} anchors in the carousel part)`);
      ok((await page.locator('.gr__wrap[lang="ru"]').count()) === 1, `${label}: reviews wrapped in lang="ru"`);
      ok((await page.locator('.gr__note').count()) === (T.note ? 1 : 0), `${label}: note about the original language ${T.note ? 'shown (RO)' : 'absent (RU)'}`);
      const slides = await page.locator('.gr__carousel .slick-slide.slick-active').count();
      ok(slides === 3, `${label}: 3 cards at 1280px (${slides})`);
      ok((await page.locator('[data-google-reviews] :is(form, textarea)').count()) === 0, `${label}: no review form of ours in the block`);
    } catch (e) {
      ok(false, `${label}: ${String(e).split('\n')[0]}`);
    }
    await ctx.close();
  }
}

// cards per window width (the library decides by the window, so the block takes the full column)
for (const [w, want] of [[360, 1], [390, 1], [640, 1], [700, 2], [820, 2], [1023, 2], [1024, 3], [1440, 3]]) {
  const { ctx, page } = await open('/otzyvy', w);
  try {
    await toView(page);
    await page.waitForSelector(READY, { timeout: 10000 });
    await page.waitForTimeout(500);
    const n = await page.locator('.gr__carousel .slick-slide.slick-active').count();
    const cw = await page.locator('.gr__carousel .slick-active').first().evaluate((el) => Math.round(el.getBoundingClientRect().width));
    ok(n === want && cw >= 240, `window ${w}px: ${n} card(s) of ${cw}px (want ${want}, card at least 240px)`);
  } catch (e) {
    ok(false, `window ${w}px: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// layout shift on the reviews page, where the block starts near the first screen and the text below it must not jump
for (const w of [390, 768, 1280]) {
  const { ctx, page } = await open('/otzyvy', w);
  try {
    await page.waitForSelector(READY, { timeout: 10000 });
    await page.waitForTimeout(1500);
    const cls = await page.evaluate(() => window.__cls);
    ok(cls < 0.1, `reviews page at ${w}px: layout shift ${cls.toFixed(3)} until the carousel is shown (limit 0.1)`);
  } catch (e) {
    ok(false, `reviews page CLS ${w}px: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// the number of cards follows the window when it is resized after the load
{
  const { ctx, page } = await open('/otzyvy', 1440);
  try {
    await toView(page);
    await page.waitForSelector(READY, { timeout: 10000 });
    const n = () => page.locator('.gr__carousel .slick-slide.slick-active').count();
    const steps = [];
    for (const [w, want] of [[390, 1], [820, 2], [1440, 3]]) {
      await page.setViewportSize({ width: w, height: 800 });
      await page.waitForTimeout(700);
      steps.push(`${w}px: ${await n()} (want ${want})`);
      if ((await n()) !== want) steps.push('MISMATCH');
    }
    ok(!steps.includes('MISMATCH'), `resize 1440 -> 390 -> 820 -> 1440: ${steps.join(', ')}`);
  } catch (e) {
    ok(false, `resize: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// the dark theme keeps the cards light: text must stay readable against them
{
  const { ctx, page } = await open('/', 1280, { dark: true });
  try {
    await toView(page);
    await page.waitForSelector(READY, { timeout: 10000 });
    const c = await page.evaluate(() => {
      const lum = (rgb) => {
        const [r, g, b] = rgb.match(/\d+(\.\d+)?/g).slice(0, 3).map(Number).map((v) => {
          const x = v / 255;
          return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const p = [...document.querySelectorAll('.gr__carousel p')].find((e) => e.textContent.trim().length > 20);
      let bgEl = p;
      while (bgEl && /rgba\(0, 0, 0, 0\)|transparent/.test(getComputedStyle(bgEl).backgroundColor)) bgEl = bgEl.parentElement;
      const fg = lum(getComputedStyle(p).color);
      const bg = lum(getComputedStyle(bgEl).backgroundColor);
      return { dark: document.documentElement.classList.contains('dark'), ratio: (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05) };
    });
    ok(c.dark && c.ratio >= 4.5, `dark theme: html.dark=${c.dark}, review text contrast ${c.ratio.toFixed(1)}:1 (min 4.5)`);
  } catch (e) {
    ok(false, `dark theme: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// quiz from the home block and from the page
async function clickUntilQuiz(page, locator) {
  for (let i = 0; i < 4; i += 1) {
    await locator.click({ timeout: 8000, force: true });
    try {
      await page.waitForSelector(`${MODAL} form input[type="radio"], ${MODAL} form input[name="name"]`, { timeout: 2500 });
      return;
    } catch {
      // not open yet
    }
  }
}
for (const [label, url, sel] of [
  ['home RU', '/', '[data-google-reviews] [data-open-quiz]'],
  ['home RO', '/ro', '[data-google-reviews] [data-open-quiz]'],
  ['page RU', '/otzyvy', `main [data-cta-source="${SOURCE}"]`],
  ['page RO', '/ro/recenzii', `main [data-cta-source="${SOURCE}"]`],
]) {
  const { ctx, page } = await open(url, 390);
  try {
    const btn = page.locator(sel).first();
    await btn.evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.waitForTimeout(200);
    await clickUntilQuiz(page, btn);
    await page.waitForSelector(`${MODAL} form`, { timeout: 8000 });
    const click = (await events(page)).find((e) => e.name === 'lead_sticky_cta_click');
    ok(Boolean(click) && click.params.cta_source === SOURCE, `${label}: quiz opens, GA4 lead_sticky_cta_click cta_source=${click?.params?.cta_source}`);
  } catch (e) {
    ok(false, `${label} quiz: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// structure and collapse of the reviews page
for (const [loc, P] of Object.entries(PAGES)) {
  const copy = copyOf(loc);
  const raw = await (await fetch(base + P.path)).text();
  ok(raw.includes(copy.cta.h2) && raw.includes(copy.faq.h2) && raw.includes(copy.sections.at(-1).h2), `${loc}: the whole text, including the collapsed part, is in the HTML of the server response`);
  const { ctx, page } = await open(P.path, 1280);
  try {
    const order = await page.evaluate(() => {
      const q = (s) => document.querySelector(s);
      const els = [q('main h1'), q('[data-google-reviews]'), q('main [data-open-quiz]'), q('[data-seo-section]')];
      let sorted = els.every(Boolean);
      for (let i = 0; i + 1 < els.length && sorted; i += 1) sorted = Boolean(els[i].compareDocumentPosition(els[i + 1]) & Node.DOCUMENT_POSITION_FOLLOWING);
      return { sorted };
    });
    ok(order.sorted, `${loc}: order on the page is h1, Google block, booking button, text (SeoSection)`);
    const state = () =>
      page.evaluate(() => {
        const rm = document.querySelector('[data-read-more]');
        const c = rm.querySelector('[data-read-more-content]');
        const b = rm.querySelector('button');
        return { h: Math.round(c.getBoundingClientRect().height), sh: c.scrollHeight, exp: b.getAttribute('aria-expanded'), label: b.textContent.trim(), disp: getComputedStyle(c).display, hidden: c.hasAttribute('hidden'), ctrl: b.getAttribute('aria-controls') === c.id };
      });
    const lead = await page.evaluate(() => {
      const seo = document.querySelector('[data-seo-section]');
      const first = seo.querySelector(':scope > p');
      const rm = seo.querySelector('[data-read-more]');
      return { visible: first && first.getBoundingClientRect().height > 0 && !rm.contains(first) };
    });
    ok(lead.visible, `${loc}: the lead paragraph is outside the collapse and visible`);
    const closed = await state();
    ok(closed.h >= 395 && closed.h <= 405 && closed.sh > 600 && closed.exp === 'false' && closed.label === copy.readMore.expand && closed.disp !== 'none' && !closed.hidden && closed.ctrl, `${loc}: collapsed at ${closed.h}px of ${closed.sh}px, aria-expanded=${closed.exp}, "${closed.label}", not display:none, aria-controls ok`);
    await page.locator('[data-read-more] button').click();
    await page.waitForTimeout(800);
    const opened = await state();
    ok(opened.exp === 'true' && opened.h >= opened.sh - 2 && opened.label === copy.readMore.collapse, `${loc}: expands to ${opened.h}px, "${opened.label}"`);
    await page.locator('[data-read-more] button').click();
    await page.waitForTimeout(800);
    const again = await state();
    ok(again.exp === 'false' && again.h <= 405 && again.label === copy.readMore.expand, `${loc}: collapses back to ${again.h}px, "${again.label}"`);
  } catch (e) {
    ok(false, `${loc} collapse: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// the link in the header (desktop), the burger menu (phone) and the footer
for (const [loc, P] of Object.entries(PAGES)) {
  {
    const { ctx, page } = await open(P.home, 1280);
    const hdr = await page.evaluate(() => [...document.querySelectorAll('header nav[aria-label="Main"] a')].map((a) => a.getAttribute('href')));
    const i = hdr.indexOf(P.path);
    ok(i > 0 && hdr[i - 1].endsWith('/blog') && hdr[i + 1].endsWith('/contacts'), `${loc}: header link sits between Blog and Contacts (${hdr.join(' ')})`);
    const ftr = await page.evaluate((p) => [...document.querySelectorAll(`footer a[href="${p}"]`)].length, P.path);
    ok(ftr === 1, `${loc}: footer link once (${ftr})`);
    await ctx.close();
  }
  {
    const { ctx, page } = await open(P.home, 390);
    try {
      await page.waitForSelector('[aria-label="burger-btn-trigger"]', { timeout: 8000 });
      await page.locator('[aria-label="burger-btn-trigger"]').click();
      const items = await page.locator('[role="menuitem"]').allTextContents();
      ok(items.map((t) => t.trim()).includes(P.footer), `${loc}: burger menu item «${P.footer}» (${items.map((t) => t.trim()).join(', ')})`);
      await page.locator('[role="menuitem"]', { hasText: P.footer }).click();
      await page.waitForURL('**' + P.path, { timeout: 8000 });
      ok(true, `${loc}: the burger item opens ${P.path}`);
    } catch (e) {
      ok(false, `${loc} burger: ${String(e).split('\n')[0]}`);
    }
    await ctx.close();
  }
}
// the header does not wrap or overflow at tablet widths
for (const [loc, P] of Object.entries(PAGES)) {
  const bad = [];
  for (const w of [640, 700, 768, 820, 900, 1024]) {
    const { ctx, page } = await open(P.home, w);
    const m = await page.evaluate(() => {
      const nav = document.querySelector('header nav[aria-label="Main"]');
      const tops = new Set([...nav.querySelectorAll('a')].map((a) => Math.round(a.getBoundingClientRect().top)));
      return { rows: tops.size, over: document.documentElement.scrollWidth - document.documentElement.clientWidth };
    });
    if (m.rows > 1 || m.over > 0) bad.push(`${w}px rows=${m.rows} overflow=${m.over}`);
    await ctx.close();
  }
  ok(bad.length === 0, `${loc}: header links stay on one row without overflow at 640..1024px${bad.length ? ' :: ' + bad.join(', ') : ''}`);
}

// no horizontal overflow
for (const [label, url] of [['home RU', '/'], ['home RO', '/ro'], ['page RU', '/otzyvy'], ['page RO', '/ro/recenzii']]) {
  const bad = [];
  for (const w of [320, 360, 390, 414, 600, 768, 820, 1024, 1280, 1920]) {
    const { ctx, page } = await open(url, w);
    await toView(page);
    await page.waitForSelector(READY, { timeout: 10000 });
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 0) bad.push(`${w}px (+${over})`);
    await ctx.close();
  }
  ok(bad.length === 0, `${label}: no horizontal overflow at 10 widths${bad.length ? ' :: ' + bad.join(', ') : ''}`);
}

await open.browser.close();
void readFileSync;
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
