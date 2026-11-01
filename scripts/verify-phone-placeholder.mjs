#!/usr/bin/env node
/**
 * The phone field placeholder must look like the other fields in every form, also after the theme is switched
 * without a reload (the bug: it stayed dark on the dark theme and white on the light one).
 *   node scripts/verify-phone-placeholder.mjs --base=http://localhost:3111
 * Forms: contacts (Сontacts), lips pages (СontactsLips), the lead quiz (LeadQuizModal).
 */
import { createRequire } from 'node:module';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111').replace(/\/$/, '');
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

let passed = 0;
const failures = [];
const ok = (cond, name) => {
  if (cond) {
    passed++;
    console.log(`ok   ${name}`);
  } else {
    failures.push(name);
    console.log(`FAIL ${name}`);
  }
};

const FORMS = [
  { name: 'contacts', url: '/contacts', scope: 'form:has(#contact-phone)' },
  { name: 'lips', url: '/services/uvelychenye-gub-v-belczah', scope: 'form:has(input[type="tel"])' },
  { name: 'quiz', url: '/ro/contacts', scope: 'div[class*="z-[1100]"]', openQuiz: true },
];

/** Placeholder colours of the phone field and of a plain text field of the same form, plus the theme token. */
async function colours(page, scope) {
  return page.evaluate((sel) => {
    const root = [...document.querySelectorAll(sel)].pop();
    const phone = root.querySelector('input[type="tel"]');
    const text = [...root.querySelectorAll('input:not([type="tel"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"]), textarea')].find(
      (el) => el.placeholder,
    );
    const probe = document.createElement('span');
    probe.style.color = 'var(--muted-foreground)';
    document.body.appendChild(probe);
    const token = getComputedStyle(probe).color;
    probe.remove();
    return {
      phone: getComputedStyle(phone, '::placeholder').color,
      text: getComputedStyle(text, '::placeholder').color,
      token,
      dark: document.documentElement.classList.contains('dark'),
    };
  }, scope);
}

const browser = await chromium.launch();
for (const f of FORMS) {
  for (const start of ['light', 'dark']) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    await ctx.addInitScript((t) => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
      try {
        localStorage.setItem('meddera-theme', t);
      } catch {
        // storage blocked: the page starts in the light theme
      }
    }, start);
    const page = await ctx.newPage();
    await page.route(/^https?:\/\/(?!localhost|127\.0\.0\.1)/, (r) => r.fulfill({ status: 200, body: '' }));
    await page.goto(base + f.url, { waitUntil: 'load' });
    const toggle = page.locator('header button[aria-label*="тем"], header button[aria-label*="tema"]').first();

    if (f.openQuiz) {
      await page.evaluate(() => {
        document.body.insertAdjacentHTML('beforeend', '<button id="t-open" data-open-quiz data-cta-source="float_book">x</button>');
        document.getElementById('t-open').click();
      });
    } else {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }
    await page.waitForSelector(`${f.scope} input[type="tel"]`, { timeout: 15000 });

    const first = await colours(page, f.scope);
    ok(first.phone === first.text && first.phone === first.token, `${f.name} ${start}: phone placeholder ${first.phone} = other fields ${first.text}`);

    // Switch the theme twice without a reload, the way a visitor does with the header button.
    for (let i = 1; i <= 2; i++) {
      if (f.openQuiz) {
        await page.evaluate(() => document.querySelector('header button[aria-label*="tem"], header button[aria-label*="тем"]').click());
      } else {
        await toggle.click();
      }
      await page.waitForTimeout(700);
      const c = await colours(page, f.scope);
      ok(c.dark === (i === 1 ? start === 'light' : start === 'dark'), `${f.name} ${start}: switch ${i} changed the theme`);
      ok(c.phone === c.text && c.phone === c.token, `${f.name} ${start}: after switch ${i} phone ${c.phone} = other fields ${c.text}`);
    }
    await ctx.close();
  }
}
await browser.close();
console.log(`\n${passed} passed, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
