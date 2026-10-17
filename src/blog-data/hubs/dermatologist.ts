import type { HubContent } from './types';

const DERM = 'dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye';

export const dermatologistHub: HubContent = {
  clusterId: 'dermatologist',
  hubId: 'dermatologist-hub',
  ru: {
    crumb: 'Дерматолог в Бельцах — гид',
    h1: 'Дерматолог в Бельцах: гид по консультации и лечению',
    intro: [
      'Кожные жалобы редко приходят с готовым диагнозом. Чаще это зуд, пятно, высыпание или родинка, которая выглядит иначе, чем раньше, и непонятно, насколько это срочно. Ниже статьи клиники Meddera сгруппированы по тому, с чем люди приходят на приём: найдите свою жалобу и откройте подходящий разбор.',
    ],
    sections: [
      {
        h2: 'Когда не стоит откладывать визит',
        paragraphs: [
          'Записывайтесь без долгого ожидания, если родинка меняет форму, цвет или размер, кровоточит или зудит, если ранка или пятно долго не заживают, а сыпь быстро распространяется или идёт вместе с температурой. Такие признаки стоит показать врачу очно. Отёк лица или затруднённое дыхание после контакта с возможным аллергеном: вызывайте скорую помощь.',
        ],
      },
      {
        h2: 'Что взять с собой и что рассказать',
        paragraphs: [
          'Врачу помогает всё, что восстанавливает картину: когда появились первые симптомы и как они менялись, чем вы обрабатывали кожу, какую косметику и лекарства используете, были ли аллергии и кожные болезни у вас и в семье. Если высыпание то появляется, то исчезает, сфотографируйте его в самый заметный момент: в день приёма кожа может выглядеть иначе. Возьмите прежние заключения и анализы, если они есть.',
        ],
      },
      {
        h2: 'Что происходит на консультации',
        paragraphs: [
          'Врач уточняет жалобы, историю симптомов и прошлое лечение, затем осматривает кожу. Родинки и новообразования рассматривают в дерматоскоп. Когда осмотра недостаточно, назначают соскоб, посев, биопсию или аллергопробы. Схему лечения и срок контрольного визита обсуждают в конце приёма.',
        ],
      },
    ],
    listTitle: 'Статьи по жалобам',
    ctaTitle: 'Запись в Meddera',
    ctaText: `Если вопрос удобнее решить очно, откройте страницу услуги [[svc:${DERM}|«Дерматолог в Бельцах»]] и запишитесь на приём.`,
    eeatText:
      'Статьи подготовлены в клинике Meddera, Бельцы, для пациентов дерматолога. Диагноз и лечение определяет врач на очном приёме.',
  },
  ro: {
    crumb: 'Dermatolog în Bălți — ghid',
    h1: 'Dermatolog în Bălți: ghid despre consultație și tratament',
    intro: [
      'Plângerile dermatologice rareori vin cu un diagnostic gata făcut. Des este vorba de mâncărime, o pată, o erupție sau o aluniță care arată altfel decât înainte, și nu e clar cât de urgentă este situația. Mai jos am grupat articolele clinicii Meddera după motivele cu care vin cel mai des pacienții: găsiți-vă plângerea și deschideți articolul potrivit.',
    ],
    sections: [
      {
        h2: 'Când nu merită amânată vizita',
        paragraphs: [
          'Programați-vă fără întârziere dacă o aluniță își schimbă forma, culoarea sau dimensiunea, sângerează sau provoacă mâncărime, dacă o rană sau o pată nu se vindecă mult timp, iar erupția se extinde repede sau apare împreună cu febră. Astfel de semne se cuvine să fie arătate medicului la cabinet. Umflarea feței sau dificultățile de respirație după contactul cu un posibil alergen: sunați la urgențe.',
        ],
      },
      {
        h2: 'Ce să luați cu dvs. și ce să spuneți',
        paragraphs: [
          'Medicului îi ajută tot ce reconstituie tabloul: când au apărut primele simptome și cum s-au schimbat, cu ce ați tratat pielea, ce produse cosmetice și medicamente folosiți, dacă au existat alergii sau boli de piele la dvs. și în familie. Dacă erupția apare și dispare, fotografiați-o în momentul cel mai vizibil: în ziua consultației pielea poate arăta altfel.',
        ],
      },
      {
        h2: 'Ce se întâmplă la consultație',
        paragraphs: [
          'Medicul clarifică plângerile, istoricul simptomelor și tratamentul anterior, apoi examinează pielea. Alunițele și formațiunile se privesc cu dermatoscopul. Când examinarea nu este suficientă, se pot recomanda raclare, cultură, biopsie sau teste alergice. Schema de tratament și data vizitei de control se discută la finalul consultației.',
        ],
      },
    ],
    listTitle: 'Articole după plângere',
    ctaTitle: 'Programare la Meddera',
    ctaText: `Dacă situația se rezolvă mai bine la cabinet, deschideți pagina serviciului [[svc:${DERM}|„Dermatolog în Bălți”]] și programați-vă.`,
    eeatText:
      'Articolele sunt pregătite la clinica Meddera din Bălți. Diagnosticul și tratamentul le stabilește medicul la consultația la cabinet.',
  },
  groups: [
    {
      ids: ['dermatolog-beltsy-kogda-nuzhna-konsultaciya'],
      ru: { h3: 'Первый визит' },
      ro: { h3: 'Prima vizită' },
    },
    {
      ids: [
        'akne-prichiny-stadii-lechenie',
        'rozacea-prichiny-metody-korrekcii',
        'follikulit-vospalenie-volosyanyh-follikulov',
        'gidradenit-hronicheskij',
        'seboreynyj-dermatit-prichiny-lechenie',
      ],
      ru: { h3: 'Акне, розацеа и воспаления' },
      ro: { h3: 'Acnee, rozacee și inflamații' },
    },
    {
      ids: [
        'ekzema-kak-oblegchit-simptomy',
        'atopicheskij-dermatit-uhod-profilaktika',
        'kontaktnyj-dermatit-allergiya-razdrazhenie',
        'krapivnica-prichiny-lechenie',
        'kronicheskaya-krapivnica',
        'detskij-atopicheskij-dermatit',
        'detskij-kontaktnyj-dermatit',
      ],
      ru: { h3: 'Аллергия, зуд и контактные реакции' },
      ro: { h3: 'Alergii, mâncărime și reacții de contact' },
    },
    {
      ids: ['psoriaz-sovremennye-podhody-terapii', 'lichen-planus-obzor', 'ihthyoz-obzor', 'vitiligo-chto-eto-mozhno-li-lechit'],
      ru: { h3: 'Хронические болезни кожи' },
      ro: { h3: 'Boli cronice ale pielii' },
    },
    {
      ids: [
        'gribkovye-infekcii-kozhi-diagnostika-lechenie',
        'onikhomikoz-gribok-nogtej-lechenie',
        'mikoz-stop-konsultaciya',
        'impetigo-bakterialnaya-infekciya-kozhi',
      ],
      ru: { h3: 'Инфекции кожи, ногтей и стоп' },
      ro: { h3: 'Infecții ale pielii, unghiilor și tălpilor' },
    },
    {
      ids: [
        'dermatoskopiya-chto-eto-zachem-nuzhna',
        'rodinki-kogda-obratitsya-k-dermatologu',
        'papillomy-borodavki-udalenie-beltsy',
        'keratomy-chto-eto-nuzhno-li-udalyat',
        'pyogenic-granuloma',
        'melanoma-rannyaya-diagnostika',
        'bazalioma-lechenie-udalenie',
        'ploskokletochnyj-rak-kozhi',
      ],
      ru: { h3: 'Родинки и новообразования' },
      ro: { h3: 'Alunițe și formațiuni cutanate' },
    },
    {
      ids: [
        'pigmentnye-pyatna-prichiny-lechenie',
        'fotostareenie-kozhi-profilaktika',
        'solnechnye-ozhogi-pervaya-pomoshch',
        'fotodermatozy-solnce',
      ],
      ru: { h3: 'Солнце и пигмент' },
      ro: { h3: 'Soare și pigmentare' },
    },
    {
      ids: [
        'alopeciya-vypadenie-volos-prichiny',
        'seboreya-kozhi-golovy-lechenie',
        'gipergidroz-lechenie-beltsy',
        'vrosshij-nogot-prichiny-lechenie',
      ],
      ru: { h3: 'Волосы, ногти и потоотделение' },
      ro: { h3: 'Păr, unghii și transpirație' },
    },
  ],
  services: [
    { slug: DERM, ru: 'Услуга «Дерматолог в Бельцах»', ro: 'Serviciul „Dermatolog în Bălți”' },
    { slug: 'konsultaczyya-dermatokosmetologa-v-belczah', ru: 'Консультация дерматокосметолога', ro: 'Consultația dermatocosmetologului' },
    { slug: 'terapyya-anty-akne-v-belczah', ru: 'Терапия анти-акне', ro: 'Terapia anti-acnee' },
  ],
};
