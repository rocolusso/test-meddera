import { MetadataRoute } from 'next';

import { getAllPosts, getMaxIndexPage } from '@/blog-data/registry';

function blogSitemapEntries(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: 'https://meddera.md/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: 'https://meddera.md/ro/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ];
  for (const post of getAllPosts()) {
    entries.push(
      {
        url: `https://meddera.md/blog/${post.slugRu}`,
        lastModified: new Date(post.dateModified),
        changeFrequency: 'monthly',
        priority: post.kind === 'hub' ? 0.72 : 0.65,
      },
      {
        url: `https://meddera.md/ro/blog/${post.slugRo}`,
        lastModified: new Date(post.dateModified),
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
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      {
        url: `https://meddera.md/ro/blog/page/${p}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.6,
      },
    );
  }
  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [
    ...blogSitemapEntries(),
    {
      url: 'https://meddera.md/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://meddera.md/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://meddera.md/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: 'https://meddera.md/contacts',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/professyonalnaya-chystka-lycza-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://meddera.md/services/karboksyterapyya-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-protyv-pygmentaczyy-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://meddera.md/services/mezoterapyya-dlya-volos-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/uvelychenye-gub-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/byorevytalyzaczyya-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/konturnaya-plastyka-fylleramy-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/ro/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://meddera.md/ro/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: 'https://meddera.md/ro/contacts',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.84,
    },
    {
      url: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/professyonalnaya-chystka-lycza-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: 'https://meddera.md/services/karboksyterapyya-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/terapyya-protyv-pygmentaczyy-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/mezoterapyya-dlya-volos-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/uvelychenye-gub-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/byorevytalyzaczyya-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/konturnaya-plastyka-fylleramy-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah/ro',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

  ];

  return urls;
}
