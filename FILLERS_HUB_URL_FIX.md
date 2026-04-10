# Исправление URL хаба филлеров

**Дата:** 2026-04-08  
**Проблема:** 404 ошибка на `https://meddera.md/ro/blog/conturare-filler-balti-hub`  
**Причина:** Несоответствие между URL в компоненте и slug в registry.ts

---

## 🔍 Диагностика

### Проблема:

URL `https://meddera.md/ro/blog/conturare-filler-balti-hub` возвращал **404 ошибку**.

### Причина:

Несоответствие между компонентом и registry:

| Файл | URL |
|------|-----|
| `FillersHubBody.tsx` (было) | `conturare-filler-balti-hub` ❌ |
| `registry.ts` (правильно) | `conturare-faciala-balti-hub` ✅ |

---

## ✅ Решение

### Исправлен файл:

**`src/blog-data/FillersHubBody.tsx`** (строка 10)

**Было:**
```typescript
const roUrl = `${ORIGIN}/ro/blog/conturare-filler-balti-hub`;
```

**Стало:**
```typescript
const roUrl = `${ORIGIN}/ro/blog/conturare-faciala-balti-hub`;
```

---

## 📊 Детали

### Правильные URLs:

- **RU:** `https://meddera.md/blog/konturnaya-plastika-beltsy-hub` ✅
- **RO:** `https://meddera.md/ro/blog/conturare-faciala-balti-hub` ✅

### Slug в registry.ts:

```typescript
{
  id: 'fillers-hub',
  kind: 'hub',
  clusterId: 'fillers',
  slugRu: 'konturnaya-plastika-beltsy-hub',
  slugRo: 'conturare-faciala-balti-hub', // ✅ Правильный
  publishedAt: '2026-04-13',
}
```

---

## ✅ Проверка

### Сборка:
```bash
npm run build
```
**Результат:** ✅ Успешно

### URL в sitemap:
```
https://meddera.md/ro/blog/conturare-faciala-balti-hub ✅
```

---

## 🚀 Готовность к деплою

**Статус:** ✅ ИСПРАВЛЕНО

После деплоя правильный URL будет работать:
- ✅ `https://meddera.md/ro/blog/conturare-faciala-balti-hub`

Неправильный URL больше не используется:
- ❌ `https://meddera.md/ro/blog/conturare-filler-balti-hub` (удалён)

---

## 📝 Примечания

**Почему возникла ошибка:**

В компоненте `FillersHubBody.tsx` был указан сокращённый вариант URL (`conturare-filler`), в то время как в `registry.ts` использовался полный вариант (`conturare-faciala`).

**Правильное название:**
- **RU:** Контурная пластика → `konturnaya-plastika`
- **RO:** Conturare facială → `conturare-faciala` (не `conturare-filler`)

---

## 📁 Изменённые файлы:

1. `src/blog-data/FillersHubBody.tsx` — исправлен румынский URL

---

## ✅ Заключение

**Проблема решена!**

URL хаба филлеров на румынском языке исправлен и готов к деплою.
