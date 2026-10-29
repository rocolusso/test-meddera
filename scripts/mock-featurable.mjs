#!/usr/bin/env node
/**
 * Local stub of the Featurable API (widget v2), for building and checking the reviews block without the network.
 * The shape is the one the real API returns (checked against api.featurable.com/v2/widgets/<id>): `text` is
 * Google's machine translation (English here), `originalText` the review as written (Russian), and the totals
 * come from `gbpLocationSummary` (8 on Google, 5 returned: ratings without text are not returned).
 * Names and texts are made up for the test; no real patient data.
 *
 * Usage: node scripts/mock-featurable.mjs [--port=4111] [--mode=ok|fail|empty|v1]
 *   ok     5 reviews;  fail  HTTP 500;  empty  success without reviews;  v1  {success:false} (a v1 id)
 * Then build and start the site with FEATURABLE_API_BASE=http://127.0.0.1:<port> FEATURABLE_WIDGET_ID=test.
 */
import http from 'node:http';

const arg = (name, def) => (process.argv.find((a) => a.startsWith(`--${name}=`)) ?? `--${name}=${def}`).split('=').slice(1).join('=');
const port = Number(arg('port', '4111'));
const mode = arg('mode', 'ok');

const daysAgo = (d) => new Date(Date.now() - d * 86400000).toISOString();
const REVIEWS = [
  ['Иванова Анна', 'I came for a consultation about problem skin. The doctor did a dermatoscopy and prescribed a treatment that works.', 'Обращалась за консультацией по поводу проблемной кожи. Врач провела дерматоскопию и назначила лечение, которое работает.', 40],
  ['Петров Сергей', 'A course of mesotherapy for the hair. The hair became thicker and the loss went down. Thank you to the clinic.', 'Прошёл курс мезотерапии для волос. Волосы стали гуще, выпадение сократилось. Спасибо клинике.', 120],
  ['Сидорова Мария', 'Very attentive attitude, everything was explained in detail. The result of the procedure is natural.', 'Очень внимательное отношение, всё подробно объяснили. Результат процедуры выглядит естественно, как я и хотела, и ещё раз скажу, что приём прошёл спокойно, без спешки, с подробным разбором дальнейшего ухода за кожей после процедуры.', 400],
  ['Ковальчук Олег', 'Quick appointment, clear recommendations.', 'Быстрый приём, понятные рекомендации.', 700],
  ['Мунтян Елена', 'I recommend the clinic to my friends.', 'Рекомендую клинику своим знакомым.', 800],
].map(([name, text, originalText, age], i) => ({
  id: `00000000-0000-4000-8000-00000000000${i}`,
  platform: 'gbp',
  author: { name, avatarUrl: null, profileUrl: null },
  title: null,
  text,
  originalText,
  languageCode: 'en',
  rating: { value: 5, max: 5 },
  publishedAt: daysAgo(age),
  updatedAt: daysAgo(1),
  createdAt: daysAgo(1),
  lastSyncedAt: daysAgo(1),
  metadata: {},
}));

const body = (id) => {
  if (mode === 'v1') return { success: false, error: 'not found' };
  return {
    success: true,
    widget: {
      uuid: id,
      config: { language: 'ru', title: 'Что о нас говорят', show_title: true, summary_review_button: false },
      reviews: mode === 'empty' ? [] : REVIEWS,
      isExampleReviews: false,
      gbpLocationSummary: { reviewsCount: 8, rating: 5, writeAReviewUri: 'https://www.google.com/maps/place//data=WRITEREVIEW' },
      showBranding: true,
    },
  };
};

http
  .createServer((req, res) => {
    const m = /^\/v2\/widgets\/([^/?]+)/.exec(req.url ?? '');
    if (!m) {
      res.writeHead(404).end();
      return;
    }
    if (mode === 'fail') {
      res.writeHead(500).end('error');
      return;
    }
    res.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' });
    res.end(JSON.stringify(body(m[1])));
  })
  .listen(port, '127.0.0.1', () => console.log(`mock featurable (${mode}) on http://127.0.0.1:${port}`));
