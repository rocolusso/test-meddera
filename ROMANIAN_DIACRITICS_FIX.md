# Исправление 404 для румынских URL с диакритикой

**Дата:** 2026-04-08  
**Проблема:** URLs с румынскими диакритическими символами (ă, â, î, ș, ț) возвращали 404 на production  
**Причина:** Next.js/Vercel не генерирует статические страницы для URL с non-ASCII символами

---

## 🔍 Диагностика

### Проверенные URLs (все возвращали 404):

1. `https://meddera.md/ro/blog/botox-sarcină-alăptare-balti` ❌
2. `https://meddera.md/ro/blog/botox-bărbați-particularități-balti` ❌
3. `https://meddera.md/ro/blog/botox-migrenă-dureri-cap-tratament-balti` ❌
4. `https://meddera.md/ro/blog/botox-bruxism-scrâșnit-dinți-balti` ❌
5. `https://meddera.md/ro/blog/conturare-pomeți-barbie-balti` ❌
6. `https://meddera.md/ro/blog/conturare-pomeți-balti` ❌

### Статистика диакритических символов в проекте:

- **ă** — 116 раз
- **ț** — 105 раз
- **â** — 34 раза
- **ș** — 20 раз
- **î** — 17 раз

**Итого:** 292 использования в 146 румынских slugs

---

## ✅ Решение

### Транслитерация румынских символов в URL

Применена транслитерация **только для `slugRo`** (URL-friendly версия):

| Символ | Транслитерация |
|--------|----------------|
| ă      | a              |
| â      | a              |
| î      | i              |
| ș      | s              |
| ț      | t              |

### Что изменено:

- ✅ **6 slugRo** транслитерированы в 2 файлах:
  - `botox-cluster-articles-part1.ts` (4 изменения)
  - `fillers-cluster-articles-part1.ts` (2 изменения)

### Что НЕ изменено:

- ✅ **Заголовки** (`titleRo`) — оригинальные румынские символы сохранены
- ✅ **Описания** (`descriptionRo`) — оригинальные румынские символы сохранены
- ✅ **Контент** статей — оригинальные румынские символы сохранены
- ✅ **Excerpts** (`excerptRo`) — оригинальные румынские символы сохранены

---

## 📊 Детали изменений

### Botox (4 статьи):

1. `botox-sarcină-alăptare-balti` → `botox-sarcina-alaptare-balti`
2. `botox-bărbați-particularități-balti` → `botox-barbati-particularitati-balti`
3. `botox-migrenă-dureri-cap-tratament-balti` → `botox-migrena-dureri-cap-tratament-balti`
4. `botox-bruxism-scrâșnit-dinți-balti` → `botox-bruxism-scrasnit-dinti-balti`

### Fillers (2 статьи):

5. `conturare-pomeți-barbie-balti` → `conturare-pometi-barbie-balti`
6. `conturare-pomeți-balti` → `conturare-pometi-balti`

---

## 🚀 Новые URL (после деплоя):

1. `https://meddera.md/ro/blog/botox-sarcina-alaptare-balti` ✅
2. `https://meddera.md/ro/blog/botox-barbati-particularitati-balti` ✅
3. `https://meddera.md/ro/blog/botox-migrena-dureri-cap-tratament-balti` ✅
4. `https://meddera.md/ro/blog/botox-bruxism-scrasnit-dinti-balti` ✅
5. `https://meddera.md/ro/blog/conturare-pometi-barbie-balti` ✅
6. `https://meddera.md/ro/blog/conturare-pometi-balti` ✅

---

## 📁 Изменённые файлы:

1. `src/blog-data/botox-cluster-articles-part1.ts`
2. `src/blog-data/fillers-cluster-articles-part1.ts`
3. `src/utils/transliterate.ts` (новый файл)
4. `scripts/transliterate-slugs.mjs` (новый скрипт)

---

## 🔧 Технические детали

### Созданные утилиты:

1. **`src/utils/transliterate.ts`**
   - `transliterateRomanian(text: string)` — транслитерация румынских символов
   - `hasRomanianDiacritics(text: string)` — проверка наличия диакритики

2. **`scripts/transliterate-slugs.mjs`**
   - Автоматическая транслитерация всех `slugRo` в метаданных
   - Генерация отчёта `TRANSLITERATION_REPORT.md`

---

## ✅ Проверка

### Сборка:
```bash
npm run build
```
**Результат:** ✅ Успешно

### Sitemap:
- **До:** 396 URLs (включая битые с диакритикой)
- **После:** 396 URLs (все с ASCII-символами)

---

## 📝 Следующие шаги

1. ✅ **Код изменён** — транслитерация применена
2. ✅ **Проект пересобран** — `npm run build` выполнен
3. ⏳ **Деплой на Vercel** — `git push origin main`
4. ⏳ **Проверка production** — убедиться, что все 6 URLs работают
5. ⏳ **Обновить Google Search Console** — отправить новый sitemap

---

## 🎯 Результат

- **Проблема:** 6 румынских URLs с диакритикой возвращали 404
- **Решение:** Транслитерация диакритических символов в ASCII
- **Статус:** ✅ Исправлено, готово к деплою
- **SEO:** Оригинальные румынские символы сохранены в заголовках и контенте

---

## 📚 Связанные файлы

- `TRANSLITERATION_REPORT.md` — детальный отчёт о транслитерации
- `src/utils/transliterate.ts` — утилита для транслитерации
- `scripts/transliterate-slugs.mjs` — скрипт для массовой транслитерации
