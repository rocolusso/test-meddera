import { readFileSync } from 'fs';
import { join } from 'path';

const DOMAIN = 'https://meddera.md';

// Читаем все файлы метаданных
const metadataFiles = [
  'dermatologist-cluster-articles-part1.ts',
  'botox-cluster-articles-part1.ts',
  'lips-cluster-articles-part1.ts',
  'mesotherapy-face-cluster-articles-part1.ts',
  'biorevitalization-cluster-articles-part1.ts',
  'fillers-cluster-articles-part1.ts',
];

const hubs = [
  { slugRu: 'dermatolog-beltsy-hub', slugRo: 'dermatolog-balti-hub' },
  { slugRu: 'botoks-beltsy-hub', slugRo: 'botox-balti-hub' },
  { slugRu: 'uvelichenie-gub-beltsy-hub', slugRo: 'marire-buze-balti-hub' },
  { slugRu: 'mezoterapiya-lica-beltsy-hub', slugRo: 'mezoterapie-fata-balti-hub' },
  { slugRu: 'biorevitalizaciya-beltsy-hub', slugRo: 'biorevitalizare-balti-hub' },
  { slugRu: 'konturnaya-plastika-beltsy-hub', slugRo: 'conturare-faciala-balti-hub' },
];

console.log('🔍 Генерация списка URLs из текущего состояния проекта\n');

// Собираем все slugs из метаданных
const allSlugs = [];

for (const file of metadataFiles) {
  const filePath = join('./src/blog-data', file);
  const content = readFileSync(filePath, 'utf-8');
  
  // Извлекаем slugRu и slugRo
  const slugRuMatches = content.match(/slugRu:\s*['"`]([^'"`]+)['"`]/g);
  const slugRoMatches = content.match(/slugRo:\s*['"`]([^'"`]+)['"`]/g);
  
  if (slugRuMatches) {
    slugRuMatches.forEach(match => {
      const slug = match.match(/['"`]([^'"`]+)['"`]/)[1];
      allSlugs.push({ ru: slug, type: 'article' });
    });
  }
  
  if (slugRoMatches) {
    slugRoMatches.forEach((match, idx) => {
      const slug = match.match(/['"`]([^'"`]+)['"`]/)[1];
      if (allSlugs[allSlugs.length - slugRoMatches.length + idx]) {
        allSlugs[allSlugs.length - slugRoMatches.length + idx].ro = slug;
      }
    });
  }
}

// Генерируем URLs
const currentUrls = [];

// Добавляем хабы
console.log('📋 Хабы:');
hubs.forEach(hub => {
  const ruUrl = `${DOMAIN}/blog/${hub.slugRu}`;
  const roUrl = `${DOMAIN}/ro/blog/${hub.slugRo}`;
  currentUrls.push(ruUrl, roUrl);
  console.log(`  ${ruUrl}`);
  console.log(`  ${roUrl}`);
});

console.log(`\n📄 Статьи (${allSlugs.length}):`);
allSlugs.forEach(slug => {
  if (slug.ru && slug.ro) {
    const ruUrl = `${DOMAIN}/blog/${slug.ru}`;
    const roUrl = `${DOMAIN}/ro/blog/${slug.ro}`;
    currentUrls.push(ruUrl, roUrl);
  }
});
console.log(`  Всего статей: ${allSlugs.length}`);
console.log(`  URLs статей: ${allSlugs.length * 2} (RU + RO)`);

// Основные страницы
const mainPages = [
  `${DOMAIN}/`,
  `${DOMAIN}/about`,
  `${DOMAIN}/services`,
  `${DOMAIN}/contacts`,
  `${DOMAIN}/ro`,
  `${DOMAIN}/ro/about`,
  `${DOMAIN}/ro/services`,
  `${DOMAIN}/ro/contacts`,
  `${DOMAIN}/blog`,
  `${DOMAIN}/ro/blog`,
];

console.log(`\n🏠 Основные страницы: ${mainPages.length}`);

// Услуги
const services = [
  'konsultaczyya-dermatokosmetologa-v-belczah',
  'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
  'professyonalnaya-chystka-lycza-v-belczah',
  'karboksyterapyya-v-belczah',
  'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
  'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  'terapyya-anty-akne-v-belczah',
  'terapyya-protyv-pygmentaczyy-v-belczah',
  'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
  'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
  'mezoterapyya-dlya-volos-v-belczah',
  'uvelychenye-gub-v-belczah',
  'botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
  'byorevytalyzaczyya-v-belczah',
  'konturnaya-plastyka-fylleramy-v-belczah',
  'ynjekczyy-lypolytykov-v-belczah',
];

const serviceUrls = [];
services.forEach(slug => {
  serviceUrls.push(`${DOMAIN}/services/${slug}`);
  serviceUrls.push(`${DOMAIN}/services/${slug}/ro`);
});

console.log(`📦 Услуги: ${services.length} (${serviceUrls.length} URLs с RU+RO)`);

// Пагинация (примерно)
const articlesCount = allSlugs.length;
const postsPerPage = 10;
const maxPage = Math.ceil(articlesCount / postsPerPage);
const paginationUrls = [];

for (let p = 2; p <= maxPage; p++) {
  paginationUrls.push(`${DOMAIN}/blog/page/${p}`);
  paginationUrls.push(`${DOMAIN}/ro/blog/page/${p}`);
}

console.log(`📄 Пагинация: ${paginationUrls.length} URLs (страницы 2-${maxPage})`);

// Итого
const totalCurrent = mainPages.length + serviceUrls.length + currentUrls.length + paginationUrls.length;
console.log(`\n✅ ИТОГО ТЕКУЩИХ URLs: ${totalCurrent}`);

// Сохраняем текущие URLs
const allCurrentUrls = [...mainPages, ...serviceUrls, ...currentUrls, ...paginationUrls];
const currentUrlsContent = allCurrentUrls.join('\n');

import { writeFileSync } from 'fs';
writeFileSync('./current-urls.txt', currentUrlsContent);
console.log(`\n💾 Сохранено в: current-urls.txt`);

// Теперь генерируем недостающие URLs для полного плана (1600 статей)
console.log('\n' + '='.repeat(60));
console.log('📊 НЕДОСТАЮЩИЕ URLs ДЛЯ ПОЛНОГО ПЛАНА (1600 статей)\n');

const missingUrls = [];

// Недостающие статьи топ-6 (454 статьи)
const top6Missing = [
  { name: 'Дерматолог', count: 75, prefix: 'dermatolog', prefixRo: 'dermatolog' },
  { name: 'Ботокс', count: 75, prefix: 'botoks', prefixRo: 'botox' },
  { name: 'Губы', count: 76, prefix: 'uvelichenie-gub', prefixRo: 'marire-buze' },
  { name: 'Мезотерапия лица', count: 76, prefix: 'mezoterapiya-lica', prefixRo: 'mezoterapie-fata' },
  { name: 'Биоревитализация', count: 76, prefix: 'biorevitalizaciya', prefixRo: 'biorevitalizare' },
  { name: 'Филлеры', count: 76, prefix: 'konturnaya-plastika', prefixRo: 'conturare' },
];

console.log('📋 Недостающие статьи топ-6:');
let top6Total = 0;
top6Missing.forEach(rubric => {
  console.log(`  ${rubric.name}: ${rubric.count} статей × 2 языка = ${rubric.count * 2} URLs`);
  top6Total += rubric.count * 2;
  
  // Генерируем примеры URLs
  for (let i = 26; i <= 26 + Math.min(2, rubric.count - 1); i++) {
    missingUrls.push(`${DOMAIN}/blog/${rubric.prefix}-tema-${i}-beltsy`);
    missingUrls.push(`${DOMAIN}/ro/blog/${rubric.prefixRo}-tema-${i}-balti`);
  }
  if (rubric.count > 3) {
    missingUrls.push(`# ... еще ${(rubric.count - 3) * 2} URLs для ${rubric.name}`);
  }
});

console.log(`\n  ИТОГО топ-6: ${top6Total} URLs`);

// Недостающие рубрики (10 рубрик × 100 статей)
const missingRubrics = [
  { name: 'Пилинги', prefix: 'piling', prefixRo: 'peeling' },
  { name: 'Чистка лица', prefix: 'chistka-lica', prefixRo: 'curatare-fata' },
  { name: 'Лазерные процедуры', prefix: 'lazer', prefixRo: 'laser' },
  { name: 'Карбокситерапия', prefix: 'karboksiterapiya', prefixRo: 'carboxiterapie' },
  { name: 'Мезотерапия волос', prefix: 'mezoterapiya-volos', prefixRo: 'mezoterapie-par' },
  { name: 'Инъекции липолитиков', prefix: 'lipolitiki', prefixRo: 'lipolitice' },
  { name: 'Альгинатные маски', prefix: 'alginatnye-maski', prefixRo: 'masti-alginat' },
  { name: 'Дермапен', prefix: 'dermapen', prefixRo: 'dermapen' },
  { name: 'Терапия против пигментации', prefix: 'terapiya-pigmentaciya', prefixRo: 'terapie-pigmentare' },
  { name: 'Терапия анти-акне', prefix: 'terapiya-akne', prefixRo: 'terapie-acnee' },
];

console.log('\n📋 Недостающие рубрики (полностью не созданы):');
let missingRubricsTotal = 0;

missingRubrics.forEach(rubric => {
  const hubUrls = 2; // RU + RO
  const articleUrls = 100 * 2; // 100 статей × 2 языка
  const total = hubUrls + articleUrls;
  
  console.log(`  ${rubric.name}: 1 хаб + 100 статей = ${total} URLs`);
  missingRubricsTotal += total;
  
  // Добавляем хаб
  missingUrls.push(`${DOMAIN}/blog/${rubric.prefix}-beltsy-hub`);
  missingUrls.push(`${DOMAIN}/ro/blog/${rubric.prefixRo}-balti-hub`);
  
  // Добавляем примеры статей
  for (let i = 1; i <= 2; i++) {
    missingUrls.push(`${DOMAIN}/blog/${rubric.prefix}-tema-${i}-beltsy`);
    missingUrls.push(`${DOMAIN}/ro/blog/${rubric.prefixRo}-tema-${i}-balti`);
  }
  missingUrls.push(`# ... еще ${(100 - 2) * 2} URLs для ${rubric.name}`);
});

console.log(`\n  ИТОГО недостающие рубрики: ${missingRubricsTotal} URLs`);

// Пагинация для недостающих статей
const totalArticlesPlanned = 1600;
const maxPagePlanned = Math.ceil(totalArticlesPlanned / 10);
const currentMaxPage = Math.ceil(articlesCount / 10);
const missingPaginationUrls = (maxPagePlanned - currentMaxPage) * 2; // RU + RO

console.log(`\n📄 Недостающая пагинация: ${missingPaginationUrls} URLs (страницы ${currentMaxPage + 1}-${maxPagePlanned})`);

// Итого недостающих
const totalMissing = top6Total + missingRubricsTotal + missingPaginationUrls;

console.log('\n' + '='.repeat(60));
console.log('📊 ИТОГОВАЯ СТАТИСТИКА:');
console.log(`  Текущих URLs: ${totalCurrent}`);
console.log(`  Недостающих URLs: ${totalMissing}`);
console.log(`  Планируемых URLs: ${totalCurrent + totalMissing}`);
console.log('='.repeat(60));

// Сохраняем недостающие URLs
const missingUrlsContent = missingUrls.join('\n');
writeFileSync('./missing-urls.txt', missingUrlsContent);
console.log(`\n💾 Недостающие URLs сохранены в: missing-urls.txt`);

// Генерируем полный список (текущие + недостающие с комментариями)
const fullList = [
  '# ТЕКУЩИЕ URLs (готовы к публикации)',
  '# Всего: ' + totalCurrent,
  '',
  '## Основные страницы',
  ...mainPages,
  '',
  '## Услуги',
  ...serviceUrls,
  '',
  '## Блог: Хабы',
  ...currentUrls.filter(url => url.includes('-hub')),
  '',
  '## Блог: Статьи',
  ...currentUrls.filter(url => !url.includes('-hub') && !url.includes('/page/')),
  '',
  '## Блог: Пагинация',
  ...paginationUrls,
  '',
  '',
  '# НЕДОСТАЮЩИЕ URLs (для завершения плана)',
  '# Всего: ' + totalMissing,
  '',
  '## Топ-6: Недостающие статьи (454 статьи = 908 URLs)',
  ...missingUrls.filter(url => !url.includes('piling') && !url.includes('chistka') && !url.includes('lazer') && !url.includes('karboksiterapiya') && !url.includes('lipolitiki') && !url.includes('alginatnye') && !url.includes('dermapen') && !url.includes('terapiya')),
  '',
  '## Новые рубрики 7-16 (1000 статей + 10 хабов = 2020 URLs)',
  ...missingUrls.filter(url => url.includes('piling') || url.includes('chistka') || url.includes('lazer') || url.includes('karboksiterapiya') || url.includes('lipolitiki') || url.includes('alginatnye') || url.includes('dermapen') || url.includes('terapiya')),
];

writeFileSync('./all-urls-plan.txt', fullList.join('\n'));
console.log(`💾 Полный план URLs сохранён в: all-urls-plan.txt`);

console.log('\n✅ Готово!');
