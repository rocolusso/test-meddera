/**
 * Generates Part 2 blog metadata + bilingual article bodies (RU/RO).
 * Usage: node scripts/generate-blog-part2.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogData = join(__dirname, '..', 'src', 'blog-data');

const esc = (s) =>
  String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, '\\n');

/** Romanian slug: lowercase latin a-z 0-9 hyphen only */
function roSlug(s) {
  const map = {
    ă: 'a',
    â: 'a',
    î: 'i',
    ș: 's',
    Ă: 'a',
    Â: 'a',
    Î: 'i',
    Ș: 's',
    Ț: 't',
    ş: 's',
    Ş: 's',
    ț: 't',
    ţ: 't',
    Ţ: 't',
  };
  let o = '';
  for (const ch of s) {
    o += map[ch] ?? ch;
  }
  return o
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function sectionsFull(topicRu, topicRo) {
  return {
    sectionsRu: [
      {
        h2: `О теме: ${topicRu}`,
        paragraphs: [
          `Материал носит информационный характер и не заменяет очную консультацию специалиста в клинике Meddera (Бельцы). Решение о лечении или процедуре принимается после осмотра.`,
          `На приёме уточняются симптомы, хронические заболевания, аллергии и принимаемые препараты — это нужно для безопасности и реалистичных ожиданий.`,
          `При ухудшении состояния, признаках инфекции или сильной боли обратитесь за очной помощью без промедления.`,
        ],
      },
      {
        h2: 'Подготовка и ожидания',
        paragraphs: [
          `Подготовьте список вопросов и медикаментов. Сообщите о беременности, лактации или планируемых вмешательствах.`,
          `Не комбинируйте без согласования с врачом агрессивный домашний уход и процедуры в одной зоне.`,
          `Фото динамики и описание триггеров помогают врачу составить план.`,
        ],
      },
      {
        h2: 'Что обсуждают в Meddera',
        paragraphs: [
          `Специалист оценивает показания, объясняет альтернативы и возможные реакции. Стоимость услуг уточняйте в клинике; консультация: первичная 400 MDL, повторная 250 MDL.`,
          `Вы получаете понятные рекомендации по уходу дома и срокам контрольного визита.`,
          `Индивидуальный план важнее обобщённых советов из интернета.`,
        ],
      },
      {
        h2: 'Итог',
        paragraphs: [
          `${topicRu}: ключевой вывод — подход подбирается персонально.`,
          `Запись на консультацию — через Meddera Beauty Clinic в Бельцах.`,
          `Материал подготовлен командой Meddera и может обновляться.`,
        ],
      },
    ],
    sectionsRo: [
      {
        h2: `Despre: ${topicRo}`,
        paragraphs: [
          `Materialul este informativ și nu înlocuiește consultația cu specialistul la Meddera din Bălți. Decizia privind tratamentul sau procedura se ia după examen.`,
          `La consultație se clarifică simptomele, afecțiunile cronice, alergiile și medicația — pentru siguranță și așteptări realiste.`,
          `Dacă starea se agravează sau apar semne de infecție sau durere intensă — solicitați ajutor medical urgent.`,
        ],
      },
      {
        h2: 'Pregătire și așteptări',
        paragraphs: [
          `Pregătiți întrebările și lista medicamentelor. Menționați sarcina, alăptarea sau intervențiile planificate.`,
          `Nu combinați fără acordul medicului îngrijire agresivă acasă cu proceduri în aceeași zonă.`,
          `Fotografii în timp și descrierea factorilor declanșatori ajută la planificare.`,
        ],
      },
      {
        h2: 'Discuția la Meddera',
        paragraphs: [
          `Specialistul evaluează indicațiile, explică variante și reacții posibile. Tarifele se clarifică la clinică; consultația: primară 400 MDL, repetată 250 MDL.`,
          `Primiți recomandări clare pentru îngrijire acasă și control.`,
          `Planul personal este mai important decât sfaturi generale online.`,
        ],
      },
      {
        h2: 'Concluzie',
        paragraphs: [
          `Pentru «${topicRo}», concluzia: abordarea este individuală.`,
          `Programare la Meddera Beauty Clinic în Bălți.`,
          `Material pregătit de echipa Meddera; poate fi actualizat.`,
        ],
      },
    ],
  };
}

function sectionsBase(topicRu, topicRo) {
  const x = sectionsFull(topicRu, topicRo);
  return { sectionsRu: x.sectionsRu.slice(0, 3), sectionsRo: x.sectionsRo.slice(0, 3) };
}

function emitContentRecord(key, body, mode) {
  const data = mode === 'full' ? sectionsFull(body.ru, body.ro) : sectionsBase(body.ru, body.ro);
  let out = `  '${esc(key)}': {\n`;
  out += `    sectionsRu: [\n`;
  for (const sec of data.sectionsRu) {
    out += `      {\n        h2: '${esc(sec.h2)}',\n        paragraphs: [\n`;
    for (const p of sec.paragraphs) out += `          '${esc(p)}',\n`;
    out += `        ],\n      },\n`;
  }
  out += `    ],\n    sectionsRo: [\n`;
  for (const sec of data.sectionsRo) {
    out += `      {\n        h2: '${esc(sec.h2)}',\n        paragraphs: [\n`;
    for (const p of sec.paragraphs) out += `          '${esc(p)}',\n`;
    out += `        ],\n      },\n`;
  }
  out += `    ],\n  },\n`;
  return out;
}

function emitMeta(post, author = true) {
  let s = `  {\n`;
  s += `    id: '${esc(post.id)}',\n`;
  s += `    kind: 'article',\n`;
  s += `    clusterId: '${post.clusterId}',\n`;
  s += `    slugRu: '${esc(post.slugRu)}',\n`;
  s += `    slugRo: '${esc(post.slugRo)}',\n`;
  s += `    publishedAt: '${post.publishedAt}',\n`;
  s += `    dateModified: '${post.dateModified}',\n`;
  s += `    titleRu: '${esc(post.titleRu)}',\n`;
  s += `    titleRo: '${esc(post.titleRo)}',\n`;
  s += `    descriptionRu: '${esc(post.descriptionRu)}',\n`;
  s += `    descriptionRo: '${esc(post.descriptionRo)}',\n`;
  s += `    excerptRu: '${esc(post.excerptRu)}',\n`;
  s += `    excerptRo: '${esc(post.excerptRo)}',\n`;
  s += `    bodyKey: '${post.bodyKey}',\n`;
  if (author) {
    s += `    authorByline: { ru: 'Meddera Beauty Clinic', ro: 'Meddera Beauty Clinic' },\n`;
  }
  if (post.medicalReview) {
    s += `    medicalReview: { ru: '${esc(post.medicalReview.ru)}', ro: '${esc(post.medicalReview.ro)}' },\n`;
  }
  s += `  },\n`;
  return s;
}

/* ---------- Topic rows: id, slugRu tail, slugRo ascii tail, short ru, short ro, title ru, title ro ---------- */

const DERM = [
  ['melanoma-rannyaya-diagnostika', 'melanoma-rannyaya-diagnostika-beltsy', 'melanom-diagnostic-precoce-balti', 'Меланома и ранняя диагностика', 'Melanom și diagnostic precoce'],
  ['bazalioma-lechenie-udalenie', 'bazalioma-lechenie-udalenie-beltsy', 'baziom-tratament-indepartare-balti', 'Базалиома: лечение', 'Baziom: tratament'],
  ['ploskokletochnyj-rak-kozhi', 'ploskokletochnyj-rak-kozhi-beltsy', 'carcinom-scuamos-piele-balti', 'Плоскоклеточный рак кожи', 'Carcinom scuamos al pielii'],
  ['detskij-atopicheskij-dermatit', 'detskij-atopicheskij-dermatit-beltsy', 'dermatita-atopica-copii-balti', 'Атопический дерматит у детей', 'Dermatita atopică la copii'],
  ['detskij-kontaktnyj-dermatit', 'detskij-kontaktnyj-dermatit-beltsy', 'dermatita-contact-copii-balti', 'Контактный дерматит у детей', 'Dermatita de contact la copii'],
  ['podrostkovoe-akne-protokol', 'podrostkovoe-akne-protokol-beltsy', 'acnee-adolescenti-protocol-balti', 'Подростковое акне', 'Acnee la adolescenți'],
  ['kosmeticheskaya-oczenka-rodinok', 'kosmeticheskaya-oczenka-rodinok-beltsy', 'evaluare-alunite-consult-cosmetic-balti', 'Оценка родинок перед процедурами', 'Evaluarea alunițelor înainte de proceduri'],
  ['piling-licza-podgotovka', 'piling-licza-podgotovka-beltsy', 'pregatire-piele-peeling-fata-balti', 'Пилинг: подготовка кожи', 'Peeling: pregătirea pielii'],
  ['lazer-podgotovka-kozhi', 'lazer-podgotovka-kozhi-beltsy', 'pregatire-piele-proceduri-laser-balti', 'Лазер: подготовка', 'Laser: pregătire'],
  ['uhod-kozha-posle-40', 'uhod-kozha-posle-40-beltsy', 'ingrijire-piele-dupa-40-ani-balti', 'Уход за кожей после 40 лет', 'Îngrijirea pielii după 40 de ani'],
  ['suhaya-kozha-zima', 'suhaya-kozha-zima-beltsy', 'piele-uscată-iarna-balti', 'Сухая кожа зимой', 'Pielea uscată iarna'],
  ['zhirnaya-kozha-leto', 'zhirnaya-kozha-leto-beltsy', 'piele-grasa-vara-balti', 'Жирная кожа летом', 'Pielea grasă vara'],
  ['chuvstvitelnaya-kozha-rutina', 'chuvstvitelnaya-kozha-rutina-beltsy', 'piele-sensibila-rutina-balti', 'Чувствительная кожа', 'Pielea sensibilă'],
  ['vesennie-allergii-kozha', 'vesennie-allergii-kozha-beltsy', 'alergii-primavara-cutanate-balti', 'Весенние аллергии кожи', 'Alergii de primăvară la nivelul pielii'],
  ['osennee-vypadenie-volos', 'osennee-vypadenie-volos-beltsy', 'caderea-parului-sezon-toamna-balti', 'Сезонное выпадение волос', 'Căderea sezonieră a părului'],
  ['kozhnaya-reakciya-pische', 'kozhnaya-reakciya-pische-beltsy', 'reactie-cutanata-alimentara-balti', 'Кожная реакция на продукты', 'Reacție cutanată alimentară'],
  ['fotodermatozy-solnce', 'fotodermatozy-solnce-beltsy', 'fotodermatoza-soare-balti', 'Фотодерматозы', 'Fotodermatoza'],
  ['mikoz-stop-konsultaciya', 'mikoz-stop-konsultaciya-beltsy', 'micoza-picioare-consultatie-balti', 'Микоз стоп', 'Micoza picioarelor'],
  ['rubcy-postakne', 'rubcy-postakne-beltsy', 'cicatrici-postacnee-balti', 'Рубцы постакне', 'Cicatrici post-acnee'],
  ['keloidy-risk-prokol', 'keloidy-risk-prokol-beltsy', 'risc-cheloid-piercing-balti', 'Келоидный риск после проколов', 'Risc cheloid după piercing'],
  ['gidradenit-hronicheskij', 'gidradenit-hronicheskij-beltsy', 'hidradenita-cronica-balti', 'Гидраденит (хроническая форма)', 'Hidradenită (formă cronică)'],
  ['lichen-planus-obzor', 'lichen-planus-obzor-beltsy', 'lichen-planus-prezentare-balti', 'Лишай плоский', 'Lichen planus'],
  ['ihthyoz-obzor', 'ihthyoz-obzor-beltsy', 'ichtioza-prezentare-balti', 'Ихтиоз', 'Ihtioza'],
  ['kronicheskaya-krapivnica', 'kronicheskaya-krapivnica-beltsy', 'urticarie-cronica-balti', 'Хроническая крапивница', 'Urticarie cronică'],
  ['pyogenic-granuloma', 'pyogenic-granuloma-beltsy', 'granulom-piogenic-balti', 'Пиогенная гранулёма', 'Granulom pirogenic'],
];

const BOT = [
  ['botoks-mikrodozy-lbu', 'botoks-mikrodozy-lbu-beltsy', 'botox-microdoze-frunte-balti', 'Ботокс лба: микродозы', 'Botox frunte: microdoze'],
  ['botoks-kombinaciya-fillery', 'botoks-kombinaciya-fillery-beltsy', 'botox-combinatie-fillere-balti', 'Ботокс и филлеры', 'Botox și fillere'],
  ['botoks-kombinaciya-mezoterapiya', 'botoks-kombinaciya-mezoterapiya-beltsy', 'botox-combinatie-mezoterapie-balti', 'Ботокс и мезотерапия', 'Botox și mezoterapie'],
  ['botoks-vnutrimyshechnaya-gipergidroz', 'botoks-vnutrimyshechnaya-gipergidroz-beltsy', 'botox-hiperhidroza-palme-balti', 'Ботокс при гипергидрозе ладоней', 'Botox pentru hiperhidroza palmelor'],
  ['botoks-bruxizm-podborodok', 'botoks-bruxizm-podborodok-beltsy', 'botox-bruxism-barbie-balti', 'Ботокс и бруксизм', 'Botox și bruxism'],
  ['botoks-gorizontalnye-morshchiny-vtoroj-plan', 'botoks-gorizontalnye-morshchiny-vtoroj-plan-beltsy', 'botox-riduri-orizontale-detaliu-balti', 'Горизонтальные морщины лба', 'Riduri orizontale pe frunte'],
  ['botoks-lateralnyj-vzglyad-glaza', 'botoks-lateralnyj-vzglyad-glaza-beltsy', 'botox-mimica-laterala-ochi-balti', 'Ботокс и зона вокруг глаз', 'Botox zona perioculară'],
  ['botoks-asimmetriya-mimiki', 'botoks-asimmetriya-mimiki-beltsy', 'botox-asimetrie-mimica-balti', 'Асимметрия мимики', 'Asimetria mimică'],
  ['botoks-perenosica-krolik', 'botoks-perenosica-krolik-beltsy', 'botox-riduri-iepure-balti', 'Морщины переносицы', 'Riduri pe nas'],
  ['botoks-podborodochnaya-myshca', 'botoks-podborodochnaya-myshca-beltsy', 'botox-muschi-barbie-balti', 'Подбородочная зона', 'Zona bărbiei'],
  ['botoks-platisma-grubyj-kontur', 'botoks-platisma-grubyj-kontur-beltsy', 'botox-platisma-contur-gros-balti', 'Платизма и контур', 'Platisma și contur'],
  ['botoks-hronicheskaya-migranya', 'botoks-hronicheskaya-migranya-beltsy', 'botox-migrena-cronica-balti', 'Ботокс при хронической мигрени', 'Botox în migrenă cronică'],
  ['botoks-pobochnye-blizko-k-glazu', 'botoks-pobochnye-blizko-k-glazu-beltsy', 'botox-efecte-lateral-ochi-balti', 'Побочные эффекты у глаз', 'Efecte laterale perioculare'],
  ['botoks-chrezmernaya-relaksaciya', 'botoks-chrezmernaya-relaksaciya-beltsy', 'botox-relaxare-excesiva-balti', 'Чрезмерная релаксация', 'Relaxare excesivă'],
  ['botoks-immunitet-k-preparatu', 'botoks-immunitet-k-preparatu-beltsy', 'botox-imunitate-la-preparat-balti', 'Резистентность к препарату', 'Rezistență la preparat'],
  ['botoks-pervyj-raz-posle-dolgogo-pereryva', 'botoks-pervyj-raz-posle-dolgogo-pereryva-beltsy', 'botox-prima-data-dupa-pauza-balti', 'Первый раз после паузы', 'Prima procedură după pauză'],
  ['botoks-muzhskoj-licevoj-tip', 'botoks-muzhskoj-licevoj-tip-beltsy', 'botox-tip-fata-barbati-balti', 'Ботокс для мужчин', 'Botox la bărbați'],
  ['botoks-zhenschina-40-plus', 'botoks-zhenschina-40-plus-beltsy', 'botox-femei-peste-40-balti', 'Ботокс после 40', 'Botox după 40 de ani'],
  ['botoks-zhenschina-55-plus', 'botoks-zhenschina-55-plus-beltsy', 'botox-femei-peste-55-balti', 'Ботокс после 55', 'Botox după 55 de ani'],
  ['botoks-professionalnaya-mimika', 'botoks-professionalnaya-mimika-beltsy', 'botox-mimica-profesionala-balti', 'Мимика и профессия', 'Mimica și profesie'],
  ['botoks-pered-vazhnoj-datoj', 'botoks-pered-vazhnoj-datoj-beltsy', 'botox-inainte-eveniment-balti', 'Ботокс перед мероприятием', 'Botox înainte de eveniment'],
  ['botoks-posle-bolezni-perenos', 'botoks-posle-bolezni-perenos-beltsy', 'botox-dupa-boala-amânare-balti', 'Ботокс после перенесённой болезни', 'Botox după boală'],
  ['botoks-i-antikoagulyanty', 'botoks-i-antikoagulyanty-beltsy', 'botox-si-anticoagulante-balti', 'Ботокс и антикоагулянты', 'Botox și anticoagulante'],
  ['botoks-i-antibiotiki', 'botoks-i-antibiotiki-beltsy', 'botox-si-antibiotice-balti', 'Ботокс и антибиотики', 'Botox și antibiotice'],
  ['botoks-zapis-konsultaciya', 'botoks-zapis-konsultaciya-beltsy', 'botox-programare-consultatie-balti', 'Запись на консультацию по ботоксу', 'Programare consultație botox'],
];

const LIPS = [
  ['guby-forma-serdce', 'guby-forma-serdce-beltsy', 'buze-forma-inima-balti', 'Форма губ «сердце»', 'Forma buzelor în inimă'],
  ['guby-forma-lukovichka', 'guby-forma-lukovichka-beltsy', 'buze-forma-lamină-balti', 'Форма «луковичка»', 'Forma în bulb'],
  ['guby-asimetriya-posle-travmy', 'guby-asimetriya-posle-travmy-beltsy', 'asimetrie-buze-dupa-trauma-balti', 'Асимметрия после травмы', 'Asimetrie după traumă'],
  ['fillery-guby-marki-sravnenie', 'fillery-guby-marki-sravnenie-beltsy', 'fillere-buze-branduri-comparatie-balti', 'Бренды филлеров для губ', 'Branduri de fillere pentru buze'],
  ['guby-estetika-balans-licza', 'guby-estetika-balans-licza-beltsy', 'buze-estetica-balanta-fata-balti', 'Баланс губ и лица', 'Balans buze-față'],
  ['guby-korekciya-tonkih-konicheskih', 'guby-korekciya-tonkih-konicheskih-beltsy', 'buze-subti-corectie-balti', 'Тонкие губы: коррекция', 'Buze subțiri: corecție'],
  ['guby-korekciya-opuschennyh-ugolkov', 'guby-korekciya-opuschennyh-ugolkov-beltsy', 'buze-colturi-coborate-balti', 'Опущенные уголки рта', 'Colțuri coborâte ale gurii'],
  ['guby-posle-rastyazheniya', 'guby-posle-rastyazheniya-beltsy', 'buze-dupa-intindere-balti', 'Губы после растяжений', 'Buze după întinderi'],
  ['guby-i-komicheskie-linii', 'guby-i-komicheskie-linii-beltsy', 'buze-linii-comice-balti', 'Губы и линии смеха', 'Buze și linii de expresie'],
  ['guby-mode-laju-natural', 'guby-mode-laju-natural-beltsy', 'buze-trend-natural-balti', 'Естественный тренд в объёме', 'Trend natural de volum'],
  ['guby-podgotovka-k-prazdniku', 'guby-podgotovka-k-prazdniku-beltsy', 'buze-pregatire-eveniment-balti', 'Подготовка к мероприятию', 'Pregătire pentru eveniment'],
  ['guby-ingirire-prima-saptamina', 'guby-ingirire-prima-saptamina-beltsy', 'buze-ingrijire-prima-saptamana-balti', 'Первая неделя после процедуры', 'Prima săptămână după procedură'],
  ['guby-ingirire-lungi-termen', 'guby-ingirire-lungi-termen-beltsy', 'buze-ingrijire-termen-lung-balti', 'Долгосрочный уход', 'Îngrijire pe termen lung'],
  ['guby-voda-plaja-piscina', 'guby-voda-plaja-piscina-beltsy', 'buze-apa-plaja-piscina-balti', 'Губы: вода и солнце', 'Buze: apă și soare'],
  ['guby-filler-rari-retragere', 'guby-filler-rari-retragere-beltsy', 'buze-filler-migrare-rara-balti', 'Миграция филлера', 'Migrarea fillerului'],
  ['guby-rejuvenare-periferie', 'guby-rejuvenare-periferie-beltsy', 'buze-intinerire-periferie-balti', 'Омоложение контура', 'Întinerire contur'],
  ['guby-kontur-karandash-korekciya', 'guby-kontur-karandash-korekciya-beltsy', 'buze-contur-creion-corectie-balti', 'Контур и карандаш', 'Contur și creion'],
  ['guby-gialuron-rascvet', 'guby-gialuron-rascvet-beltsy', 'buze-acid-hialuronic-degrade-balti', 'Рассказ о метаболизме ГК', 'Metabolismul AH în buze'],
  ['guby-reinjectie-la-luni', 'guby-reinjectie-la-luni-beltsy', 'buze-reinjectare-luni-balti', 'Повторные инъекции по месяцам', 'Reinjectări pe luni'],
  ['guby-strategie-etape', 'guby-strategie-etape-beltsy', 'buze-strategie-etape-balti', 'Поэтапное увеличение', 'Mărire în etape'],
  ['guby-dupa-exfoliere-chemical', 'guby-dupa-exfoliere-chemical-beltsy', 'buze-dupa-exfoliere-chimica-balti', 'После химического пилинга', 'După peeling chimic'],
  ['guby-dupa-laser-lic', 'guby-dupa-laser-lic-beltsy', 'buze-dupa-laser-fata-balti', 'Сочетание с лазером', 'Combinare cu laser'],
  ['guby-alergie-anestezie', 'guby-alergie-anestezie-beltsy', 'buze-alergie-anestezie-balti', 'Аллергия на анестезию', 'Alergie la anestezie'],
  ['guby-compres-reci-prima-or', 'guby-compres-reci-prima-or-beltsy', 'buze-comprese-reci-prima-ora-balti', 'Холод в первый час', 'Rece în prima oră'],
  ['guby-feedback-consultatie', 'guby-feedback-consultatie-beltsy', 'buze-feedback-consultatie-balti', 'Обратная связь с врачом', 'Feedback după consultație'],
];

const MESO = [
  ['mezoterapiya-lico-zona-t', 'mezoterapiya-lico-zona-t-beltsy', 'mezoterapie-fata-zona-t-balti', 'Мезотерапия зоны T', 'Mezoterapia zonei T'],
  ['mezoterapiya-lico-skula-niz', 'mezoterapiya-lico-skula-niz-beltsy', 'mezoterapie-pometi-jumatate-inferioara-balti', 'Мезотерапия нижней части лица', 'Mezoterapia părții inferioare'],
  ['mezoterapiya-amino-peptide', 'mezoterapiya-amino-peptide-beltsy', 'mezoterapie-peptide-amino-balti', 'Пептиды в мезотерапии', 'Peptide în mezoterapie'],
  ['mezoterapiya-vitamine-complex', 'mezoterapiya-vitamine-complex-beltsy', 'mezoterapie-vitamine-complex-balti', 'Витаминные комплексы', 'Complexe de vitamine'],
  ['mezoterapiya-kurs-intensiv', 'mezoterapiya-kurs-intensiv-beltsy', 'mezoterapie-curs-intensiv-balti', 'Интенсивный курс', 'Curs intensiv'],
  ['mezoterapiya-kurs-podderzhka', 'mezoterapiya-kurs-podderzhka-beltsy', 'mezoterapie-curs-mentenanta-balti', 'Поддерживающий курс', 'Curs de întreținere'],
  ['mezoterapiya-posle-otpusk', 'mezoterapiya-posle-otpusk-beltsy', 'mezoterapie-dupa-concediu-balti', 'После отпуска на солнце', 'După concediu la soare'],
  ['mezoterapiya-pred-svadba', 'mezoterapiya-pred-svadba-beltsy', 'mezoterapie-inainte-nunta-balti', 'Перед важным событием', 'Înainte de eveniment'],
  ['mezoterapiya-i-retinoidy-dom', 'mezoterapiya-i-retinoidy-dom-beltsy', 'mezoterapie-retinoizi-acasa-balti', 'Мезотерапия и домашние ретиноиды', 'Mezoterapie și retinoizi acasă'],
  ['mezoterapiya-ton-tonalnost', 'mezoterapiya-ton-tonalnost-beltsy', 'mezoterapie-ton-uniform-balti', 'Выравнивание тона', 'Uniformizarea tonului'],
  ['mezoterapiya-stress-koza', 'mezoterapiya-stress-koza-beltsy', 'mezoterapie-stres-piele-balti', 'Стресс и кожа', 'Stres și pielea'],
  ['mezoterapiya-gipoallergennaya-liniya', 'mezoterapiya-gipoallergennaya-liniya-beltsy', 'mezoterapie-linie-hipoalergenica-balti', 'Гипоаллергенные протоколы', 'Protocoale hipoalergenice'],
  ['mezoterapiya-sezon-pylecvet', 'mezoterapiya-sezon-pylecvet-beltsy', 'mezoterapie-sezon-polen-balti', 'Пыльца и кожа', 'Polen și pielea'],
  ['mezoterapiya-primenenie-zimoi', 'mezoterapiya-primenenie-zimoi-beltsy', 'mezoterapie-aplicare-iarna-balti', 'Мезотерапия зимой', 'Mezoterapia iarna'],
  ['mezoterapiya-primenenie-vesnoi', 'mezoterapiya-primenenie-vesnoi-beltsy', 'mezoterapie-aplicare-primavara-balti', 'Мезотерапия весной', 'Mezoterapia primăvara'],
  ['mezoterapiya-primenenie-leto', 'mezoterapiya-primenenie-leto-beltsy', 'mezoterapie-aplicare-vara-balti', 'Мезотерапия летом', 'Mezoterapia vara'],
  ['mezoterapiya-primenenie-osenyu', 'mezoterapiya-primenenie-osenyu-beltsy', 'mezoterapie-aplicare-toamna-balti', 'Мезотерапия осенью', 'Mezoterapia toamna'],
  ['mezoterapiya-posle-prostud', 'mezoterapiya-posle-prostud-beltsy', 'mezoterapie-dupa-raceala-balti', 'После простуды', 'După răceală'],
  ['mezoterapiya-i-kuperoz-lechenie', 'mezoterapiya-i-kuperoz-lechenie-beltsy', 'mezoterapie-cuperoza-tratament-balti', 'Мезотерапия при куперозе', 'Mezoterapie în cuperoză'],
  ['mezoterapiya-glubina-injekcii', 'mezoterapiya-glubina-injekcii-beltsy', 'mezoterapie-adancime-injectii-balti', 'Глубина инъекций', 'Adâncimea injecțiilor'],
  ['mezoterapiya-nadcumbaly', 'mezoterapiya-nadcumbaly-beltsy', 'mezoterapie-supraction-balti', 'Надбровная зона', 'Zona supraciliară'],
  ['mezoterapiya-podborodochnyj-treugolnik', 'mezoterapiya-podborodochnyj-treugolnik-beltsy', 'mezoterapie-triunghi-barbie-balti', 'Подбородочный треугольник', 'Triunghiul bărbiei'],
  ['mezoterapiya-kombinacia-s-massazhom', 'mezoterapiya-kombinacia-s-massazhom-beltsy', 'mezoterapie-combinare-masaj-balti', 'С массажем лица', 'Combinată cu masaj facial'],
  ['mezoterapiya-kombinacia-s-chistkoj', 'mezoterapiya-kombinacia-s-chistkoj-beltsy', 'mezoterapie-combinare-curatare-balti', 'С чисткой лица', 'Combinată cu curățare'],
  ['mezoterapiya-zapis-konsultaciya', 'mezoterapiya-zapis-konsultaciya-beltsy', 'mezoterapie-programare-consultatie-balti', 'Запись на мезотерапию', 'Programare mezoterapie'],
];

const BIO = [
  ['biorevitalizaciya-zona-periorbit', 'biorevitalizaciya-zona-periorbit-beltsy', 'biorevitalizare-periorbitar-balti', 'Биоревитализация периорбитально', 'Biorevitalizare periorbitală'],
  ['biorevitalizaciya-zona-sheya', 'biorevitalizaciya-zona-sheya-beltsy', 'biorevitalizare-gat-balti', 'Биоревитализация шеи', 'Biorevitalizarea gâtului'],
  ['biorevitalizaciya-zona-dekolte', 'biorevitalizaciya-zona-dekolte-beltsy', 'biorevitalizare-decolteu-balti', 'Биоревитализация декольте', 'Biorevitalizarea decolteului'],
  ['biorevitalizaciya-kurs-nakopitelnyj', 'biorevitalizaciya-kurs-nakopitelnyj-beltsy', 'biorevitalizare-curs-cumulativ-balti', 'Накопительный эффект курса', 'Efect cumulativ al cursului'],
  ['biorevitalizaciya-vysokaya-koncentraciya', 'biorevitalizaciya-vysokaya-koncentraciya-beltsy', 'biorevitalizare-concentratie-mare-balti', 'Высокая концентрация ГК', 'Concentrație mare de AH'],
  ['biorevitalizaciya-nizkaya-koncentraciya', 'biorevitalizaciya-nizkaya-koncentraciya-beltsy', 'biorevitalizare-concentratie-mica-balti', 'Мягкий протокол', 'Protocol blând'],
  ['biorevitalizaciya-posle-puteshestviya', 'biorevitalizaciya-posle-puteshestviya-beltsy', 'biorevitalizare-dupa-calatorie-balti', 'После перелётов и сухого климата', 'După zbor și climat uscat'],
  ['biorevitalizaciya-i-kontur-chitat', 'biorevitalizaciya-i-kontur-chitat-beltsy', 'biorevitalizare-contur-complet-balti', 'Сочетание с контуром', 'Combinare cu conturarea'],
  ['biorevitalizaciya-i-botoks-logika', 'biorevitalizaciya-i-botoks-logika-beltsy', 'biorevitalizare-botox-logica-balti', 'Ботокс и биоревитализация', 'Botox și biorevitalizare'],
  ['biorevitalizaciya-i-peeling-interval', 'biorevitalizaciya-i-peeling-interval-beltsy', 'biorevitalizare-peeling-interval-balti', 'Интервал после пилинга', 'Interval după peeling'],
  ['biorevitalizaciya-zimoi-vlaga', 'biorevitalizaciya-zimoi-vlaga-beltsy', 'biorevitalizare-iarna-umiditate-balti', 'Зимняя гидратация', 'Hidratare iarnă'],
  ['biorevitalizaciya-letom-spf', 'biorevitalizaciya-letom-spf-beltsy', 'biorevitalizare-vara-spf-balti', 'Лето и SPF', 'Vară și SPF'],
  ['biorevitalizaciya-kozha-sklonnaya-akne', 'biorevitalizaciya-kozha-sklonnaya-akne-beltsy', 'biorevitalizare-piele-tendinta-acnee-balti', 'Кожа склонная к акне', 'Pielea predispusă la acnee'],
  ['biorevitalizaciya-post-vospaleniya', 'biorevitalizacia-post-vospaleniya-beltsy', 'biorevitalizare-post-inflamatie-balti', 'После воспалений', 'După inflamații'],
  ['biorevitalizaciya-tonkaja-kozha', 'biorevitalizaciya-tonkaja-kozha-beltsy', 'biorevitalizare-piele-subtire-balti', 'Тонкая кожа', 'Pielea subțire'],
  ['biorevitalizaciya-zrelaja-kozha', 'biorevitalizaciya-zrelaja-kozha-beltsy', 'biorevitalizare-piele-matura-balti', 'Зрелая кожа', 'Pielea matură'],
  ['biorevitalizaciya-pervyj-kurs', 'biorevitalizaciya-pervyj-kurs-beltsy', 'biorevitalizare-primul-curs-balti', 'Первый курс', 'Primul curs'],
  ['biorevitalizaciya-vtoroj-kurs', 'biorevitalizaciya-vtoroj-kurs-beltsy', 'biorevitalizare-al-doilea-curs-balti', 'Повторный курс', 'Al doilea curs'],
  ['biorevitalizaciya-kontrol-data', 'biorevitalizaciya-kontrol-data-beltsy', 'biorevitalizare-data-control-balti', 'Контрольная дата', 'Data de control'],
  ['biorevitalizaciya-senzacii-posle', 'biorevitalizaciya-senzacii-posle-beltsy', 'biorevitalizare-senzatii-dupa-balti', 'Ощущения после процедуры', 'Senzații după procedură'],
  ['biorevitalizaciya-protivopokazaniya-kratko', 'biorevitalizaciya-protivopokazaniya-kratko-beltsy', 'biorevitalizare-contraindicatii-scurt-balti', 'Кратко о противопоказаниях', 'Scurt despre contraindicații'],
  ['biorevitalizaciya-ocherednost-s-drugimi', 'biorevitalizaciya-ocherednost-s-drugimi-beltsy', 'biorevitalizare-ordine-alte-proceduri-balti', 'Очерёдность с другими процедuri', 'Ordinea cu alte proceduri'],
  ['biorevitalizaciya-reabilitaciya-posle-solnca', 'biorevitalizaciya-reabilitaciya-posle-solnca-beltsy', 'biorevitalizare-reabilitare-dupa-soare-balti', 'Реабилитация после загара', 'Reabilitare după soare'],
  ['biorevitalizaciya-zapis-konsultaciya', 'biorevitalizaciya-zapis-konsultaciya-beltsy', 'biorevitalizare-programare-consultatie-balti', 'Запись на биоревитализацию', 'Programare biorevitalizare'],
  ['biorevitalizaciya-ingrijire-dom-kombinat', 'biorevitalizaciya-ingrijire-dom-kombinat-beltsy', 'biorevitalizare-ingrijire-acasa-combinata-balti', 'Домашний уход после курса', 'Îngrijire acasă după curs'],
];

const FILL = [
  ['fillery-nos-korekciya-linej', 'fillery-nos-korekciya-linej-beltsy', 'fillere-nas-corectie-linii-balti', 'Филлеры и линии профиля носа', 'Fillere și liniile profilului nazal'],
  ['fillery-podglaz-zona-vnimanie', 'fillery-podglaz-zona-vnimanie-beltsy', 'fillere-sub-ochi-zona-atentie-balti', 'Подглазная зона', 'Zona sub ochi'],
  ['fillery-modulaciya-obema-shek', 'fillery-modulaciya-obema-shek-beltsy', 'fillere-modulare-volum-obraji-balti', 'Объём щёк', 'Volumul obrajilor'],
  ['fillery-kombinacia-mezoterapiya-lico', 'fillery-kombinacia-mezoterapiya-lico-beltsy', 'fillere-combinatie-mezoterapie-fata-balti', 'Филлеры и мезотерапия', 'Fillere și mezoterapie'],
  ['fillery-kombinacia-biorevital', 'fillery-kombinacia-biorevital-beltsy', 'fillere-combinatie-biorevitalizare-balti', 'Филлеры и биоревитализация', 'Fillere și biorevitalizare'],
  ['fillery-posle-poteri-vesa', 'fillery-posle-poteri-vesa-beltsy', 'fillere-dupa-pierdere-greutate-balti', 'После похудения', 'După pierderea în greutate'],
  ['fillery-asimetriya-posle-travmy', 'fillery-asimetriya-posle-travmy-beltsy', 'fillere-asimetrie-dupa-trauma-balti', 'Асимметрия после травмы', 'Asimetrie după traumă'],
  ['fillery-dolgovechnost-zavisit', 'fillery-dolgovechnost-zavisit-beltsy', 'fillere-durata-depinde-balti', 'От чего зависит срок', 'De ce depinde durata'],
  ['fillery-konsultaciya-oczenka-proporcij', 'fillery-konsultaciya-oczenka-proporcij-beltsy', 'fillere-consultatie-proportii-balti', 'Оценка пропорций', 'Evaluarea proporțiilor'],
  ['fillery-strategiya-minimalizm', 'fillery-strategiya-minimalizm-beltsy', 'fillere-strategie-minimalism-balti', 'Стратегия минимализма', 'Strategia minimalismului'],
  ['fillery-strategiya-maksimalizm', 'fillery-strategiya-maksimalizm-beltsy', 'fillere-strategie-volum-balti', 'Выраженный объём', 'Volum pronunțat'],
  ['fillery-marka-preparata-znach', 'fillery-marka-preparata-znach-beltsy', 'fillere-brand-semnificatie-balti', 'Значение бренда препарата', 'Semnificația brandului'],
  ['fillery-tehnika-linejnyh-vectorov', 'fillery-tehnika-linejnyh-vectorov-beltsy', 'fillere-tehnica-vectori-balti', 'Векторы коррекции', 'Vectori de corecție'],
  ['fillery-kontrol-posle-nedeli', 'fillery-kontrol-nedelya-beltsy', 'fillere-control-dupa-saptamana-balti', 'Контроль через неделю', 'Control după o săptămână'],
  ['fillery-oslozhnenie-rannie-znaki', 'fillery-oslozhnenie-rannie-znaki-beltsy', 'fillere-complicatii-semne-timpuriu-balti', 'Ранние признаки осложнений', 'Semne timpurii ale complicațiilor'],
  ['fillery-kogda-nuzhna-konsult', 'fillery-kogda-nuzhna-konsult-beltsy', 'fillere-cand-consult-urgent-balti', 'Когда срочно к врачу', 'Când mergeți urgent la medic'],
  ['fillery-i-pregnancy-planning', 'fillery-i-pregnancy-planning-beltsy', 'fillere-planificare-sarcina-balti', 'Планирование беременности', 'Planificarea sarcinii'],
  ['fillery-i-kormlenie', 'fillery-i-kormlenie-beltsy', 'fillere-si-alaptare-balti', 'Лактация и филлеры', 'Alăptarea și fillerele'],
  ['fillery-posle-stomatologii', 'fillery-posle-stomatologii-beltsy', 'fillere-dupa-stomatologie-balti', 'После стоматологии', 'După stomatologie'],
  ['fillery-posle-plasticheskoj-ranshe', 'fillery-posle-plasticheskoj-ranshe-beltsy', 'fillere-dupa-chirurgie-estetica-balti', 'После хирургии лица', 'După chirurgie facială'],
  ['fillery-povtornaya-korekciya-cherez-mesyac', 'fillery-povtornaya-korekciya-cherez-mesyac-beltsy', 'fillere-corectie-dupa-luna-balti', 'Коррекция через месяц', 'Corecție după o lună'],
  ['fillery-kombinacia-niti-chitat', 'fillery-kombinacia-niti-chitat-beltsy', 'fillere-combinatie-fire-balti', 'Филлеры и нити', 'Fillere și fire'],
  ['fillery-estetika-muzhchin-profil', 'fillery-estetika-muzhchin-profil-beltsy', 'fillere-estetica-barbati-profil-balti', 'Мужской профиль', 'Profil masculin'],
  ['fillery-zapis-konsultaciya', 'fillery-zapis-konsultaciya-beltsy', 'fillere-programare-consultatie-balti', 'Запись на контурную пластику', 'Programare conturare'],
  ['fillery-anatomiya-proporcii-lica', 'fillery-anatomiya-proporcii-lica-beltsy', 'fillere-anatomie-proportii-fata-balti', 'Пропорции лица и филлеры', 'Proporțiile feței și fillerele'],
];

function buildCluster(cfg) {
  const { clusterId, bodyKey, rows, mode, dateStart } = cfg;
  const meta = [];
  let contentBody = '';
  for (let i = 0; i < 25; i++) {
    const [id, slugRu, slugRoShort, shortRu, shortRo] = rows[i];
    const slugRo = roSlug(slugRoShort);
    const titleRu = `${shortRu} | Meddera`;
    const titleRo = `${shortRo} | Meddera`;
    const descriptionRu = `${shortRu}: информационный материал клиники Meddera в Бельцах. Консультация и индивидуальный план.`;
    const descriptionRo = `${shortRo}: material informativ, clinica Meddera din Bălți. Consultație și plan individual.`;
    const excerptRu = `Коротко о теме: ${shortRu.toLowerCase()}.`;
    const excerptRo = `Pe scurt: ${shortRo.toLowerCase()}.`;
    const d = new Date(dateStart);
    d.setDate(d.getDate() + i);
    const iso = d.toISOString().slice(0, 10);
    meta.push({
      id,
      clusterId,
      slugRu,
      slugRo,
      publishedAt: iso,
      dateModified: iso,
      titleRu,
      titleRo,
      descriptionRu,
      descriptionRo,
      excerptRu,
      excerptRo,
      bodyKey,
    });
    contentBody += emitContentRecord(id, { ru: shortRu, ro: shortRo }, mode);
  }
  return { meta, contentBody };
}

const clusters = [
  buildCluster({
    key: 'derm',
    clusterId: 'dermatologist',
    bodyKey: 'dermatologist-article',
    exportName: 'DERMATOLOGIST_ARTICLE_CONTENT_PART2',
    typeName: 'DermatologistArticleCopy',
    rows: DERM,
    mode: 'full',
    dateStart: '2026-07-01',
  }),
  buildCluster({
    key: 'bot',
    clusterId: 'botox',
    bodyKey: 'botox-article',
    exportName: 'BOTOX_ARTICLE_CONTENT_PART2',
    typeName: 'BotoxArticleCopy',
    rows: BOT,
    mode: 'full',
    dateStart: '2026-07-26',
  }),
  buildCluster({
    key: 'lip',
    clusterId: 'lips',
    bodyKey: 'lip-cluster-article',
    exportName: 'LIPS_ARTICLE_CONTENT_PART2',
    typeName: 'LipsArticleCopy',
    rows: LIPS,
    mode: 'full',
    dateStart: '2026-08-20',
  }),
  buildCluster({
    key: 'meso',
    clusterId: 'mesotherapy-face',
    bodyKey: 'mesotherapy-face-article',
    exportName: 'MESOTHERAPY_FACE_ARTICLE_CONTENT_PART2',
    typeName: 'MesotherapyFaceArticleCopy',
    rows: MESO,
    mode: 'base',
    dateStart: '2026-09-14',
  }),
  buildCluster({
    key: 'bio',
    clusterId: 'biorevitalization',
    bodyKey: 'biorevitalization-article',
    exportName: 'BIOREVITALIZATION_ARTICLE_CONTENT_PART3',
    typeName: 'BiorevitalizationArticleCopy',
    rows: BIO,
    mode: 'base',
    dateStart: '2026-10-09',
  }),
  buildCluster({
    key: 'fil',
    clusterId: 'fillers',
    bodyKey: 'fillers-article',
    exportName: 'FILLERS_ARTICLE_CONTENT_PART3',
    typeName: 'FillersArticleCopy',
    rows: FILL,
    mode: 'base',
    dateStart: '2026-11-03',
  }),
];

function writeMetaFile(filename, exportConst, clusterId, posts) {
  let out = `import type { BlogPost } from '@/blog-data/types';\n\n`;
  out += `/** Part 2 articles 26–50 — ${clusterId} */\n\n`;
  out += `export const ${exportConst}: BlogPost[] = [\n`;
  for (const p of posts) out += emitMeta(p);
  out += `];\n`;
  writeFileSync(join(blogData, filename), out, 'utf8');
}

function writeContentFile(filename, exportName, copyTypeName, body) {
  let out = `import type { ArticleSection } from './types-article-shared';\n\n`;
  out += `export type ${copyTypeName} = {\n`;
  out += `  sectionsRu: ArticleSection[];\n  sectionsRo: ArticleSection[];\n};\n\n`;
  out += `export const ${exportName}: Record<string, ${copyTypeName}> = {\n`;
  out += body;
  out += `};\n`;
  writeFileSync(join(blogData, filename), out, 'utf8');
}

/* Avoid circular imports: minimal shared type file */
writeFileSync(
  join(blogData, 'types-article-shared.ts'),
  `export type ArticleSection = { h2: string; paragraphs: string[] };\n`,
  'utf8'
);

writeMetaFile('dermatologist-cluster-articles-part2.ts', 'dermatologistArticlesPart2', 'dermatologist', clusters[0].meta);
writeMetaFile('botox-cluster-articles-part2.ts', 'botoxArticlesPart2', 'botox', clusters[1].meta);
writeMetaFile('lips-cluster-articles-part2.ts', 'lipsArticlesPart2', 'lips', clusters[2].meta);
writeMetaFile('mesotherapy-face-cluster-articles-part2.ts', 'mesotherapyFaceArticlesPart2', 'mesotherapy-face', clusters[3].meta);
writeMetaFile('biorevitalization-cluster-articles-part2.ts', 'biorevitalizationArticlesPart2', 'biorevitalization', clusters[4].meta);
writeMetaFile('fillers-cluster-articles-part2.ts', 'fillersArticlesPart2', 'fillers', clusters[5].meta);

writeContentFile(
  'dermatologist-article-content-part2.ts',
  'DERMATOLOGIST_ARTICLE_CONTENT_PART2',
  'DermatologistArticleCopy',
  clusters[0].contentBody
);
writeContentFile(
  'botox-article-content-part2.ts',
  'BOTOX_ARTICLE_CONTENT_PART2',
  'BotoxArticleCopy',
  clusters[1].contentBody
);
writeContentFile(
  'lips-article-content-part2.ts',
  'LIPS_ARTICLE_CONTENT_PART2',
  'LipsArticleCopy',
  clusters[2].contentBody
);
writeContentFile(
  'mesotherapy-face-article-content-part2.ts',
  'MESOTHERAPY_FACE_ARTICLE_CONTENT_PART2',
  'MesotherapyFaceArticleCopy',
  clusters[3].contentBody
);
writeContentFile(
  'biorevitalization-article-content-part3.ts',
  'BIOREVITALIZATION_ARTICLE_CONTENT_PART3',
  'BiorevitalizationArticleCopy',
  clusters[4].contentBody
);
writeContentFile(
  'fillers-article-content-part3.ts',
  'FILLERS_ARTICLE_CONTENT_PART3',
  'FillersArticleCopy',
  clusters[5].contentBody
);

console.log('Generated Part 2 metadata + content for 6 clusters (150 articles).');
