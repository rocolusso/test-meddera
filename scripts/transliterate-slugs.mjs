import { readFileSync, writeFileSync } from 'fs';

console.log('🔄 Транслитерация румынских slugs\n');
console.log('='.repeat(80));

const ROMANIAN_DIACRITICS_MAP = {
  'ă': 'a',
  'â': 'a',
  'î': 'i',
  'ș': 's',
  'ț': 't',
  'Ă': 'A',
  'Â': 'A',
  'Î': 'I',
  'Ș': 'S',
  'Ț': 'T',
};

function transliterateRomanian(text) {
  return text.replace(/[ăâîșțĂÂÎȘȚ]/g, (char) => ROMANIAN_DIACRITICS_MAP[char] || char);
}

// Находим все файлы с метаданными
const files = [
  './src/blog-data/dermatologist-cluster-articles-part1.ts',
  './src/blog-data/botox-cluster-articles-part1.ts',
  './src/blog-data/lips-cluster-articles-part1.ts',
  './src/blog-data/mesotherapy-face-cluster-articles-part1.ts',
  './src/blog-data/biorevitalization-cluster-articles-part1.ts',
  './src/blog-data/fillers-cluster-articles-part1.ts',
];

let totalChanges = 0;
const changes = [];

for (const file of files) {
  console.log(`\n📄 Обработка: ${file}`);
  
  let content = readFileSync(file, 'utf-8');
  let fileChanges = 0;
  
  // Находим все slugRo
  const regex = /slugRo:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const originalSlug = match[1];
    const transliteratedSlug = transliterateRomanian(originalSlug);
    
    if (originalSlug !== transliteratedSlug) {
      // Заменяем slug
      content = content.replace(
        `slugRo: '${originalSlug}'`,
        `slugRo: '${transliteratedSlug}'`
      );
      content = content.replace(
        `slugRo: "${originalSlug}"`,
        `slugRo: "${transliteratedSlug}"`
      );
      content = content.replace(
        `slugRo: \`${originalSlug}\``,
        `slugRo: \`${transliteratedSlug}\``
      );
      
      fileChanges++;
      totalChanges++;
      changes.push({
        file: file.replace('./src/blog-data/', ''),
        original: originalSlug,
        transliterated: transliteratedSlug,
      });
      
      console.log(`  ✏️  ${originalSlug}`);
      console.log(`      → ${transliteratedSlug}`);
    }
  }
  
  if (fileChanges > 0) {
    writeFileSync(file, content, 'utf-8');
    console.log(`  ✅ Сохранено: ${fileChanges} изменений`);
  } else {
    console.log(`  ℹ️  Изменений не требуется`);
  }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 Итого изменено: ${totalChanges} slugs`);

// Сохраняем отчёт
const report = `# Отчёт о транслитерации румынских slugs

Дата: ${new Date().toISOString()}

## Статистика

- **Всего изменено:** ${totalChanges} slugs
- **Файлов обработано:** ${files.length}

## Детали изменений

${changes.map((c, i) => `${i + 1}. **${c.file}**
   - Оригинал: \`${c.original}\`
   - Транслитерация: \`${c.transliterated}\`
`).join('\n')}

## Маппинг символов

- ă → a
- â → a
- î → i
- ș → s
- ț → t

## Примечания

- Транслитерация применена только к \`slugRo\` (URL-friendly версия)
- Оригинальные румынские символы сохранены в \`titleRo\`, \`descriptionRo\`, \`excerptRo\`
- Контент статей не изменён
- После транслитерации необходимо:
  1. Пересобрать проект: \`npm run build\`
  2. Задеплоить на Vercel: \`git push\`
  3. Обновить sitemap в Google Search Console
`;

writeFileSync('./TRANSLITERATION_REPORT.md', report, 'utf-8');

console.log('\n✅ Отчёт сохранён: TRANSLITERATION_REPORT.md');
console.log('\n🚀 Следующие шаги:');
console.log('   1. Проверьте изменения: git diff');
console.log('   2. Пересоберите проект: npm run build');
console.log('   3. Задеплойте: git add . && git commit && git push');
