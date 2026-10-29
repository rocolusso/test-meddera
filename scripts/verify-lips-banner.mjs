#!/usr/bin/env node
/**
 * Browser checks of the lip enlargement pages (service page, hub and articles of the lips rubric,
 * RU and RO): the banner under the header and the quiz of the buttons, against a running
 * production server.
 *
 * Usage: node scripts/verify-lips-banner.mjs [--base=http://localhost:3111] [--expect=on|off]
 *
 * --expect=on  (default): the server was built with LIPS_BANNER_ENABLED=true (and, to check the home
 *              banner is untouched, HERO_BANNER_ENABLED=true) and NEXT_PUBLIC_RECAPTCHA_SITE_KEY set to
 *              any value (reCAPTCHA is stubbed here, nothing is sent anywhere).
 * --expect=off: built without LIPS_BANNER_ENABLED: no banner anywhere, but the buttons still open the
 *              lips quiz on lips pages.
 * Requests to /api/lead-quiz-form are intercepted and answered here: nothing reaches Telegram.
 * Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const bannerOn = arg('expect', 'on') === 'on';
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

const LIPS_KEYS = ['lips_herpes', 'lips_previous', 'lips_swelling', 'lips_allergy', 'lips_recovery'];
const GENERAL_KEYS = ['visit_type', 'preferred_day', 'procedure_interest'];
const SERVICE = '/services/uvelychenye-gub-v-belczah';
const SERVICE_RO = '/ro/services/uvelychenye-gub-v-belczah';
const HUB = '/blog/uvelichenie-gub-beltsy';

// ---------------------------------------------------------------- 1. every page, from the HTML
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
const paths = [...sitemap.matchAll(/<loc>([^<]*)/g)].map((m) => new URL(m[1]).pathname);
const lipsPages = [];
const otherPages = [];
const htmlOf = new Map();
for (const p of paths) {
  const html = await (await fetch(base + p)).text();
  htmlOf.set(p, html);
  if (/^\/(ro\/)?services\/uvelychenye-gub-v-belczah$/.test(p) || html.includes('data-cta-procedure="lips"')) lipsPages.push(p);
  else otherPages.push(p);
}
const lipsRu = lipsPages.filter((p) => !p.startsWith('/ro'));
const lipsRo = lipsPages.filter((p) => p.startsWith('/ro'));
ok(lipsRu.length === 16 && lipsRo.length === 16, `32 lip enlargement pages found (RU ${lipsRu.length}, RO ${lipsRo.length})`);

for (const p of lipsPages) {
  const html = htmlOf.get(p);
  const start = html.indexOf('<section data-hero-banner');
  if (!bannerOn) {
    if (start !== -1) ok(false, `${p}: no banner expected, found one`);
    continue;
  }
  const end = html.indexOf('</section>', start);
  const mainAt = html.indexOf('<main');
  const segment = start === -1 ? '' : html.slice(start, end);
  const good =
    start !== -1 &&
    html.indexOf('<section data-hero-banner', start + 1) === -1 &&
    start < mainAt &&
    end < mainAt &&
    !/<h[1-6][\s>]/.test(segment) &&
    segment.includes('class="hb hb--lips"') &&
    segment.includes('data-cta-source="lips_banner"') &&
    !segment.includes('data-cta-source="hero_banner"');
  if (!good) ok(false, `${p}: one banner, before <main>, no headings, lips variant and source`);
}
if (bannerOn) ok(failed === 0, 'all 32 lips pages: one banner before <main>, outside it, without headings, with source lips_banner');
else ok(failed === 0, 'no lips page has a banner (switch off)');

// the banner must not appear anywhere else; the home banner (when on) is the unchanged one
let strays = 0;
for (const p of otherPages) {
  const html = htmlOf.get(p);
  if (html.includes('hb--lips') || html.includes('lips_banner')) {
    strays += 1;
    console.log(`FAIL ${p}: lips banner on a page that is not about lips`);
  }
}
ok(strays === 0, `the lips banner is on no other page (${otherPages.length} pages checked)`);
failed += strays;
for (const home of ['/', '/ro']) {
  const html = htmlOf.get(home);
  const start = html.indexOf('<section data-hero-banner');
  if (start === -1) continue;
  const segment = html.slice(start, html.indexOf('</section>', start));
  ok(/^<section data-hero-banner="(true)?" aria-label=/.test(segment) && segment.includes('class="hb"') && !segment.includes('hb--lips') && segment.includes('data-cta-source="hero_banner"'), `${home}: home banner is the unchanged home variant`);
}

// ---------------------------------------------------------------- 2. browser
const browser = await chromium.launch();

async function open(url, w, { dark = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w < 768 ? 844 : 900 },
    isMobile: w < 768,
    hasTouch: w < 768,
  });
  const page = await ctx.newPage();
  const seen = { post: null, posts: 0 };
  await page.addInitScript((isDark) => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
    try {
      if (isDark) localStorage.setItem('meddera-theme', 'dark');
    } catch {}
  }, dark);
  await ctx.route('**/recaptcha/api.js*', (r) =>
    r.fulfill({ contentType: 'text/javascript', body: 'window.grecaptcha={ready:function(cb){cb()},execute:function(){return Promise.resolve("test-token")}};' }),
  );
  await ctx.route('**/api/form-token', (r) => r.fulfill({ json: { token: '', disabled: true } }));
  await ctx.route('**/api/lead-quiz-form', (r) => {
    seen.post = r.request().postDataJSON();
    seen.posts += 1;
    return r.fulfill({ json: { ok: true } });
  });
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page, seen };
}

const events = (page) =>
  page.evaluate(async () => (await Promise.all(window.__beacons)).flatMap((s) => JSON.parse(s).events ?? []));

const expectedHeight = (w) => (w >= 1100 ? 380 : w >= 768 ? 400 : 460);

/** Pauses the banner at the moment scene `k` (0..5) is fully visible. */
const freeze = (page, k) =>
  page.evaluate((k) => {
    const banner = document.querySelector('[data-hero-banner]');
    for (const a of document.getAnimations()) {
      const t = a.effect && a.effect.target;
      if (t && banner.contains(t)) {
        a.pause();
        a.currentTime = k * 3000 + 1500;
      }
    }
  }, k);

// ---- 2a. geometry of the banner
if (bannerOn) {
  const samples = [SERVICE, SERVICE_RO, HUB, lipsRu.find((p) => p.includes('pervyj-raz')), lipsRo.find((p) => !p.endsWith('marire-buzelor-balti') && p.includes('/blog/'))];
  for (const url of samples) {
    for (const w of [320, 360, 390, 767, 768, 1024, 1099, 1100, 1440, 1920]) {
      const { ctx, page } = await open(url, w);
      const problems = [];
      const info = await page.evaluate(() => {
        const banner = document.querySelector('[data-hero-banner]');
        const main = document.querySelector('main');
        const h1 = main.querySelector('h1');
        return {
          height: Math.round(banner.getBoundingClientRect().height),
          before: !main.contains(banner) && Boolean(banner.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING),
          sw: document.documentElement.scrollWidth,
          iw: window.innerWidth,
          h1Top: Math.round(h1.getBoundingClientRect().top + window.scrollY),
        };
      });
      if (info.height !== expectedHeight(w)) problems.push(`height ${info.height} (want ${expectedHeight(w)})`);
      if (!info.before) problems.push('banner is not directly before <main>');
      if (info.sw !== info.iw) problems.push(`horizontal scroll ${info.sw} > ${info.iw}`);
      if (w === 390 && info.h1Top > 700) problems.push(`page h1 starts at ${info.h1Top}px, below the first screen`);
      for (let k = 0; k < 6; k += 1) {
        await freeze(page, k);
        const bad = await page.evaluate((k) => {
          const banner = document.querySelector('[data-hero-banner]');
          const B = banner.getBoundingClientRect();
          const slot = banner.querySelector('.hb__slot').getBoundingClientRect();
          const photo = banner.querySelector('.hb__photo').getBoundingClientRect();
          const sc = banner.querySelector(`.hb__sc--${k + 1}`);
          const out = [];
          const t = 1.5;
          for (const el of sc.querySelectorAll('p, button, span, i, em')) {
            const r = el.getBoundingClientRect();
            if (!r.width || !r.height) continue;
            const name = `${el.tagName.toLowerCase()}.${el.className || ''}`.slice(0, 40);
            if (r.left < slot.left - t || r.right > slot.right + t || r.top < slot.top - t || r.bottom > slot.bottom + t) out.push(`scene ${k + 1}: ${name} leaves the text area`);
            const inter = !(r.right <= photo.left + 4 || r.left >= photo.right - 4 || r.bottom <= photo.top + 4 || r.top >= photo.bottom - 4);
            if (inter) out.push(`scene ${k + 1}: ${name} overlaps the photo`);
          }
          const cta = sc.querySelector('.hb__cta');
          if (cta) {
            const text = [...cta.childNodes].find((n) => n.nodeType === 3);
            const range = document.createRange();
            range.selectNodeContents(text);
            if (range.getClientRects().length !== 1) out.push('button text wraps to two lines');
            const tr = range.getBoundingClientRect();
            const cr = cta.getBoundingClientRect();
            if (tr.left < cr.left + 8 || tr.right > cr.right - 8) out.push('button text does not fit');
          }
          // texts must be on one line where the design has one line (headings may wrap by design)
          for (const p of banner.querySelectorAll('.hb__plate > span')) {
            if (getComputedStyle(p.parentElement).display === 'none') continue;
            const r = p.getBoundingClientRect();
            if (r.left < B.left - t || r.right > B.right + t || r.top < B.top - t || r.bottom > B.bottom + t) out.push(`plate "${p.textContent}" leaves the banner`);
          }
          return out;
        }, k);
        problems.push(...bad);
      }
      ok(problems.length === 0, `${url} ${w}px: banner ${info.height}px, scenes and plates fit${problems.length ? ' :: ' + [...new Set(problems)].join('; ') : ''}`);
      await ctx.close();
    }
  }
}

// ---- 2b. quiz of the buttons
const MODAL = 'div.fixed.inset-0';

async function readQuiz(page) {
  await page.waitForSelector(`${MODAL} form input[type="radio"]`, { timeout: 8000 });
  return page.evaluate((MODAL) => {
    const root = document.querySelector(MODAL);
    const names = [...new Set([...root.querySelectorAll('form input[type="radio"]')].map((i) => i.name.replace(/^quiz-/, '')))];
    const chip = root.querySelector('[data-quiz-chip]');
    return {
      names,
      chip: chip ? chip.getAttribute('data-quiz-chip') : null,
      chipText: chip ? chip.textContent.trim() : null,
      chipButton: chip ? chip.querySelectorAll('button').length : 0,
      title: root.querySelector('h3')?.textContent?.trim() ?? '',
      sub: root.querySelector('h3')?.nextElementSibling?.textContent?.trim() ?? '',
    };
  }, MODAL);
}

async function submit(page) {
  const m = page.locator(MODAL);
  await m.locator('input[name="name"]').fill('Тест');
  await m.locator('input[name="phone"]').fill('+37369123456');
  const groups = await m.evaluate((el) => [...new Set([...el.querySelectorAll('form input[type="radio"]')].map((i) => i.name))]);
  for (const g of groups) await m.locator(`input[name="${g}"]`).nth(1).check({ force: true });
  await m.locator('form button[type="submit"]').click();
}

async function flow({ url, w, how, source, lips = true, ro = false, label }) {
  const { ctx, page, seen } = await open(url, w);
  try {
    if (how === 'banner') {
      await freeze(page, 5);
      await page.locator('.hb__cta').click({ timeout: 8000, force: true });
    } else if (how === 'float') {
      await page.locator('#primaryCta').click({ timeout: 8000, force: true });
    } else if (how === 'dock') {
      await page.locator('#dockBookCta').click({ timeout: 8000, force: true });
    } else if (how === 'card') {
      const btn = page.locator('[data-cta] button[data-open-quiz]').first();
      await btn.scrollIntoViewIfNeeded();
      await btn.click({ timeout: 8000, force: true });
    } else if (how === 'teaser') {
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.7));
      for (let i = 0; i < 6; i += 1) {
        await page.waitForTimeout(1800);
        // lazy images make the page longer: scroll again so that 60% of the content stays behind us
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.75));
      }
      await page.locator('[data-scroll-teaser] button:not([aria-label])').click({ timeout: 25000, force: true });
    }
    const q = await readQuiz(page);
    const want = lips ? LIPS_KEYS : GENERAL_KEYS;
    ok(JSON.stringify(q.names) === JSON.stringify(want), `${label}: questions ${lips ? 'of the lips quiz (5)' : 'of the general quiz (3)'} (${q.names.join(', ')})`);
    if (lips) {
      ok(q.chip === 'lips' && q.chipButton === 0, `${label}: procedure chip "${q.chipText}" without a "change" link`);
      ok(new RegExp(ro ? 'mărirea buzelor' : 'увеличение губ', 'i').test(q.title), `${label}: title "${q.title}"`);
      ok(/5/.test(q.sub), `${label}: subtitle mentions 5 questions ("${q.sub}")`);
    } else {
      ok(q.chip === null, `${label}: no procedure chip`);
    }
    const ev = await events(page);
    const click = ev.find((e) => e.name === 'lead_sticky_cta_click');
    ok(Boolean(click) && click.params.cta_source === source, `${label}: GA4 lead_sticky_cta_click cta_source=${source} (${click?.params?.cta_source})`);
    ok(lips ? click?.params?.procedure === 'lips' : !click?.params?.procedure, `${label}: GA4 procedure ${lips ? 'lips' : 'absent'} (${click?.params?.procedure})`);

    await submit(page);
    await page.waitForFunction(() => document.body.innerText.length > 0);
    for (let i = 0; i < 30 && !seen.post; i += 1) await page.waitForTimeout(200);
    const p = seen.post;
    ok(Boolean(p), `${label}: the form was sent`);
    if (p) {
      ok(p.source === source, `${label}: payload source=${p.source}`);
      ok(lips ? p.procedure === 'lips' : p.procedure === undefined, `${label}: payload procedure=${p.procedure}`);
      ok(JSON.stringify(Object.keys(p.quizAnswers).sort()) === JSON.stringify([...want].sort()), `${label}: payload answers ${Object.keys(p.quizAnswers).join(',')}`);
      ok(p.locale === (ro ? 'ro' : 'ru') && String(p.formPathname).includes(url.split('?')[0]), `${label}: payload locale and page url`);
    }
    await page.waitForTimeout(500);
    const after = await events(page);
    const sent = after.find((e) => e.name === 'lead_sticky_form_sent');
    ok(Boolean(sent) && sent.params.cta_source === source && (lips ? sent.params.procedure === 'lips' : true), `${label}: GA4 lead_sticky_form_sent cta_source=${source}`);
  } catch (e) {
    ok(false, `${label}: ${String(e).split('\n')[0]}`);
  } finally {
    await ctx.close();
  }
}

// the banner button on service, hub and article pages, both languages, desktop and phone
if (bannerOn) {
  await flow({ url: SERVICE, w: 1440, how: 'banner', source: 'lips_banner', label: 'banner / service RU 1440' });
  await flow({ url: SERVICE, w: 390, how: 'banner', source: 'lips_banner', label: 'banner / service RU 390' });
  await flow({ url: SERVICE_RO, w: 1440, how: 'banner', source: 'lips_banner', ro: true, label: 'banner / service RO 1440' });
  await flow({ url: HUB, w: 390, how: 'banner', source: 'lips_banner', label: 'banner / hub RU 390' });
  await flow({ url: lipsRu.find((p) => p.includes('pervyj-raz')), w: 1440, how: 'banner', source: 'lips_banner', label: 'banner / article RU 1440' });
  await flow({ url: lipsRo.find((p) => p.includes('/blog/') && !p.endsWith('marire-buzelor-balti')), w: 390, how: 'banner', source: 'lips_banner', ro: true, label: 'banner / article RO 390' });
}

// the standard buttons of lips pages open the lips quiz (banner or not)
await flow({ url: SERVICE, w: 1440, how: 'float', source: 'float_book', label: 'floating button / service RU' });
await flow({ url: SERVICE_RO, w: 1440, how: 'float', source: 'float_book', ro: true, label: 'floating button / service RO' });
await flow({ url: HUB, w: 1440, how: 'float', source: 'float_book', label: 'floating button / hub RU' });
await flow({ url: SERVICE, w: 390, how: 'dock', source: 'dock_book', label: 'bottom panel / service RU' });
await flow({ url: lipsRo.find((p) => p.includes('/blog/') && !p.endsWith('marire-buzelor-balti')), w: 390, how: 'dock', source: 'dock_book', ro: true, label: 'bottom panel / article RO' });
await flow({ url: lipsRu.find((p) => p.includes('pervyj-raz')), w: 1440, how: 'card', source: 'article_card', label: 'article card / article RU' });
await flow({ url: HUB, w: 1440, how: 'card', source: 'hub_card', label: 'hub card / hub RU' });
await flow({ url: SERVICE, w: 1440, how: 'teaser', source: 'teaser_scroll60', label: 'scroll teaser / service RU' });

// pages that are not about lips keep the general quiz
await flow({ url: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza', w: 1440, how: 'float', source: 'float_book', lips: false, label: 'floating button / botox page' });
await flow({ url: '/', w: 390, how: 'dock', source: 'dock_book', lips: false, label: 'bottom panel / home' });

// leaving a lips page by a link clears the topic
{
  const { ctx, page } = await open(SERVICE, 1440);
  try {
    await page.evaluate(() => document.querySelector('a[href="/blog"]').click());
    await page.waitForURL(/\/blog$/, { timeout: 10000 });
    await page.locator('#primaryCta').click({ timeout: 8000, force: true });
    const q = await readQuiz(page);
    ok(JSON.stringify(q.names) === JSON.stringify(GENERAL_KEYS) && q.chip === null, `after leaving a lips page by a link the floating button opens the general quiz (${q.names.join(', ')})`);
  } catch (e) {
    ok(false, `leaving a lips page: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

// ---- 2c. the scroll teaser is readable in both themes
const lum = (c) => {
  const [r, g, b] = c.match(/[\d.]+/g).slice(0, 3).map(Number).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
for (const dark of [false, true]) {
  const { ctx, page } = await open(SERVICE, 1440, { dark });
  try {
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.7));
    for (let i = 0; i < 6; i += 1) {
      await page.waitForTimeout(1800);
      // lazy images make the page longer: scroll again so that 60% of the content stays behind us
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.75));
    }
    await page.waitForSelector('[data-scroll-teaser]', { timeout: 25000 });
    await page.waitForTimeout(500);
    const c = await page.evaluate(() => {
      const t = document.querySelector('[data-scroll-teaser]');
      return { dark: document.documentElement.classList.contains('dark'), bg: getComputedStyle(t).backgroundColor, fg: getComputedStyle(t.querySelector('p')).color };
    });
    const [a, b] = [lum(c.bg), lum(c.fg)];
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    ok(c.dark === dark && ratio >= 4.5, `scroll teaser ${dark ? 'dark' : 'light'} theme: text ${c.fg} on ${c.bg}, contrast ${ratio.toFixed(1)}:1`);
  } catch (e) {
    ok(false, `scroll teaser ${dark ? 'dark' : 'light'}: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
