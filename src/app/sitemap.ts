import { MetadataRoute } from 'next';
import { getMaxIndexPage, getPostsForIndexPage, getPostsForSitemap } from '@/blog-data/registry';
import { isGoogleReviewsEnabled, REVIEWS_PATH } from '@/lib/google-reviews/config';
import { SERVICE_SLUGS } from '@/lib/service-slugs';

/**
 * Форматируем дату для sitemap (YYYY-MM-DD)
 */
function toSitemapLastMod(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Генерация записей блога
 */
function blogSitemapEntries(buildAt: string): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Дата последней правки в блоге: страницы списка меняются только вместе со статьями
  const posts = getPostsForSitemap();
  const latestBlogDate = posts.map((p) => p.dateModified).sort().pop() ?? buildAt;

  // Главная страница блога
  entries.push(
    { url: 'https://meddera.md/blog', lastModified: latestBlogDate, changeFrequency: 'weekly', priority: 0.75 },
    { url: 'https://meddera.md/ro/blog', lastModified: latestBlogDate, changeFrequency: 'weekly', priority: 0.75 }
  );

  // Посты блога (все из registry: хабы + статьи, в т.ч. Part 2 и inline lip)
  for (const post of posts) {
    const lastMod = toSitemapLastMod(new Date(post.dateModified));
    entries.push(
      {
        url: `https://meddera.md/blog/${post.slugRu}`,
        lastModified: lastMod,
        changeFrequency: 'monthly',
        priority: post.kind === 'hub' ? 0.72 : 0.65,
      },
      {
        url: `https://meddera.md/ro/blog/${post.slugRo}`,
        lastModified: lastMod,
        changeFrequency: 'monthly',
        priority: post.kind === 'hub' ? 0.72 : 0.65,
      }
    );
  }

  // Пагинация
  const maxPage = getMaxIndexPage();
  for (let p = 2; p <= maxPage; p++) {
    // Дата страницы списка = последняя правка среди статей на этой странице
    const pageDate =
      getPostsForIndexPage('ru', p)
        .map((a) => a.dateModified)
        .sort()
        .pop() ?? latestBlogDate;
    entries.push(
      { url: `https://meddera.md/blog/page/${p}`, lastModified: pageDate, changeFrequency: 'weekly', priority: 0.6 },
      { url: `https://meddera.md/ro/blog/page/${p}`, lastModified: pageDate, changeFrequency: 'weekly', priority: 0.6 }
    );
  }

  return entries;
}

/**
 * Полный sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const buildAt = toSitemapLastMod(new Date());

  // Основные страницы сайта
  const mainPages: MetadataRoute.Sitemap = [
    { url: 'https://meddera.md/', changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://meddera.md/about', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://meddera.md/services', changeFrequency: 'weekly', priority: 0.88 },
    { url: 'https://meddera.md/contacts', changeFrequency: 'monthly', priority: 0.84 },
    { url: 'https://meddera.md/ro', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meddera.md/ro/about', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://meddera.md/ro/services', changeFrequency: 'weekly', priority: 0.88 },
    { url: 'https://meddera.md/ro/contacts', changeFrequency: 'monthly', priority: 0.84 },
  ];

  // Страницы отзывов Google: только при включённом флаге GOOGLE_REVIEWS_ENABLED
  if (isGoogleReviewsEnabled()) {
    mainPages.push(
      { url: `https://meddera.md${REVIEWS_PATH.ru}`, changeFrequency: 'monthly', priority: 0.7 },
      { url: `https://meddera.md${REVIEWS_PATH.ro}`, changeFrequency: 'monthly', priority: 0.7 }
    );
  }

  // Страницы услуг

  for (const slug of SERVICE_SLUGS) {
    mainPages.push(
      { url: `https://meddera.md/services/${slug}`, changeFrequency: 'weekly', priority: 0.8 },
      { url: `https://meddera.md/ro/services/${slug}`, changeFrequency: 'weekly', priority: 0.8 }
    );
  }

  // Объединяем все записи
  const sitemapUrls = [...blogSitemapEntries(buildAt), ...mainPages];

  // Фильтруем на всякий случай (только объекты с url)
  return sitemapUrls.filter(entry => !!entry.url);
}
