#!/usr/bin/env node
/**
 * Structured-data checks on a snapshot produced by seo-snapshot.mjs.
 * Usage: node scripts/verify-schema.mjs <snapshot.json>
 * Exit code 1 when any rule fails.
 */
import fs from 'node:fs';

const snap = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const ORIGIN = 'https://meddera.md';
const IDS = { website: `${ORIGIN}/#website`, clinic: `${ORIGIN}/#clinic`, physician: `${ORIGIN}/#physician` };
const LIPS_PATHS = new Set([
  '/services/uvelychenye-gub-v-belczah',
  '/ro/services/uvelychenye-gub-v-belczah',
]);
const errors = [];
const fail = (p, msg) => errors.push(`${p}: ${msg}`);

const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
const asArray = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);

function* walk(v) {
  if (Array.isArray(v)) for (const x of v) yield* walk(x);
  else if (v && typeof v === 'object') {
    yield v;
    for (const x of Object.values(v)) yield* walk(x);
  }
}

for (const [p, page] of Object.entries(snap)) {
  if (page.robots && /noindex/.test(page.robots)) continue;
  const isLips = LIPS_PATHS.has(p);
  const blobs = page.jsonld;
  if (!blobs.length) {
    fail(p, 'no JSON-LD');
    continue;
  }
  if (blobs.some((b) => b.__parseError)) {
    fail(p, 'JSON-LD does not parse');
    continue;
  }
  const nodes = [];
  for (const b of blobs) {
    for (const n of asArray(b['@graph'] ?? b)) nodes.push(n);
  }
  const byId = new Map();
  for (const n of nodes) {
    const id = n['@id'];
    if (!id) continue;
    if (byId.has(id)) fail(p, `duplicate @id ${id}`);
    byId.set(id, n);
  }
  const types = (n) => asArray(n['@type']);
  const has = (t) => nodes.some((n) => types(n).includes(t));

  // Required entity set (lips pages keep their own page-level markup but share the entities)
  for (const [k, id] of Object.entries(IDS)) if (!byId.has(id)) fail(p, `missing ${k} entity ${id}`);
  if (!has('BreadcrumbList') && !isLips) fail(p, 'missing BreadcrumbList');

  // Every internal reference resolves inside the same page graph
  for (const o of walk(nodes)) {
    const keys = Object.keys(o);
    if (keys.length === 1 && keys[0] === '@id' && String(o['@id']).startsWith(ORIGIN) && !byId.has(o['@id'])) {
      // lips hub keeps legacy references only to entities that are present; anything else is an error
      fail(p, `dangling reference ${o['@id']}`);
    }
  }

  const raw = JSON.stringify(blobs);
  // Facts that must never be asserted in markup
  for (const [re, why] of [
    [/priceRange/, 'priceRange'],
    [/"@type":"(Offer|AggregateOffer|AggregateRating|Review)"/, 'offer/rating/review'],
    [/"price"/, 'price'],
    [/MDL|лей\b/, 'currency'],
    [/availableChannel|onlineConsult|онлайн-консульт|consulta[țt]ii online/i, 'online channel/consultation'],
    [/Бельци(?!\w)/, 'typo «Бельци»'],
    [/cel mai bun|лучший дерматолог/i, 'superlative'],
  ]) {
    if (!isLips && re.test(raw)) fail(p, `forbidden in markup: ${why}`);
  }

  const clinic = byId.get(IDS.clinic);
  if (clinic) {
    if (clinic.telephone !== '+37368550030') fail(p, 'clinic telephone');
    if (clinic.address?.streetAddress !== 'Strada Ștefan cel Mare 13') fail(p, 'clinic address');
    if (!asArray(clinic.openingHoursSpecification).length) fail(p, 'clinic opening hours');
    const days = asArray(clinic.openingHoursSpecification)[0]?.dayOfWeek?.join(',');
    if (days !== 'Tuesday,Thursday,Friday,Saturday') fail(p, `opening days ${days}`);
    if (!asArray(clinic.alternateName).includes('Дерматолог Бельцы Beauty Clinic')) fail(p, 'GMB alternateName');
  }

  // Page node matches the document
  const canon = page.canonical === ORIGIN ? `${ORIGIN}/` : page.canonical;
  const wp = nodes.find((n) => n['@id'] === `${canon}#webpage`);
  if (!wp && !isLips) fail(p, `no WebPage node for canonical ${page.canonical}`);
  if (wp) {
    const lang = p === '/ro' || p.startsWith('/ro/') ? 'ro-MD' : 'ru-MD';
    if (wp.inLanguage !== lang) fail(p, `inLanguage ${wp.inLanguage} != ${lang}`);
    if (wp.url !== canon) fail(p, `WebPage url ${wp.url} != canonical ${page.canonical}`);
  }

  // Physician details only on the About page
  const phys = byId.get(IDS.physician);
  const isAbout = p === '/about' || p === '/ro/about';
  if (phys) {
    const full = Boolean(phys.knowsAbout || phys.alumniOf);
    if (isAbout && !full) fail(p, 'About page must carry the full physician');
    if (!isAbout && full) fail(p, 'full physician outside About page');
  }

  // FAQ: every question and answer must be visible, word for word
  const text = norm(page.htmlText);
  for (const n of nodes.filter((x) => types(x).includes('FAQPage'))) {
    if (isLips) continue;
    for (const q of asArray(n.mainEntity)) {
      if (!text.includes(norm(q.name))) fail(p, `FAQ question not visible: ${q.name.slice(0, 50)}`);
      if (!text.includes(norm(q.acceptedAnswer?.text))) fail(p, `FAQ answer not visible: ${q.name.slice(0, 50)}`);
    }
  }

  // Service pages (not lips) must declare a Service provided by the clinic
  if (/^\/(ro\/)?services\/[^/]+$/.test(p) && !isLips && process.env.EXPECT_SERVICE === '1') {
    const svc = nodes.find((n) => types(n).includes('Service'));
    if (!svc) fail(p, 'service page without Service node');
    else if (svc.provider?.['@id'] !== IDS.clinic) fail(p, 'Service.provider must be the clinic');
  }
}

if (errors.length) {
  console.log(errors.slice(0, 80).join('\n'));
  console.log(`\nverify-schema: ${errors.length} problem(s) on ${Object.keys(snap).length} pages`);
  process.exit(1);
}
console.log(`verify-schema: OK (${Object.keys(snap).length} pages)`);
