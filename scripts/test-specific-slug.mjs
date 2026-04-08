import { readFileSync } from 'fs';

// Читаем botox-cluster-articles-part1.ts
const content = readFileSync('./src/blog-data/botox-cluster-articles-part1.ts', 'utf-8');

// Ищем статью про беременность
const lines = content.split('\n');
let found = false;
let article = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('botoks-beremennost-grudnoe-vskarmlivanie') || 
      line.includes('botox-sarcină-alăptare-balti')) {
    found = true;
    
    // Читаем следующие 15 строк
    const block = lines.slice(i, i + 15).join('\n');
    
    // Извлекаем данные
    const idMatch = block.match(/id:\s*['"`]([^'"`]+)['"`]/);
    const slugRuMatch = block.match(/slugRu:\s*['"`]([^'"`]+)['"`]/);
    const slugRoMatch = block.match(/slugRo:\s*['"`]([^'"`]+)['"`]/);
    const bodyKeyMatch = block.match(/bodyKey:\s*['"`]([^'"`]+)['"`]/);
    
    if (idMatch) article.id = idMatch[1];
    if (slugRuMatch) article.slugRu = slugRuMatch[1];
    if (slugRoMatch) article.slugRo = slugRoMatch[1];
    if (bodyKeyMatch) article.bodyKey = bodyKeyMatch[1];
    
    break;
  }
}

console.log('🔍 Проверка статьи: Ботокс при беременности\n');
console.log('='.repeat(80));

if (found) {
  console.log('✅ Статья найдена в метаданных:\n');
  console.log(`  ID: ${article.id}`);
  console.log(`  slugRu: ${article.slugRu}`);
  console.log(`  slugRo: ${article.slugRo}`);
  console.log(`  bodyKey: ${article.bodyKey}`);
  
  // Проверяем на пробелы
  console.log('\n📋 Проверка на пробелы:');
  
  const hasSpaceInId = article.id && article.id.match(/\s/);
  const hasSpaceInSlugRu = article.slugRu && article.slugRu.match(/\s/);
  const hasSpaceInSlugRo = article.slugRo && article.slugRo.match(/\s/);
  
  console.log(`  ID: ${hasSpaceInId ? '❌ Есть пробел' : '✅ Нет пробелов'}`);
  console.log(`  slugRu: ${hasSpaceInSlugRu ? '❌ Есть пробел' : '✅ Нет пробелов'}`);
  console.log(`  slugRo: ${hasSpaceInSlugRo ? '❌ Есть пробел' : '✅ Нет пробелов'}`);
  
  // Проверяем контент
  console.log('\n📄 Проверка контента:');
  
  const contentFile = './src/blog-data/botox-article-content.ts';
  const contentData = readFileSync(contentFile, 'utf-8');
  
  const hasContent = contentData.includes(`'${article.id}':`);
  console.log(`  Контент для '${article.id}': ${hasContent ? '✅ Найден' : '❌ Не найден'}`);
  
  // Формируем правильные URLs
  console.log('\n🌐 Правильные URLs:');
  console.log(`  RU: https://meddera.md/blog/${article.slugRu}`);
  console.log(`  RO: https://meddera.md/ro/blog/${article.slugRo}`);
  
} else {
  console.log('❌ Статья не найдена в метаданных!');
}

console.log('\n' + '='.repeat(80));
console.log('✅ Проверка завершена!');
