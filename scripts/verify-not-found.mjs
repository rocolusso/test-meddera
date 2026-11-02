#!/usr/bin/env node
/**
 * Browser check of the 404 page (PLAN 404L-01).
 *   node scripts/verify-not-found.mjs --base=http://localhost:3111 [--shots=<dir>]
 * Needs a production build (NEXT_PUBLIC_GA4_TRANSPORT unset = worker, so GA4 events are visible as /api/ga4-collect).
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111').replace(/\/$/, '');
const shots = arg('shots', '');
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

let passed = 0;
const failures = [];
async function check(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`ok   ${name}`);
  } catch (e) {
    failures.push(name);
    console.log(`FAIL ${name}\n     ${String(e.message || e).split('\n')[0]}`);
  }
}
const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

const CASES = [
  { url: '/opechatka-v-adrese', lang: 'ru', heading: 'Страница не найдена', home: '/', search: '/search' },
  { url: '/ro/greseala-in-adresa', lang: 'ro', heading: 'Pagina nu a fost găsită', home: '/ro', search: '/ro/search' },
];

const browser = await chromium.launch();

async function open(url, { width = 390, theme = 'light' } = {}) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  await ctx.addInitScript((t) => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    try {
      localStorage.setItem('meddera-theme', t);
    } catch {}
  }, theme);
  const page = await ctx.newPage();
  const ga4 = [];
  await page.route('**/api/ga4-collect', async (route) => {
    try {
      ga4.push(...JSON.parse(route.request().postData() || '{}').events);
    } catch {}
    await route.fulfill({ status: 204, body: '' });
  });
  await page.route(/^https?:\/\/(?!localhost|127\.0\.0\.1)/, (route) => route.fulfill({ status: 200, body: '' }));
  const res = await page.goto(base + url, { waitUntil: 'load' });
  await page.waitForTimeout(700);
  return { ctx, page, res, ga4 };
}

/** WCAG contrast of an element's text against the first non-transparent background up the tree. */
async function contrast(page, selector) {
  return page.$$eval(selector, (els) =>
    els.map((el) => {
      const parse = (c) => (c.match(/[\d.]+/g) || []).map(Number);
      const lum = ([r, g, b]) => {
        const f = (v) => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        };
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
      };
      let bg = null;
      for (let n = el; n; n = n.parentElement) {
        const c = parse(getComputedStyle(n).backgroundColor);
        if (c.length >= 3 && (c.length < 4 || c[3] > 0.5)) {
          bg = c;
          break;
        }
      }
      bg = bg || [255, 255, 255];
      const fg = parse(getComputedStyle(el).color);
      const [a, b] = [lum(fg), lum(bg)].sort((x, y) => y - x);
      return (a + 0.05) / (b + 0.05);
    }),
  );
}

for (const c of CASES) {
  for (const theme of ['light', 'dark']) {
    for (const width of [320, 390, 1440]) {
      await check(`${c.lang} ${theme} ${width}px: 404, header, footer, heading, map, no h-scroll`, async () => {
        const { ctx, page, res } = await open(c.url, { width, theme });
        assert(res.status() === 404, `status ${res.status()}`);
        assert((await page.getAttribute('html', 'lang')) === c.lang, 'html lang');
        assert((await page.locator('html.dark').count()) === (theme === 'dark' ? 1 : 0), 'theme class');
        assert(await page.locator('header').first().isVisible(), 'header');
        assert(await page.locator('footer').first().isVisible(), 'footer');
        assert((await page.locator('h1').innerText()).toLowerCase() === c.heading.toLowerCase(), 'h1 text');
        assert(await page.getByText('404', { exact: true }).first().isVisible(), '404 visible');
        const nav = page.locator('main nav');
        const links = await nav.locator('a').count();
        assert(links >= 5 + 12 + 6 + 1, `map links: ${links}`);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        assert(overflow <= 0, `horizontal scroll ${overflow}px`);
        const ratios = await contrast(page, 'main nav a, main nav h3, main section:nth-of-type(2) p');
        const worst = Math.min(...ratios);
        assert(worst >= 4.5, `map contrast ${worst.toFixed(2)}`);
        if (shots && (width === 390 || width === 1440)) {
          fs.mkdirSync(shots, { recursive: true });
          await page.screenshot({ path: path.join(shots, `404-${c.lang}-${theme}-${width}.png`), fullPage: true });
        }
        await ctx.close();
      });
    }
  }

  await check(`${c.lang}: hero card text is readable over the dark photo block`, async () => {
    const { ctx, page } = await open(c.url, { width: 390 });
    // The card is translucent over a dark overlay (#1c1c1c at 80% over the photo, plus black/45): measure every text
    // of the card against #1c1c1c, which is lighter than the real background, so the real contrast is higher.
    const ok = await page.$$eval('main section:first-of-type h1, main section:first-of-type p, main section:first-of-type span', (els) =>
      els.every((el) => {
        const f = (v) => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        };
        const [r, g, b] = (getComputedStyle(el).color.match(/[\d.]+/g) || []).map(Number);
        const l = 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
        const bg = 0.2126 * f(28) + 0.7152 * f(28) + 0.0722 * f(28);
        return (l + 0.05) / (bg + 0.05) >= 4.5;
      }),
    );
    assert(ok, 'hero text too dark');
    await ctx.close();
  });

  await check(`${c.lang}: meta robots noindex, title, X-Robots-Tag, no-store`, async () => {
    const { ctx, page, res } = await open(c.url);
    const robots = await page.getAttribute('meta[name="robots"]', 'content');
    assert(/noindex/.test(robots || ''), `meta robots ${robots}`);
    assert(/Meddera/.test(await page.title()), 'title');
    const h = res.headers();
    assert(/noindex/.test(h['x-robots-tag'] || ''), 'x-robots-tag');
    assert(/no-store/.test(h['cache-control'] || ''), `cache-control ${h['cache-control']}`);
    assert(page.url() === base + c.url, 'address bar keeps the requested URL');
    await ctx.close();
  });

  await check(`${c.lang}: every site map link answers 200`, async () => {
    const { ctx, page } = await open(c.url);
    const hrefs = await page.$$eval('main nav a', (as) => as.map((a) => a.getAttribute('href')));
    assert(!hrefs.some((h) => h.includes('/developer')), 'developer in map');
    for (const h of hrefs) {
      const r = await fetch(base + h, { redirect: 'manual' });
      assert(r.status === 200, `${h}: ${r.status}`);
    }
    await ctx.close();
  });

  await check(`${c.lang}: search form goes to ${c.search}?q=`, async () => {
    const { ctx, page } = await open(c.url);
    const form = page.locator('main form[role="search"]');
    assert((await form.count()) === 1, 'no search form (build with NEXT_PUBLIC_SEARCH_ENABLED=true)');
    await form.locator('input[name="q"]').fill('ботокс');
    await Promise.all([page.waitForURL(/\/search\?q=/), form.locator('button[type="submit"]').click()]);
    assert(new URL(page.url()).pathname === c.search, page.url());
    await ctx.close();
  });

  await check(`${c.lang}: "home" goes to ${c.home}`, async () => {
    const { ctx, page } = await open(c.url);
    const href = await page.locator('main section:first-of-type a').first().getAttribute('href');
    assert(href === c.home, href);
    await ctx.close();
  });

  await check(`${c.lang}: "book" opens the lead quiz with cta_source=not_found`, async () => {
    const { ctx, page } = await open(c.url);
    const btn = page.locator('main [data-open-quiz][data-cta-source="not_found"]');
    assert((await btn.count()) === 1, 'no book button');
    await btn.click();
    // The quiz modal (LeadQuizModal): a fixed full-screen layer with the form; it shows the form's phone field.
    await page.waitForSelector('div[class*="z-[1100]"] input[type="tel"], div[class*="z-[1100]"] form', { timeout: 10000 });
    await ctx.close();
  });

  await check(`${c.lang}: GA4 page_view with page_type=not_found and page_not_found with missing_path`, async () => {
    const { ctx, page, ga4 } = await open(`${c.url}?utm_source=test`);
    await page.waitForTimeout(800);
    const pv = ga4.find((e) => e.name === 'page_view');
    const nf = ga4.find((e) => e.name === 'page_not_found');
    assert(pv && pv.params.page_type === 'not_found', `page_view ${JSON.stringify(pv && pv.params.page_type)}`);
    assert(nf && nf.params.missing_path === `${c.url}?utm_source=test`, `page_not_found ${JSON.stringify(nf && nf.params)}`);
    assert(nf.params.lang === c.lang, 'lang param');
    await ctx.close();
  });
}

await check('a real page is not marked as not found (GA4 page_type)', async () => {
  const { ctx, ga4 } = await open('/contacts');
  const pv = ga4.find((e) => e.name === 'page_view');
  assert(pv && pv.params.page_type === 'contacts', JSON.stringify(pv && pv.params.page_type));
  assert(!ga4.some((e) => e.name === 'page_not_found'), 'page_not_found on a real page');
  await ctx.close();
});

await browser.close();
console.log(`\n${passed} passed, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
