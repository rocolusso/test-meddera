import { FILLERS_ARTICLE_CONTENT_PART2 } from './fillers-article-content-part2';

export type ArticleSection = { h2: string; paragraphs: string[] };

export type FillersArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

const FILLERS_ARTICLE_CONTENT_PART1: Record<string, FillersArticleCopy> = {
  'konturnaya-plastika-beltsy-chto-eto': {
    sectionsRu: [
      {
        h2: 'Что такое контурная пластика',
        paragraphs: [
          'Контурная пластика — метод коррекции формы и объёма лица с помощью инъекций филлеров (препаратов на основе гиалуроновой кислоты). Филлеры заполняют морщины, восстанавливают утраченный объём, корректируют асимметрию.',
          'Отличие от ботокса: ботокс расслабляет мышцы (убирает мимические морщины), филлеры заполняют морщины и восстанавливают объём (убирают статические морщины, корректируют форму).',
          'Цель контурной пластики: восстановить молодые пропорции лица (высокие скулы, чёткий овал, полные губы), скорректировать возрастные изменения (носогубные складки, марионеточные морщины, западение висков).',
        ],
      },
      {
        h2: 'Показания к контурной пластике',
        paragraphs: [
          'Коррекция морщин: носогубные складки, марионеточные морщины, морщины-марионетки, периоральные морщины (вокруг рта).',
          'Восстановление объёма: западение висков, скул, подбородка, потеря объёма губ, впалые щёки.',
          'Коррекция формы: асимметрия лица, коррекция формы носа (безоперационная ринопластика), подбородка, скул.',
        ],
      },
      {
        h2: 'Виды филлеров',
        paragraphs: [
          'Филлеры различаются по плотности: мягкие (для тонкой кожи, губ, периорбитальной зоны), средней плотности (для носогубных складок, морщин), плотные (для скул, подбородка, коррекции овала лица).',
          'Популярные производители: Juvederm (США), Restylane (Швеция), Teosyal (Швейцария), Belotero (Германия). Все препараты на основе гиалуроновой кислоты, безопасны, обратимы.',
          'Длительность эффекта: 6-18 месяцев в зависимости от зоны, плотности филлера, индивидуального метаболизма.',
        ],
      },
      {
        h2: 'Как проходит процедура',
        paragraphs: [
          'Консультация: оценка пропорций лица, выбор зон для коррекции, расчёт количества филлера. Очищение кожи, нанесение анестезирующего крема (15-20 минут).',
          'Инъекции: врач вводит филлер в глубокие слои кожи или надкостницу (в зависимости от зоны). Процедура занимает 30-60 минут.',
          'После процедуры: лёгкая отёчность, синяки (редко) проходят за 3-7 дней. Результат виден сразу, окончательный — через 2 недели (после спадения отёка).',
        ],
      },
      {
        h2: 'Контурная пластика в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные филлеры ведущих производителей. Процедуру проводит опытный дерматокосметолог.',
          'Консультация включает: оценку показаний, выбор зон для коррекции, расчёт количества филлера, обсуждение ожиданий.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este conturarea facială',
        paragraphs: [
          'Conturarea facială este o metodă de corecție a formei și volumului feței cu ajutorul injecțiilor cu fillere (preparate pe bază de acid hialuronic). Fillerele umplu ridurile, restabilesc volumul pierdut, corectează asimetria.',
          'Diferența față de botox: botoxul relaxează mușchii (elimină ridurile mimice), fillerele umplu ridurile și restabilesc volumul (elimină ridurile statice, corectează forma).',
          'Scopul conturării faciale: restabilirea proporțiilor tinere ale feței (pomeți înalți, oval clar, buze pline), corectarea modificărilor legate de vârstă (pliuri nazolabiale, riduri marioneta, retragerea tâmplelor).',
        ],
      },
      {
        h2: 'Indicații pentru conturarea facială',
        paragraphs: [
          'Corecția ridurilor: pliuri nazolabiale, riduri marioneta, riduri periorbitale (în jurul gurii).',
          'Restabilirea volumului: retragerea tâmplelor, pomeților, bărbiei, pierderea volumului buzelor, obraji căzuți.',
          'Corecția formei: asimetria feței, corecția formei nasului (rinoplastie non-chirurgicală), bărbiei, pomeților.',
        ],
      },
      {
        h2: 'Tipuri de fillere',
        paragraphs: [
          'Fillerele diferă prin densitate: moi (pentru piele subțire, buze, zona periorbitală), densitate medie (pentru pliuri nazolabiale, riduri), dense (pentru pomeți, bărbie, corecția ovalului feței).',
          'Producători populari: Juvederm (SUA), Restylane (Suedia), Teosyal (Elveția), Belotero (Germania). Toate preparatele pe bază de acid hialuronic, sigure, reversibile.',
          'Durata efectului: 6-18 luni în funcție de zonă, densitatea filler-ului, metabolismul individual.',
        ],
      },
      {
        h2: 'Cum decurge procedura',
        paragraphs: [
          'Consultația: evaluarea proporțiilor feței, alegerea zonelor pentru corecție, calculul cantității de filler. Curățarea pielii, aplicarea cremei anestezice (15-20 minute).',
          'Injecții: medicul introduce filler-ul în straturile profunde ale pielii sau periost (în funcție de zonă). Procedura durează 30-60 minute.',
          'După procedură: ușoară umflare, vânătăi (rar) dispar în 3-7 zile. Rezultatul este vizibil imediat, final — după 2 săptămâni (după dispariția umflării).',
        ],
      },
      {
        h2: 'Conturarea facială la clinica Meddera',
        paragraphs: [
          'La Meddera folosim fillere certificate de la producători de top. Procedura este efectuată de un dermatocosmetolog experimentat.',
          'Consultația include: evaluarea indicațiilor, alegerea zonelor pentru corecție, calculul cantității de filler, discutarea așteptărilor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'fillery-vidy-sostav-proizvoditeli': {
    sectionsRu: [
      {
        h2: 'Классификация филлеров по плотности',
        paragraphs: [
          'Мягкие филлеры (low viscosity, G\' 100-200 Pa): для тонкой кожи, губ, периорбитальной зоны, поверхностных морщин. Создают естественный объём, не ограничивают мимику. Примеры: Juvederm Volbella, Belotero Soft.',
          'Средней плотности (medium viscosity, G\' 200-400 Pa): для носогубных складок, морщин-марионеток, контура лица. Универсальные филлеры для большинства зон. Примеры: Juvederm Ultra, Restylane.',
          'Плотные филлеры (high viscosity, G\' 400-600 Pa): для скул, подбородка, коррекции овала лица, глубоких морщин. Создают выраженный объём, лифтинг. Примеры: Juvederm Voluma, Restylane Lyft.',
        ],
      },
      {
        h2: 'Технологии производства филлеров',
        paragraphs: [
          'Монофазные филлеры: однородный гель, молекулы ГК равномерно распределены. Легко вводятся, равномерно распределяются в тканях. Примеры: Juvederm (технология Vycross), Belotero.',
          'Бифазные филлеры: гель + частицы ГК. Более плотная структура, дольше сохраняются. Сложнее вводить, могут пальпироваться. Примеры: Restylane (технология NASHA).',
          'Степень сшивки: чем выше степень сшивки молекул ГК, тем плотнее филлер, тем дольше он сохраняется. Но высокая степень сшивки повышает риск осложнений (гранулёмы).',
        ],
      },
      {
        h2: 'Ведущие производители филлеров',
        paragraphs: [
          'Allergan (США): линейка Juvederm — монофазные филлеры с технологией Vycross. Voluma (скулы), Volift (морщины), Volbella (губы, периорбитальная зона), Ultra (универсальный).',
          'Galderma (Швеция): линейка Restylane — бифазные филлеры с технологией NASHA. Lyft (скулы, кисти рук), Restylane (морщины), Kysse (губы), Refyne/Defyne (мимические зоны).',
          'Teoxane (Швейцария): линейка Teosyal — монофазные филлеры. RHA (resilient hyaluronic acid) адаптируются к мимике. Kiss (губы), Ultra Deep (скулы), Redensity II (периорбитальная зона).',
        ],
      },
      {
        h2: 'Дополнительные компоненты филлеров',
        paragraphs: [
          'Лидокаин: местный анестетик (0.3%) присутствует в большинстве современных филлеров. Снижает болезненность процедуры. Филлеры без лидокаина — для пациентов с аллергией.',
          'Антиоксиданты: некоторые филлеры содержат антиоксиданты для защиты ГК от разрушения свободными радикалами, продления эффекта.',
          'Буферные растворы: поддерживают pH, близкий к физиологическому, снижают риск воспаления, отёка.',
        ],
      },
      {
        h2: 'Контурная пластика в клинике Meddera',
        paragraphs: [
          'В Meddera используются только оригинальные сертифицированные филлеры ведущих производителей. Врач подбирает препарат с учётом зоны коррекции, желаемого результата.',
          'Консультация включает: оценку пропорций лица, выбор зон для коррекции, расчёт количества филлера, обсуждение ожиданий.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Clasificarea fillerelor după densitate',
        paragraphs: [
          'Fillere moi (low viscosity, G\' 100-200 Pa): pentru piele subțire, buze, zona periorbitală, riduri superficiale. Creează volum natural, nu limitează mimica. Exemple: Juvederm Volbella, Belotero Soft.',
          'Densitate medie (medium viscosity, G\' 200-400 Pa): pentru pliuri nazolabiale, riduri marioneta, conturul feței. Fillere universale pentru majoritatea zonelor. Exemple: Juvederm Ultra, Restylane.',
          'Fillere dense (high viscosity, G\' 400-600 Pa): pentru pomeți, bărbie, corecția ovalului feței, riduri profunde. Creează volum pronunțat, lifting. Exemple: Juvederm Voluma, Restylane Lyft.',
        ],
      },
      {
        h2: 'Tehnologii de producție a fillerelor',
        paragraphs: [
          'Fillere monofazice: gel omogen, moleculele de AH sunt distribuite uniform. Se introduc ușor, se distribuie uniform în țesuturi. Exemple: Juvederm (tehnologia Vycross), Belotero.',
          'Fillere bifazice: gel + particule de AH. Structură mai densă, se păstrează mai mult timp. Mai greu de introdus, pot fi palpabile. Exemple: Restylane (tehnologia NASHA).',
          'Gradul de reticulare: cu cât gradul de reticulare a moleculelor de AH este mai mare, cu atât filler-ul este mai dens, cu atât se păstrează mai mult timp. Dar gradul înalt de reticulare crește riscul de complicații (granuloame).',
        ],
      },
      {
        h2: 'Producători de top de fillere',
        paragraphs: [
          'Allergan (SUA): linia Juvederm — fillere monofazice cu tehnologia Vycross. Voluma (pomeți), Volift (riduri), Volbella (buze, zona periorbitală), Ultra (universal).',
          'Galderma (Suedia): linia Restylane — fillere bifazice cu tehnologia NASHA. Lyft (pomeți, mâini), Restylane (riduri), Kysse (buze), Refyne/Defyne (zone mimice).',
          'Teoxane (Elveția): linia Teosyal — fillere monofazice. RHA (resilient hyaluronic acid) se adaptează la mimică. Kiss (buze), Ultra Deep (pomeți), Redensity II (zona periorbitală).',
        ],
      },
      {
        h2: 'Componente suplimentare ale fillerelor',
        paragraphs: [
          'Lidocaină: anestezic local (0.3%) prezent în majoritatea fillerelor moderne. Reduce durerea procedurii. Fillere fără lidocaină — pentru pacienți cu alergie.',
          'Antioxidanți: unele fillere conțin antioxidanți pentru protecția AH împotriva distrugerii de radicalii liberi, prelungirea efectului.',
          'Soluții tampon: mențin pH-ul apropiat de cel fiziologic, reduc riscul de inflamație, edem.',
        ],
      },
      {
        h2: 'Conturarea facială la clinica Meddera',
        paragraphs: [
          'La Meddera folosim doar fillere originale certificate de la producători de top. Medicul selectează preparatul ținând cont de zona de corecție, rezultatul dorit.',
          'Consultația include: evaluarea proporțiilor feței, alegerea zonelor pentru corecție, calculul cantității de filler, discutarea așteptărilor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
};

export const FILLERS_ARTICLE_CONTENT: Record<string, FillersArticleCopy> = {
  ...FILLERS_ARTICLE_CONTENT_PART1,
  ...FILLERS_ARTICLE_CONTENT_PART2,
};
