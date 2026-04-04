# Блог Meddera: хаб, спицы (кластер) и реестр

Подробное руководство по устройству блога в этом репозитории: **pillar/hub** (страница-кластер), **spoke** (статьи вокруг темы), двуязычие RU/RO, статическая генерация и SEO.

---

## 1. Идея: хаб и спицы

- **Хаб (hub)** — широкая «столбовая» страница по теме кластера (`kind: 'hub'`). Даёт контекст, внутренние ссылки, обзор процедуры. В индексе блога показывается отдельным блоком «кластер», а не как строка в списке статей.
- **Спицы (articles)** — узкие материалы (`kind: 'article'`), привязанные к тому же **кластеру** через `clusterId`. В списке «Все статьи» попадают только они, с пагинацией.
- **Кластер** — логическая группа: один хаб + N статей с одинаковым `clusterId` (например, `'lips'`).

Схема:

```text
clusterId: "lips"
├── hub   → /blog/uvelichenie-gub-beltsy  |  /ro/blog/marire-buzelor-balti
└── articles → /blog/<slugRu>             |  /ro/blog/<slugRo>
```

---

## 2. Карта файлов

| Назначение | Путь |
|------------|------|
| Типы поста и `bodyKey` | `src/blog-data/types.ts` |
| Реестр всех URL и метаданных | `src/blog-data/registry.ts` |
| Маппинг `bodyKey` → React-тело | `src/blog-data/render-post-body.tsx` |
| Тело хаба (RU/RO в одном файле) | `src/blog-data/LipAugmentationHubBody.tsx` |
| Тело спиц (шаблон + данные) | `src/blog-data/LipClusterArticleBody.tsx` |
| Тексты спиц по `id` поста | `src/blog-data/lip-cluster-article-content.ts` |
| Индекс блога (список + блок кластера) | `src/components/blog/BlogIndexView.tsx` |
| RU: главная страница блога | `src/app/blog/page.tsx` |
| RU: пагинация | `src/app/blog/page/[page]/page.tsx` |
| RU: пост по slug | `src/app/blog/[slug]/page.tsx` |
| RO: зеркала тех же маршрутов | `src/app/ro/blog/...` |
| JSON-LD хаба | `src/lib/jsonld/lip-augmentation-hub.ts` |
| JSON-LD статей | `src/lib/jsonld/blog-article.ts` |
| Sitemap (в т.ч. блог) | `src/app/sitemap.ts` |
| Редиректы `/blog/page/1` и т.п. | `next.config.ts` |

---

## 3. Модель данных (`BlogPost`)

Определение в `src/blog-data/types.ts`:

- **`id`** — стабильный ключ в коде и в `lip-cluster-article-content.ts` (для спиц).
- **`kind`**: `'hub'` | `'article'`.
- **`clusterId`**: строка кластера или `null` (для будущих одиночных постов без хаба).
- **`slugRu` / `slugRo`** — сегменты URL **для каждой локали отдельно** (разные slug — норма для SEO).
- **`publishedAt` / `dateModified`** — строки в формате **`YYYY-MM-DD`** (удобно для сортировки и `<time dateTime>`). Все страницы отдаются одним деплоем; даты задают **порядок в ленте** и разметку, но **не скрывают** материалы до «наступления даты» (если понадобится отложенная публикация — это отдельная доработка в `getPostsForIndexPage` / sitemap).
- **Мета**: `title*`, `description*`, `excerpt*` — для `<title>`, description, карточки в списке.
- **`bodyKey`** — какой компонент рендерит тело (см. ниже).

### Зарезервированный slug

Сегмент **`page`** занят под пагинацию (`/blog/page/2`). В **`slugRu` и `slugRo` нельзя использовать значение `page`** — маршрут `[slug]` для `page` отдаёт 404.

---

## 4. Реестр (`registry.ts`)

- Массив **`BLOG_POSTS`** — единственный источник правды для URL, метаданных и выборок.
- **`POSTS_PER_PAGE`** — сколько статей (`kind: 'article'`) на одной странице индекса.
- **`ORIGIN`** — канонический домен для canonical и JSON-LD.

### Важные функции

| Функция | Поведение |
|---------|-----------|
| `getAllPosts()` | все записи |
| `getPostBySlug(slug, locale)` | пост по slug текущей локали |
| `getArticlesSorted()` | только `article`, сортировка по `publishedAt` **по убыванию** (свежее выше) |
| `getPostsForIndexPage(locale, page)` | срез статей для страницы списка |
| `getMaxIndexPage()` | число страниц пагинации (минимум 1) |
| `getHubForCluster(clusterId)` | хаб кластера (для блока на индексе и ссылки «к гиду» в спицах) |
| `getAllSlugParams(locale)` | аргументы для `generateStaticParams` у `[slug]` |

Хаб в списке «Все статьи» **не участвует** — только `kind === 'article'`.

---

## 5. Тело страницы: `bodyKey` и рендер

В `render-post-body.tsx` по `post.bodyKey` выбирается компонент:

1. **`lip-augmentation-hub`** → `LipAugmentationHubBody`  
   - Содержимое полностью в TSX (RU/RO ветки).  
   - Для нового хаба другой темы обычно добавляют новый `bodyKey` и новый компонент (или обобщают шаблон).

2. **`lip-cluster-article`** → `LipClusterArticleBody`  
   - Принимает `post` и `locale`.  
   - Текст тянет из **`LIP_CLUSTER_ARTICLE_CONTENT[post.id]`** в `lip-cluster-article-content.ts`.  
   - Если ключа нет — вернётся `null`, страница уйдёт в **404** (проверяйте соответствие `id` в реестре и в объекте контента).

### Добавить новую спицу в существующий кластер

1. Добавить объект в **`BLOG_POSTS`** с `kind: 'article'`, тем же `clusterId`, уникальными `slugRu`/`slugRo`, `bodyKey: 'lip-cluster-article'`.
2. Добавить запись в **`LIP_CLUSTER_ARTICLE_CONTENT`** с тем же **`id`**, структура: `sectionsRu` / `sectionsRo`, внутри массив `{ h2, paragraphs: string[] }`.
3. Прогнать **`npm run build`** — новые пути попадут в SSG через `generateStaticParams`.

### Добавить новый хаб + новый кластер

1. Расширить union **`BlogBodyKey`** в `types.ts`.
2. Создать компонент тела в `src/blog-data/` (по образцу `LipAugmentationHubBody.tsx`).
3. Добавить ветку в **`render-post-body.tsx`**.
4. Запись в **`BLOG_POSTS`**: `kind: 'hub'`, свой `clusterId`, уникальные slug.
5. JSON-LD: либо переиспользовать паттерн из `lip-augmentation-hub.ts`, либо новый хелпер; подключить в **`blog/[slug]/page.tsx`** и **`ro/blog/[slug]/page.tsx`** (сейчас хаб губ жёстко завязан на `bodyKey === 'lip-augmentation-hub'` и отдельная ветка для `post.kind === 'article'` с `blogArticleJsonLd`).
6. Обновить **`BlogIndexView`**: сейчас блок кластера заточен под **`getHubForCluster('lips')`**. Для второго кластера понадобится либо перечисление кластеров, либо цикл по уникальным `clusterId` с хабами.

---

## 6. Маршруты и пагинация

| URL RU | Назначение |
|--------|------------|
| `/blog` | Индекс, страница 1 |
| `/blog/page/2` … | Следующие страницы списка статей |
| `/blog/<slug>` | Хаб или статья |

RO — то же под префиксом **`/ro/blog`**.

- **`generateStaticParams`** для `[page]` генерирует только страницы **начиная с 2**, если `getMaxIndexPage() >= 2`.
- Запрос страницы **`< 2`** для сегмента `page` редиректит на `/blog` (и аналогично RO).

В **`next.config.ts`** настроены постоянные редиректы:

- `/blog/page/1` → `/blog`
- `/blog/page` и `/blog/page/` → `/blog`  
(и зеркала для `/ro/blog/...`)

---

## 7. Индекс блога (`BlogIndexView`)

- Хлебные крошки и заголовок «Блог».
- Если для `clusterId === 'lips'` найден хаб — показывается **зелёный блок** со ссылками на RU и RO версии гида.
- Ниже — список **только статей** с датой (`publishedAt`), заголовком и excerpt.
- Пагинация «Назад / Вперёд» при `maxPage > 1`.

Заголовки в списке отображаются **без** суффикса ` | Meddera` (обрезается в компоненте).

---

## 8. Страница поста `[slug]`

Файлы: `src/app/blog/[slug]/page.tsx`, `src/app/ro/blog/[slug]/page.tsx`.

- **`slug === 'page'`** → `notFound()`.
- Метаданные: `title`, `description`, **canonical**, **`alternates.languages`** (hreflang RU / RO / x-default) — на уровне **страницы**, не root layout.
- **JSON-LD**:
  - хаб губ: `lipAugmentationHubJsonLd` (`MedicalWebPage` и др.);
  - статьи: `blogArticleJsonLd` (`Article` + `BreadcrumbList`).
- Тело через **`renderBlogPostBody`**; если `null` → 404.

---

## 9. Sitemap

В `src/app/sitemap.ts` функция `blogSitemapEntries()`:

- добавляет `/blog` и `/ro/blog`;
- для **каждого** поста в реестре — URL **и** RU, **и** RO (`/blog/{slugRu}`, `/ro/blog/{slugRo}`);
- для пагинации — `/blog/page/n` и `/ro/blog/page/n` при `n >= 2` и `n <= getMaxIndexPage()`.

`lastModified` для постов берётся из **`dateModified`**.

---

## 10. Связь с услугами и внешними ссылками

Ссылки на хаб с лендингов услуг задаются **вручную** в соответствующих страницах сервисов (например, увеличение губ → URL хаба RU/RO). При смене slug в реестре их нужно обновить.

---

## 11. Чеклист перед мержем

- [ ] Уникальные `slugRu` и `slugRo`, ни один не равен `page`.
- [ ] Для `lip-cluster-article` есть блок в **`LIP_CLUSTER_ARTICLE_CONTENT`** с тем же `id`.
- [ ] `publishedAt` / `dateModified` в формате `YYYY-MM-DD`.
- [ ] RU и RO тексты согласованы по смыслу (YMYL: без дозировок, гарантий результата, самодиагностики вместо консультации).
- [ ] `npm run build` без ошибок.
- [ ] При добавлении второго кластера — продумать **`BlogIndexView`** и JSON-LD для нового хаба.

---

## 12. Быстрые команды

```bash
npm run build    # проверка SSG и TypeScript
npm run dev      # локальная проверка маршрутов /blog и /ro/blog
```

Если нужна **отложенная публикация** (не показывать статьи до `publishedAt`), это делается фильтрацией в `getPostsForIndexPage`, при необходимости — в sitemap и в JSON-LD; в текущей версии проекта такого фильтра нет.
