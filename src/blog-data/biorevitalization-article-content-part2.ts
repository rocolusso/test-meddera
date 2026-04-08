export type ArticleSection = { h2: string; paragraphs: string[] };
export type BiorevitalizationArticleCopy = { sectionsRu: ArticleSection[]; sectionsRo: ArticleSection[] };

export const BIOREVITALIZATION_ARTICLE_CONTENT_PART2: Record<string, BiorevitalizationArticleCopy> = {
  'biorevitalizaciya-kurs-procedur': {
    sectionsRu: [
      { h2: 'Стандартный курс', paragraphs: ['Курс биоревитализации: 2-3 процедуры с интервалом 14-21 день. Зависит от возраста, состояния кожи.'] },
      { h2: 'Поддерживающие процедуры', paragraphs: ['После курса — поддерживающие процедуры 1 раз в 4-6 месяцев. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Curs standard', paragraphs: ['Cursul de biorevitalizare: 2-3 proceduri cu interval de 14-21 zile. Depinde de vârstă, starea pielii.'] },
      { h2: 'Proceduri de susținere', paragraphs: ['După curs — proceduri de susținere o dată la 4-6 luni. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
  'biorevitalizaciya-protivopokazaniya': {
    sectionsRu: [
      { h2: 'Противопоказания', paragraphs: ['Беременность, кормление, аллергия на ГК, активная инфекция кожи, онкология, тяжёлые системные заболевания.'] },
      { h2: 'Относительные', paragraphs: ['Антикоагулянты (прекратить за 2 недели), менструация, обострение кожных заболеваний. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Contraindicații', paragraphs: ['Sarcină, alăptare, alergie la AH, infecție activă a pielii, oncologie, boli sistemice grave.'] },
      { h2: 'Relative', paragraphs: ['Anticoagulante (opriți cu 2 săptămâni înainte), menstruație, exacerbarea bolilor pielii. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
  'biorevitalizaciya-uhod-posle': {
    sectionsRu: [
      { h2: 'Первые 24 часа', paragraphs: ['Не трогать лицо, не наносить макияж, не умываться горячей водой. Избегать солнца, сауны, спорта.'] },
      { h2: 'Первая неделя', paragraphs: ['SPF 30-50, избегать агрессивных средств, не делать массаж лица. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Primele 24 ore', paragraphs: ['Nu atingeți fața, nu aplicați machiaj, nu spălați cu apă fierbinte. Evitați soarele, sauna, sportul.'] },
      { h2: 'Prima săptămână', paragraphs: ['SPF 30-50, evitați produse agresive, nu faceți masaj facial. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
  'biorevitalizaciya-vozrast': {
    sectionsRu: [{ h2: 'Оптимальный возраст', paragraphs: ['С 25-30 лет (профилактика). После 35-40 лет — омоложение. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Vârsta optimă', paragraphs: ['De la 25-30 ani (prevenire). După 35-40 ani — întinerire. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-bolevye-oshchushcheniya': {
    sectionsRu: [{ h2: 'Болевые ощущения', paragraphs: ['Малоболезненная процедура. Используется анестезирующий крем. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Senzații dureroase', paragraphs: ['Procedură puțin dureroasă. Se folosește cremă anestezianta. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-otek-sinyaki': {
    sectionsRu: [{ h2: 'Отёк и синяки', paragraphs: ['Лёгкий отёк — норма (1-2 дня). Синяки у 10-20% пациентов (5-7 дней). Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Edem și vânătăi', paragraphs: ['Edem ușor — normă (1-2 zile). Vânătăi la 10-20% pacienți (5-7 zile). Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-sezon': {
    sectionsRu: [{ h2: 'Лучший сезон', paragraphs: ['Можно круглый год. Осень-зима — оптимально (меньше солнца). Летом — SPF 30-50. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Cel mai bun sezon', paragraphs: ['Se poate tot anul. Toamna-iarna — optim (mai puțin soare). Vara — SPF 30-50. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-suhaya-kozha': {
    sectionsRu: [{ h2: 'Для сухой кожи', paragraphs: ['Биоревитализация интенсивно увлажняет сухую кожу. Курс 2-3 процедуры. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Pentru piele uscată', paragraphs: ['Biorevitalizarea hidratează intens pielea uscată. Curs de 2-3 proceduri. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-zhirnaya-kozha': {
    sectionsRu: [{ h2: 'Для жирной кожи', paragraphs: ['Можно делать биоревитализацию при жирной коже. Увлажняет без утяжеления. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Pentru piele grasă', paragraphs: ['Se poate face biorevitalizarea la piele grasă. Hidratează fără îngreuiere. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-morshchiny': {
    sectionsRu: [{ h2: 'От морщин', paragraphs: ['Биоревитализация эффективна при мелких морщинах. Не заполняет глубокие (нужны филлеры). Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Pentru riduri', paragraphs: ['Biorevitalizarea este eficientă la riduri mici. Nu umple cele profunde (necesare fillere). Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-pigmentaciya': {
    sectionsRu: [{ h2: 'При пигментации', paragraphs: ['Биоревитализация улучшает качество кожи, но не осветляет пятна (нужна мезотерапия с витамином C). Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'La pigmentare', paragraphs: ['Biorevitalizarea îmbunătățește calitatea pielii, dar nu deschide petele (necesară mezoterapie cu vitamina C). Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-vokrug-glaz': {
    sectionsRu: [{ h2: 'Вокруг глаз', paragraphs: ['Биоревитализация для области вокруг глаз с мягкими препаратами. Курс 2-3 процедуры. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'În jurul ochilor', paragraphs: ['Biorevitalizarea pentru zona din jurul ochilor cu preparate moi. Curs de 2-3 proceduri. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-sheya-dekolt': {
    sectionsRu: [{ h2: 'Шея и декольте', paragraphs: ['Биоревитализация для шеи и декольте. Курс 2-3 процедуры. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Gât și decolteu', paragraphs: ['Biorevitalizarea pentru gât și decolteu. Curs de 2-3 proceduri. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-ruki': {
    sectionsRu: [{ h2: 'Для рук', paragraphs: ['Биоревитализация для омоложения кожи рук. Курс 2-3 процедуры. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Pentru mâini', paragraphs: ['Biorevitalizarea pentru întinerirea pielii mâinilor. Curs de 2-3 proceduri. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-vs-mezoterapiya': {
    sectionsRu: [{ h2: 'Разница', paragraphs: ['Биоревитализация — только ГК. Мезотерапия — коктейли. Для увлажнения — биоревитализация. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Diferența', paragraphs: ['Biorevitalizarea — doar AH. Mezoterapia — cocktailuri. Pentru hidratare — biorevitalizare. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-vs-botoks': {
    sectionsRu: [{ h2: 'Разница', paragraphs: ['Биоревитализация — увлажнение. Ботокс — разглаживание морщин. Разные цели. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Diferența', paragraphs: ['Biorevitalizarea — hidratare. Botoxul — netezirea ridurilor. Scopuri diferite. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-vs-fillery': {
    sectionsRu: [{ h2: 'Разница', paragraphs: ['Биоревитализация — увлажнение. Филлеры — объём. Разные цели. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Diferența', paragraphs: ['Biorevitalizarea — hidratare. Fillerele — volum. Scopuri diferite. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-kombinaciya-procedur': {
    sectionsRu: [{ h2: 'Комбинация', paragraphs: ['Биоревитализацию можно сочетать с ботоксом, филлерами, пилингами (интервал 2 недели). Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Combinare', paragraphs: ['Biorevitalizarea se poate combina cu botox, fillere, peeling-uri (interval 2 săptămâni). Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-lazernaya': {
    sectionsRu: [{ h2: 'Лазерная биоревитализация', paragraphs: ['Лазерная биоревитализация — без инъекций. Препарат наносится на кожу, лазер доставляет вглубь. Менее эффективна, чем инъекционная. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Biorevitalizarea cu laser', paragraphs: ['Biorevitalizarea cu laser — fără injecții. Preparatul se aplică pe piele, laserul îl livrează în profunzime. Mai puțin eficientă decât cea injectabilă. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-preparaty-proizvoditeli': {
    sectionsRu: [{ h2: 'Популярные препараты', paragraphs: ['Juvederm Hydrate, Restylane Vital, IAL System, Meso-Wharton. Используем в Meddera. Запись: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Preparate populare', paragraphs: ['Juvederm Hydrate, Restylane Vital, IAL System, Meso-Wharton. Folosim la Meddera. Programare: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
  'biorevitalizaciya-povtornaya-procedura': {
    sectionsRu: [{ h2: 'Повторная процедура', paragraphs: ['Повторная биоревитализация через 4-6 месяцев. Поддерживает результат. Запись в Meddera: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'] }],
    sectionsRo: [{ h2: 'Procedură repetată', paragraphs: ['Biorevitalizarea repetată în 4-6 luni. Menține rezultatul. Programare la Meddera: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'] }],
  },
};
