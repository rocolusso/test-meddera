import type { ServiceSeo } from '@/lib/service-seo/types';

export const biorev: ServiceSeo = {
  ru: {
    serviceName: 'Биоревитализация',
    serviceType: 'Биоревитализация кожи',
    sections: [
      {
        h2: 'Что это за процедура',
        paragraphs: [
          'Препарат на основе гиалуроновой кислоты вводят тонкой иглой в поверхностные слои кожи. Он удерживает воду там, где коже её не хватает. Цель процедуры состоит в том, чтобы улучшить состояние самой кожи, а форму лица она не меняет. Для объёма и контуров используют другую процедуру, контурную пластику.',
        ],
      },
      {
        h2: 'Когда её рассматривают',
        list: [
          'кожа сухая и обезвоженная, стягивается после умывания',
          'появились первые признаки возрастных изменений',
          'цвет лица стал тусклым',
          'кожа ослабла после солнечного сезона или агрессивных процедур',
          'нужно подготовить кожу к активному солнцу',
        ],
      },
      {
        h2: 'Когда процедуру откладывают',
        list: [
          'беременность и лактация',
          'острое воспаление или инфекция в зоне введения',
          'аллергия на компоненты препарата',
          'онкологические и аутоиммунные заболевания',
          'нарушения свёртываемости крови',
        ],
        after: ['Окончательное решение принимает врач после осмотра и беседы о ваших заболеваниях и лекарствах.'],
      },
      {
        h2: 'Как проходит процедура',
        paragraphs: [
          'Кожу очищают, при необходимости наносят обезболивающий крем. Затем врач вводит препарат тонкой иглой в выбранные зоны. Если после уколов кожа покраснела, на неё накладывают успокаивающую маску.',
          'В местах уколов могут остаться небольшие бугорки и покраснение, иногда появляются синяки. Обычно это проходит за несколько дней. В это время лучше не посещать сауну, не загорать и не касаться лица грязными руками.',
        ],
      },
      {
        h2: 'Результат и повторные процедуры',
        paragraphs: [
          'Кожа становится более увлажнённой и упругой не мгновенно, а постепенно. Сколько процедур нужно и через какие интервалы, зависит от исходного состояния кожи и вашей цели. Врач составит схему на консультации и скорректирует её по результату.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Biorevitalizare',
    serviceType: 'Biorevitalizarea pielii',
    sections: [
      {
        h2: 'Ce este această procedură',
        paragraphs: [
          'Un preparat pe bază de acid hialuronic se introduce cu un ac subțire în straturile superficiale ale pielii. El reține apa acolo unde pielii îi lipsește. Scopul procedurii este îmbunătățirea stării pielii, iar forma feței nu se schimbă. Pentru volum și contururi se folosește altă procedură, conturarea facială.',
        ],
      },
      {
        h2: 'Când se ia în calcul',
        list: [
          'pielea este uscată și deshidratată, se întinde după spălare',
          'au apărut primele semne ale îmbătrânirii',
          'tenul a devenit tern',
          'pielea este slăbită după sezonul solar sau după proceduri agresive',
          'pielea trebuie pregătită pentru soarele intens',
        ],
      },
      {
        h2: 'Când procedura se amână',
        list: [
          'sarcina și alăptarea',
          'inflamație acută sau infecție în zona de administrare',
          'alergie la componentele preparatului',
          'boli oncologice și autoimune',
          'tulburări de coagulare a sângelui',
        ],
        after: ['Decizia finală o ia medicul după examinare și după o discuție despre bolile și medicamentele dumneavoastră.'],
      },
      {
        h2: 'Cum decurge procedura',
        paragraphs: [
          'Pielea se curăță și, la nevoie, se aplică o cremă anestezică. Apoi medicul introduce preparatul cu un ac subțire în zonele alese. Dacă după înțepături pielea s-a înroșit, se aplică o mască calmantă.',
          'În locurile de injectare pot rămâne mici umflături și roșeață, uneori apar vânătăi. De obicei acestea trec în câteva zile. În acest timp este mai bine să nu mergeți la saună, să nu vă bronzați și să nu atingeți fața cu mâinile murdare.',
        ],
      },
      {
        h2: 'Rezultatul și procedurile repetate',
        paragraphs: [
          'Pielea devine mai hidratată și mai fermă treptat, nu instantaneu. Câte proceduri sunt necesare și la ce intervale depinde de starea inițială a pielii și de scopul dumneavoastră. Medicul întocmește schema la consultație și o ajustează în funcție de rezultat.',
        ],
      },
    ],
  },
};
