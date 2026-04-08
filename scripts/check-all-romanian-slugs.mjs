import { readFileSync } from 'fs';

console.log('🔍 Полная проверка румынских slugs на диакритику\n');
console.log('='.repeat(80));

const ROMANIAN_DIACRITICS = /[ăâîșțĂÂÎȘȚ]/;

const files = [
  'dermatologist-cluster-articles-part1.ts',
  'botox-cluster-articles-part1.ts',
  'lips-cluster-articles-part1.ts',
  'mesotherapy-face-cluster-articles-part1.ts',
  'biorevitalization-cluster-articles-part1.ts',
  'fillers-cluster-articles-part1.ts',
];

let totalSlugs = 0;
let slugsWithDiacritics = 0;
const foundIssues = [];

for (const file of files) {
  console.log(`\n📄 Проверка: ${file}`);
  
  const content = readFileSync(`./src/blog-data/${file}`, 'utf-8');
  
  // Извлекаем все slugRo
  const regex = /slugRo:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  let fileCount = 0;
  let fileIssues = 0;
  
  while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    totalSlugs++;
    fileCount++;
    
    if (ROMANIAN_DIACRITICS.test(slug)) {
      slugsWithDiacritics++;
      fileIssues++;
      
      // Извлекаем символы с диакритикой
      const diacritics = slug.match(/[ăâîșțĂÂÎȘȚ]/g);
      
      foundIssues.push({
        file: file.replace('-cluster-articles-part1.ts', ''),
        slug,
        diacritics: [...new Set(diacritics)].join(', '),
      });
      
      console.log(`  ❌ ${slug}`);
      console.log(`     Диакритика: ${[...new Set(diacritics)].join(', ')}`);
    }
  }
  
  if (fileIssues === 0) {
    console.log(`  ✅ Все slugs чистые (${fileCount} проверено)`);
  } else {
    console.log(`  ⚠️  Найдено проблем: ${fileIssues} из ${fileCount}`);
  }
}

console.log('\n' + '='.repeat(80));
console.log('\n📊 Итоговая статистика:\n');
console.log(`  Всего румынских slugs: ${totalSlugs}`);
console.log(`  Slugs с диакритикой: ${slugsWithDiacritics}`);
console.log(`  Чистых slugs (ASCII): ${totalSlugs - slugsWithDiacritics}`);

if (slugsWithDiacritics > 0) {
  console.log('\n' + '='.repeat(80));
  console.log('\n❌ НАЙДЕНЫ ПРОБЛЕМЫ!\n');
  
  console.log('Список всех slugs с диакритикой:\n');
  
  // Группируем по файлам
  const byFile = {};
  foundIssues.forEach(issue => {
    if (!byFile[issue.file]) {
      byFile[issue.file] = [];
    }
    byFile[issue.file].push(issue);
  });
  
  Object.keys(byFile).forEach(file => {
    console.log(`\n📁 ${file.toUpperCase()}:`);
    byFile[file].forEach((issue, i) => {
      console.log(`   ${i + 1}. ${issue.slug}`);
      console.log(`      Символы: ${issue.diacritics}`);
    });
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('\n🔧 Рекомендация:');
  console.log('   Запустите: node scripts/transliterate-slugs.mjs');
  
} else {
  console.log('\n' + '='.repeat(80));
  console.log('\n✅ ВСЕ РУМЫНСКИЕ SLUGS ЧИСТЫЕ!');
  console.log('\n   Все URL используют только ASCII символы.');
  console.log('   Проблем с диакритикой не обнаружено.');
}

console.log('\n' + '='.repeat(80));
