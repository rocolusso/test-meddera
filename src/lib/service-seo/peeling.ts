import type { ServiceSeo } from '@/lib/service-seo/types';

export const peeling: ServiceSeo = {
  ru: {
    serviceName: 'Пилинг',
    serviceType: 'Пилинг лица и тела',
    sections: [
      {
        h2: 'Что происходит с кожей при пилинге',
        paragraphs: [
          'Кожа постоянно обновляется, но с возрастом, на солнце и при воспалениях этот процесс замедляется или идёт неравномерно. Пилинг убирает слой ороговевших клеток и запускает обновление, поэтому тон выравнивается, а текстура становится ровнее.',
        ],
      },
      {
        h2: 'Какую глубину выбирают',
        paragraphs: [
          'Пилинги делят по глубине воздействия. Поверхностные работают только с верхним слоем и оставляют мало следов. Срединные проникают глубже, их результат заметнее, а восстановление дольше. Глубокие требуют отдельной подготовки и подходят не каждому. Какой уровень нужен именно вам, решает врач по состоянию кожи, времени года и вашей задаче.',
        ],
      },
      {
        h2: 'С какими задачами приходят',
        list: [
          'тусклый цвет лица',
          'пигментные пятна',
          'мелкие морщины',
          'акне и следы после него',
          'расширенные поры',
        ],
      },
      {
        h2: 'Когда пилинг откладывают',
        list: [
          'беременность и лактация',
          'воспаление или раны в обрабатываемой зоне',
          'аллергия на компоненты состава',
          'склонность к келоидным рубцам',
          'свежий загар',
          'активный герпес',
        ],
        after: ['Полный список противопоказаний врач обсудит с вами до процедуры.'],
      },
      {
        h2: 'Подготовка и уход',
        paragraphs: [
          'Перед пилингом врач может попросить на время отказаться от скрабов и некоторых активных средств. Какие именно, он скажет на консультации, потому что список зависит от выбранного состава.',
          'После процедуры кожа шелушится, и это нормально. Не сдирайте плёнки, не пользуйтесь скрабами, увлажняйте кожу и ежедневно наносите солнцезащитное средство, иначе пигмент вернётся.',
        ],
      },
      {
        h2: 'Сколько процедур нужно',
        paragraphs: [
          'Это зависит от глубины пилинга и задачи. Иногда хватает одного сеанса, иногда нужен курс с паузами между процедурами. Расписание врач составляет после осмотра.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Peeling',
    serviceType: 'Peeling facial și corporal',
    sections: [
      {
        h2: 'Ce se întâmplă cu pielea la peeling',
        paragraphs: [
          'Pielea se reînnoiește continuu, dar odată cu vârsta, la soare și în caz de inflamații acest proces încetinește sau este neuniform. Peelingul îndepărtează stratul de celule cornoase și declanșează reînnoirea, de aceea tenul se uniformizează, iar textura devine mai netedă.',
        ],
      },
      {
        h2: 'Ce adâncime se alege',
        paragraphs: [
          'Peelingurile se împart după adâncimea acțiunii. Cele superficiale lucrează doar cu stratul de la suprafață și lasă puține urme. Cele medii pătrund mai adânc, rezultatul este mai vizibil, iar refacerea durează mai mult. Cele profunde cer o pregătire separată și nu se potrivesc tuturor. Ce nivel vă trebuie, decide medicul după starea pielii, anotimp și scopul dumneavoastră.',
        ],
      },
      {
        h2: 'Cu ce scopuri vin pacienții',
        list: [
          'ten tern',
          'pete pigmentare',
          'riduri fine',
          'acnee și urmele ei',
          'pori dilatați',
        ],
      },
      {
        h2: 'Când peelingul se amână',
        list: [
          'sarcina și alăptarea',
          'inflamație sau răni în zona tratată',
          'alergie la componentele soluției',
          'tendință la cicatrici cheloide',
          'bronzare recentă',
          'herpes activ',
        ],
        after: ['Lista completă a contraindicațiilor o discută medicul cu dumneavoastră înainte de procedură.'],
      },
      {
        h2: 'Pregătirea și îngrijirea',
        paragraphs: [
          'Înainte de peeling medicul vă poate ruga să renunțați o vreme la scrub-uri și la unele produse active. Pe care anume, vă spune la consultație, pentru că lista depinde de soluția aleasă.',
          'După procedură pielea se descuamează, iar acest lucru este normal. Nu dezlipiți pielițele, nu folosiți scrub-uri, hidratați pielea și aplicați zilnic protecție solară, altfel pigmentul revine.',
        ],
      },
      {
        h2: 'Câte proceduri sunt necesare',
        paragraphs: [
          'Depinde de adâncimea peelingului și de scop. Uneori ajunge o singură ședință, alteori este nevoie de un curs cu pauze între proceduri. Programul îl stabilește medicul după examinare.',
        ],
      },
    ],
  },
};
