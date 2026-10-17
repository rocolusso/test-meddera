import type { BlogClusterId } from '@/blog-data/types';

/**
 * Service page slug -> blog rubric hub plus hand-picked articles (3 to 5) that answer the questions
 * a patient has about that service. The block on the page links to the hub and to these articles.
 */
export const SERVICE_BLOG: Record<string, { cluster: BlogClusterId; articles: string[] }> = {
  'konsultaczyya-dermatokosmetologa-v-belczah': {
    cluster: 'dermatologist',
    articles: [
      'dermatolog-beltsy-kogda-nuzhna-konsultaciya',
      'rodinki-kogda-obratitsya-k-dermatologu',
      'akne-prichiny-stadii-lechenie',
      'pigmentnye-pyatna-prichiny-lechenie',
    ],
  },
  'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye': {
    cluster: 'dermatologist',
    articles: [
      'dermatolog-beltsy-kogda-nuzhna-konsultaciya',
      'dermatoskopiya-chto-eto-zachem-nuzhna',
      'atopicheskij-dermatit-uhod-profilaktika',
      'ekzema-kak-oblegchit-simptomy',
      'akne-prichiny-stadii-lechenie',
    ],
  },
  'professyonalnaya-chystka-lycza-v-belczah': {
    cluster: 'dermatologist',
    articles: ['akne-prichiny-stadii-lechenie', 'rozacea-prichiny-metody-korrekcii', 'follikulit-vospalenie-volosyanyh-follikulov'],
  },
  'karboksyterapyya-v-belczah': {
    cluster: 'mesotherapy-face',
    articles: ['mezoterapiya-lica-kurs-procedur', 'biorevitalizaciya-kombinaciya-procedur', 'fotostareenie-kozhi-profilaktika'],
  },
  'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy': {
    cluster: 'dermatologist',
    articles: [
      'pigmentnye-pyatna-prichiny-lechenie',
      'fotostareenie-kozhi-profilaktika',
      'akne-prichiny-stadii-lechenie',
      'solnechnye-ozhogi-pervaya-pomoshch',
    ],
  },
  'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej': {
    cluster: 'biorevitalization',
    articles: ['biorevitalizaciya-uhod-posle', 'mezoterapiya-lica-otek-sinyaki', 'fotostareenie-kozhi-profilaktika'],
  },
  'terapyya-anty-akne-v-belczah': {
    cluster: 'dermatologist',
    articles: [
      'akne-prichiny-stadii-lechenie',
      'rozacea-prichiny-metody-korrekcii',
      'seboreynyj-dermatit-prichiny-lechenie',
      'mezoterapiya-lica-akne-postakne',
      'follikulit-vospalenie-volosyanyh-follikulov',
    ],
  },
  'terapyya-protyv-pygmentaczyy-v-belczah': {
    cluster: 'dermatologist',
    articles: [
      'pigmentnye-pyatna-prichiny-lechenie',
      'fotostareenie-kozhi-profilaktika',
      'vitiligo-chto-eto-mozhno-li-lechit',
      'solnechnye-ozhogi-pervaya-pomoshch',
      'fotodermatozy-solnce',
    ],
  },
  'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy': {
    cluster: 'mesotherapy-face',
    articles: [
      'mezoterapiya-lica-akne-postakne',
      'mezoterapiya-lica-kurs-procedur',
      'biorevitalizaciya-kombinaciya-procedur',
      'fotostareenie-kozhi-profilaktika',
    ],
  },
  'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe': {
    cluster: 'mesotherapy-face',
    articles: [
      'mezoterapiya-lica-beltsy-chto-eto',
      'mezoterapiya-lica-preparaty-sostav',
      'mezoterapiya-lica-kak-prohodit-procedura',
      'mezoterapiya-lica-kurs-procedur',
      'mezoterapiya-lica-otek-sinyaki',
    ],
  },
  'mezoterapyya-dlya-volos-v-belczah': {
    cluster: 'dermatologist',
    articles: ['alopeciya-vypadenie-volos-prichiny', 'seboreya-kozhi-golovy-lechenie', 'seboreynyj-dermatit-prichiny-lechenie'],
  },
  'uvelychenye-gub-v-belczah': {
    cluster: 'lips',
    articles: [
      'uvelichenie-gub-pervyj-raz',
      'uvelichenie-gub-gialuronovaya-kislota',
      'uvelichenie-gub-bolevye-oshchushcheniya',
      'uvelichenie-gub-protivopokazaniya',
      'uvelichenie-gub-uhod-posle-procedury',
    ],
  },
  'botoks-v-belczah-effektyvnoe-omolozhenye-lycza': {
    cluster: 'botox',
    articles: [
      'botoks-beltsy-chto-nuzhno-znat',
      'botoks-kak-prohodit-procedura',
      'botoks-zony-injekcij',
      'botoks-pokazaniya-protivopokazaniya',
      'botoks-oslozhneniya-pobelochnye-effekty',
    ],
  },
  'byorevytalyzaczyya-v-belczah': {
    cluster: 'biorevitalization',
    articles: [
      'biorevitalizaciya-beltsy-chto-eto',
      'biorevitalizaciya-preparaty-gialoronovaya-kislota',
      'biorevitalizaciya-rezultaty-dlitelnost',
      'biorevitalizaciya-kurs-procedur',
      'biorevitalizaciya-protivopokazaniya',
    ],
  },
  'konturnaya-plastyka-fylleramy-v-belczah': {
    cluster: 'fillers',
    articles: [
      'konturnaya-plastika-beltsy-chto-eto',
      'fillery-vidy-sostav-proizvoditeli',
      'konturnaya-plastika-nososgubnye-skladki',
      'konturnaya-plastika-skul-podborodka',
      'konturnaya-plastika-oslozhneniya',
    ],
  },
  'ynjekczyy-lypolytykov-v-belczah': {
    cluster: 'fillers',
    articles: ['konturnaya-plastika-skul-podborodka', 'konturnaya-plastika-kombinaciya-procedur'],
  },
};

/** Service page slug -> other service slugs that a patient usually reads next. */
export const SERVICE_RELATED: Record<string, string[]> = {
  'konsultaczyya-dermatokosmetologa-v-belczah': [
    'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    'terapyya-anty-akne-v-belczah',
    'terapyya-protyv-pygmentaczyy-v-belczah',
  ],
  'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye': [
    'konsultaczyya-dermatokosmetologa-v-belczah',
    'terapyya-anty-akne-v-belczah',
    'terapyya-protyv-pygmentaczyy-v-belczah',
  ],
  'professyonalnaya-chystka-lycza-v-belczah': [
    'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    'terapyya-anty-akne-v-belczah',
    'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  ],
  'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy': [
    'terapyya-protyv-pygmentaczyy-v-belczah',
    'professyonalnaya-chystka-lycza-v-belczah',
    'terapyya-anty-akne-v-belczah',
  ],
  'terapyya-anty-akne-v-belczah': [
    'professyonalnaya-chystka-lycza-v-belczah',
    'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
  ],
  'terapyya-protyv-pygmentaczyy-v-belczah': [
    'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    'konsultaczyya-dermatokosmetologa-v-belczah',
  ],
  'byorevytalyzaczyya-v-belczah': [
    'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    'botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    'konturnaya-plastyka-fylleramy-v-belczah',
  ],
  'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe': [
    'byorevytalyzaczyya-v-belczah',
    'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    'karboksyterapyya-v-belczah',
  ],
  'mezoterapyya-dlya-volos-v-belczah': [
    'konsultaczyya-dermatokosmetologa-v-belczah',
    'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
  ],
  'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy': [
    'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    'terapyya-anty-akne-v-belczah',
  ],
  'karboksyterapyya-v-belczah': [
    'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    'byorevytalyzaczyya-v-belczah',
  ],
  'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej': [
    'professyonalnaya-chystka-lycza-v-belczah',
    'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
  ],
  'botoks-v-belczah-effektyvnoe-omolozhenye-lycza': [
    'konturnaya-plastyka-fylleramy-v-belczah',
    'byorevytalyzaczyya-v-belczah',
    'konsultaczyya-dermatokosmetologa-v-belczah',
  ],
  'konturnaya-plastyka-fylleramy-v-belczah': [
    'botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    'uvelychenye-gub-v-belczah',
    'byorevytalyzaczyya-v-belczah',
  ],
  'ynjekczyy-lypolytykov-v-belczah': [
    'konsultaczyya-dermatokosmetologa-v-belczah',
    'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
  ],
};
