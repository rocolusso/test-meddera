#!/usr/bin/env node
/**
 * CTA registry checks (no browser, no network):
 *  - every entry has complete RU/RO texts, tone and no banned wording;
 *  - every service and every article/hub resolves to an entry (new ones fall back to the consultation);
 *  - allowlists used by /api/lead-quiz-form cannot be fooled by prototype keys;
 *  - with --base=URL (a running production server): every article and hub page, RU and RO, carries
 *    exactly one card with a procedure from the allowlist, list pages carry none, and the number of
 *    cards per procedure matches the registry.
 * Usage: node scripts/verify-cta.mjs [--base=http://localhost:3111]   (Node 22.18+, loads .ts files by stripping types)
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { register } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcUrl = pathToFileURL(path.join(root, 'src') + path.sep).href;

// "@/x" → src/x(.ts | .tsx | /index.ts), as in tsconfig paths.
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

const reg = await import(pathToFileURL(path.join(root, 'src/lib/cta/registry.ts')).href);
const svc = await import(pathToFileURL(path.join(root, 'src/blog-data/article-services.ts')).href);

const LOCALES = ['ru', 'ro'];
const FIELDS = ['chip', 'cardTitle', 'cardText', 'teaser'];

test('every entry is complete and consistent', () => {
  assert.equal(reg.CTA_KEYS.length, 11);
  assert.deepEqual([...reg.CTA_KEYS].sort(), Object.keys(reg.CTA_ENTRIES).sort(), 'keys.ts and the registry must list the same entries');
  for (const key of reg.CTA_KEYS) {
    const e = reg.CTA_ENTRIES[key];
    assert.equal(e.key, key);
    assert.ok(['procedure', 'medical'].includes(e.tone), `${key}: tone`);
    for (const f of FIELDS) {
      for (const l of LOCALES) {
        const v = e[f][l];
        assert.ok(typeof v === 'string' && v.trim().length > 2, `${key}.${f}.${l} is empty`);
        assert.equal(v, v.trim(), `${key}.${f}.${l}: stray spaces`);
      }
    }
    for (const l of LOCALES) {
      assert.ok(e.chip[l].length <= 40, `${key}: chip too long`);
      assert.ok(e.cardTitle[l].length <= 60, `${key}: card title too long`);
      assert.ok(e.cardText[l].length <= 200, `${key}: card text too long (${e.cardText[l].length})`);
      assert.ok(e.teaser[l].length <= 90, `${key}: teaser too long (${e.teaser[l].length})`);
    }
  }
});

test('copy rules: no dashes, no promises of free service, no exclamation marks', () => {
  const banned = [/[—–]/, / - /, /бесплатн/i, /gratuit/i, /!/, /гарант/i, /garant/i];
  for (const key of reg.CTA_KEYS) {
    for (const f of FIELDS) {
      for (const l of LOCALES) {
        const v = reg.CTA_ENTRIES[key][f][l];
        for (const re of banned) assert.ok(!re.test(v), `${key}.${f}.${l} matches ${re}: ${v}`);
      }
    }
  }
});

test('buttons and sources', () => {
  assert.equal(reg.ctaButtonLabel(reg.CTA_ENTRIES.botox, 'ru'), 'Записаться на процедуру');
  assert.equal(reg.ctaButtonLabel(reg.CTA_ENTRIES.acne, 'ru'), 'Записаться на приём');
  assert.equal(reg.ctaButtonLabel(reg.CTA_ENTRIES.derm, 'ro'), 'Programare la consultație');
  for (const s of reg.LEAD_QUIZ_SOURCES) {
    assert.ok(reg.isLeadQuizSource(s));
    for (const l of LOCALES) assert.ok(reg.LEAD_QUIZ_SOURCE_LABELS[s][l], `${s}: label ${l}`);
  }
  for (const bad of ['', 'unknown', 'toString', '__proto__', 'constructor', null, undefined, 5, {}]) {
    assert.equal(reg.isLeadQuizSource(bad), false, String(bad));
    assert.equal(reg.isCtaKey(bad), false, String(bad));
  }
  for (const k of reg.CTA_KEYS) assert.ok(reg.isCtaKey(k));
});

test('every service of the article registry has its own entry', () => {
  const slugs = Object.values(svc.SERVICE_SLUG);
  assert.equal(slugs.length, 11);
  const keys = new Set();
  for (const slug of slugs) {
    const e = reg.ctaForServiceSlug(slug);
    assert.ok(svc.SERVICE_LABELS[slug], `${slug}: label`);
    keys.add(e.key);
  }
  assert.equal(keys.size, 11, 'each of the 11 services maps to a different entry');
  assert.equal(reg.ctaForServiceSlug('some-new-service').key, 'consultation');
});

function readPosts() {
  const files = [];
  const walk = (dir) => {
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, f.name);
      if (f.isDirectory()) walk(p);
      else if (f.name.endsWith('.ts')) files.push(p);
    }
  };
  walk(path.join(root, 'src/blog-data'));
  const re = /id:\s*'([^']+)',\s*kind:\s*'(hub|article)',\s*clusterId:\s*(?:'([^']+)'|null)/g;
  const posts = [];
  for (const file of files) {
    for (const m of fs.readFileSync(file, 'utf8').matchAll(re)) {
      posts.push({ id: m[1], kind: m[2], clusterId: m[3] ?? null });
    }
  }
  return posts;
}

test('every article and hub resolves to an entry; fallbacks are listed', () => {
  const posts = readPosts();
  const articles = posts.filter((p) => p.kind === 'article');
  const hubs = posts.filter((p) => p.kind === 'hub');
  assert.ok(articles.length >= 50, `found ${articles.length} articles`);
  assert.ok(hubs.length >= 6, `found ${hubs.length} hubs`);
  const byKey = {};
  const fallback = [];
  for (const a of articles) {
    const e = reg.ctaForPost(a);
    assert.ok(e && reg.isCtaKey(e.key), a.id);
    byKey[e.key] = (byKey[e.key] ?? 0) + 1;
    if (e.key === 'consultation') fallback.push(`${a.id} (${a.clusterId})`);
  }
  for (const h of hubs) assert.ok(reg.ctaForCluster(h.clusterId), h.id);
  // Rubric defaults and overrides
  assert.equal(reg.ctaForPost({ id: 'x', clusterId: 'botox' }).key, 'botox');
  assert.equal(reg.ctaForPost({ id: 'x', clusterId: 'lips' }).key, 'lips');
  assert.equal(reg.ctaForPost({ id: 'x', clusterId: 'dermatologist' }).key, 'derm');
  assert.equal(reg.ctaForPost({ id: 'akne-prichiny-stadii-lechenie', clusterId: 'dermatologist' }).key, 'derm');
  assert.equal(reg.ctaForPost({ id: 'botoks-gipergidroz-podmyshek', clusterId: 'botox' }).key, 'botox');
  assert.equal(reg.ctaForPost({ id: 'brand-new', clusterId: null }).key, 'consultation');
  assert.equal(reg.ctaForCluster('mesotherapy-face').key, 'meso');
  assert.equal(reg.ctaForCluster('peeling').key, 'consultation');
  console.log(`  ${articles.length} articles, ${hubs.length} hubs; entries used:`, JSON.stringify(byKey));
  console.log(`  articles on the consultation fallback: ${fallback.length}${fallback.length ? '\n    ' + fallback.join('\n    ') : ''}`);
});

test('ctaForPathname', () => {
  assert.equal(reg.ctaForPathname('/services/uvelychenye-gub-v-belczah').key, 'lips');
  assert.equal(reg.ctaForPathname('/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza').key, 'botox');
  assert.equal(reg.ctaForPathname('/services/ynjekczyy-lypolytykov-v-belczah').key, 'consultation');
  assert.equal(reg.ctaForPathname('/services'), null);
  assert.equal(reg.ctaForPathname('/blog/x'), null);
  assert.equal(reg.ctaForPathname('/'), null);
  assert.equal(reg.ctaForPathname('/services/%E0%A4%A').key, 'consultation', 'broken escape must not throw');
});

test('Telegram block: source and procedure come only from the allowlists', async () => {
  const tg = await import(pathToFileURL(path.join(root, 'src/lib/cta/telegram-block.ts')).href);
  const answers = { visit_type: 'Первичная консультация', preferred_day: 'Сегодня-завтра', procedure_interest: 'Ботокс' };

  // Old clients (no source, no procedure): exactly the previous message.
  assert.equal(
    tg.buildLeadQuizTelegramBlock({ quizAnswers: answers }, 'ru', 'appointment'),
    'Тип формы: Записаться онлайн\nОтветы квиза:\n- Тип визита: Первичная консультация\n- Удобный день: Сегодня-завтра\n- Интересующая процедура: Ботокс',
  );
  assert.equal(
    tg.buildLeadQuizTelegramBlock({}, 'ro', 'consultation'),
    'Tip formular: Consultație',
  );

  // A card: source and procedure lines, the duplicate quiz line is dropped.
  const card = tg.buildLeadQuizTelegramBlock(
    { source: 'article_card', procedure: 'botox', quizAnswers: answers },
    'ru',
    'appointment',
  );
  assert.equal(
    card,
    'Тип формы: Записаться онлайн\nИсточник: Карточка в статье\nПроцедура: Ботокс\nОтветы квиза:\n- Тип визита: Первичная консультация\n- Удобный день: Сегодня-завтра',
  );
  assert.match(tg.buildLeadQuizTelegramBlock({ source: 'hub_card', procedure: 'lips' }, 'ro', 'appointment'), /Sursă: Card pe pagina rubricii\nProcedura: Mărirea buzelor/);

  // Forged values are ignored, not echoed into the message.
  const forged = tg.buildLeadQuizTelegramBlock(
    { source: '<b>evil</b>', procedure: '__proto__', quizAnswers: answers },
    'ru',
    'appointment',
  );
  assert.ok(!forged.includes('evil') && !forged.includes('Источник') && !forged.includes('Процедура:'), forged);
  assert.ok(forged.includes('Интересующая процедура: Ботокс'), 'answers stay when procedure is not valid');
  assert.equal(tg.formatSourceBlock({ source: 'unknown', procedure: 'constructor' }, 'ru'), '');
});

const blog = await import(pathToFileURL(path.join(root, 'src/blog-data/registry.ts')).href);
const leadTitle = await import(pathToFileURL(path.join(root, 'src/lib/cta/lead-title.ts')).href);

test('leads from lip enlargement pages get the lips title, others do not', () => {
  const find = blog.findPostByAnySlug;
  const isLips = (body, url) => leadTitle.isLipsLead(body, url, find);
  assert.equal(leadTitle.LIPS_LEAD_TITLE, 'Форма/ Увеличение Губ / LEAD');

  // Every page of the lips rubric (hub + articles), RU and RO, as a full URL with a query and as a path.
  const lips = blog.getAllPosts().filter((p) => p.clusterId === 'lips');
  assert.ok(lips.length >= 15, `lips rubric has ${lips.length} pages`);
  for (const post of lips) {
    for (const p of [blog.blogPathRu(post.slugRu), blog.blogPathRo(post.slugRo)]) {
      assert.equal(isLips({}, `https://meddera.md${p}?utm_source=x#top`), true, `${p} (full URL)`);
      assert.equal(isLips({ source: 'dock_book' }, p), true, `${p} (path, bottom panel)`);
    }
  }
  // The lips service page, RU and RO.
  const lipsService = svc.SERVICE_SLUG.LIPS;
  assert.equal(isLips({}, `https://meddera.md/services/${lipsService}`), true);
  assert.equal(isLips({}, `https://meddera.md/ro/services/${lipsService}`), true);

  // The procedure of the card wins over the page; a procedure from another rubric is not a lips lead.
  assert.equal(isLips({ procedure: 'lips' }, 'https://meddera.md/'), true);
  assert.equal(isLips({ procedure: 'lips' }, ''), true);
  assert.equal(isLips({ procedure: 'botox' }, `https://meddera.md/services/${lipsService}`), false);

  // Everything else keeps the usual title: other rubrics, other services, home, contacts, lists, junk.
  for (const post of blog.getAllPosts().filter((p) => p.clusterId !== 'lips')) {
    assert.equal(isLips({}, `https://meddera.md${blog.blogPathRu(post.slugRu)}`), false, post.slugRu);
    assert.equal(isLips({}, `https://meddera.md${blog.blogPathRo(post.slugRo)}`), false, post.slugRo);
  }
  for (const slug of Object.values(svc.SERVICE_SLUG).filter((x) => x !== lipsService)) {
    assert.equal(isLips({}, `https://meddera.md/services/${slug}`), false, slug);
  }
  for (const url of ['', 'https://meddera.md/', 'https://meddera.md/ro', 'https://meddera.md/contacts', 'https://meddera.md/blog', 'https://meddera.md/ro/blog/page/2', 'https://meddera.md/blog/no-such-post', 'javascript:alert(1)', 'not a url', '/blog/%E0%A4%A']) {
    assert.equal(isLips({}, url), false, url || '(empty)');
  }
  assert.equal(isLips({ procedure: {} }, ''), false);
  assert.equal(isLips({ procedure: '__proto__' }, ''), false);
});

const baseArg = process.argv.find((a) => a.startsWith('--base='));
const base = baseArg ? baseArg.slice('--base='.length).replace(/\/$/, '') : null;

test('cards in the rendered pages (needs --base)', { skip: base ? false : 'run with --base=http://localhost:3111 against a production server' }, async () => {
  const posts = readPosts();
  const articles = posts.filter((p) => p.kind === 'article');
  const hubs = posts.filter((p) => p.kind === 'hub');

  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  const paths = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname))].filter((p) => /^\/(ro\/)?blog(\/|$)/.test(p));
  const listPages = paths.filter((p) => /^\/(ro\/)?blog(\/page\/\d+)?\/?$/.test(p));
  const contentPages = paths.filter((p) => !listPages.includes(p));
  assert.equal(contentPages.length, 2 * (articles.length + hubs.length), `content pages in the sitemap: ${contentPages.length}, expected ${2 * (articles.length + hubs.length)}`);

  const found = { ru: {}, ro: {} };
  const kinds = { article_card: 0, hub_card: 0 };
  for (const p of paths) {
    const res = await fetch(base + p);
    assert.equal(res.status, 200, `${p}: HTTP ${res.status}`);
    // The page is also serialised into <script> tags (RSC payload); count only the real markup.
    const html = (await res.text()).replace(/<script[\s\S]*?<\/script>/g, '');
    const cards = [...html.matchAll(/data-cta="(article_card|hub_card)"[^>]*data-procedure="([^"]*)"/g)];
    if (listPages.includes(p)) {
      assert.equal(cards.length, 0, `${p}: list page must not carry a card`);
      continue;
    }
    assert.equal(cards.length, 1, `${p}: expected exactly one card, found ${cards.length}`);
    const [, kind, key] = cards[0];
    assert.ok(reg.isCtaKey(key), `${p}: data-procedure "${key}" is not in the allowlist`);
    assert.equal((html.match(/data-open-quiz/g) || []).length, 1, `${p}: one quiz button in the card`);
    assert.equal((html.match(/data-cta-source="(article|hub)_card_call"/g) || []).length, 1, `${p}: one call link in the card`);
    assert.ok(html.includes(`data-cta-source="${kind}"`), `${p}: quiz button carries the card source`);
    assert.ok(html.includes(`data-cta-procedure="${key}"`), `${p}: quiz button carries the procedure`);
    assert.ok(!/<h[1-6][^>]*>[^<]*(Записаться на|Programare la)/.test(html.split('data-cta="')[1]?.slice(0, 600) ?? ''), `${p}: the card must not contain a heading`);
    const loc = p.startsWith('/ro/') ? 'ro' : 'ru';
    found[loc][key] = (found[loc][key] || 0) + 1;
    kinds[kind] += 1;
  }
  assert.equal(kinds.article_card, 2 * articles.length, 'article cards');
  assert.equal(kinds.hub_card, 2 * hubs.length, 'hub cards');

  const expected = {};
  for (const a of articles) expected[reg.ctaForPost(a).key] = (expected[reg.ctaForPost(a).key] || 0) + 1;
  for (const h of hubs) expected[reg.ctaForCluster(h.clusterId).key] = (expected[reg.ctaForCluster(h.clusterId).key] || 0) + 1;
  for (const loc of LOCALES) assert.deepEqual(found[loc], expected, `${loc}: cards per procedure must match the registry`);

  const fallback = expected.consultation || 0;
  console.log(`  cards: ${kinds.article_card} in articles, ${kinds.hub_card} on hubs; per procedure (RU): ${JSON.stringify(found.ru)}; consultation fallback: ${fallback}`);
});
