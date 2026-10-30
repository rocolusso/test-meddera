#!/usr/bin/env node
/**
 * GA4 pipeline checks (no browser, no network unless GA4_API_SECRET is set):
 *  1. page classification and first-touch parsing (src/lib/analytics-context.ts);
 *  2. reception state in Europe/Chisinau time, independent of the process TZ;
 *  3. browser client (src/lib/ga4-worker-client.ts) with fake window/storage;
 *  4. Cloudflare Worker (cloudflare/ga4-worker/src/index.ts) with a mocked fetch;
 *  5. optional: payload validation by Google (needs GA4_API_SECRET and GA4_MEASUREMENT_ID).
 * Usage: node scripts/verify-ga4.mjs   (Node 22.18+, loads .ts files by stripping types)
 * Tip: run it also with TZ=America/Los_Angeles and TZ=Pacific/Auckland.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = (rel) => pathToFileURL(path.join(root, rel)).href;

const ctx = await import(url('src/lib/analytics-context.ts'));
const schedule = await import(url('src/lib/contact-reception-schedule.ts'));
const worker = await import(url('cloudflare/ga4-worker/src/index.ts'));

/* ---------- 1. page context ---------- */

test('getPageContext classifies pages', () => {
  const cases = [
    ['/', 'home', '', 'ru'],
    ['/ro', 'home', '', 'ro'],
    ['/ro/', 'home', '', 'ro'],
    ['/services', 'services_list', '', 'ru'],
    ['/services/uvelychenye-gub-v-belczah', 'service', 'uvelychenye-gub-v-belczah', 'ru'],
    ['/ro/services/uvelychenye-gub-v-belczah', 'service', 'uvelychenye-gub-v-belczah', 'ro'],
    ['/blog', 'blog_list', '', 'ru'],
    ['/blog/page/2', 'blog_list', '', 'ru'],
    ['/ro/blog/page/3', 'blog_list', '', 'ro'],
    ['/blog/skolko-derzhitsya-botoks', 'article', 'skolko-derzhitsya-botoks', 'ru'],
    ['/blog/botoks-beltsy-hub', 'hub', 'botoks-beltsy-hub', 'ru'],
    ['/blog/uvelichenie-gub-beltsy', 'hub', 'uvelichenie-gub-beltsy', 'ru'],
    ['/ro/blog/marire-buzelor-balti', 'hub', 'marire-buzelor-balti', 'ro'],
    ['/ro/blog/botox-balti-hub', 'hub', 'botox-balti-hub', 'ro'],
    ['/ro/blog/ce-este-botox', 'article', 'ce-este-botox', 'ro'],
    ['/contacts', 'contacts', '', 'ru'],
    ['/ro/contacts', 'contacts', '', 'ro'],
    ['/search?q=x', 'search', '', 'ru'],
    ['/ads/g1', 'ads', 'g1', 'ru'],
    ['/developer', 'developer', '', 'ru'],
    ['/developer?lang=en', 'developer', '', 'ru'],
    ['/about', 'other', '', 'ru'],
    ['/robots', 'other', '', 'ru'],
  ];
  for (const [p, type, slug, lang] of cases) {
    const got = ctx.getPageContext(p);
    assert.equal(got.page_type, type, `${p}: page_type`);
    assert.equal(got.content_slug, slug, `${p}: content_slug`);
    assert.equal(got.lang, lang, `${p}: lang`);
  }
  assert.equal(ctx.getPageContext('/blog/%D1%82%D0%B5%D1%81%D1%82').content_slug, 'тест');
  assert.equal(ctx.getPageContext('/blog/%E0%A4%A').content_slug, '%E0%A4%A', 'broken escape must not throw');
});

test('BLOG_HUB_SLUGS matches the blog registry (hubs are hubs, articles are articles)', () => {
  const dir = path.join(root, 'src/blog-data');
  const re = /kind:\s*'(hub|article)'[\s\S]{0,400}?slugRu:\s*'([^']+)',\s*slugRo:\s*'([^']+)'/g;
  let hubs = 0;
  let articles = 0;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    for (const m of text.matchAll(re)) {
      const [, kind, ru, ro] = m;
      for (const slug of [ru, ro]) {
        const got = ctx.getPageContext(`/blog/${slug}`).page_type;
        assert.equal(got, kind, `${file}: ${slug} is a ${kind}, classified as ${got}`);
      }
      if (kind === 'hub') hubs += 1;
      else articles += 1;
    }
  }
  assert.equal(ctx.BLOG_HUB_SLUGS.length, hubs * 2, 'BLOG_HUB_SLUGS has a slug that is not a hub in the registry');
  assert.ok(hubs >= 6, `found only ${hubs} hubs`);
  assert.ok(articles >= 50, `found only ${articles} articles`);
  console.log(`  checked ${hubs} hubs and ${articles} articles`);
});

test('parseFirstTouch', () => {
  const own = 'meddera.md';
  assert.deepEqual(ctx.parseFirstTouch('', '', own), { first_src: 'direct', first_med: 'none', first_cmp: '', first_ref: '' });
  assert.deepEqual(ctx.parseFirstTouch('?utm_source=Instagram&utm_medium=bio_website', '', own), {
    first_src: 'instagram', first_med: 'bio_website', first_cmp: '', first_ref: '',
  });
  assert.equal(ctx.parseFirstTouch('?gclid=abc', 'https://www.google.com/', own).first_med, 'cpc');
  assert.deepEqual(ctx.parseFirstTouch('', 'https://www.google.com/', own), {
    first_src: 'google.com', first_med: 'organic', first_cmp: '', first_ref: 'google.com',
  });
  assert.equal(ctx.parseFirstTouch('', 'https://yandex.ru/search', own).first_med, 'organic');
  assert.equal(ctx.parseFirstTouch('', 'https://l.facebook.com/l.php', own).first_med, 'referral');
  assert.equal(ctx.parseFirstTouch('', 'https://www.meddera.md/blog', own).first_src, 'direct', 'own site is not a referrer');
  assert.equal(ctx.parseFirstTouch('', 'not a url', own).first_src, 'direct');
  assert.equal(ctx.parseFirstTouch('?utm_source=x&utm_campaign=' + 'a'.repeat(300), '', own).first_cmp.length, 100);
});

/* ---------- 2. reception state ---------- */

test('getReceptionIndicator uses Europe/Chisinau time', () => {
  const at = (iso) => schedule.getReceptionIndicator(new Date(iso));
  // Winter (UTC+2). 2026-10-27 is a Tuesday.
  assert.equal(at('2026-10-27T10:59:00Z'), 'closed'); // 12:59
  assert.equal(at('2026-10-27T11:00:00Z'), 'open'); //   13:00
  assert.equal(at('2026-10-27T15:59:00Z'), 'open'); //   17:59
  assert.equal(at('2026-10-27T16:00:00Z'), 'closed'); // 18:00
  assert.equal(at('2026-10-27T22:30:00Z'), 'off'); //    Wed 00:30 local
  assert.equal(at('2026-10-28T12:00:00Z'), 'off'); //    Wed
  // Summer (UTC+3). 2026-07-02 is a Thursday.
  assert.equal(at('2026-07-02T09:59:00Z'), 'closed'); // 12:59
  assert.equal(at('2026-07-02T10:00:00Z'), 'open'); //   13:00
  assert.equal(at('2026-07-02T14:59:00Z'), 'open'); //   17:59
  assert.equal(at('2026-07-02T15:00:00Z'), 'closed'); // 18:00
  assert.equal(at('2026-07-02T21:30:00Z'), 'closed'); // Fri 00:30 local, a reception day
  assert.equal(at('2026-07-04T12:00:00Z'), 'open'); //   Saturday
  assert.equal(at('2026-07-05T12:00:00Z'), 'off'); //    Sunday
  assert.equal(at('2026-07-06T12:00:00Z'), 'off'); //    Monday
});

test('getReceptionIndicator around the clock change (25 Oct 2026, 04:00 EEST -> 03:00 EET)', () => {
  const at = (iso) => schedule.getReceptionIndicator(new Date(iso));
  assert.equal(at('2026-10-24T14:59:00Z'), 'open'); //   Sat 17:59 EEST (UTC+3)
  assert.equal(at('2026-10-24T15:00:00Z'), 'closed'); // Sat 18:00 EEST
  assert.equal(at('2026-10-25T00:30:00Z'), 'off'); //    Sun 03:30 EEST
  assert.equal(at('2026-10-25T01:30:00Z'), 'off'); //    Sun 03:30 EET, the repeated hour
  assert.equal(at('2026-10-26T12:00:00Z'), 'off'); //    Mon
  assert.equal(at('2026-10-27T10:59:00Z'), 'closed'); // Tue 12:59 EET (UTC+2)
  assert.equal(at('2026-10-27T11:00:00Z'), 'open'); //   Tue 13:00 EET
  // The same instant gives the same answer whatever the process time zone is.
  const before = process.env.TZ;
  for (const tz of ['America/New_York', 'Asia/Tokyo', 'UTC']) {
    process.env.TZ = tz;
    assert.equal(at('2026-10-24T14:59:00Z'), 'open', tz);
    assert.equal(at('2026-10-27T11:00:00Z'), 'open', tz);
    assert.equal(at('2026-10-25T01:30:00Z'), 'off', tz);
  }
  if (before === undefined) delete process.env.TZ;
  else process.env.TZ = before;
});

/* ---------- 3. browser client ---------- */

async function loadClient() {
  const src = fs
    .readFileSync(path.join(root, 'src/lib/ga4-worker-client.ts'), 'utf8')
    .replaceAll("'@/lib/analytics-context'", `'${url('src/lib/analytics-context.ts')}'`)
    .replaceAll("'@/lib/contact-reception-schedule'", `'${url('src/lib/contact-reception-schedule.ts')}'`);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-ga4-'));
  const file = path.join(dir, `client-${Math.random().toString(36).slice(2)}.mts`);
  fs.writeFileSync(file, src);
  return import(pathToFileURL(file).href);
}

function fakeBrowser({ href, referrer = '', webdriver = false, localStore = {} }) {
  const u = new URL(href);
  const cookies = new Map();
  const mem = (initial) => {
    const m = new Map(Object.entries(initial));
    return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) };
  };
  const sent = [];
  globalThis.window = { location: { href: u.href, pathname: u.pathname, search: u.search, hostname: u.hostname } };
  globalThis.document = {
    referrer,
    get cookie() { return [...cookies].map(([k, v]) => `${k}=${v}`).join('; '); },
    set cookie(v) { const [pair] = v.split(';'); const i = pair.indexOf('='); cookies.set(pair.slice(0, i), pair.slice(i + 1)); },
  };
  globalThis.localStorage = mem(localStore);
  globalThis.sessionStorage = mem({});
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: { webdriver, sendBeacon: (endpoint, blob) => { sent.push({ endpoint, blob }); return true; } },
  });
  return sent;
}

async function lastPayload(sent) {
  return JSON.parse(await sent.at(-1).blob.text());
}

test('client adds page context and first-touch to every event; explicit params win', async () => {
  const client = await loadClient();
  const sent = fakeBrowser({
    href: 'https://meddera.md/blog/skolko-derzhitsya-botoks?utm_source=instagram&utm_medium=bio_website',
    referrer: 'https://l.instagram.com/',
  });
  client.sendGa4Event('phone_click_simple1', { button_name: 'x', page_type: 'forced' });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].endpoint, '/api/ga4-collect');
  const body = await lastPayload(sent);
  const p = body.events[0].params;
  assert.equal(body.events[0].name, 'phone_click_simple1');
  assert.ok(body.client_id && body.session_id);
  assert.equal(p.button_name, 'x');
  assert.equal(p.page_type, 'forced', 'caller params must override context');
  assert.equal(p.content_slug, 'skolko-derzhitsya-botoks');
  assert.equal(p.lang, 'ru');
  assert.match(p.page_location, /^https:\/\/meddera\.md\/blog\//);
  assert.equal(p.first_src, 'instagram');
  assert.equal(p.first_med, 'bio_website');
  assert.ok(['open', 'closed', 'off'].includes(p.reception_state));

  // Navigating inside the session keeps the first touch of the landing page.
  globalThis.window.location = { href: 'https://meddera.md/contacts', pathname: '/contacts', search: '', hostname: 'meddera.md' };
  globalThis.document.referrer = '';
  client.sendGa4Event('form_sended_1');
  const p2 = (await lastPayload(sent)).events[0].params;
  assert.equal(p2.page_type, 'contacts');
  assert.equal(p2.first_src, 'instagram');
  assert.equal(p2.first_med, 'bio_website');
});

test('client opt-out: ?no_track=1 stops sending, ?no_track=0 resumes, webdriver never sends', async () => {
  const client = await loadClient();
  const sent = fakeBrowser({ href: 'https://meddera.md/?no_track=1' });
  client.sendGa4Event('page_view');
  assert.equal(sent.length, 0, 'no_track=1 must suppress the very first event');
  globalThis.window.location = { href: 'https://meddera.md/blog', pathname: '/blog', search: '', hostname: 'meddera.md' };
  client.sendGa4Event('page_view');
  assert.equal(sent.length, 0, 'flag persists in localStorage');
  globalThis.window.location = { href: 'https://meddera.md/?no_track=0', pathname: '/', search: '?no_track=0', hostname: 'meddera.md' };
  client.sendGa4Event('page_view');
  assert.equal(sent.length, 1, 'no_track=0 turns tracking back on');

  const bot = fakeBrowser({ href: 'https://meddera.md/', webdriver: true });
  client.sendGa4Event('page_view');
  assert.equal(bot.length, 0, 'navigator.webdriver must not send');
});

test('client survives blocked storage', async () => {
  const client = await loadClient();
  const sent = fakeBrowser({ href: 'https://meddera.md/' });
  const boom = () => { throw new Error('blocked'); };
  globalThis.localStorage = { getItem: boom, setItem: boom, removeItem: boom };
  globalThis.sessionStorage = { getItem: boom, setItem: boom, removeItem: boom };
  assert.doesNotThrow(() => client.sendGa4Event('page_view'));
  assert.equal(sent.length, 1);
});

/* ---------- 4. Worker ---------- */

const ENV = { GA4_API_SECRET: 'secret', GA4_MEASUREMENT_ID: 'G-TEST', ALLOWED_ORIGIN: 'https://meddera.md', GA4_DEBUG_MODE: 'false' };
const UA_IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1';
const UA_DESKTOP = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

async function callWorker({ method = 'POST', body, headers = {}, cf, env = ENV, rawBody } = {}) {
  const calls = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (u, init) => { calls.push({ url: String(u), init }); return new Response('{}', { status: 204 }); };
  const pending = [];
  try {
    const req = new Request('https://meddera.md/api/ga4-collect', {
      method,
      headers: { Origin: 'https://meddera.md', 'User-Agent': UA_IPHONE, 'Content-Type': 'application/json', ...headers },
      body: method === 'POST' ? (rawBody ?? JSON.stringify(body)) : undefined,
    });
    if (cf) Object.defineProperty(req, 'cf', { value: cf });
    const res = await worker.default.fetch(req, env, { waitUntil: (p) => pending.push(p) });
    await Promise.all(pending);
    return { res, calls, forwarded: calls[0] ? JSON.parse(calls[0].init.body) : null };
  } finally {
    globalThis.fetch = realFetch;
  }
}

const okBody = (params = {}, name = 'phone_click_fixed_1') => ({ client_id: 'cid', session_id: 'sid', events: [{ name, params }] });

test('worker: CORS, origin and payload checks', async () => {
  assert.equal((await callWorker({ method: 'OPTIONS' })).res.status, 204);
  assert.equal((await callWorker({ body: okBody(), headers: { Origin: 'https://evil.example', Referer: '' } })).res.status, 403);
  assert.equal((await callWorker({ rawBody: '{bad', body: null })).res.status, 400);
  assert.equal((await callWorker({ body: { client_id: '', events: [] } })).res.status, 400);
  assert.equal((await callWorker({ body: okBody(), headers: { 'Content-Length': '99999' } })).res.status, 413);
});

test('worker: forwards event with country, device and limits', async () => {
  const { res, calls, forwarded } = await callWorker({
    body: okBody({
      button_name: 'b'.repeat(300),
      page_location: 'https://meddera.md/blog/x?utm_source=' + 'u'.repeat(300),
      cta_source: 'dock_call',
      nested: { no: 1 },
      ['k'.repeat(60)]: 'long key',
    }),
    cf: { country: 'MD' },
  });
  assert.equal(res.status, 204);
  assert.equal(calls.length, 1);
  assert.match(calls[0].url, /measurement_id=G-TEST&api_secret=secret$/);
  assert.equal(forwarded.client_id, 'cid');
  assert.deepEqual(forwarded.user_location, { country_id: 'MD' });
  assert.deepEqual(forwarded.device, { category: 'mobile' });
  const p = forwarded.events[0].params;
  assert.equal(p.button_name.length, 100);
  assert.ok(p.page_location.length > 100, 'page_location keeps more than 100 chars');
  assert.ok(p.page_location.length <= 500);
  assert.equal(p.cta_source, 'dock_call');
  assert.equal(p.nested, undefined);
  assert.equal(p.session_id, 'sid');
  assert.equal(p.engagement_time_msec, 1);
  assert.equal(p.debug_mode, undefined);
  assert.ok(Object.keys(p).every((k) => k.length <= 40));
  assert.equal(calls[0].init.headers['User-Agent'], UA_IPHONE);
  assert.ok(!JSON.stringify(forwarded).includes('ip_override'));
});

test('worker: no location without a valid Cloudflare country; desktop device', async () => {
  assert.equal((await callWorker({ body: okBody() })).forwarded.user_location, undefined);
  assert.equal((await callWorker({ body: okBody(), cf: { country: 'T1' } })).forwarded.user_location, undefined);
  assert.equal((await callWorker({ body: okBody(), cf: { country: 'XX' } })).forwarded.user_location.country_id, 'XX');
  const d = await callWorker({ body: okBody(), headers: { 'User-Agent': UA_DESKTOP } });
  assert.equal(d.forwarded.device.category, 'desktop');
});

test('worker: debug mode flag', async () => {
  const { forwarded } = await callWorker({ body: okBody(), env: { ...ENV, GA4_DEBUG_MODE: 'true' } });
  assert.equal(forwarded.events[0].params.debug_mode, true);
});

test('worker: bots and scripted clients are acknowledged but not forwarded', async () => {
  const bots = [
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)',
    'Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)',
    'Mozilla/5.0 (compatible; DotBot/1.2; +https://opensiteexplorer.org/dotbot)',
    'Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)',
    'Mozilla/5.0 (Linux; Android 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; Bytespider; spider-feedback@bytedance.com)',
    'Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/130.0.0.0 Safari/537.36',
    'curl/8.5.0',
    'python-requests/2.32.0',
    'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 Chrome/109.0.0.0 Mobile Safari/537.36 Chrome-Lighthouse',
  ];
  for (const ua of bots) {
    const r = await callWorker({ body: okBody(), headers: { 'User-Agent': ua } });
    assert.equal(r.res.status, 204, ua);
    assert.equal(r.calls.length, 0, `forwarded a bot: ${ua}`);
  }
  const humans = [
    UA_IPHONE,
    UA_DESKTOP,
    'Mozilla/5.0 (Linux; Android 14; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/330.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15',
    'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36 YaBrowser/24.10.0 SA/3',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/450.0.0.0] Instagram 330.0.0',
  ];
  for (const ua of humans) {
    const r = await callWorker({ body: okBody(), headers: { 'User-Agent': ua } });
    assert.equal(r.calls.length, 1, `dropped a human: ${ua}`);
  }
});

/* ---------- 5. optional: Google's own validation ---------- */

test('Google accepts the payload shape (optional)', { skip: !process.env.GA4_API_SECRET || !process.env.GA4_MEASUREMENT_ID }, async () => {
  const { forwarded } = await callWorker({
    body: okBody({ ...ctx.getPageContext('/blog/x-hub'), cta_source: 'dock_call', reception_state: 'open' }, 'phone_click_fixed_1'),
    cf: { country: 'MD' },
  });
  const res = await fetch(
    `https://www.google-analytics.com/debug/mp/collect?measurement_id=${process.env.GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`,
    { method: 'POST', body: JSON.stringify(forwarded) },
  );
  const json = await res.json();
  assert.deepEqual(json.validationMessages, [], JSON.stringify(json));
});
