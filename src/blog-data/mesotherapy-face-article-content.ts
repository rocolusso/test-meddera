import { MESOTHERAPY_FACE_ARTICLE_CONTENT_PART2 } from '@/blog-data/mesotherapy-face-article-content-part2';

export type ArticleSection = { h2: string; paragraphs: string[] };

export type MesotherapyFaceArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

const MESOTHERAPY_FACE_ARTICLE_CONTENT_PART1: Record<string, MesotherapyFaceArticleCopy> = {
  'mezoterapiya-lica-beltsy-chto-eto': {
    sectionsRu: [
      {
        h2: 'Что такое мезотерапия лица',
        paragraphs: [
          'Мезотерапия — метод введения активных веществ (витамины, аминокислоты, гиалуроновая кислота, пептиды) в средние слои кожи (мезодерму) с помощью микроинъекций. Глубина введения 1-4 мм.',
          'Цель: улучшить качество кожи, повысить тонус, увлажнение, стимулировать синтез коллагена и эластина. Мезотерапия не заполняет морщины (как филлеры), а улучшает состояние кожи изнутри.',
          'Препараты для мезотерапии содержат коктейли из нескольких активных компонентов, подобранных под конкретную проблему: обезвоженность, тусклый цвет, мелкие морщины, акне, пигментация.',
        ],
      },
      {
        h2: 'Показания к мезотерапии лица',
        paragraphs: [
          'Обезвоженность кожи, потеря тонуса и эластичности, тусклый цвет лица, мелкие морщины (мимические и статические), расширенные поры, постакне (рубцы, пигментация).',
          'Профилактика старения: мезотерапия в молодом возрасте (25-35 лет) поддерживает качество кожи, предотвращает появление глубоких морщин.',
          'Подготовка к процедурам: мезотерапия перед пилингами, лазерными процедурами улучшает восстановление кожи.',
        ],
      },
      {
        h2: 'Препараты для мезотерапии',
        paragraphs: [
          'Гиалуроновая кислота (низкомолекулярная): увлажняет, стимулирует синтез коллагена. Витамины (C, E, группа B): антиоксиданты, улучшают цвет кожи.',
          'Аминокислоты (глицин, пролин, лизин): строительные блоки коллагена. Пептиды: стимулируют регенерацию, повышают тонус.',
          'Минералы (цинк, магний, селен): участвуют в метаболизме кожи. Коэнзимы (Q10): антиоксиданты, защита от свободных радикалов.',
        ],
      },
      {
        h2: 'Как проходит процедура',
        paragraphs: [
          'Консультация: оценка состояния кожи, выбор препарата, обсуждение ожиданий. Очищение кожи, нанесение анестезирующего крема (15-20 минут).',
          'Инъекции: врач вводит препарат в средние слои кожи по определённой схеме (папульная техника, линейная, точечная). Процедура занимает 20-30 минут.',
          'После процедуры: лёгкое покраснение, папулы (бугорки) в местах инъекций проходят за 1-2 часа. Можно сразу вернуться к обычной жизни.',
        ],
      },
      {
        h2: 'Мезотерапия в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные препараты для мезотерапии. Процедуру проводит опытный дерматокосметолог.',
          'Консультация включает: оценку показаний, выбор препарата, расчёт количества процедур (обычно курс 3-5 сеансов с интервалом 7-14 дней).',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este mezoterapia feței',
        paragraphs: [
          'Mezoterapia este o metodă de introducere a substanțelor active (vitamine, aminoacizi, acid hialuronic, peptide) în straturile medii ale pielii (mezoderm) cu ajutorul microinjecțiilor. Adâncimea de administrare 1-4 mm.',
          'Scopul: îmbunătățirea calității pielii, creșterea tonusului, hidratării, stimularea sintezei de colagen și elastină. Mezoterapia nu umple ridurile (ca fillerele), ci îmbunătățește starea pielii din interior.',
          'Preparatele pentru mezoterapie conțin cocktail-uri din mai multe componente active, selectate pentru o problemă specifică: deshidratare, culoare opacă, riduri fine, acnee, pigmentare.',
        ],
      },
      {
        h2: 'Indicații pentru mezoterapia feței',
        paragraphs: [
          'Deshidratarea pielii, pierderea tonusului și elasticității, culoarea opacă a feței, riduri fine (mimice și statice), pori dilatați, post-acnee (cicatrici, pigmentare).',
          'Prevenirea îmbătrânirii: mezoterapia la vârstă tânără (25-35 ani) menține calitatea pielii, previne apariția ridurilor profunde.',
          'Pregătirea pentru proceduri: mezoterapia înainte de peeling-uri, proceduri cu laser îmbunătățește recuperarea pielii.',
        ],
      },
      {
        h2: 'Preparate pentru mezoterapie',
        paragraphs: [
          'Acid hialuronic (cu greutate moleculară mică): hidratează, stimulează sinteza de colagen. Vitamine (C, E, grup B): antioxidanți, îmbunătățesc culoarea pielii.',
          'Aminoacizi (glicină, prolină, lizină): blocuri de construcție ale colagenului. Peptide: stimulează regenerarea, cresc tonusul.',
          'Minerale (zinc, magneziu, seleniu): participă la metabolismul pielii. Coenzime (Q10): antioxidanți, protecție împotriva radicalilor liberi.',
        ],
      },
      {
        h2: 'Cum decurge procedura',
        paragraphs: [
          'Consultația: evaluarea stării pielii, alegerea preparatului, discutarea așteptărilor. Curățarea pielii, aplicarea cremei anestezice (15-20 minute).',
          'Injecții: medicul introduce preparatul în straturile medii ale pielii conform unei scheme specifice (tehnică papulară, liniară, punctiformă). Procedura durează 20-30 minute.',
          'După procedură: ușoară roșeață, papule (umflături) în locurile de injecție dispar în 1-2 ore. Puteți reveni imediat la viața obișnuită.',
        ],
      },
      {
        h2: 'Mezoterapia la clinica Meddera',
        paragraphs: [
          'La Meddera folosim preparate certificate pentru mezoterapie. Procedura este efectuată de un dermatocosmetolog experimentat.',
          'Consultația include: evaluarea indicațiilor, alegerea preparatului, calculul numărului de proceduri (de obicei curs de 3-5 ședințe cu interval de 7-14 zile).',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'mezoterapiya-lica-preparaty-sostav': {
    sectionsRu: [
      {
        h2: 'Гиалуроновая кислота в мезотерапии',
        paragraphs: [
          'Низкомолекулярная гиалуроновая кислота (до 1 млн Да) проникает глубже, стимулирует синтез коллагена, эластина, улучшает тургор кожи. Концентрация в мезококтейлях: 5-15 мг/мл.',
          'Механизм действия: ГК связывает воду (1 молекула удерживает до 1000 молекул воды), создаёт оптимальную среду для клеток кожи, стимулирует фибробласты (клетки, вырабатывающие коллаген).',
          'Эффект: глубокое увлажнение, повышение тонуса, разглаживание мелких морщин, улучшение цвета лица. Виден через 7-10 дней, накапливается после курса процедур.',
        ],
      },
      {
        h2: 'Витамины и антиоксиданты',
        paragraphs: [
          'Витамин C (аскорбиновая кислота): мощный антиоксидант, стимулирует синтез коллагена, осветляет пигментацию, защищает от свободных радикалов. Концентрация: 5-20%.',
          'Витамин E (токоферол): антиоксидант, защищает клеточные мембраны, улучшает микроциркуляцию. Витамины группы B (B5, B6): увлажнение, регуляция работы сальных желёз, противовоспалительное действие.',
          'Глутатион: мощный антиоксидант, детоксикация, осветление кожи. Коэнзим Q10: энергетический метаболизм клеток, антиоксидант, замедление старения.',
        ],
      },
      {
        h2: 'Аминокислоты и пептиды',
        paragraphs: [
          'Аминокислоты (глицин, пролин, лизин): строительные блоки коллагена и эластина. Стимулируют синтез белков кожи, улучшают регенерацию, повышают тонус.',
          'Пептиды: короткие цепочки аминокислот с направленным действием. Матриксил (пальмитоил пентапептид-4): стимулирует синтез коллагена I, III, IV типов. Аргирелин: расслабляет мимические мышцы (альтернатива ботоксу).',
          'DMAE (диметиламиноэтанол): повышает тонус кожи, лифтинг-эффект. Карнозин: антиоксидант, защита от гликации (склеивания коллагена с сахарами).',
        ],
      },
      {
        h2: 'Минералы и микроэлементы',
        paragraphs: [
          'Цинк: регуляция работы сальных желёз, противовоспалительное действие, заживление. Магний: участвует в энергетическом метаболизме клеток, расслабление мышц.',
          'Селен: антиоксидант, защита от УФ-повреждений. Кремний: укрепление соединительной ткани, стимуляция синтеза коллагена. Медь: участвует в синтезе коллагена и эластина.',
          'Фосфор, кальций: структурные компоненты клеток, участвуют в метаболизме. Комплексы минералов улучшают общее состояние кожи, повышают эффективность других компонентов.',
        ],
      },
      {
        h2: 'Мезотерапия в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные мезококтейли ведущих производителей (Filorga, Mesoline, Dermaheal). Подбираем препарат под конкретную проблему кожи.',
          'Консультация включает: оценку состояния кожи, выбор препарата и протокола (количество процедур, интервалы), обсуждение ожиданий.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Acidul hialuronic în mezoterapie',
        paragraphs: [
          'Acidul hialuronic cu greutate moleculară mică (până la 1 mil Da) pătrunde mai adânc, stimulează sinteza de colagen, elastină, îmbunătățește turgorul pielii. Concentrația în cocktail-uri mezo: 5-15 mg/ml.',
          'Mecanism de acțiune: AH leagă apa (1 moleculă reține până la 1000 molecule de apă), creează mediu optim pentru celulele pielii, stimulează fibroblastele (celule care produc colagen).',
          'Efect: hidratare profundă, creșterea tonusului, netezirea ridurilor fine, îmbunătățirea culorii feței. Vizibil în 7-10 zile, se acumulează după cursul de proceduri.',
        ],
      },
      {
        h2: 'Vitamine și antioxidanți',
        paragraphs: [
          'Vitamina C (acid ascorbic): antioxidant puternic, stimulează sinteza de colagen, luminează pigmentarea, protejează de radicalii liberi. Concentrație: 5-20%.',
          'Vitamina E (tocoferol): antioxidant, protejează membranele celulare, îmbunătățește microcirculația. Vitamine grup B (B5, B6): hidratare, reglarea glandelor sebacee, acțiune antiinflamatoare.',
          'Glutation: antioxidant puternic, detoxifiere, luminarea pielii. Coenzima Q10: metabolism energetic al celulelor, antioxidant, încetinirea îmbătrânirii.',
        ],
      },
      {
        h2: 'Aminoacizi și peptide',
        paragraphs: [
          'Aminoacizi (glicină, prolină, lizină): blocuri de construcție ale colagenului și elastinei. Stimulează sinteza proteinelor pielii, îmbunătățesc regenerarea, cresc tonusul.',
          'Peptide: lanțuri scurte de aminoacizi cu acțiune direcționată. Matrixyl (palmitoil pentapeptid-4): stimulează sinteza de colagen tip I, III, IV. Argireline: relaxează mușchii mimici (alternativă la botox).',
          'DMAE (dimetilaminoetanol): crește tonusul pielii, efect de lifting. Carnozină: antioxidant, protecție împotriva glicației (lipirea colagenului cu zaharuri).',
        ],
      },
      {
        h2: 'Minerale și microelemente',
        paragraphs: [
          'Zinc: reglarea glandelor sebacee, acțiune antiinflamatoare, vindecare. Magneziu: participă la metabolismul energetic al celulelor, relaxarea mușchilor.',
          'Seleniu: antioxidant, protecție împotriva deteriorărilor UV. Siliciu: întărirea țesutului conjunctiv, stimularea sintezei de colagen. Cupru: participă la sinteza de colagen și elastină.',
          'Fosfor, calciu: componente structurale ale celulelor, participă la metabolism. Complexele de minerale îmbunătățesc starea generală a pielii, cresc eficiența altor componente.',
        ],
      },
      {
        h2: 'Mezoterapia la clinica Meddera',
        paragraphs: [
          'La Meddera folosim cocktail-uri mezo certificate de la producători de top (Filorga, Mesoline, Dermaheal). Selectăm preparatul pentru problema specifică a pielii.',
          'Consultația include: evaluarea stării pielii, alegerea preparatului și protocolului (număr de proceduri, intervale), discutarea așteptărilor.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'mezoterapiya-lica-kak-prohodit-procedura': {
    sectionsRu: [
      {
        h2: 'Подготовка к мезотерапии',
        paragraphs: [
          'За 7 дней: прекратите приём антикоагулянтов (аспирин, ибупрофен) по согласованию с врачом. Избегайте алкоголя за 2-3 дня (расширяет сосуды, повышает риск синяков).',
          'В день процедуры: приходите без макияжа. Не планируйте важные мероприятия на ближайшие 2-3 дня (возможны покраснение, отёк). Сообщите врачу о приёме препаратов, аллергии.',
          'Противопоказания: беременность, лактация, острые инфекции, обострение хронических заболеваний, воспаление в зоне инъекций, онкология, нарушения свёртываемости крови.',
        ],
      },
      {
        h2: 'Этапы процедуры мезотерапии',
        paragraphs: [
          'Консультация: врач оценивает состояние кожи, выбирает препарат (увлажнение, лифтинг, осветление, антиакне), рассчитывает количество процедур. Фотографирование для оценки результата.',
          'Очищение и анестезия: врач очищает кожу антисептиком, наносит анестезирующий крем (15-20 минут). Мезотерапия чувствительна, но терпима; анестезия снижает дискомфорт.',
          'Инъекции: врач вводит препарат в средние слои кожи (1-4 мм) по определённой схеме. Техники: папульная (множество мелких папул), линейная, точечная. Процедура 20-30 минут.',
        ],
      },
      {
        h2: 'После процедуры',
        paragraphs: [
          'Первые часы: лёгкое покраснение, отёчность, папулы (бугорки) в местах инъекций. Проходят за 1-2 часа (папульная техника) или сразу (другие техники). Можно вернуться к обычной жизни.',
          'Первые 24 часа: не трогайте лицо руками, не наносите макияж, не посещайте сауну, бассейн, не занимайтесь спортом. Можно умываться прохладной водой через 6-12 часов.',
          'Первые 3-7 дней: избегайте прямого солнца, используйте SPF 30-50. Не делайте агрессивные процедуры (пилинги, лазер). Увлажняйте кожу мягкими средствами.',
        ],
      },
      {
        h2: 'Курс процедур и результаты',
        paragraphs: [
          'Количество процедур: 3-5 сеансов с интервалом 7-14 дней. Зависит от состояния кожи и цели. Поддерживающие процедуры: 1 раз в 1-3 месяца.',
          'Когда виден результат: первые признаки через 7-10 дней (улучшение тонуса, цвета). Максимальный эффект — через 3-4 недели после курса (накопительный эффект).',
          'Длительность эффекта: 4-6 месяцев после курса. Зависит от возраста, состояния кожи, образа жизни. Регулярные поддерживающие процедуры продлевают результат.',
        ],
      },
      {
        h2: 'Мезотерапия в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные препараты для мезотерапии. Процедуру проводит опытный дерматокосметолог с соблюдением стерильности.',
          'Консультация включает: оценку показаний, выбор препарата, расчёт курса, обсуждение ожиданий и возможных побочных эффектов.',
          'Запись на консультацию: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Pregătirea pentru mezoterapie',
        paragraphs: [
          'Cu 7 zile înainte: opriți administrarea anticoagulantelor (aspirină, ibuprofen) în acord cu medicul. Evitați alcoolul cu 2-3 zile (dilată vasele, crește riscul de vânătăi).',
          'În ziua procedurii: veniți fără machiaj. Nu planificați evenimente importante în următoarele 2-3 zile (posibilă roșeață, edem). Informați medicul despre administrarea de preparate, alergie.',
          'Contraindicații: sarcină, alăptare, infecții acute, exacerbarea bolilor cronice, inflamație în zona injecțiilor, oncologie, tulburări de coagulare.',
        ],
      },
      {
        h2: 'Etapele procedurii de mezoterapie',
        paragraphs: [
          'Consultația: medicul evaluează starea pielii, alege preparatul (hidratare, lifting, luminare, anti-acnee), calculează numărul de proceduri. Fotografiere pentru evaluarea rezultatului.',
          'Curățare și anestezie: medicul curăță pielea cu antiseptic, aplică cremă anestezică (15-20 minute). Mezoterapia este sensibilă, dar suportabilă; anestezia reduce disconfortul.',
          'Injecții: medicul introduce preparatul în straturile medii ale pielii (1-4 mm) conform unei scheme specifice. Tehnici: papulară (multe papule mici), liniară, punctiformă. Procedura 20-30 minute.',
        ],
      },
      {
        h2: 'După procedură',
        paragraphs: [
          'Primele ore: ușoară roșeață, umflare, papule (umflături) în locurile de injecție. Dispar în 1-2 ore (tehnică papulară) sau imediat (alte tehnici). Puteți reveni la viața obișnuită.',
          'Primele 24 ore: nu atingeți fața cu mâinile, nu aplicați machiaj, nu vizitați sauna, piscina, nu faceți sport. Puteți spăla fața cu apă rece după 6-12 ore.',
          'Primele 3-7 zile: evitați soarele direct, folosiți SPF 30-50. Nu faceți proceduri agresive (peeling-uri, laser). Hidratați pielea cu produse blânde.',
        ],
      },
      {
        h2: 'Cursul de proceduri și rezultate',
        paragraphs: [
          'Număr de proceduri: 3-5 ședințe cu interval de 7-14 zile. Depinde de starea pielii și scop. Proceduri de întreținere: o dată la 1-3 luni.',
          'Când este vizibil rezultatul: primele semne în 7-10 zile (îmbunătățirea tonusului, culorii). Efect maxim — în 3-4 săptămâni după curs (efect cumulativ).',
          'Durata efectului: 4-6 luni după curs. Depinde de vârstă, starea pielii, stil de viață. Procedurile regulate de întreținere prelungesc rezultatul.',
        ],
      },
      {
        h2: 'Mezoterapia la clinica Meddera',
        paragraphs: [
          'La Meddera folosim preparate certificate pentru mezoterapie. Procedura este efectuată de un dermatocosmetolog experimentat cu respectarea sterilității.',
          'Consultația include: evaluarea indicațiilor, alegerea preparatului, calculul cursului, discutarea așteptărilor și posibilelor efecte secundare.',
          'Programare la consultație: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'mezoterapiya-lica-kurs-procedur': {
    sectionsRu: [
      { h2: 'Стандартный курс', paragraphs: ['Обычно курс мезотерапии состоит из 3-5 процедур с интервалом 7-14 дней. Количество процедур зависит от состояния кожи, возраста, желаемого результата.'] },
      { h2: 'Поддерживающие процедуры', paragraphs: ['После основного курса рекомендуются поддерживающие процедуры 1 раз в 2-3 месяца для сохранения результата.', 'Запись на консультацию в Meddera: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Curs standard', paragraphs: ['De obicei cursul de mezoterapie constă din 3-5 proceduri cu interval de 7-14 zile. Numărul de proceduri depinde de starea pielii, vârstă, rezultatul dorit.'] },
      { h2: 'Proceduri de susținere', paragraphs: ['După cursul principal se recomandă proceduri de susținere o dată la 2-3 luni pentru păstrarea rezultatului.', 'Programare la consultație la Meddera: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
  'mezoterapiya-lica-otek-sinyaki': {
    sectionsRu: [
      { h2: 'Отёк после мезотерапии', paragraphs: ['Лёгкий отёк — нормальная реакция. Максимум в первые 2-4 часа, проходит за 1-2 дня. Холодные компрессы помогают уменьшить отёк.'] },
      { h2: 'Синяки', paragraphs: ['Синяки возможны у 10-20% пациентов. Проходят за 5-7 дней. Арника (гель, таблетки) ускоряет заживление.', 'Запись на консультацию в Meddera: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Edem după mezoterapie', paragraphs: ['Edem ușor — reacție normală. Maxim în primele 2-4 ore, trece în 1-2 zile. Compresele reci ajută să reducă edemul.'] },
      { h2: 'Vânătăi', paragraphs: ['Vânătăile sunt posibile la 10-20% dintre pacienți. Trec în 5-7 zile. Arnica (gel, comprimate) accelerează vindecarea.', 'Programare la consultație la Meddera: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
  'mezoterapiya-lica-akne-postakne': {
    sectionsRu: [
      { h2: 'Мезотерапия при акне', paragraphs: ['Мезотерапия помогает при акне: препараты с цинком, серой, салициловой кислотой уменьшают воспаление, нормализуют работу сальных желёз. Курс 4-6 процедур.'] },
      { h2: 'Мезотерапия при постакне', paragraphs: ['Мезотерапия эффективна при постакне: рубцах, пигментации. Препараты с пептидами, витамином C стимулируют регенерацию, осветляют пятна.', 'Запись на консультацию в Meddera: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Mezoterapia la acnee', paragraphs: ['Mezoterapia ajută la acnee: preparate cu zinc, sulf, acid salicilic reduc inflamația, normalizează funcționarea glandelor sebacee. Curs de 4-6 proceduri.'] },
      { h2: 'Mezoterapia la postacnee', paragraphs: ['Mezoterapia este eficientă la postacnee: cicatrici, pigmentare. Preparate cu peptide, vitamina C stimulează regenerarea, deschid petele.', 'Programare la consultație la Meddera: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
  'mezoterapiya-lica-vokrug-glaz': {
    sectionsRu: [
      { h2: 'Мезотерапия вокруг глаз', paragraphs: ['Мезотерапия для области вокруг глаз с гиалуроновой кислотой, пептидами, витамином C увлажняет тонкую кожу, уменьшает тёмные круги, мелкие морщины.'] },
      { h2: 'Особенности', paragraphs: ['Используются мягкие препараты, тонкие иглы. Процедура деликатная, малоболезненная. Курс 3-4 процедуры.', 'Запись на консультацию в Meddera: по телефону или через форму на сайте. Адрес: Бельцы, ул. Штефан чел Маре, 13.'] },
    ],
    sectionsRo: [
      { h2: 'Mezoterapia în jurul ochilor', paragraphs: ['Mezoterapia pentru zona din jurul ochilor cu acid hialuronic, peptide, vitamina C hidratează pielea subțire, reduce cercurile întunecate, ridurile mici.'] },
      { h2: 'Particularități', paragraphs: ['Se folosesc preparate moi, ace subțiri. Procedura este delicată, puțin dureroasă. Curs de 3-4 proceduri.', 'Programare la consultație la Meddera: la telefon sau prin formularul de pe site. Adresa: Bălți, str. Ștefan cel Mare, 13.'] },
    ],
  },
};

export const MESOTHERAPY_FACE_ARTICLE_CONTENT: Record<string, MesotherapyFaceArticleCopy> = {
  ...MESOTHERAPY_FACE_ARTICLE_CONTENT_PART1,
  ...MESOTHERAPY_FACE_ARTICLE_CONTENT_PART2,
};
