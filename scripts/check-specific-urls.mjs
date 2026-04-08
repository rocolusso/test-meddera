import { readFileSync } from 'fs';

const problematicUrls = [
  { url: 'https://meddera.md/ro/blog/botox-sarcină-alăptare-balti', expected: true },
  { url: 'https://meddera.md/ro/blog/botox-bărbați-particularități-balti', expected: true },
  { url: 'https://meddera.md/ro/blog/botox-migrenă-dureri-cap-tratament-balti', expected: true },
  { url: 'https://meddera.md/ro/blog/botox-bruxism-scrâșnit-dinți-balti', expected: true },
  { url: 'https://meddera.md/blog/biorevitalizaciya-lazernaya-beltsy', expected: true },
  { url: 'https://meddera.md/ro/blog/biorevitalizaciya-lazernaya-beltsy', expected: false, note: 'RU slug in RO path' },
  { url: 'https://meddera.md/blog/mezoterapiya-lica-kuperoz-beltsy', expected: true },
  { url: 'https://meddera.md/ro/blog/mezoterapiya-lica-kuperoz-beltsy', expected: false, note: 'RU slug in RO path' },
  { url: 'https://meddera.md/ro/blog/conturare-pomeți-balti', expected: true },
  { url: 'https://meddera.md/blog/konturnaya-plastika-ugolkov-rta-beltsy', expected: true },
  { url: 'https://meddera.md/blog/konturnaya-plastika-skul-podborodka-beltsy', expected: true },
  { url: 'https://meddera.md/blog/konturnaya-plastika-veski-beltsy', expected: true },
  { url: 'https://meddera.md/blog/biorevitalizaciya-rezultaty-dlitelnost-effekta', expected: true },
  { url: 'https://meddera.md/ro/blog/conturare-filler-balti-hub', expected: false, note: 'Wrong slug, should be conturare-faciala-balti-hub' },
];

console.log('🔍 Проверка проблемных URLs\n');
console.log('='.repeat(80));

// Читаем current-urls.txt
const currentUrlsContent = readFileSync('./current-urls.txt', 'utf-8');
const currentUrls = new Set(currentUrlsContent.split('\n').filter(line => line.trim()));

let foundCount = 0;
let notFoundCount = 0;
const issues = [];

problematicUrls.forEach(({ url, expected, note }) => {
  const exists = currentUrls.has(url);
  const status = exists ? '✓ FOUND' : '✗ NOT FOUND';
  const expectStatus = expected ? '(expected)' : '(not expected)';
  
  console.log(`${status} ${expectStatus}: ${url}`);
  if (note) {
    console.log(`  📝 ${note}`);
  }
  
  if (exists) {
    foundCount++;
  } else {
    notFoundCount++;
    if (expected) {
      issues.push({ url, note: note || 'Missing from build' });
    }
  }
  console.log('');
});

console.log('='.repeat(80));
console.log(`\n📊 ИТОГО:`);
console.log(`  Найдено: ${foundCount}`);
console.log(`  Не найдено: ${notFoundCount}`);

if (issues.length > 0) {
  console.log(`\n🚨 ПРОБЛЕМЫ (${issues.length}):`);
  issues.forEach(({ url, note }) => {
    console.log(`  ❌ ${url}`);
    console.log(`     ${note}`);
  });
}

console.log('\n✅ Готово!');
