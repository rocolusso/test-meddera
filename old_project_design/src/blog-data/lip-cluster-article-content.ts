/** Structured copy for lip cluster articles (informational; not personal medical advice). */

export type ArticleSection = { h2: string; paragraphs: string[] };

export type LipClusterArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

export const LIP_CLUSTER_ARTICLE_CONTENT: Record<string, LipClusterArticleCopy> = {
  'lip-consult-questions': {
    sectionsRu: [
      {
        h2: 'Зачем нужна консультация до процедуры',
        paragraphs: [
          'На очной консультации врач оценивает анатомию губ, собирает анамнез и обсуждает ожидания. Это снижает риск несоответствия результата ожиданиям и помогает выбрать безопасный план.',
          'Материал носит общий характер и не заменяет осмотр.',
        ],
      },
      {
        h2: 'Что полезно спросить',
        paragraphs: [
          'Опыт специалиста с инъекционными техниками, какие классы препаратов применяются, как оценивается симметрия и объём, что делать при нежелательном эффекте.',
          'Уточните сроки наблюдения после процедуры и как записаться на повторный визит при необходимости.',
        ],
      },
      {
        h2: 'Чего ожидать после разговора',
        paragraphs: [
          'Врач может отложить процедуру при выявлении противопоказаний или предложить альтернативный путь лечения. Решение всегда индивидуально.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'De ce este necesară consultația înainte de procedură',
        paragraphs: [
          'La consultație, medicul evaluează anatomia buzelor, colectează anamneza și discută așteptările. Acest lucru reduce riscul de nepotrivire a rezultatului și susține un plan sigur.',
          'Materialul este informativ și nu înlocuiește examenul clinic.',
        ],
      },
      {
        h2: 'Întrebări utile',
        paragraphs: [
          'Experiența specialistului, tipurile de preparate, modul în care se evaluează simetria și volumul, pașii în cazul unui efect nedorit.',
          'Clarificați perioada de observație după procedură și cum puteți reveni la control dacă este nevoie.',
        ],
      },
      {
        h2: 'După consultație',
        paragraphs: [
          'Procedura poate fi amânată dacă apar contraindicații sau se propune altă abordare. Decizia este mereu individuală.',
        ],
      },
    ],
  },
  'lip-procedure-steps': {
    sectionsRu: [
      {
        h2: 'Общая логика визита',
        paragraphs: [
          'Обычно этапы включают подготовку кожи, обезболивание по протоколу клиники, введение препарата и оценку результата. Конкретная последовательность определяется врачом.',
        ],
      },
      {
        h2: 'Безопасность и стерильность',
        paragraphs: [
          'Использование стерильного расходника и соблюдение асептики снижают риск воспаления. Детали вам объяснят в клинике.',
        ],
      },
      {
        h2: 'После процедуры',
        paragraphs: [
          'Краткий отёк и дискомфорт часто встречаются; персональные рекомендации по уходу вы получите у лечащего врача.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Derularea generală a vizitei',
        paragraphs: [
          'De obicei există pregătirea pielii, anestezie conform protocolului, administrarea preparatului și evaluarea rezultatului. Secvența exactă este stabilită de medic.',
        ],
      },
      {
        h2: 'Siguranță și asepsie',
        paragraphs: [
          'Material steril și reguli stricte de asepsie reduc riscul inflamației. Detaliile vi se explică în clinică.',
        ],
      },
      {
        h2: 'După procedură',
        paragraphs: [
          'Edemul ușor și disconfortul pot apărea; recomandările personale de îngrijire vi le oferă medicul.',
        ],
      },
    ],
  },
  'lip-myths-facts': {
    sectionsRu: [
      {
        h2: 'Миф: «результат навсегда»',
        paragraphs: [
          'Препараты на основе гиалуроновой кислоты со временем естественным образом включаются в обмен веществ; срок эффекта индивидуален.',
        ],
      },
      {
        h2: 'Миф: «абсолютно безболезненно у всех»',
        paragraphs: [
          'Чувствительность различается; клиника использует методы обезболивания по показаниям.',
        ],
      },
      {
        h2: 'Факт: план должен быть индивидуальным',
        paragraphs: [
          'Одинаковый объём и техника не подходят всем; оценка проводится на консультации.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Mit: „rezultatul durează pentru totdeauna”',
        paragraphs: [
          'Preparatele pe bază de acid hialuronic sunt integrate în timp în metabolism; durata efectului variază individual.',
        ],
      },
      {
        h2: 'Mit: „fără durere la toată lumea”',
        paragraphs: [
          'Sensibilitatea diferă; metodele de confort sunt alese în funcție de situație.',
        ],
      },
      {
        h2: 'Fapt: planul este individual',
        paragraphs: [
          'Același volum sau tehnică nu convine tuturor; evaluarea se face la consultație.',
        ],
      },
    ],
  },
  'lip-expectations': {
    sectionsRu: [
      {
        h2: 'Как формулировать желаемый результат',
        paragraphs: [
          'Опирайтесь на референсы и слова вроде «естественный контур», «симметрия», «чуть больше объёма в зоне Х» — врач переведёт это в медицински безопасный план.',
        ],
      },
      {
        h2: 'Ограничения анатомии',
        paragraphs: [
          'Толщина тканей, симметрия изначально и состояние кожи влияют на то, что реалистично без перегруза.',
        ],
      },
      {
        h2: 'Пошаговая коррекция',
        paragraphs: [
          'Иногда результат наращивают за несколько визитов — это нормальная стратегия для естественности.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Cum să descrieți rezultatul dorit',
        paragraphs: [
          'Folosiți referințe și expresii precum „contur natural”, „simetrie”, „puțin mai mult volum în zona …” — medicul traduce în plan sigur.',
        ],
      },
      {
        h2: 'Limite anatomice',
        paragraphs: [
          'Grosimea țesuturilor, simetria de bază și starea pielii influențează ce este fezabil.',
        ],
      },
      {
        h2: 'Corecție în etape',
        paragraphs: [
          'Uneori rezultatul se construiește în mai multe vizite — o abordare obișnuită pentru naturalitate.',
        ],
      },
    ],
  },
  'lip-after-swelling': {
    sectionsRu: [
      {
        h2: 'Что часто бывает в первые дни',
        paragraphs: [
          'Умеренный отёк, чувство плотности, реже небольшие синячки — типичные явления. Интенсивность индивидуальна.',
        ],
      },
      {
        h2: 'Когда стоит связаться с клиникой',
        paragraphs: [
          'Нарастающая боль, лихорадка, выраженное покраснение с распространением, подозрение на аллергию — срочно обсудите с врачом или скорой помощью по ситуации.',
        ],
      },
      {
        h2: 'Дисклеймер',
        paragraphs: [
          'Этот текст не для самодиагностики; следуйте рекомендациям, полученным у вашего врача после процедуры.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este frecvent în primele zile',
        paragraphs: [
          'Edem moderat, senzație de densitate, uneori vânătăi minore — fenomene obișnuite. Intensitatea variază.',
        ],
      },
      {
        h2: 'Când să contactați clinica',
        paragraphs: [
          'Durere în creștere, febră, roșeață extinsă, suspiciune de alergie — adresați-vă urgent medicului sau serviciului de urgență, după caz.',
        ],
      },
      {
        h2: 'Exonerare',
        paragraphs: [
          'Textul nu înlocuiește sfatul medical personal; urmați recomandările primite de la medicul dumneavoastră.',
        ],
      },
    ],
  },
  'lip-contraindications': {
    sectionsRu: [
      {
        h2: 'Зачем врач собирает анамнез',
        paragraphs: [
          'Ряд состояний и приём некоторых препаратов могут требовать отсрочки или отказа от процедуры. Полный список определяет только специалист после осмотра.',
        ],
      },
      {
        h2: 'Общие категории для разговора на консультации',
        paragraphs: [
          'Беременность и лактация, острые инфекции, обострения хронических заболеваний, недавние процедуры в той же зоне — типичные темы для обсуждения.',
        ],
      },
      {
        h2: 'Не для самоназначения',
        paragraphs: [
          'Не используйте общие статьи вместо очного решения врача.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'De ce este important anamneza',
        paragraphs: [
          'Anumite stări și medicamente pot impune amânarea sau renunțarea la procedură. Lista completă o stabilește medicul după examen.',
        ],
      },
      {
        h2: 'Teme frecvente la consultație',
        paragraphs: [
          'Sarcină și alăptare, infecții acute, exacerbări ale bolilor cronice, proceduri recente în aceeași zonă — subiecte tipice.',
        ],
      },
      {
        h2: 'Nu înlocuiește decizia medicală',
        paragraphs: [
          'Articolele generale nu substituie evaluarea clinică.',
        ],
      },
    ],
  },
  'lip-shape-symmetry': {
    sectionsRu: [
      {
        h2: 'Форма и симметрия',
        paragraphs: [
          'Коррекция может быть направлена на выравнивание контура и симметрии без значительного увеличения объёма — задача формулируется на консультации.',
        ],
      },
      {
        h2: 'Визуальная гармония',
        paragraphs: [
          'Врач учитывает пропорции лица; иногда меньший объём выглядит естественнее.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Formă și simetrie',
        paragraphs: [
          'Corecția poate viza conturul și simetria fără creștere mare de volum — obiectivul se stabilește la consultație.',
        ],
      },
      {
        h2: 'Armonie vizuală',
        paragraphs: [
          'Medicul ia în calcul proporțiile feței; uneori un volum mai mic arată mai natural.',
        ],
      },
    ],
  },
  'lip-aftercare-general': {
    sectionsRu: [
      {
        h2: 'Общие принципы',
        paragraphs: [
          'Следуйте письменным рекомендациям клиники: они важнее любых обобщённых статей.',
        ],
      },
      {
        h2: 'Что обычно ограничивают на короткий срок',
        paragraphs: [
          'Интенсивный спорт, сауна, травмирование зоны, часть косметических процедур — частые темы; сроки индивидуальны.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Principii generale',
        paragraphs: [
          'Urmați recomandările scrise ale clinicii — ele primează față de orice articol general.',
        ],
      },
      {
        h2: 'Restricții frecvente pe termen scurt',
        paragraphs: [
          'Sport intens, saună, traumatisme locale, anumite proceduri cosmetice — discutate individual.',
        ],
      },
    ],
  },
  'lip-choose-clinic': {
    sectionsRu: [
      {
        h2: 'На что смотреть в Бельцах',
        paragraphs: [
          'Медицинское образование специалиста, прозрачность по препаратам и протоколу, стерильность, возможность связаться после процедуры.',
        ],
      },
      {
        h2: 'Красные флаги',
        paragraphs: [
          'Давление «сделать сегодня без осмотра», обещание фиксированного результата, отсутствие информированного согласия.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Criterii în Bălți',
        paragraphs: [
          'Pregătirea medicală a specialistului, transparență privind preparatul și protocolul, asepsie, suport după procedură.',
        ],
      },
      {
        h2: 'Semnale de atenție',
        paragraphs: [
          'Presiunea pentru „procedură astăzi fără examen”, promisiuni fixe de rezultat, lipsa consimțământului informat.',
        ],
      },
    ],
  },
  'lip-duration-effect': {
    sectionsRu: [
      {
        h2: 'Почему сроки индивидуальны',
        paragraphs: [
          'Метаболизм, тип препарата, зона введения, образ жизни влияют на то, как долго сохраняется эффект.',
        ],
      },
      {
        h2: 'План наблюдения',
        paragraphs: [
          'На консультации можно согласовать, когда уместна повторная оценка — без привязки к «средним цифрам из интернета».',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'De ce durata variază',
        paragraphs: [
          'Metabolismul, tipul preparatului, zona injectării și stilul de viață influențează cât durează efectul.',
        ],
      },
      {
        h2: 'Plan de urmărire',
        paragraphs: [
          'La consultație puteți stabili când are sens o reevaluare — fără a vă baza doar pe medii anonime online.',
        ],
      },
    ],
  },
};
