import type { BlogClusterId, BlogLocale, BlogPost } from '@/blog-data/types';
import { RELATED_ARTICLES } from '@/blog-data/related-articles';
import { dermatologistArticlesPart1 } from '@/blog-data/dermatologist-cluster-articles-part1';
import { dermatologistArticlesPart2 } from '@/blog-data/dermatologist-cluster-articles-part2';
import { botoxArticlesPart1 } from '@/blog-data/botox-cluster-articles-part1';
import { botoxArticlesPart2 } from '@/blog-data/botox-cluster-articles-part2';
import { lipsArticlesPart1 } from '@/blog-data/lips-cluster-articles-part1';
import { lipsArticlesPart2 } from '@/blog-data/lips-cluster-articles-part2';
import { mesotherapyFaceArticlesPart1 } from '@/blog-data/mesotherapy-face-cluster-articles-part1';
import { mesotherapyFaceArticlesPart2 } from '@/blog-data/mesotherapy-face-cluster-articles-part2';
import { biorevitalizationArticlesPart1 } from '@/blog-data/biorevitalization-cluster-articles-part1';
import { biorevitalizationArticlesPart2 } from '@/blog-data/biorevitalization-cluster-articles-part2';
import { fillersArticlesPart1 } from '@/blog-data/fillers-cluster-articles-part1';
import { fillersArticlesPart2 } from '@/blog-data/fillers-cluster-articles-part2';

export const POSTS_PER_PAGE = 10;

/**
 * Сколько последних статей показывать в футере.
 * Берутся из всех записей с `kind === 'article'`, сортировка: дата публикации (сначала новые), при равной дате — `dateModified`, затем `id`.
 */
export const FOOTER_RECENT_ARTICLE_COUNT = 6;

export const ORIGIN = 'https://meddera.md';

/** Relative paths for `<Link>` / client navigation. Keep `ORIGIN` for canonical metadata and JSON-LD only. */
export function blogPathRu(slugRu: string): string {
  return `/blog/${slugRu}`;
}

export function blogPathRo(slugRo: string): string {
  return `/ro/blog/${slugRo}`;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'dermatologist-hub',
    kind: 'hub',
    clusterId: 'dermatologist',
    slugRu: 'dermatolog-beltsy-hub',
    slugRo: 'dermatolog-balti-hub',
    publishedAt: '2026-04-08',
    dateModified: '2026-10-17',
    titleRu: 'Дерматолог в Бельцах: гид по консультации и лечению | Meddera',
    titleRo: 'Dermatolog în Bălți: ghid despre consultație și tratament | Meddera',
    descriptionRu:
      'Дерматолог в Бельцах (Meddera): когда нужна консультация, какие заболевания лечим, как подготовиться к приёму. Информационный материал.',
    descriptionRo:
      'Dermatolog în Bălți (Meddera): când este necesară consultația, ce afecțiuni tratăm, cum să vă pregătiți pentru vizită. Material informativ.',
    excerptRu: 'Гид по консультации дерматолога: показания, диагностика, лечение в Meddera.',
    excerptRo: 'Ghid despre consultația dermatologului: indicații, diagnostic, tratament la Meddera.',
    bodyKey: 'dermatologist-hub',
  },
  ...dermatologistArticlesPart1,
  ...dermatologistArticlesPart2,
  {
    id: 'botox-hub',
    kind: 'hub',
    clusterId: 'botox',
    slugRu: 'botoks-beltsy-hub',
    slugRo: 'botox-balti-hub',
    publishedAt: '2026-04-09',
    dateModified: '2026-10-17',
    titleRu: 'Ботокс в Бельцах: гид по инъекциям для омоложения | Meddera',
    titleRo: 'Botox în Bălți: ghid despre injecții pentru întinerire | Meddera',
    descriptionRu:
      'Ботокс в Бельцах (Meddera): показания, этапы процедуры, сроки действия, осложнения и запись на консультацию к врачу. Информационный материал.',
    descriptionRo:
      'Botox în Bălți (Meddera): indicații, etapele procedurii, durata efectului, complicații și programare la consultația medicului. Material informativ.',
    excerptRu: 'Гид по инъекциям ботокса: показания, процедура, результаты в Meddera.',
    excerptRo: 'Ghid despre injecțiile cu botox: indicații, procedură, rezultate la Meddera.',
    bodyKey: 'botox-hub',
  },
  ...botoxArticlesPart1,
  ...botoxArticlesPart2,
  {
    id: 'mesotherapy-face-hub',
    kind: 'hub',
    clusterId: 'mesotherapy-face',
    slugRu: 'mezoterapiya-lica-beltsy-hub',
    slugRo: 'mezoterapie-fata-balti-hub',
    publishedAt: '2026-04-11',
    dateModified: '2026-10-17',
    titleRu: 'Мезотерапия лица в Бельцах: гид по процедуре | Meddera',
    titleRo: 'Mezoterapia feței în Bălți: ghid despre procedură | Meddera',
    descriptionRu:
      'Мезотерапия лица в Бельцах (Meddera): показания, препараты, результаты и запись на консультацию. Информационный материал.',
    descriptionRo:
      'Mezoterapia feței în Bălți (Meddera): indicații, preparate, rezultate și programare la consultație. Material informativ.',
    excerptRu: 'Гид по мезотерапии лица: показания, препараты, результаты в Meddera.',
    excerptRo: 'Ghid despre mezoterapia feței: indicații, preparate, rezultate la Meddera.',
    bodyKey: 'mesotherapy-face-hub',
  },
  ...mesotherapyFaceArticlesPart1,
  ...mesotherapyFaceArticlesPart2,
  {
    id: 'biorevitalization-hub',
    kind: 'hub',
    clusterId: 'biorevitalization',
    slugRu: 'biorevitalizaciya-beltsy-hub',
    slugRo: 'biorevitalizare-balti-hub',
    publishedAt: '2026-04-12',
    dateModified: '2026-10-17',
    titleRu: 'Биоревитализация в Бельцах: гид по процедуре | Meddera',
    titleRo: 'Biorevitalizarea în Bălți: ghid despre procedură | Meddera',
    descriptionRu:
      'Биоревитализация в Бельцах (Meddera): показания, препараты, результаты и запись на консультацию. Информационный материал.',
    descriptionRo:
      'Biorevitalizarea în Bălți (Meddera): indicații, preparate, rezultate, curs de proceduri și programare la consultație. Material informativ.',
    excerptRu: 'Гид по биоревитализации: показания, препараты, результаты в Meddera.',
    excerptRo: 'Ghid despre biorevitalizare: indicații, preparate, rezultate la Meddera.',
    bodyKey: 'biorevitalization-hub',
  },
  ...biorevitalizationArticlesPart1,
  ...biorevitalizationArticlesPart2,
  {
    id: 'fillers-hub',
    kind: 'hub',
    clusterId: 'fillers',
    slugRu: 'konturnaya-plastika-beltsy-hub',
    slugRo: 'conturare-faciala-balti-hub',
    publishedAt: '2026-04-13',
    dateModified: '2026-10-17',
    titleRu: 'Контурная пластика в Бельцах: гид по процедуре | Meddera',
    titleRo: 'Conturarea facială în Bălți: ghid despre procedură | Meddera',
    descriptionRu:
      'Контурная пластика лица в Бельцах (Meddera): показания, зоны коррекции, результаты и запись на консультацию. Информационный материал.',
    descriptionRo:
      'Conturarea facială în Bălți (Meddera): indicații, zone de corecție, rezultate și programare la consultație. Material informativ.',
    excerptRu: 'Гид по контурной пластике: показания, зоны коррекции, результаты в Meddera.',
    excerptRo: 'Ghid despre conturarea facială: indicații, zone de corecție, rezultate la Meddera.',
    bodyKey: 'fillers-hub',
  },
  ...fillersArticlesPart1,
  ...fillersArticlesPart2,
  {
    id: 'lip-augmentation-hub',
    kind: 'hub',
    clusterId: 'lips',
    slugRu: 'uvelichenie-gub-beltsy',
    slugRo: 'marire-buzelor-balti',
    publishedAt: '2026-04-02',
    dateModified: '2026-10-17',
    titleRu: 'Увеличение губ в Бельцах: гид по процедуре | Meddera',
    titleRo: 'Mărirea buzelor în Bălți: ghid despre procedură | Meddera',
    descriptionRu:
      'Увеличение губ в Бельцах (Meddera): показания, этапы, уход после процедуры, возможные осложнения и запись на консультацию. Информационный материал.',
    descriptionRo:
      'Mărirea buzelor în Bălți (Meddera): indicații, etape, îngrijirea după procedură, complicații posibile și programare la consultație. Material informativ.',
    excerptRu: 'Гид по контурной пластике губ: этапы, безопасность, запись в Meddera.',
    excerptRo: 'Ghid despre conturarea buzelor: etape, siguranță, programare la Meddera.',
    bodyKey: 'lip-augmentation-hub',
  },
  ...lipsArticlesPart1,
  ...lipsArticlesPart2,
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

/** Записи блога для sitemap: те же slug, что у страниц `/blog/[slug]` и `/ro/blog/[slug]`. */
export function getPostsForSitemap(): BlogPost[] {
  return getAllPosts().filter((p) => p.slugRu && p.slugRo && p.dateModified);
}

export function getPostBySlug(slug: string, locale: BlogLocale): BlogPost | undefined {
  return BLOG_POSTS.find((p) => (locale === 'ru' ? p.slugRu === slug : p.slugRo === slug));
}

/** Resolve a post when the URL slug may be either RU or RO (e.g. language switcher). */
export function findPostByAnySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slugRu === slug || p.slugRo === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.id === id);
}

export function getArticlesSorted(): BlogPost[] {
  return BLOG_POSTS
    .filter((p) => p.kind === 'article')
    .sort((a, b) => {
      const byPublished = b.publishedAt.localeCompare(a.publishedAt);
      if (byPublished !== 0) return byPublished;
      const byModified = b.dateModified.localeCompare(a.dateModified);
      if (byModified !== 0) return byModified;
      return a.id.localeCompare(b.id);
    });
}

/** Последние опубликованные статьи (без hub), по убыванию даты `publishedAt`. */
export function getLatestArticles(limit: number): BlogPost[] {
  return getArticlesSorted().slice(0, Math.max(0, limit));
}

export function getArticleCount(): number {
  return BLOG_POSTS.filter((p) => p.kind === 'article').length;
}

/** Last page number (1-based). 1 = only `/blog`; 2 = also `/blog/page/2`. */
export function getMaxIndexPage(): number {
  const n = getArticleCount();
  return Math.max(1, Math.ceil(n / POSTS_PER_PAGE));
}

export function getPostsForIndexPage(locale: BlogLocale, page: number): BlogPost[] {
  const articles = getArticlesSorted();
  const start = (page - 1) * POSTS_PER_PAGE;
  return articles.slice(start, start + POSTS_PER_PAGE);
}

export function getHubForCluster(clusterId: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.kind === 'hub' && p.clusterId === clusterId);
}

/**
 * Получить все хабы для отображения на главной странице блога.
 */
export function getAllHubs(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.kind === 'hub').sort((a, b) => {
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

export function getAllSlugParams(locale: BlogLocale): { slug: string }[] {
  return BLOG_POSTS.map((p) => ({
    slug: locale === 'ru' ? p.slugRu : p.slugRo,
  }));
}

/**
 * Блок «Читайте также»: подобранные вручную по теме статьи (related-articles.ts).
 * Если для статьи список не задан, берутся статьи той же рубрики, новые первые.
 */
export function getRelatedArticles(post: BlogPost, limit = 5): BlogPost[] {
  const curated = RELATED_ARTICLES[post.id];
  if (curated) {
    const picked = curated
      .map((id) => getPostById(id))
      .filter((p): p is BlogPost => Boolean(p) && p!.kind === 'article' && p!.id !== post.id);
    if (picked.length > 0) return picked.slice(0, limit);
  }
  if (!post.clusterId) return [];

  return BLOG_POSTS
    .filter((p) =>
      p.clusterId === post.clusterId &&
      p.id !== post.id &&
      p.kind === 'article'
    )
    .sort((a, b) => {
      const byModified = b.dateModified.localeCompare(a.dateModified);
      if (byModified !== 0) return byModified;
      return a.id.localeCompare(b.id);
    })
    .slice(0, limit);
}

/**
 * Получить slug хаба по clusterId для кнопки "Вернуться к рубрике".
 */
export function getHubSlug(clusterId: string | null, locale: BlogLocale): string | null {
  if (!clusterId) return null;

  const hub = getHubForCluster(clusterId);
  if (!hub) return null;

  return locale === 'ru' ? hub.slugRu : hub.slugRo;
}

/** All articles of a cluster (hubs excluded), newest first. Used for hub markup and cross-links. */
export function getClusterArticles(clusterId: string | null): BlogPost[] {
  if (!clusterId) return [];
  return BLOG_POSTS
    .filter((p) => p.kind === 'article' && p.clusterId === clusterId)
    .sort((a, b) => {
      const byPublished = b.publishedAt.localeCompare(a.publishedAt);
      if (byPublished !== 0) return byPublished;
      return a.id.localeCompare(b.id);
    });
}
