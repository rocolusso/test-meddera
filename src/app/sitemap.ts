import { MetadataRoute } from 'next';
import { getAllPosts, getMaxIndexPage } from '@/blog-data/registry';

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

  // Главная страница блога
  entries.push(
    { url: 'https://meddera.md/blog', lastModified: buildAt, changeFrequency: 'weekly', priority: 0.75 },
    { url: 'https://meddera.md/ro/blog', lastModified: buildAt, changeFrequency: 'weekly', priority: 0.75 }
  );

  // Посты блога
  const posts = getAllPosts().filter(p => p.slugRu && p.slugRo && p.dateModified);
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
    entries.push(
      { url: `https://meddera.md/blog/page/${p}`, lastModified: buildAt, changeFrequency: 'weekly', priority: 0.6 },
      { url: `https://meddera.md/ro/blog/page/${p}`, lastModified: buildAt, changeFrequency: 'weekly', priority: 0.6 }
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
    { url: 'https://meddera.md/', lastModified: buildAt, changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://meddera.md/about', lastModified: buildAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://meddera.md/services', lastModified: buildAt, changeFrequency: 'weekly', priority: 0.88 },
    { url: 'https://meddera.md/contacts', lastModified: buildAt, changeFrequency: 'monthly', priority: 0.84 },
    { url: 'https://meddera.md/ro', lastModified: buildAt, changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://meddera.md/ro/about', lastModified: buildAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://meddera.md/ro/services', lastModified: buildAt, changeFrequency: 'weekly', priority: 0.88 },
    { url: 'https://meddera.md/ro/contacts', lastModified: buildAt, changeFrequency: 'monthly', priority: 0.84 },
  ];

  // Страницы услуг
  const serviceSlugs = [
    'konsultaczyya-dermatokosmetologa-v-belczah',
    'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    'professyonalnaya-chystka-lycza-v-belczah',
    'karboksyterapyya-v-belczah',
    'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    'terapyya-anty-akne-v-belczah',
    'terapyya-protyv-pygmentaczyy-v-belczah',
    'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    'mezoterapyya-dlya-volos-v-belczah',
    'uvelychenye-gub-v-belczah',
    'botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    'byorevytalyzaczyya-v-belczah',
    'konturnaya-plastyka-fylleramy-v-belczah',
    'ynjekczyy-lypolytykov-v-belczah',
  ];

  for (const slug of serviceSlugs) {
    mainPages.push(
      { url: `https://meddera.md/services/${slug}`, lastModified: buildAt, changeFrequency: 'weekly', priority: 0.8 },
      { url: `https://meddera.md/ro/services/${slug}`, lastModified: buildAt, changeFrequency: 'weekly', priority: 0.8 }
    );
  }

  // Объединяем все записи
  const sitemapUrls = [...blogSitemapEntries(buildAt), ...mainPages];

  // Фильтруем на всякий случай (только объекты с url)
  return sitemapUrls.filter(entry => !!entry.url);
}
