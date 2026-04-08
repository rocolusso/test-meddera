import { BIOREVITALIZATION_ARTICLE_CONTENT_PART2 } from './biorevitalization-article-content-part2';

export type ArticleSection = { h2: string; paragraphs: string[] };

export type BiorevitalizationArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

const BIOREVITALIZATION_ARTICLE_CONTENT_PART1: Record<string, BiorevitalizationArticleCopy> = {
  'biorevitalizaciya-beltsy-chto-eto': {
    sectionsRu: [
      {
        h2: 'Что такое биоревитализация',
        paragraphs: [
          'Биоревитализация — метод введения препаратов на основе гиалуроновой кислоты в кожу для глубокого увлажнения и стимуляции регенерации. Отличие от мезотерапии: в биоревитализации используется только гиалуроновая кислота высокой концентрации.',
          'Гиалуроновая кислота — естественный компонент кожи, который удерживает влагу (1 молекула ГК связывает до 1000 молекул воды). С возрастом её количество снижается, кожа теряет тонус, появляются морщины.',
          'Цель биоревитализации: восстановить уровень гиалуроновой кислоты, улучшить гидратацию, стимулировать синтез коллагена и эластина, повысить тонус и эластичность кожи.',
        ],
      },
      {
        h2: 'Показания к биоревитализации',
        paragraphs: [
          'Обезвоженность кожи, потеря тонуса и эластичности, мелкие морщины, тусклый цвет лица, фотостарение (пигментация, неровный тон), подготовка к агрессивным процедурам (пилинги, лазер).',
          'Профилактика старения: биоревитализация в молодом возрасте (25-30 лет) поддерживает качество кожи, предотвращает появление глубоких морщин.',
          'Реабилитация после процедур: биоревитализация после пилингов, лазерных процедур ускоряет восстановление кожи.',
        ],
      },
      {
        h2: 'Препараты для биоревитализации',
        paragraphs: [
          'Препараты содержат гиалуроновую кислоту разной молекулярной массы: низкомолекулярная (проникает глубже, стимулирует синтез коллагена), высокомолекулярная (удерживает влагу в верхних слоях кожи).',
          'Концентрация ГК: 10-20 мг/мл (выше, чем в мезотерапии). Популярные препараты: Juvederm Hydrate, Restylane Vital, Teosyal Redensity I.',
          'Некоторые препараты содержат дополнительные компоненты: аминокислоты, антиоксиданты, витамины для усиления эффекта.',
        ],
      },
      {
        h2: 'Как проходит процедура',
        paragraphs: [
          'Консультация: оценка состояния кожи, выбор препарата, обсуждение ожиданий. Очищение кожи, нанесение анестезирующего крема (15-20 минут).',
          'Инъекции: врач вводит препарат в средние слои кожи по определённой схеме (папульная техника, линейная). Процедура занимает 20-30 минут.',
          'После процедуры: лёгкое покраснение, папулы в местах инъекций проходят за 1-2 часа. Можно сразу вернуться к обычной жизни.',
        ],
      },
      {
        h2: 'Биоревитализация в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные препараты для биоревитализации. Процедуру проводит опытный дерматокосметолог.',
          'Консультация включает: оценку показаний, выбор препарата, расчёт количества процедур (обычно курс 2-3 сеанса с интервалом 14-21 день).',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este biorevitalizarea',
        paragraphs: [
          'Biorevitalizarea este o metodă de introducere a preparatelor pe bază de acid hialuronic în piele pentru hidratare profundă și stimularea regenerării. Diferența față de mezoterapie: în biorevitalizare se folosește doar acid hialuronic de concentrație mare.',
          'Acidul hialuronic este un component natural al pielii, care reține umiditatea (1 moleculă de AH leagă până la 1000 molecule de apă). Odată cu vârsta, cantitatea sa scade, pielea pierde tonus, apar riduri.',
          'Scopul biorevitalizării: restabilirea nivelului de acid hialuronic, îmbunătățirea hidratării, stimularea sintezei de colagen și elastină, creșterea tonusului și elasticității pielii.',
        ],
      },
      {
        h2: 'Indicații pentru biorevitalizare',
        paragraphs: [
          'Deshidratarea pielii, pierderea tonusului și elasticității, riduri fine, culoarea opacă a feței, fotoîmbătrânire (pigmentare, ton neuniform), pregătirea pentru proceduri agresive (peeling-uri, laser).',
          'Prevenirea îmbătrânirii: biorevitalizarea la vârstă tânără (25-30 ani) menține calitatea pielii, previne apariția ridurilor profunde.',
          'Reabilitare după proceduri: biorevitalizarea după peeling-uri, proceduri cu laser accelerează recuperarea pielii.',
        ],
      },
      {
        h2: 'Preparate pentru biorevitalizare',
        paragraphs: [
          'Preparatele conțin acid hialuronic de diferite greutăți moleculare: cu greutate moleculară mică (pătrunde mai adânc, stimulează sinteza de colagen), cu greutate moleculară mare (reține umiditatea în straturile superioare ale pielii).',
          'Concentrația de AH: 10-20 mg/ml (mai mare decât în mezoterapie). Preparate populare: Juvederm Hydrate, Restylane Vital, Teosyal Redensity I.',
          'Unele preparate conțin componente suplimentare: aminoacizi, antioxidanți, vitamine pentru intensificarea efectului.',
        ],
      },
      {
        h2: 'Cum decurge procedura',
        paragraphs: [
          'Consultația: evaluarea stării pielii, alegerea preparatului, discutarea așteptărilor. Curățarea pielii, aplicarea cremei anestezice (15-20 minute).',
          'Injecții: medicul introduce preparatul în straturile medii ale pielii conform unei scheme specifice (tehnică papulară, liniară). Procedura durează 20-30 minute.',
          'După procedură: ușoară roșeață, papule în locurile de injecție dispar în 1-2 ore. Puteți reveni imediat la viața obișnuită.',
        ],
      },
      {
        h2: 'Biorevitalizarea la clinica Meddera',
        paragraphs: [
          'La Meddera folosim preparate certificate pentru biorevitalizare. Procedura este efectuată de un dermatocosmetolog experimentat.',
          'Consultația include: evaluarea indicațiilor, alegerea preparatului, calculul numărului de proceduri (de obicei curs de 2-3 ședințe cu interval de 14-21 zile).',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'biorevitalizaciya-preparaty-gialoronovaya-kislota': {
    sectionsRu: [
      {
        h2: 'Молекулярная масса гиалуроновой кислоты',
        paragraphs: [
          'Низкомолекулярная ГК (до 1 млн Да): проникает глубже в дерму, стимулирует синтез коллагена и эластина, улучшает метаболизм клеток. Быстрее рассасывается.',
          'Высокомолекулярная ГК (1-3 млн Да): остаётся в верхних слоях дермы, создаёт депо влаги, разглаживает кожу. Дольше сохраняется в коже. Оптимально — комбинация обеих форм.',
          'Концентрация ГК: 10-20 мг/мл (выше, чем в мезотерапии). Чем выше концентрация, тем более выражен эффект увлажнения и лифтинга.',
        ],
      },
      {
        h2: 'Популярные препараты для биоревитализации',
        paragraphs: [
          'Juvederm Hydrate (Allergan, США): 13.5 мг/мл ГК, технология Vycross (сшивка молекул для длительного эффекта). Мягкая консистенция, естественный результат. Эффект 6-9 месяцев.',
          'Restylane Vital (Galderma, Швеция): 20 мг/мл ГК, технология NASHA. Высокая концентрация для выраженного увлажнения. Эффект 6-12 месяцев. Есть версия Vital Light для тонкой кожи.',
          'Teosyal Redensity I (Teoxane, Швейцария): 15 мг/мл ГК + аминокислоты, антиоксиданты, витамины, минералы. Комплексное действие: увлажнение + питание + антиоксидантная защита.',
        ],
      },
      {
        h2: 'Дополнительные компоненты препаратов',
        paragraphs: [
          'Аминокислоты (глицин, пролин, лизин): строительные блоки коллагена, стимулируют регенерацию. Антиоксиданты (витамин C, глутатион): защита от свободных радикалов, осветление.',
          'Витамины группы B: улучшают метаболизм клеток, увлажнение. Минералы (цинк, магний): участвуют в синтезе белков, ферментативных реакциях.',
          'Лидокаин: местный анестетик, снижает болезненность процедуры. Присутствует в большинстве современных препаратов.',
        ],
      },
      {
        h2: 'Выбор препарата для биоревитализации',
        paragraphs: [
          'Для молодой кожи (25-35 лет): профилактика, увлажнение — препараты с низкой концентрацией ГК (10-15 мг/мл). Курс 2-3 процедуры.',
          'Для зрелой кожи (35-50 лет): выраженные изменения, потеря тонуса — препараты с высокой концентрацией ГК (18-20 мг/мл), дополнительными компонентами. Курс 3-4 процедуры.',
          'Для очень зрелой кожи (50+ лет): комбинация биоревитализации с другими процедурами (филлеры, ботокс, нити). Биоревитализация улучшает качество кожи, подготавливает к другим процедурам.',
        ],
      },
      {
        h2: 'Биоревитализация в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные препараты ведущих производителей. Подбираем препарат с учётом возраста, состояния кожи, целей.',
          'Консультация включает: оценку состояния кожи, выбор препарата и протокола, расчёт стоимости курса.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Greutatea moleculară a acidului hialuronic',
        paragraphs: [
          'AH cu greutate moleculară mică (până la 1 mil Da): pătrunde mai adânc în derm, stimulează sinteza de colagen și elastină, îmbunătățește metabolismul celular. Se resorbește mai repede.',
          'AH cu greutate moleculară mare (1-3 mil Da): rămâne în straturile superioare ale dermului, creează depozit de umiditate, netezește pielea. Se păstrează mai mult timp în piele. Optim — combinația ambelor forme.',
          'Concentrația de AH: 10-20 mg/ml (mai mare decât în mezoterapie). Cu cât concentrația este mai mare, cu atât efectul de hidratare și lifting este mai pronunțat.',
        ],
      },
      {
        h2: 'Preparate populare pentru biorevitalizare',
        paragraphs: [
          'Juvederm Hydrate (Allergan, SUA): 13.5 mg/ml AH, tehnologia Vycross (reticulare de molecule pentru efect de lungă durată). Consistență moale, rezultat natural. Efect 6-9 luni.',
          'Restylane Vital (Galderma, Suedia): 20 mg/ml AH, tehnologia NASHA. Concentrație mare pentru hidratare pronunțată. Efect 6-12 luni. Există versiunea Vital Light pentru piele subțire.',
          'Teosyal Redensity I (Teoxane, Elveția): 15 mg/ml AH + aminoacizi, antioxidanți, vitamine, minerale. Acțiune complexă: hidratare + nutriție + protecție antioxidantă.',
        ],
      },
      {
        h2: 'Componente suplimentare ale preparatelor',
        paragraphs: [
          'Aminoacizi (glicină, prolină, lizină): blocuri de construcție ale colagenului, stimulează regenerarea. Antioxidanți (vitamina C, glutation): protecție împotriva radicalilor liberi, luminare.',
          'Vitamine grup B: îmbunătățesc metabolismul celular, hidratare. Minerale (zinc, magneziu): participă la sinteza proteinelor, reacții enzimatice.',
          'Lidocaină: anestezic local, reduce durerea procedurii. Prezent în majoritatea preparatelor moderne.',
        ],
      },
      {
        h2: 'Alegerea preparatului pentru biorevitalizare',
        paragraphs: [
          'Pentru piele tânără (25-35 ani): prevenire, hidratare — preparate cu concentrație scăzută de AH (10-15 mg/ml). Curs 2-3 proceduri.',
          'Pentru piele matură (35-50 ani): modificări pronunțate, pierderea tonusului — preparate cu concentrație mare de AH (18-20 mg/ml), componente suplimentare. Curs 3-4 proceduri.',
          'Pentru piele foarte matură (50+ ani): combinația biorevitalizării cu alte proceduri (fillere, botox, fire). Biorevitalizarea îmbunătățește calitatea pielii, pregătește pentru alte proceduri.',
        ],
      },
      {
        h2: 'Biorevitalizarea la clinica Meddera',
        paragraphs: [
          'La Meddera folosim preparate certificate de la producători de top. Selectăm preparatul ținând cont de vârstă, starea pielii, scopuri.',
          'Consultația include: evaluarea stării pielii, alegerea preparatului și protocolului, calculul costului cursului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
};

export const BIOREVITALIZATION_ARTICLE_CONTENT: Record<string, BiorevitalizationArticleCopy> = {
  ...BIOREVITALIZATION_ARTICLE_CONTENT_PART1,
  ...BIOREVITALIZATION_ARTICLE_CONTENT_PART2,
};
