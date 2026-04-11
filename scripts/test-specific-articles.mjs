import { BLOG_POSTS } from '../src/blog-data/registry.ts';
import { FILLERS_ARTICLE_CONTENT } from '../src/blog-data/fillers-article-content.ts';

const testArticles = [
  'konturnaya-plastika-ugolkov-rta',
  'konturnaya-plastika-skul-podborodka',
];

console.log('🔍 Проверка конкретных статей\n');

for (const id of testArticles) {
  console.log(`\n📄 ID: ${id}`);
  
  // Проверка метаданных
  const metadata = BLOG_POSTS.find(p => p.id === id);
  if (metadata) {
    console.log(`   ✅ Метаданные найдены`);
    console.log(`   - slugRu: ${metadata.slugRu}`);
    console.log(`   - slugRo: ${metadata.slugRo}`);
  } else {
    console.log(`   ❌ Метаданные НЕ найдены`);
  }
  
  // Проверка контента
  const content = FILLERS_ARTICLE_CONTENT[id];
  if (content) {
    console.log(`   ✅ Контент найден`);
    console.log(`   - Секций RU: ${content.sectionsRu?.length || 0}`);
    console.log(`   - Секций RO: ${content.sectionsRo?.length || 0}`);
  } else {
    console.log(`   ❌ Контент НЕ найден`);
  }
}

console.log('\n' + '='.repeat(60));
console.log(`\nВсего ключей в FILLERS_ARTICLE_CONTENT: ${Object.keys(FILLERS_ARTICLE_CONTENT).length}`);
console.log('\nПервые 10 ключей:');
Object.keys(FILLERS_ARTICLE_CONTENT).slice(0, 10).forEach((key, i) => {
  console.log(`   ${i + 1}. ${key}`);
});
