import type { BlogLocale, BlogPost } from '@/blog-data/types';

export const POSTS_PER_PAGE = 10;

/**
 * Сколько последних статей показывать в футере.
 * Берутся из всех записей с `kind === 'article'`, сортировка: дата публикации (сначала новые), при равной дате — `dateModified`, затем `id`.
 */
export const FOOTER_RECENT_ARTICLE_COUNT = 10;

export const ORIGIN = 'https://meddera.md';

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'lip-augmentation-hub',
    kind: 'hub',
    clusterId: 'lips',
    slugRu: 'uvelichenie-gub-beltsy',
    slugRo: 'marire-buzelor-balti',
    publishedAt: '2026-04-02',
    dateModified: '2026-04-02',
    titleRu: 'Увеличение губ в Бельцах: гид по процедуре | Meddera',
    titleRo: 'Mărirea buzelor în Bălți: ghid despre procedură | Meddera',
    descriptionRu:
      'Увеличение губ в Бельцах (Meddera): показания, этапы, безопасность и запись на консультацию. Информационный материал.',
    descriptionRo:
      'Mărirea buzelor în Bălți (Meddera): indicații, etape, siguranță și programare la consultație. Material informativ.',
    excerptRu: 'Гид по контурной пластике губ: этапы, безопасность, запись в Meddera.',
    excerptRo: 'Ghid despre conturarea buzelor: etape, siguranță, programare la Meddera.',
    bodyKey: 'lip-augmentation-hub',
  },
  {
    id: 'lip-consult-questions',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'konsultaciya-pered-uvelicheniem-gub-voprosy-vrachu',
    slugRo: 'consultatie-marire-buze-intrebari-medic',
    publishedAt: '2026-04-01',
    dateModified: '2026-04-03',
    titleRu: 'Консультация перед увеличением губ: вопросы врачу | Meddera',
    titleRo: 'Întrebări la consultație: mărirea buzelor | Meddera',
    descriptionRu:
      'Вопросы врачу перед коррекцией губ: безопасность, техника, наблюдение. Информационный материал Meddera в Бельцах.',
    descriptionRo:
      'Întrebări înainte de corecția buzelor: siguranță, tehnică, urmărire. Material informativ, clinica Meddera din Bălți.',
    excerptRu: 'Список тем для разговора с врачом до процедуры и почему это важно.',
    excerptRo: 'Subiecte utile de discutat cu medicul înainte de procedură.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-procedure-steps',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'uvelichenie-gub-po-shagam-procedura',
    slugRo: 'marire-buze-pasi-procedura',
    publishedAt: '2026-04-01',
    dateModified: '2026-04-01',
    titleRu: 'Увеличение губ по шагам: как проходит процедура | Meddera',
    titleRo: 'Mărirea buzelor pas cu pas: cum decurge procedura | Meddera',
    descriptionRu:
      'Общая логика визита: подготовка, обезболивание, введение препарата, наблюдение. Не заменяет индивидуальный план врача Meddera.',
    descriptionRo:
      'Logica generală a vizitei: pregătire, anestezie, administrare, observare. Nu înlocuiește planul individual al medicului Meddera.',
    excerptRu: 'Этапы типичного приёма без дозировок и обещаний результата.',
    excerptRo: 'Etapele unei vizite tipice, fără doze sau promisiuni fixe.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-myths-facts',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'mify-i-fakty-o-fillerah-dlya-gub',
    slugRo: 'mituri-si-fapte-filler-buze',
    publishedAt: '2026-04-02',
    dateModified: '2026-04-03',
    titleRu: 'Мифы и факты о филлерах для губ | Meddera',
    titleRo: 'Mituri și fapte despre filler-ele pentru buze | Meddera',
    descriptionRu:
      'Мифы о филлерах для губ: что обсуждают на консультации и от чего зависит план. Meddera, Бельцы. Информация.',
    descriptionRo:
      'Mituri despre filler-e pentru buze: consultație și plan la Meddera, Bălți. Material informativ, orientativ.',
    excerptRu: 'Отделяем обобщения от того, что зависит от индивидуального плана.',
    excerptRo: 'Separăm generalitățile de ceea ce ține de planul personal.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-expectations',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'estestvennyj-obem-gub-ozhidaniya',
    slugRo: 'volum-natural-buze-asteptari',
    publishedAt: '2026-04-02',
    dateModified: '2026-04-03',
    titleRu: 'Естественный объём губ: как формулировать ожидания | Meddera',
    titleRo: 'Volum natural al buzelor: cum să formulați așteptările | Meddera',
    descriptionRu:
      'Как описать желаемый объём губ врачу и как анатомия влияет на форму. Пошаговая коррекция без перегруза. Meddera, Бельцы.',
    descriptionRo:
      'Cum formulați așteptările și cum influențează anatomia volumul buzelor. Corecție în etape. Meddera, Bălți.',
    excerptRu: 'Референсы, формулировки и пошаговая коррекция без перегруза.',
    excerptRo: 'Referințe, formulări și corecție în etape fără exces.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-after-swelling',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'otek-sinyaki-posle-injekcij-v-guby',
    slugRo: 'edem-vanatai-dupa-injectii-buze',
    publishedAt: '2026-04-03',
    dateModified: '2026-04-03',
    titleRu: 'Отёк и синяки после инъекций в губы: что нормально | Meddera',
    titleRo: 'Edem și vânătăi după injecții în buze: ce este frecvent | Meddera',
    descriptionRu:
      'После инъекций в губы: отёк и синяки — когда это норма и когда срочно к врачу. Ориентир; не замена очной консультации в Meddera.',
    descriptionRo:
      'După injecții în buze: edem, vânătăi — frecvent vs urgență. Informații generale; nu înlocuiește indicațiile medicului Meddera.',
    excerptRu: 'Ориентиры по наблюдению за собой после процедуры.',
    excerptRo: 'Repere pentru observarea după procedură.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-contraindications',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'protivopokazaniya-uvelichenie-gub-obschaya-informaciya',
    slugRo: 'contraindicatii-marire-buze-informatii',
    publishedAt: '2026-04-03',
    dateModified: '2026-04-03',
    titleRu: 'Противопоказания к увеличению губ: общая информация | Meddera',
    titleRo: 'Contraindicații la mărirea buzelor: informații generale | Meddera',
    descriptionRu:
      'Противопоказания к увеличению губ: анамнез на консультации и решение только после осмотра врачом Meddera в Бельцах.',
    descriptionRo:
      'Contraindicații mărire buze: anamneză la consultație; decizia după examen la Meddera, Bălți. Informații generale.',
    excerptRu: 'Темы для честного разговора на консультации.',
    excerptRo: 'Subiecte pentru o discuție clară la consultație.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-shape-symmetry',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'forma-i-simmetriya-gub-bez-peregruzki-obema',
    slugRo: 'forma-simetrie-buze-fara-supraincarcare',
    publishedAt: '2026-04-04',
    dateModified: '2026-04-03',
    titleRu: 'Форма и симметрия губ без перегрузки объёма | Meddera',
    titleRo: 'Formă și simetrie a buzelor fără supraîncărcare de volum | Meddera',
    descriptionRu:
      'Симметрия и контур губ без перегруза объёма: как планируют с врачом в Meddera, Бельцы. Образовательный материал.',
    descriptionRo:
      'Simetrie și contur buze fără volum excesiv: plan cu medicul la Meddera, Bălți. Material educativ.',
    excerptRu: 'Гармония лица и индивидуальный план коррекции.',
    excerptRo: 'Armonia feței și planul individual de corecție.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-aftercare-general',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'uhod-posle-uvelicheniya-gub-obschie-printsipy',
    slugRo: 'ingrijire-dupa-marire-buze-principii',
    publishedAt: '2026-04-05',
    dateModified: '2026-04-03',
    titleRu: 'Уход после увеличения губ: общие принципы | Meddera',
    titleRo: 'Îngrijire după mărirea buzelor: principii generale | Meddera',
    descriptionRu:
      'Уход после увеличения губ: следуйте инструкциям клиники Meddera в Бельцах, а не советам из интернета. Ориентир.',
    descriptionRo:
      'Îngrijire după mărirea buzelor: respectați indicațiile clinicii Meddera din Bălți, nu sfaturi generale online.',
    excerptRu: 'Типичные ограничения на короткий срок — только как ориентир.',
    excerptRo: 'Restricții frecvente pe termen scurt — doar ca reper.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-choose-clinic',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'kak-vybrat-kliniku-dlya-injekcij-v-belczah',
    slugRo: 'cum-alegi-clinica-injectii-balti',
    publishedAt: '2026-04-06',
    dateModified: '2026-04-03',
    titleRu: 'Как выбрать клинику для инъекций в Бельцах | Meddera',
    titleRo: 'Cum alegi clinica pentru injecții în Bălți | Meddera',
    descriptionRu:
      'Клиника для инъекций в Бельцах: опыт врача, препарат, стерильность, связь после процедуры. Гид Meddera.',
    descriptionRo:
      'Clinică pentru injecții în Bălți: medic, preparat, asepsie, suport după procedură. Ghid informativ Meddera.',
    excerptRu: 'На что смотреть и какие сигналы насторожить.',
    excerptRo: 'La ce să fiți atenți și semnale de precauție.',
    bodyKey: 'lip-cluster-article',
  },
  {
    id: 'lip-duration-effect',
    kind: 'article',
    clusterId: 'lips',
    slugRu: 'skolko-derzhitsya-effekt-uvelicheniya-gub',
    slugRo: 'cat-tine-efectul-marire-buze',
    publishedAt: '2026-04-07',
    dateModified: '2026-04-03',
    titleRu: 'Сколько держится эффект увеличения губ | Meddera',
    titleRo: 'Cât timp ține efectul măririi buzelor | Meddera',
    descriptionRu:
      'Срок эффекта после увеличения губ индивидуален: планируйте оценку с врачом Meddera в Бельцах, без «средних цифр» из сети.',
    descriptionRo:
      'Durata efectului după mărirea buzelor variază: reevaluare cu medicul Meddera, Bălți. Informații generale, fără medii din online.',
    excerptRu: 'Метаболизм, препарат, зона — без «средних цифр из сети».',
    excerptRo: 'Metabolism, preparat, zonă — fără medii anonime de pe net.',
    bodyKey: 'lip-cluster-article',
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
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

export function getAllSlugParams(locale: BlogLocale): { slug: string }[] {
  return BLOG_POSTS.map((p) => ({
    slug: locale === 'ru' ? p.slugRu : p.slugRo,
  }));
}
