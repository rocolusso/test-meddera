#!/usr/bin/env node
/**
 * Banner at the end of the lip enlargement pages (service page, hub and articles about lips, RU and
 * RO): the invitation to the survey with the passing questions, checked against a running
 * production server.
 *
 * Usage: node scripts/verify-lips-end-banner.mjs [--base=http://localhost:3111] [--expect=on|off]
 *
 * --expect=on  (default): the server was built with LIPS_END_BANNER_ENABLED=true (and, to check that the
 *              top banner of the same pages keeps working, LIPS_BANNER_ENABLED=true), and with
 *              NEXT_PUBLIC_RECAPTCHA_SITE_KEY set to any value (reCAPTCHA is stubbed here).
 * --expect=off: built without LIPS_END_BANNER_ENABLED: no banner anywhere, the closing grey box
 *              stays on the service page.
 * Requests to /api/lead-quiz-form are intercepted and answered here: nothing reaches Telegram.
 * Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const on = arg('expect', 'on') === 'on';
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
const SOURCE = 'lips_end_banner';
const SERVICE = '/services/uvelychenye-gub-v-belczah';
const SERVICE_RO = '/ro/services/uvelychenye-gub-v-belczah';
const HUB = '/blog/uvelichenie-gub-beltsy';
const GREY = [/Готовы подчеркнуть свою красоту/, /Gata să îți evidențiezi frumusețea/];

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

let bad = 0;
for (const p of lipsPages) {
  const html = htmlOf.get(p);
  const start = html.indexOf('<section data-end-banner');
  const isService = /services\/uvelychenye-gub-v-belczah$/.test(p);
  // The in-text card (ArticleCta) of articles and hubs: the banner replaces it while the switch is on and the card is back when it is off.
  const markup = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const cards = [...markup.matchAll(/data-cta="(?:article|hub)_card"[^>]*data-procedure="lips"/g)].length;
  const cardProblem = isService ? null : on ? (cards !== 0 ? `${cards} lips card(s) next to the banner` : null) : cards !== 1 ? `expected one lips card, found ${cards}` : null;
  if (cardProblem) {
    bad += 1;
    console.log(`FAIL ${p}: ${cardProblem}`);
  }
  if (!on) {
    if (start !== -1) {
      bad += 1;
      console.log(`FAIL ${p}: no banner expected, found one`);
    }
    if (isService && !GREY.some((re) => re.test(html))) {
      bad += 1;
      console.log(`FAIL ${p}: closing grey box must stay while the switch is off`);
    }
    continue;
  }
  const end = html.indexOf('</section>', start);
  const segment = start === -1 ? '' : html.slice(start, end);
  const mainEnd = html.indexOf('</main>');
  const problems = [];
  if (start === -1) problems.push('no banner');
  else {
    if (html.indexOf('<section data-end-banner', start + 1) !== -1) problems.push('more than one banner');
    if (isService) {
      // the service page: a block of its own right after </main>, outside the protected text
      if (mainEnd === -1 || html.slice(mainEnd + 7, start).trim() !== '') problems.push('banner is not directly after </main>');
    } else {
      // hubs and articles: inside <main>, between two sections of the text
      const mainStart = html.indexOf('<main');
      if (mainStart === -1 || mainEnd === -1 || start < mainStart || end > mainEnd) problems.push('banner is not inside <main>');
      const before = html.slice(Math.max(0, start - 1800), start);
      const after = html.slice(end + '</section>'.length, end + '</section>'.length + 400);
      const isHub = /aria-labelledby="hub-list-/.test(html);
      if (isHub) {
        // before the list of articles ("Статьи по этапам" / "Articole pe etape"), as a sibling of the sections
        if (!/^\s*<section[^>]*aria-labelledby="hub-list-/.test(after)) problems.push('hub: the list of articles must follow the banner directly');
        if (!before.trimEnd().endsWith('</section>')) problems.push('hub: the banner must stand between sections');
      } else {
        // after the "Запись на консультацию" section, before "Медицинская проверка"
        if (!before.trimEnd().endsWith('</section>') || !/(Запись на консультацию|Programare la consultație)/.test(before)) problems.push('article: the banner must follow the consultation section directly');
        if (!/^\s*<section[^>]*aria-labelledby="medical-review"/.test(after)) problems.push('article: the medical review block must follow the banner');
      }
    }
    if (/<h[1-6][\s>]/.test(segment)) problems.push('heading inside the banner');
    if (!segment.includes(`data-cta-source="${SOURCE}"`)) problems.push('source missing');
    if (!segment.includes('data-open-quiz')) problems.push('quiz button missing');
    if ((segment.match(/class="eb__q"/g) || []).length !== 5) problems.push('not five questions');
  }
  if (isService && GREY.some((re) => re.test(html))) problems.push('grey box is still there');
  if (problems.length) {
    bad += 1;
    console.log(`FAIL ${p}: ${problems.join('; ')}`);
  }
}
ok(bad === 0, on ? 'all 32 lips pages: one banner (service pages: right after </main>; hubs: before the list of articles; articles: after the consultation section), no headings, source lips_end_banner, grey box gone from the service pages, no lips card in articles and hubs' : 'no banner on lips pages, grey box stays on the service pages, lips card stays in articles and hubs');
failed += bad;

let strays = 0;
for (const p of otherPages) {
  const html = htmlOf.get(p);
  if (html.includes('data-end-banner') || html.includes(SOURCE)) {
    strays += 1;
    console.log(`FAIL ${p}: closing banner on a page that is not about lips`);
  }
}
ok(strays === 0, `the closing banner is on no other page (${otherPages.length} pages checked)`);
failed += strays;

if (!on) {
  console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
  process.exit(failed ? 1 : 0);
}

// ---------------------------------------------------------------- 2. browser
const browser = await chromium.launch();

async function open(url, w, { reduced = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w < 768 ? 844 : 900 },
    isMobile: w < 768,
    hasTouch: w < 768,
    reducedMotion: reduced ? 'reduce' : 'no-preference',
  });
  const page = await ctx.newPage();
  const seen = { post: null };
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
  });
  await ctx.route('**/recaptcha/api.js*', (r) =>
    r.fulfill({ contentType: 'text/javascript', body: 'window.grecaptcha={ready:function(cb){cb()},execute:function(){return Promise.resolve("test-token")}};' }),
  );
  await ctx.route('**/api/form-token', (r) => r.fulfill({ json: { token: '', disabled: true } }));
  await ctx.route('**/api/lead-quiz-form', (r) => {
    seen.post = r.request().postDataJSON();
    return r.fulfill({ json: { ok: true } });
  });
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page, seen };
}

const events = (page) => page.evaluate(async () => (await Promise.all(window.__beacons)).flatMap((s) => JSON.parse(s).events ?? []));

/** Pauses the banner at the moment question k (0..4) is fully on screen. */
const freeze = (page, k) =>
  page.evaluate((k) => {
    const banner = document.querySelector('[data-end-banner]');
    for (const a of document.getAnimations()) {
      const t = a.effect && a.effect.target;
      if (t && banner.contains(t)) {
        a.pause();
        a.currentTime = k * 3000 + 1500;
      }
    }
  }, k);

const WIDTHS = [320, 360, 390, 767, 768, 1024, 1099, 1100, 1440, 1920];
const expectedHeight = (w) => (w >= 768 ? 340 : 500);

// ---- 2a. geometry
const samples = [SERVICE, SERVICE_RO, HUB, lipsRu.find((p) => p.includes('pervyj-raz')), lipsRo.find((p) => p.includes('/blog/') && !p.endsWith('marire-buzelor-balti'))];
for (const url of samples) {
  for (const w of WIDTHS) {
    const { ctx, page } = await open(url, w);
    const problems = [];
    const info = await page.evaluate(() => {
      const banner = document.querySelector('[data-end-banner]');
      const main = document.querySelector('main');
      const r = banner.getBoundingClientRect();
      return {
        height: Math.round(r.height),
        after: !main.contains(banner) && Boolean(main.compareDocumentPosition(banner) & Node.DOCUMENT_POSITION_FOLLOWING),
        inside: main.contains(banner),
        left: r.left,
        right: r.right,
        sw: document.documentElement.scrollWidth,
        iw: window.innerWidth,
        cw: document.documentElement.clientWidth,
      };
    });
    const service = /services\//.test(url);
    if (info.height !== expectedHeight(w)) problems.push(`height ${info.height} (want ${expectedHeight(w)})`);
    if (service && !info.after) problems.push('banner is not after <main>');
    if (!service && !info.inside) problems.push('banner is not inside <main>');
    // full width of the window, also when it stands in the narrow text column
    if (info.left > 0.5 || info.right < info.cw - 0.5) problems.push(`banner does not span the window (left ${info.left}, right ${info.right}, window ${info.cw})`);
    if (info.sw !== info.iw) problems.push(`horizontal scroll ${info.sw} > ${info.iw}`);
    for (let k = 0; k < 5; k += 1) {
      await freeze(page, k);
      const bad = await page.evaluate((k) => {
        const banner = document.querySelector('[data-end-banner]');
        const B = banner.getBoundingClientRect();
        const out = [];
        const t = 1.5;
        const inside = (el, name, pad = 10) => {
          const r = el.getBoundingClientRect();
          if (r.left < B.left + pad - t || r.right > B.right - pad + t || r.top < B.top + 6 - t || r.bottom > B.bottom - 6 + t) out.push(`${name} too close to the edge or outside`);
          return r;
        };
        // white text on the dark banner, also inside an article (its text column colours every <p> grey)
        for (const sel of ['.eb__title', '.eb__q']) {
          const c = getComputedStyle(banner.querySelector(sel)).color;
          if (c !== 'rgb(255, 255, 255)') out.push(`${sel} colour ${c}, want white`);
        }
        const title = inside(banner.querySelector('.eb__title'), 'title');
        const sub = inside(banner.querySelector('.eb__sub'), 'sub');
        const act = inside(banner.querySelector('.eb__act'), 'button row');
        const cta = banner.querySelector('.eb__cta');
        const ctaR = inside(cta, 'button');
        inside(banner.querySelector('.eb__note'), 'note');
        const card = inside(banner.querySelector('.eb__card'), 'card');
        // button text on one line, inside the button
        const text = [...cta.childNodes].find((n) => n.nodeType === 3);
        const range = document.createRange();
        range.selectNodeContents(text);
        if (range.getClientRects().length !== 1) out.push('button text wraps');
        const tr = range.getBoundingClientRect();
        if (tr.left < ctaR.left + 8 || tr.right > ctaR.right - 8) out.push('button text does not fit');
        // the button is always there
        const cs = getComputedStyle(cta);
        if (cs.visibility !== 'visible' || Number(cs.opacity) < 1 || ctaR.width < 100) out.push('button not visible');
        // columns do not run into each other (and not into the card on a phone)
        const hit = (a, b) => !(a.right <= b.left + 2 || a.left >= b.right - 2 || a.bottom <= b.top + 2 || a.top >= b.bottom - 2);
        for (const [n, r] of [['title', title], ['sub', sub], ['button row', act]]) if (hit(r, card)) out.push(`${n} overlaps the card`);
        if (hit(title, sub) || hit(sub, act)) out.push('texts overlap');
        // the question of this moment, fully inside its box; the others are hidden
        const qs = banner.querySelector('.eb__qs').getBoundingClientRect();
        const items = [...banner.querySelectorAll('.eb__q')];
        items.forEach((q, i) => {
          const o = Number(getComputedStyle(q).opacity);
          if (i === k) {
            if (o < 0.99) out.push(`question ${k + 1} is not fully visible (${o})`);
            const r = document.createRange();
            r.selectNodeContents(q);
            const b = r.getBoundingClientRect();
            if (b.bottom > qs.bottom + 1 || b.top < qs.top - 1 || b.right > qs.right + 1) out.push(`question ${k + 1} does not fit its box`);
            if (r.getClientRects().length > 3) out.push(`question ${k + 1} takes more than three lines`);
          } else if (o > 0.01) out.push(`question ${i + 1} shows through at moment ${k + 1}`);
        });
        const counter = [...banner.querySelectorAll('.eb__c')].filter((c) => Number(getComputedStyle(c).opacity) > 0.99).map((c) => c.textContent.trim());
        if (counter.length !== 1 || !new RegExp(`^${k + 1} (из|din) 5$`).test(counter[0])) out.push(`counter shows ${JSON.stringify(counter)}`);
        const dots = [...banner.querySelectorAll('.eb__dot')].filter((d) => Number(getComputedStyle(d, '::after').opacity) > 0.99).length;
        if (dots !== k + 1) out.push(`${dots} progress dots lit at moment ${k + 1}`);
        return out;
      }, k);
      problems.push(...bad);
    }
    ok(problems.length === 0, `${url} ${w}px: banner ${info.height}px, texts, card, button and questions fit${problems.length ? ' :: ' + [...new Set(problems)].join('; ') : ''}`);
    await ctx.close();
  }
}

// ---- 2b. the button opens the lips quiz
const MODAL = 'div.fixed.inset-0';
/** A click before React has attached the quiz handler is lost: click again until the quiz opens. */
async function clickUntilQuiz(page, locator, timeout = 8000) {
  for (let i = 0; i < 4; i += 1) {
    await locator.click({ timeout, force: true });
    try {
      await page.waitForSelector(`${MODAL} form input[type="radio"]`, { timeout: 2500 });
      return;
    } catch {
      // not open yet
    }
  }
}

async function flow({ url, w, ro = false, label }) {
  const { ctx, page, seen } = await open(url, w);
  try {
    // centre it: at the bottom edge of a phone the fixed bottom panel would sit on top of the button
    // (instant: the page has smooth scrolling, a click during the scroll can land outside the viewport)
    await page.locator('.eb').evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.waitForTimeout(150);
    await clickUntilQuiz(page, page.locator('.eb__cta'));
    await page.waitForSelector(`${MODAL} form input[type="radio"]`, { timeout: 8000 });
    const q = await page.evaluate((MODAL) => {
      const root = document.querySelector(MODAL);
      const chip = root.querySelector('[data-quiz-chip]');
      return {
        names: [...new Set([...root.querySelectorAll('form input[type="radio"]')].map((i) => i.name.replace(/^quiz-/, '')))],
        chip: chip ? chip.getAttribute('data-quiz-chip') : null,
        change: chip ? chip.querySelectorAll('button').length : 0,
        title: root.querySelector('h3')?.textContent?.trim() ?? '',
      };
    }, MODAL);
    ok(JSON.stringify(q.names) === JSON.stringify(LIPS_KEYS), `${label}: lips quiz of 5 questions (${q.names.join(', ')})`);
    ok(q.chip === 'lips' && q.change === 0, `${label}: procedure chip without a "change" link`);
    ok(new RegExp(ro ? 'mărirea buzelor' : 'увеличение губ', 'i').test(q.title), `${label}: title "${q.title}"`);
    const click = (await events(page)).find((e) => e.name === 'lead_sticky_cta_click');
    ok(Boolean(click) && click.params.cta_source === SOURCE && click.params.procedure === 'lips', `${label}: GA4 lead_sticky_cta_click cta_source=${click?.params?.cta_source} procedure=${click?.params?.procedure}`);

    const m = page.locator(MODAL);
    await m.locator('input[name="name"]').fill('Тест');
    await m.locator('input[name="phone"]').fill('+37369123456');
    for (const g of LIPS_KEYS) await m.locator(`input[name="quiz-${g}"]`).nth(1).check({ force: true });
    await m.locator('form button[type="submit"]').click();
    for (let i = 0; i < 30 && !seen.post; i += 1) await page.waitForTimeout(200);
    const p = seen.post;
    ok(Boolean(p) && p.source === SOURCE && p.procedure === 'lips', `${label}: payload source=${p?.source} procedure=${p?.procedure}`);
    ok(Boolean(p) && JSON.stringify(Object.keys(p.quizAnswers).sort()) === JSON.stringify([...LIPS_KEYS].sort()), `${label}: payload carries the five answers`);
    await page.waitForTimeout(500);
    const sent = (await events(page)).find((e) => e.name === 'lead_sticky_form_sent');
    ok(Boolean(sent) && sent.params.cta_source === SOURCE, `${label}: GA4 lead_sticky_form_sent cta_source=${SOURCE}`);
  } catch (e) {
    ok(false, `${label}: ${String(e).split('\n')[0]}`);
  } finally {
    await ctx.close();
  }
}
await flow({ url: SERVICE, w: 1440, label: 'end banner / service RU 1440' });
await flow({ url: SERVICE, w: 390, label: 'end banner / service RU 390' });
await flow({ url: SERVICE_RO, w: 1440, ro: true, label: 'end banner / service RO 1440' });
await flow({ url: HUB, w: 390, label: 'end banner / hub RU 390' });
await flow({ url: lipsRu.find((p) => p.includes('pervyj-raz')), w: 1440, label: 'end banner / article RU 1440' });
await flow({ url: lipsRo.find((p) => p.includes('/blog/') && !p.endsWith('marire-buzelor-balti')), w: 390, ro: true, label: 'end banner / article RO 390' });

// ---- 2c. motion: pause off screen, real cycle, top banner untouched, reduced motion
{
  const { ctx, page } = await open(SERVICE, 1440);
  try {
    await page.waitForTimeout(600);
    const paused0 = await page.evaluate(() => document.querySelector('[data-end-banner]').getAttribute('data-paused'));
    ok(paused0 === 'true', `end banner is paused while it is off screen (data-paused=${paused0})`);
    const top = await page.evaluate(() => {
      const t = document.querySelector('[data-hero-banner]');
      return { has: Boolean(t), running: t ? document.getAnimations().filter((a) => t.contains(a.effect?.target) && a.playState === 'running').length : 0, paused: t?.getAttribute('data-paused') };
    });
    ok(top.has && top.running > 0 && top.paused !== 'true', `top banner of the same page still runs (${top.running} animations, data-paused=${top.paused})`);
    await page.locator('.eb').scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    const paused1 = await page.evaluate(() => document.querySelector('[data-end-banner]').getAttribute('data-paused'));
    ok(paused1 === 'false', `end banner runs when it is on screen (data-paused=${paused1})`);
    const visibleQ = () => page.evaluate(() => [...document.querySelectorAll('.eb__q')].filter((q) => Number(getComputedStyle(q).opacity) > 0.9).map((q) => q.textContent));
    const a = await visibleQ();
    await page.waitForTimeout(3100);
    const b = await visibleQ();
    ok(a.length === 1 && b.length === 1 && a[0] !== b[0], `the question changes by itself: "${a[0]}" -> "${b[0]}"`);
    const topAfter = await page.evaluate(() => document.querySelector('[data-hero-banner]').getAttribute('data-paused'));
    ok(topAfter === 'true', `top banner pauses once off screen (data-paused=${topAfter})`);
  } catch (e) {
    ok(false, `motion: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}
{
  const { ctx, page } = await open(SERVICE_RO, 390, { reduced: true });
  try {
    const r = await page.evaluate(() => {
      const banner = document.querySelector('[data-end-banner]');
      const shown = [...banner.querySelectorAll('.eb__q')].filter((q) => getComputedStyle(q).display !== 'none' && Number(getComputedStyle(q).opacity) > 0.99).length;
      const cta = banner.querySelector('.eb__cta').getBoundingClientRect();
      return { shown, ctaW: cta.width, anim: document.getAnimations().filter((a) => banner.contains(a.effect?.target)).length };
    });
    ok(r.shown === 1 && r.ctaW > 100 && r.anim === 0, `reduced motion: one still question, the button, no animations (${JSON.stringify(r)})`);
  } catch (e) {
    ok(false, `reduced motion: ${String(e).split('\n')[0]}`);
  }
  await ctx.close();
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
