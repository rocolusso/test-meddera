#!/usr/bin/env node
/**
 * Browser checks for the clinic-hours indicators on the CTA buttons (dot on the call buttons, pulse
 * and shake of the call button, glow of the "Записаться онлайн" button, dot in the article cards)
 * against a running production server.
 *
 * Usage: node scripts/verify-indicators.mjs [--base=http://localhost:3111] [--expect=on|off]
 *
 * The server must be started after a build made with the same value of
 * NEXT_PUBLIC_INDICATORS_CTA_LOGIC_ENABLED: "true" for --expect=on (default), unset or "false"
 * for --expect=off. The clock of the browser is fixed to chosen moments (reception hours are
 * Tue, Thu-Sat 13:00-18:00 in Europe/Chisinau; November 2026 is winter time, UTC+2).
 * Needs Playwright with Chromium.
 */
import { createRequire } from 'node:module';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const base = arg('base', 'http://localhost:3111');
const expectOn = arg('expect', 'on') === 'on';
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

/** [label, UTC instant, real state in Europe/Chisinau] */
const MOMENTS = [
  ['Tue 14:00', '2026-11-03T12:00:00Z', 'open'],
  ['Tue 12:59', '2026-11-03T10:59:00Z', 'closed'],
  ['Tue 13:00', '2026-11-03T11:00:00Z', 'open'],
  ['Fri 17:59', '2026-11-06T15:59:00Z', 'open'],
  ['Fri 18:00', '2026-11-06T16:00:00Z', 'closed'],
  ['Thu 20:00', '2026-11-05T18:00:00Z', 'closed'],
  ['Mon 14:00', '2026-11-02T12:00:00Z', 'off'],
  ['Wed 12:00', '2026-11-04T10:00:00Z', 'off'],
  ['Sun 15:00', '2026-11-08T13:00:00Z', 'off'],
];

/** What the buttons must show at a moment. */
const shown = (real) => (expectOn ? (real === 'open' ? 'open' : 'closed') : 'open');

const browser = await chromium.launch();

async function open(url, iso, { w, reduced = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w < 768 ? 844 : 900 },
    reducedMotion: reduced ? 'reduce' : 'no-preference',
    isMobile: w < 768,
    hasTouch: w < 768,
  });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    // The tracker stays silent for automated browsers; pretend to be a person to see the events.
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
    window.__beacons = [];
    navigator.sendBeacon = (u, b) => {
      window.__beacons.push(typeof b === 'string' ? Promise.resolve(b) : b.text());
      return true;
    };
  });
  await page.clock.setFixedTime(new Date(iso));
  await page.goto(base + url, { waitUntil: 'load' });
  return { ctx, page };
}

const anim = (page, sel, pseudo) =>
  page.evaluate(([s, p]) => {
    const el = document.querySelector(s);
    return el ? getComputedStyle(el, p || null).animationName : null;
  }, [sel, pseudo]);

for (const [label, iso, real] of MOMENTS) {
  const want = shown(real);
  const tag = `${label} (${real}, expect ${expectOn ? 'on' : 'off'}, shows ${want})`;

  // ---- phone: bottom dock
  {
    const t = await open('/', iso, { w: 390 });
    const p = t.page;
    await p.waitForSelector('#dockCallCta', { timeout: 12000 });
    await p.waitForTimeout(300);
    const dot = await p.locator('#dockCallCta [data-reception-dot]').getAttribute('data-reception-dot');
    ok(dot === want, `dock ${tag}: dot is ${want} (${dot})`);
    if (want === 'closed') {
      ok((await p.locator('#dockCallCta [data-reception-dot] > span').count()) === 1, `dock ${tag}: red dot has the white bar`);
    }
    const a1 = await anim(p, '#dockCallCta', '::after');
    const a2 = await anim(p, '#dockCallCta svg');
    if (want === 'open') ok(a1 !== 'none' && a2 !== 'none', `dock ${tag}: call button pulses and shakes (${a1}, ${a2})`);
    else ok(a1 === 'none' && a2 === 'none', `dock ${tag}: call button is calm (${a1}, ${a2})`);
    const glow = (await anim(p, '#dockBookCta')) ?? '';
    ok(want === 'closed' ? glow.includes('ctaGlow') : !glow.includes('ctaGlow'), `dock ${tag}: book button glow ${want === 'closed' ? 'stronger' : 'normal'} (${glow})`);
    const described = await p.locator('#dockCallCta').getAttribute('aria-describedby');
    ok(Boolean(described) && (await p.locator(`#${described}`).count()) === 1, `dock ${tag}: hours text for screen readers`);

    // GA4 keeps the real state, whatever the buttons show
    await p.waitForTimeout(800);
    const events = await p.evaluate(async () => (await Promise.all(window.__beacons)).map((s) => JSON.parse(s)));
    const states = new Set(events.flatMap((b) => b.events ?? []).map((e) => e.params?.reception_state).filter(Boolean));
    ok(states.size > 0 && [...states].every((s) => s === real), `GA4 ${tag}: reception_state is the real one (${[...states].join(',') || 'none'})`);
    await t.ctx.close();
  }

  // ---- desktop: floating call button
  {
    const t = await open('/', iso, { w: 1440 });
    const p = t.page;
    await p.waitForSelector('#btnCallFixedTrigger', { timeout: 12000 });
    await p.waitForTimeout(300);
    const dot = await p.locator('#btnCallFixedTrigger [data-reception-dot]').getAttribute('data-reception-dot');
    ok(dot === want, `float ${tag}: dot is ${want} (${dot})`);
    const ring = await anim(p, '#btnCallFixedTrigger', '::after');
    const ico = await anim(p, '#btnCallFixedTrigger .btn-call__ico');
    if (want === 'open') ok(ring !== 'none' && ico !== 'none', `float ${tag}: pulse and shake run (${ring}, ${ico})`);
    else ok(ring === 'none' && ico === 'none', `float ${tag}: calm (${ring}, ${ico})`);
    await t.ctx.close();
  }
}

// ---- no animation under reduced motion, whatever the state
{
  const t = await open('/', MOMENTS[0][1], { w: 390, reduced: true });
  await t.page.waitForSelector('#dockCallCta', { timeout: 12000 });
  const a1 = await anim(t.page, '#dockCallCta', '::after');
  ok(a1 === 'none', `reduced motion: call button does not animate (${a1})`);
  await t.ctx.close();
}

// ---- the card at the end of an article or hub: dot on the phone link
{
  const t0 = await open('/blog', MOMENTS[0][1], { w: 390 });
  const hrefs = await t0.page.$$eval('a[href^="/blog/"]', (as) => [...new Set(as.map((a) => a.getAttribute('href')))].slice(0, 12));
  await t0.ctx.close();
  let card = null;
  for (const href of hrefs) {
    const resp = await fetch(base + href);
    if (resp.ok && (await resp.text()).includes('data-cta="article_card"')) {
      card = href;
      break;
    }
    const resp2 = await fetch(base + href);
    if (resp2.ok && (await resp2.text()).includes('data-cta="hub_card"')) {
      card = href;
      break;
    }
  }
  ok(card !== null, `a page with a call-to-action card found (${card})`);
  if (card) {
    const html = await (await fetch(base + card)).text();
    if (!expectOn) {
      ok(/data-reception-dot="open"/.test(html), 'card: the green dot is already in the server HTML (logic off)');
    }
    for (const [label, iso, real] of [MOMENTS[0], MOMENTS[5], MOMENTS[7]]) {
      const want = shown(real);
      const t = await open(card, iso, { w: 390 });
      const link = t.page.locator('[data-cta] a[href^="tel:"]').first();
      await link.scrollIntoViewIfNeeded();
      await t.page.waitForTimeout(500);
      const dot = await link.locator('[data-reception-dot]').getAttribute('data-reception-dot');
      ok(dot === want, `card ${label} (${real}): dot is ${want} (${dot})`);
      const box = await link.boundingBox();
      const dbox = await link.locator('[data-reception-dot]').boundingBox();
      ok(
        dbox && box && dbox.x >= box.x && dbox.y >= box.y && dbox.x + dbox.width <= box.x + box.width && dbox.y + dbox.height <= box.y + box.height,
        `card ${label}: the dot sits inside the button`,
      );
      const attrs = await link.evaluate((a) => [a.dataset.ctaEvent, a.dataset.ctaSource, a.dataset.ctaProcedure].join('|'));
      ok(/^phone_click_simple1\|(article|hub)_card_call\|\w+$/.test(attrs), `card ${label}: tracking attributes kept (${attrs})`);
      await t.ctx.close();
    }
  }
}

await browser.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nall checks passed');
process.exit(failed ? 1 : 0);
