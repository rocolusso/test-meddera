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
  'biorevitalizaciya-rezultaty-dlitelnost': {
    sectionsRu: [
      { 
        h2: 'Когда виден результат биоревитализации', 
        paragraphs: [
          'Первый эффект биоревитализации заметен через 3-5 дней после процедуры: кожа становится более увлажнённой, свежей, улучшается тон и текстура.',
          'Максимальный результат проявляется через 2-3 недели, когда гиалуроновая кислота полностью встраивается в кожу и стимулирует синтез коллагена.',
          'После курса из 2-3 процедур эффект накопительный: кожа становится более упругой, эластичной, морщины разглаживаются, цвет лица выравнивается.'
        ] 
      },
      { 
        h2: 'Длительность эффекта биоревитализации', 
        paragraphs: [
          'Эффект биоревитализации сохраняется 4-6 месяцев в зависимости от типа кожи, возраста, образа жизни и используемого препарата.',
          'Для поддержания результата рекомендуется повторять процедуру 2 раза в год (весна и осень). Это позволяет сохранить качество кожи и предотвратить появление новых морщин.',
          'У молодых пациентов (25-35 лет) эффект может сохраняться до 6-8 месяцев. У пациентов старше 40 лет — 4-5 месяцев.'
        ] 
      },
      { 
        h2: 'Факторы, влияющие на длительность эффекта', 
        paragraphs: [
          'Тип кожи: сухая кожа быстрее теряет влагу, поэтому эффект короче. Жирная кожа дольше сохраняет результат.',
          'Возраст: чем старше пациент, тем быстрее гиалуроновая кислота распадается. После 40 лет эффект короче.',
          'Образ жизни: курение, алкоголь, стресс, недостаток сна ускоряют распад ГК. Здоровый образ жизни продлевает эффект.',
          'Уход за кожей: правильный домашний уход (увлажнение, SPF) продлевает результат биоревитализации.'
        ] 
      },
      { 
        h2: 'Как продлить эффект биоревитализации', 
        paragraphs: [
          'Используйте увлажняющие кремы с гиалуроновой кислотой для поддержания уровня влаги в коже.',
          'Защищайте кожу от солнца: используйте SPF 30+ круглый год. УФ-излучение разрушает гиалуроновую кислоту.',
          'Пейте достаточно воды (1,5-2 литра в день) для поддержания гидратации кожи изнутри.',
          'Избегайте курения и алкоголя: они ускоряют распад гиалуроновой кислоты и старение кожи.'
        ] 
      },
      { 
        h2: 'Биоревитализация в клинике Meddera', 
        paragraphs: [
          'В Meddera используются сертифицированные препараты для биоревитализации с доказанной эффективностью. Процедуру проводит опытный дерматокосметолог.',
          'Консультация включает: оценку состояния кожи, выбор препарата, расчёт количества процедур и длительности эффекта.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.'
        ] 
      }
    ],
    sectionsRo: [
      { 
        h2: 'Când este vizibil rezultatul biorevitalizării', 
        paragraphs: [
          'Primul efect al biorevitalizării este vizibil în 3-5 zile după procedură: pielea devine mai hidratată, proaspătă, tonul și textura se îmbunătățesc.',
          'Rezultatul maxim se manifestă în 2-3 săptămâni, când acidul hialuronic se integrează complet în piele și stimulează sinteza de colagen.',
          'După un curs de 2-3 proceduri, efectul este cumulativ: pielea devine mai fermă, elastică, ridurile se netezesc, culoarea feței se uniformizează.'
        ] 
      },
      { 
        h2: 'Durata efectului biorevitalizării', 
        paragraphs: [
          'Efectul biorevitalizării se păstrează 4-6 luni în funcție de tipul de piele, vârstă, stil de viață și preparatul folosit.',
          'Pentru menținerea rezultatului se recomandă repetarea procedurii de 2 ori pe an (primăvară și toamnă). Acest lucru permite păstrarea calității pielii și prevenirea apariției de noi riduri.',
          'La pacienții tineri (25-35 ani) efectul se poate păstra până la 6-8 luni. La pacienții peste 40 ani — 4-5 luni.'
        ] 
      },
      { 
        h2: 'Factori care influențează durata efectului', 
        paragraphs: [
          'Tipul de piele: pielea uscată pierde mai repede umiditatea, deci efectul este mai scurt. Pielea grasă păstrează mai mult rezultatul.',
          'Vârsta: cu cât pacientul este mai în vârstă, cu atât acidul hialuronic se descompune mai repede. După 40 ani efectul este mai scurt.',
          'Stilul de viață: fumatul, alcoolul, stresul, lipsa somnului accelerează descompunerea AH. Un stil de viață sănătos prelungește efectul.',
          'Îngrijirea pielii: îngrijirea corectă acasă (hidratare, SPF) prelungește rezultatul biorevitalizării.'
        ] 
      },
      { 
        h2: 'Cum să prelungiți efectul biorevitalizării', 
        paragraphs: [
          'Folosiți creme hidratante cu acid hialuronic pentru menținerea nivelului de umiditate în piele.',
          'Protejați pielea de soare: folosiți SPF 30+ tot anul. Radiația UV distruge acidul hialuronic.',
          'Beți suficientă apă (1,5-2 litri pe zi) pentru menținerea hidratării pielii din interior.',
          'Evitați fumatul și alcoolul: acestea accelerează descompunerea acidului hialuronic și îmbătrânirea pielii.'
        ] 
      },
      { 
        h2: 'Biorevitalizarea la clinica Meddera', 
        paragraphs: [
          'La Meddera folosim preparate certificate pentru biorevitalizare cu eficacitate dovedită. Procedura este efectuată de un dermatocosmetolog experimentat.',
          'Consultația include: evaluarea stării pielii, alegerea preparatului, calculul numărului de proceduri și durata efectului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.'
        ] 
      }
    ],
  },
};
