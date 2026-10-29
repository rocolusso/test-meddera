#!/usr/bin/env node
/**
 * Server side of the lips quiz (no browser, no network): the title of the Telegram message by the
 * button the quiz was opened from, the lips quiz answers (checked against the questions, written in
 * Russian, risk answers marked), answers of the general quiz from older open tabs, length caps,
 * and which blog posts count as lip enlargement pages.
 * Usage: node scripts/verify-lips-lead.mjs   (Node 22.18+, loads .ts files by stripping types)
 */
import test from 'node:test';
import assert from 'node:assert/strict';
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
const lips = await load('src/lib/cta/lips.ts');
const quiz = await load('src/lib/cta/lips-quiz.ts');
const tg = await load('src/lib/cta/telegram-block.ts');
const title = await load('src/lib/cta/lead-title.ts');
const reg = await load('src/lib/cta/registry.ts');
const endCopy = await load('src/lib/hero-banner/lips-end-copy.ts');

const BASE = 'Форма/ Увеличение Губ / LEAD';

test('title: always starts with the lips title, suffix by the button', () => {
  assert.equal(lips.LIPS_LEAD_TITLE, BASE);
  const want = {
    lips_banner: 'baner_cta',
    lips_end_banner: 'end_cta',
    float_book: 'float_cta',
    dock_book: 'dock_cta',
    article_card: 'card_cta',
    hub_card: 'hub_cta',
    teaser_scroll60: 'teaser_cta',
  };
  for (const [source, suffix] of Object.entries(want)) {
    assert.equal(title.lipsLeadTitle(source), `${BASE}/${suffix}`, source);
  }
  // no source, the home banner, unknown and hostile values: plain title
  for (const bad of [undefined, null, '', 'hero_banner', 'unknown', 'toString', '__proto__', 'constructor', 5, {}, ['float_book']]) {
    assert.equal(title.lipsLeadTitle(bad), BASE, String(bad));
  }
  // every source the server accepts is either mapped or deliberately plain
  for (const s of reg.LEAD_QUIZ_SOURCES) {
    const t = title.lipsLeadTitle(s);
    assert.ok(t === BASE || t.startsWith(`${BASE}/`), s);
  }
  for (const src of ['lips_banner', 'lips_end_banner']) {
    assert.ok(reg.LEAD_QUIZ_SOURCES.includes(src), src);
    for (const l of ['ru', 'ro']) assert.ok(reg.LEAD_QUIZ_SOURCE_LABELS[src][l], `${src} label ${l}`);
  }
});

test('isLipsLead: procedure or page decides, unchanged', () => {
  const findPost = () => undefined;
  assert.equal(title.isLipsLead({ procedure: 'lips' }, '', findPost), true);
  assert.equal(title.isLipsLead({ procedure: 'botox' }, '/services/uvelychenye-gub-v-belczah', findPost), false);
  assert.equal(title.isLipsLead({}, 'https://meddera.md/services/uvelychenye-gub-v-belczah', findPost), true);
  assert.equal(title.isLipsLead({}, 'https://meddera.md/ro/services/uvelychenye-gub-v-belczah', findPost), true);
  assert.equal(title.isLipsLead({}, '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza', findPost), false);
});

test('lips quiz definition is complete and consistent', () => {
  assert.equal(quiz.LIPS_QUIZ.length, 5);
  assert.deepEqual(quiz.LIPS_QUIZ.map((q) => q.key), ['lips_herpes', 'lips_previous', 'lips_swelling', 'lips_allergy', 'lips_recovery']);
  for (const q of quiz.LIPS_QUIZ) {
    for (const l of ['ru', 'ro']) {
      assert.ok(q.prompt[l].trim().length > 10, `${q.key}.prompt.${l}`);
      assert.ok(q.prompt[l].endsWith('?'), `${q.key}.prompt.${l} ends with ?`);
    }
    assert.equal(q.options.ru.length, q.options.ro.length, `${q.key}: same number of options`);
    assert.ok(q.options.ru.length >= 3);
    for (const l of ['ru', 'ro']) {
      assert.equal(new Set(q.options[l]).size, q.options[l].length, `${q.key}.${l}: options are unique`);
      for (const o of q.options[l]) assert.ok(o === o.trim() && o.length > 0 && o.length <= 80, `${q.key}.${l}: ${o}`);
    }
    for (const i of q.risk) assert.ok(i >= 0 && i < q.options.ru.length);
  }
  // copy rules of the site
  const all = JSON.stringify(quiz.LIPS_QUIZ);
  for (const re of [/бесплатн/i, /gratuit/i, /гарант/i, /garant/i, /!/, /[—]/]) assert.ok(!re.test(all), String(re));
});

test('lips answers: Russian lines, risk marked, any language accepted', () => {
  const ru = {
    lips_herpes: 'Да, герпес',
    lips_previous: 'Да, 1–2 раза (филлеры)',
    lips_swelling: 'Умеренная',
    lips_allergy: 'Нет',
    lips_recovery: '3–5 дней',
  };
  const ro = {
    lips_herpes: 'Da, herpes',
    lips_previous: 'Da, de 1–2 ori (filler-e)',
    lips_swelling: 'Moderată',
    lips_allergy: 'Nu',
    lips_recovery: '3–5 zile',
  };
  const expected = [
    'Ответы квиза (увеличение губ):',
    '- ⚠ Герпес, воспаление, инфекции вокруг рта: Да, герпес',
    '- Процедуры в области губ ранее: Да, 1–2 раза (филлеры)',
    '- Склонность к отёкам и синякам: Умеренная',
    '- Аллергии, чувствительность к препаратам и анестетикам: Нет',
    '- Время на восстановление: 3–5 дней',
  ].join('\n');
  assert.equal(quiz.formatLipsQuizAnswers(ru), expected);
  assert.equal(quiz.formatLipsQuizAnswers(ro), expected, 'Romanian answers are written in Russian');
  assert.ok(quiz.isLipsQuizAnswers(ru) && quiz.isLipsQuizAnswers(ro));
  // safe answers have no mark
  const safe = quiz.formatLipsQuizAnswers({ lips_herpes: 'Нет', lips_allergy: 'Нет', lips_swelling: 'Минимальная' });
  assert.ok(!safe.includes('⚠'));
  // every risk option is marked, no other option is
  for (const q of quiz.LIPS_QUIZ) {
    q.options.ru.forEach((o, i) => {
      const line = quiz.formatLipsQuizAnswers({ [q.key]: o }).split('\n')[1];
      assert.equal(line.includes('⚠'), q.risk.includes(i), `${q.key}: ${o}`);
    });
  }
});

test('lips answers: anything that is not an option is dropped', () => {
  const out = quiz.formatLipsQuizAnswers({
    lips_herpes: 'Нет',
    lips_previous: 'выдуманный ответ',
    lips_swelling: 'x'.repeat(5000),
    lips_allergy: { evil: true },
    lips_recovery: ['1–2 дня'],
    evil_key: 'Нет',
    '<b>x</b>': 'y',
  });
  assert.equal(out, 'Ответы квиза (увеличение губ):\n- Герпес, воспаление, инфекции вокруг рта: Нет');
  assert.equal(quiz.formatLipsQuizAnswers({ lips_herpes: 'выдуманный ответ' }), '');
  for (const bad of [null, undefined, 5, 'str', [], { constructor: 'x' }, { __proto__: { lips_herpes: 'Нет' } }]) {
    assert.equal(quiz.formatLipsQuizAnswers(bad), '', String(bad));
    assert.equal(quiz.isLipsQuizAnswers(bad), false, String(bad));
  }
});

test('telegram block: lips quiz, general quiz of older tabs, caps', () => {
  const lipsBody = {
    source: 'lips_banner',
    procedure: 'lips',
    quizAnswers: { lips_herpes: 'Нет', lips_allergy: 'Da (manifestări: mâncărime, edem)', procedure_interest: 'Увеличение губ' },
  };
  const block = tg.buildLeadQuizTelegramBlock(lipsBody, 'ru', 'appointment');
  assert.ok(block.includes('Тип формы: Записаться онлайн'));
  assert.ok(block.includes('Источник: Баннер на страницах про губы'));
  assert.ok(block.includes('Процедура: Увеличение губ'));
  assert.ok(block.includes('Ответы квиза (увеличение губ):'));
  assert.ok(block.includes('- Герпес, воспаление, инфекции вокруг рта: Нет'));
  assert.ok(block.includes('- ⚠ Аллергии, чувствительность к препаратам и анестетикам: Да (проявления: зуд, отёк)'));
  assert.ok(!block.includes('procedure_interest'));

  // a tab opened before the lips quiz existed: general quiz, answers kept as before
  const old = tg.buildLeadQuizTelegramBlock(
    {
      source: 'float_book',
      quizAnswers: { visit_type: 'Первичная консультация', preferred_day: 'На этой неделе', procedure_interest: 'Инъекционные процедуры' },
    },
    'ru',
    'appointment',
  );
  assert.ok(old.includes('Ответы квиза:'));
  assert.ok(old.includes('- Тип визита: Первичная консультация'));
  assert.ok(old.includes('- Удобный день: На этой неделе'));
  assert.ok(old.includes('- Интересующая процедура: Инъекционные процедуры'));
  assert.ok(old.includes('Источник: Плавающая кнопка'));

  // caps on the general quiz: no key or value is longer than 200 characters
  const long = tg.formatQuizAnswers({ ['k'.repeat(500)]: 'v'.repeat(5000) }, 'ru');
  assert.ok(long.length < 500, `capped (${long.length})`);

  // the source and the procedure are checked against the registry
  const hostile = tg.formatSourceBlock({ source: '__proto__', procedure: 'constructor' }, 'ru');
  assert.equal(hostile, '');
});

test('isLipsPost: hub and articles of the lips rubric, and nothing else', () => {
  assert.equal(lips.isLipsPost({ id: 'x', kind: 'hub', clusterId: 'lips' }), true);
  assert.equal(lips.isLipsPost({ id: 'x', kind: 'article', clusterId: 'lips' }), true);
  assert.equal(lips.isLipsPost({ id: 'uvelichenie-gub-gialuronovaya-kislota', kind: 'article', clusterId: 'fillers' }), true, 'main service is lips');
  assert.equal(lips.isLipsPost({ id: 'x', kind: 'hub', clusterId: 'botox' }), false);
  assert.equal(lips.isLipsPost({ id: 'x', kind: 'article', clusterId: 'dermatologist' }), false);
  assert.equal(lips.isLipsPost({ id: 'botoks-vs-fillery-raznica', kind: 'article', clusterId: 'botox' }), false);
  assert.equal(lips.isLipsPost({ id: 'x', kind: 'article', clusterId: null }), false);
});

test('end banner copy: questions follow the quiz, rules of the site', () => {
  for (const l of ['ru', 'ro']) {
    const c = endCopy.LIPS_END_BANNER_COPY[l];
    assert.deepEqual(c.questions.map((q) => q.key), quiz.LIPS_QUIZ.map((q) => q.key), `${l}: same questions in the same order`);
    for (const q of c.questions) {
      assert.ok(q.text.endsWith('?') && q.text.length >= 20 && q.text.length <= 60, `${l}.${q.key}: ${q.text}`);
    }
    for (const k of ['label', 'title', 'sub', 'cta', 'note', 'of']) assert.ok(c[k].trim().length > 1, `${l}.${k}`);
    assert.ok(c.cta.length <= 24, `${l}: button text fits one line`);
  }
  const all = JSON.stringify(endCopy.LIPS_END_BANNER_COPY);
  // no dashes, nothing free, no guarantees, no exclamation marks, no prices or days
  for (const re of [/бесплатн/i, /gratuit/i, /гарант/i, /garant/i, /!/, /[—–]/, /\d+\s*(лей|mdl|eur|€|\$)/i, /понедельник|вторник|среда|четверг|пятниц|суббот|воскресенье/i]) {
    assert.ok(!re.test(all), String(re));
  }
});
