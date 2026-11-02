import type { ServiceSeo } from '@/lib/service-seo/types';

export const cleaning: ServiceSeo = {
  ru: {
    serviceName: 'Чистка лица',
    serviceType: 'Чистка лица',
    sections: [
      {
        h2: 'Какие бывают виды чистки лица',
        items: [
          {
            h3: 'Механическая',
            text: 'Врач очищает поры вручную. Метод применяют при комедонах и закупоренных порах. После него кожа может быть красной, поэтому процедуру обычно не планируют перед важными событиями.',
          },
          {
            h3: 'Ультразвуковая',
            text: 'Колебания аппарата отшелушивают ороговевшие клетки и вымывают поверхностные загрязнения. Ощущения мягче, а покраснение держится недолго.',
          },
          {
            h3: 'Комбинированная',
            text: 'Здесь сочетают ультразвук и ручное очищение. Это вариант для кожи, где поверхностных загрязнений много, а в порах есть и плотные пробки.',
          },
          {
            h3: 'Атравматичная',
            text: 'Поры очищают с помощью профессиональных средств, без механического воздействия. Метод выбирают, когда кожа чувствительная или склонна к раздражению.',
          },
        ],
      },
      {
        h2: 'Кому подходит чистка',
        list: [
          'жирная и комбинированная кожа',
          'комедоны и расширенные поры',
          'тусклый цвет лица и неровная текстура',
          'кожа, которую готовят к другим процедурам, например к пилингу',
        ],
        after: ['Какой метод выбрать, врач решает по состоянию кожи в день визита, а не по названию процедуры.'],
      },
      {
        h2: 'Когда чистку не делают',
        list: [
          'на коже острое воспаление или гнойные высыпания в обрабатываемой зоне',
          'активный герпес',
          'аллергическая реакция на компоненты применяемых средств',
        ],
        after: ['При сомнениях врач предложит сначала успокоить кожу, а чистку отложить.'],
      },
      {
        h2: 'Как проходит процедура',
        list: [
          'врач осматривает кожу и обсуждает с вами жалобы',
          'вместе выбирают метод чистки',
          'кожу подготавливают: снимают макияж и размягчают поры',
          'проводят саму чистку выбранным методом',
          'наносят успокаивающую маску и завершают уходом',
        ],
      },
      {
        h2: 'После чистки',
        paragraphs: [
          'Небольшое покраснение и чувствительность в первые часы встречаются часто. Не трите лицо, не выдавливайте высыпания, используйте мягкие средства и защиту от солнца. Какие продукты временно исключить и когда возвращаться к привычному макияжу, врач скажет на приёме. Как часто повторять чистку, зависит от типа кожи.',
        ],
      },
    ],
  },
  ro: {
    serviceName: 'Curățarea feței',
    serviceType: 'Curățarea feței',
    sections: [
      {
        h2: 'Tipuri de curățare a feței',
        items: [
          {
            h3: 'Mecanică',
            text: 'Medicul curăță porii manual. Metoda se folosește în cazul comedoanelor și al porilor înfundați. După ea pielea poate fi roșie, de aceea procedura de obicei nu se programează înaintea unor evenimente importante.',
          },
          {
            h3: 'Cu ultrasunete',
            text: 'Vibrațiile aparatului desprind celulele cornoase și îndepărtează impuritățile de la suprafață. Senzațiile sunt mai blânde, iar roșeața dispare repede.',
          },
          {
            h3: 'Combinată',
            text: 'Aici se îmbină ultrasunetele cu curățarea manuală. Este o variantă pentru pielea cu multe impurități superficiale și cu dopuri dense în pori.',
          },
          {
            h3: 'Atraumatică',
            text: 'Porii se curăță cu produse profesionale, fără acțiune mecanică. Metoda se alege când pielea este sensibilă sau predispusă la iritații.',
          },
        ],
      },
      {
        h2: 'Cui i se potrivește curățarea',
        list: [
          'piele grasă și mixtă',
          'comedoane și pori dilatați',
          'ten tern și textură neuniformă',
          'piele pregătită pentru alte proceduri, de exemplu pentru peeling',
        ],
        after: ['Ce metodă se alege, decide medicul după starea pielii din ziua vizitei, nu după denumirea procedurii.'],
      },
      {
        h2: 'Când curățarea nu se face',
        list: [
          'pe piele există inflamație acută sau erupții purulente în zona tratată',
          'herpes activ',
          'reacție alergică la componentele produselor folosite',
        ],
        after: ['Dacă există îndoieli, medicul va propune întâi calmarea pielii și va amâna curățarea.'],
      },
      {
        h2: 'Cum decurge procedura',
        list: [
          'medicul examinează pielea și discută cu dumneavoastră problemele',
          'alegeți împreună metoda de curățare',
          'pielea este pregătită: se demachiază și se înmoaie porii',
          'se face curățarea cu metoda aleasă',
          'se aplică o mască calmantă și se încheie cu îngrijirea',
        ],
      },
      {
        h2: 'După curățare',
        paragraphs: [
          'O ușoară roșeață și sensibilitate în primele ore apar des. Nu frecați fața, nu stoarceți coșurile, folosiți produse blânde și protecție solară. Ce produse să evitați temporar și când vă întoarceți la machiajul obișnuit, vă spune medicul la consultație. Cât de des se repetă curățarea depinde de tipul pielii.',
        ],
      },
    ],
  },
};
