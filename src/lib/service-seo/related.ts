import type { BlogClusterId } from '@/blog-data/types';

/** Service page slug -> blog rubric whose hub and articles it links to. */
export const SERVICE_CLUSTER: Record<string, BlogClusterId | undefined> = {
  'botoks-v-belczah-effektyvnoe-omolozhenye-lycza': 'botox',
  'konturnaya-plastyka-fylleramy-v-belczah': 'fillers',
  'byorevytalyzaczyya-v-belczah': 'biorevitalization',
  'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe': 'mesotherapy-face',
  'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye': 'dermatologist',
  'konsultaczyya-dermatokosmetologa-v-belczah': 'dermatologist',
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
