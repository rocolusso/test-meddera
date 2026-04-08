# URLs для Google Indexing API

**Дата:** 2026-04-08  
**Источник:** Production sitemap.xml  
**Файл:** `scripts/indexing-api-urls.js`

---

## 📊 Статистика

**Всего URLs для индексации:** 326

### Разбивка по категориям:

| Категория | Количество | Описание |
|-----------|------------|----------|
| Главные страницы блога | 2 | `/blog`, `/ro/blog` |
| Хабы | 12 | 6 рубрик × 2 языка |
| Дерматолог | 50 | 25 статей × 2 языка |
| Ботокс | 50 | 25 статей × 2 языка |
| Мезотерапия лица | 48 | 24 статьи × 2 языка |
| Биоревитализация | 48 | 24 статьи × 2 языка |
| Филлеры | 48 | 24 статьи × 2 языка |
| Губы | 48 | 24 статьи × 2 языка |
| **ИТОГО** | **326** | **Все URLs блога** |

---

## 📁 Структура массива

Массив `urlsToUpdate` содержит все URLs в следующем порядке:

1. **Главные страницы блога** (2 URLs)
2. **Хабы** (12 URLs) — по 2 языка для каждой рубрики
3. **Статьи по рубрикам** (312 URLs):
   - Дерматолог: 50 URLs
   - Ботокс: 50 URLs
   - Мезотерапия лица: 48 URLs
   - Биоревитализация: 48 URLs
   - Филлеры: 48 URLs
   - Губы: 48 URLs

---

## 🔧 Использование

### Импорт в Node.js:

```javascript
const { urlsToUpdate, stats } = require('./scripts/indexing-api-urls.js');

console.log(`Всего URLs: ${urlsToUpdate.length}`);
console.log(`Хабов: ${stats.hubs}`);
```

### Пример использования с Google Indexing API:

```javascript
const { google } = require('googleapis');
const { urlsToUpdate } = require('./scripts/indexing-api-urls.js');

async function submitToIndexingAPI() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  for (const url of urlsToUpdate) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Submitted: ${url}`);
    } catch (error) {
      console.error(`❌ Error submitting ${url}:`, error.message);
    }
  }
}

submitToIndexingAPI();
```

---

## ✅ Проверка URLs

Все URLs проверены на:

- ✅ Корректный домен: `meddera.md`
- ✅ Корректный протокол: `https://`
- ✅ Транслитерация румынских символов (ASCII only)
- ✅ Соответствие production sitemap

---

## 📝 Примечания

1. **Pagination URLs не включены** — страницы пагинации (`/blog/page/2`, `/blog/page/3`, и т.д.) не включены в массив, так как они автоматически индексируются через главные страницы блога.

2. **Только blog URLs** — массив содержит только URLs блога. Главные страницы сайта (`/`, `/about`, `/services`, `/contacts`) и страницы услуг не включены.

3. **Транслитерация применена** — все румынские URLs используют транслитерированные slugs (без диакритических символов).

4. **Актуальность** — массив соответствует production sitemap от 2026-04-08.

---

## 🚀 Рекомендации по индексации

### Приоритет отправки:

1. **Первая волна (высокий приоритет):**
   - Главные страницы блога (2 URLs)
   - Хабы (12 URLs)
   - **Итого:** 14 URLs

2. **Вторая волна (средний приоритет):**
   - Дерматолог (50 URLs)
   - Ботокс (50 URLs)
   - **Итого:** 100 URLs

3. **Третья волна (стандартный приоритет):**
   - Губы (48 URLs)
   - Мезотерапия лица (48 URLs)
   - Биоревитализация (48 URLs)
   - Филлеры (48 URLs)
   - **Итого:** 192 URLs

### Лимиты Google Indexing API:

- **Quota:** 200 requests/day (default)
- **Рекомендация:** Отправлять по 200 URLs в день
- **Время полной индексации:** ~2 дня (326 URLs ÷ 200/day)

---

## 📄 Связанные файлы

- `scripts/indexing-api-urls.js` — массив URLs (этот файл)
- `ROMANIAN_SLUGS_VERIFICATION.md` — проверка транслитерации
- `FIX_404_SUMMARY.md` — исправление 404 ошибок
- `production-sitemap.xml` — исходный sitemap

---

## ✅ Готовность

**Статус:** ✅ ГОТОВО К ИСПОЛЬЗОВАНИЮ

Массив `urlsToUpdate` содержит все 326 URLs блога и готов для отправки в Google Indexing API.
