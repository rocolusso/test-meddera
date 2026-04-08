# Отчёт о транслитерации румынских slugs

Дата: 2026-04-08T17:49:57.715Z

## Статистика

- **Всего изменено:** 6 slugs
- **Файлов обработано:** 6

## Детали изменений

1. **botox-cluster-articles-part1.ts**
   - Оригинал: `botox-bruxism-scrâșnit-dinți-balti`
   - Транслитерация: `botox-bruxism-scrasnit-dinti-balti`

2. **botox-cluster-articles-part1.ts**
   - Оригинал: `botox-migrenă-dureri-cap-tratament-balti`
   - Транслитерация: `botox-migrena-dureri-cap-tratament-balti`

3. **botox-cluster-articles-part1.ts**
   - Оригинал: `botox-sarcină-alăptare-balti`
   - Транслитерация: `botox-sarcina-alaptare-balti`

4. **botox-cluster-articles-part1.ts**
   - Оригинал: `botox-bărbați-particularități-balti`
   - Транслитерация: `botox-barbati-particularitati-balti`

5. **fillers-cluster-articles-part1.ts**
   - Оригинал: `conturare-pomeți-barbie-balti`
   - Транслитерация: `conturare-pometi-barbie-balti`

6. **fillers-cluster-articles-part1.ts**
   - Оригинал: `conturare-pomeți-balti`
   - Транслитерация: `conturare-pometi-balti`


## Маппинг символов

- ă → a
- â → a
- î → i
- ș → s
- ț → t

## Примечания

- Транслитерация применена только к `slugRo` (URL-friendly версия)
- Оригинальные румынские символы сохранены в `titleRo`, `descriptionRo`, `excerptRo`
- Контент статей не изменён
- После транслитерации необходимо:
  1. Пересобрать проект: `npm run build`
  2. Задеплоить на Vercel: `git push`
  3. Обновить sitemap в Google Search Console
