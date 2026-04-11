import { readFileSync } from 'fs';

console.log('🔍 Проверка конкретных URLs на 404\n');
console.log('='.repeat(80));

const urlsToCheck = [
  { url: 'https://meddera.md/ro/blog/conturare-filler-balti-hub', lang: 'ro' },
  { url: 'https://meddera.md/blog/biorevitalizaciya-rezultaty-dlitelnost-effekta', lang: 'ru' },
  { url: 'https://meddera.md/blog/konturnaya-plastika-veski-beltsy', lang: 'ru' },
  { url: 'https://meddera.md/ro/blog/conturare-tample-balti', lang: 'ro' },
  { url: 'https://meddera.md/ro/blog/conturare-pometi-barbie-balti', lang: 'ro' },
  { url: 'https://meddera.md/blog/konturnaya-plastika-skul-podborodka-beltsy', lang: 'ru' },
  { url: 'https://meddera.md/ro/blog/conturare-colturi-gura-balti', lang: 'ro' },
  { url: 'https://meddera.md/ro/blog/biorevitalizare-rezultate-durata-efectului', lang: 'ro' },
  { url: 'https://meddera.md/blog/konturnaya-plastika-ugolkov-rta-beltsy', lang: 'ru' },
  { url: 'https://meddera.md/ro/blog/biorevitalizare-laser-balti', lang: 'ro' },
  { url: 'https://meddera.md/blog/biorevitalizaciya-lazernaya-beltsy', lang: 'ru' },
];

// Извлекаем slug из URL
const extractSlug = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 1];
};

// Читаем все метаданные
const files = [
  { path: './src/blog-data/biorevitalization-cluster-articles-part1.ts', name: 'biorevitalization' },
  { path: './src/blog-data/fillers-cluster-articles-part1.ts', name: 'fillers' },
];

const allSlugs = { ru: [], ro: [] };

for (const file of files) {
  const content = readFileSync(file.path, 'utf-8');
  
  // Извлекаем все slugRu
  const ruMatches = content.match(/slugRu:\s*['"`]([^'"`]+)['"`]/g);
  if (ruMatches) {
    ruMatches.forEach(match => {
      const slug = match.match(/['"`]([^'"`]+)['"`]/)[1];
      allSlugs.ru.push({ slug, file: file.name });
    });
  }
  
  // Извлекаем все slugRo
  const roMatches = content.match(/slugRo:\s*['"`]([^'"`]+)['"`]/g);
  if (roMatches) {
    roMatches.forEach(match => {
      const slug = match.match(/['"`]([^'"`]+)['"`]/)[1];
      allSlugs.ro.push({ slug, file: file.name });
    });
  }
}

// Также проверяем registry.ts для хабов
const registryContent = readFileSync('./src/blog-data/registry.ts', 'utf-8');
const hubMatches = registryContent.match(/id:\s*['"`]([^'"`]+-hub)['"`][\s\S]*?slugRu:\s*['"`]([^'"`]+)['"`][\s\S]*?slugRo:\s*['"`]([^'"`]+)['"`]/g);

if (hubMatches) {
  hubMatches.forEach(match => {
    const ruSlug = match.match(/slugRu:\s*['"`]([^'"`]+)['"`]/)?.[1];
    const roSlug = match.match(/slugRo:\s*['"`]([^'"`]+)['"`]/)?.[1];
    if (ruSlug) allSlugs.ru.push({ slug: ruSlug, file: 'hub' });
    if (roSlug) allSlugs.ro.push({ slug: roSlug, file: 'hub' });
  });
}

console.log(`\n📊 Всего slugs в базе:`);
console.log(`   RU: ${allSlugs.ru.length}`);
console.log(`   RO: ${allSlugs.ro.length}\n`);

console.log('='.repeat(80));
console.log('\n🔍 Проверка URLs:\n');

const issues = [];
const correct = [];

for (const { url, lang } of urlsToCheck) {
  const slug = extractSlug(url);
  const found = allSlugs[lang].find(s => s.slug === slug);
  
  if (found) {
    console.log(`✅ ${url}`);
    console.log(`   Найден в: ${found.file}\n`);
    correct.push({ url, slug, file: found.file });
  } else {
    console.log(`❌ ${url}`);
    console.log(`   Slug не найден: ${slug}`);
    
    // Ищем похожие slugs
    const similar = allSlugs[lang].filter(s => 
      s.slug.includes(slug.split('-')[0]) || 
      slug.includes(s.slug.split('-')[0])
    ).slice(0, 3);
    
    if (similar.length > 0) {
      console.log(`   Похожие slugs:`);
      similar.forEach(s => console.log(`     - ${s.slug} (${s.file})`));
    }
    console.log('');
    
    issues.push({ url, slug, lang });
  }
}

console.log('='.repeat(80));
console.log(`\n📊 Итого:`);
console.log(`   ✅ Корректных URLs: ${correct.length}`);
console.log(`   ❌ Проблемных URLs: ${issues.length}\n`);

if (issues.length > 0) {
  console.log('⚠️  ТРЕБУЕТСЯ ИСПРАВЛЕНИЕ!\n');
  console.log('Проблемные URLs:');
  issues.forEach((issue, i) => {
    console.log(`${i + 1}. ${issue.url}`);
    console.log(`   Slug: ${issue.slug} (${issue.lang})`);
  });
}

console.log('\n' + '='.repeat(80));
