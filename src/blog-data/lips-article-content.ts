import { LIPS_ARTICLE_CONTENT_PART2 } from '@/blog-data/lips-article-content-part2';

export type ArticleSection = { h2: string; paragraphs: string[] };

export type LipsArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

const LIPS_ARTICLE_CONTENT_PART1: Record<string, LipsArticleCopy> = {
  'uvelichenie-gub-beltsy-vidy-fillerov': {
    sectionsRu: [
      {
        h2: 'Гиалуроновая кислота — основа филлеров для губ',
        paragraphs: [
          'Все современные филлеры для губ содержат гиалуроновую кислоту — естественный компонент кожи, который удерживает влагу и обеспечивает объём. Гиалуроновая кислота биосовместима, безопасна, обратима (можно растворить ферментом гиалуронидаза).',
          'Филлеры различаются по плотности, концентрации ГК, наличию лидокаина (анестетика). Для губ используются мягкие филлеры с низкой вязкостью, чтобы губы выглядели естественно и оставались подвижными.',
          'Длительность эффекта: 6-12 месяцев в зависимости от препарата, индивидуального метаболизма, активности мимики. Губы — зона с активным кровообращением, поэтому филлер рассасывается быстрее, чем в других зонах.',
        ],
      },
      {
        h2: 'Виды филлеров по плотности',
        paragraphs: [
          'Мягкие филлеры (low viscosity): для тонких губ, контура, естественного увеличения. Создают мягкий, подвижный объём. Примеры: Juvederm Volbella, Restylane Kysse, Belotero Soft.',
          'Средней плотности (medium viscosity): для заметного увеличения, коррекции асимметрии, восстановления объёма. Примеры: Juvederm Ultra, Restylane, Teosyal Kiss.',
          'Плотные филлеры (high viscosity): редко используются для губ (только для коррекции глубоких морщин вокруг рта). Могут создать неестественный вид, ограничить подвижность губ.',
        ],
      },
      {
        h2: 'Популярные производители филлеров',
        paragraphs: [
          'Juvederm (Allergan, США): линейка Vycross с технологией сшивки молекул ГК для длительного эффекта. Volbella — для естественного объёма, Ultra — для заметного увеличения.',
          'Restylane (Galderma, Швеция): технология NASHA (стабилизированная ГК животного происхождения). Kysse — специально для губ, с высокой эластичностью.',
          'Teosyal (Teoxane, Швейцария): линейка RHA (resilient hyaluronic acid) адаптируется к мимике. Kiss — для естественного увеличения губ.',
        ],
      },
      {
        h2: 'Как выбрать филлер',
        paragraphs: [
          'Выбор зависит от цели: естественное увеличение — мягкие филлеры, заметный объём — средней плотности, коррекция асимметрии — средней плотности с высокой когезивностью.',
          'Врач учитывает: толщину губ, состояние кожи, активность мимики, предыдущие процедуры. Для первой процедуры обычно используют мягкие филлеры в небольшом объёме (0.5-1 мл).',
          'Важно: не гонитесь за низкой ценой. Дешёвые филлеры могут быть некачественными, вызывать осложнения (отёк, фиброз, миграция). Выбирайте сертифицированные препараты и опытного врача.',
        ],
      },
      {
        h2: 'Увеличение губ в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные филлеры ведущих производителей (Juvederm, Restylane, Teosyal). Процедуру проводит опытный дерматокосметолог.',
          'Консультация включает: оценку формы губ, выбор филлера и объёма, обсуждение желаемого результата, расчёт стоимости.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Acidul hialuronic — baza fillerelor pentru buze',
        paragraphs: [
          'Toate fillerele moderne pentru buze conțin acid hialuronic — component natural al pielii, care reține umiditatea și asigură volumul. Acidul hialuronic este biocompatibil, sigur, reversibil (poate fi dizolvat cu enzima hialuronidază).',
          'Fillerele diferă prin densitate, concentrația de AH, prezența lidocainei (anestezic). Pentru buze se folosesc fillere moi cu vâscozitate scăzută, pentru ca buzele să arate natural și să rămână mobile.',
          'Durata efectului: 6-12 luni în funcție de preparat, metabolismul individual, activitatea mimicii. Buzele — zonă cu circulație activă, de aceea filler-ul se resorbește mai rapid decât în alte zone.',
        ],
      },
      {
        h2: 'Tipuri de fillere după densitate',
        paragraphs: [
          'Fillere moi (low viscosity): pentru buze subțiri, contur, mărire naturală. Creează volum moale, mobil. Exemple: Juvederm Volbella, Restylane Kysse, Belotero Soft.',
          'Densitate medie (medium viscosity): pentru mărire vizibilă, corecția asimetriei, restabilirea volumului. Exemple: Juvederm Ultra, Restylane, Teosyal Kiss.',
          'Fillere dense (high viscosity): rar folosite pentru buze (doar pentru corecția ridurilor profunde în jurul gurii). Pot crea aspect nenatural, limita mobilitatea buzelor.',
        ],
      },
      {
        h2: 'Producători populari de fillere',
        paragraphs: [
          'Juvederm (Allergan, SUA): linia Vycross cu tehnologie de reticulare a moleculelor de AH pentru efect de lungă durată. Volbella — pentru volum natural, Ultra — pentru mărire vizibilă.',
          'Restylane (Galderma, Suedia): tehnologia NASHA (AH stabilizat de origine animală). Kysse — special pentru buze, cu elasticitate înaltă.',
          'Teosyal (Teoxane, Elveția): linia RHA (resilient hyaluronic acid) se adaptează la mimică. Kiss — pentru mărirea naturală a buzelor.',
        ],
      },
      {
        h2: 'Cum să alegeți filler-ul',
        paragraphs: [
          'Alegerea depinde de scop: mărire naturală — fillere moi, volum vizibil — densitate medie, corecția asimetriei — densitate medie cu coezivitate înaltă.',
          'Medicul ia în considerare: grosimea buzelor, starea pielii, activitatea mimicii, procedurile anterioare. Pentru prima procedură de obicei se folosesc fillere moi în volum mic (0.5-1 ml).',
          'Important: nu vă ghidați după prețul scăzut. Fillerele ieftine pot fi de calitate slabă, provoca complicații (edem, fibroză, migrare). Alegeți preparate certificate și medic experimentat.',
        ],
      },
      {
        h2: 'Mărirea buzelor la clinica Meddera',
        paragraphs: [
          'La Meddera folosim fillere certificate de la producători de top (Juvederm, Restylane, Teosyal). Procedura este efectuată de un dermatocosmetolog experimentat.',
          'Consultația include: evaluarea formei buzelor, alegerea filler-ului și volumului, discutarea rezultatului dorit, calculul costului.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-forma-simmetriya': {
    sectionsRu: [
      {
        h2: 'Пропорции идеальных губ',
        paragraphs: [
          'Золотое сечение: верхняя губа относится к нижней как 1:1.6 (нижняя губа чуть полнее верхней). Это классическая пропорция, но не догма — важна гармония с чертами лица.',
          'Форма лука Купидона: чёткий контур верхней губы с двумя "пиками". Высота пиков и расстояние между ними индивидуальны. Слишком высокие пики могут выглядеть неестественно.',
          'Проекция губ: расстояние от основания носа до красной каймы губ. Оптимально — 10-12 мм для верхней губы. Слишком большая проекция создаёт эффект "утиных губ".',
        ],
      },
      {
        h2: 'Коррекция асимметрии губ',
        paragraphs: [
          'Причины асимметрии: врождённая особенность, травмы, неудачные предыдущие процедуры, возрастные изменения (опущение одного уголка рта).',
          'Методы коррекции: добавление филлера в менее объёмную часть губы, коррекция контура, поднятие опущенного уголка рта (комбинация филлеров и ботокса).',
          'Важно: полная симметрия недостижима (лицо человека асимметрично от природы). Цель — визуальная гармония, а не математическая точность.',
        ],
      },
      {
        h2: 'Форма губ и черты лица',
        paragraphs: [
          'Овальное лицо: подходит любая форма губ. Можно экспериментировать с объёмом и формой. Круглое лицо: избегайте чрезмерного объёма (визуально расширяет лицо), акцент на контур.',
          'Квадратное лицо: мягкие, округлые губы смягчают угловатые черты. Треугольное лицо (широкий лоб, узкий подбородок): полные губы уравновешивают пропорции.',
          'Возраст: молодым подходят полные губы с чётким контуром. После 40 лет важнее восстановить объём (губы теряют коллаген), чем создавать избыточную пухлость.',
        ],
      },
      {
        h2: 'Ошибки при увеличении губ',
        paragraphs: [
          'Избыточный объём: "утиные губы" — результат введения слишком большого количества филлера или неправильной техники. Губы теряют естественную форму, выглядят неподвижными.',
          'Нарушение пропорций: верхняя губа толще нижней, слишком высокие пики лука Купидона, чрезмерная проекция. Важно сохранить естественные пропорции.',
          'Игнорирование контура: введение филлера только в тело губы без коррекции контура создаёт размытые границы. Чёткий контур — основа красивых губ.',
        ],
      },
      {
        h2: 'Увеличение губ в клинике Meddera',
        paragraphs: [
          'В Meddera врач оценивает форму губ, пропорции лица, обсуждает желаемый результат. Используем технику послойного введения филлера для естественного объёма.',
          'Консультация включает: анализ формы губ, выбор техники и объёма филлера, обсуждение ожиданий, фотографирование для оценки результата.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Proporțiile buzelor ideale',
        paragraphs: [
          'Secțiunea de aur: buza superioară se raportează la cea inferioară ca 1:1.6 (buza inferioară puțin mai plină decât cea superioară). Aceasta este proporția clasică, dar nu dogmă — importantă este armonia cu trăsăturile feței.',
          'Forma arcului lui Cupidon: contur clar al buzei superioare cu două "vârfuri". Înălțimea vârfurilor și distanța dintre ele sunt individuale. Vârfuri prea înalte pot arăta nenatural.',
          'Proiecția buzelor: distanța de la baza nasului până la marginea roșie a buzelor. Optim — 10-12 mm pentru buza superioară. Proiecție prea mare creează efectul de "buze de rață".',
        ],
      },
      {
        h2: 'Corecția asimetriei buzelor',
        paragraphs: [
          'Cauze ale asimetriei: particularitate congenitală, traumatisme, proceduri anterioare nereușite, modificări legate de vârstă (coborârea unui colț al gurii).',
          'Metode de corecție: adăugarea de filler în partea mai puțin voluminoasă a buzei, corecția conturului, ridicarea colțului coborât al gurii (combinație de fillere și botox).',
          'Important: simetria completă este de neatins (fața omului este asimetrică din natură). Scopul — armonie vizuală, nu precizie matematică.',
        ],
      },
      {
        h2: 'Forma buzelor și trăsăturile feței',
        paragraphs: [
          'Față ovală: se potrivește orice formă de buze. Puteți experimenta cu volumul și forma. Față rotundă: evitați volumul excesiv (lărgește vizual fața), accent pe contur.',
          'Față pătrată: buze moi, rotunjite înmoaie trăsăturile unghiulare. Față triunghiulară (frunte largă, bărbie îngustă): buze pline echilibrează proporțiile.',
          'Vârsta: tinerilor li se potrivesc buze pline cu contur clar. După 40 ani este mai important să restabiliți volumul (buzele pierd colagen) decât să creați plinătate excesivă.',
        ],
      },
      {
        h2: 'Greșeli la mărirea buzelor',
        paragraphs: [
          'Volum excesiv: "buze de rață" — rezultatul introducerii unei cantități prea mari de filler sau tehnicii incorecte. Buzele pierd forma naturală, arată nemișcate.',
          'Încălcarea proporțiilor: buza superioară mai groasă decât cea inferioară, vârfuri prea înalte ale arcului lui Cupidon, proiecție excesivă. Important să păstrați proporțiile naturale.',
          'Ignorarea conturului: introducerea filler-ului doar în corpul buzei fără corecția conturului creează margini estompate. Conturul clar — baza buzelor frumoase.',
        ],
      },
      {
        h2: 'Mărirea buzelor la clinica Meddera',
        paragraphs: [
          'La Meddera medicul evaluează forma buzelor, proporțiile feței, discută rezultatul dorit. Folosim tehnica de introducere stratificată a filler-ului pentru volum natural.',
          'Consultația include: analiza formei buzelor, alegerea tehnicii și volumului de filler, discutarea așteptărilor, fotografiere pentru evaluarea rezultatului.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-uhod-posle-procedury': {
    sectionsRu: [
      {
        h2: 'Первые 24 часа после увеличения губ',
        paragraphs: [
          'Отёк и покраснение: нормальная реакция, максимум через 2-4 часа после процедуры. Отёк может быть асимметричным (одна губа больше другой) — это временно, пройдёт за 2-3 дня.',
          'Холодные компрессы: прикладывайте лёд (через салфетку) на 10-15 минут каждый час в первые 4-6 часов. Это уменьшит отёк. Не прикладывайте лёд непосредственно к коже.',
          'Что нельзя: не трогайте губы руками, не массируйте, не целуйтесь, не пейте через трубочку (создаёт вакуум), не курите, не пейте алкоголь, не наносите макияж на губы.',
        ],
      },
      {
        h2: 'Первые 3-7 дней',
        paragraphs: [
          'Питание: избегайте горячей, острой, солёной пищи (раздражает слизистую). Ешьте мягкую пищу комнатной температуры. Пейте много воды (ускоряет восстановление).',
          'Гигиена: чистите зубы аккуратно, не растягивайте губы. Используйте мягкую зубную щётку. Полощите рот антисептиком (хлоргексидин) после еды.',
          'Что нельзя: спорт, сауна, бассейн, солярий, массаж лица, стоматологические процедуры (если не срочно), агрессивные косметологические процедуры (пилинги, лазер).',
        ],
      },
      {
        h2: 'Первые 2 недели',
        paragraphs: [
          'Солнцезащита: используйте бальзам для губ с SPF 30+ (солнце усиливает отёк, может вызвать гиперпигментацию). Избегайте прямого солнца, носите шляпу.',
          'Увлажнение: наносите увлажняющий бальзам для губ 3-4 раза в день. Избегайте бальзамов с ментолом, камфорой (раздражают). Подходят: вазелин, пантенол, гиалуроновая кислота.',
          'Что можно: лёгкий макияж губ (помада, блеск) через 3-5 дней, когда спадёт отёк. Выбирайте гипоаллергенные средства. Снимайте макияж мягким средством.',
        ],
      },
      {
        h2: 'Возможные побочные эффекты',
        paragraphs: [
          'Синяки: возникают у 10-30% пациентов, проходят за 5-10 дней. Ускорить рассасывание: арника (гель, таблетки), бадяга (гель), троксевазин (гель).',
          'Асимметрия: в первые дни из-за отёка — это нормально. Если асимметрия сохраняется через 2 недели — обратитесь к врачу для коррекции (добавить филлер или растворить гиалуронидазой).',
          'Уплотнения: небольшие уплотнения в местах инъекций могут сохраняться 2-4 недели. Массируйте их лёгкими движениями (после консультации с врачом). Если не проходят — обратитесь к врачу.',
        ],
      },
      {
        h2: 'Увеличение губ в клинике Meddera',
        paragraphs: [
          'В Meddera после процедуры вы получаете подробные рекомендации по уходу, номер телефона для связи с врачом при возникновении вопросов.',
          'Контрольный осмотр: через 2 недели для оценки результата, при необходимости — коррекция (бесплатно в течение 2 недель после процедуры).',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Primele 24 ore după mărirea buzelor',
        paragraphs: [
          'Edem și roșeață: reacție normală, maxim în 2-4 ore după procedură. Edemul poate fi asimetric (o buză mai mare decât cealaltă) — este temporar, va trece în 2-3 zile.',
          'Comprese reci: aplicați gheață (prin șervețel) timp de 10-15 minute în fiecare oră în primele 4-6 ore. Acest lucru va reduce edemul. Nu aplicați gheața direct pe piele.',
          'Ce nu se poate: nu atingeți buzele cu mâinile, nu masați, nu sărutați, nu beți prin pai (creează vid), nu fumați, nu beți alcool, nu aplicați machiaj pe buze.',
        ],
      },
      {
        h2: 'Primele 3-7 zile',
        paragraphs: [
          'Alimentație: evitați mâncarea fierbinte, picantă, sărată (iritează mucoasa). Mâncați mâncare moale la temperatura camerei. Beți multă apă (accelerează recuperarea).',
          'Igienă: periați dinții cu atenție, nu întindeți buzele. Folosiți periuță de dinți moale. Clătiți gura cu antiseptic (clorhexidină) după masă.',
          'Ce nu se poate: sport, saună, piscină, solar, masaj facial, proceduri stomatologice (dacă nu sunt urgente), proceduri cosmetologice agresive (peeling-uri, laser).',
        ],
      },
      {
        h2: 'Primele 2 săptămâni',
        paragraphs: [
          'Protecție solară: folosiți balsam pentru buze cu SPF 30+ (soarele intensifică edemul, poate provoca hiperpigmentare). Evitați soarele direct, purtați pălărie.',
          'Hidratare: aplicați balsam hidratant pentru buze de 3-4 ori pe zi. Evitați balsamurile cu mentol, camfor (iritează). Potrivite: vaselină, pantenol, acid hialuronic.',
          'Ce se poate: machiaj ușor al buzelor (ruj, luciu) după 3-5 zile, când edemul se va reduce. Alegeți produse hipoalergenice. Îndepărtați machiajul cu produs blând.',
        ],
      },
      {
        h2: 'Posibile efecte secundare',
        paragraphs: [
          'Vânătăi: apar la 10-30% dintre pacienți, dispar în 5-10 zile. Accelerarea resorbției: arnica (gel, comprimate), badyaga (gel), troxevazină (gel).',
          'Asimetrie: în primele zile din cauza edemului — este normal. Dacă asimetria persistă după 2 săptămâni — contactați medicul pentru corecție (adăugare de filler sau dizolvare cu hialuronidază).',
          'Indurații: indurații mici în locurile de injecție pot persista 2-4 săptămâni. Masați-le cu mișcări ușoare (după consultarea medicului). Dacă nu dispar — contactați medicul.',
        ],
      },
      {
        h2: 'Mărirea buzelor la clinica Meddera',
        paragraphs: [
          'La Meddera după procedură primiți recomandări detaliate pentru îngrijire, număr de telefon pentru contactarea medicului în caz de întrebări.',
          'Examinare de control: după 2 săptămâni pentru evaluarea rezultatului, dacă este necesar — corecție (gratuită în decurs de 2 săptămâni după procedură).',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-oslozhneniya-profilaktika': {
    sectionsRu: [
      {
        h2: 'Возможные осложнения',
        paragraphs: [
          'Отёк, синяки: нормальная реакция, проходят за 3-7 дней. Асимметрия: временная (из-за отёка) или постоянная (неправильная техника). Корректируется добавлением или растворением филлера.',
          'Уплотнения: небольшие узелки в местах инъекций, проходят за 2-4 недели. Если не проходят — массаж, растворение. Аллергическая реакция: редко (менее 1%), проявляется отёком, зудом, сыпью.',
        ],
      },
      {
        h2: 'Серьёзные осложнения',
        paragraphs: [
          'Некроз: крайне редко (при попадании филлера в сосуд, нарушении кровоснабжения). Признаки: сильная боль, побледнение кожи, посинение. Требует немедленного растворения филлера гиалуронидазой.',
          'Миграция филлера: перемещение препарата за пределы губ (при неправильной технике, массаже). Корректируется растворением. Инфекция: редко, при несоблюдении стерильности. Лечение антибиотиками.',
        ],
      },
      {
        h2: 'Как минимизировать риски',
        paragraphs: [
          'Выбор врача: квалифицированный косметолог с опытом работы с филлерами. Знание анатомии, правильная техника. Качество препарата: оригинальные филлеры (Juvederm, Restylane, Belotero).',
          'Соблюдение рекомендаций: первые 24 часа — холодные компрессы, не трогать губы. Первые 2 недели — избегать сауны, солярия, массажа лица.',
        ],
      },
      {
        h2: 'Что делать при осложнениях',
        paragraphs: [
          'Немедленно к врачу: при сильной боли, побледнении/посинении кожи, признаках инфекции (гной, температура). Растворение филлера: гиалуронидазой при некрозе, миграции, неудовлетворительном результате.',
        ],
      },
      {
        h2: 'Безопасность в Meddera',
        paragraphs: [
          'В клинике Meddera используем оригинальные филлеры, соблюдаем стерильность. Квалифицированные врачи, знание анатомии. Экстренная помощь при осложнениях.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Complicații posibile',
        paragraphs: [
          'Edem, vânătăi: reacție normală, trec în 3-7 zile. Asimetrie: temporară (din cauza edemului) sau permanentă (tehnică incorectă). Se corectează prin adăugare sau dizolvare de filler.',
          'Indurații: noduli mici în locurile de injecții, trec în 2-4 săptămâni. Dacă nu trec — masaj, dizolvare. Reacție alergică: rar (mai puțin de 1%), se manifestă prin edem, mâncărime, erupție.',
        ],
      },
      {
        h2: 'Complicații grave',
        paragraphs: [
          'Necroză: extrem de rar (la pătrunderea fillerului în vas, tulburare de circulație). Semne: durere puternică, pălirea pielii, învinețire. Necesită dizolvare imediată a fillerului cu hialuronidază.',
          'Migrarea fillerului: deplasarea preparatului dincolo de buze (la tehnică incorectă, masaj). Se corectează prin dizolvare. Infecție: rar, la nerespectarea sterilității. Tratament cu antibiotice.',
        ],
      },
      {
        h2: 'Cum să minimizați riscurile',
        paragraphs: [
          'Alegerea medicului: cosmetolog calificat cu experiență în lucrul cu fillere. Cunoașterea anatomiei, tehnică corectă. Calitatea preparatului: fillere originale (Juvederm, Restylane, Belotero).',
          'Respectarea recomandărilor: primele 24 ore — comprese reci, nu atingeți buzele. Primele 2 săptămâni — evitați sauna, solarul, masajul facial.',
        ],
      },
      {
        h2: 'Ce să faceți în caz de complicații',
        paragraphs: [
          'Imediat la medic: la durere puternică, pălirea/învinețirea pielii, semne de infecție (puroi, temperatură). Dizolvarea fillerului: cu hialuronidază la necroză, migrare, rezultat nesatisfăcător.',
        ],
      },
      {
        h2: 'Siguranță la Meddera',
        paragraphs: [
          'La clinica Meddera folosim fillere originale, respectăm sterilitatea. Medici calificați, cunoașterea anatomiei. Ajutor de urgență la complicații.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-estestvenny-rezultat': {
    sectionsRu: [
      {
        h2: 'Принципы естественного увеличения',
        paragraphs: [
          'Пропорции: верхняя губа к нижней — 1:1.6 (золотое сечение). Не делайте верхнюю губу больше нижней. Гармония с лицом: губы должны соответствовать чертам лица (размеру глаз, носа, подбородка).',
          'Постепенность: лучше добавлять объём постепенно (несколько процедур), чем сразу много. Первая процедура — консервативный объём, оценка результата, при необходимости — докоррекция через 2-4 недели.',
        ],
      },
      {
        h2: 'Техника для естественного результата',
        paragraphs: [
          'Распределение филлера: не только в тело губы, но и в контур, уголки рта. Это создаёт объём без "утиного эффекта". Точки инъекций: множественные мелкие инъекции лучше, чем несколько крупных (равномерное распределение).',
          'Плотность филлера: мягкие филлеры для естественной текстуры. Плотные филлеры дают "резиновый" эффект.',
        ],
      },
      {
        h2: 'Чего избегать',
        paragraphs: [
          'Чрезмерный объём: "утиные губы", диспропорция с лицом. Неравномерное распределение: бугры, асимметрия. Игнорирование анатомии: филлер в неправильных зонах (слишком близко к краю губы).',
          'Частые процедуры: не делайте чаще 1 раза в 6 месяцев (риск перерастяжения тканей, неестественного вида).',
        ],
      },
      {
        h2: 'Признаки естественного результата',
        paragraphs: [
          'Мягкость: губы мягкие на ощупь, естественная текстура. Подвижность: губы подвижны, не "деревянные". Гармония: губы пропорциональны лицу, не привлекают чрезмерного внимания. Незаметность: окружающие не догадываются об увеличении, просто замечают, что вы хорошо выглядите.',
        ],
      },
      {
        h2: 'Естественное увеличение в Meddera',
        paragraphs: [
          'В клинике Meddera придерживаемся философии естественной красоты. Индивидуальный подход: оцениваем пропорции лица, рекомендуем оптимальный объём.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Principiile măririi naturale',
        paragraphs: [
          'Proporții: buza superioară față de inferioară — 1:1.6 (secțiunea de aur). Nu faceți buza superioară mai mare decât inferioară. Armonie cu fața: buzele trebuie să corespundă trăsăturilor feței (mărimea ochilor, nasului, bărbiei).',
          'Treptat: mai bine adăugați volum treptat (mai multe proceduri), decât mult deodată. Prima procedură — volum conservator, evaluarea rezultatului, dacă este necesar — corecție după 2-4 săptămâni.',
        ],
      },
      {
        h2: 'Tehnică pentru rezultat natural',
        paragraphs: [
          'Distribuirea fillerului: nu doar în corpul buzei, ci și în contur, colțurile gurii. Acest lucru creează volum fără "efect de rață". Puncte de injecții: multiple injecții mici sunt mai bune decât câteva mari (distribuire uniformă).',
          'Densitatea fillerului: fillere moi pentru textură naturală. Fillerele dense dau efect "de cauciuc".',
        ],
      },
      {
        h2: 'Ce să evitați',
        paragraphs: [
          'Volum excesiv: "buze de rață", disproporție cu fața. Distribuire neuniformă: umflături, asimetrie. Ignorarea anatomiei: filler în zone greșite (prea aproape de marginea buzei).',
          'Proceduri frecvente: nu faceți mai des de 1 dată la 6 luni (risc de supraîntindere a țesuturilor, aspect nenatural).',
        ],
      },
      {
        h2: 'Semne ale rezultatului natural',
        paragraphs: [
          'Moliciune: buzele sunt moi la atingere, textură naturală. Mobilitate: buzele sunt mobile, nu "de lemn". Armonie: buzele sunt proporționale cu fața, nu atrag atenție excesivă. Invizibilitate: cei din jur nu bănuiesc despre mărire, doar observă că arătați bine.',
        ],
      },
      {
        h2: 'Mărirea naturală la Meddera',
        paragraphs: [
          'La clinica Meddera respectăm filosofia frumuseții naturale. Abordare individuală: evaluăm proporțiile feței, recomandăm volumul optim.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-asimmetriya-korrekciya': {
    sectionsRu: [
      {
        h2: 'Причины асимметрии губ',
        paragraphs: [
          'Врождённая: генетические особенности строения лица. Приобретённая: травмы, операции, неудачные процедуры, возрастные изменения (одна сторона стареет быстрее). Функциональная: привычка жевать на одной стороне, спать на одном боку.',
        ],
      },
      {
        h2: 'Диагностика асимметрии',
        paragraphs: [
          'Клинический осмотр: врач оценивает форму, объём, контур каждой губы. Фотоанализ: фото в анфас для точной оценки асимметрии. Измерения: высота, ширина, объём каждой губы.',
          'Причина важна: от причины зависит тактика коррекции (добавление филлера в меньшую губу, растворение в большей, комбинация).',
        ],
      },
      {
        h2: 'Техника коррекции',
        paragraphs: [
          'Добавление объёма: в меньшую губу добавляют филлер для выравнивания. Растворение филлера: если асимметрия после предыдущей процедуры — растворяют избыток гиалуронидазой. Комбинированный подход: добавление + растворение для идеальной симметрии.',
          'Важно: абсолютная симметрия невозможна (лица всех людей асимметричны). Цель — гармоничный вид, а не математическая точность.',
        ],
      },
      {
        h2: 'Результаты коррекции',
        paragraphs: [
          'Улучшение симметрии: на 70-90% (полная симметрия недостижима и неестественна). Гармония лица: губы выглядят сбалансированными. Длительность: как при обычном увеличении (6-18 месяцев).',
        ],
      },
      {
        h2: 'Коррекция асимметрии в Meddera',
        paragraphs: [
          'В клинике Meddera проводим точную диагностику и коррекцию асимметрии губ. Индивидуальный план с учётом причины асимметрии.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Cauze ale asimetriei buzelor',
        paragraphs: [
          'Congenitală: particularități genetice ale structurii feței. Dobândită: traumatisme, operații, proceduri nereușite, modificări legate de vârstă (o parte îmbătrânește mai repede). Funcțională: obiceiul de a mesteca pe o parte, a dormi pe o parte.',
        ],
      },
      {
        h2: 'Diagnosticul asimetriei',
        paragraphs: [
          'Examinare clinică: medicul evaluează forma, volumul, conturul fiecărei buze. Fotoanaliza: fotografie în față pentru evaluarea precisă a asimetriei. Măsurători: înălțime, lățime, volum al fiecărei buze.',
          'Cauza este importantă: de cauză depinde tactica de corecție (adăugare de filler în buza mai mică, dizolvare în cea mai mare, combinație).',
        ],
      },
      {
        h2: 'Tehnica de corecție',
        paragraphs: [
          'Adăugare de volum: în buza mai mică se adaugă filler pentru aliniere. Dizolvarea fillerului: dacă asimetria este după procedura anterioară — se dizolvă excesul cu hialuronidază. Abordare combinată: adăugare + dizolvare pentru simetrie ideală.',
          'Important: simetria absolută este imposibilă (fețele tuturor oamenilor sunt asimetrice). Scopul — aspect armonios, nu precizie matematică.',
        ],
      },
      {
        h2: 'Rezultatele corecției',
        paragraphs: [
          'Îmbunătățirea simetriei: cu 70-90% (simetria completă este de neatins și nenaturală). Armonia feței: buzele arată echilibrate. Durată: ca la mărirea obișnuită (6-18 luni).',
        ],
      },
      {
        h2: 'Corecția asimetriei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic precis și corecție a asimetriei buzelor. Plan individual ținând cont de cauza asimetriei.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-verkhnyaya-nizhnyaya': {
    sectionsRu: [
      {
        h2: 'Когда увеличивают только одну губу',
        paragraphs: [
          'Асимметрия: одна губа меньше другой (врождённая или приобретённая). Диспропорция: верхняя губа слишком тонкая по сравнению с нижней (или наоборот). Возрастные изменения: одна губа потеряла объём больше, чем другая.',
          'Эстетические предпочтения: желание увеличить только верхнюю губу для более выразительного вида.',
        ],
      },
      {
        h2: 'Увеличение верхней губы',
        paragraphs: [
          'Показания: тонкая верхняя губа, плоский купидонов лук, возрастная потеря объёма. Техника: филлер вводится в тело верхней губы, купидонов лук, контур. Объём: 0.5-1 мл (зависит от исходного размера).',
          'Пропорции: важно не переборщить (верхняя губа не должна быть больше нижней). Идеальная пропорция: верхняя к нижней — 1:1.6.',
        ],
      },
      {
        h2: 'Увеличение нижней губы',
        paragraphs: [
          'Показания: тонкая нижняя губа (редко, обычно нижняя губа больше верхней), асимметрия, возрастная потеря объёма. Техника: филлер вводится в тело нижней губы, контур. Объём: 0.5-1 мл.',
          'Осторожность: нижняя губа не должна быть слишком большой (риск диспропорции, неестественного вида).',
        ],
      },
      {
        h2: 'Результаты и коррекция',
        paragraphs: [
          'Баланс: увеличение одной губы восстанавливает баланс, гармонию. Естественность: при правильной технике результат естественный, незаметный. Коррекция: через 2-4 недели можно докорректировать (добавить филлер в другую губу, если нужно).',
        ],
      },
      {
        h2: 'Увеличение одной губы в Meddera',
        paragraphs: [
          'В клинике Meddera проводим увеличение верхней или нижней губы для восстановления пропорций. Индивидуальный подход, оценка баланса.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Când se mărește doar o buză',
        paragraphs: [
          'Asimetrie: o buză mai mică decât cealaltă (congenitală sau dobândită). Disproporție: buza superioară prea subțire comparativ cu inferioară (sau invers). Modificări legate de vârstă: o buză a pierdut volum mai mult decât cealaltă.',
          'Preferințe estetice: dorința de a mări doar buza superioară pentru aspect mai expresiv.',
        ],
      },
      {
        h2: 'Mărirea buzei superioare',
        paragraphs: [
          'Indicații: buză superioară subțire, arcul lui Cupidon plat, pierdere de volum legată de vârstă. Tehnică: fillerul se introduce în corpul buzei superioare, arcul lui Cupidon, contur. Volum: 0.5-1 ml (depinde de mărimea inițială).',
          'Proporții: important să nu exagerați (buza superioară nu trebuie să fie mai mare decât inferioară). Proporție ideală: superioară față de inferioară — 1:1.6.',
        ],
      },
      {
        h2: 'Mărirea buzei inferioare',
        paragraphs: [
          'Indicații: buză inferioară subțire (rar, de obicei buza inferioară este mai mare decât superioară), asimetrie, pierdere de volum legată de vârstă. Tehnică: fillerul se introduce în corpul buzei inferioare, contur. Volum: 0.5-1 ml.',
          'Precauție: buza inferioară nu trebuie să fie prea mare (risc de disproporție, aspect nenatural).',
        ],
      },
      {
        h2: 'Rezultate și corecție',
        paragraphs: [
          'Echilibru: mărirea unei buze restabilește echilibrul, armonia. Naturalețe: la tehnică corectă rezultatul este natural, invizibil. Corecție: după 2-4 săptămâni se poate corecta (adăuga filler în cealaltă buză, dacă este necesar).',
        ],
      },
      {
        h2: 'Mărirea unei buze la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm mărirea buzei superioare sau inferioare pentru restabilirea proporțiilor. Abordare individuală, evaluarea echilibrului.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-vozrastnye-izmeneniya': {
    sectionsRu: [
      {
        h2: 'Возрастные изменения губ',
        paragraphs: [
          'Потеря объёма: с возрастом губы теряют коллаген, эластин, гиалуроновую кислоту. Становятся тоньше, менее объёмными. Размытие контура: граница губ становится нечёткой, "плывёт". Морщины: кисетные морщины вокруг рта, вертикальные морщины на губах.',
          'Опущение уголков рта: придаёт грустное, усталое выражение лица. Удлинение верхней губы: расстояние от носа до верхней губы увеличивается.',
        ],
      },
      {
        h2: 'Особенности коррекции после 40-50',
        paragraphs: [
          'Комплексный подход: не только увеличение объёма, но и восстановление контура, коррекция морщин, приподнимание уголков рта. Меньше объёма: в зрелом возрасте не нужен большой объём (риск неестественного вида). Цель — восполнение утраченного объёма, а не создание пышных губ.',
          'Плотность филлера: средней плотности для поддержки тканей, но естественной текстуры.',
        ],
      },
      {
        h2: 'Зоны коррекции',
        paragraphs: [
          'Контур губ: восстановление чёткой границы. Тело губы: восполнение объёма (особенно верхняя губа). Уголки рта: приподнимание для более молодого вида. Морщины вокруг рта: заполнение кисетных морщин.',
          'Носогубные складки: часто корректируют вместе с губами для гармоничного омоложения нижней трети лица.',
        ],
      },
      {
        h2: 'Результаты омоложения',
        paragraphs: [
          'Восстановление объёма: губы выглядят полнее, моложе. Чёткий контур: граница губ выраженная. Уменьшение морщин: кисетные морщины менее заметны. Приподнятые уголки рта: более свежее, доброжелательное выражение лица.',
        ],
      },
      {
        h2: 'Омоложение губ в Meddera',
        paragraphs: [
          'В клинике Meddera специализируемся на возрастной коррекции губ. Комплексный подход: объём, контур, морщины, уголки рта.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Modificări ale buzelor legate de vârstă',
        paragraphs: [
          'Pierderea volumului: cu vârsta buzele pierd colagen, elastină, acid hialuronic. Devin mai subțiri, mai puțin voluminoase. Estomparea conturului: limita buzelor devine neclară, "plutește". Riduri: riduri periorbitale în jurul gurii, riduri verticale pe buze.',
          'Coborârea colțurilor gurii: dă expresie tristă, obosită a feței. Alungirea buzei superioare: distanța de la nas la buza superioară crește.',
        ],
      },
      {
        h2: 'Particularitățile corecției după 40-50',
        paragraphs: [
          'Abordare complexă: nu doar mărirea volumului, ci și restabilirea conturului, corecția ridurilor, ridicarea colțurilor gurii. Mai puțin volum: la vârstă matură nu este necesar volum mare (risc de aspect nenatural). Scopul — restabilirea volumului pierdut, nu crearea buzelor voluminoase.',
          'Densitatea fillerului: densitate medie pentru susținerea țesuturilor, dar textură naturală.',
        ],
      },
      {
        h2: 'Zone de corecție',
        paragraphs: [
          'Conturul buzelor: restabilirea limitei clare. Corpul buzei: restabilirea volumului (în special buza superioară). Colțurile gurii: ridicare pentru aspect mai tânăr. Riduri în jurul gurii: umplerea ridurilor periorbitale.',
          'Pliuri nazolabiale: adesea se corectează împreună cu buzele pentru întinerire armonioasă a treimii inferioare a feței.',
        ],
      },
      {
        h2: 'Rezultatele întineririi',
        paragraphs: [
          'Restabilirea volumului: buzele arată mai pline, mai tinere. Contur clar: limita buzelor pronunțată. Reducerea ridurilor: ridurile periorbitale mai puțin vizibile. Colțuri ridicate ale gurii: expresie mai proaspătă, prietenoasă a feței.',
        ],
      },
      {
        h2: 'Întinerirea buzelor la Meddera',
        paragraphs: [
          'La clinica Meddera ne specializăm în corecția buzelor legată de vârstă. Abordare complexă: volum, contur, riduri, colțuri ale gurii.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-gialuronovaya-kislota': {
    sectionsRu: [
      {
        h2: 'Что такое гиалуроновая кислота',
        paragraphs: [
          'Естественное вещество: гиалуроновая кислота (ГК) — это полисахарид, который естественно присутствует в организме (кожа, суставы, глаза). Функции: удерживает воду (1 молекула ГК удерживает до 1000 молекул воды), обеспечивает увлажнение, упругость кожи.',
          'С возрастом: выработка ГК снижается, кожа теряет влагу, упругость, появляются морщины.',
        ],
      },
      {
        h2: 'Как ГК увеличивает губы',
        paragraphs: [
          'Механизм: филлер на основе ГК вводится в губы, притягивает воду, создаёт объём. ГК также стимулирует выработку собственного коллагена. Биосовместимость: ГК не вызывает отторжения (естественное вещество). Риск аллергии минимален (менее 1%).',
          'Обратимость: ГК можно растворить гиалуронидазой при необходимости (неудовлетворительный результат, осложнения).',
        ],
      },
      {
        h2: 'Виды филлеров на основе ГК',
        paragraphs: [
          'По плотности: мягкие (для тонких губ, контура), средней плотности (универсальные), плотные (для объёма, коррекции глубоких морщин). По степени сшивки: низкая (быстрее рассасываются, мягче), высокая (дольше держатся, плотнее).',
          'Производители: Juvederm, Restylane, Belotero, Stylage — популярные бренды с доказанной эффективностью.',
        ],
      },
      {
        h2: 'Безопасность ГК',
        paragraphs: [
          'Одобрено FDA: филлеры на основе ГК одобрены для косметического применения. Миллионы процедур: доказанная безопасность. Временный эффект: ГК постепенно рассасывается (6-18 месяцев), не накапливается в организме.',
        ],
      },
      {
        h2: 'Филлеры на основе ГК в Meddera',
        paragraphs: [
          'В клинике Meddera используем только оригинальные филлеры на основе гиалуроновой кислоты. Индивидуальный подбор препарата с учётом ваших целей.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este acidul hialuronic',
        paragraphs: [
          'Substanță naturală: acidul hialuronic (AH) este un polizaharid care este prezent natural în organism (piele, articulații, ochi). Funcții: reține apa (1 moleculă AH reține până la 1000 molecule de apă), asigură hidratare, elasticitate a pielii.',
          'Cu vârsta: producția de AH scade, pielea pierde umiditate, elasticitate, apar riduri.',
        ],
      },
      {
        h2: 'Cum mărește AH buzele',
        paragraphs: [
          'Mecanism: fillerul pe bază de AH se introduce în buze, atrage apă, creează volum. AH stimulează și producția propriului colagen. Biocompatibilitate: AH nu provoacă respingere (substanță naturală). Riscul de alergie este minim (mai puțin de 1%).',
          'Reversibilitate: AH se poate dizolva cu hialuronidază dacă este necesar (rezultat nesatisfăcător, complicații).',
        ],
      },
      {
        h2: 'Tipuri de fillere pe bază de AH',
        paragraphs: [
          'După densitate: moi (pentru buze subțiri, contur), densitate medie (universale), dense (pentru volum, corecția ridurilor profunde). După gradul de reticulare: scăzut (se resorbesc mai repede, mai moi), înalt (țin mai mult, mai dense).',
          'Producători: Juvederm, Restylane, Belotero, Stylage — branduri populare cu eficacitate dovedită.',
        ],
      },
      {
        h2: 'Siguranța AH',
        paragraphs: [
          'Aprobat de FDA: fillerele pe bază de AH sunt aprobate pentru aplicare cosmetică. Milioane de proceduri: siguranță dovedită. Efect temporar: AH se resorbește treptat (6-18 luni), nu se acumulează în organism.',
        ],
      },
      {
        h2: 'Fillere pe bază de AH la Meddera',
        paragraphs: [
          'La clinica Meddera folosim doar fillere originale pe bază de acid hialuronic. Selectare individuală a preparatului ținând cont de obiectivele dumneavoastră.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-bolevye-oshchushcheniya': {
    sectionsRu: [
      {
        h2: 'Насколько больно увеличивать губы',
        paragraphs: [
          'Индивидуальная чувствительность: у всех разный болевой порог. Большинство пациентов: описывают ощущения как "терпимо", "не очень больно", "как укусы комара". Зоны: губы — чувствительная зона (много нервных окончаний), но процедура короткая (10-15 минут).',
        ],
      },
      {
        h2: 'Методы обезболивания',
        paragraphs: [
          'Анестезирующий крем: наносится на губы за 15-20 минут до процедуры. Содержит лидокаин, прилокаин. Снижает чувствительность на 70-80%. Филлер с лидокаином: большинство современных филлеров содержат лидокаин. Обезболивает в процессе инъекций.',
          'Инъекционная анестезия: проводниковая анестезия (блокада нервов) — для очень чувствительных пациентов. Практически полное отсутствие боли. Холод: лёд перед процедурой снижает чувствительность.',
        ],
      },
      {
        h2: 'Ощущения во время процедуры',
        paragraphs: [
          'Первые инъекции: лёгкий дискомфорт, покалывание. Последующие инъекции: менее чувствительны (действует анестезия из филлера). Распределение филлера: лёгкое давление, распирание (не больно). Общая оценка: 3-4 из 10 по шкале боли (с анестезией).',
        ],
      },
      {
        h2: 'После процедуры',
        paragraphs: [
          'Первые часы: лёгкая болезненность, чувствительность губ. Проходит за 2-4 часа. Отёк: может быть дискомфорт от распирания (не боль). Проходит за 2-3 дня. Обезболивание: обычно не требуется. При необходимости — парацетамол (не аспирин, не ибупрофен — усиливают синяки).',
        ],
      },
      {
        h2: 'Комфорт в Meddera',
        paragraphs: [
          'В клинике Meddera используем все методы обезболивания: анестезирующий крем, филлеры с лидокаином, инъекционная анестезия по желанию. Ваш комфорт — приоритет.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Cât de dureros este să măriți buzele',
        paragraphs: [
          'Sensibilitate individuală: toți au prag diferit de durere. Majoritatea pacienților: descriu senzațiile ca "tolerabil", "nu foarte dureros", "ca înțepături de țânțar". Zone: buzele — zonă sensibilă (multe terminații nervoase), dar procedura este scurtă (10-15 minute).',
        ],
      },
      {
        h2: 'Metode de anestezie',
        paragraphs: [
          'Cremă anestezianta: se aplică pe buze cu 15-20 minute înainte de procedură. Conține lidocaină, prilocaină. Reduce sensibilitatea cu 70-80%. Filler cu lidocaină: majoritatea fillerelor moderne conțin lidocaină. Anesteziază în timpul injecțiilor.',
          'Anestezie prin injecție: anestezie de conducere (blocarea nervilor) — pentru pacienți foarte sensibili. Absența aproape completă a durerii. Frig: gheață înainte de procedură reduce sensibilitatea.',
        ],
      },
      {
        h2: 'Senzații în timpul procedurii',
        paragraphs: [
          'Primele injecții: disconfort ușor, înțepături. Injecțiile ulterioare: mai puțin sensibile (acționează anestezia din filler). Distribuirea fillerului: presiune ușoară, distensie (nu dureros). Evaluare generală: 3-4 din 10 pe scala durerii (cu anestezie).',
        ],
      },
      {
        h2: 'După procedură',
        paragraphs: [
          'Primele ore: sensibilitate ușoară, sensibilitate a buzelor. Trece în 2-4 ore. Edem: poate fi disconfort de la distensie (nu durere). Trece în 2-3 zile. Ameliorarea durerii: de obicei nu este necesară. Dacă este necesar — paracetamol (nu aspirină, nu ibuprofen — intensifică vânătăile).',
        ],
      },
      {
        h2: 'Confort la Meddera',
        paragraphs: [
          'La clinica Meddera folosim toate metodele de anestezie: cremă anestezianta, fillere cu lidocaină, anestezie prin injecție la dorință. Confortul dumneavoastră — prioritate.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-pervyj-raz': {
    sectionsRu: [
      {
        h2: 'Подготовка к первой процедуре',
        paragraphs: [
          'Консультация: обсудите с врачом желаемый результат, покажите фото губ, которые вам нравятся. Врач оценит ваши губы, пропорции лица, порекомендует объём. За 2 недели: прекратите приём аспирина, антикоагулянтов (усиливают синяки). За 3 дня: прекратите алкоголь, ограничьте кофеин.',
          'Герпес: если у вас бывает герпес на губах, начните противовирусные препараты (ацикловир) за 2 дня до процедуры (профилактика обострения).',
        ],
      },
      {
        h2: 'Как проходит процедура',
        paragraphs: [
          'Очищение: врач очищает губы антисептиком. Анестезия: наносится анестезирующий крем на 15-20 минут. Инъекции: врач вводит филлер в губы (10-15 точек инъекций). Процедура 10-15 минут. Массаж: врач массирует губы для равномерного распределения филлера.',
          'Ощущения: лёгкий дискомфорт, покалывание (с анестезией терпимо).',
        ],
      },
      {
        h2: 'Первые дни после процедуры',
        paragraphs: [
          'Отёк: максимальный в первые 2-4 часа, проходит за 2-3 дня. Губы кажутся очень большими (это временно). Синяки: возможны, проходят за 5-10 дней. Чувствительность: губы чувствительны, болезненны первые 1-2 дня.',
          'Ограничения: не трогать губы, не целоваться, не пить через трубочку, не есть горячее/острое, не курить, не заниматься спортом первые 2-3 дня.',
        ],
      },
      {
        h2: 'Оценка результата',
        paragraphs: [
          'Через 2 недели: отёк полностью проходит, можно оценить окончательный результат. Контрольный осмотр: врач оценивает результат, при необходимости — докоррекция (добавление филлера, коррекция асимметрии). Привыкание: первые дни губы кажутся "чужими", большими. Через 1-2 недели привыкаете.',
        ],
      },
      {
        h2: 'Первое увеличение в Meddera',
        paragraphs: [
          'В клинике Meddera уделяем особое внимание первой процедуре: подробная консультация, консервативный объём, контрольный осмотр через 2 недели.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Pregătirea pentru prima procedură',
        paragraphs: [
          'Consultație: discutați cu medicul rezultatul dorit, arătați fotografii cu buze care vă plac. Medicul va evalua buzele dumneavoastră, proporțiile feței, va recomanda volumul. Cu 2 săptămâni înainte: opriți administrarea de aspirină, anticoagulante (intensifică vânătăile). Cu 3 zile înainte: opriți alcoolul, limitați cafeina.',
          'Herpes: dacă aveți herpes pe buze, începeți preparate antivirale (aciclovir) cu 2 zile înainte de procedură (prevenirea exacerbării).',
        ],
      },
      {
        h2: 'Cum decurge procedura',
        paragraphs: [
          'Curățare: medicul curăță buzele cu antiseptic. Anestezie: se aplică cremă anestezianta timp de 15-20 minute. Injecții: medicul introduce fillerul în buze (10-15 puncte de injecții). Procedura 10-15 minute. Masaj: medicul masează buzele pentru distribuire uniformă a fillerului.',
          'Senzații: disconfort ușor, înțepături (cu anestezie este tolerabil).',
        ],
      },
      {
        h2: 'Primele zile după procedură',
        paragraphs: [
          'Edem: maxim în primele 2-4 ore, trece în 2-3 zile. Buzele par foarte mari (este temporar). Vânătăi: posibile, trec în 5-10 zile. Sensibilitate: buzele sunt sensibile, dureroase primele 1-2 zile.',
          'Restricții: nu atingeți buzele, nu sărutați, nu beți prin pai, nu mâncați fierbinte/picant, nu fumați, nu faceți sport primele 2-3 zile.',
        ],
      },
      {
        h2: 'Evaluarea rezultatului',
        paragraphs: [
          'După 2 săptămâni: edemul trece complet, puteți evalua rezultatul final. Examinare de control: medicul evaluează rezultatul, dacă este necesar — corecție (adăugare de filler, corecție a asimetriei). Acomodare: primele zile buzele par "străine", mari. În 1-2 săptămâni vă obișnuiți.',
        ],
      },
      {
        h2: 'Prima mărire la Meddera',
        paragraphs: [
          'La clinica Meddera acordăm atenție specială primei proceduri: consultație detaliată, volum conservator, examinare de control după 2 săptămâni.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-povtornaya-procedura': {
    sectionsRu: [
      {
        h2: 'Когда делать повторную процедуру',
        paragraphs: [
          'Оптимальный интервал: 6-12 месяцев после первой процедуры (когда объём уменьшился на 30-50%). Не ждите полного рассасывания: повторная процедура на остаточном объёме даёт лучший результат, создаёт накопительный эффект.',
          'Признаки: губы стали тоньше, контур менее чёткий, форма изменилась.',
        ],
      },
      {
        h2: 'Накопительный эффект',
        paragraphs: [
          'Что это: при регулярных процедурах (каждые 6-12 месяцев) эффект держится дольше, требуется меньше филлера. Механизм: ГК стимулирует выработку собственного коллагена, кожа становится плотнее. Результат: после 2-3 процедур губы выглядят лучше даже без филлера (чем до первой процедуры).',
        ],
      },
      {
        h2: 'Сколько филлера нужно при повторной процедуре',
        paragraphs: [
          'Меньше, чем в первый раз: обычно 0.5-1 мл (вместо 1-2 мл). Зависит от: степени рассасывания предыдущего филлера, желаемого объёма. Врач оценивает: остаточный объём, состояние губ, рекомендует дозу.',
        ],
      },
      {
        h2: 'Можно ли менять филлер',
        paragraphs: [
          'Да: можно использовать другой филлер при повторной процедуре. Причины: предыдущий филлер быстро рассосался, хотите попробовать другой препарат. Важно: сообщите врачу, какой филлер был раньше.',
        ],
      },
      {
        h2: 'Повторное увеличение в Meddera',
        paragraphs: [
          'В клинике Meddera составляем индивидуальный график процедур. Оцениваем остаточный объём, рекомендуем оптимальное время для повторной процедуры.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Când să faceți procedura repetată',
        paragraphs: [
          'Interval optim: 6-12 luni după prima procedură (când volumul a scăzut cu 30-50%). Nu așteptați resorbția completă: procedura repetată pe volumul rezidual oferă rezultat mai bun, creează efect cumulativ.',
          'Semne: buzele au devenit mai subțiri, conturul mai puțin clar, forma s-a schimbat.',
        ],
      },
      {
        h2: 'Efect cumulativ',
        paragraphs: [
          'Ce este: la proceduri regulate (la fiecare 6-12 luni) efectul ține mai mult, este necesar mai puțin filler. Mecanism: AH stimulează producția propriului colagen, pielea devine mai densă. Rezultat: după 2-3 proceduri buzele arată mai bine chiar fără filler (decât înainte de prima procedură).',
        ],
      },
      {
        h2: 'Cât filler este necesar la procedura repetată',
        paragraphs: [
          'Mai puțin decât prima dată: de obicei 0.5-1 ml (în loc de 1-2 ml). Depinde de: gradul de resorbție al fillerului anterior, volumul dorit. Medicul evaluează: volumul rezidual, starea buzelor, recomandă doza.',
        ],
      },
      {
        h2: 'Se poate schimba fillerul',
        paragraphs: [
          'Da: se poate folosi alt filler la procedura repetată. Motive: fillerul anterior s-a resorbat repede, doriți să încercați alt preparat. Important: informați medicul ce filler a fost înainte.',
        ],
      },
      {
        h2: 'Mărirea repetată la Meddera',
        paragraphs: [
          'La clinica Meddera elaborăm program individual de proceduri. Evaluăm volumul rezidual, recomandăm timpul optim pentru procedura repetată.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-protivopokazaniya': {
    sectionsRu: [
      {
        h2: 'Абсолютные противопоказания',
        paragraphs: [
          'Беременность и кормление грудью: безопасность филлеров не доказана для беременных и кормящих. Аллергия на компоненты филлера: гиалуроновая кислота, лидокаин. Активная инфекция: герпес на губах, гнойные высыпания, воспаление. Сначала лечение, потом процедура.',
          'Аутоиммунные заболевания: системная красная волчанка, склеродермия (риск осложнений). Онкологические заболевания: активный процесс (консультация онколога).',
        ],
      },
      {
        h2: 'Относительные противопоказания',
        paragraphs: [
          'Приём антикоагулянтов: аспирин, варфарин (усиливают синяки). Прекратить за 2 недели или обсудить с врачом. Менструация: усиленный отёк, синяки. Лучше планировать процедуру в другие дни цикла. Воспалительные заболевания кожи: акне, розацеа (обострение) — дождаться ремиссии.',
          'Келоидные рубцы: риск образования рубцов в местах инъекций (редко).',
        ],
      },
      {
        h2: 'Возрастные ограничения',
        paragraphs: [
          'Минимальный возраст: 18 лет (в некоторых странах 21 год). До 18 лет — только по медицинским показаниям с согласия родителей. Максимальный возраст: нет ограничений. Процедура безопасна в любом возрасте при отсутствии противопоказаний.',
        ],
      },
      {
        h2: 'Временные ограничения',
        paragraphs: [
          'После стоматологических процедур: подождите 2 недели. После пилингов, лазера: подождите 2-4 недели. После других инъекций в губы: подождите 2 недели или до полного рассасывания предыдущего филлера.',
        ],
      },
      {
        h2: 'Оценка противопоказаний в Meddera',
        paragraphs: [
          'В клинике Meddera проводим тщательный сбор анамнеза, оцениваем противопоказания. Ваша безопасность — приоритет.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Contraindicații absolute',
        paragraphs: [
          'Sarcină și alăptare: siguranța fillerelor nu este dovedită pentru gravide și care alăptează. Alergie la componentele fillerului: acid hialuronic, lidocaină. Infecție activă: herpes pe buze, erupții purulente, inflamație. Mai întâi tratament, apoi procedură.',
          'Boli autoimune: lupus eritematos sistemic, sclerodermie (risc de complicații). Boli oncologice: proces activ (consultație oncolog).',
        ],
      },
      {
        h2: 'Contraindicații relative',
        paragraphs: [
          'Administrarea de anticoagulante: aspirină, warfarină (intensifică vânătăile). Opriți cu 2 săptămâni înainte sau discutați cu medicul. Menstruație: edem intensificat, vânătăi. Mai bine planificați procedura în alte zile ale ciclului. Boli inflamatorii ale pielii: acnee, rozacee (exacerbare) — așteptați remisiunea.',
          'Cicatrici cheloide: risc de formare a cicatricilor în locurile injecțiilor (rar).',
        ],
      },
      {
        h2: 'Restricții de vârstă',
        paragraphs: [
          'Vârstă minimă: 18 ani (în unele țări 21 ani). Sub 18 ani — doar din indicații medicale cu acordul părinților. Vârstă maximă: nu există restricții. Procedura este sigură la orice vârstă în absența contraindicațiilor.',
        ],
      },
      {
        h2: 'Restricții temporare',
        paragraphs: [
          'După proceduri stomatologice: așteptați 2 săptămâni. După peeling-uri, laser: așteptați 2-4 săptămâni. După alte injecții în buze: așteptați 2 săptămâni sau până la resorbția completă a fillerului anterior.',
        ],
      },
      {
        h2: 'Evaluarea contraindicațiilor la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm colectare atentă a anamnezei, evaluăm contraindicațiile. Siguranța dumneavoastră — prioritate.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'uvelichenie-gub-gerpes-profilaktika': {
    sectionsRu: [
      {
        h2: 'Связь герпеса и увеличения губ',
        paragraphs: [
          'Травма тканей: инъекции — это микротравма, которая может спровоцировать обострение герпеса у носителей вируса. Частота: у 10-20% пациентов с герпесом в анамнезе. Проявления: высыпания на губах через 1-3 дня после процедуры.',
          'Осложнения: герпес может привести к рубцам, неравномерному распределению филлера.',
        ],
      },
      {
        h2: 'Профилактика герпеса',
        paragraphs: [
          'Противовирусные препараты: ацикловир, валацикловир, фамцикловир. Схема: начать за 1-2 дня до процедуры, продолжить 5-7 дней после. Дозировка: ацикловир 400 мг 2 раза в день, валацикловир 500 мг 1 раз в день (по назначению врача).',
          'Эффективность: снижает риск обострения на 80-90%.',
        ],
      },
      {
        h2: 'Что делать при обострении',
        paragraphs: [
          'Противовирусные препараты: начать немедленно (ацикловир 400 мг 5 раз в день или валацикловир 1000 мг 2 раза в день). Местное лечение: ацикловир крем, цинковая мазь. Не трогать высыпания: риск распространения инфекции.',
          'Обратитесь к врачу: если высыпания обширные, не проходят за 7-10 дней.',
        ],
      },
      {
        h2: 'Можно ли делать процедуру при активном герпесе',
        paragraphs: [
          'Нет: активный герпес — абсолютное противопоказание. Сначала лечение (до полного заживления), потом процедура. Интервал: минимум 2 недели после заживления.',
        ],
      },
      {
        h2: 'Профилактика герпеса в Meddera',
        paragraphs: [
          'В клинике Meddera при наличии герпеса в анамнезе рекомендуем профилактический приём противовирусных препаратов. Это снижает риск обострения.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Legătura dintre herpes și mărirea buzelor',
        paragraphs: [
          'Traumatism tisular: injecțiile sunt microtraumatisme care pot provoca exacerbarea herpesului la purtătorii virusului. Frecvență: la 10-20% dintre pacienții cu herpes în anamneză. Manifestări: erupții pe buze în 1-3 zile după procedură.',
          'Complicații: herpesul poate duce la cicatrici, distribuire neuniformă a fillerului.',
        ],
      },
      {
        h2: 'Prevenirea herpesului',
        paragraphs: [
          'Preparate antivirale: aciclovir, valaciclovir, famciclovir. Schemă: începeți cu 1-2 zile înainte de procedură, continuați 5-7 zile după. Dozaj: aciclovir 400 mg de 2 ori pe zi, valaciclovir 500 mg o dată pe zi (conform prescripției medicului).',
          'Eficacitate: reduce riscul de exacerbare cu 80-90%.',
        ],
      },
      {
        h2: 'Ce să faceți la exacerbare',
        paragraphs: [
          'Preparate antivirale: începeți imediat (aciclovir 400 mg de 5 ori pe zi sau valaciclovir 1000 mg de 2 ori pe zi). Tratament local: cremă cu aciclovir, unguent cu zinc. Nu atingeți erupțiile: risc de răspândire a infecției.',
          'Adresați-vă medicului: dacă erupțiile sunt extinse, nu trec în 7-10 zile.',
        ],
      },
      {
        h2: 'Se poate face procedura la herpes activ',
        paragraphs: [
          'Nu: herpesul activ — contraindicație absolută. Mai întâi tratament (până la vindecare completă), apoi procedură. Interval: minim 2 săptămâni după vindecare.',
        ],
      },
      {
        h2: 'Prevenirea herpesului la Meddera',
        paragraphs: [
          'La clinica Meddera în prezența herpesului în anamneză recomandăm administrarea profilactică de preparate antivirale. Acest lucru reduce riscul de exacerbare.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
};

export const LIPS_ARTICLE_CONTENT: Record<string, LipsArticleCopy> = {
  ...LIPS_ARTICLE_CONTENT_PART1,
  ...LIPS_ARTICLE_CONTENT_PART2,
};