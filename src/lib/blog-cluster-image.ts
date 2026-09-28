import type { StaticImageData } from 'next/image';

import type { BlogClusterId } from '@/blog-data/types';
import { servicesLinksRu } from '@/lib/db-content';

/**
 * Blog cluster → existing service page. Used only to reuse the service photo as a
 * blog card cover / footer thumbnail (no new images). Exhaustive over BlogClusterId.
 */
const CLUSTER_SERVICE_URL: Record<BlogClusterId, string> = {
  lips: '/services/uvelychenye-gub-v-belczah',
  botox: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
  dermatologist: '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
  consultation: '/services/konsultaczyya-dermatokosmetologa-v-belczah',
  'mesotherapy-face': '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
  'mesotherapy-hair': '/services/mezoterapyya-dlya-volos-v-belczah',
  biorevitalization: '/services/byorevytalyzaczyya-v-belczah',
  fillers: '/services/konturnaya-plastyka-fylleramy-v-belczah',
  'facial-cleaning': '/services/professyonalnaya-chystka-lycza-v-belczah',
  peeling: '/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
  dermapen: '/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
  'anti-acne': '/services/terapyya-anty-akne-v-belczah',
  'anti-pigmentation': '/services/terapyya-protyv-pygmentaczyy-v-belczah',
  carboxytherapy: '/services/karboksyterapyya-v-belczah',
  'alginate-mask': '/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  lipolytics: '/services/ynjekczyy-lypolytykov-v-belczah',
};

const IMAGE_BY_URL = new Map(servicesLinksRu.map((s) => [s.url, s.imageUrl] as const));

export function getBlogClusterImage(clusterId: BlogClusterId | null | undefined): StaticImageData | null {
  if (!clusterId) return null;
  return IMAGE_BY_URL.get(CLUSTER_SERVICE_URL[clusterId]) ?? null;
}
