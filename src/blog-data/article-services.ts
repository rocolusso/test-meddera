import { servicePath } from '@/lib/service-slugs';
import type { BlogLocale } from '@/blog-data/types';

const DERM = 'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye';
const CONSULT = 'konsultaczyya-dermatokosmetologa-v-belczah';
const ACNE = 'terapyya-anty-akne-v-belczah';
const PIGMENT = 'terapyya-protyv-pygmentaczyy-v-belczah';
const PEELING = 'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy';
const MESO = 'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe';
const MESO_HAIR = 'mezoterapyya-dlya-volos-v-belczah';
const LIPS = 'uvelychenye-gub-v-belczah';
const BOTOX = 'botoks-v-belczah-effektyvnoe-omolozhenye-lycza';
const BIO = 'byorevytalyzaczyya-v-belczah';
const FILLERS = 'konturnaya-plastyka-fylleramy-v-belczah';

/** Slugs of the services that have a call-to-action entry (src/lib/cta/registry.ts). */
export const SERVICE_SLUG = { DERM, CONSULT, ACNE, PIGMENT, PEELING, MESO, MESO_HAIR, LIPS, BOTOX, BIO, FILLERS } as const;

export const SERVICE_LABELS: Record<string, { ru: string; ro: string }> = {
  [DERM]: { ru: 'Услуга «Дерматолог в Бельцах»', ro: 'Serviciul „Dermatolog în Bălți”' },
  [CONSULT]: { ru: 'Консультация дерматокосметолога', ro: 'Consultația dermatocosmetologului' },
  [ACNE]: { ru: 'Терапия анти-акне', ro: 'Terapia anti-acnee' },
  [PIGMENT]: { ru: 'Терапия против пигментации', ro: 'Terapia împotriva pigmentării' },
  [PEELING]: { ru: 'Пилинг', ro: 'Peeling' },
  [MESO]: { ru: 'Услуга «Мезотерапия лица»', ro: 'Serviciul „Mezoterapia feței”' },
  [MESO_HAIR]: { ru: 'Мезотерапия для волос', ro: 'Mezoterapia pentru păr' },
  [LIPS]: { ru: 'Услуга «Увеличение губ в Бельцах»', ro: 'Serviciul „Mărirea buzelor în Bălți”' },
  [BOTOX]: { ru: 'Услуга «Ботокс в Бельцах»', ro: 'Serviciul „Botox în Bălți”' },
  [BIO]: { ru: 'Услуга «Биоревитализация»', ro: 'Serviciul „Biorevitalizarea”' },
  [FILLERS]: { ru: 'Услуга «Контурная пластика филлерами»', ro: 'Serviciul „Conturarea cu filler-e”' },
};

const RUBRIC_DEFAULT: Record<string, string[]> = {
  dermatologist: [DERM, CONSULT],
  botox: [BOTOX, CONSULT],
  'mesotherapy-face': [MESO, CONSULT],
  biorevitalization: [BIO, CONSULT],
  fillers: [FILLERS, CONSULT],
  lips: [LIPS, CONSULT],
};

/** Articles whose topic touches another service. At most three services per article. */
const OVERRIDES: Record<string, string[]> = {
  'akne-prichiny-stadii-lechenie': [DERM, ACNE, CONSULT],
  'rozacea-prichiny-metody-korrekcii': [DERM, ACNE, CONSULT],
  'pigmentnye-pyatna-prichiny-lechenie': [DERM, PIGMENT, CONSULT],
  'vitiligo-chto-eto-mozhno-li-lechit': [DERM, PIGMENT],
  'fotostareenie-kozhi-profilaktika': [DERM, PIGMENT, PEELING],
  'gipergidroz-lechenie-beltsy': [DERM, BOTOX],
  'alopeciya-vypadenie-volos-prichiny': [DERM, MESO_HAIR],
  'seboreya-kozhi-golovy-lechenie': [DERM, MESO_HAIR],
  'botoks-vs-fillery-raznica': [BOTOX, FILLERS, CONSULT],
  'botoks-gipergidroz-podmyshek': [BOTOX, DERM],
  'mezoterapiya-lica-akne-postakne': [MESO, ACNE, CONSULT],
  'biorevitalizaciya-kombinaciya-procedur': [BIO, MESO, CONSULT],
  'konturnaya-plastika-kombinaciya-procedur': [FILLERS, BOTOX, BIO],
  'uvelichenie-gub-beltsy-vidy-fillerov': [LIPS, FILLERS, CONSULT],
  'uvelichenie-gub-gialuronovaya-kislota': [LIPS, FILLERS, CONSULT],
};

/** Service slugs shown in the call to action at the end of an article (first one is the main service). */
export function servicesForArticle(post: { id: string; clusterId: string | null }): string[] {
  return OVERRIDES[post.id] ?? RUBRIC_DEFAULT[post.clusterId ?? ''] ?? [CONSULT];
}

/** Services of a rubric (hub pages): the rubric default, or the consultation as a fallback. */
export function servicesForCluster(clusterId: string | null): string[] {
  return RUBRIC_DEFAULT[clusterId ?? ''] ?? [CONSULT];
}

export function serviceLabel(slug: string, locale: BlogLocale): string {
  return SERVICE_LABELS[slug]?.[locale] ?? slug;
}

export function servicePathFor(slug: string, locale: BlogLocale): string {
  return servicePath(slug, locale);
}
