import { alginate } from '@/lib/service-seo/alginate';
import { antiacne } from '@/lib/service-seo/antiacne';
import { biorev } from '@/lib/service-seo/biorev';
import { botox } from '@/lib/service-seo/botox';
import { carboxy } from '@/lib/service-seo/carboxy';
import { cleaning } from '@/lib/service-seo/cleaning';
import { consult } from '@/lib/service-seo/consult';
import { dermapen } from '@/lib/service-seo/dermapen';
import { dermatolog } from '@/lib/service-seo/dermatolog';
import { fillers } from '@/lib/service-seo/fillers';
import { lipolytics } from '@/lib/service-seo/lipolytics';
import { mesoface } from '@/lib/service-seo/mesoface';
import { mesohair } from '@/lib/service-seo/mesohair';
import { peeling } from '@/lib/service-seo/peeling';
import { pigmentation } from '@/lib/service-seo/pigmentation';
import { SERVICE_MORE } from '@/lib/service-seo/more';
import type { ServiceSeo } from '@/lib/service-seo/types';

const BASE: Record<string, ServiceSeo> = {
  'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej': alginate,
  'botoks-v-belczah-effektyvnoe-omolozhenye-lycza': botox,
  'byorevytalyzaczyya-v-belczah': biorev,
  'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy': dermapen,
  'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye': dermatolog,
  'karboksyterapyya-v-belczah': carboxy,
  'konsultaczyya-dermatokosmetologa-v-belczah': consult,
  'konturnaya-plastyka-fylleramy-v-belczah': fillers,
  'mezoterapyya-dlya-volos-v-belczah': mesohair,
  'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe': mesoface,
  'professyonalnaya-chystka-lycza-v-belczah': cleaning,
  'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy': peeling,
  'terapyya-anty-akne-v-belczah': antiacne,
  'terapyya-protyv-pygmentaczyy-v-belczah': pigmentation,
  'ynjekczyy-lypolytykov-v-belczah': lipolytics,
};

function withMore(slug: string, base: ServiceSeo): ServiceSeo {
  const more = SERVICE_MORE[slug];
  if (!more) return base;
  return {
    ...base,
    ru: { ...base.ru, sections: [...base.ru.sections, ...more.ru] },
    ro: { ...base.ro, sections: [...base.ro.sections, ...more.ro] },
  };
}

export const SERVICE_SEO: Record<string, ServiceSeo> = Object.fromEntries(
  Object.entries(BASE).map(([slug, seo]) => [slug, withMore(slug, seo)]),
);
