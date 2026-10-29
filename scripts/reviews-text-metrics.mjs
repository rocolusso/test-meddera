/**
 * Measures the text of the reviews page (RU and RO): characters with spaces, words, frequency of the key stems and
 * the count of the exact key phrase. Reads the same JSON files the page renders, so the numbers are the page's.
 *   node scripts/reviews-text-metrics.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'src/components/google-reviews/copy');

const CONF = {
  ru: {
    stems: ['дерматолог', 'бельц', 'отзыв'],
    phrase: 'дерматолог бельцы отзывы',
    title: [30, 60],
    description: [110, 160],
  },
  ro: {
    stems: ['dermatolog', 'balti', 'recenzi'],
    phrase: 'dermatolog balti recenzii',
    title: [30, 60],
    description: [110, 160],
  },
};

const plain = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const fold = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

export function articleParts(copy) {
  const out = [copy.h1, ...copy.intro];
  for (const s of copy.sections) out.push(s.h2, ...s.p, ...(s.list ?? []));
  out.push(copy.faq.h2);
  for (const f of copy.faq.items) out.push(f.q, f.a);
  out.push(copy.cta.h2, copy.cta.p);
  return out.map(plain);
}

let failed = false;
for (const loc of ['ru', 'ro']) {
  const copy = JSON.parse(readFileSync(path.join(dir, `${loc}.json`), 'utf8'));
  const conf = CONF[loc];
  const parts = articleParts(copy);
  const text = parts.join('\n');
  const chars = parts.join(' ').length;
  const words = fold(text).match(/[\p{L}\p{N}]+/gu) ?? [];
  console.log(`\n== ${loc.toUpperCase()} ==`);
  console.log(`chars with spaces: ${chars}  (target 9000..10000)  ${chars >= 9000 && chars <= 10000 ? 'OK' : 'OUT'}`);
  if (chars < 9000 || chars > 10000) failed = true;
  console.log(`words: ${words.length}`);
  for (const stem of conf.stems) {
    const n = words.filter((w) => w.includes(fold(stem))).length;
    const pct = (n / words.length) * 100;
    const ok = pct >= 5 && pct <= 6;
    if (!ok) failed = true;
    console.log(`stem ${stem}*: ${n}  ${pct.toFixed(2)}%  ${ok ? 'OK' : 'OUT (5..6)'}`);
  }
  const folded = fold(text).replace(/[^\p{L}\p{N}]+/gu, ' ');
  const exact = folded.split(conf.phrase).length - 1;
  const okExact = exact >= 10 && exact <= 14;
  if (!okExact) failed = true;
  console.log(`exact "${conf.phrase}": ${exact}  ${okExact ? 'OK' : 'OUT (10..14)'}`);
  const t = copy.meta.title.length;
  const d = copy.meta.description.length;
  const okT = t >= conf.title[0] && t <= conf.title[1];
  const okD = d >= conf.description[0] && d <= conf.description[1];
  if (!okT || !okD) failed = true;
  console.log(`title ${t} ${okT ? 'OK' : 'OUT'} | description ${d} ${okD ? 'OK' : 'OUT'}`);
  const inTitle = fold(copy.meta.title).replace(/[^\p{L}\p{N}]+/gu, ' ').includes(conf.phrase);
  const inDesc = fold(copy.meta.description).replace(/[^\p{L}\p{N}]+/gu, ' ').includes(conf.phrase);
  const inH1 = fold(copy.h1).replace(/[^\p{L}\p{N}]+/gu, ' ').includes(conf.phrase);
  if (!inTitle || !inDesc || !inH1) failed = true;
  console.log(`phrase in title: ${inTitle}, description: ${inDesc}, h1: ${inH1}`);
  const banned = /[—–]|!|бесплатн|гарант|gratuit|garanți/i;
  const bad = [copy.meta.title, copy.meta.description, ...parts].filter((p) => banned.test(p));
  if (bad.length) {
    failed = true;
    console.log('BANNED in:', bad.map((b) => b.slice(0, 60)));
  }
}
process.exit(failed && process.argv.includes('--strict') ? 1 : 0);
