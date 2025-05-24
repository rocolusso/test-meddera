import { StaticImageData } from 'next/image';
import consultcosm from '../../public/assets/img/services/consult-cosm.png';
import consultderm from '../../public/assets/img/services/consult-derm.png';
import chistkaLica from '../../public/assets/img/services/chistka_lica.png';
import massageLica from '../../public/assets/img/services/massage_lica.png';
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
}

export const servicesLinksRu:ServiceLink[] = [
  {
    id: 1,
    title: 'Консультация у врача-дерматокосметолога',
    url: '/services/1/',
    imageUrl: consultcosm,
  },
  {
    id: 2,
    title: 'Дерматологическая консультация',
    url: '/services/2/',
    imageUrl: consultderm,
  },
  {
    id: 3,
    title: 'Чистка лица',
    url: '/services/3/',
    imageUrl: chistkaLica,
  },
  {
    id: 4,
    title: 'Массаж лица',
    url: '/services/4/',
    imageUrl: massageLica,
  },
  {
    id: 5,
    title: 'Карбокситерапия',
    url: '/services/5/',
    imageUrl: karboksiterapiya,
  },
  {
    id: 6,
    title: 'Пилинг',
    url: '/services/6/',
    imageUrl: pilling,
  },
  {
    id: 7,
    title: 'Альгинатная маска',
    url: '/services/7/',
    imageUrl: maskaLica,
  },
  {
    id: 8,
    title: 'Терапия анти-акне',
    url: '/services/8/',
    imageUrl: antiAkne,
  },
  {
    id: 9,
    title: 'Терапия против пигментации',
    url: '/services/9/',
    imageUrl: terapiyaProtivPigment,
  },
  {
    id: 10,
    title: 'Дермапен',
    url: '/services/10/',
    imageUrl: dermapen,
  },
  {
    id: 11,
    title: 'Мезотерапия лица',
    url: '/services/11/',
    imageUrl: mezolica,
  },
  {
    id: 12,
    title: 'Мезотерапия для волос',
    url: '/services/12/',
    imageUrl: mezovolos,
  },
  {
    id: 13,
    title: 'Увеличение губ',
    url: '/services/13/',
    imageUrl: uvelichenieGub,
  },
  {
    id: 14,
    title: 'Ботокс',
    url: '/services/14/',
    imageUrl: botoks,
  },
  {
    id: 15,
    title: 'Биоревитализация',
    url: '/services/15/',
    imageUrl: biorevit,
  },
  {
    id: 16,
    title: 'Контурная пластика филлерами',
    url: '/services/16/',
    imageUrl: konturnayaPlastika,
  },
  {
    id: 17,
    title: 'Инъекции липолитиков',
    url: '/services/17/',
    imageUrl: lipolitiki,
  },

];

export const servicesLinksRo:ServiceLink[] = [
  {
    id: 1,
    title: 'Consultația la medicul dermatocosmetolog',
    url: '/services/1/ro/',
    imageUrl: consultcosm,
  },
  {
    id: 2,
    title: 'Consultația dermatologică',
    url: '/services/2/ro/',
    imageUrl: consultderm,
  },
  {
    id: 3,
    title: 'Curățirea feței',
    url: '/services/3/ro/',
    imageUrl: chistkaLica,
  },
  {
    id: 4,
    title: 'Masaj facial',
    url: '/services/4/ro/',
    imageUrl: massageLica,
  },
  {
    id: 5,
    title: 'Carboxiterapie',
    url: '/services/5/ro/',
    imageUrl: karboksiterapiya,
  },
  {
    id: 6,
    title: 'Peeling',
    url: '/services/6/ro/',
    imageUrl: pilling,
  },
  {
    id: 7,
    title: 'Masca alginată',
    url: '/services/7/ro/',
    imageUrl: maskaLica,
  },
  {
    id: 8,
    title: 'Terapia anti-acnee',
    url: '/services/8/ro/',
    imageUrl: antiAkne,
  },
  {
    id: 9,
    title: 'Terapie antipigmentară',
    url: '/services/9/ro/',
    imageUrl: terapiyaProtivPigment,
  },
  {
    id: 10,
    title: 'Dermapen',
    url: '/services/10/ro/',
    imageUrl: dermapen,
  },
  {
    id: 11,
    title: 'Mezoterapia facială',
    url: '/services/11/ro/',
    imageUrl: mezolica,
  },
  {
    id: 12,
    title: 'Mezoterapia pentru păr',
    url: '/services/12/ro/',
    imageUrl: mezovolos,
  },
  {
    id: 13,
    title: 'Mărirea buzelor',
    url: '/services/13/ro/',
    imageUrl: uvelichenieGub,
  },
  {
    id: 14,
    title: 'Terapie antirid Botox',
    url: '/services/14/ro/',
    imageUrl: botoks,
  },
  {
    id: 15,
    title: 'Biorevitalizarea',
    url: '/services/15/ro/',
    imageUrl: biorevit,
  },
  {
    id: 16,
    title: 'Plastica de contur cu fillere',
    url: '/services/16/ro/',
    imageUrl: konturnayaPlastika,
  },
  {
    id: 17,
    title: 'Injecții lipolitice',
    url: '/services/17/ro/',
    imageUrl: lipolitiki,
  },

];
