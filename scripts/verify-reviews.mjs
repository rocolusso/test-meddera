#!/usr/bin/env node
/**
 * Google reviews: the block on the home page, the reviews pages (/otzyvy, /ro/recenzii), sitemap, footer link,
 * checked against a running production server. Google's own script is stubbed here (no real key, no request to
 * Google), so this checks everything of ours around the element, not what Google draws inside it.
 *
 * Usage: node scripts/verify-reviews.mjs [--base=http://localhost:3111] [--expect=on|off] [--place=TESTPLACE]
 *
 * --expect=on  (default): built AND started (proxy.ts reads it at run time) with GOOGLE_REVIEWS_ENABLED=true, NEXT_PUBLIC_GOOGLE_MAPS_KEY=<any>,
 *              NEXT_PUBLIC_GOOGLE_PLACE_ID=<--place>, NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<any>.
 * --expect=off: built without GOOGLE_REVIEWS_ENABLED: no block, no pages, no sitemap entries, no footer link.
 * Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const on = arg('expect', 'on') === 'on';
const PLACE = arg('place', 'TESTPLACEID');
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
  ok(home.includes('data-google-reviews'), `${loc}: reviews block on the home page`);
  const links = [...home.matchAll(new RegExp(`<a[^>]*href="${P.path}"[^>]*>`, 'g'))].length;
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

if (!on) {
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

// ---------------------------------------------------------------- 3. the element: lazy load, content, failure, theme, quiz, overflow
const STUB = `
(function(){
  window.__mapsLoaded = true;
  function def(name){ if(customElements.get(name)) return; customElements.define(name, class extends HTMLElement{ connectedCallback(){ if(this.localName==='gmp-place-details'){ this.style.cssText='display:block;min-height:140px'; setTimeout(()=>this.dispatchEvent(new Event('gmp-load')),20);} } }); }
  window.google = { maps: { importLibrary: async function(n){ ['gmp-place-details','gmp-place-details-place-request','gmp-place-rating','gmp-place-reviews','gmp-place-all-content','gmp-place-address'].forEach(def); window.__lib = n; return {}; } } };
})();`;

async function open(url, w, { fail = false, dark = false } = {}) {
  const browser = open.browser;
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 768 ? 800 : 900 }, hasTouch: w < 768, colorScheme: dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  const g = { reqs: [], post: null };
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
  });
  if (dark) await page.addInitScript(() => localStorage.setItem('meddera-theme', 'dark'));
  await ctx.route(/googleapis\.com|google\.com\/maps|gstatic\.com/, (r) => {
    g.reqs.push(r.request().url());
    if (!/maps\.googleapis\.com\/maps\/api\/js/.test(r.request().url())) return r.abort();
    if (fail) return r.abort();
    return r.fulfill({ contentType: 'text/javascript', body: STUB });
  });
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
const mapsReqs = (g) => g.reqs.filter((u) => /maps\.googleapis\.com\/maps\/api\/js/.test(u));

for (const [loc, P] of Object.entries(PAGES)) {
  for (const [kind, url] of [['home', P.home], ['page', P.path]]) {
    const label = `${loc} ${kind}`;
    const { ctx, page, g } = await open(url, 1280);
    try {
      await page.waitForTimeout(800);
      const farAway = await page.evaluate(() => document.querySelector('[data-google-reviews]').getBoundingClientRect().top > window.innerHeight + 400);
      ok(farAway ? g.reqs.length === 0 : g.reqs.length <= 1, `${label}: ${farAway ? 'block is far below the first screen: no request to Google before scrolling' : 'block starts within 400px of the first screen: at most the one script request'} (${g.reqs.length})`);
      await page.locator('[data-google-reviews]').first().evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.waitForSelector('gmp-place-details', { timeout: 8000 });
      const r = mapsReqs(g);
      const u = new URL(r[0]);
      ok(r.length === 1 && u.searchParams.get('loading') === 'async' && u.searchParams.get('language') === loc && u.searchParams.get('key') !== null, `${label}: one Maps script request: loading=async language=${u.searchParams.get('language')} v=${u.searchParams.get('v')}`);
      const shape = await page.evaluate(() => {
        const d = document.querySelector('gmp-place-details');
        return {
          children: [...d.children].map((c) => c.localName),
          place: d.querySelector('gmp-place-details-place-request')?.getAttribute('place'),
          lib: window.__lib,
          all: document.querySelectorAll('gmp-place-details').length,
        };
      });
      ok(JSON.stringify(shape.children) === JSON.stringify(['gmp-place-details-place-request', 'gmp-place-rating', 'gmp-place-reviews']), `${label}: only the request, the rating and the reviews inside the element (${shape.children.join(', ')})`);
      ok(shape.place === PLACE && shape.lib === 'places' && shape.all === 1, `${label}: Place ID from the setting, library "places", one element`);
      const link = await page.locator('a.gr__google').first().getAttribute('href');
      ok(link.includes(`place_id:${PLACE}`) && (await page.locator('a.gr__google').first().getAttribute('target')) === '_blank', `${label}: link «Все отзывы на Google» to the card`);
      const wrapW = await page.locator('.gr__wrap').first().evaluate((el) => el.getBoundingClientRect().width);
      ok(wrapW <= 400.5 && wrapW >= 250, `${label}: element column ${Math.round(wrapW)}px (250..400)`);
      const formNone = await page.locator('main :is(form, [data-write-review], a[href*="writereview"])').evaluate((els) => els.length).catch(() => 0);
      void formNone;
      ok((await page.locator('[data-google-reviews] :is(form, textarea)').count()) === 0, `${label}: no review form of ours in the block`);
    } catch (e) {
      ok(false, `${label}: ${String(e).split('\n')[0]}`);
    }
    await ctx.close();
  }
}

// failure: the script is blocked
for (const [loc, P] of Object.entries(PAGES)) {
  for (const [kind, url] of [['home', P.home], ['page', P.path]]) {
    const { ctx, page } = await open(url, 1280, { fail: true });
    try {
      await page.locator('[data-google-reviews]').first().evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.waitForTimeout(1200);
      const vis = await page.evaluate(() => [...document.querySelectorAll('[data-google-reviews]')].map((e) => getComputedStyle(e).display));
      ok(vis.length > 0 && vis.every((d) => d === 'none'), `${loc} ${kind}: block hidden when the Google script fails (${vis.join(',')})`);
    } catch (e) {
      ok(false, `${loc} ${kind} failure: ${String(e).split('\n')[0]}`);
    }
    await ctx.close();
  }
}

// theme
{
  const { ctx, page } = await open('/', 1280, { dark: true });
  await page.locator('[data-google-reviews]').first().evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
  await page.waitForSelector('gmp-place-details', { timeout: 8000 });
  const cs = await page.evaluate(() => ({ dark: document.documentElement.classList.contains('dark'), scheme: getComputedStyle(document.querySelector('.gr__host')).colorScheme }));
  ok(cs.dark && cs.scheme === 'dark', `dark theme: html.dark=${cs.dark}, element color-scheme=${cs.scheme}`);
  await ctx.close();
  const l = await open('/', 1280);
  await l.page.locator('[data-google-reviews]').first().evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
  await l.page.waitForSelector('gmp-place-details', { timeout: 8000 });
  const ls = await l.page.evaluate(() => getComputedStyle(document.querySelector('.gr__host')).colorScheme);
  ok(ls === 'light', `light theme: element color-scheme=${ls}`);
  await l.ctx.close();
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
    await page.locator('[data-google-reviews]').first().evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.waitForSelector('gmp-place-details', { timeout: 8000 });
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
