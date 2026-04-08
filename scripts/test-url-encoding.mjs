console.log('🔍 Тест URL encoding для румынских символов\n');
console.log('='.repeat(80));

const testCases = [
  {
    name: 'Беременность и ГВ',
    original: 'botox-sarcină-alăptare-balti',
    encoded: 'botox-sarcin%C4%83-al%C4%83ptare-balti',
  },
  {
    name: 'Мужчины',
    original: 'botox-bărbați-particularități-balti',
    encoded: 'botox-b%C4%83rba%C8%9Bi-particularit%C4%83%C8%9Bi-balti',
  },
  {
    name: 'Мигрень',
    original: 'botox-migrenă-dureri-cap-tratament-balti',
    encoded: 'botox-migren%C4%83-dureri-cap-tratament-balti',
  },
  {
    name: 'Бруксизм',
    original: 'botox-bruxism-scrâșnit-dinți-balti',
    encoded: 'botox-bruxism-scr%C3%A2%C8%99nit-din%C8%9Bi-balti',
  },
];

console.log('📋 Тестовые случаи:\n');

testCases.forEach(({ name, original, encoded }) => {
  console.log(`${name}:`);
  console.log(`  Оригинал: ${original}`);
  console.log(`  Encoded:  ${encoded}`);
  
  // Декодируем
  const decoded = decodeURIComponent(encoded);
  console.log(`  Decoded:  ${decoded}`);
  
  // Проверяем совпадение
  const match = decoded === original;
  console.log(`  Совпадение: ${match ? '✅' : '❌'}`);
  
  if (!match) {
    console.log(`  ⚠️  Разница найдена!`);
    console.log(`     Ожидалось: "${original}"`);
    console.log(`     Получено:  "${decoded}"`);
    
    // Побайтовое сравнение
    for (let i = 0; i < Math.max(original.length, decoded.length); i++) {
      if (original[i] !== decoded[i]) {
        console.log(`     Позиция ${i}: "${original[i]}" (${original.charCodeAt(i)}) !== "${decoded[i]}" (${decoded.charCodeAt(i)})`);
      }
    }
  }
  
  console.log('');
});

console.log('='.repeat(80));

// Проверяем, что в метаданных
console.log('\n📄 Проверка метаданных:\n');

import { readFileSync } from 'fs';

const content = readFileSync('./src/blog-data/botox-cluster-articles-part1.ts', 'utf-8');

testCases.forEach(({ name, original }) => {
  const found = content.includes(original);
  console.log(`${name}: ${found ? '✅ Найден' : '❌ Не найден'} в метаданных`);
  
  if (found) {
    // Извлекаем точную строку
    const regex = new RegExp(`slugRo:\\s*['"\`]${original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"\`]`);
    const match = content.match(regex);
    if (match) {
      console.log(`   Точное совпадение: ✅`);
    }
  }
});

console.log('\n' + '='.repeat(80));
console.log('\n✅ Тест завершён!');
