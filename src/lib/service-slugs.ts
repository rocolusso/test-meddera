/** Slugs of service pages (the same for RU and RO). Single source for sitemap and the valid path list. */
export const SERVICE_SLUGS = [
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
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function servicePath(slug: string, locale: 'ru' | 'ro'): string {
  return locale === 'ru' ? `/services/${slug}` : `/ro/services/${slug}`;
}
