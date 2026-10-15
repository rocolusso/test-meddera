import type { ServiceSeo } from '@/lib/service-seo/types';

export const antiacne: ServiceSeo = {
  medical: true,
  ru: {
    serviceName: 'Терапия анти-акне',
    serviceType: 'Лечение акне и постакне',
    sections: [
      {
        h2: 'Почему акне лучше лечить, а не пережидать',
        paragraphs: [
          'Акне связано с работой сальных желез и волосяных фолликулов: поры закупориваются, появляются воспаления. Если оставить это без лечения, на месте высыпаний могут остаться рубцы и пигментные пятна, а новые элементы появляются снова. Поэтому врач работает и с текущими высыпаниями, и с причинами, которые их вызывают.',
        ],
      },
      {
        h2: 'Из чего может состоять терапия',
        list: [
          'очищение кожи, чтобы освободить поры',
          'пилинги, которые помогают коже обновляться и не давать порам закупориваться',
          'антибактериальная обработка при воспалённых элементах',
          'увлажнение, потому что пересушенная кожа начинает вырабатывать ещё больше кожного сала',
          'подбор домашнего ухода под ваш тип кожи',
        ],
        after: [
          'Набор процедур зависит от стадии акне и типа кожи, поэтому два пациента с похожими жалобами нередко получают разные схемы.',
        ],
      },
      {
        h2: 'Чего делать не стоит',
        list: [
          'выдавливать высыпания: воспаление распространяется глубже, и появляются следы',
          'пользоваться спиртовыми лосьонами и жёсткими скрабами, которые раздражают кожу',
          'самостоятельно сочетать несколько сильных активных средств',
        ],
      },
      {
        h2: 'Когда нужен именно врач',
        paragraphs: [
          'К специалисту стоит прийти, если высыпания болезненные и глубокие, остаются рубцы, лечение дома не помогает или акне сильно влияет на самочувствие. В таких случаях может понадобиться дерматологическое лечение, а косметологические процедуры подключают после осмотра.',
        ],
      },
    ],
    faq: [
      {
        question: 'Сколько процедур необходимо для полного избавления от акне?',
        answer:
          'Количество зависит от степени тяжести акне и особенностей кожи. Ориентировочный курс врач называет после осмотра.',
      },
      {
        question: 'Болезненны ли процедуры?',
        answer:
          'Большинство процедур переносится с минимальным дискомфортом. Ощущения зависят от метода, а возможность обезболивания можно обсудить с врачом.',
      },
      {
        question: 'Можно ли проводить лечение летом?',
        answer:
          'Это зависит от метода. Часть процедур лучше планировать вне периода активного солнца, а при любом лечении кожу нужно защищать от ультрафиолета. Врач подскажет, что подходит в вашем случае.',
      },
    ],
  },
  ro: {
    serviceName: 'Terapie anti-acnee',
    serviceType: 'Tratamentul acneei și al urmelor ei',
    sections: [
      {
        h2: 'De ce acneea merită tratată, nu așteptată',
        paragraphs: [
          'Acneea este legată de activitatea glandelor sebacee și a foliculilor piloși: porii se înfundă, apar inflamații. Dacă nu este tratată, în locul erupțiilor pot rămâne cicatrici și pete pigmentare, iar elemente noi apar din nou. De aceea medicul lucrează atât cu erupțiile actuale, cât și cu cauzele lor.',
        ],
      },
      {
        h2: 'Din ce poate fi alcătuită terapia',
        list: [
          'curățarea pielii pentru a elibera porii',
          'peelinguri, care ajută pielea să se reînnoiască și să nu lase porii să se înfunde',
          'tratament antibacterian pentru elementele inflamate',
          'hidratare, pentru că pielea prea uscată începe să producă și mai mult sebum',
          'alegerea îngrijirii de acasă potrivite tipului dumneavoastră de piele',
        ],
        after: [
          'Setul de proceduri depinde de stadiul acneei și de tipul pielii, de aceea doi pacienți cu plângeri asemănătoare primesc deseori scheme diferite.',
        ],
      },
      {
        h2: 'Ce nu se recomandă',
        list: [
          'să stoarceți erupțiile: inflamația se extinde în profunzime și rămân urme',
          'să folosiți loțiuni cu alcool și scrub-uri dure, care irită pielea',
          'să combinați singur mai multe produse active puternice',
        ],
      },
      {
        h2: 'Când este nevoie de medic',
        paragraphs: [
          'Merită să vă adresați unui specialist dacă erupțiile sunt dureroase și profunde, rămân cicatrici, tratamentul de acasă nu ajută sau acneea vă afectează serios starea de spirit. În astfel de cazuri poate fi nevoie de tratament dermatologic, iar procedurile cosmetologice se adaugă după examinare.',
        ],
      },
    ],
    faq: [
      {
        question: 'Câte proceduri sunt necesare pentru a scăpa complet de acnee?',
        answer:
          'Numărul depinde de gravitatea acneei și de particularitățile pielii. Un curs orientativ îl stabilește medicul după examinare.',
      },
      {
        question: 'Sunt dureroase procedurile?',
        answer:
          'Majoritatea procedurilor se tolerează cu disconfort minim. Senzațiile depind de metodă, iar posibilitatea unei anestezii se poate discuta cu medicul.',
      },
      {
        question: 'Se poate face tratamentul vara?',
        answer:
          'Depinde de metodă. Unele proceduri este mai bine să fie programate în afara perioadei de soare intens, iar la orice tratament pielea trebuie protejată de radiațiile ultraviolete. Medicul vă spune ce se potrivește în cazul dumneavoastră.',
      },
    ],
  },
};
