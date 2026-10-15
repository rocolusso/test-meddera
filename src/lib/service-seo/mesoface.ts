import type { ServiceSeo } from '@/lib/service-seo/types';

export const mesoface: ServiceSeo = {
  ru: {
    serviceName: 'Мезотерапия лица',
    serviceType: 'Мезотерапия лица',
    sections: [
      {
        h2: 'Как работает мезотерапия',
        paragraphs: [
          'Тончайшие иглы доставляют активные вещества прямо в слои кожи, где они нужны. Такой путь короче, чем у крема, которому приходится преодолевать защитный барьер. Состав коктейля врач подбирает под задачу: одному пациенту нужно увлажнение, другому выравнивание тона, третьему поддержка упругости.',
        ],
      },
      {
        h2: 'С какими жалобами приходят',
        list: [
          'сухость и обезвоженность кожи',
          'снижение упругости, возрастные изменения',
          'мелкие и мимические морщины',
          'пигментация и неровный тон',
          'следы акне и расширенные поры',
          'тусклый цвет лица',
        ],
      },
      {
        h2: 'Когда процедуру не проводят',
        list: [
          'беременность и лактация',
          'острые инфекции и хронические болезни в стадии обострения',
          'онкологические и аутоиммунные заболевания',
          'нарушения свёртываемости крови',
          'аллергия на компоненты препаратов',
          'сахарный диабет в стадии декомпенсации',
          'склонность к келоидным рубцам',
        ],
        after: ['Врач уточнит ваши диагнозы и лекарства заранее, чтобы исключить риски.'],
      },
      {
        h2: 'Как проходит процедура',
        list: [
          'очищение и дезинфекция кожи',
          'обезболивающий крем при необходимости',
          'введение мезококтейля тонкими иглами',
          'успокаивающая маска',
        ],
        after: [
          'Сразу после уколов на коже видны небольшие бугорки, возможно покраснение. Их не нужно трогать и закрывать плотным макияжем.',
        ],
      },
      {
        h2: 'Результат и поддержка',
        paragraphs: [
          'Эффект накапливается. Обычно врач назначает курс из нескольких визитов, а потом предлагает поддерживающие процедуры. Сколько их потребуется и с каким перерывом, зависит от кожи и цели. Точных процентов никто назвать не сможет, поэтому доверяйте ориентиру, который даст врач после осмотра.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Mezoterapie facială',
    serviceType: 'Mezoterapie facială',
    sections: [
      {
        h2: 'Cum funcționează mezoterapia',
        paragraphs: [
          'Acele foarte subțiri duc substanțele active direct în straturile pielii unde sunt necesare. Drumul acesta este mai scurt decât al unei creme, care trebuie să treacă de bariera de protecție. Compoziția cocktailului o alege medicul în funcție de scop: unui pacient îi trebuie hidratare, altuia uniformizarea tenului, altuia susținerea fermității.',
        ],
      },
      {
        h2: 'Cu ce probleme vin pacienții',
        list: [
          'piele uscată și deshidratată',
          'scăderea fermității, schimbări legate de vârstă',
          'riduri fine și de expresie',
          'pigmentare și ten neuniform',
          'urme de acnee și pori dilatați',
          'ten tern',
        ],
      },
      {
        h2: 'Când procedura nu se face',
        list: [
          'sarcina și alăptarea',
          'infecții acute și boli cronice în acutizare',
          'boli oncologice și autoimune',
          'tulburări de coagulare a sângelui',
          'alergie la componentele preparatelor',
          'diabet zaharat decompensat',
          'tendință la cicatrici cheloide',
        ],
        after: ['Medicul vă va întreba din timp despre diagnostice și medicamente, pentru a elimina riscurile.'],
      },
      {
        h2: 'Cum decurge procedura',
        list: [
          'curățarea și dezinfectarea pielii',
          'cremă anestezică, la nevoie',
          'introducerea cocktailului de mezoterapie cu ace subțiri',
          'mască calmantă',
        ],
        after: [
          'Imediat după înțepături se văd mici umflături pe piele, posibil și roșeață. Nu trebuie atinse și nici acoperite cu machiaj gros.',
        ],
      },
      {
        h2: 'Rezultatul și întreținerea',
        paragraphs: [
          'Efectul se acumulează. De obicei medicul recomandă un curs de mai multe vizite, apoi propune proceduri de întreținere. Câte vor fi necesare și cu ce pauză depinde de piele și de scop. Procente exacte nu poate promite nimeni, de aceea aveți încredere în reperul pe care vi-l dă medicul după examinare.',
        ],
      },
    ],
  },
};
