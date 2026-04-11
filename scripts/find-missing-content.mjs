import { readFileSync } from 'fs';

console.log('🔍 Поиск статей без контента\n');
console.log('='.repeat(80));

const clusters = [
  {
    name: 'Dermatologist',
    metadataFile: './src/blog-data/dermatologist-cluster-articles-part1.ts',
    contentFiles: ['./src/blog-data/dermatologist-article-content.ts'],
  },
  {
    name: 'Botox',
    metadataFile: './src/blog-data/botox-cluster-articles-part1.ts',
    contentFiles: ['./src/blog-data/botox-article-content.ts'],
  },
  {
    name: 'Lips',
    metadataFile: './src/blog-data/lips-cluster-articles-part1.ts',
    contentFiles: ['./src/blog-data/lips-article-content.ts'],
  },
  {
    name: 'Mesotherapy Face',
    metadataFile: './src/blog-data/mesotherapy-face-cluster-articles-part1.ts',
    contentFiles: ['./src/blog-data/mesotherapy-face-article-content.ts'],
  },
  {
    name: 'Biorevitalization',
    metadataFile: './src/blog-data/biorevitalization-cluster-articles-part1.ts',
    contentFiles: [
      './src/blog-data/biorevitalization-article-content.ts',
      './src/blog-data/biorevitalization-article-content-part2.ts',
    ],
  },
  {
    name: 'Fillers',
    metadataFile: './src/blog-data/fillers-cluster-articles-part1.ts',
    contentFiles: [
      './src/blog-data/fillers-article-content.ts',
      './src/blog-data/fillers-article-content-part2.ts',
    ],
  },
];

let totalMissing = 0;
const missingByCluster = [];

for (const cluster of clusters) {
  console.log(`\n📁 ${cluster.name}:`);
  
  // Извлекаем все ID из метаданных
  const metadataContent = readFileSync(cluster.metadataFile, 'utf-8');
  const metadataIds = [];
  const regex = /id:\s*'([a-z-]+)'/g;
  let match;
  
  while ((match = regex.exec(metadataContent)) !== null) {
    metadataIds.push(match[1]);
  }
  
  // Извлекаем все ID из контента
  const contentIds = new Set();
  
  for (const contentFile of cluster.contentFiles) {
    try {
      const contentFileContent = readFileSync(contentFile, 'utf-8');
      const contentRegex = /^\s*'([a-z-]+)':\s*\{$/gm;
      let contentMatch;
      
      while ((contentMatch = contentRegex.exec(contentFileContent)) !== null) {
        contentIds.add(contentMatch[1]);
      }
    } catch (e) {
      // Файл может не существовать
    }
  }
  
  console.log(`   Метаданных: ${metadataIds.length}`);
  console.log(`   Контента: ${contentIds.size}`);
  
  // Находим ID без контента
  const missing = metadataIds.filter(id => !contentIds.has(id));
  
  if (missing.length > 0) {
    console.log(`   ❌ Без контента: ${missing.length}`);
    totalMissing += missing.length;
    
    console.log('\n   Список статей без контента:');
    missing.forEach((id, i) => {
      console.log(`      ${i + 1}. ${id}`);
    });
    
    missingByCluster.push({
      cluster: cluster.name,
      missing: missing.length,
      ids: missing,
    });
  } else {
    console.log(`   ✅ Все статьи имеют контент`);
  }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 ИТОГО:`);
console.log(`   Всего статей без контента: ${totalMissing}\n`);

if (totalMissing > 0) {
  console.log('❌ КРИТИЧЕСКАЯ ПРОБЛЕМА!\n');
  console.log('Статьи без контента по рубрикам:\n');
  
  missingByCluster.forEach(({ cluster, missing, ids }) => {
    console.log(`${cluster}: ${missing} статей`);
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('\n⚠️  ЭТО ПРИЧИНА 404 ОШИБОК!\n');
  console.log('Когда пользователь открывает URL статьи без контента,');
  console.log('компонент возвращает null, и Next.js показывает 404.\n');
  console.log('Решение: создать контент для всех статей.');
} else {
  console.log('✅ ВСЕ СТАТЬИ ИМЕЮТ КОНТЕНТ!');
}

console.log('\n' + '='.repeat(80));
