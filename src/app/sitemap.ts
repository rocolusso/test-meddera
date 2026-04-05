import { MetadataRoute } from 'next';

import { getAllPosts, getMaxIndexPage } from '@/blog-data/registry';

/**
 * Sitemap lastmod as W3C date (YYYY-MM-DD). Stricter validators often reject
 * ISO datetime with milliseconds (e.g. .583Z) that Next serializes from Date.
 */
function toSitemapLastMod(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function blogSitemapEntries(buildAt: string): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: 'https://meddera.md/blog',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: 'https://meddera.md/ro/blog',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ];
  for (const post of getAllPosts()) {
    const postLastMod = toSitemapLastMod(new Date(post.dateModified));
    entries.push(
      {
        url: `https://meddera.md/blog/${post.slugRu}`,
        lastModified: postLastMod,
        changeFrequency: 'monthly',
        priority: post.kind === 'hub' ? 0.72 : 0.65,
      },
      {
        url: `https://meddera.md/ro/blog/${post.slugRo}`,
        lastModified: postLastMod,
        changeFrequency: 'monthly',
        priority: post.kind === 'hub' ? 0.72 : 0.65,
      },
    );
  }
  const maxPage = getMaxIndexPage();
  for (let p = 2; p <= maxPage; p += 1) {
    entries.push(
      {
        url: `https://meddera.md/blog/page/${p}`,
        lastModified: buildAt,
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      {
        url: `https://meddera.md/ro/blog/page/${p}`,
        lastModified: buildAt,
        changeFrequency: 'weekly',
        priority: 0.6,
      },
    );
  }
  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const buildAt = toSitemapLastMod(new Date());
  const urls: MetadataRoute.Sitemap = [
    ...blogSitemapEntries(buildAt),
    {
      url: 'https://meddera.md/',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://meddera.md/about',
      lastModified: buildAt,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://meddera.md/services',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: 'https://meddera.md/contacts',
      lastModified: buildAt,
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
      lastModified: buildAt,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/professyonalnaya-chystka-lycza-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://meddera.md/services/karboksyterapyya-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-protyv-pygmentaczyy-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://meddera.md/services/mezoterapyya-dlya-volos-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/uvelychenye-gub-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/byorevytalyzaczyya-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/konturnaya-plastyka-fylleramy-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/ro/about',
      lastModified: buildAt,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://meddera.md/ro/services',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: 'https://meddera.md/ro/contacts',
      lastModified: buildAt,
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/professyonalnaya-chystka-lycza-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://meddera.md/services/karboksyterapyya-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-protyv-pygmentaczyy-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/mezoterapyya-dlya-volos-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/uvelychenye-gub-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/byorevytalyzaczyya-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/konturnaya-plastyka-fylleramy-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah/ro',
      lastModified: buildAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

  ];

  return urls;
}
