const http = require('http');

const BASE_URL = 'http://localhost:3000';

// Список всех статей из registry
const articles = [
  // Дерматолог (25)
  'dermatolog-beltsy-kogda-nuzhna-konsultaciya',
  'dermatoskopiya-chto-eto-zachem-nuzhna-beltsy',
  'akne-prichiny-stadii-lechenie-beltsy',
  'ekzema-simptomy-profilaktika-beltsy',
  'psoriaz-sovremennye-podhody-terapii-beltsy',
  'rozacea-prichiny-lechenie-beltsy',
  'atopicheskij-dermatit-uhod-profilaktika',
  'seboreynyj-dermatit-prichiny-lechenie',
  'kontaktnyj-dermatit-allergiya-razdrazhenie',
  'vitiligo-chto-eto-mozhno-li-lechit',
  'papillomy-borodavki-udalenie-beltsy',
  'keratomy-chto-eto-nuzhno-li-udalyat',
  'alopeciya-vypadenie-volos-prichiny',
  'seboreya-kozhi-golovy-lechenie',
  'onikhomikoz-gribok-nogtej-lechenie',
  'gipergidro z-lechenie-beltsy',
  'follikulit-vospalenie-volosyanyh-follikulov',
  'pigmentnye-pyatna-prichiny-lechenie',
  'solnechnye-ozhogi-pervaya-pomoshch',
  'vrosshij-nogot-prichiny-lechenie-beltsy',
  'fotostareenie-kozhi-profilaktika-beltsy',
  'allergicheskie-reakcii-kozhi-diagnostika-beltsy',
  'gribok-kozhi-vidy-lechenie-beltsy',
  'virusnye-zabolevaniya-kozhi-gerpes-borodavki-beltsy',
  'impetigo-bakterialnaya-infekciya-kozhi-beltsy',
  'krapivnica-prichiny-lechenie-beltsy',
  
  // Ботокс (25)
  'botoks-beltsy-chto-eto-pokazaniya',
  'botoks-kak-prohodit-procedura-beltsy',
  'botoks-protivopokazaniya-beltsy',
  'botoks-uhod-posle-procedury-beltsy',
  'botoks-rezultaty-dlitelnost-effekta-beltsy',
  'botoks-uhod-posle-procedury-rekomendacii',
  'botoks-zony-injekcij-beltsy',
  'botoks-oslozhneniya-pobochnye-effekty-beltsy',
  'botoks-chastota-povtornyh-procedur-beltsy',
  'botoks-vozrast-kogda-nachinat-beltsy',
  'botoks-vs-fillery-raznica-beltsy',
  'botoks-mify-pravda-beltsy',
  'botoks-preparaty-vidy-beltsy',
  'botoks-gusinye-lapki-beltsy',
  'botoks-mezhbrove-skladka-lva-beltsy',
  'botoks-lob-gorizontalnye-morshchiny-beltsy',
  'botoks-brovi-lifting-beltsy',
  'botoks-nos-korrekciya-beltsy',
  'botoks-podborodok-morshchiny-beltsy',
  'botoks-sheya-platizmy-beltsy',
  'botoks-gipergidro z-podmyshek-beltsy',
  'botoks-bruksizm-skrezhetanie-zubami-beltsy',
  'botoks-desnevaya-ulybka-beltsy',
  'botoks-migreni-golovnye-boli-beltsy',
  'botoks-beremennost-grudnoe-vskarmlivanie-beltsy',
  'botoks-muzhchinam-osobennosti-beltsy',
  
  // Губы (25)
  'uvelichenie-gub-beltsy-chto-eto',
  'uvelichenie-gub-kak-prohodit-procedura',
  'uvelichenie-gub-protivopokazaniya',
  'uvelichenie-gub-uhod-posle-procedury',
  'uvelichenie-gub-oslozhneniya-profilaktika',
  'uvelichenie-gub-dlitelnost-effekta-beltsy',
  'uvelichenie-gub-estestvenny-rezultat-beltsy',
  'uvelichenie-gub-tonkie-guby-beltsy',
  'uvelichenie-gub-asimmetriya-korrekciya-beltsy',
  'uvelichenie-gub-kontury-chetkost-beltsy',
  'uvelichenie-gub-verkhnyaya-nizhnyaya-beltsy',
  'uvelichenie-gub-vozrastnye-izmeneniya-beltsy',
  'uvelichenie-gub-morshchiny-vokrug-beltsy',
  'uvelichenie-gub-nososgubnye-skladki-beltsy',
  'uvelichenie-gub-gialuronovaya-kislota-beltsy',
  'uvelichenie-gub-plotnost-fillera-beltsy',
  'uvelichenie-gub-proizvoditeli-fillerov-beltsy',
  'uvelichenie-gub-bolevye-oshchushcheniya-beltsy',
  'uvelichenie-gub-otek-sinyaki-beltsy',
  'uvelichenie-gub-rastvorenie-gialuronidazoj-beltsy',
  'uvelichenie-gub-pervyj-raz-beltsy',
  'uvelichenie-gub-povtornaya-procedura-beltsy',
  'uvelichenie-gub-protivopokazaniya-beltsy',
  'uvelichenie-gub-gerpes-profilaktika-beltsy',
  'uvelichenie-gub-sezon-vremya-goda-beltsy',
  
  // Мезотерапия лица (25)
  'mezoterapiya-lica-beltsy-chto-eto-pokazaniya',
  'mezoterapiya-lica-preparaty-sostav-beltsy',
  'mezoterapiya-lica-kak-prohodit-procedura-beltsy',
  'mezoterapiya-lica-rezultaty-dlitelnost-beltsy',
  'mezoterapiya-lica-protivopokazaniya-beltsy',
  'mezoterapiya-lica-uhod-posle-procedury-beltsy',
  'mezoterapiya-lica-vozrast-kogda-nachinat-beltsy',
  'mezoterapiya-lica-kurs-procedur-beltsy',
  'mezoterapiya-lica-bolevye-oshchushcheniya-beltsy',
  'mezoterapiya-lica-otek-sinyaki-beltsy',
  'mezoterapiya-lica-sezon-vremya-goda-beltsy',
  'mezoterapiya-lica-akne-postakne-beltsy',
  'mezoterapiya-lica-pigmentaciya-beltsy',
  'mezoterapiya-lica-morshchiny-beltsy',
  'mezoterapiya-lica-suhaya-kozha-beltsy',
  'mezoterapiya-lica-zhirnaya-kozha-beltsy',
  'mezoterapiya-lica-rasshirennye-pory-beltsy',
  'mezoterapiya-lica-kuperoz-beltsy',
  'mezoterapiya-vokrug-glaz-beltsy',
  'mezoterapiya-sheya-dekolt-beltsy',
  'mezoterapiya-ruk-beltsy',
  'mezoterapiya-vs-biorevitalizaciya-beltsy',
  'mezoterapiya-vs-botoks-beltsy',
  'mezoterapiya-kombinaciya-procedur-beltsy',
  
  // Биоревитализация (25)
  'biorevitalizaciya-beltsy-chto-eto-pokazaniya',
  'biorevitalizaciya-preparaty-gialoronovaya-kislota',
  'biorevitalizaciya-rezultaty-dlitelnost-effekta',
  'biorevitalizaciya-kurs-procedur-beltsy',
  'biorevitalizaciya-protivopokazaniya-beltsy',
  'biorevitalizaciya-uhod-posle-procedury-beltsy',
  'biorevitalizaciya-vozrast-kogda-nachinat-beltsy',
  'biorevitalizaciya-bolevye-oshchushcheniya-beltsy',
  'biorevitalizaciya-otek-sinyaki-beltsy',
  'biorevitalizaciya-sezon-vremya-goda-beltsy',
  'biorevitalizaciya-suhaya-kozha-beltsy',
  'biorevitalizaciya-zhirnaya-kozha-beltsy',
  'biorevitalizaciya-morshchiny-beltsy',
  'biorevitalizaciya-pigmentaciya-beltsy',
  'biorevitalizaciya-vokrug-glaz-beltsy',
  'biorevitalizaciya-sheya-dekolt-beltsy',
  'biorevitalizaciya-ruk-beltsy',
  'biorevitalizaciya-vs-mezoterapiya-beltsy',
  'biorevitalizaciya-vs-botoks-beltsy',
  'biorevitalizaciya-vs-fillery-beltsy',
  'biorevitalizaciya-kombinaciya-procedur-beltsy',
  'biorevitalizaciya-lazernaya-beltsy',
  'biorevitalizaciya-preparaty-proizvoditeli-beltsy',
  'biorevitalizaciya-povtornaya-procedura-beltsy',
  
  // Филлеры (25)
  'konturnaya-plastika-beltsy-chto-eto-pokazaniya',
  'fillery-vidy-sostav-proizvoditeli-beltsy',
  'konturnaya-plastika-skul-podborodka-beltsy',
  'konturnaya-plastika-nososgubnye-skladki-beltsy',
  'konturnaya-plastika-sleznaya-borozda-beltsy',
  'konturnaya-plastika-viski-beltsy',
  'konturnaya-plastika-nosa-beltsy',
  'konturnaya-plastika-podborodka-beltsy',
  'konturnaya-plastika-skul-beltsy',
  'konturnaya-plastika-shchek-beltsy',
  'konturnaya-plastika-ugolkov-rta-beltsy',
  'konturnaya-plastika-rezultaty-dlitelnost-beltsy',
  'konturnaya-plastika-protivopokazaniya-beltsy',
  'konturnaya-plastika-uhod-posle-procedury-beltsy',
  'konturnaya-plastika-bolevye-oshchushcheniya-beltsy',
  'konturnaya-plastika-otek-sinyaki-beltsy',
  'konturnaya-plastika-vozrast-beltsy',
  'konturnaya-plastika-rastvorenie-gialuronidazoj-beltsy',
  'konturnaya-plastika-oslozhneniya-beltsy',
  'konturnaya-plastika-vs-botoks-beltsy',
  'konturnaya-plastika-kombinaciya-procedur-beltsy',
  'konturnaya-plastika-sezon-beltsy',
  'konturnaya-plastika-muzhchinam-beltsy',
  'konturnaya-plastika-povtornaya-procedura-beltsy',
];

// Хабы
const hubs = [
  'dermatolog-balti-hub',
  'botoks-balti-hub',
  'uvelichenie-gub-balti-hub',
  'mezoterapiya-lica-balti-hub',
  'biorevitalizaciya-balti-hub',
  'konturnaya-plastika-balti-hub',
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function checkAll() {
  console.log('🔍 Проверка всех страниц блога на 404...\n');
  
  const errors = [];
  let checked = 0;
  
  // Проверка хабов RU
  console.log('📋 Проверка хабов (RU)...');
  for (const hub of hubs) {
    const result = await checkUrl(`${BASE_URL}/blog/${hub}`);
    checked++;
    if (result.status !== 200) {
      errors.push(result);
      console.log(`❌ ${result.url} - ${result.status}`);
    } else {
      console.log(`✅ ${result.url}`);
    }
  }
  
  // Проверка хабов RO
  console.log('\n📋 Проверка хабов (RO)...');
  for (const hub of hubs) {
    const result = await checkUrl(`${BASE_URL}/ro/blog/${hub}`);
    checked++;
    if (result.status !== 200) {
      errors.push(result);
      console.log(`❌ ${result.url} - ${result.status}`);
    } else {
      console.log(`✅ ${result.url}`);
    }
  }
  
  // Проверка статей RU
  console.log('\n📄 Проверка статей (RU)...');
  for (const article of articles) {
    const result = await checkUrl(`${BASE_URL}/blog/${article}`);
    checked++;
    if (result.status !== 200) {
      errors.push(result);
      console.log(`❌ ${result.url} - ${result.status}`);
    }
  }
  console.log(`Проверено статей RU: ${articles.length}`);
  
  // Проверка статей RO
  console.log('\n📄 Проверка статей (RO)...');
  for (const article of articles) {
    const result = await checkUrl(`${BASE_URL}/ro/blog/${article}`);
    checked++;
    if (result.status !== 200) {
      errors.push(result);
      console.log(`❌ ${result.url} - ${result.status}`);
    }
  }
  console.log(`Проверено статей RO: ${articles.length}`);
  
  // Проверка главных страниц блога
  console.log('\n🏠 Проверка главных страниц блога...');
  const mainPages = [
    `${BASE_URL}/blog`,
    `${BASE_URL}/ro/blog`,
    `${BASE_URL}/blog/page/2`,
    `${BASE_URL}/ro/blog/page/2`,
  ];
  
  for (const url of mainPages) {
    const result = await checkUrl(url);
    checked++;
    if (result.status !== 200) {
      errors.push(result);
      console.log(`❌ ${url} - ${result.status}`);
    } else {
      console.log(`✅ ${url}`);
    }
  }
  
  // Итоги
  console.log('\n' + '='.repeat(60));
  console.log(`📊 ИТОГИ ПРОВЕРКИ:`);
  console.log(`Всего проверено: ${checked} страниц`);
  console.log(`Ошибок 404: ${errors.length}`);
  
  if (errors.length > 0) {
    console.log('\n❌ СТРАНИЦЫ С ОШИБКАМИ:');
    errors.forEach(err => {
      console.log(`  - ${err.url} (${err.status})`);
    });
  } else {
    console.log('\n✅ Все страницы работают корректно!');
  }
  console.log('='.repeat(60));
}

checkAll().catch(console.error);
