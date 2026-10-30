#!/usr/bin/env node
/**
 * Server side of the /developer form (no browser, no network, nothing is sent to Telegram: fetch is replaced):
 * who receives the lead (only 256302541, never the other clinic ids), the Telegram text, validation of the contact
 * field (phone, @username, messenger link), the whitelist of "what you need" chips, the 502 on failed delivery,
 * and that the clinic forms still go to all four ids.
 * Usage: node --test scripts/verify-developer-form.mjs   (Node 22.18+, loads .ts files by stripping types)
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { register } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcUrl = pathToFileURL(path.join(root, 'src') + path.sep).href;

register(
  'data:text/javascript,' +
    encodeURIComponent(`
import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
export async function resolve(specifier, context, next) {
  if (specifier === 'next/server') return next('next/server.js', context);
  if (specifier.startsWith('@/')) {
    const base = ${JSON.stringify(srcUrl)} + specifier.slice(2);
    for (const suffix of ['.ts', '.tsx', '/index.ts']) {
      try { await access(fileURLToPath(base + suffix)); return next(base + suffix, context); } catch {}
    }
  }
  return next(specifier, context);
}`),
);

const load = (p) => import(pathToFileURL(path.join(root, p)).href);
const schema = await load('src/lib/developer-form-schema.ts');
const tg = await load('src/lib/developer-telegram.ts');
const proc = await load('src/lib/contact-form-processor.ts');
const devRoute = await load('src/app/api/developer-form/route.ts');
const mainRoute = await load('src/app/api/main-contact-form/route.ts');

const DEV_ID = '256302541';
const OTHERS = ['5299878921', '6576456966', '7378233926'];

process.env.DISABLE_FORM_ABUSE_PROTECTION = 'true'; // legacy path: reCAPTCHA + Telegram only, no Redis
process.env.RECAPTCHA_SECRET_KEY = 'test-secret';
process.env.TELEGRAM_BOT_TOKEN = '000:TEST';

/** Replaces fetch: records Telegram calls, answers Google siteverify, optionally fails Telegram. */
function stubFetch({ telegramOk = true } = {}) {
  const calls = [];
  const real = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    const u = String(url);
    if (u.includes('google.com/recaptcha')) {
      return new Response(JSON.stringify({ success: true, score: 0.9 }), { status: 200 });
    }
    if (u.includes('api.telegram.org')) {
      const body = JSON.parse(init.body);
      calls.push({ url: u, chat_id: body.chat_id, text: body.text });
      return telegramOk
        ? new Response(JSON.stringify({ ok: true }), { status: 200 })
        : new Response('{"ok":false,"description":"Forbidden"}', { status: 403 });
    }
    throw new Error(`unexpected fetch in test: ${u}`);
  };
  return { calls, restore: () => { globalThis.fetch = real; } };
}

function request(route, payload) {
  return new Request(`http://localhost/api/${route}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Referer: 'http://localhost/developer' },
    body: JSON.stringify(payload),
  });
}

const devPayload = (over = {}) => ({
  recaptchaToken: 'tok',
  locale: 'en',
  needs: ['new_site', 'ads'],
  source: 'form_submit',
  formPathname: '/developer?lang=en',
  message: { username: 'Anna', userphone: '@anna_biz', message: 'Need a landing page' },
  ...over,
});

test('developer form: exactly one Telegram call, to 256302541 and nobody else', async () => {
  const s = stubFetch();
  try {
    const res = await devRoute.POST(request('developer-form', devPayload()));
    assert.equal(res.status, 200);
    assert.equal(s.calls.length, 1);
    assert.equal(s.calls[0].chat_id, DEV_ID);
    for (const id of OTHERS) {
      assert.ok(!s.calls.some((c) => c.chat_id === id), `must not send to ${id}`);
    }
    assert.ok(s.calls[0].url.startsWith('https://api.telegram.org/bot000:TEST/sendMessage'));
  } finally {
    s.restore();
  }
});

test('developer form: Telegram text', async () => {
  const s = stubFetch();
  try {
    await devRoute.POST(request('developer-form', devPayload()));
    const text = s.calls[0].text;
    assert.match(text, /^\s*Форма DEVELOPER/);
    assert.match(text, /Имя: Anna/);
    assert.match(text, /Контакт: @anna_biz/);
    assert.ok(!/Телефон:/.test(text), 'no "Телефон" label in the developer message');
    assert.match(text, /Сообщение: Need a landing page/);
    assert.match(text, /Нужно: Новый сайт, Реклама/);
    assert.match(text, /Язык страницы: EN/);
    assert.match(text, /Источник: form_submit/);
    assert.match(text, /URL: \/developer\?lang=en/);
  } finally {
    s.restore();
  }
});

test('developer form: the recipient cannot be changed from the request body', async () => {
  const s = stubFetch();
  try {
    await devRoute.POST(request('developer-form', devPayload({
      recipients: OTHERS,
      chat_id: OTHERS[0],
      userIds: OTHERS,
      telegramFormTitle: 'x',
    })));
    assert.deepEqual(s.calls.map((c) => c.chat_id), [DEV_ID]);
    assert.match(s.calls[0].text, /Форма DEVELOPER/);
  } finally {
    s.restore();
  }
});

test('developer form: failed delivery answers 502, not a silent success', async () => {
  const s = stubFetch({ telegramOk: false });
  const errors = console.error;
  console.error = () => {};
  try {
    const res = await devRoute.POST(request('developer-form', devPayload()));
    assert.equal(res.status, 502);
    assert.deepEqual((await res.json()).error, 'Delivery failed');
    assert.deepEqual(s.calls.map((c) => c.chat_id), [DEV_ID]);
  } finally {
    console.error = errors;
    s.restore();
  }
});

test('recipients: empty or malformed list never falls back to the shared ids', async () => {
  for (const bad of [[], ['abc'], ['256302541', ''], ['256302541; DROP'], ['-1']]) {
    assert.equal(proc.resolveTelegramRecipients(bad), null, JSON.stringify(bad));
    const s = stubFetch();
    try {
      const res = await proc.processContactFormPost(
        request('developer-form', devPayload()),
        { telegramFormTitle: 't', recipients: bad },
      );
      assert.equal(res.status, 503, JSON.stringify(bad));
      assert.equal(s.calls.length, 0, JSON.stringify(bad));
    } finally {
      s.restore();
    }
  }
  assert.deepEqual(proc.resolveTelegramRecipients([DEV_ID]), [DEV_ID]);
  assert.deepEqual(proc.resolveTelegramRecipients(undefined), [DEV_ID, ...OTHERS]);
});

test('clinic form still goes to all four ids (unchanged behaviour)', async () => {
  const s = stubFetch();
  try {
    const res = await mainRoute.POST(request('main-contact-form', {
      recaptchaToken: 'tok',
      locale: 'ru',
      message: { username: 'Анна', userphone: '+37368550030', message: 'Запись' },
    }));
    assert.equal(res.status, 200);
    assert.deepEqual(s.calls.map((c) => c.chat_id).sort(), [DEV_ID, ...OTHERS].sort());
    assert.match(s.calls[0].text, /Телефон: \+37368550030/);
    assert.ok(!/Форма DEVELOPER/.test(s.calls[0].text));
  } finally {
    s.restore();
  }
});

test('source: both send paths use the resolved ids, the shared list is only the default', () => {
  const code = fs.readFileSync(path.join(root, 'src/lib/contact-form-processor.ts'), 'utf8');
  assert.equal(code.match(/TELEGRAM_USER_IDS/g).length, 2, 'declared once and returned once as the default');
  assert.equal(code.match(/sendTelegramMessage\(userIds,/g).length, 2, 'legacy and normal path');
  const route = fs.readFileSync(path.join(root, 'src/app/api/developer-form/route.ts'), 'utf8');
  assert.ok(route.includes('DEVELOPER_TELEGRAM_RECIPIENTS'));
  const tgSrc = fs.readFileSync(path.join(root, 'src/lib/developer-telegram.ts'), 'utf8');
  assert.match(tgSrc, /DEVELOPER_TELEGRAM_RECIPIENTS = \['256302541'\] as const/);
  for (const id of OTHERS) {
    assert.ok(!route.includes(id) && !tgSrc.includes(id), `${id} must not appear in developer files`);
  }
});

test('contact field: phone, @username, messenger links accepted', () => {
  const ok = [
    '+37368550030',
    '+373 68 550 030',
    '068550030',
    '+380501234567',
    '0501234567',
    '+40 721 234 567',
    '+1 202 555 0143',
    '@anna_biz',
    '@Anna.Biz',
    't.me/anna_biz',
    'https://t.me/anna_biz',
    'https://t.me/+37368550030',
    'wa.me/37368550030',
    'https://wa.me/37368550030',
    'instagram.com/anna.biz',
    'https://www.instagram.com/anna.biz/',
    'viber://chat?number=%2B37368550030',
    'https://m.me/anna.biz',
  ];
  for (const v of ok) assert.notEqual(schema.classifyContact(v), null, v);
  assert.equal(schema.classifyContact('@anna_biz'), 'username');
  assert.equal(schema.classifyContact('t.me/anna_biz'), 'link');
  assert.equal(schema.classifyContact('+37368550030'), 'phone');
});

test('contact field: junk is rejected', () => {
  const bad = [
    '',
    '   ',
    '1',
    '12345',
    '+',
    'anna',
    'anna@mail.com',
    '@a',
    '@' + 'a'.repeat(40),
    'https://evil.example/t.me/anna',
    'https://t.me/',
    'javascript:alert(1)',
    'ftp://t.me/anna',
    'http://localhost/anna',
    '<script>',
    '+37368550030 call me',
    '0000000000',
  ];
  for (const v of bad) assert.equal(schema.classifyContact(v), null, JSON.stringify(v));
});

test('form: validation messages in ru, uk, en; message is optional', () => {
  const base = { username: 'A', userphone: '', message: '' };
  const want = {
    ru: /не менее 2 символов/,
    uk: /не менше 2 символів/,
    en: /at least 2 characters/,
  };
  for (const [loc, re] of Object.entries(want)) {
    const r = schema.parseDeveloperForm(loc, base);
    assert.equal(r.ok, false);
    assert.match(r.fieldErrors.username, re, loc);
    assert.ok(r.fieldErrors.userphone, loc);
  }
  assert.match(schema.parseDeveloperForm('uk', { ...base, username: 'Анна', userphone: 'x' }).fieldErrors.userphone, /Вкажіть/);
  assert.match(schema.parseDeveloperForm('en', { ...base, username: 'Anna', userphone: 'x' }).fieldErrors.userphone, /Enter/);
  const ok = schema.parseDeveloperForm('ru', { username: ' Ан ', userphone: ' +373 68 550 030 ', message: '' });
  assert.equal(ok.ok, true);
  assert.equal(ok.data.username, 'Ан');
  assert.equal(ok.data.userphone, '+373 68 550 030');
  assert.equal(schema.parseDeveloperForm('ru', { username: 'Анна', userphone: '@anna_biz', message: 'x'.repeat(5001) }).ok, false);
});

test('chips: only whitelisted ids, no duplicates, hostile input dropped', () => {
  assert.deepEqual(schema.sanitizeDeveloperNeeds(['ads', 'ads', 'new_site']), ['ads', 'new_site']);
  for (const bad of [undefined, null, 'ads', 5, {}, ['__proto__'], ['toString'], ['constructor'], [{}], ['<b>']]) {
    assert.deepEqual(schema.sanitizeDeveloperNeeds(bad), [], String(bad));
  }
  assert.equal(tg.sanitizeSource('form_submit'), 'form_submit');
  for (const bad of ['', 'a b', '<x>', 'x'.repeat(41), 5, null]) {
    assert.equal(tg.sanitizeSource(bad), '', String(bad));
  }
  assert.equal(schema.normalizeDeveloperLocale('uk'), 'uk');
  assert.equal(schema.normalizeDeveloperLocale('ro'), 'ru');
  assert.equal(schema.normalizeDeveloperLocale(undefined), 'ru');
});
