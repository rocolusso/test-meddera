import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const blogDataPath = './src/blog-data';

// Читаем все файлы метаданных
const metadataFiles = [
  'dermatologist-cluster-articles-part1.ts',
  'botox-cluster-articles-part1.ts',
  'lips-cluster-articles-part1.ts',
  'mesotherapy-face-cluster-articles-part1.ts',
  'biorevitalization-cluster-articles-part1.ts',
  'fillers-cluster-articles-part1.ts',
];

// Читаем все файлы контента
const contentFiles = [
  'dermatologist-article-content.ts',
  'botox-article-content.ts',
  'lips-article-content.ts',
  'mesotherapy-face-article-content.ts',
  'biorevitalization-article-content.ts',
  'biorevitalization-article-content-part2.ts',
  'fillers-article-content.ts',
  'fillers-article-content-part2.ts',
];

console.log('🔍 Проверка целостности контента блога\n');
console.log('='.repeat(60));

let totalArticles = 0;
let totalHubs = 6; // Известно, что 6 хабов

// Подсчёт статей в метаданных
console.log('\n📋 МЕТАДАННЫЕ (статьи):');
for (const file of metadataFiles) {
  const filePath = join(blogDataPath, file);
  const content = readFileSync(filePath, 'utf-8');
  
  // Подсчёт объектов с id:
  const matches = content.match(/\bid:\s*['"`]/g);
  const count = matches ? matches.length : 0;
  
  const rubricName = file.replace('-cluster-articles-part1.ts', '');
  console.log(`  ${rubricName.padEnd(25)} ${count} статей`);
  totalArticles += count;
}

console.log(`\n  ${'ИТОГО:'.padEnd(25)} ${totalArticles} статей`);

// Подсчёт контента
console.log('\n📝 КОНТЕНТ (статьи с полным текстом):');
let totalContent = 0;
for (const file of contentFiles) {
  const filePath = join(blogDataPath, file);
  const content = readFileSync(filePath, 'utf-8');
  
  // Подсчёт ключей в объекте контента (например, 'article-id': {)
  const matches = content.match(/['"`][a-z0-9-]+['"`]:\s*\{/g);
  const count = matches ? matches.length : 0;
  
  console.log(`  ${file.padEnd(45)} ${count} статей`);
  totalContent += count;
}

console.log(`\n  ${'ИТОГО:'.padEnd(45)} ${totalContent} статей с контентом`);

// Проверка registry.ts
console.log('\n📚 REGISTRY.TS:');
const registryPath = join(blogDataPath, 'registry.ts');
const registryContent = readFileSync(registryPath, 'utf-8');

// Проверка импортов
const imports = [
  'dermatologistArticlesPart1',
  'botoxArticlesPart1',
  'lipsArticlesPart1',
  'mesotherapyFaceArticlesPart1',
  'biorevitalizationArticlesPart1',
  'fillersArticlesPart1',
];

console.log('\n  Импорты:');
for (const imp of imports) {
  const hasImport = registryContent.includes(`import { ${imp} }`);
  const hasSpread = registryContent.includes(`...${imp}`);
  const status = hasImport && hasSpread ? '✅' : '❌';
  console.log(`    ${status} ${imp}`);
}

// Подсчёт хабов в registry
const hubMatches = registryContent.match(/kind:\s*['"`]hub['"`]/g);
const hubCount = hubMatches ? hubMatches.length : 0;
console.log(`\n  Хабов в registry: ${hubCount}`);

// Итоговая статистика
console.log('\n' + '='.repeat(60));
console.log('📊 ИТОГОВАЯ СТАТИСТИКА:');
console.log(`  Хабов: ${totalHubs}`);
console.log(`  Статей (метаданные): ${totalArticles}`);
console.log(`  Статей (с контентом): ${totalContent}`);
console.log(`  Всего постов: ${totalHubs + totalArticles}`);
console.log(`  Статей без контента: ${totalArticles - totalContent}`);

if (totalArticles === totalContent) {
  console.log('\n✅ Все статьи имеют контент!');
} else {
  console.log(`\n⚠️  ${totalArticles - totalContent} статей без контента (это нормально для базового контента)`);
}

// Проверка сборки
console.log('\n🏗️  СБОРКА:');
try {
  const buildManifest = readFileSync('.next/build-manifest.json', 'utf-8');
  console.log('  ✅ Build manifest найден');
  
  const manifest = JSON.parse(buildManifest);
  const pages = Object.keys(manifest.pages || {});
  console.log(`  📄 Страниц в манифесте: ${pages.length}`);
} catch (e) {
  console.log('  ❌ Build manifest не найден (запустите npm run build)');
}

console.log('='.repeat(60));
console.log('\n✅ Проверка завершена!');
console.log('\n💡 Для проверки на 404 запустите production сервер:');
console.log('   npm run build && npm run start');
console.log('   Затем откройте http://localhost:3000/blog в браузере');
