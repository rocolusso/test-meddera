import { readFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 Проверка slugs на наличие пробелов\n');
console.log('='.repeat(80));

const metadataFiles = [
  'dermatologist-cluster-articles-part1.ts',
  'botox-cluster-articles-part1.ts',
  'lips-cluster-articles-part1.ts',
  'mesotherapy-face-cluster-articles-part1.ts',
  'biorevitalization-cluster-articles-part1.ts',
  'fillers-cluster-articles-part1.ts',
];

let totalIssues = 0;
const issues = [];

for (const file of metadataFiles) {
  const filePath = join('./src/blog-data', file);
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Проверяем slugRu и slugRo на пробелы внутри значения
    const slugRuMatch = line.match(/slugRu:\s*['"`]([^'"`]+)['"`]/);
    const slugRoMatch = line.match(/slugRo:\s*['"`]([^'"`]+)['"`]/);
    
    if (slugRuMatch) {
      const slug = slugRuMatch[1];
      if (slug.includes(' ')) {
        totalIssues++;
        issues.push({
          file,
          line: index + 1,
          type: 'slugRu',
          slug,
          problem: 'Contains space'
        });
      }
    }
    
    if (slugRoMatch) {
      const slug = slugRoMatch[1];
      // Проверяем только на обычные пробелы, не диакритику
      if (slug.match(/\s/)) {
        totalIssues++;
        issues.push({
          file,
          line: index + 1,
          type: 'slugRo',
          slug,
          problem: 'Contains space'
        });
      }
    }
    
    // Проверяем id на пробелы
    const idMatch = line.match(/id:\s*['"`]([^'"`]+)['"`]/);
    if (idMatch) {
      const id = idMatch[1];
      if (id.includes(' ')) {
        totalIssues++;
        issues.push({
          file,
          line: index + 1,
          type: 'id',
          slug: id,
          problem: 'Contains space'
        });
      }
    }
  });
}

if (issues.length === 0) {
  console.log('✅ Пробелов в slugs не найдено!');
} else {
  console.log(`🚨 Найдено проблем: ${issues.length}\n`);
  
  issues.forEach(({ file, line, type, slug, problem }) => {
    console.log(`❌ ${file}:${line}`);
    console.log(`   ${type}: "${slug}"`);
    console.log(`   Проблема: ${problem}\n`);
  });
}

console.log('='.repeat(80));
console.log(`\n📊 ИТОГО: ${totalIssues} проблем${totalIssues === 0 ? '' : 'ы'}`);
console.log('\n✅ Проверка завершена!');
