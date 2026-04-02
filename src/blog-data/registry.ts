import type { BlogLocale, BlogPost } from '@/blog-data/types';

export const POSTS_PER_PAGE = 10;

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
      'Как проходит увеличение губ гиалуроновой кислотой в Бельцах: показания, этапы, безопасность и запись на консультацию в клинике Meddera. Информационный материал.',
    descriptionRo:
      'Cum decurge mărirea buzelor cu acid hialuronic în Bălți: indicații, etape, siguranță și programare la consultație la clinica Meddera. Material informativ.',
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
    dateModified: '2026-04-01',
    titleRu: 'Консультация перед увеличением губ: вопросы врачу | Meddera',
    titleRo: 'Consultația înainte de mărirea buzelor: întrebări pentru medic | Meddera',
    descriptionRu:
      'Что спросить на приёме перед инъекционной коррекцией губ: безопасность, техника, наблюдение. Информационный материал клиники Meddera в Бельцах.',
    descriptionRo:
      'Ce să întrebați înainte de corecția injectabilă a buzelor: siguranță, tehnică, urmărire. Material informativ, clinica Meddera din Bălți.',
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
    dateModified: '2026-04-02',
    titleRu: 'Мифы и факты о филлерах для губ | Meddera',
    titleRo: 'Mituri și fapte despre filler-ele pentru buze | Meddera',
    descriptionRu:
      'Разбор распространённых утверждений об инъекционной коррекции губ и что реально обсуждают с врачом. Meddera, Бельцы.',
    descriptionRo:
      'Clarificări despre afirmații frecvente privind corecția injectabilă a buzelor. Meddera, Bălți.',
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
    dateModified: '2026-04-02',
    titleRu: 'Естественный объём губ: как формулировать ожидания | Meddera',
    titleRo: 'Volum natural al buzelor: cum să formulați așteptările | Meddera',
    descriptionRu:
      'Как описать желаемый результат врачу и почему анатомия влияет на план. Информационная статья Meddera.',
    descriptionRo:
      'Cum descrieți rezultatul dorit medicului și rolul anatomiei în plan. Articol informativ Meddera.',
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
      'Типичные явления первых дней и когда обращаться за помощью. Не заменяет рекомендации вашего врача Meddera.',
    descriptionRo:
      'Fenomene obișnuite în primele zile și când să cereți ajutor. Nu înlocuiește sfatul medicului Meddera.',
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
      'Зачем собирают анамнез и почему решение только после осмотра. Meddera, Бельцы.',
    descriptionRo:
      'Rolul anamnezei și de ce decizia este după examen. Meddera, Bălți.',
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
    dateModified: '2026-04-04',
    titleRu: 'Форма и симметрия губ без перегрузки объёма | Meddera',
    titleRo: 'Formă și simetrie a buzelor fără supraîncărcare de volum | Meddera',
    descriptionRu:
      'Когда задача — контур и баланс, а не максимальный объём. Образовательный материал Meddera.',
    descriptionRo:
      'Când obiectivul este conturul și echilibrul, nu volumul maxim. Material educativ Meddera.',
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
    dateModified: '2026-04-05',
    titleRu: 'Уход после увеличения губ: общие принципы | Meddera',
    titleRo: 'Îngrijire după mărirea buzelor: principii generale | Meddera',
    descriptionRu:
      'Почему рекомендации клиники важнее обобщённых статей. Meddera, Бельцы.',
    descriptionRo:
      'De ce recomandările clinicii primează față de articole generale. Meddera, Bălți.',
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
    dateModified: '2026-04-06',
    titleRu: 'Как выбрать клинику для инъекций в Бельцах | Meddera',
    titleRo: 'Cum alegi clinica pentru injecții în Bălți | Meddera',
    descriptionRu:
      'Критерии прозрачности, стерильности и поддержки после процедуры. Информационный гид Meddera.',
    descriptionRo:
      'Criterii de transparență, asepsie și suport după procedură. Ghid informativ Meddera.',
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
    dateModified: '2026-04-07',
    titleRu: 'Сколько держится эффект увеличения губ | Meddera',
    titleRo: 'Cât timp ține efectul măririi buzelor | Meddera',
    descriptionRu:
      'Почему срок индивидуален и как планировать наблюдение с врачом. Meddera.',
    descriptionRo:
      'De ce durata variază și cum planificați urmărirea cu medicul. Meddera.',
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

export function getPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.id === id);
}

export function getArticlesSorted(): BlogPost[] {
  return BLOG_POSTS
    .filter((p) => p.kind === 'article')
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
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
