import { alginateMore } from '@/lib/service-seo/more/alginate';
import { botoxMore } from '@/lib/service-seo/more/botox';
import { biorevMore } from '@/lib/service-seo/more/biorev';
import { dermapenMore } from '@/lib/service-seo/more/dermapen';
import { mesofaceMore } from '@/lib/service-seo/more/mesoface';
import { mesohairMore } from '@/lib/service-seo/more/mesohair';
import { antiacneMore } from '@/lib/service-seo/more/antiacne';
import { pigmentationMore } from '@/lib/service-seo/more/pigmentation';
import { consultMore } from '@/lib/service-seo/more/consult';
import { dermatologMore } from '@/lib/service-seo/more/dermatolog';
import { fillersMore } from '@/lib/service-seo/more/fillers';
import { lipolyticsMore } from '@/lib/service-seo/more/lipolytics';
import { carboxyMore } from '@/lib/service-seo/more/carboxy';
import { cleaningMore } from '@/lib/service-seo/more/cleaning';
import { peelingMore } from '@/lib/service-seo/more/peeling';
import type { ServiceSeoMore } from '@/lib/service-seo/more/types';

/** Extra sections appended after the main sections of each service. */
export const SERVICE_MORE: Record<string, ServiceSeoMore> = {
  'algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej': alginateMore,
  'botoks-v-belczah-effektyvnoe-omolozhenye-lycza': botoxMore,
  'byorevytalyzaczyya-v-belczah': biorevMore,
  'dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy': dermapenMore,
  'mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe': mesofaceMore,
  'mezoterapyya-dlya-volos-v-belczah': mesohairMore,
  'terapyya-anty-akne-v-belczah': antiacneMore,
  'terapyya-protyv-pygmentaczyy-v-belczah': pigmentationMore,
  'konsultaczyya-dermatokosmetologa-v-belczah': consultMore,
  'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye': dermatologMore,
  'konturnaya-plastyka-fylleramy-v-belczah': fillersMore,
  'ynjekczyy-lypolytykov-v-belczah': lipolyticsMore,
  'karboksyterapyya-v-belczah': carboxyMore,
  'professyonalnaya-chystka-lycza-v-belczah': cleaningMore,
  'pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy': peelingMore,
};
