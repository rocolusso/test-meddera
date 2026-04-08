import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';

console.log('🔍 Сравнение production sitemap с текущим build\n');

// Читаем production sitemap (XML)
const productionXml = readFileSync('./production-sitemap.xml', 'utf-8');

// Извлекаем все URLs из production sitemap
const productionUrls = new Set();
const locMatches = productionXml.match(/<loc>(.*?)<\/loc>/g);
if (locMatches) {
  locMatches.forEach(match => {
    const url = match.replace(/<\/?loc>/g, '');
    productionUrls.add(url);
  });
}

console.log(`📋 Production sitemap: ${productionUrls.size} URLs\n`);

// Читаем текущий build (current-urls.txt)
const currentUrlsText = readFileSync('./current-urls.txt', 'utf-8');
const currentUrls = currentUrlsText.split('\n').filter(line => line.trim() && line.startsWith('https://'));

console.log(`📋 Текущий build: ${currentUrls.length} URLs\n`);

// Находим URLs, которые есть в build, но нет в production
const missingInProduction = [];
currentUrls.forEach(url => {
  if (!productionUrls.has(url)) {
    missingInProduction.push(url);
  }
});

console.log('='.repeat(80));
console.log('🚨 НЕДОСТАЮЩИЕ URLs В PRODUCTION SITEMAP');
console.log('='.repeat(80));
console.log(`\nВсего недостающих: ${missingInProduction.length} URLs\n`);

// Группируем по типу
const grouped = {
  mainPages: [],
  services: [],
  blogHubs: [],
  blogArticles: [],
  pagination: [],
};

missingInProduction.forEach(url => {
  if (url.includes('/services/')) {
    grouped.services.push(url);
  } else if (url.includes('-hub')) {
    grouped.blogHubs.push(url);
  } else if (url.includes('/blog/page/')) {
    grouped.pagination.push(url);
  } else if (url.includes('/blog/')) {
    grouped.blogArticles.push(url);
  } else {
    grouped.mainPages.push(url);
  }
});

// Выводим по группам
if (grouped.mainPages.length > 0) {
  console.log(`📄 ОСНОВНЫЕ СТРАНИЦЫ (${grouped.mainPages.length}):`);
  grouped.mainPages.forEach(url => console.log(`  ${url}`));
  console.log('');
}

if (grouped.services.length > 0) {
  console.log(`🏥 УСЛУГИ (${grouped.services.length}):`);
  grouped.services.forEach(url => console.log(`  ${url}`));
  console.log('');
}

if (grouped.blogHubs.length > 0) {
  console.log(`📚 ХАБЫ БЛОГА (${grouped.blogHubs.length}):`);
  grouped.blogHubs.forEach(url => console.log(`  ${url}`));
  console.log('');
}

if (grouped.blogArticles.length > 0) {
  console.log(`📝 СТАТЬИ БЛОГА (${grouped.blogArticles.length}):`);
  
  // Группируем статьи по рубрикам
  const articlesByRubric = {};
  grouped.blogArticles.forEach(url => {
    let rubric = 'Другие';
    
    if (url.includes('dermatolog')) rubric = 'Дерматолог';
    else if (url.includes('botoks') || url.includes('botox')) rubric = 'Ботокс';
    else if (url.includes('uvelichenie-gub') || url.includes('marire-buze')) rubric = 'Увеличение губ';
    else if (url.includes('mezoterapiya-lica') || url.includes('mezoterapie-fata')) rubric = 'Мезотерапия лица';
    else if (url.includes('biorevitalizaciya') || url.includes('biorevitalizare')) rubric = 'Биоревитализация';
    else if (url.includes('konturnaya-plastika') || url.includes('conturare')) rubric = 'Филлеры';
    
    if (!articlesByRubric[rubric]) articlesByRubric[rubric] = [];
    articlesByRubric[rubric].push(url);
  });
  
  Object.keys(articlesByRubric).sort().forEach(rubric => {
    console.log(`\n  ${rubric} (${articlesByRubric[rubric].length} статей):`);
    articlesByRubric[rubric].slice(0, 5).forEach(url => {
      console.log(`    ${url}`);
    });
    if (articlesByRubric[rubric].length > 5) {
      console.log(`    ... еще ${articlesByRubric[rubric].length - 5} URLs`);
    }
  });
  console.log('');
}

if (grouped.pagination.length > 0) {
  console.log(`📄 ПАГИНАЦИЯ (${grouped.pagination.length}):`);
  grouped.pagination.slice(0, 5).forEach(url => console.log(`  ${url}`));
  if (grouped.pagination.length > 5) {
    console.log(`  ... еще ${grouped.pagination.length - 5} URLs`);
  }
  console.log('');
}

// Сохраняем в файл
const output = [
  '# НЕДОСТАЮЩИЕ URLs В PRODUCTION SITEMAP',
  `# Дата: ${new Date().toISOString().slice(0, 10)}`,
  `# Всего: ${missingInProduction.length} URLs`,
  '',
  '# URLs из текущего build, которых НЕТ в production sitemap',
  '# Эти URLs нужно добавить на production после деплоя',
  '',
  ...missingInProduction,
];

writeFileSync('./missing-in-production.txt', output.join('\n'));

console.log('='.repeat(80));
console.log(`💾 Сохранено в: missing-in-production.txt`);
console.log('='.repeat(80));

// Также найдём URLs, которые есть в production, но нет в build (устаревшие)
const extraInProduction = [];
productionUrls.forEach(url => {
  if (!currentUrls.includes(url)) {
    extraInProduction.push(url);
  }
});

if (extraInProduction.length > 0) {
  console.log(`\n⚠️  ВНИМАНИЕ: В production есть ${extraInProduction.length} URLs, которых нет в текущем build:`);
  extraInProduction.forEach(url => console.log(`  ${url}`));
  
  const extraOutput = [
    '# УСТАРЕВШИЕ URLs В PRODUCTION SITEMAP',
    `# Дата: ${new Date().toISOString().slice(0, 10)}`,
    `# Всего: ${extraInProduction.length} URLs`,
    '',
    '# URLs, которые есть в production, но отсутствуют в текущем build',
    '# Возможно, они были удалены или переименованы',
    '',
    ...extraInProduction,
  ];
  
  writeFileSync('./extra-in-production.txt', extraOutput.join('\n'));
  console.log(`\n💾 Список устаревших URLs сохранён в: extra-in-production.txt`);
}

console.log('\n✅ Готово!');
