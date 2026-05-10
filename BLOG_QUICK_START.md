# Быстрый старт: работа над блогом Meddera

## Текущий статус (10.05.2026)

**В коде**

- **6** рубрик топ-6 с хабами и статьями в `registry`.
- **306** статей (`kind: 'article'`), **6** хабов → **312** URL со slug для RU/RO блога при сборке.
- **Part 2 (статьи 26–50)** для всех шести кластеров подключён; у дерматолога и ботокса по **50** статей; у губ / мезотерапии лица / биоревита / филлеров по **49** статей в файлах кластера + **10** отдельных статей по губам в `registry`.
- Сборка Next.js **16**: в `package.json` уже есть **`next build --webpack`** (Turbopack по умолчанию конфликтует с кастомным webpack).

**Ссылки в Dev**

- В телах статей переключатель RU/RO использует **`blogPathRu` / `blogPathRo`** из `registry.ts` (относительные пути), а не `https://meddera.md`, чтобы на `localhost` не уводило на прод.

---

## Как продолжить в Cursor

**Шаг 1.** Прикрепить контекст:

```text
@BLOG_TODO.md @BLOG_PROGRESS.md
```

**Шаг 2.** Сформулировать задачу, например:

- Добавить **Part 3** (статьи 51–75) для выбранной рубрики.
- Начать **новую рубрику** из фазы 2 в `BLOG_TODO.md`.
- Прогнать проверки и пересобрать URL-лист Part 2.

**Шаг 3.** После правок локально:

```bash
npm run verify:blog-content
npm run build
```

---

## Структура данных (актуальное ядро)

### Метаданные (пример топ-6)

```text
src/blog-data/
  dermatologist-cluster-articles-part1.ts
  dermatologist-cluster-articles-part2.ts
  botox-cluster-articles-part1.ts
  botox-cluster-articles-part2.ts
  lips-cluster-articles-part1.ts
  lips-cluster-articles-part2.ts
  mesotherapy-face-cluster-articles-part1.ts
  mesotherapy-face-cluster-articles-part2.ts
  biorevitalization-cluster-articles-part1.ts
  biorevitalization-cluster-articles-part2.ts
  fillers-cluster-articles-part1.ts
  fillers-cluster-articles-part2.ts
```

### Контент

Часть рубрик разнесена на несколько файлов (`part2`, `part3` и т.д.). Итоговый объект собирается в корневом файле рубрики (например `fillers-article-content.ts` импортирует part2 и part3).

### Компоненты тел и хабов

```text
src/blog-data/
  DermatologistHubBody.tsx / DermatologistArticleBody.tsx
  BotoxHubBody.tsx / BotoxArticleBody.tsx
  LipAugmentationHubBody.tsx / LipArticleBody.tsx
  LipClusterArticleBody.tsx   ← fallback / отдельный контент
  MesotherapyFaceHubBody.tsx / MesotherapyFaceArticleBody.tsx
  BiorevitalizationHubBody.tsx / BiorevitalizationArticleBody.tsx
  FillersHubBody.tsx / FillersArticleBody.tsx
```

Рендер тела поста: **`src/blog-data/render-post-body.tsx`** (`renderBlogPostBody`), не дублировать логику в `page.tsx`.

---

## Полезные команды

| Команда | Назначение |
|---------|------------|
| `npm run dev` | Dev (Turbopack в скрипте) |
| `npm run build` | Production build (**webpack**) |
| `npm run verify:blog-content` | Соответствие id метаданных и ключей контента |
| `npm run generate:blog-urls` | Обновить `generated/blog-article-final-urls.txt` (**только Part 2**, 150 статей) |
| `node scripts/check-registry.mjs` | Реестр / проверки из скрипта (если используете в проекте) |

---

## Примеры запросов к AI

1. «Добавь Part 3 для филлеров, статьи 51–75, метаданные + контент RU/RO, обнови `registry` и `render-post-body` при новом `bodyKey`.»
2. «Проверь дубликаты `slugRo` после добавления статей.»
3. «Перегенерируй `generated/blog-article-final-urls.txt` и прогони verify + build.»

---

## Перед большими изменениями

1. Коммит текущего состояния.
2. По желанию копия `src/blog-data/` с датой в имени.
3. После правок: `verify:blog-content` и `build`.

---

**Файлы для контекста в чате:** `BLOG_TODO.md`, `BLOG_PROGRESS.md`, при работе со slug — `src/blog-data/registry.ts`.

**Версия:** 2.0 · **Дата:** 10.05.2026
