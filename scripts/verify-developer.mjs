#!/usr/bin/env node
/**
 * The /developer page and its link in the clinic footer, checked against a running production server:
 * closed from search engines (header, meta tag, not in sitemap, not in robots.txt, no redirect to home), none of the
 * clinic shell or marketing scripts, three languages (switcher, ?lang=, html lang, title, memory), the photo, the CSS
 * banner (plays on screen, scenes in order, static frame with reduced motion), the orbit labels stay upright, projects,
 * the form (validation, payload, success and error states, honeypot), GA4 events with cta_source and page_type,
 * overflow at phone and desktop widths, layout shift, the house rules for the copy, and the footer link on RU and RO pages.
 * Nothing is sent to Telegram: the form API is answered by the test.
 *
 * Usage: node scripts/verify-developer.mjs [--base=http://localhost:3111]
 * Build and start the site first (npm run build, npx next start -p 3111). Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Playwright is not installed (set NODE_PATH to its folder).');
  process.exit(2);
}

let failed = 0;
let passed = 0;
const ok = (cond, msg) => {
  if (cond) {
    passed += 1;
    console.log('ok   ' + msg);
  } else {
    failed += 1;
    console.log('FAIL ' + msg);
  }
};

const BAD_WORDS = /бесплатн|гарант|безкоштовн|гарантi|gratuit|\bfree\b|guarantee|!|—|–/i;
const MARKETING = /facebook\.net|connect\.facebook|clarity\.ms|plerdy|ahrefs|googletagmanager|google-analytics|vercel-insights|vitals\.vercel/i;

const browser = await chromium.launch();

async function open(url, w, { reducedMotion = false, height } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: height ?? (w < 768 ? 800 : 900) },
    hasTouch: w < 768,
    reducedMotion: reducedMotion ? 'reduce' : 'no-preference',
  });
  const page = await ctx.newPage();
  const requests = [];
  const errors = [];
  const formPosts = [];
  page.on('request', (r) => requests.push(r.url()));
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => {
    if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text());
  });
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    window.__cls = 0;
    try {
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {
      // not supported: the CLS check reads 0
    }
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? b : '__blob__');
      if (typeof b !== 'string') b.text().then((t) => { window.__beacons[window.__beacons.indexOf('__blob__')] = t; });
      return true;
    };
    // never leave the page in the test: the click still reaches the handlers, only the navigation is cancelled
    document.addEventListener('click', (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[target="_blank"], a[data-cta-event]') : null;
      if (a) e.preventDefault();
    }, true);
  });
  await ctx.route('**/recaptcha/api.js*', (r) => r.fulfill({ contentType: 'text/javascript', body: 'window.grecaptcha={ready:function(cb){cb()},execute:function(){return Promise.resolve("t")}};' }));
  await ctx.route('**/api/form-token', (r) => r.fulfill({ json: { token: '', disabled: true } }));
  await ctx.route('**/api/developer-form', async (r) => {
    formPosts.push(JSON.parse(r.request().postData() || '{}'));
    const mode = page.__formMode ?? 200;
    await r.fulfill({ status: mode, json: mode === 200 ? { success: true } : { error: 'x' } });
  });
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page, requests, errors, formPosts };
}

const beacons = async (page) => {
  const raw = await page.evaluate(() => window.__beacons.slice());
  const out = [];
  for (const b of raw) {
    try {
      for (const ev of JSON.parse(b).events) out.push(ev);
    } catch {
      // not JSON
    }
  }
  return out;
};

// ---------------------------------------------------------------- search engines
{
  const res = await fetch(base + '/developer', { redirect: 'manual' });
  ok(res.status === 200, `/developer answers 200, not a redirect (got ${res.status})`);
  ok((res.headers.get('x-robots-tag') || '').toLowerCase() === 'noindex, nofollow', `X-Robots-Tag: noindex, nofollow (got "${res.headers.get('x-robots-tag')}")`);
  const html = await res.text();
  ok(/<meta name="robots" content="noindex, nofollow"/.test(html), 'meta robots noindex, nofollow in the HTML');
  ok(!/rel="canonical"/.test(html), 'no canonical on the page');
  ok(/og:image/.test(html) && /developer\.jpeg/.test(html), 'Open Graph image is the portrait');
  ok(!/pixel|clarity|plerdy/i.test(html.replace(/clarity\s*=/g, '')), 'no marketing scripts in the HTML');
  const sm = await (await fetch(base + '/sitemap.xml')).text();
  ok(!/developer/.test(sm), 'not in sitemap.xml');
  const rb = await (await fetch(base + '/robots.txt')).text();
  ok(!/developer/i.test(rb), 'not in robots.txt (a disallow would hide the noindex)');
  const res2 = await fetch(base + '/developer?lang=en', { redirect: 'manual' });
  ok(res2.status === 200, '/developer?lang=en answers 200');
  const clinic = await fetch(base + '/', { redirect: 'manual' });
  ok(!clinic.headers.get('x-robots-tag'), 'the clinic home page has no X-Robots-Tag');
  ok(!/pintea_logo/.test(res.headers.get('link') || ''), '/developer does not preload the clinic logo');
  ok(/pintea_logo/.test(clinic.headers.get('link') || ''), 'the clinic pages still preload their logo');
  const unknown = await fetch(base + '/developer-nope', { redirect: 'manual' });
  ok(unknown.status === 301 || unknown.status === 308, 'unknown paths still redirect home');
}

// ---------------------------------------------------------------- shell, languages, photo, projects
{
  const { ctx, page, requests, errors } = await open('/developer', 1280);
  ok(await page.locator('.dv').count() === 1, 'page root present');
  ok(await page.locator('a[href^="tel:"]').count() === 0, 'no phone links of the clinic');
  ok(await page.locator('footer a[href="/contacts"], header a[href="/contacts"], nav a[href="/services"]').count() === 0, 'no clinic header or footer');
  ok(await page.locator('[class*="pofo"], [class*="floating"], [class*="StickyLead"]').count() === 0, 'no clinic overlays');
  ok(!requests.some((u) => MARKETING.test(u)), 'no marketing or analytics scripts requested');
  ok(!requests.some((u) => /api\.telegram/.test(u)), 'nothing goes to Telegram from the browser');
  ok(await page.evaluate(() => document.documentElement.lang) === 'ru', 'html lang is ru by default');
  ok((await page.locator('h1').innerText()).replace(/\s+/g, ' ') === 'Александр Щедров', 'h1 in Russian');
  ok(await page.locator('.dv-lang__btn[aria-pressed="true"]').innerText() === 'RU', 'RU is pressed');

  // photo
  const img = page.locator('.dv-photo img');
  await img.waitFor();
  await img.evaluate((i) => (i.complete ? true : new Promise((r) => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); setTimeout(r, 8000); })));
  ok(await img.evaluate((i) => i.complete && i.naturalWidth > 0), 'portrait loaded');
  ok(await img.getAttribute('alt') === 'Александр Щедров', 'portrait has alt text');
  const box = await page.locator('.dv-photo').boundingBox();
  ok(Math.abs(box.width - box.height) < 1.5, `photo frame is square (${Math.round(box.width)}x${Math.round(box.height)})`);
  ok(await img.evaluate((i) => i.currentSrc.includes('/_next/image') && i.currentSrc.includes('developer.jpeg')), 'portrait goes through next/image');

  // projects
  const cases = page.locator('.dv-case');
  ok(await cases.count() === 3, 'three project cards');
  const hrefs = await page.$$eval('.dv-case a', (as) => as.map((a) => ({ h: a.getAttribute('href'), t: a.getAttribute('target'), r: a.getAttribute('rel') })));
  ok(hrefs[0].h === '/' && !hrefs[0].t, 'meddera card opens the clinic home in the same tab');
  ok(hrefs[1].h === 'https://domovenok.md' && hrefs[1].t === '_blank' && /noopener/.test(hrefs[1].r), 'domovenok card: external, new tab, noopener');
  ok(hrefs[2].h === 'https://vezu.md' && hrefs[2].t === '_blank' && /noopener/.test(hrefs[2].r), 'vezu card: external, new tab, noopener');
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const shots = await page.$$eval('.dv-case__frame img', (is) => is.map((i) => i.complete && i.naturalWidth > 0));
  ok(shots.length === 3 && shots.every(Boolean), 'project pictures loaded');
  const tagsOk = await page.$$eval('.dv-case', (cs) => cs.every((c) => c.querySelectorAll('.dv-tags li').length >= 4));
  ok(tagsOk, 'each card has stack tags');

  // languages
  const text = {};
  const want = {
    uk: { h1: 'Олександр Щедров', lang: 'uk', title: /Олександр Щедров/, pressed: 'UK', words: ['Сайт.', 'Пошук.', 'Реклама.', 'Аналітика.', 'Заявки.'] },
    en: { h1: 'Alexander Shchedrov', lang: 'en', title: /Alexander Shchedrov/, pressed: 'EN', words: ['Site.', 'Search.', 'Ads.', 'Analytics.', 'Leads.'] },
    ru: { h1: 'Александр Щедров', lang: 'ru', title: /Александр Щедров/, pressed: 'RU', words: ['Сайт.', 'Поиск.', 'Реклама.', 'Аналитика.', 'Заявки.'] },
  };
  for (const l of ['uk', 'en', 'ru']) {
    await page.locator(`.dv-lang__btn[lang="${l}"]`).click();
    await page.waitForTimeout(150);
    const w = want[l];
    ok((await page.locator('h1').innerText()).replace(/\s+/g, ' ') === w.h1, `${l}: h1`);
    ok(await page.evaluate(() => document.documentElement.lang) === w.lang, `${l}: html lang`);
    ok(w.title.test(await page.title()), `${l}: document title`);
    ok(await page.locator('.dv-lang__btn[aria-pressed="true"]').innerText() === w.pressed, `${l}: switcher state`);
    ok(new URL(page.url()).searchParams.get('lang') === l, `${l}: ?lang= in the address`);
    ok(await page.evaluate(() => localStorage.getItem('dev_lang')) === l, `${l}: choice remembered`);
    const words = await page.$$eval('.dv-bn__w', (ws) => ws.map((x) => x.textContent));
    ok(JSON.stringify(words) === JSON.stringify(w.words), `${l}: banner words ${w.words.join(' ')}`);
    text[l] = await page.locator('.dv').innerText();
    ok(!BAD_WORDS.test(text[l]), `${l}: no banned words or dashes in the page text`);
    ok(!/[А-Яа-яЁё]/.test(l === 'en' ? text.en : ''), l === 'en' ? 'en: no Cyrillic left on the page' : `${l}: (cyrillic check only for en)`);
  }
  ok(errors.length === 0, `no console or page errors (${errors.slice(0, 2).join(' | ')})`);
  await ctx.close();
}

// ---------------------------------------------------------------- ?lang= and remembered language after reload
{
  const { ctx, page } = await open('/developer?lang=uk', 1280);
  await page.waitForFunction(() => document.documentElement.lang === 'uk');
  ok((await page.locator('h1').innerText()).replace(/\s+/g, ' ') === 'Олександр Щедров', '?lang=uk opens Ukrainian');
  // a language that came only from a shared link is not stored: the next visit starts in Russian
  await page.goto(base + '/developer', { waitUntil: 'load' });
  await page.waitForTimeout(500);
  ok(await page.evaluate(() => document.documentElement.lang) === 'ru', 'a ?lang= link alone is not remembered');
  await page.locator('.dv-lang__btn', { hasText: 'UK' }).click();
  await page.goto(base + '/developer', { waitUntil: 'load' });
  await page.waitForFunction(() => document.documentElement.lang === 'uk');
  ok(true, 'the language chosen with the switcher is used on the next visit without ?lang');
  await page.goto(base + '/developer?lang=xx', { waitUntil: 'load' });
  await page.waitForTimeout(300);
  ok(['uk', 'ru'].includes(await page.evaluate(() => document.documentElement.lang)), 'an unknown ?lang is ignored');
  await ctx.close();
}

// ---------------------------------------------------------------- orbit labels upright
{
  const { ctx, page } = await open('/developer', 1280);
  const results = [];
  for (const t of [0, 4000, 11000, 19000]) {
    await page.evaluate((ms) => document.getAnimations().forEach((a) => { a.pause(); a.currentTime = ms; }), t);
    const r = await page.evaluate(() => {
      const out = [];
      for (const span of document.querySelectorAll('.dv-orbit__chip span')) {
        let m = new DOMMatrix();
        for (let el = span; el && !el.classList.contains('dv-orbit'); el = el.parentElement) {
          const tr = getComputedStyle(el).transform;
          if (tr && tr !== 'none') m = new DOMMatrix(tr).multiply(m);
        }
        out.push(((Math.atan2(m.b, m.a) * 180) / Math.PI + 360) % 360);
      }
      return out;
    });
    results.push(r);
  }
  const upright = results.every((r) => r.every((deg) => Math.min(deg, 360 - deg) < 0.6));
  ok(upright, `orbit labels stay upright at 4 moments of the turn (${results.map((r) => r.map((d) => d.toFixed(1)).join('/')).join(' | ')})`);
  ok(await page.locator('.dv-orbit__chip').count() === 5, 'five orbit labels');
  await ctx.close();
}

// ---------------------------------------------------------------- banner
{
  // a short window: on a 900 px high one the banner is already on the first screen and rightly plays
  const { ctx, page } = await open('/developer', 1280, { height: 560 });
  const bn = page.locator('.dv-bn');
  ok(await bn.getAttribute('data-play') === null, 'banner does not play while it is off screen');
  await bn.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('.dv-bn')?.hasAttribute('data-play'));
  ok(true, 'banner starts when it comes on screen');
  const size = await page.locator('.dv-bn__box').boundingBox();
  ok(Math.round(size.height) === 280, `banner box is 280px high on desktop (${Math.round(size.height)})`);
  ok(await bn.getAttribute('role') === 'img' && (await bn.getAttribute('aria-label')).length > 10, 'banner has a text alternative');
  const at = async (ms) => {
    await page.evaluate((t) => document.querySelectorAll('.dv-bn__box *').forEach((el) => el.getAnimations().forEach((a) => { a.pause(); a.currentTime = t; })), ms);
    return page.evaluate(() => {
      const op = (s) => [...document.querySelectorAll(s)].map((e) => Number(getComputedStyle(e).opacity));
      return { s1: op('.dv-bn__s1')[0], s2: op('.dv-bn__s2')[0], words: op('.dv-bn__w'), nd: op('.dv-bn__nd'), lead: op('.dv-bn__lead')[0] };
    });
  };
  const f1 = await at(1100);
  ok(f1.s1 > 0.9 && f1.s2 < 0.05, 'scene 1 (words) at 1.1 s, scene 2 hidden');
  ok(f1.words[1] > 0.9 && f1.words.filter((o) => o > 0.5).length === 1, 'exactly one word visible at 1.1 s (Search)');
  const f2 = await at(3900);
  ok(f2.words[4] > 0.9 && f2.words.filter((o) => o > 0.5).length === 1, 'the last word (Leads) is the one on screen at 3.9 s');
  const f3 = await at(5400);
  ok(f3.s2 > 0.9 && f3.s1 < 0.05 && f3.nd[0] > 0.9 && f3.nd[2] < 0.1 && f3.lead < 0.1, 'scene 2 at 5.4 s: first step in, the rest and the lead card still to come');
  const f4 = await at(7800);
  ok(f4.nd.every((o) => o > 0.9) && f4.lead > 0.9, 'scene 2 at 7.8 s: all steps and the new lead card are in');
  const f5 = await at(8950);
  ok(f5.s2 < 0.1 && f5.s1 < 0.1, 'both scenes are clear at the end of the loop (no flash before the restart)');
  await ctx.close();
}
{
  const { ctx, page } = await open('/developer', 375);
  await page.locator('.dv-bn').scrollIntoViewIfNeeded();
  const size = await page.locator('.dv-bn__box').boundingBox();
  ok(Math.round(size.height) === 400, `banner box is 400px high on a phone (${Math.round(size.height)})`);
  const dir = await page.locator('.dv-bn__pipe').evaluate((e) => getComputedStyle(e).flexDirection);
  ok(dir === 'column', 'steps go in a column on a phone');
  const fits = await page.evaluate(() => {
    document.querySelectorAll('.dv-bn__box *').forEach((el) => el.getAnimations().forEach((a) => { a.pause(); a.currentTime = 3900; }));
    const box = document.querySelector('.dv-bn__box').getBoundingClientRect();
    return [...document.querySelectorAll('.dv-bn__w')].every((w) => {
      const r = document.createRange();
      r.selectNodeContents(w);
      const b = r.getBoundingClientRect();
      return b.left >= box.left && b.right <= box.right;
    });
  });
  ok(fits, 'every banner word fits inside the box at 375px');
  await ctx.close();
}
{
  const { ctx, page } = await open('/developer', 320);
  const longest = await page.evaluate(async () => {
    document.querySelectorAll('.dv-bn__box *').forEach((el) => el.getAnimations().forEach((a) => { a.pause(); a.currentTime = 2800; }));
    const box = document.querySelector('.dv-bn__box').getBoundingClientRect();
    const w = [...document.querySelectorAll('.dv-bn__w')][3];
    const r = document.createRange();
    r.selectNodeContents(w);
    const b = r.getBoundingClientRect();
    return { ok: b.left >= box.left && b.right <= box.right, w: Math.round(b.width), box: Math.round(box.width) };
  });
  ok(longest.ok, `"Аналитика." fits at 320px (${longest.w}px in a ${longest.box}px box)`);
  await ctx.close();
}

// ---------------------------------------------------------------- reduced motion
{
  const { ctx, page } = await open('/developer', 1280, { reducedMotion: true });
  const r = await page.evaluate(() => ({
    s1: getComputedStyle(document.querySelector('.dv-bn__s1')).display,
    lead: getComputedStyle(document.querySelector('.dv-bn__lead')).opacity,
    nd: [...document.querySelectorAll('.dv-bn__nd')].map((e) => getComputedStyle(e).opacity),
    ring: getComputedStyle(document.querySelector('.dv-orbit__ring')).animationName,
    chip: getComputedStyle(document.querySelector('.dv-orbit__chip span')).animationName,
  }));
  ok(r.s1 === 'none' && r.lead === '1' && r.nd.every((o) => o === '1'), 'reduced motion: static final frame of the banner');
  ok(r.ring === 'none' && r.chip === 'none', 'reduced motion: the orbit does not turn');
  await ctx.close();
}

// ---------------------------------------------------------------- GA4 events
{
  const { ctx, page } = await open('/developer', 1280);
  await page.waitForTimeout(500);
  let ev = await beacons(page);
  const pv = ev.find((e) => e.name === 'page_view');
  ok(pv && pv.params.page_type === 'developer' && pv.params.page_path === '/developer', 'page_view with page_type developer');
  await page.locator('.dv-hero a.dv-btn--solid').click();
  await page.locator('.dv-hero a.dv-btn--ghost').click();
  await page.locator('.dv-case a').nth(1).click();
  await page.locator('.dv-lang__btn[lang="en"]').click();
  await page.waitForTimeout(300);
  ev = await beacons(page);
  const src = (s) => ev.find((e) => e.name === 'developer_cta_click' && e.params.cta_source === s);
  ok(src('hero_discuss')?.params.page_type === 'developer', 'hero "discuss" click: developer_cta_click, cta_source hero_discuss');
  ok(!!src('hero_projects'), 'hero "projects" click: cta_source hero_projects');
  ok(!!src('case_domovenok'), 'project click: cta_source case_domovenok');
  ok(src('lang_en')?.params.lang === 'en', 'language switch: cta_source lang_en');
  ok(!ev.some((e) => e.name === 'form_sended_1' || e.name === 'generate_lead'), 'no clinic conversion events on this page');
  await ctx.close();
}

// ---------------------------------------------------------------- form
{
  const { ctx, page, formPosts } = await open('/developer', 1280);
  await page.locator('#form').scrollIntoViewIfNeeded();
  const submit = page.locator('#form button[type="submit"]');
  ok(await page.locator('#form input[name="website"]').getAttribute('tabindex') === '-1', 'honeypot is out of the tab order');
  await submit.click();
  await page.waitForSelector('.dv-err');
  const errs1 = await page.$$eval('.dv-err', (e) => e.map((x) => x.textContent));
  ok(errs1.length >= 2 && /имя/i.test(errs1[0]) && /телефон|мессенджер/i.test(errs1[1]), `empty form: errors in Russian (${errs1.join(' / ')})`);
  ok(formPosts.length === 0, 'nothing is sent while the form is invalid');

  await page.fill('#form input[name="username"]', 'Анна');
  await page.fill('#form input[name="contact"]', 'anna');
  await submit.click();
  await page.waitForTimeout(300);
  ok(/@username|номер/i.test(await page.locator('.dv-err').first().innerText()), 'a plain word is not accepted as contact');
  ok(formPosts.length === 0, 'still nothing sent');

  await page.fill('#form input[name="contact"]', '+373 68 550 030');
  await page.locator('.dv-chip', { hasText: 'Новый сайт' }).click();
  await page.locator('.dv-chip', { hasText: 'Реклама' }).click();
  ok(await page.locator('.dv-chip[aria-pressed="true"]').count() === 2, 'two chips pressed');
  await page.fill('#form textarea', 'Нужен лендинг для клиники');
  page.__formMode = 502;
  await submit.click();
  await page.waitForSelector('.dv-err--submit');
  ok(/Не удалось отправить/.test(await page.locator('.dv-err--submit').innerText()), '502 from the server: error is shown, the form stays');
  ok(await page.locator('#form input[name="username"]').inputValue() === 'Анна', 'the entered data is kept after an error');
  page.__formMode = 429;
  await submit.click();
  await page.waitForFunction(() => /Слишком много/.test(document.querySelector('.dv-err--submit')?.textContent || ''));
  ok(true, '429: "too many attempts" message');
  page.__formMode = 200;
  await submit.click();
  await page.waitForSelector('.dv-sent');
  ok(/Заявка отправлена/.test(await page.locator('.dv-sent').innerText()), 'success message after 200');
  const p = formPosts[formPosts.length - 1];
  ok(p.message.username === 'Анна' && p.message.userphone === '+373 68 550 030' && p.message.message === 'Нужен лендинг для клиники', 'payload: name, contact and message');
  ok(JSON.stringify(p.needs) === JSON.stringify(['new_site', 'ads']), 'payload: chips as ids');
  ok(p.locale === 'ru' && p.source === 'form_submit', 'payload: locale and source');
  ok(typeof p.formPathname === 'string' && p.formPathname.includes('/developer'), 'payload: page address for the Telegram message');
  ok(!('recipients' in p) && !('chat_id' in p), 'the browser never names a recipient');
  const ev = await beacons(page);
  const lead = ev.find((e) => e.name === 'developer_lead');
  ok(lead && lead.params.cta_source === 'form_submit' && lead.params.page_type === 'developer' && lead.params.needs_count === 2, 'GA4: developer_lead with cta_source, page_type and needs_count');
  await ctx.close();
}
{
  // English page: messages in English, a messenger link and @username are accepted
  const { ctx, page, formPosts } = await open('/developer?lang=en', 1280);
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  await page.locator('#form').scrollIntoViewIfNeeded();
  await page.locator('#form button[type="submit"]').click();
  await page.waitForSelector('.dv-err');
  ok(/name/i.test(await page.locator('.dv-err').first().innerText()), 'English validation message');
  await page.fill('#form input[name="username"]', 'Anna');
  await page.fill('#form input[name="contact"]', 't.me/anna_biz');
  await page.locator('#form button[type="submit"]').click();
  await page.waitForSelector('.dv-sent');
  ok(/Request sent/.test(await page.locator('.dv-sent').innerText()), 'English success message');
  ok(formPosts[0]?.locale === 'en' && formPosts[0].message.userphone === 't.me/anna_biz', 'payload carries locale en and the messenger link');
  await ctx.close();
}

// ---------------------------------------------------------------- text is readable on every button and link
{
  const { ctx, page } = await open('/developer', 1280);
  await page.locator('#form').scrollIntoViewIfNeeded();
  await page.locator('.dv-chip').first().click();
  const bad = await page.evaluate(() => {
    const parse = (c) => (c.match(/[\d.]+/g) || []).map(Number);
    const lum = ([r, g, b]) => [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
    const backdrop = (el) => {
      for (let e = el; e; e = e.parentElement) {
        const c = parse(getComputedStyle(e).backgroundColor);
        if (c.length >= 3 && (c[3] === undefined || c[3] > 0.5)) return c;
      }
      return [255, 255, 255];
    };
    const out = [];
    for (const el of document.querySelectorAll('.dv a, .dv button')) {
      if (!el.textContent.trim() || el.getBoundingClientRect().width === 0) continue;
      const fg = parse(getComputedStyle(el).color);
      const [l1, l2] = [lum(fg), lum(backdrop(el))].sort((x, y) => y - x);
      const ratio = (l1 + 0.05) / (l2 + 0.05);
      if (ratio < 4.5) out.push(`${el.className || el.tagName} "${el.textContent.trim().slice(0, 24)}" ${ratio.toFixed(1)}`);
    }
    return out;
  });
  ok(bad.length === 0, `contrast of text on buttons and links is at least 4.5 (${bad.join('; ')})`);
  await ctx.close();
}

// ---------------------------------------------------------------- overflow and layout shift
for (const w of [320, 375, 768, 1024, 1440]) {
  const { ctx, page } = await open('/developer', w);
  await page.waitForTimeout(500);
  let over = 0;
  // the orbit turns, so look at it at several moments of the turn
  for (const t of [0, 3500, 7000, 10500, 14000, 17500, 21000, 24500]) {
    await page.evaluate((ms) => document.getAnimations().forEach((a) => { a.pause(); a.currentTime = ms; }), t);
    over = Math.max(over, await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth));
  }
  ok(over <= 0, `no horizontal scroll at ${w}px at any moment of the orbit turn (${over})`);
  const tooWide = await page.evaluate(() => [...document.querySelectorAll('.dv img, .dv-case, .dv-card, .dv-formw, .dv-stack, .dv-bn__box')].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1).length);
  ok(tooWide === 0, `no block sticks out of the window at ${w}px`);
  const small = await page.evaluate(() => [...document.querySelectorAll('.dv button, .dv a.dv-btn')].filter((e) => e.getBoundingClientRect().height < 34).length);
  ok(small === 0, `buttons are at least 34px high at ${w}px`);
  if (w === 375 || w === 1440) {
    await page.mouse.wheel(0, 3000);
    await page.waitForTimeout(800);
    const cls = await page.evaluate(() => window.__cls);
    ok(cls < 0.1, `layout shift ${cls.toFixed(3)} (< 0.1) at ${w}px`);
  }
  await ctx.close();
}

// ---------------------------------------------------------------- footer link on the clinic pages
for (const c of [
  { url: '/', text: 'Сайт разработан: Alexander Shchedrov', href: '/developer' },
  { url: '/contacts', text: 'Сайт разработан: Alexander Shchedrov', href: '/developer' },
  { url: '/ro', text: 'Site dezvoltat de: Alexander Shchedrov', href: '/developer?lang=en' },
  { url: '/ro/contacts', text: 'Site dezvoltat de: Alexander Shchedrov', href: '/developer?lang=en' },
]) {
  const { ctx, page } = await open(c.url, 1280);
  const row = page.locator('footer p', { hasText: c.text.split(':')[0].split(' ').slice(0, 2).join(' ') });
  ok(await row.count() === 1, `${c.url}: footer line present`);
  ok((await row.innerText()).replace(/\s+/g, ' ').trim() === c.text, `${c.url}: text "${c.text}"`);
  const a = row.locator('a');
  ok(await a.getAttribute('href') === c.href, `${c.url}: name links to ${c.href}`);
  ok(await a.getAttribute('data-cta-source') === 'footer_developer' && await a.getAttribute('data-cta-event') === 'developer_link_click', `${c.url}: cta_source footer_developer`);
  ok(!(await a.getAttribute('target')), `${c.url}: same tab`);
  ok(await page.locator('footer a', { hasText: '© Meddera' }).count() === 1, `${c.url}: the copyright link is still there`);
  // like a visitor: accept the cookie bar (it covers the end of the page on a first visit), scroll to the line, click it
  const accept = page.getByRole('button', { name: /^(Принять|Accepta)$/ });
  // the bar is mounted late (deferred): wait for it
  await accept.first().waitFor({ timeout: 8000 }).then(() => accept.first().click()).catch(() => {});
  await page.waitForTimeout(600);
  await a.evaluate((el) => el.scrollIntoView({ block: 'end', behavior: 'instant' }));
  await page.waitForTimeout(300);
  await a.click();
  await page.waitForTimeout(300);
  const ev = (await beacons(page)).find((e) => e.name === 'developer_link_click');
  ok(ev && ev.params.cta_source === 'footer_developer', `${c.url}: click sends developer_link_click with cta_source`);
  ok(!BAD_WORDS.test(await row.innerText()), `${c.url}: footer line follows the copy rules`);
  await ctx.close();
}
{
  // the link really leads to the page, and the page leaves the clinic shell (hard navigation between root layouts)
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(base + '/', { waitUntil: 'load' });
  const accept2 = page.getByRole('button', { name: /^(Принять|Accepta)$/ });
  await accept2.first().waitFor({ timeout: 8000 }).then(() => accept2.first().click()).catch(() => {});
  await page.waitForTimeout(600);
  const link = page.locator('footer a[href="/developer"]');
  await link.evaluate((el) => el.scrollIntoView({ block: 'end', behavior: 'instant' }));
  await link.click();
  await page.waitForURL('**/developer', { waitUntil: 'commit' });
  await page.waitForSelector('.dv');
  ok(await page.locator('.dv-h1').count() === 1 && await page.locator('footer a[href="/contacts"]').count() === 0, 'footer link opens /developer without the clinic shell');
  await ctx.close();
}

await browser.close();
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
