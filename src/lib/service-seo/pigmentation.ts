import type { ServiceSeo } from '@/lib/service-seo/types';

export const pigmentation: ServiceSeo = {
  medical: true,
  ru: {
    serviceName: 'Терапия против пигментации',
    serviceType: 'Лечение пигментных пятен',
    sections: [
      {
        h2: 'Откуда берутся пигментные пятна',
        list: [
          'гормональные изменения, например во время беременности или в менопаузу',
          'ультрафиолет: загар и солнечные ожоги',
          'воспаления, в том числе акне, после которых остаются тёмные следы',
          'возрастные изменения кожи',
        ],
        after: ['Чаще всего причин несколько, и от них зависит, как пятно поведёт себя после лечения.'],
      },
      {
        h2: 'Сначала осмотр',
        paragraphs: [
          'Не каждое тёмное пятно относится к косметическим проблемам. Если пятно быстро растёт, меняет цвет, форму или границы, зудит либо кровоточит, его нужно показать врачу до любых осветляющих процедур. Врач осматривает пятно и решает, можно ли заниматься им в рамках косметологии.',
        ],
      },
      {
        h2: 'Из чего состоит терапия',
        paragraphs: [
          'Обычно сочетают несколько подходов. Пилинги ускоряют обновление поверхностных слоёв, осветляющие средства замедляют выработку меланина, а ежедневная солнцезащита не даёт пятнам вернуться. Набор и последовательность врач определяет по типу пятен и состоянию кожи.',
          'Результат появляется постепенно. Пигмент, который формировался годами, быстро не уходит, а при тёмных пятнах после воспалений нередко приходится сначала успокоить кожу.',
        ],
      },
      {
        h2: 'Почему без защиты от солнца лечение не работает',
        paragraphs: [
          'Ультрафиолет заставляет клетки вырабатывать больше пигмента, поэтому недавно осветлённая кожа без защиты быстро темнеет снова. Используйте солнцезащитное средство каждый день, в том числе в пасмурную погоду, и обновляйте его на улице.',
        ],
      },
    ],
    faq: [
      {
        question: 'Сколько процедур необходимо для полного удаления пигментации?',
        answer:
          'Количество процедур зависит от типа и глубины пигментных пятен. Врач называет ориентир после осмотра кожи.',
      },
      {
        question: 'Есть ли противопоказания к процедурам?',
        answer:
          'Противопоказания включают беременность, лактацию и обострение хронических заболеваний. Полный список врач обсуждает на консультации перед началом лечения.',
      },
      {
        question: 'Как ухаживать за кожей после процедур?',
        answer:
          'Используйте солнцезащитное средство, избегайте прямого солнца и выполняйте рекомендации врача.',
      },
    ],
  },
  ro: {
    serviceName: 'Terapie antipigmentară',
    serviceType: 'Tratamentul petelor pigmentare',
    sections: [
      {
        h2: 'De unde apar petele pigmentare',
        list: [
          'schimbări hormonale, de exemplu în timpul sarcinii sau la menopauză',
          'razele ultraviolete: bronzul și arsurile solare',
          'inflamații, inclusiv acneea, după care rămân urme închise la culoare',
          'schimbările pielii legate de vârstă',
        ],
        after: ['De obicei sunt mai multe cauze, iar de ele depinde cum se va comporta pata după tratament.'],
      },
      {
        h2: 'Mai întâi examinarea',
        paragraphs: [
          'Nu orice pată închisă la culoare este o problemă cosmetică. Dacă pata crește repede, își schimbă culoarea, forma sau marginile, produce mâncărime ori sângerează, trebuie arătată medicului înainte de orice procedură de depigmentare. Medicul examinează pata și hotărăște dacă se poate trata în cadrul cosmetologiei.',
        ],
      },
      {
        h2: 'Din ce este alcătuită terapia',
        paragraphs: [
          'De obicei se combină mai multe abordări. Peelingurile accelerează reînnoirea straturilor superficiale, produsele de depigmentare încetinesc producerea de melanină, iar protecția solară zilnică împiedică revenirea petelor. Setul și ordinea le stabilește medicul după tipul petelor și starea pielii.',
          'Rezultatul apare treptat. Pigmentul format în ani nu dispare repede, iar în cazul petelor rămase după inflamații deseori trebuie mai întâi calmată pielea.',
        ],
      },
      {
        h2: 'De ce tratamentul nu funcționează fără protecție solară',
        paragraphs: [
          'Razele ultraviolete fac celulele să producă mai mult pigment, de aceea pielea recent luminată se închide din nou repede dacă nu este protejată. Folosiți zilnic protecție solară, inclusiv pe vreme noroasă, și reînnoiți-o când sunteți afară.',
        ],
      },
    ],
    faq: [
      {
        question: 'Câte proceduri sunt necesare pentru eliminarea completă a pigmentării?',
        answer:
          'Numărul de proceduri depinde de tipul și adâncimea petelor. Medicul spune un reper după examinarea pielii.',
      },
      {
        question: 'Există contraindicații pentru proceduri?',
        answer:
          'Contraindicațiile includ sarcina, alăptarea și acutizarea bolilor cronice. Lista completă o discută medicul la consultație, înainte de începerea tratamentului.',
      },
      {
        question: 'Cum îngrijesc pielea după proceduri?',
        answer:
          'Folosiți protecție solară, evitați soarele direct și respectați recomandările medicului.',
      },
    ],
  },
};
