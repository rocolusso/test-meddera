import type { ServiceSeo } from '@/lib/service-seo/types';

export const consult: ServiceSeo = {
  medical: true,
  ru: {
    serviceName: 'Консультация дерматокосметолога',
    serviceType: 'Консультация врача-дерматокосметолога',
    sections: [
      {
        h2: 'С какими вопросами приходят на консультацию',
        list: [
          'высыпания, зуд, шелушение или покраснение кожи, причину которых трудно определить самому',
          'акне и следы после него',
          'пигментные пятна и неровный тон',
          'сухая, обезвоженная или чувствительная кожа',
          'родинки, которые изменились или появились недавно',
          'выпадение волос, проблемы с ногтями',
          'подбор домашнего ухода и косметологических процедур',
        ],
      },
      {
        h2: 'Чем занимается дерматокосметолог',
        paragraphs: [
          'Врач работает на стыке двух направлений: лечит кожные заболевания и подбирает косметологические процедуры. Это удобно, когда проблема и пожелания пересекаются. Например, при акне вы хотите понять, какие процедуры можно делать сейчас, а какие лучше отложить.',
        ],
      },
      {
        h2: 'Как проходит первый приём',
        paragraphs: [
          'Сначала врач расспрашивает о жалобах: когда они появились, что их усиливает, какие средства и лекарства вы уже используете, чем болели раньше. Потом осматривает кожу при хорошем освещении и при необходимости рассматривает образования с увеличением.',
          'В конце вы получаете объяснение, что происходит с кожей, и понятный план: уход дома, лечение или процедуры, порядок и перерывы между ними. Если для точного вывода данных не хватает, врач назначает анализы или другие обследования. Сама процедура планируется после осмотра, когда ясно, что подойдёт именно вашей коже.',
        ],
      },
      {
        h2: 'Что подготовить заранее',
        paragraphs: [
          'За день до визита не наносите плотный макияж, а в проблемной зоне не делайте пилингов. Запишите, что вас беспокоит, когда это началось и что усиливает симптомы. Возьмите названия средств и лекарств, которыми пользуетесь, включая кремы и добавки.',
        ],
      },
      {
        h2: 'Когда с визитом лучше не тянуть',
        list: [
          'родинка быстро растёт, меняет цвет или форму, кровоточит или болит',
          'новое образование на коже не проходит',
          'сильный зуд мешает спать',
          'воспаление расходится на соседние участки кожи',
        ],
      },
    ],
    faq: [
      {
        question: 'Нужна ли предварительная запись?',
        answer: 'Да, приём ведётся по предварительной записи: по телефону или через форму на сайте.',
      },
      {
        question: 'Какие документы необходимо иметь при себе?',
        answer:
          'Паспорт или удостоверение личности, а также медицинские документы, если они есть: выписки, результаты анализов и обследований.',
      },
    ],
  },
  ro: {
    serviceName: 'Consultația dermatocosmetologului',
    serviceType: 'Consultație la medicul dermatocosmetolog',
    sections: [
      {
        h2: 'Cu ce probleme vin pacienții la consultație',
        list: [
          'erupții, mâncărime, descuamare sau roșeață a pielii, a căror cauză este greu de stabilit singur',
          'acnee și urmele lăsate de ea',
          'pete pigmentare și ten neuniform',
          'piele uscată, deshidratată sau sensibilă',
          'alunițe care s-au schimbat sau au apărut recent',
          'căderea părului, probleme cu unghiile',
          'alegerea îngrijirii de acasă și a procedurilor cosmetologice',
        ],
      },
      {
        h2: 'Ce face medicul dermatocosmetolog',
        paragraphs: [
          'Medicul lucrează la intersecția a două domenii: tratează afecțiunile pielii și alege procedurile cosmetologice. Este util atunci când problema și dorințele se suprapun. De exemplu, în cazul acneei vreți să știți ce proceduri se pot face acum și ce este mai bine amânat.',
        ],
      },
      {
        h2: 'Cum decurge prima vizită',
        paragraphs: [
          'Mai întâi medicul vă întreabă despre simptome: când au apărut, ce le agravează, ce produse și medicamente folosiți deja, ce boli ați avut. Apoi examinează pielea la o lumină bună și, la nevoie, privește formațiunile cu mărire.',
          'La final primiți o explicație despre ce se întâmplă cu pielea și un plan clar: îngrijire acasă, tratament sau proceduri, ordinea și pauzele dintre ele. Dacă lipsesc date pentru o concluzie sigură, medicul recomandă analize sau alte investigații. Procedura în sine se planifică după examinare, când este clar ce se potrivește pielii dumneavoastră.',
        ],
      },
      {
        h2: 'Ce puteți pregăti din timp',
        paragraphs: [
          'Cu o zi înainte nu aplicați machiaj gros, iar în zona cu probleme nu faceți peelinguri. Notați ce vă deranjează, când a început și ce agravează simptomele. Luați cu dumneavoastră denumirile produselor și medicamentelor pe care le folosiți, inclusiv creme și suplimente.',
        ],
      },
      {
        h2: 'Când nu merită să amânați vizita',
        list: [
          'alunița crește repede, își schimbă culoarea sau forma, sângerează sau doare',
          'o formațiune nouă pe piele nu dispare',
          'mâncărimea puternică vă împiedică să dormiți',
          'inflamația se extinde pe zonele învecinate',
        ],
      },
    ],
    faq: [
      {
        question: 'Este necesară programarea prealabilă?',
        answer: 'Da, consultațiile se desfășoară cu programare prealabilă: la telefon sau prin formularul de pe site.',
      },
      {
        question: 'Ce documente trebuie să am la mine?',
        answer:
          'Buletinul de identitate sau pașaportul, precum și documentele medicale, dacă le aveți: extrase, rezultate ale analizelor și investigațiilor.',
      },
    ],
  },
};
