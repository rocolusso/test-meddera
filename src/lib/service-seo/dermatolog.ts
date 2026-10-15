import type { ServiceSeo } from '@/lib/service-seo/types';

export const dermatolog: ServiceSeo = {
  medical: true,
  ru: {
    serviceName: 'Дерматолог',
    serviceType: 'Консультация и лечение у дерматолога',
    sections: [
      {
        h2: 'Когда стоит записаться к дерматологу',
        list: [
          'на коже появились высыпания, зуд или шелушение',
          'родинка изменилась или появилось новое образование',
          'беспокоят волосы или ногти',
          'нужен уход за кожей или косметологические процедуры, и хочется сначала убедиться, что для них нет противопоказаний',
        ],
      },
      {
        h2: 'С чем работает дерматолог',
        items: [
          {
            h3: 'Кожные заболевания',
            text: 'Врач диагностирует и лечит акне, экзему, псориаз, дерматит и другие заболевания кожи. Схему лечения он строит по результатам осмотра, а не по общему шаблону.',
          },
          {
            h3: 'Родинки и образования',
            text: 'Родинки и другие образования осматривают с помощью дерматоскопии: увеличение помогает увидеть признаки, из-за которых образование стоит проверить подробнее. Доброкачественные образования удаляют радиоволновым методом, электрокоагуляцией или Jett Plasma. Подходящий способ выбирает врач после осмотра.',
          },
          {
            h3: 'Эстетическая дерматология',
            text: 'Если нужны биоревитализация, мезотерапия, пилинги, ботокс или филлеры, сначала врач оценивает состояние кожи и говорит, что можно делать сейчас.',
          },
        ],
      },
      {
        h2: 'Как проходит приём',
        paragraphs: [
          'Врач выслушивает жалобы, уточняет, как давно они появились, что их вызывает и чем вы лечились раньше. Затем осматривает кожу, а при необходимости образования и родинки. Если диагноз нельзя поставить только по осмотру, назначает анализы или другие исследования.',
          'После этого вы получаете объяснение, с чем столкнулись, и план лечения. Он включает назначения, правила ухода и сроки повторного визита.',
        ],
      },
      {
        h2: 'Как подготовиться',
        paragraphs: [
          'Накануне не наносите макияж и крем на проблемную зону, чтобы врач увидел кожу без маскирующих средств. Запишите симптомы, их начало и то, чем вы уже пытались лечиться. Если вы уже обращались к врачам, возьмите выписки и результаты анализов.',
        ],
      },
    ],
    faq: [
      {
        question: 'Как записаться на приём к дерматологу в Бельцах?',
        answer: 'Позвоните по телефону или заполните форму на сайте, чтобы записаться на удобное время.',
      },
      {
        question: 'Какие документы нужны для приёма?',
        answer: 'Паспорт или удостоверение личности. Если у вас есть выписки и результаты анализов, возьмите их.',
      },
    ],
  },
  ro: {
    serviceName: 'Dermatolog',
    serviceType: 'Consultație și tratament la dermatolog',
    sections: [
      {
        h2: 'Când merită să vă programați la dermatolog',
        list: [
          'pe piele au apărut erupții, mâncărime sau descuamare',
          'o aluniță s-a schimbat sau a apărut o formațiune nouă',
          'vă deranjează părul sau unghiile',
          'doriți îngrijire a pielii sau proceduri cosmetologice și vreți să vă asigurați mai întâi că nu există contraindicații',
        ],
      },
      {
        h2: 'Cu ce lucrează dermatologul',
        items: [
          {
            h3: 'Afecțiuni ale pielii',
            text: 'Medicul diagnostichează și tratează acneea, eczema, psoriazisul, dermatitele și alte afecțiuni ale pielii. Schema de tratament o construiește pe baza examinării, nu după un șablon general.',
          },
          {
            h3: 'Alunițe și formațiuni',
            text: 'Alunițele și alte formațiuni se examinează prin dermatoscopie: mărirea ajută la observarea semnelor pentru care formațiunea merită verificată mai atent. Formațiunile benigne se îndepărtează cu radiocauter, prin electrocoagulare sau cu Jett Plasma. Metoda potrivită o alege medicul după examinare.',
          },
          {
            h3: 'Dermatologie estetică',
            text: 'Dacă aveți în vedere biorevitalizare, mezoterapie, peelinguri, botox sau fillere, medicul evaluează mai întâi starea pielii și spune ce se poate face acum.',
          },
        ],
      },
      {
        h2: 'Cum decurge consultația',
        paragraphs: [
          'Medicul ascultă simptomele, întreabă de când există, ce le provoacă și cum v-ați tratat până acum. Apoi examinează pielea și, la nevoie, formațiunile și alunițele. Dacă diagnosticul nu poate fi stabilit doar prin examinare, recomandă analize sau alte investigații.',
          'După aceea primiți o explicație despre ce se întâmplă și un plan de tratament. Acesta cuprinde recomandările, regulile de îngrijire și termenul vizitei de control.',
        ],
      },
      {
        h2: 'Cum vă pregătiți',
        paragraphs: [
          'În ajun nu aplicați machiaj sau cremă pe zona cu probleme, ca medicul să vadă pielea fără produse care o maschează. Notați simptomele, începutul lor și ce ați încercat deja. Dacă ați fost la alți medici, luați extrasele și rezultatele analizelor.',
        ],
      },
    ],
    faq: [
      {
        question: 'Cum mă programez la dermatolog în Bălți?',
        answer: 'Sunați la telefon sau completați formularul de pe site, pentru a vă programa la o oră potrivită.',
      },
      {
        question: 'Ce documente sunt necesare pentru consultație?',
        answer: 'Buletinul de identitate sau pașaportul. Dacă aveți extrase și rezultate ale analizelor, luați-le cu dumneavoastră.',
      },
    ],
  },
};
