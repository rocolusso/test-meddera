import { readFileSync } from 'fs';

console.log('🔍 Проверка румынских slugs в метаданных\n');
console.log('='.repeat(80));

const files = [
  'dermatologist-cluster-articles-part1.ts',
  'botox-cluster-articles-part1.ts',
  'lips-cluster-articles-part1.ts',
  'mesotherapy-face-cluster-articles-part1.ts',
  'biorevitalization-cluster-articles-part1.ts',
  'fillers-cluster-articles-part1.ts',
];

const targetSlugs = [
  'botox-sarcină-alăptare-balti',
  'botox-bărbați-particularități-balti',
  'botox-migrenă-dureri-cap-tratament-balti',
  'botox-bruxism-scrâșnit-dinți-balti',
];

let totalRoSlugs = 0;
const foundSlugs = [];

for (const file of files) {
  const content = readFileSync(`./src/blog-data/${file}`, 'utf-8');
  
  // Извлекаем все slugRo
  const matches = content.match(/slugRo:\s*['"`]([^'"`]+)['"`]/g);
  
  if (matches) {
    matches.forEach(match => {
      const slug = match.match(/['"`]([^'"`]+)['"`]/)[1];
      totalRoSlugs++;
      
      if (targetSlugs.includes(slug)) {
        foundSlugs.push({ file, slug });
      }
    });
  }
}

console.log(`📊 Всего румынских slugs: ${totalRoSlugs}\n`);

console.log('🎯 Проверка целевых slugs:\n');

targetSlugs.forEach(slug => {
  const found = foundSlugs.find(f => f.slug === slug);
  if (found) {
    console.log(`✅ НАЙДЕН: ${slug}`);
    console.log(`   Файл: ${found.file}\n`);
  } else {
    console.log(`❌ НЕ НАЙДЕН: ${slug}\n`);
  }
});

// Также проверим registry.ts
console.log('='.repeat(80));
console.log('\n📄 Проверка registry.ts:\n');

const registryContent = readFileSync('./src/blog-data/registry.ts', 'utf-8');

// Проверяем импорты
const hasBotoxImport = registryContent.includes('botoxArticlesPart1');
console.log(`  Импорт botoxArticlesPart1: ${hasBotoxImport ? '✅' : '❌'}`);

// Проверяем, что botoxArticlesPart1 добавлен в BLOG_POSTS
const hasBotoxInPosts = registryContent.match(/BLOG_POSTS[^=]*=[\s\S]*botoxArticlesPart1/);
console.log(`  botoxArticlesPart1 в BLOG_POSTS: ${hasBotoxInPosts ? '✅' : '❌'}`);

console.log('\n' + '='.repeat(80));
console.log('\n✅ Проверка завершена!');
