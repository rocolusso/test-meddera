import { StaticImageData } from 'next/image';
import consultcosm from '../../public/assets/img/services/consult-cosm.png';
import consultderm from '../../public/assets/img/services/consult-derm.png';
import chistkaLica from '../../public/assets/img/services/chistka_lica.png';
// import massageLica from '../../public/assets/img/services/massage_lica.png';
import karboksiterapiya from '../../public/assets/img/services/karbiksiterapiya.png';
import pilling from '../../public/assets/img/services/pilling.png';
import maskaLica from '../../public/assets/img/services/maska_lica.png';
import antiAkne from '../../public/assets/img/services/anti-akne.png';
import terapiyaProtivPigment from '../../public/assets/img/services/terapiya-protiv-pigm.png';
import dermapen from '../../public/assets/img/services/dermapen.png';
import mezolica from '../../public/assets/img/services/mezolica.png';
import mezovolos from '../../public/assets/img/services/mezovolos.png';
import uvelichenieGub from '../../public/assets/img/services/uvelicheniegub.png';
import botoks from '../../public/assets/img/services/botoks.png';
import biorevit from '../../public/assets/img/services/biorevit.png';
import konturnayaPlastika from '../../public/assets/img/services/konturnayaplastika.png';
import lipolitiki from '../../public/assets/img/services/lipolitiki.png';

export type ServiceLink = {
  id: number,
  title: string,
  url: string,
  imageUrl: StaticImageData,
};

export const servicesLinksRu:ServiceLink[] = [
  {
    id: 1,
    title: 'Консультация у врача-дерматокосметолога',
    url: '/services/konsultaczyya-dermatokosmetologa-v-belczah',
    imageUrl: consultcosm,
  },
  {
    id: 2,
    title: 'Дерматологическая консультация',
    url: '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    imageUrl: consultderm,
  },
  {
    id: 3,
    title: 'Чистка лица',
    url: '/services/professyonalnaya-chystka-lycza-v-belczah',
    imageUrl: chistkaLica,
  },
  // {
  //   id: 4,
  //   title: 'Массаж лица',
  //   url: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  //   imageUrl: massageLica,
  // },
  {
    id: 5,
    title: 'Карбокситерапия',
    url: '/services/karboksyterapyya-v-belczah',
    imageUrl: karboksiterapiya,
  },
  {
    id: 6,
    title: 'Пилинг',
    url: '/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    imageUrl: pilling,
  },
  {
    id: 7,
    title: 'Альгинатная маска',
    url: '/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    imageUrl: maskaLica,
  },
  {
    id: 8,
    title: 'Терапия анти-акне',
    url: '/services/terapyya-anty-akne-v-belczah',
    imageUrl: antiAkne,
  },
  {
    id: 9,
    title: 'Терапия против пигментации',
    url: '/services/terapyya-protyv-pygmentaczyy-v-belczah',
    imageUrl: terapiyaProtivPigment,
  },
  {
    id: 10,
    title: 'Дермапен',
    url: '/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    imageUrl: dermapen,
  },
  {
    id: 11,
    title: 'Мезотерапия лица',
    url: '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    imageUrl: mezolica,
  },
  {
    id: 12,
    title: 'Мезотерапия для волос',
    url: '/services/mezoterapyya-dlya-volos-v-belczah',
    imageUrl: mezovolos,
  },
  {
    id: 13,
    title: 'Увеличение губ',
    url: '/services/uvelychenye-gub-v-belczah',
    imageUrl: uvelichenieGub,
  },
  {
    id: 14,
    title: 'Ботокс',
    url: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    imageUrl: botoks,
  },
  {
    id: 15,
    title: 'Биоревитализация',
    url: '/services/byorevytalyzaczyya-v-belczah',
    imageUrl: biorevit,
  },
  {
    id: 16,
    title: 'Контурная пластика филлерами',
    url: '/services/konturnaya-plastyka-fylleramy-v-belczah',
    imageUrl: konturnayaPlastika,
  },
  {
    id: 17,
    title: 'Инъекции липолитиков',
    url: '/services/ynjekczyy-lypolytykov-v-belczah',
    imageUrl: lipolitiki,
  },

];

export const servicesLinksRo:ServiceLink[] = [
  {
    id: 1,
    title: 'Consultația la medicul dermatocosmetolog',
    url: '/ro/services/konsultaczyya-dermatokosmetologa-v-belczah',
    imageUrl: consultcosm,
  },
  {
    id: 2,
    title: 'Consultația dermatologică',
    url: '/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    imageUrl: consultderm,
  },
  {
    id: 3,
    title: 'Curățirea feței',
    url: '/ro/services/professyonalnaya-chystka-lycza-v-belczah',
    imageUrl: chistkaLica,
  },
  // {
  //   id: 4,
  //   title: 'Masaj facial',
  //   url: '/ro/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  //   imageUrl: massageLica,
  // },
  {
    id: 5,
    title: 'Carboxiterapie',
    url: '/ro/services/karboksyterapyya-v-belczah',
    imageUrl: karboksiterapiya,
  },
  {
    id: 6,
    title: 'Peeling',
    url: '/ro/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    imageUrl: pilling,
  },
  {
    id: 7,
    title: 'Masca alginată',
    url: '/ro/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    imageUrl: maskaLica,
  },
  {
    id: 8,
    title: 'Terapia anti-acnee',
    url: '/ro/services/terapyya-anty-akne-v-belczah',
    imageUrl: antiAkne,
  },
  {
    id: 9,
    title: 'Terapie antipigmentară',
    url: '/ro/services/terapyya-protyv-pygmentaczyy-v-belczah',
    imageUrl: terapiyaProtivPigment,
  },
  {
    id: 10,
    title: 'Dermapen',
    url: '/ro/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    imageUrl: dermapen,
  },
  {
    id: 11,
    title: 'Mezoterapia facială',
    url: '/ro/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    imageUrl: mezolica,
  },
  {
    id: 12,
    title: 'Mezoterapia pentru păr',
    url: '/ro/services/mezoterapyya-dlya-volos-v-belczah',
    imageUrl: mezovolos,
  },
  {
    id: 13,
    title: 'Mărirea buzelor',
    url: '/ro/services/uvelychenye-gub-v-belczah',
    imageUrl: uvelichenieGub,
  },
  {
    id: 14,
    title: 'Terapie antirid Botox',
    url: '/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    imageUrl: botoks,
  },
  {
    id: 15,
    title: 'Biorevitalizarea',
    url: '/ro/services/byorevytalyzaczyya-v-belczah',
    imageUrl: biorevit,
  },
  {
    id: 16,
    title: 'Plastica de contur cu fillere',
    url: '/ro/services/konturnaya-plastyka-fylleramy-v-belczah',
    imageUrl: konturnayaPlastika,
  },
  {
    id: 17,
    title: 'Injecții lipolitice',
    url: '/ro/services/ynjekczyy-lypolytykov-v-belczah',
    imageUrl: lipolitiki,
  },

];
