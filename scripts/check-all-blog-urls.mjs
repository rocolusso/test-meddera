import { readFileSync } from 'fs';
import { join } from 'path';

console.log('🔍 ПОЛНАЯ ПРОВЕРКА ВСЕХ BLOG URLs НА ПРОБЕЛЫ\n');
console.log('='.repeat(80));

const metadataFiles = [
  'dermatologist-cluster-articles-part1.ts',
  'botox-cluster-articles-part1.ts',
  'lips-cluster-articles-part1.ts',
  'mesotherapy-face-cluster-articles-part1.ts',
  'biorevitalization-cluster-articles-part1.ts',
  'fillers-cluster-articles-part1.ts',
];

let totalChecked = 0;
let totalIssues = 0;
const issues = [];

console.log('📋 Проверяемые файлы:');
metadataFiles.forEach(f => console.log(`  - ${f}`));
console.log('');

for (const file of metadataFiles) {
  const filePath = join('./src/blog-data', file);
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  console.log(`\n📄 Проверка: ${file}`);
  
  let fileIssues = 0;
  
  lines.forEach((line, index) => {
    // Проверяем id
    const idMatch = line.match(/id:\s*['"`]([^'"`]+)['"`]/);
    if (idMatch) {
      totalChecked++;
      const id = idMatch[1];
      
      // Проверяем на пробелы (обычные и неразрывные)
      if (id.match(/\s/)) {
        totalIssues++;
        fileIssues++;
        issues.push({
          file,
          line: index + 1,
          type: 'id',
          value: id,
          problem: `Contains space: "${id}"`
        });
        console.log(`  ❌ Line ${index + 1}: id with space: "${id}"`);
      }
    }
    
    // Проверяем slugRu
    const slugRuMatch = line.match(/slugRu:\s*['"`]([^'"`]+)['"`]/);
    if (slugRuMatch) {
      totalChecked++;
      const slug = slugRuMatch[1];
      
      if (slug.match(/\s/)) {
        totalIssues++;
        fileIssues++;
        issues.push({
          file,
          line: index + 1,
          type: 'slugRu',
          value: slug,
          problem: `Contains space: "${slug}"`
        });
        console.log(`  ❌ Line ${index + 1}: slugRu with space: "${slug}"`);
      }
    }
    
    // Проверяем slugRo
    const slugRoMatch = line.match(/slugRo:\s*['"`]([^'"`]+)['"`]/);
    if (slugRoMatch) {
      totalChecked++;
      const slug = slugRoMatch[1];
      
      // Проверяем только на обычные пробелы, не диакритику
      if (slug.match(/\s/)) {
        totalIssues++;
        fileIssues++;
        issues.push({
          file,
          line: index + 1,
          type: 'slugRo',
          value: slug,
          problem: `Contains space: "${slug}"`
        });
        console.log(`  ❌ Line ${index + 1}: slugRo with space: "${slug}"`);
      }
    }
  });
  
  if (fileIssues === 0) {
    console.log(`  ✅ Пробелов не найдено`);
  } else {
    console.log(`  🚨 Найдено проблем: ${fileIssues}`);
  }
}

// Проверяем registry.ts для хабов
console.log(`\n📄 Проверка: registry.ts (хабы)`);
const registryPath = './src/blog-data/registry.ts';
const registryContent = readFileSync(registryPath, 'utf-8');
const registryLines = registryContent.split('\n');

let registryIssues = 0;

registryLines.forEach((line, index) => {
  // Проверяем id хабов
  const idMatch = line.match(/id:\s*['"`]([^'"`]+)['"`]/);
  if (idMatch && idMatch[1].includes('hub')) {
    totalChecked++;
    const id = idMatch[1];
    
    if (id.match(/\s/)) {
      totalIssues++;
      registryIssues++;
      issues.push({
        file: 'registry.ts',
        line: index + 1,
        type: 'hub-id',
        value: id,
        problem: `Contains space: "${id}"`
      });
      console.log(`  ❌ Line ${index + 1}: hub id with space: "${id}"`);
    }
  }
  
  // Проверяем slugRu хабов
  const slugRuMatch = line.match(/slugRu:\s*['"`]([^'"`]+hub[^'"`]*)['"`]/);
  if (slugRuMatch) {
    totalChecked++;
    const slug = slugRuMatch[1];
    
    if (slug.match(/\s/)) {
      totalIssues++;
      registryIssues++;
      issues.push({
        file: 'registry.ts',
        line: index + 1,
        type: 'hub-slugRu',
        value: slug,
        problem: `Contains space: "${slug}"`
      });
      console.log(`  ❌ Line ${index + 1}: hub slugRu with space: "${slug}"`);
    }
  }
  
  // Проверяем slugRo хабов
  const slugRoMatch = line.match(/slugRo:\s*['"`]([^'"`]+hub[^'"`]*)['"`]/);
  if (slugRoMatch) {
    totalChecked++;
    const slug = slugRoMatch[1];
    
    if (slug.match(/\s/)) {
      totalIssues++;
      registryIssues++;
      issues.push({
        file: 'registry.ts',
        line: index + 1,
        type: 'hub-slugRo',
        value: slug,
        problem: `Contains space: "${slug}"`
      });
      console.log(`  ❌ Line ${index + 1}: hub slugRo with space: "${slug}"`);
    }
  }
});

if (registryIssues === 0) {
  console.log(`  ✅ Пробелов в хабах не найдено`);
} else {
  console.log(`  🚨 Найдено проблем в хабах: ${registryIssues}`);
}

console.log('\n' + '='.repeat(80));
console.log('\n📊 ИТОГОВАЯ СТАТИСТИКА:\n');
console.log(`  Проверено элементов: ${totalChecked}`);
console.log(`  Найдено проблем: ${totalIssues}`);

if (totalIssues > 0) {
  console.log('\n🚨 СПИСОК ВСЕХ ПРОБЛЕМ:\n');
  
  const groupedByFile = {};
  issues.forEach(issue => {
    if (!groupedByFile[issue.file]) {
      groupedByFile[issue.file] = [];
    }
    groupedByFile[issue.file].push(issue);
  });
  
  Object.keys(groupedByFile).forEach(file => {
    console.log(`\n📄 ${file}:`);
    groupedByFile[file].forEach(({ line, type, value, problem }) => {
      console.log(`  ❌ Line ${line} [${type}]: ${problem}`);
    });
  });
  
  console.log('\n⚠️  ТРЕБУЕТСЯ ИСПРАВЛЕНИЕ!');
} else {
  console.log('\n✅ ВСЕ ПРОВЕРКИ ПРОЙДЕНЫ!');
  console.log('   Пробелов в URLs не найдено.');
}

console.log('\n' + '='.repeat(80));
console.log('\n✅ Проверка завершена!');
