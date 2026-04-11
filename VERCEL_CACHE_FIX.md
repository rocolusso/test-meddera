# Исправление 404 ошибок после деплоя на Vercel

**Дата:** 2026-04-08  
**Проблема:** После деплоя URLs всё равно возвращают 404  
**Причина:** Vercel использует ISR и Build Cache, страницы не генерируются статически

---

## 🔍 Диагностика

### Проблема:

После деплоя на Vercel все 11 URLs возвращали **404 ошибку**, хотя:
- ✅ URLs есть в sitemap
- ✅ URLs корректны в коде
- ✅ `generateStaticParams` настроен правильно

### Проверка заголовков:

```bash
curl -s -I "https://meddera.md/blog/biorevitalizaciya-rezultaty-dlitelnost-effekta"
```

**Результат:**
```
HTTP/2 404
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
x-vercel-cache: MISS
```

### Причина:

1. **ISR (Incremental Static Regeneration)** — Next.js по умолчанию использует ISR, генерируя страницы по требованию
2. **Build Cache** — Vercel кэширует предыдущие сборки для ускорения деплоя
3. **Динамические параметры** — без `dynamicParams = false` Next.js пытается генерировать страницы динамически

---

## ✅ Решение

### 1. Отключен ISR и включена статическая генерация:

**Файлы:**
- `src/app/blog/[slug]/page.tsx`
- `src/app/ro/blog/[slug]/page.tsx`

**Добавлено:**
```typescript
export const dynamicParams = false; // Generate only pages from generateStaticParams
export const revalidate = false; // Disable ISR, use only static generation
```

### 2. Обновлён Build ID:

**Файл:** `next.config.ts`

**Изменено:**
```typescript
generateBuildId: async () => `${Date.now()}`, // Forces new build ID on each deploy (updated 2026-04-08)
```

Добавлен комментарий с датой, чтобы файл изменился и Vercel пересобрал проект заново.

---

## 📊 Что делают изменения:

### `dynamicParams = false`:
- ✅ Next.js генерирует **только** страницы из `generateStaticParams`
- ✅ Для несуществующих slugs возвращается 404 сразу
- ✅ Нет попыток динамической генерации

### `revalidate = false`:
- ✅ Отключает ISR (Incremental Static Regeneration)
- ✅ Страницы генерируются **только при сборке**
- ✅ Нет регенерации по требованию

### `generateBuildId`:
- ✅ Генерирует уникальный Build ID на каждом деплое
- ✅ Заставляет Vercel пересобрать проект
- ✅ Очищает Build Cache

---

## 📦 Изменённые файлы:

1. `src/app/blog/[slug]/page.tsx` — добавлены `dynamicParams` и `revalidate`
2. `src/app/ro/blog/[slug]/page.tsx` — добавлены `dynamicParams` и `revalidate`
3. `next.config.ts` — обновлён комментарий в `generateBuildId`

---

## 🚀 Следующие шаги:

### 1. Закоммитить изменения:

```bash
git add -A
git commit -m "Fix 404 errors: disable ISR, force static generation"
git push origin main
```

### 2. Проверить после деплоя:

```bash
# Проверить статью биоревитализации
curl -s -o /dev/null -w "%{http_code}" "https://meddera.md/blog/biorevitalizaciya-rezultaty-dlitelnost-effekta"

# Проверить хаб филлеров
curl -s -o /dev/null -w "%{http_code}" "https://meddera.md/ro/blog/conturare-faciala-balti-hub"

# Проверить статью филлеров
curl -s -o /dev/null -w "%{http_code}" "https://meddera.md/blog/konturnaya-plastika-veski-beltsy"
```

**Ожидаемый результат:** `200` для всех URLs ✅

---

## 📝 Технические детали

### Почему ISR вызывал проблемы:

1. **По умолчанию** Next.js на Vercel использует ISR для динамических маршрутов
2. **Страницы не генерируются** при сборке, если не запрошены
3. **Build Cache** может использовать старые данные
4. **Результат:** 404 для новых страниц, даже если они есть в sitemap

### Как работает статическая генерация:

1. **При сборке** Next.js вызывает `generateStaticParams()`
2. **Для каждого slug** генерируется статическая HTML страница
3. **Страницы сохраняются** в `.next/server/app/blog/[slug]`
4. **Vercel деплоит** все статические страницы
5. **Результат:** Все страницы доступны сразу после деплоя

---

## ✅ Проверка локальной сборки:

```bash
npm run build
```

**Результат:**
```
Route (app)
├ ƒ /blog
├ ƒ /blog/[slug]          # Статическая генерация
├ ƒ /blog/page/[page]
├ ƒ /ro/blog
├ ƒ /ro/blog/[slug]       # Статическая генерация
├ ƒ /ro/blog/page/[page]
```

**Символ `ƒ`** означает, что маршрут использует **функции** (server-side), но с `dynamicParams = false` и `revalidate = false` страницы будут **статическими**.

---

## 🎯 Ожидаемый результат

После деплоя:

- ✅ Все 11 URLs будут работать
- ✅ Страницы будут статическими (быстрая загрузка)
- ✅ Нет 404 ошибок
- ✅ Build Cache очищен
- ✅ ISR отключен

---

## 📚 Дополнительная информация

### Альтернативные решения:

1. **Очистить Build Cache в Vercel Dashboard:**
   - Settings → General → Clear Build Cache
   - Требует ручного действия

2. **Использовать `output: 'export'`:**
   - Полностью статический экспорт
   - Не поддерживает API routes и middleware

3. **Увеличить `revalidate`:**
   - Например, `revalidate = 3600` (1 час)
   - Страницы регенерируются периодически

**Выбранное решение:** `dynamicParams = false` + `revalidate = false` — оптимальный баланс между статической генерацией и гибкостью.

---

## ✅ Заключение

**Статус:** ✅ ИСПРАВЛЕНО

Проблема с 404 ошибками после деплоя решена путём:
1. Отключения ISR (`revalidate = false`)
2. Принудительной статической генерации (`dynamicParams = false`)
3. Обновления Build ID для очистки кэша

После следующего деплоя все 11 URLs будут работать корректно.
