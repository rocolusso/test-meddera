/** Structured copy for dermatologist cluster articles (informational; not personal medical advice). */

export type ArticleSection = { h2: string; paragraphs: string[] };

export type DermatologistArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

export const DERMATOLOGIST_ARTICLE_CONTENT: Record<string, DermatologistArticleCopy> = {
  'dermatolog-beltsy-kogda-nuzhna-konsultaciya': {
    sectionsRu: [
      {
        h2: 'Когда стоит обратиться к дерматологу',
        paragraphs: [
          'Консультация дерматолога показана при любых изменениях кожи, которые вызывают дискомфорт, не проходят самостоятельно или вызывают беспокойство. Это могут быть высыпания, зуд, шелушение, изменение цвета кожи, новообразования.',
          'Не откладывайте визит, если заметили быстрый рост родинки, изменение её формы или цвета, кровоточивость, появление асимметрии. Ранняя диагностика новообразований кожи критически важна для прогноза.',
          'Профилактические осмотры рекомендуются раз в год, особенно при наличии множественных родинок, светлой коже, частом пребывании на солнце или наследственной предрасположенности к заболеваниям кожи.',
        ],
      },
      {
        h2: 'Что включает консультация дерматолога',
        paragraphs: [
          'На первичном приёме врач собирает анамнез: уточняет жалобы, длительность симптомов, предыдущее лечение, аллергии, хронические заболевания, наследственность. Эта информация помогает поставить точный диагноз.',
          'Осмотр кожи проводится визуально и при необходимости с помощью дерматоскопа — прибора, который увеличивает изображение и позволяет детально изучить структуру новообразований.',
          'По результатам осмотра врач ставит предварительный диагноз и при необходимости назначает дополнительные исследования: соскоб на грибы, бактериологический посев, биопсию, аллергопробы или анализы крови.',
        ],
      },
      {
        h2: 'Какие заболевания лечит дерматолог',
        paragraphs: [
          'Дерматолог диагностирует и лечит широкий спектр заболеваний кожи: акне (угревая болезнь), экзему, псориаз, дерматиты (атопический, контактный, себорейный), розацеа, грибковые инфекции (микозы), бактериальные инфекции (фолликулит, импетиго).',
          'Также в компетенцию дерматолога входит диагностика и удаление доброкачественных новообразований (папилломы, бородавки, кератомы), наблюдение за родинками, диагностика злокачественных новообразований кожи (меланома, базалиома, плоскоклеточный рак).',
          'Дерматолог занимается лечением заболеваний волос (алопеция, себорея) и ногтей (онихомикоз, вросший ноготь), а также проблемами, связанными с повышенной потливостью (гипергидроз).',
        ],
      },
      {
        h2: 'Как подготовиться к консультации',
        paragraphs: [
          'Специальная подготовка обычно не требуется. Приходите на приём без макияжа, чтобы врач мог осмотреть кожу лица. Если проблема касается волосистой части головы, вымойте голову накануне без использования стайлинговых средств.',
          'Возьмите с собой результаты предыдущих обследований, выписки из медицинской карты, список принимаемых препаратов. Если вы уже проходили лечение у другого специалиста, эта информация поможет врачу составить более полную картину.',
          'Подготовьте список вопросов, которые хотите задать врачу: о диагнозе, методах лечения, прогнозе, профилактике рецидивов. Не стесняйтесь уточнять непонятные моменты — ваше понимание ситуации важно для успешного лечения.',
        ],
      },
      {
        h2: 'Дерматолог в клинике Meddera, Бельцы',
        paragraphs: [
          'В клинике Meddera приём ведёт опытный дерматолог, который проводит диагностику и лечение заболеваний кожи, волос и ногтей. Мы используем современное оборудование для дерматоскопии и других исследований.',
          'Консультация включает детальный осмотр, постановку диагноза, назначение лечения и рекомендации по уходу за кожей. При необходимости врач направит на дополнительные исследования или к смежным специалистам.',
          'Запись на консультацию доступна онлайн или по телефону. Стоимость первичной консультации — 400 MDL, повторной — 250 MDL. Адрес клиники: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Când trebuie să consultați dermatologul',
        paragraphs: [
          'Consultația dermatologului este indicată în cazul oricăror modificări ale pielii care provoacă disconfort, nu dispar singure sau cauzează îngrijorare. Acestea pot fi erupții cutanate, mâncărime, descuamare, schimbarea culorii pielii, neoplasmele.',
          'Nu amânați vizita dacă observați creșterea rapidă a unei alunițe, schimbarea formei sau culorii acesteia, sângerare, apariția asimetriei. Diagnosticul precoce al neoplasmelor cutanate este critic pentru prognostic.',
          'Examinările preventive sunt recomandate o dată pe an, mai ales în cazul prezenței multiplelor alunițe, a pielii deschise, a expunerii frecvente la soare sau a predispoziției ereditare la afecțiunile pielii.',
        ],
      },
      {
        h2: 'Ce include consultația dermatologului',
        paragraphs: [
          'La prima vizită, medicul colectează anamneza: clarifică plângerile, durata simptomelor, tratamentul anterior, alergiile, bolile cronice, ereditatea. Aceste informații ajută la stabilirea unui diagnostic precis.',
          'Examinarea pielii se efectuează vizual și, dacă este necesar, cu ajutorul dermatoscopului — un dispozitiv care mărește imaginea și permite studierea detaliată a structurii neoplasmelor.',
          'Pe baza rezultatelor examinării, medicul stabilește un diagnostic preliminar și, dacă este necesar, prescrie investigații suplimentare: raclare pentru ciuperci, cultură bacteriologică, biopsie, teste alergice sau analize de sânge.',
        ],
      },
      {
        h2: 'Ce afecțiuni tratează dermatologul',
        paragraphs: [
          'Dermatologul diagnostichează și tratează o gamă largă de afecțiuni ale pielii: acnee (boala acneică), eczemă, psoriazis, dermatite (atopică, de contact, seboreică), rozacee, infecții fungice (micoze), infecții bacteriene (foliculită, impetigo).',
          'De asemenea, în competența dermatologului intră diagnosticul și îndepărtarea neoplasmelor benigne (papiloame, negi, keratoame), supravegherea aluniţelor, diagnosticul neoplasmelor maligne ale pielii (melanom, baziom, carcinom cu celule scuamoase).',
          'Dermatologul se ocupă de tratamentul afecțiunilor părului (alopecie, seboreea) și unghiilor (onicomicoza, unghia încarnată), precum și de problemele legate de transpirația excesivă (hiperhidroza).',
        ],
      },
      {
        h2: 'Cum să vă pregătiți pentru consultație',
        paragraphs: [
          'De obicei, nu este necesară o pregătire specială. Veniți la consultație fără machiaj, pentru ca medicul să poată examina pielea feței. Dacă problema se referă la zona pilozității capului, spălați-vă părul cu o zi înainte fără a utiliza produse de styling.',
          'Luați cu dumneavoastră rezultatele investigațiilor anterioare, extrasele din fișa medicală, lista medicamentelor pe care le luați. Dacă ați urmat deja un tratament la un alt specialist, aceste informații vor ajuta medicul să formeze o imagine mai completă.',
          'Pregătiți o listă de întrebări pe care doriți să le adresați medicului: despre diagnostic, metode de tratament, prognostic, prevenirea recidivelor. Nu ezitați să clarificați aspectele neclare — înțelegerea situației este importantă pentru succesul tratamentului.',
        ],
      },
      {
        h2: 'Dermatolog la clinica Meddera, Bălți',
        paragraphs: [
          'La clinica Meddera, consultațiile sunt efectuate de un dermatolog experimentat, care realizează diagnosticul și tratamentul afecțiunilor pielii, părului și unghiilor. Utilizăm echipamente moderne pentru dermatoscopie și alte investigații.',
          'Consultația include examinarea detaliată, stabilirea diagnosticului, prescrierea tratamentului și recomandări pentru îngrijirea pielii. Dacă este necesar, medicul vă va trimite pentru investigații suplimentare sau la alți specialiști.',
          'Programarea la consultație este disponibilă online sau telefonic. Costul consultației primare — 400 MDL, repetate — 250 MDL. Adresa clinicii: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'akne-prichiny-stadii-lechenie': {
    sectionsRu: [
      {
        h2: 'Что такое акне и почему оно возникает',
        paragraphs: [
          'Акне (угревая болезнь) — это хроническое воспалительное заболевание сальных желёз и волосяных фолликулов. Основные причины: повышенная выработка кожного сала, закупорка пор, размножение бактерий Cutibacterium acnes, воспаление.',
          'Факторы, провоцирующие акне: гормональные изменения (пубертат, менструальный цикл, беременность), стресс, неправильное питание (избыток простых углеводов, молочных продуктов), неподходящая косметика, некоторые лекарства (кортикостероиды, литий).',
          'Акне — не только косметическая проблема. Без лечения оно может привести к образованию рубцов, постакне (пигментация, застойные пятна), психологическому дискомфорту и снижению качества жизни.',
        ],
      },
      {
        h2: 'Стадии акне: от лёгкой до тяжёлой',
        paragraphs: [
          'Лёгкая степень (I): открытые и закрытые комедоны (чёрные и белые точки), единичные папулы. Воспаление минимальное, рубцы не образуются.',
          'Средняя степень (II-III): множественные папулы и пустулы (гнойнички), воспаление умеренное. При неправильном лечении или самостоятельном выдавливании возможно образование рубцов.',
          'Тяжёлая степень (IV): глубокие узлы, кисты, сливающиеся очаги воспаления. Высокий риск рубцевания, требуется системная терапия под контролем дерматолога.',
        ],
      },
      {
        h2: 'Современные методы лечения акне',
        paragraphs: [
          'Местная терапия: ретиноиды (адапален, третиноин) для нормализации ороговения, бензоил пероксид для уничтожения бактерий, азелаиновая кислота для уменьшения воспаления и пигментации.',
          'Системная терапия (при средней и тяжёлой степени): антибиотики (доксициклин, миноциклин) курсом 2-3 месяца, изотретиноин (при тяжёлом акне, резистентном к другим методам), гормональная терапия для женщин (комбинированные оральные контрацептивы, антиандрогены).',
          'Процедуры: химические пилинги (салициловый, гликолевый), чистка лица, лазерная терапия, фототерапия. Процедуры дополняют медикаментозное лечение, но не заменяют его.',
        ],
      },
      {
        h2: 'Уход за кожей при акне',
        paragraphs: [
          'Очищение: дважды в день мягким гелем для проблемной кожи (pH 5.5). Избегайте агрессивных скрабов и спиртосодержащих тоников — они усиливают воспаление.',
          'Увлажнение: даже жирная кожа нуждается в увлажнении. Выбирайте лёгкие некомедогенные кремы с пометкой "oil-free" или "non-comedogenic".',
          'Защита от солнца: SPF 30+ обязателен, особенно при использовании ретиноидов и кислот. Выбирайте минеральные фильтры или лёгкие флюиды для жирной кожи.',
          'Чего избегать: не выдавливайте прыщи (риск инфицирования и рубцов), не используйте жирные кремы и масла, не трогайте лицо руками в течение дня.',
        ],
      },
      {
        h2: 'Лечение акне в клинике Meddera',
        paragraphs: [
          'В Meddera мы используем комплексный подход: диагностика степени акне, выявление провоцирующих факторов, подбор индивидуальной схемы лечения (местная и/или системная терапия).',
          'При необходимости назначаем анализы (гормоны, биохимия крови), консультации смежных специалистов (эндокринолог, гинеколог). Контрольные визиты каждые 4-6 недель для оценки эффективности и коррекции терапии.',
          'Запись на консультацию: онлайн или по телефону. Стоимость первичной консультации — 400 MDL, повторной — 250 MDL. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este acneea și de ce apare',
        paragraphs: [
          'Acneea (boala acneică) este o afecțiune inflamatorie cronică a glandelor sebacee și foliculilor piloși. Cauzele principale: producție crescută de sebum, obturarea porilor, multiplicarea bacteriilor Cutibacterium acnes, inflamație.',
          'Factori care provoacă acneea: schimbări hormonale (pubertate, ciclul menstrual, sarcină), stress, alimentație incorectă (exces de carbohidrați simpli, produse lactate), cosmetice neadecvate, unele medicamente (corticosteroizi, litiu).',
          'Acneea nu este doar o problemă cosmetică. Fără tratament, poate duce la formarea cicatricielor, postacnee (pigmentare, pete congestive), disconfort psihologic și scăderea calității vieții.',
        ],
      },
      {
        h2: 'Stadiile acneei: de la ușoară la severă',
        paragraphs: [
          'Grad ușor (I): comedoane deschise și închise (puncte negre și albe), papule izolate. Inflamația este minimă, cicatricele nu se formează.',
          'Grad mediu (II-III): papule și pustule multiple (puroi), inflamație moderată. În cazul tratamentului incorect sau al stoarcerii independente, este posibilă formarea cicatricielor.',
          'Grad sever (IV): noduli profunzi, chiste, focare inflamatorii confluente. Risc ridicat de cicatrizare, necesită terapie sistemică sub controlul dermatologului.',
        ],
      },
      {
        h2: 'Metode moderne de tratament al acneei',
        paragraphs: [
          'Terapie locală: retinoizi (adapalen, tretinoin) pentru normalizarea keratinizării, peroxid de benzoil pentru distrugerea bacteriilor, acid azelaic pentru reducerea inflamației și pigmentării.',
          'Terapie sistemică (în cazul gradului mediu și sever): antibiotice (doxiciclină, minociclină) curs de 2-3 luni, izotretinoin (în cazul acneei severe, rezistente la alte metode), terapie hormonală pentru femei (contraceptive orale combinate, antiandrogeni).',
          'Proceduri: peelinguri chimice (salicilic, glicolic), curățare facială, terapie cu laser, fototerapie. Procedurile completează tratamentul medicamentos, dar nu îl înlocuiesc.',
        ],
      },
      {
        h2: 'Îngrijirea pielii în cazul acneei',
        paragraphs: [
          'Curățare: de două ori pe zi cu gel blând pentru piele problematică (pH 5.5). Evitați scruburile agresive și tonicele cu alcool — acestea intensifică inflamația.',
          'Hidratare: chiar și pielea grasă necesită hidratare. Alegeți creme ușoare necomedogene cu mențiunea "oil-free" sau "non-comedogenic".',
          'Protecție solară: SPF 30+ este obligatoriu, mai ales la utilizarea retinoidelor și acizilor. Alegeți filtre minerale sau fluide ușoare pentru piele grasă.',
          'Ce să evitați: nu stoarceți coșurile (risc de infecție și cicatrici), nu folosiți creme grase și uleiuri, nu atingeți fața cu mâinile în timpul zilei.',
        ],
      },
      {
        h2: 'Tratamentul acneei la clinica Meddera',
        paragraphs: [
          'La Meddera folosim o abordare complexă: diagnosticul gradului de acnee, identificarea factorilor provocatori, selectarea schemei individuale de tratament (terapie locală și/sau sistemică).',
          'Dacă este necesar, prescrim analize (hormoni, biochimie sanguină), consultații cu alți specialiști (endocrinolog, ginecolog). Vizite de control la fiecare 4-6 săptămâni pentru evaluarea eficacității și ajustarea terapiei.',
          'Programare la consultație: online sau telefonic. Costul consultației primare — 400 MDL, repetate — 250 MDL. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'psoriaz-sovremennye-podhody-terapii': {
    sectionsRu: [
      {
        h2: 'Что такое псориаз',
        paragraphs: [
          'Псориаз — хроническое аутоиммунное заболевание кожи, при котором клетки эпидермиса обновляются в 10 раз быстрее нормы. Это приводит к образованию красных бляшек, покрытых серебристо-белыми чешуйками.',
          'Псориаз не заразен. Причины до конца не изучены, но известно, что играют роль генетическая предрасположенность, сбои иммунной системы, триггеры (стресс, инфекции, травмы кожи, некоторые лекарства).',
          'Псориаз может поражать любые участки тела: локти, колени, кожу головы, ногти, ладони, стопы. В 30% случаев развивается псориатический артрит — поражение суставов.',
        ],
      },
      {
        h2: 'Формы псориаза',
        paragraphs: [
          'Бляшечный (вульгарный) — самая распространённая форма (80-90% случаев). Характерны красные бляшки с чешуйками на локтях, коленях, пояснице, коже головы.',
          'Каплевидный — мелкие высыпания по всему телу, часто после стрептококковой инфекции. Пустулёзный — гнойнички на ладонях и стопах или генерализованная форма (тяжёлая).',
          'Инверсный — поражение складок кожи (подмышки, пах, под грудью). Эритродермический — тяжёлая форма с поражением более 90% кожи, требует госпитализации.',
        ],
      },
      {
        h2: 'Современные методы лечения',
        paragraphs: [
          'Местная терапия (при лёгкой и средней степени): кортикостероиды, аналоги витамина D3 (кальципотриол), ретиноиды, салициловая кислота для размягчения чешуек.',
          'Фототерапия: узкополосная UVB-терапия (311 нм) — безопасный и эффективный метод для среднетяжёлого псориаза. Курс 20-30 сеансов 2-3 раза в неделю.',
          'Системная терапия (при тяжёлом псориазе): метотрексат, циклоспорин, ацитретин. Биологическая терапия (ингибиторы ФНО-альфа, интерлейкинов) — современный метод с высокой эффективностью и хорошей переносимостью.',
        ],
      },
      {
        h2: 'Как контролировать обострения',
        paragraphs: [
          'Избегайте триггеров: стресс (практикуйте релаксацию, медитацию), травмы кожи (феномен Кёбнера — новые высыпания на месте повреждений), инфекции (своевременно лечите ОРВИ, ангину).',
          'Уход за кожей: ежедневное увлажнение (эмоленты, кремы с мочевиной 5-10%), мягкое очищение без мочалок и скрабов, избегайте горячей воды (тёплый душ предпочтительнее ванны).',
          'Образ жизни: отказ от курения и алкоголя (усиливают псориаз), сбалансированное питание (ограничьте красное мясо, сахар, увеличьте овощи, рыбу, омега-3), достаточный сон, физическая активность.',
        ],
      },
      {
        h2: 'Лечение псориаза в Meddera',
        paragraphs: [
          'В клинике Meddera мы проводим диагностику формы и степени тяжести псориаза, подбираем индивидуальную схему лечения, обучаем правильному уходу за кожей.',
          'При необходимости направляем на дополнительные исследования (анализы крови, консультация ревматолога при подозрении на псориатический артрит).',
          'Запись на консультацию дерматолога: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este psoriazisul',
        paragraphs: [
          'Psoriazisul este o boală autoimună cronică a pielii, în care celulele epidermei se reînnoiesc de 10 ori mai rapid decât normal. Acest lucru duce la formarea plăcilor roșii acoperite cu solzi argintii-albi.',
          'Psoriazisul nu este contagios. Cauzele nu sunt pe deplin studiate, dar se știe că joacă un rol predispoziția genetică, disfuncțiile sistemului imunitar, factorii declanșatori (stress, infecții, traumatisme ale pielii, unele medicamente).',
          'Psoriazisul poate afecta orice zone ale corpului: coate, genunchi, scalp, unghii, palme, tălpi. În 30% din cazuri se dezvoltă artrita psoriazică — afectarea articulațiilor.',
        ],
      },
      {
        h2: 'Forme de psoriazis',
        paragraphs: [
          'În plăci (vulgar) — cea mai răspândită formă (80-90% din cazuri). Caracteristice sunt plăcile roșii cu solzi pe coate, genunchi, zona lombară, scalp.',
          'Guttată — erupții mici pe tot corpul, adesea după infecție streptococică. Pustulară — pustule pe palme și tălpi sau formă generalizată (severă).',
          'Inversă — afectarea pliurilor pielii (axile, inghinale, sub sâni). Eritrodermică — formă severă cu afectarea a peste 90% din piele, necesită spitalizare.',
        ],
      },
      {
        h2: 'Metode moderne de tratament',
        paragraphs: [
          'Terapie locală (în cazul gradului ușor și mediu): corticosteroizi, analogi ai vitaminei D3 (calcipotriol), retinoizi, acid salicilic pentru înmuierea solzilor.',
          'Fototerapie: terapie UVB cu bandă îngustă (311 nm) — metodă sigură și eficientă pentru psoriazisul moderat-sever. Curs de 20-30 ședințe de 2-3 ori pe săptămână.',
          'Terapie sistemică (în cazul psoriazisului sever): metotrexat, ciclosporină, acitretin. Terapie biologică (inhibitori TNF-alfa, interleukine) — metodă modernă cu eficacitate ridicată și toleranță bună.',
        ],
      },
      {
        h2: 'Cum să controlați exacerbările',
        paragraphs: [
          'Evitați factorii declanșatori: stress (practicați relaxare, meditație), traumatisme ale pielii (fenomenul Koebner — erupții noi la locul leziunilor), infecții (tratați la timp IACRS, angina).',
          'Îngrijirea pielii: hidratare zilnică (emolienti, creme cu uree 5-10%), curățare blândă fără bureți și scruburi, evitați apa fierbinte (dușul călduț este preferabil băii).',
          'Stil de viață: renunțarea la fumat și alcool (intensifică psoriazisul), alimentație echilibrată (limitați carnea roșie, zahărul, măriți legumele, peștele, omega-3), somn suficient, activitate fizică.',
        ],
      },
      {
        h2: 'Tratamentul psoriazisului la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnosticul formei și gradului de severitate al psoriazisului, selectăm schema individuală de tratament, învățăm îngrijirea corectă a pielii.',
          'Dacă este necesar, trimitem pentru investigații suplimentare (analize de sânge, consultație reumatolog în caz de suspiciune de artrită psoriazică).',
          'Programare la consultația dermatologului: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'ekzema-kak-oblegchit-simptomy': {
    sectionsRu: [
      {
        h2: 'Что такое экзема и её виды',
        paragraphs: [
          'Экзема — хроническое воспалительное заболевание кожи, характеризующееся зудом, покраснением, сухостью, шелушением, иногда мокнутием и корками. Экзема не заразна.',
          'Основные виды: атопическая (связана с аллергией, часто у детей), контактная (реакция на раздражители), себорейная (на коже головы, лице), дисгидротическая (на ладонях, стопах), нуммулярная (округлые бляшки).',
          'Причины экземы: генетическая предрасположенность, нарушение барьерной функции кожи, дисбаланс иммунной системы, триггеры (аллергены, стресс, сухой воздух, жёсткая вода, химические раздражители).',
        ],
      },
      {
        h2: 'Симптомы и диагностика',
        paragraphs: [
          'Основные симптомы: интенсивный зуд (особенно ночью), покраснение, сухость и шелушение кожи, трещины, иногда мокнутие и корки. Хроническое течение с периодами обострений и ремиссий.',
          'Диагностика: осмотр дерматолога, сбор анамнеза (наследственность, аллергии, триггеры). При необходимости — аллергопробы (patch-тесты для выявления контактных аллергенов), анализы крови (IgE при атопической экземе).',
          'Важно отличить экзему от псориаза, грибковых инфекций, контактного дерматита. Точный диагноз определяет тактику лечения.',
        ],
      },
      {
        h2: 'Как облегчить симптомы экземы',
        paragraphs: [
          'Местная терапия: кортикостероидные кремы/мази (короткими курсами при обострениях), ингибиторы кальциневрина (пимекролимус, такролимус) — альтернатива гормонам для длительного применения.',
          'Увлажнение — основа ухода: эмоленты (кремы, бальзамы) наносить 2-3 раза в день и сразу после душа на влажную кожу. Это восстанавливает барьерную функцию и уменьшает зуд.',
          'Системная терапия (при тяжёлых формах): антигистаминные препараты для уменьшения зуда, в редких случаях — короткие курсы системных кортикостероидов, иммуносупрессоры (циклоспорин), биологическая терапия (дупилумаб).',
        ],
      },
      {
        h2: 'Профилактика обострений',
        paragraphs: [
          'Избегайте триггеров: аллергены (пыль, пыльца, шерсть животных), раздражители (синтетическая одежда, жёсткие ткани, агрессивные моющие средства), стресс, перегрев и потоотделение.',
          'Правильный уход: короткий тёплый душ (не горячая ванна), мягкие моющие средства без отдушек и SLS, хлопковая одежда, увлажнитель воздуха в помещении (влажность 40-60%).',
          'Диета: у некоторых пациентов обострения связаны с пищевыми аллергенами (молоко, яйца, орехи, цитрусовые). Ведите пищевой дневник и обсудите с врачом необходимость исключения продуктов.',
        ],
      },
      {
        h2: 'Лечение экземы в Meddera',
        paragraphs: [
          'В клинике Meddera мы проводим диагностику типа экземы, выявляем триггеры, подбираем индивидуальную схему лечения и обучаем правильному уходу за кожей.',
          'При необходимости назначаем аллергопробы, консультации аллерголога. Контрольные визиты для оценки эффективности терапии и коррекции схемы.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este eczema și tipurile acesteia',
        paragraphs: [
          'Eczema este o boală inflamatorie cronică a pielii, caracterizată prin mâncărime, roșeață, uscăciune, descuamare, uneori exsudare și cruste. Eczema nu este contagioasă.',
          'Tipuri principale: atopică (legată de alergie, frecvent la copii), de contact (reacție la iritanți), seboreică (pe scalp, față), dishidrotică (pe palme, tălpi), numulară (plăci rotunde).',
          'Cauze ale eczemei: predispoziție genetică, afectarea funcției de barieră a pielii, dezechilibru al sistemului imunitar, factori declanșatori (alergeni, stress, aer uscat, apă dură, iritanți chimici).',
        ],
      },
      {
        h2: 'Simptome și diagnostic',
        paragraphs: [
          'Simptome principale: mâncărime intensă (mai ales noaptea), roșeață, uscăciune și descuamare a pielii, fisuri, uneori exsudare și cruste. Evoluție cronică cu perioade de exacerbare și remisiune.',
          'Diagnostic: examinarea dermatologului, colectarea anamnesticului (ereditate, alergii, factori declanșatori). Dacă este necesar — teste alergice (patch-teste pentru identificarea alergenilor de contact), analize de sânge (IgE în cazul eczemei atopice).',
          'Important să se distingă eczema de psoriazis, infecții fungice, dermatită de contact. Diagnosticul precis determină tactica de tratament.',
        ],
      },
      {
        h2: 'Cum să ameliorați simptomele eczemei',
        paragraphs: [
          'Terapie locală: creme/unguente cu corticosteroizi (cursuri scurte în cazul exacerbărilor), inhibitori ai calcineurinei (pimecrolimus, tacrolimus) — alternativă la hormoni pentru utilizare îndelungată.',
          'Hidratarea — baza îngrijirii: emolienti (creme, balsamuri) de aplicat de 2-3 ori pe zi și imediat după duș pe pielea umedă. Acest lucru restabilește funcția de barieră și reduce mâncărimea.',
          'Terapie sistemică (în cazul formelor severe): antihistaminice pentru reducerea mâncărimii, în cazuri rare — cursuri scurte de corticosteroizi sistemici, imunosupresoare (ciclosporină), terapie biologică (dupilumab).',
        ],
      },
      {
        h2: 'Prevenirea exacerbărilor',
        paragraphs: [
          'Evitați factorii declanșatori: alergeni (praf, polen, blană de animale), iritanți (îmbrăcăminte sintetică, țesături aspre, detergenți agresivi), stress, supraîncălzire și transpirație.',
          'Îngrijire corectă: duș scurt călduț (nu baie fierbinte), produse de curățare blânde fără parfumuri și SLS, îmbrăcăminte din bumbac, umidificator în cameră (umiditate 40-60%).',
          'Dietă: la unii pacienți exacerbările sunt legate de alergenii alimentari (lapte, ouă, nuci, citrice). Țineți un jurnal alimentar și discutați cu medicul necesitatea excluderii produselor.',
        ],
      },
      {
        h2: 'Tratamentul eczemei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnosticul tipului de eczemă, identificăm factorii declanșatori, selectăm schema individuală de tratament și învățăm îngrijirea corectă a pielii.',
          'Dacă este necesar, prescrim teste alergice, consultații cu alergologul. Vizite de control pentru evaluarea eficacității terapiei și ajustarea schemei.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'dermatoskopiya-chto-eto-zachem-nuzhna': {
    sectionsRu: [
      {
        h2: 'Что такое дерматоскопия',
        paragraphs: [
          'Дерматоскопия — неинвазивный метод исследования новообразований кожи с помощью дерматоскопа (специального прибора с увеличением 10-40x и подсветкой). Позволяет детально изучить структуру родинок, пигментных пятен, папиллом без биопсии.',
          'Дерматоскоп увеличивает изображение и позволяет увидеть структуры, невидимые невооружённым глазом: пигментную сеть, сосуды, включения. Это помогает отличить доброкачественные образования от подозрительных.',
          'Процедура безболезненна, занимает 5-15 минут, не требует подготовки. Врач осматривает все подозрительные образования и фотографирует их для дальнейшего наблюдения в динамике.',
        ],
      },
      {
        h2: 'Когда нужна дерматоскопия',
        paragraphs: [
          'Обязательные показания: изменение родинки (рост, изменение цвета, формы, кровоточивость), асимметричные родинки, множественные родинки (более 50), атипичные невусы, наследственность (меланома у родственников).',
          'Профилактические осмотры: раз в год при светлой коже, частом пребывании на солнце, солнечных ожогах в анамнезе, работе на открытом воздухе.',
          'Перед удалением: любое новообразование перед удалением должно быть осмотрено дерматоскопом, чтобы исключить злокачественный процесс.',
        ],
      },
      {
        h2: 'Как проходит дерматоскопия',
        paragraphs: [
          'Врач наносит на кожу гель или масло (для лучшей визуализации), прикладывает дерматоскоп к образованию и изучает его структуру. Современные цифровые дерматоскопы позволяют сохранить изображения для сравнения при повторных визитах.',
          'При подозрении на меланому или другие злокачественные образования врач направляет на биопсию или удаление с гистологическим исследованием. Дерматоскопия повышает точность диагностики меланомы до 90% (против 60% при визуальном осмотре).',
          'Результат выдаётся сразу после осмотра. Врач объясняет, какие образования требуют наблюдения, какие — удаления, и когда прийти на контрольный визит.',
        ],
      },
      {
        h2: 'ABCDE правило для самоосмотра',
        paragraphs: [
          'A (Asymmetry) — асимметрия: одна половина родинки отличается от другой. B (Border) — края: неровные, размытые, зубчатые. C (Color) — цвет: неоднородный (чёрный, коричневый, красный, белый в одной родинке).',
          'D (Diameter) — диаметр: более 6 мм (размер ластика на карандаше). E (Evolving) — изменение: родинка меняется в размере, форме, цвете, начинает кровоточить или чесаться.',
          'Если заметили хотя бы один признак — запишитесь на дерматоскопию. Ранняя диагностика меланомы критически важна: при выявлении на ранней стадии (in situ) 5-летняя выживаемость 99%.',
        ],
      },
      {
        h2: 'Дерматоскопия в Meddera',
        paragraphs: [
          'В клинике Meddera используется цифровой дерматоскоп с сохранением изображений для мониторинга в динамике. Осмотр проводит опытный дерматолог.',
          'Стоимость дерматоскопии входит в консультацию дерматолога (400 MDL первичная, 250 MDL повторная). При необходимости удаления новообразования — направление на гистологию.',
          'Запись онлайн или по телефону. Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este dermatoscopia',
        paragraphs: [
          'Dermatoscopia este o metodă neinvazivă de investigare a neoplasmelor cutanate cu ajutorul dermatoscopului (dispozitiv special cu mărire 10-40x și iluminare). Permite studierea detaliată a structurii aluniţelor, petelor pigmentare, papiloamelor fără biopsie.',
          'Dermatoscopul mărește imaginea și permite vizualizarea structurilor invizibile cu ochiul liber: rețeaua pigmentară, vasele, incluziunile. Acest lucru ajută la distincția între formațiunile benigne și cele suspecte.',
          'Procedura este nedureroasă, durează 5-15 minute, nu necesită pregătire. Medicul examinează toate formațiunile suspecte și le fotografiază pentru monitorizare ulterioară în dinamică.',
        ],
      },
      {
        h2: 'Când este necesară dermatoscopia',
        paragraphs: [
          'Indicații obligatorii: modificarea alunițelor (creștere, schimbarea culorii, formei, sângerare), alunițe asimetrice, alunițe multiple (mai mult de 50), nevusuri atipice, ereditate (melanom la rude).',
          'Examinări preventive: o dată pe an în cazul pielii deschise, expunerii frecvente la soare, arsurilor solare în anamneză, muncii în aer liber.',
          'Înainte de îndepărtare: orice neoplasmă înainte de îndepărtare trebuie examinată cu dermatoscopul pentru a exclude procesul malign.',
        ],
      },
      {
        h2: 'Cum decurge dermatoscopia',
        paragraphs: [
          'Medicul aplică gel sau ulei pe piele (pentru vizualizare mai bună), aplică dermatoscopul pe formațiune și studiază structura acesteia. Dermatoscopele digitale moderne permit salvarea imaginilor pentru comparație la vizitele repetate.',
          'În caz de suspiciune de melanom sau alte formațiuni maligne, medicul trimite pentru biopsie sau îndepărtare cu examen histologic. Dermatoscopia crește acuratețea diagnosticului de melanom până la 90% (față de 60% la examinarea vizuală).',
          'Rezultatul se comunică imediat după examinare. Medicul explică ce formațiuni necesită monitorizare, care — îndepărtare, și când să veniți la vizita de control.',
        ],
      },
      {
        h2: 'Regula ABCDE pentru autoexaminare',
        paragraphs: [
          'A (Asymmetry) — asimetrie: o jumătate a alunițelor diferă de cealaltă. B (Border) — margini: neregulate, estompate, zimțate. C (Color) — culoare: neomogenă (negru, maro, roșu, alb într-o singură aluniță).',
          'D (Diameter) — diametru: mai mult de 6 mm (dimensiunea gumei de pe creion). E (Evolving) — evoluție: alunița se modifică în dimensiune, formă, culoare, începe să sângereze sau să mănânce.',
          'Dacă observați cel puțin un semn — programați-vă pentru dermatoscopie. Diagnosticul precoce al melanomului este critic: la depistarea în stadiu precoce (in situ) supraviețuirea la 5 ani este de 99%.',
        ],
      },
      {
        h2: 'Dermatoscopia la Meddera',
        paragraphs: [
          'La clinica Meddera se utilizează dermatoscop digital cu salvarea imaginilor pentru monitorizare în dinamică. Examinarea este efectuată de un dermatolog experimentat.',
          'Costul dermatoscopiei este inclus în consultația dermatologului (400 MDL primară, 250 MDL repetată). Dacă este necesară îndepărtarea neoplasmei — trimitere pentru histologie.',
          'Programare online sau telefonic. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'rodinki-kogda-obratitsya-k-dermatologu': {
    sectionsRu: [
      {
        h2: 'Что такое родинки и почему они появляются',
        paragraphs: [
          'Родинки (невусы) — доброкачественные образования кожи, состоящие из меланоцитов (клеток, вырабатывающих пигмент меланин). Большинство родинок безопасны и не требуют удаления.',
          'Родинки появляются в течение жизни: врождённые (присутствуют с рождения, 1% населения), приобретённые (появляются в детстве и юности под влиянием солнца, гормонов). Количество родинок генетически обусловлено.',
          'Факторы, увеличивающие количество родинок: светлая кожа, частое пребывание на солнце, солнечные ожоги (особенно в детстве), наследственность, гормональные изменения (беременность, пубертат).',
        ],
      },
      {
        h2: 'Тревожные признаки изменений родинок',
        paragraphs: [
          'ABCDE правило: A — асимметрия (одна половина отличается от другой), B — края неровные, C — цвет неоднородный, D — диаметр более 6 мм, E — изменение (рост, изменение формы/цвета).',
          'Другие тревожные признаки: кровоточивость без травмы, зуд, жжение, появление корочки, изъязвление, быстрый рост (за несколько месяцев), появление сателлитов (мелких родинок вокруг основной).',
          'Если заметили хотя бы один признак — немедленно к дерматологу. Не ждите "пока само пройдёт" — при меланоме счёт идёт на месяцы.',
        ],
      },
      {
        h2: 'Виды родинок',
        paragraphs: [
          'Пограничный невус — плоская родинка тёмно-коричневого или чёрного цвета, расположена на границе эпидермиса и дермы. Требует наблюдения, так как имеет небольшой риск малигнизации.',
          'Сложный невус — слегка возвышается над кожей, коричневого цвета. Внутридермальный невус — выпуклая родинка телесного или светло-коричневого цвета, часто с волосками. Самый безопасный тип.',
          'Диспластический (атипичный) невус — неправильной формы, неоднородного цвета, более 5 мм. Повышенный риск меланомы, требует регулярного наблюдения (дерматоскопия раз в 6-12 месяцев).',
        ],
      },
      {
        h2: 'Когда нужно удалять родинки',
        paragraphs: [
          'Медицинские показания: подозрение на меланому (по результатам дерматоскопии), травматизация (родинка в месте трения одеждой, бритья), быстрый рост, изменение цвета/формы.',
          'Косметические показания: родинка на лице, шее, в зоне декольте, если причиняет психологический дискомфорт. Удаление только после дерматоскопии и с обязательной гистологией.',
          'Чего избегать: не удаляйте родинки в салонах красоты, не прижигайте народными средствами, не травмируйте. Любое удаление — только у дерматолога с последующей гистологией.',
        ],
      },
      {
        h2: 'Наблюдение за родинками в Meddera',
        paragraphs: [
          'В клинике Meddera проводим дерматоскопию всех подозрительных родинок, фотографируем для наблюдения в динамике, при необходимости — удаление с гистологическим исследованием.',
          'Рекомендуем профилактические осмотры раз в год (при множественных родинках — раз в 6 месяцев). Ведём карту родинок для отслеживания изменений.',
          'Запись на консультацию с дерматоскопией: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este dermatoscopia',
        paragraphs: [
          'Dermatoscopia este o metodă neinvazivă de investigare a neoplasmelor cutanate cu ajutorul dermatoscopului (dispozitiv special cu mărire 10-40x și iluminare). Permite studierea detaliată a structurii aluniţelor, petelor pigmentare, papiloamelor fără biopsie.',
          'Dermatoscopul mărește imaginea și permite vizualizarea structurilor invizibile cu ochiul liber: rețeaua pigmentară, vasele, incluziunile. Acest lucru ajută la distincția între formațiunile benigne și cele suspecte.',
          'Procedura este nedureroasă, durează 5-15 minute, nu necesită pregătire. Medicul examinează toate formațiunile suspecte și le fotografiază pentru monitorizare ulterioară în dinamică.',
        ],
      },
      {
        h2: 'Când este necesară dermatoscopia',
        paragraphs: [
          'Indicații obligatorii: modificarea alunițelor (creștere, schimbarea culorii, formei, sângerare), alunițe asimetrice, alunițe multiple (mai mult de 50), nevusuri atipice, ereditate (melanom la rude).',
          'Examinări preventive: o dată pe an în cazul pielii deschise, expunerii frecvente la soare, arsurilor solare în anamneză, muncii în aer liber.',
          'Înainte de îndepărtare: orice neoplasmă înainte de îndepărtare trebuie examinată cu dermatoscopul pentru a exclude procesul malign.',
        ],
      },
      {
        h2: 'Cum decurge dermatoscopia',
        paragraphs: [
          'Medicul aplică gel sau ulei pe piele (pentru vizualizare mai bună), aplică dermatoscopul pe formațiune și studiază structura acesteia. Dermatoscopele digitale moderne permit salvarea imaginilor pentru comparație la vizitele repetate.',
          'În caz de suspiciune de melanom sau alte formațiuni maligne, medicul trimite pentru biopsie sau îndepărtare cu examen histologic. Dermatoscopia crește acuratețea diagnosticului de melanom până la 90% (față de 60% la examinarea vizuală).',
          'Rezultatul se comunică imediat după examinare. Medicul explică ce formațiuni necesită monitorizare, care — îndepărtare, și când să veniți la vizita de control.',
        ],
      },
      {
        h2: 'Regula ABCDE pentru autoexaminare',
        paragraphs: [
          'A (Asymmetry) — asimetrie: o jumătate a alunițelor diferă de cealaltă. B (Border) — margini: neregulate, estompate, zimțate. C (Color) — culoare: neomogenă (negru, maro, roșu, alb într-o singură aluniță).',
          'D (Diameter) — diametru: mai mult de 6 mm (dimensiunea gumei de pe creion). E (Evolving) — evoluție: alunița se modifică în dimensiune, formă, culoare, începe să sângereze sau să mănânce.',
          'Dacă observați cel puțin un semn — programați-vă pentru dermatoscopie. Diagnosticul precoce al melanomului este critic: la depistarea în stadiu precoce (in situ) supraviețuirea la 5 ani este de 99%.',
        ],
      },
      {
        h2: 'Dermatoscopia la Meddera',
        paragraphs: [
          'La clinica Meddera se utilizează dermatoscop digital cu salvarea imaginilor pentru monitorizare în dinamică. Examinarea este efectuată de un dermatolog experimentat.',
          'Costul dermatoscopiei este inclus în consultația dermatologului (400 MDL primară, 250 MDL repetată). Dacă este necesară îndepărtarea neoplasmei — trimitere pentru histologie.',
          'Programare online sau telefonic. Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'virusnye-zabolevaniya-kozhi-gerpes-borodavki': {
    sectionsRu: [
      {
        h2: 'Герпес: типы и проявления',
        paragraphs: [
          'Герпес простой (HSV): два типа — HSV-1 (чаще поражает губы, лицо) и HSV-2 (генитальный герпес). Проявляется группой пузырьков на красной воспалённой коже, сопровождается жжением, зудом, болью.',
          'Опоясывающий герпес (Herpes zoster): реактивация вируса ветряной оспы. Проявляется односторонними высыпаниями по ходу нерва (чаще на туловище), сильной болью. Чаще у людей старше 50 лет, при сниженном иммунитете.',
          'Первичная инфекция: протекает тяжелее, с лихорадкой, увеличением лимфоузлов. Рецидивы: возникают при стрессе, переохлаждении, снижении иммунитета, менструации. Вирус остаётся в организме пожизненно.',
        ],
      },
      {
        h2: 'Бородавки: виды и локализация',
        paragraphs: [
          'Вульгарные бородавки: плотные узелки с шероховатой поверхностью, чаще на кистях, пальцах. Вызваны вирусом папилломы человека (ВПЧ) типов 2, 4. Передаются контактным путём.',
          'Подошвенные бородавки: болезненные образования на стопах, часто принимают за мозоли. Отличие: при срезании видны чёрные точки (тромбированные капилляры). Затрудняют ходьбу.',
          'Плоские бородавки: мелкие (1-3 мм) плоские узелки телесного цвета, чаще на лице, кистях. Вызваны ВПЧ типов 3, 10. Чаще у детей и подростков.',
        ],
      },
      {
        h2: 'Контагиозный моллюск',
        paragraphs: [
          'Вирусная инфекция, проявляется плотными узелками с пупковидным вдавлением в центре. Чаще у детей (передаётся в детских коллективах), у взрослых — при половом контакте (локализация в паховой области).',
          'Течение: самоизлечение возможно через 6-12 месяцев, но элементы могут распространяться. Рекомендуется удаление для предотвращения распространения и по косметическим соображениям.',
          'Методы удаления: кюретаж (выскабливание), криодеструкция, лазер. Важно обработать все элементы, так как вирус может распространяться на здоровую кожу.',
        ],
      },
      {
        h2: 'Лечение вирусных инфекций кожи',
        paragraphs: [
          'Герпес: противовирусные препараты (ацикловир, валацикловир) внутрь при первичной инфекции, частых рецидивах. Местно — противовирусные кремы при первых признаках. Обезболивающие при опоясывающем герпесе.',
          'Бородавки: деструктивные методы (криодеструкция жидким азотом, лазер, электрокоагуляция), кератолитические средства (салициловая кислота), иммуномодуляторы местно. Выбор метода зависит от локализации и размера.',
          'Профилактика: укрепление иммунитета, избегание контакта с инфицированными, использование индивидуальных полотенец, обуви в общественных местах. Вакцинация от ВПЧ (Гардасил) для профилактики генитальных бородавок.',
        ],
      },
      {
        h2: 'Лечение вирусных инфекций в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение вирусных заболеваний кожи: клинический осмотр, при необходимости — ПЦР-диагностика для определения типа вируса.',
          'Удаление бородавок, контагиозного моллюска современными методами (криодеструкция, лазер). Назначение противовирусной терапии при герпесе.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Herpesul: tipuri și manifestări',
        paragraphs: [
          'Herpes simplex (HSV): două tipuri — HSV-1 (afectează mai des buzele, fața) și HSV-2 (herpes genital). Se manifestă prin grup de vezicule pe piele roșie inflamată, însoțit de arsură, mâncărime, durere.',
          'Herpes zoster: reactivarea virusului varcelei. Se manifestă prin erupții unilaterale de-a lungul nervului (mai des pe trunchi), durere puternică. Mai frecvent la persoanele peste 50 ani, cu imunitate scăzută.',
          'Infecția primară: decurge mai grav, cu febră, mărirea ganglionilor limfatici. Recidive: apar la stress, hipotermie, scăderea imunității, menstruație. Virusul rămâne în organism pe viață.',
        ],
      },
      {
        h2: 'Negii: tipuri și localizare',
        paragraphs: [
          'Negi vulgari: noduli denși cu suprafață aspră, mai des pe mâini, degete. Cauzați de virusul papiloma uman (HPV) tipurile 2, 4. Se transmit prin contact.',
          'Negi plantari: formațiuni dureroase pe tălpi, adesea confundate cu bătături. Diferența: la tăiere se văd puncte negre (capilare trombozate). Îngreunează mersul.',
          'Negi plați: noduli mici (1-3 mm) plați de culoarea pielii, mai des pe față, mâini. Cauzați de HPV tipurile 3, 10. Mai frecvent la copii și adolescenți.',
        ],
      },
      {
        h2: 'Moluscul contagios',
        paragraphs: [
          'Infecție virală, se manifestă prin noduli denși cu depresiune ombilicată în centru. Mai des la copii (se transmite în colectivități), la adulți — la contact sexual (localizare în zona inghinală).',
          'Evoluție: autovindecare posibilă în 6-12 luni, dar elementele pot să se răspândească. Se recomandă îndepărtarea pentru prevenirea răspândirii și din considerente estetice.',
          'Metode de îndepărtare: curetaj (răzuire), criodestrucție, laser. Important să se trateze toate elementele, deoarece virusul poate să se răspândească pe pielea sănătoasă.',
        ],
      },
      {
        h2: 'Tratamentul infecțiilor virale ale pielii',
        paragraphs: [
          'Herpes: preparate antivirale (aciclovir, valaciclovir) intern la infecția primară, recidive frecvente. Local — creme antivirale la primele semne. Analgezice la herpes zoster.',
          'Negi: metode destructive (criodestrucție cu azot lichid, laser, electrocoagulare), keratolitice (acid salicilic), imunomodulatori local. Alegerea metodei depinde de localizare și dimensiune.',
          'Prevenire: întărirea imunității, evitarea contactului cu persoane infectate, folosirea prosoapelor individuale, încălțăminte în locuri publice. Vaccinare HPV (Gardasil) pentru prevenirea negilor genitali.',
        ],
      },
      {
        h2: 'Tratamentul infecțiilor virale la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al bolilor virale ale pielii: examinare clinică, dacă este necesar — diagnostic PCR pentru determinarea tipului de virus.',
          'Îndepărtarea negilor, moluscului contagios prin metode moderne (criodestrucție, laser). Prescrierea terapiei antivirale la herpes.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'rozacea-prichiny-metody-korrekcii': {
    sectionsRu: [
      {
        h2: 'Что такое розацеа',
        paragraphs: [
          'Розацеа — хроническое воспалительное заболевание кожи лица, проявляется покраснением, расширенными сосудами, папулами, пустулами. Чаще у людей со светлой кожей, женщин 30-50 лет.',
          'Причины: точная причина неизвестна. Факторы: генетическая предрасположенность, нарушение сосудистой регуляции, клещ Demodex, нарушение барьерной функции кожи.',
        ],
      },
      {
        h2: 'Методы коррекции розацеа',
        paragraphs: [
          'Местное лечение: метронидазол, азелаиновая кислота, ивермектин. Системное: доксициклин в низких дозах. Лазер: IPL, неодимовый для удаления сосудов.',
          'Уход: мягкие средства без раздражающих компонентов, SPF 30-50 ежедневно, избегание триггеров (солнце, жара, острая пища, алкоголь).',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este rozaceea',
        paragraphs: [
          'Rozaceea este o boală inflamatorie cronică a pielii feței, se manifestă prin roșeață, vase dilatate, papule, pustule. Mai frecvent la persoanele cu piele deschisă, femei 30-50 ani.',
          'Cauze: cauza exactă este necunoscută. Factori: predispoziție genetică, tulburare de reglare vasculară, acarianul Demodex, tulburarea funcției de barieră a pielii.',
        ],
      },
      {
        h2: 'Metode de corecție a rozaceei',
        paragraphs: [
          'Tratament local: metronidazol, acid azelaic, ivermectină. Sistemic: doxiciclină în doze mici. Laser: IPL, neodim pentru îndepărtarea vaselor.',
          'Îngrijire: produse blânde fără componente iritante, SPF 30-50 zilnic, evitarea trigger-ilor (soare, căldură, mâncare picantă, alcool).',
        ],
      },
    ],
  },
  'gribkovye-infekcii-kozhi-diagnostika-lechenie': {
    sectionsRu: [
      {
        h2: 'Виды грибковых инфекций кожи',
        paragraphs: [
          'Грибковые инфекции кожи (микозы) вызываются различными видами грибов: дерматофиты (поражают кожу, ногти, волосы), дрожжевые грибы (кандида), плесневые грибы. Самые распространённые: микоз стоп, онихомикоз (грибок ногтей), отрубевидный лишай, кандидоз кожных складок.',
          'Факторы риска: повышенная потливость, ношение тесной обуви, посещение общественных бассейнов/саун без обуви, сниженный иммунитет, сахарный диабет, приём антибиотиков (нарушают микрофлору).',
        ],
      },
      {
        h2: 'Диагностика и лечение',
        paragraphs: [
          'Диагностика: микроскопия соскоба, посев на питательные среды для определения вида гриба. Лечение: местные противогрибковые средства (кремы, мази), системные препараты при распространённых формах.',
          'Профилактика: гигиена стоп, индивидуальная обувь в общественных местах, укрепление иммунитета.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Tipuri de infecții fungice ale pielii',
        paragraphs: [
          'Infecțiile fungice ale pielii (micoze) sunt cauzate de diferite tipuri de ciuperci: dermatofite (afectează pielea, unghiile, părul), ciuperci de drojdie (candida), ciuperci mucegai.',
          'Factori de risc: transpirație crescută, purtarea încălțămintei strâmte, vizitarea piscinelor/saunelor publice fără încălțăminte, imunitate scăzută, diabet zaharat.',
        ],
      },
      {
        h2: 'Diagnostic și tratament',
        paragraphs: [
          'Diagnostic: microscopie, cultivare pentru determinarea tipului de ciupercă. Tratament: preparate antifungice locale (creme, unguente), preparate sistemice în formele răspândite.',
          'Prevenire: igiena picioarelor, încălțăminte individuală în locuri publice, întărirea imunității.',
        ],
      },
    ],
  },
  'vrosshij-nogot-prichiny-lechenie': {
    sectionsRu: [
      {
        h2: 'Что такое вросший ноготь',
        paragraphs: [
          'Вросший ноготь (онихокриптоз) — состояние, при котором край ногтевой пластины врастает в мягкие ткани ногтевого валика. Чаще поражается большой палец стопы. Сопровождается болью, покраснением, отёком, может присоединиться инфекция.',
          'Стадии: I стадия — боль, покраснение, небольшой отёк. II стадия — присоединение инфекции, гнойное отделяемое. III стадия — хроническое воспаление, разрастание грануляционной ткани ("дикое мясо").',
          'Без лечения вросший ноготь приводит к хроническому воспалению, абсцессу, флегмоне стопы (особенно у диабетиков). Важно обратиться к врачу при первых признаках.',
        ],
      },
      {
        h2: 'Причины врастания ногтя',
        paragraphs: [
          'Неправильная стрижка ногтей: слишком короткая стрижка, закругление углов (правильно — прямая линия, углы чуть выше уровня кожи). Это главная причина врастания.',
          'Тесная обувь: узкий носок сдавливает пальцы, ногтевая пластина деформируется, врастает в кожу. Высокие каблуки усиливают давление на передний отдел стопы.',
          'Травмы: удары, падение тяжестей на палец, спортивные травмы. Грибковые инфекции: утолщение, деформация ногтя. Наследственность: врождённая форма ногтя (слишком выпуклая пластина).',
        ],
      },
      {
        h2: 'Консервативное лечение',
        paragraphs: [
          'Тёплые ванночки: 3-4 раза в день по 15-20 минут (вода с морской солью, ромашкой). Размягчает ткани, снимает воспаление. После ванночки — аккуратно приподнять край ногтя, подложить ватный тампон.',
          'Антисептики: обработка хлоргексидином, мирамистином 2-3 раза в день. Антибактериальные мази: левомеколь, банеоцин при присоединении инфекции. Противовоспалительные: ибупрофен, диклофенак для снятия боли.',
          'Коррекция обуви: носите свободную обувь с широким носком, избегайте каблуков. Правильная стрижка: прямая линия, не закругляйте углы, не стригите слишком коротко.',
        ],
      },
      {
        h2: 'Хирургическое лечение',
        paragraphs: [
          'Показания: II-III стадия, неэффективность консервативного лечения, рецидивы. Методы: частичное удаление ногтевой пластины (резекция вросшего края), полное удаление ногтя (при тяжёлых формах).',
          'Радикальные методы: резекция части ногтевого ложа (матрикса) для предотвращения рецидивов. Лазерная коррекция: испарение части матрикса лазером, низкий риск рецидивов, быстрое заживление.',
          'Процедура: под местной анестезией, амбулаторно, 20-30 минут. Восстановление: 1-2 недели, перевязки, антибиотики при инфекции. Рецидивы: при правильной технике — менее 5%.',
        ],
      },
      {
        h2: 'Лечение вросшего ногтя в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение вросшего ногтя: консервативное лечение на ранних стадиях, хирургическое — при неэффективности или тяжёлых формах.',
          'Консультация включает: оценку стадии, выбор метода лечения, обучение правильной стрижке ногтей для профилактики рецидивов.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este unghia încarnată',
        paragraphs: [
          'Unghia încarnată (onicocriptoză) este o afecțiune în care marginea plăcii unghiale crește în țesuturile moi ale pliurilor unghiale. Mai des este afectat degetul mare al piciorului. Este însoțită de durere, roșeață, edem, poate apărea infecție.',
          'Stadii: stadiul I — durere, roșeață, edem mic. Stadiul II — aderarea infecției, secreție purulentă. Stadiul III — inflamație cronică, proliferarea țesutului de granulație ("carne sălbatică").',
          'Fără tratament, unghia încarnată duce la inflamație cronică, abces, flegmon al piciorului (în special la diabetici). Important să consultați medicul la primele semne.',
        ],
      },
      {
        h2: 'Cauze ale încarnării unghiei',
        paragraphs: [
          'Tăierea incorectă a unghiilor: tăiere prea scurtă, rotunjirea colțurilor (corect — linie dreaptă, colțuri puțin deasupra nivelului pielii). Aceasta este cauza principală a încarnării.',
          'Încălțăminte strâmtă: vârful îngust comprimă degetele, placa unghială se deformează, crește în piele. Tocurile înalte intensifică presiunea pe partea anterioară a piciorului.',
          'Traumatisme: lovituri, căderea obiectelor grele pe deget, traumatisme sportive. Infecții fungice: îngroșarea, deformarea unghiei. Ereditate: forma congenitală a unghiei (placă prea convexă).',
        ],
      },
      {
        h2: 'Tratament conservator',
        paragraphs: [
          'Băi calde: de 3-4 ori pe zi timp de 15-20 minute (apă cu sare marină, mușețel). Înmoaie țesuturile, reduce inflamația. După baie — ridicați cu grijă marginea unghiei, puneți un tampon de vată.',
          'Antiseptice: tratare cu clorhexidină, miramistin de 2-3 ori pe zi. Unguente antibacteriene: levomecol, baneocin la aderarea infecției. Antiinflamatoare: ibuprofen, diclofenac pentru ameliorarea durerii.',
          'Corecția încălțămintei: purtați încălțăminte largă cu vârf lat, evitați tocurile. Tăiere corectă: linie dreaptă, nu rotunjiți colțurile, nu tăiați prea scurt.',
        ],
      },
      {
        h2: 'Tratament chirurgical',
        paragraphs: [
          'Indicații: stadiul II-III, ineficiența tratamentului conservator, recidive. Metode: îndepărtarea parțială a plăcii unghiale (rezecția marginii încarnate), îndepărtarea completă a unghiei (în formele severe).',
          'Metode radicale: rezecția părții patului unghial (matrice) pentru prevenirea recidivelor. Corecție laser: vaporizarea părții de matrice cu laser, risc scăzut de recidive, vindecare rapidă.',
          'Procedura: sub anestezie locală, ambulatoriu, 20-30 minute. Recuperare: 1-2 săptămâni, pansamente, antibiotice la infecție. Recidive: la tehnica corectă — mai puțin de 5%.',
        ],
      },
      {
        h2: 'Tratamentul unghiei încarnate la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al unghiei încarnate: tratament conservator în stadiile timpurii, chirurgical — la ineficiență sau forme severe.',
          'Consultația include: evaluarea stadiului, alegerea metodei de tratament, învățarea tăierii corecte a unghiilor pentru prevenirea recidivelor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'fotostareenie-kozhi-profilaktika': {
    sectionsRu: [
      {
        h2: 'Что такое фотостарение',
        paragraphs: [
          'Фотостарение — преждевременное старение кожи под воздействием ультрафиолетового излучения. Отличается от хронологического старения: появляются пигментные пятна, глубокие морщины, потеря эластичности, расширенные сосуды.',
          'УФ-излучение повреждает ДНК клеток, разрушает коллаген и эластин, стимулирует выработку свободных радикалов. Накопительный эффект: чем больше времени на солнце, тем сильнее фотостарение.',
        ],
      },
      {
        h2: 'Признаки фотостарения',
        paragraphs: [
          'Пигментные пятна (лентиго), неровный тон кожи, глубокие морщины, потеря эластичности, расширенные поры, телеангиэктазии (сосудистые звёздочки), грубая текстура кожи.',
          'Фотостарение чаще проявляется на открытых участках: лицо, шея, декольте, кисти рук. Сравните кожу лица и ягодиц — разница показывает влияние солнца.',
        ],
      },
      {
        h2: 'Профилактика фотостарения',
        paragraphs: [
          'Солнцезащита: SPF 30-50 ежедневно (даже зимой, в пасмурную погоду). Наносите за 15-20 минут до выхода, обновляйте каждые 2 часа. Широкополые шляпы, солнцезащитные очки.',
          'Антиоксиданты: витамин C, E, ресвератрол в косметике и питании. Нейтрализуют свободные радикалы, защищают от повреждений. Ретиноиды: стимулируют обновление кожи, синтез коллагена.',
        ],
      },
      {
        h2: 'Лечение фотостарения',
        paragraphs: [
          'Пилинги: химические (гликолевая, молочная кислота), механические (дермабразия). Удаляют повреждённый слой, стимулируют обновление. Лазер: фракционный, IPL для пигментации и сосудов.',
          'Инъекционные методы: биоревитализация (увлажнение), мезотерапия (витамины, антиоксиданты), филлеры (восстановление объёма). Комплексный подход даёт лучший результат.',
        ],
      },
      {
        h2: 'Профилактика фотостарения в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику фотостарения, подбираем индивидуальную программу профилактики и лечения: косметологические процедуры, домашний уход.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este fotoîmbătrânirea',
        paragraphs: [
          'Fotoîmbătrânirea este îmbătrânirea prematură a pielii sub influența radiației ultraviolete. Diferă de îmbătrânirea cronologică: apar pete pigmentare, riduri profunde, pierderea elasticității, vase dilatate.',
          'Radiația UV deteriorează ADN-ul celulelor, distruge colagenul și elastina, stimulează producția de radicali liberi. Efect cumulativ: cu cât mai mult timp la soare, cu atât fotoîmbătrânirea este mai puternică.',
        ],
      },
      {
        h2: 'Semne de fotoîmbătrânire',
        paragraphs: [
          'Pete pigmentare (lentigo), ton neuniform al pielii, riduri profunde, pierderea elasticității, pori dilatați, telangiectazii (vase dilatate), textură aspră a pielii.',
          'Fotoîmbătrânirea se manifestă mai des pe zonele expuse: față, gât, decolteu, mâini. Comparați pielea feței și feselor — diferența arată influența soarelui.',
        ],
      },
      {
        h2: 'Prevenirea fotoîmbătrânirii',
        paragraphs: [
          'Protecție solară: SPF 30-50 zilnic (chiar și iarna, pe timp înnorat). Aplicați cu 15-20 minute înainte de ieșire, reînnoiți la fiecare 2 ore. Pălării cu boruri largi, ochelari de soare.',
          'Antioxidanți: vitamina C, E, resveratrol în cosmetice și alimentație. Neutralizează radicalii liberi, protejează de deteriorări. Retinoizi: stimulează reînnoirea pielii, sinteza de colagen.',
        ],
      },
      {
        h2: 'Tratamentul fotoîmbătrânirii',
        paragraphs: [
          'Peeling-uri: chimice (acid glicolic, lactic), mecanice (dermabraziune). Îndepărtează stratul deteriorat, stimulează reînnoirea. Laser: fracțional, IPL pentru pigmentare și vase.',
          'Metode injectabile: biorevitalizare (hidratare), mezoterapie (vitamine, antioxidanți), fillere (restabilirea volumului). Abordarea complexă dă cel mai bun rezultat.',
        ],
      },
      {
        h2: 'Prevenirea fotoîmbătrânirii la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic de fotoîmbătrânire, selectăm program individual de prevenire și tratament: proceduri cosmetologice, îngrijire la domiciliu.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'impetigo-bakterialnaya-infekciya-kozhi': {
    sectionsRu: [
      {
        h2: 'Что такое импетиго',
        paragraphs: [
          'Импетиго — бактериальная инфекция кожи, вызванная стафилококками или стрептококками. Проявляется пузырьками с мутным содержимым, которые лопаются и образуют жёлтые корочки. Чаще у детей.',
          'Заразно: передаётся контактным путём (прикосновения, общие полотенца, игрушки). Инкубационный период 1-3 дня. Может распространяться на здоровую кожу при расчёсывании.',
        ],
      },
      {
        h2: 'Виды импетиго',
        paragraphs: [
          'Буллёзное импетиго: крупные пузыри с прозрачным содержимым, после вскрытия — эрозии с обрывками эпидермиса по краям. Небуллёзное: мелкие пузырьки, быстро превращаются в корочки медового цвета.',
          'Локализация: чаще лицо (вокруг носа, рта), конечности. У новорождённых может быть на туловище (эпидемическая пузырчатка новорождённых — опасное состояние).',
        ],
      },
      {
        h2: 'Лечение импетиго',
        paragraphs: [
          'Местное лечение: антибактериальные мази (мупироцин, фузидовая кислота) 2-3 раза в день, 7-10 дней. Удаление корочек: размачивание антисептиками (хлоргексидин), аккуратное снятие.',
          'Системное лечение: антибиотики внутрь (амоксициллин, цефалексин) при распространённых формах, у детей до года, иммунодефиците. Курс 7-10 дней.',
          'Изоляция: не посещать детский сад, школу до исчезновения высыпаний. Индивидуальные полотенца, посуда. Стирка постельного белья при высокой температуре.',
        ],
      },
      {
        h2: 'Профилактика',
        paragraphs: [
          'Гигиена: регулярное мытьё рук, обработка ссадин, царапин антисептиками. Не расчёсывать высыпания (распространение инфекции). Укрепление иммунитета.',
          'В детских коллективах: изоляция больных детей, дезинфекция игрушек, поверхностей. Обучение детей гигиене.',
        ],
      },
      {
        h2: 'Лечение импетиго в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение импетиго: клинический осмотр, при необходимости — бактериологический посев для определения возбудителя и чувствительности к антибиотикам.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este impetigoul',
        paragraphs: [
          'Impetigoul este o infecție bacteriană a pielii, cauzată de stafilococi sau streptococi. Se manifestă prin vezicule cu conținut tulbure, care se sparg și formează cruste galbene. Mai des la copii.',
          'Contagios: se transmite prin contact (atingeri, prosoape comune, jucării). Perioada de incubație 1-3 zile. Poate să se răspândească pe pielea sănătoasă la zgâriere.',
        ],
      },
      {
        h2: 'Tipuri de impetig',
        paragraphs: [
          'Impetig buloasă: vezicule mari cu conținut transparent, după deschidere — eroziuni cu resturi de epidermă la margini. Nebuloasă: vezicule mici, se transformă rapid în cruste de culoarea mierii.',
          'Localizare: mai des fața (în jurul nasului, gurii), membre. La nou-născuți poate fi pe trunchi (pemfigus epidemic al nou-născuților — stare periculoasă).',
        ],
      },
      {
        h2: 'Tratamentul impetigului',
        paragraphs: [
          'Tratament local: unguente antibacteriene (mupirocină, acid fusidic) de 2-3 ori pe zi, 7-10 zile. Îndepărtarea crustelor: înmuiere cu antiseptice (clorhexidină), îndepărtare cu grijă.',
          'Tratament sistemic: antibiotice intern (amoxicilină, cefalexină) în formele răspândite, la copii sub un an, imunodeficiență. Curs 7-10 zile.',
          'Izolare: nu vizitați grădinița, școala până la dispariția erupțiilor. Prosoape, vase individuale. Spălarea lenjeriei de pat la temperatură înaltă.',
        ],
      },
      {
        h2: 'Prevenire',
        paragraphs: [
          'Igienă: spălarea regulată a mâinilor, tratarea zgârieturilor cu antiseptice. Nu zgâriați erupțiile (răspândirea infecției). Întărirea imunității.',
          'În colectivități de copii: izolarea copiilor bolnavi, dezinfectarea jucăriilor, suprafețelor. Învățarea copiilor despre igienă.',
        ],
      },
      {
        h2: 'Tratamentul impetigului la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al impetigului: examinare clinică, dacă este necesar — cultivare bacteriologică pentru determinarea agentului patogen și sensibilitatea la antibiotice.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'krapivnica-prichiny-lechenie': {
    sectionsRu: [
      {
        h2: 'Что такое крапивница',
        paragraphs: [
          'Крапивница — аллергическая реакция, проявляющаяся волдырями на коже, похожими на ожог крапивой. Сопровождается сильным зудом. Волдыри появляются внезапно, держатся несколько часов, исчезают бесследно.',
          'Острая крапивница: длится до 6 недель, чаще связана с аллергией (пища, лекарства, укусы насекомых). Хроническая: более 6 недель, причина часто неясна (идиопатическая крапивница).',
        ],
      },
      {
        h2: 'Причины крапивницы',
        paragraphs: [
          'Аллергены: пища (орехи, морепродукты, яйца, молоко), лекарства (антибиотики, НПВС), укусы насекомых. Физические факторы: холод, тепло, давление, вибрация, солнце, вода.',
          'Инфекции: вирусные, бактериальные, паразитарные. Аутоиммунные заболевания: щитовидная железа, ревматоидный артрит. Стресс: психоэмоциональные факторы могут провоцировать обострения.',
        ],
      },
      {
        h2: 'Лечение крапивницы',
        paragraphs: [
          'Антигистаминные препараты: цетиризин, лоратадин, фексофенадин — основа лечения. Принимать ежедневно, даже если нет высыпаний (профилактика). При недостаточном эффекте — увеличение дозы в 2-4 раза.',
          'Кортикостероиды: короткие курсы (3-7 дней) при тяжёлых обострениях. Длительный приём не рекомендуется (побочные эффекты). Омализумаб: биологический препарат при хронической крапивнице, устойчивой к антигистаминным.',
          'Элиминация триггеров: избегать выявленных аллергенов, физических факторов. Ведение дневника для выявления триггеров.',
        ],
      },
      {
        h2: 'Когда нужна скорая помощь',
        paragraphs: [
          'Ангионевротический отёк (отёк Квинке): отёк губ, языка, горла, затруднение дыхания, глотания. Анафилаксия: падение давления, потеря сознания, удушье. Немедленно вызывайте скорую!',
          'До приезда скорой: антигистаминный препарат, при наличии — автоинжектор с адреналином (EpiPen). Лечь, приподнять ноги.',
        ],
      },
      {
        h2: 'Лечение крапивницы в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику крапивницы: клинический осмотр, аллергологические тесты, анализы крови для выявления причины.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este urticaria',
        paragraphs: [
          'Urticaria este o reacție alergică, manifestată prin urticarie pe piele, asemănătoare cu arsura de urzică. Este însoțită de mâncărime puternică. Urticaria apare brusc, ține câteva ore, dispare fără urmă.',
          'Urticarie acută: durează până la 6 săptămâni, mai des legată de alergie (alimente, medicamente, înțepături de insecte). Cronică: mai mult de 6 săptămâni, cauza adesea neclară (urticarie idiopatică).',
        ],
      },
      {
        h2: 'Cauze ale urticariei',
        paragraphs: [
          'Alergeni: alimente (nuci, fructe de mare, ouă, lapte), medicamente (antibiotice, AINS), înțepături de insecte. Factori fizici: frig, căldură, presiune, vibrație, soare, apă.',
          'Infecții: virale, bacteriene, parazitare. Boli autoimune: tiroidă, artrită reumatoidă. Stress: factori psihoemoționali pot provoca exacerbări.',
        ],
      },
      {
        h2: 'Tratamentul urticariei',
        paragraphs: [
          'Antihistaminice: cetirizină, loratadină, fexofenadină — baza tratamentului. Administrați zilnic, chiar dacă nu există erupții (prevenire). La efect insuficient — creșterea dozei de 2-4 ori.',
          'Corticosteroizi: cure scurte (3-7 zile) la exacerbări severe. Administrarea îndelungată nu este recomandată (efecte secundare). Omalizumab: preparat biologic la urticarie cronică, rezistentă la antihistaminice.',
          'Eliminarea trigger-ilor: evitați alergenii identificați, factorii fizici. Țineți un jurnal pentru identificarea trigger-ilor.',
        ],
      },
      {
        h2: 'Când este necesară ambulanța',
        paragraphs: [
          'Edem angioneurotic (edem Quincke): edem al buzelor, limbii, gâtului, dificultate la respirație, înghițire. Anafilaxie: scăderea presiunii, pierderea conștienței, sufocare. Chemați imediat ambulanța!',
          'Până la sosirea ambulanței: preparat antihistaminic, dacă aveți — autoinjectorul cu adrenalină (EpiPen). Culcați-vă, ridicați picioarele.',
        ],
      },
      {
        h2: 'Tratamentul urticariei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic de urticarie: examinare clinică, teste alergologice, analize de sânge pentru identificarea cauzei.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'atopicheskij-dermatit-uhod-profilaktika': {
    sectionsRu: [
      {
        h2: 'Что такое атопический дерматит',
        paragraphs: [
          'Атопический дерматит (нейродермит, экзема) — хроническое воспалительное заболевание кожи с генетической предрасположенностью. Проявляется сухостью, зудом, экземой. Часто сочетается с бронхиальной астмой, аллергическим ринитом.',
          'Причины: нарушение барьерной функции кожи (дефицит филаггрина), гиперреактивность иммунной системы, аллергены (пищевые, бытовые, пыльцевые).',
        ],
      },
      {
        h2: 'Уход за кожей при атопическом дерматите',
        paragraphs: [
          'Ежедневное увлажнение: эмоленты (кремы, эмульсии) 2-3 раза в день на влажную кожу после душа. Восстанавливают барьерную функцию, уменьшают зуд. Объём: 200-500 г/неделю.',
          'Очищение: мягкие средства без мыла, без отдушек. Душ тёплой (не горячей) водой, 5-10 минут. Промокайте кожу мягким полотенцем, не трите.',
          'Избегайте раздражающих факторов: шерсть, синтетика (носите хлопок), жёсткая вода, стиральные порошки с отдушками, стресс.',
        ],
      },
      {
        h2: 'Лечение обострений',
        paragraphs: [
          'Топические кортикостероиды: гидрокортизон, мометазон курсом 5-10 дней при обострении. Наносить на поражённые участки 1-2 раза в день, затем эмолент.',
          'Ингибиторы кальциневрина: такролимус, пимекролимус для длительного применения на чувствительных зонах (лицо, шея). Не вызывают атрофию кожи.',
          'Антигистаминные: при сильном зуде. Системные кортикостероиды, иммуносупрессоры — при тяжёлых формах под контролем врача.',
        ],
      },
      {
        h2: 'Профилактика обострений',
        paragraphs: [
          'Элиминация аллергенов: гипоаллергенная диета (исключить выявленные аллергены), борьба с пылевыми клещами (стирка постельного белья при 60°C, чехлы на матрасы).',
          'Контроль триггеров: избегайте стресса, переохлаждения, перегревания, потливости. Ведите дневник обострений для выявления индивидуальных триггеров.',
        ],
      },
      {
        h2: 'Лечение атопического дерматита в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение атопического дерматита: клинический осмотр, аллергологические тесты, подбор индивидуальной схемы лечения и ухода.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este dermatita atopică',
        paragraphs: [
          'Dermatita atopică (neurodermită, eczemă) este o boală inflamatorie cronică a pielii cu predispoziție genetică. Se manifestă prin uscăciune, mâncărime, eczemă. Adesea combinată cu astm bronșic, rinită alergică.',
          'Cauze: tulburarea funcției de barieră a pielii (deficit de filagrin), hiperreactivitatea sistemului imunitar, alergeni (alimentari, casnici, polinici).',
        ],
      },
      {
        h2: 'Îngrijirea pielii la dermatita atopică',
        paragraphs: [
          'Hidratare zilnică: emolienti (creme, emulsii) de 2-3 ori pe zi pe pielea umedă după duș. Restabilesc funcția de barieră, reduc mâncărimea. Volum: 200-500 g/săptămână.',
          'Curățare: produse blânde fără săpun, fără parfumuri. Duș cu apă caldă (nu fierbinte), 5-10 minute. Tampona pielea cu prosop moale, nu frecați.',
          'Evitați factorii iritanți: lână, sintetice (purtați bumbac), apă dură, detergenți cu parfumuri, stress.',
        ],
      },
      {
        h2: 'Tratamentul exacerbărilor',
        paragraphs: [
          'Corticosteroizi topici: hidrocortizon, mometazon curs de 5-10 zile la exacerbare. Aplicați pe zonele afectate de 1-2 ori pe zi, apoi emolienți.',
          'Inhibitori de calcineurină: tacrolimus, pimecrolimus pentru aplicare îndelungată pe zone sensibile (față, gât). Nu provoacă atrofia pielii.',
          'Antihistaminice: la mâncărime puternică. Corticosteroizi sistemici, imunosupresoare — în formele severe sub controlul medicului.',
        ],
      },
      {
        h2: 'Prevenirea exacerbărilor',
        paragraphs: [
          'Eliminarea alergenilor: dietă hipoalergenică (excludeți alergenii identificați), combaterea acarienilor de praf (spălarea lenjeriei de pat la 60°C, huse pentru saltele).',
          'Controlul trigger-ilor: evitați stressul, hipotermia, supraîncălzirea, transpirația. Țineți un jurnal al exacerbărilor pentru identificarea trigger-ilor individuali.',
        ],
      },
      {
        h2: 'Tratamentul dermatitei atopice la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al dermatitei atopice: examinare clinică, teste alergologice, selectarea schemei individuale de tratament și îngrijire.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'seboreynyj-dermatit-prichiny-lechenie': {
    sectionsRu: [
      {
        h2: 'Что такое себорейный дерматит',
        paragraphs: [
          'Себорейный дерматит — хроническое воспалительное заболевание кожи, поражающее участки с большим количеством сальных желёз: волосистая часть головы, лицо (брови, носогубные складки), грудь, спина.',
          'Причины: грибы рода Malassezia (питаются кожным салом), повышенная секреция сальных желёз, нарушение иммунитета, стресс, гормональные изменения.',
        ],
      },
      {
        h2: 'Симптомы и диагностика',
        paragraphs: [
          'Проявления: покраснение, шелушение (жирные желтоватые чешуйки), зуд. На волосистой части головы — перхоть. У младенцев — "молочные корочки" на голове.',
          'Диагностика: клинический осмотр. Дифференциальная диагностика с псориазом, атопическим дерматитом, грибковыми инфекциями.',
        ],
      },
      {
        h2: 'Лечение себорейного дерматита',
        paragraphs: [
          'Противогрибковые средства: кетоконазол (шампунь, крем) 2-3 раза в неделю. Цинк пиритион, сульфид селена — альтернативные шампуни. Курс 4-6 недель.',
          'Противовоспалительные: топические кортикостероиды короткими курсами (5-7 дней) при выраженном воспалении. Ингибиторы кальциневрина для длительного применения.',
          'Кератолитики: салициловая кислота для размягчения корочек. Увлажняющие средства для восстановления барьера кожи.',
        ],
      },
      {
        h2: 'Профилактика рецидивов',
        paragraphs: [
          'Регулярное мытьё головы: противогрибковые шампуни 1-2 раза в неделю поддерживающим курсом. Избегайте жирной, острой пищи, алкоголя.',
          'Контроль стресса, достаточный сон, укрепление иммунитета. Не используйте агрессивные средства для кожи.',
        ],
      },
      {
        h2: 'Лечение себорейного дерматита в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение себорейного дерматита: клинический осмотр, подбор индивидуальной схемы лечения.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este dermatita seboreică',
        paragraphs: [
          'Dermatita seboreică este o boală inflamatorie cronică a pielii, afectând zonele cu multe glande sebacee: partea păroasă a capului, fața (sprâncene, pliuri nazolabiale), piept, spate.',
          'Cauze: ciuperci Malassezia (se hrănesc cu sebum), secreție crescută a glandelor sebacee, tulburare de imunitate, stress, modificări hormonale.',
        ],
      },
      {
        h2: 'Simptome și diagnostic',
        paragraphs: [
          'Manifestări: roșeață, descuamare (solzi gălbui grași), mâncărime. Pe partea păroasă a capului — mătreață. La sugari — "cruste de lapte" pe cap.',
          'Diagnostic: examinare clinică. Diagnostic diferențial cu psoriazisul, dermatita atopică, infecții fungice.',
        ],
      },
      {
        h2: 'Tratamentul dermatitei seboreice',
        paragraphs: [
          'Preparate antifungice: ketoconazol (șampon, cremă) de 2-3 ori pe săptămână. Zinc pirition, sulfură de seleniu — șampoane alternative. Curs 4-6 săptămâni.',
          'Antiinflamatoare: corticosteroizi topici în cure scurte (5-7 zile) la inflamație pronunțată. Inhibitori de calcineurină pentru aplicare îndelungată.',
          'Keratolotice: acid salicilic pentru înmuierea crustelor. Emolienti pentru restabilirea barierei pielii.',
        ],
      },
      {
        h2: 'Prevenirea recidivelor',
        paragraphs: [
          'Spălarea regulată a capului: șampoane antifungice de 1-2 ori pe săptămână curs de întreținere. Evitați mâncarea grasă, picantă, alcoolul.',
          'Controlul stressului, somn suficient, întărirea imunității. Nu folosiți produse agresive pentru piele.',
        ],
      },
      {
        h2: 'Tratamentul dermatitei seboreice la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al dermatitei seboreice: examinare clinică, selectarea schemei individuale de tratament.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'kontaktnyj-dermatit-allergiya-razdrazhenie': {
    sectionsRu: [
      {
        h2: 'Виды контактного дерматита',
        paragraphs: [
          'Простой контактный дерматит: реакция на раздражающее вещество (кислоты, щёлочи, растворители, моющие средства). Развивается сразу после контакта. Не требует предварительной сенсибилизации.',
          'Аллергический контактный дерматит: реакция на аллерген (никель, латекс, косметика, лекарства). Развивается через 24-48 часов после контакта. Требует предварительной сенсибилизации (первый контакт без реакции).',
        ],
      },
      {
        h2: 'Симптомы и диагностика',
        paragraphs: [
          'Простой: покраснение, отёк, пузыри, боль в месте контакта. Чёткие границы. Аллергический: покраснение, зуд, пузырьки, может выходить за пределы контакта.',
          'Диагностика: клинический осмотр, анамнез (связь с контактом). Патч-тесты (аппликационные пробы) для выявления аллергенов при аллергическом дерматите.',
        ],
      },
      {
        h2: 'Лечение контактного дерматита',
        paragraphs: [
          'Элиминация раздражителя/аллергена: главный принцип. Избегайте контакта с выявленным веществом. Местное лечение: топические кортикостероиды 5-10 дней, увлажняющие средства.',
          'Системное лечение: антигистаминные при зуде. Системные кортикостероиды короткими курсами при тяжёлых формах.',
        ],
      },
      {
        h2: 'Профилактика',
        paragraphs: [
          'Защита кожи: перчатки при работе с раздражающими веществами, защитные кремы. Выбор гипоаллергенной косметики, бытовой химии.',
          'Тестирование новых средств: наносите на небольшой участок кожи, наблюдайте 24-48 часов перед полным применением.',
        ],
      },
      {
        h2: 'Лечение контактного дерматита в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику контактного дерматита: клинический осмотр, патч-тесты для выявления аллергенов.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Tipuri de dermatită de contact',
        paragraphs: [
          'Dermatită de contact simplă: reacție la substanță iritantă (acizi, alcaline, solvenți, detergenți). Se dezvoltă imediat după contact. Nu necesită sensibilizare prealabilă.',
          'Dermatită de contact alergică: reacție la alergen (nichel, latex, cosmetice, medicamente). Se dezvoltă în 24-48 ore după contact. Necesită sensibilizare prealabilă (primul contact fără reacție).',
        ],
      },
      {
        h2: 'Simptome și diagnostic',
        paragraphs: [
          'Simplă: roșeață, edem, vezicule, durere în locul de contact. Margini clare. Alergică: roșeață, mâncărime, vezicule, poate depăși limitele contactului.',
          'Diagnostic: examinare clinică, anamneză (legătura cu contactul). Teste patch (probe de aplicație) pentru identificarea alergenilor în dermatita alergică.',
        ],
      },
      {
        h2: 'Tratamentul dermatitei de contact',
        paragraphs: [
          'Eliminarea iritantului/alergenului: principiu principal. Evitați contactul cu substanța identificată. Tratament local: corticosteroizi topici 5-10 zile, emolienti.',
          'Tratament sistemic: antihistaminice la mâncărime. Corticosteroizi sistemici în cure scurte în formele severe.',
        ],
      },
      {
        h2: 'Prevenire',
        paragraphs: [
          'Protecția pielii: mănuși la lucrul cu substanțe iritante, creme protectoare. Alegerea cosmeticelor hipoalergenice, produse chimice de uz casnic.',
          'Testarea produselor noi: aplicați pe o zonă mică a pielii, observați 24-48 ore înainte de aplicarea completă.',
        ],
      },
      {
        h2: 'Tratamentul dermatitei de contact la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic de dermatită de contact: examinare clinică, teste patch pentru identificarea alergenilor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'vitiligo-chto-eto-mozhno-li-lechit': {
    sectionsRu: [
      {
        h2: 'Что такое витилиго',
        paragraphs: [
          'Витилиго — заболевание, при котором разрушаются меланоциты (клетки, вырабатывающие пигмент меланин). На коже появляются белые пятна без пигмента. Не заразно, не опасно для жизни, но вызывает психологический дискомфорт.',
          'Причины: точная причина неизвестна. Предполагается аутоиммунный механизм (иммунная система атакует меланоциты). Факторы: генетическая предрасположенность, стресс, травмы кожи, аутоиммунные заболевания.',
        ],
      },
      {
        h2: 'Можно ли вылечить витилиго',
        paragraphs: [
          'Полное излечение невозможно, но можно добиться репигментации (восстановления пигмента) в 50-70% случаев. Лечение длительное (6-12 месяцев), требует терпения.',
          'Методы лечения: фототерапия (узкополосный UVB 311 нм) 2-3 раза в неделю. Топические кортикостероиды, ингибиторы кальциневрина. Эксимерный лазер для локальных пятен.',
        ],
      },
      {
        h2: 'Лечение витилиго',
        paragraphs: [
          'Фототерапия: наиболее эффективный метод. Курс 20-50 сеансов. Лучше работает на лице, туловище, хуже — на кистях, стопах. Местное лечение: такролимус 0.1% 2 раза в день + фототерапия.',
          'Системное лечение: кортикостероиды короткими курсами при прогрессирующем витилиго. Хирургические методы: трансплантация меланоцитов при стабильном витилиго (нет новых пятен >1 года).',
        ],
      },
      {
        h2: 'Уход и профилактика',
        paragraphs: [
          'Солнцезащита: SPF 50+ на депигментированные участки (нет защиты от солнца, высокий риск ожогов). Избегайте травм кожи (феномен Кёбнера — новые пятна на месте травм).',
          'Маскировка: тональные средства, автозагар для косметической коррекции. Психологическая поддержка: витилиго не опасно, но может влиять на самооценку.',
        ],
      },
      {
        h2: 'Лечение витилиго в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение витилиго: клинический осмотр, лампа Вуда для выявления скрытых пятен, подбор индивидуальной схемы лечения.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este vitiligo',
        paragraphs: [
          'Vitiligo este o boală în care se distrug melanocitele (celule care produc pigmentul melanină). Pe piele apar pete albe fără pigment. Nu este contagioasă, nu este periculoasă pentru viață, dar provoacă disconfort psihologic.',
          'Cauze: cauza exactă este necunoscută. Se presupune mecanism autoimun (sistemul imunitar atacă melanocitele). Factori: predispoziție genetică, stress, traumatisme ale pielii, boli autoimune.',
        ],
      },
      {
        h2: 'Se poate vindeca vitiligo',
        paragraphs: [
          'Vindecarea completă este imposibilă, dar se poate obține repigmentare (restabilirea pigmentului) în 50-70% din cazuri. Tratamentul este îndelungat (6-12 luni), necesită răbdare.',
          'Metode de tratament: fototerapie (UVB cu bandă îngustă 311 nm) de 2-3 ori pe săptămână. Corticosteroizi topici, inhibitori de calcineurină. Laser excimer pentru pete locale.',
        ],
      },
      {
        h2: 'Tratamentul vitiligo',
        paragraphs: [
          'Fototerapie: metoda cea mai eficientă. Curs de 20-50 ședințe. Funcționează mai bine pe față, trunchi, mai slab — pe mâini, picioare. Tratament local: tacrolimus 0.1% de 2 ori pe zi + fototerapie.',
          'Tratament sistemic: corticosteroizi în cure scurte la vitiligo progresiv. Metode chirurgicale: transplantul de melanocite la vitiligo stabil (fără pete noi >1 an).',
        ],
      },
      {
        h2: 'Îngrijire și prevenire',
        paragraphs: [
          'Protecție solară: SPF 50+ pe zonele depigmentate (fără protecție de soare, risc mare de arsuri). Evitați traumatismele pielii (fenomenul Koebner — pete noi la locul traumatismelor).',
          'Mascare: produse tonale, autobronzant pentru corecție cosmetică. Suport psihologic: vitiligo nu este periculos, dar poate afecta stima de sine.',
        ],
      },
      {
        h2: 'Tratamentul vitiligo la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al vitiligo: examinare clinică, lampă Wood pentru detectarea petelor ascunse, selectarea schemei individuale de tratament.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'papillomy-borodavki-udalenie-beltsy': {
    sectionsRu: [
      {
        h2: 'Папилломы и бородавки: в чём разница',
        paragraphs: [
          'Оба вызваны вирусом папилломы человека (ВПЧ), но разными типами. Бородавки: плотные узелки с шероховатой поверхностью (ВПЧ 2, 4). Папилломы: мягкие образования на ножке (ВПЧ 6, 11).',
          'Локализация: бородавки — кисти, стопы. Папилломы — шея, подмышки, паховая область. Заразны: передаются контактным путём, через микротравмы кожи.',
        ],
      },
      {
        h2: 'Методы удаления',
        paragraphs: [
          'Криодеструкция: замораживание жидким азотом. Эффективно для бородавок. 1-3 процедуры. Образуется пузырь, через 7-10 дней отпадает. Лазер: CO2, эрбиевый. Точное удаление, минимальный риск рубцов.',
          'Электрокоагуляция: прижигание электрическим током. Хирургическое иссечение: при крупных образованиях. Химическая деструкция: кислоты (салициловая, трихлоруксусная) — самостоятельно дома, длительно.',
        ],
      },
      {
        h2: 'Показания к удалению',
        paragraphs: [
          'Косметический дефект, травматизация (трение одеждой, бритьём), быстрый рост, изменение цвета/формы, множественные образования.',
          'Важно: любое новообразование перед удалением должно быть осмотрено дерматологом для исключения злокачественного процесса.',
        ],
      },
      {
        h2: 'Профилактика рецидивов',
        paragraphs: [
          'Укрепление иммунитета: вирус остаётся в организме, при снижении иммунитета могут появиться новые образования. Гигиена: не травмируйте кожу, используйте индивидуальные полотенца, обувь.',
          'Вакцинация: Гардасил защищает от ВПЧ 6, 11, 16, 18 (профилактика папиллом, генитальных бородавок, рака шейки матки).',
        ],
      },
      {
        h2: 'Удаление папиллом и бородавок в Meddera',
        paragraphs: [
          'В клинике Meddera проводим удаление папиллом и бородавок современными методами: криодеструкция, лазер. Процедура амбулаторно, под местной анестезией.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Papiloame și negi: care este diferența',
        paragraphs: [
          'Ambele sunt cauzate de virusul papiloma uman (HPV), dar de tipuri diferite. Negi: noduli denși cu suprafață aspră (HPV 2, 4). Papiloame: formațiuni moi pe picior (HPV 6, 11).',
          'Localizare: negi — mâini, picioare. Papiloame — gât, axile, zona inghinală. Contagioase: se transmit prin contact, prin microtraumatisme ale pielii.',
        ],
      },
      {
        h2: 'Metode de îndepărtare',
        paragraphs: [
          'Criodestrucție: congelare cu azot lichid. Eficient pentru negi. 1-3 proceduri. Se formează veziculă, în 7-10 zile cade. Laser: CO2, erbiu. Îndepărtare precisă, risc minim de cicatrici.',
          'Electrocoagulare: cauterizare cu curent electric. Excizare chirurgicală: la formațiuni mari. Distrugere chimică: acizi (salicilic, tricloracetic) — independent acasă, îndelungat.',
        ],
      },
      {
        h2: 'Indicații pentru îndepărtare',
        paragraphs: [
          'Defect cosmetic, traumatizare (frecare de îmbrăcăminte, bărbierit), creștere rapidă, schimbarea culorii/formei, formațiuni multiple.',
          'Important: orice neoplasmă înainte de îndepărtare trebuie examinată de dermatolog pentru excluderea procesului malign.',
        ],
      },
      {
        h2: 'Prevenirea recidivelor',
        paragraphs: [
          'Întărirea imunității: virusul rămâne în organism, la scăderea imunității pot apărea formațiuni noi. Igienă: nu traumatizați pielea, folosiți prosoape individuale, încălțăminte.',
          'Vaccinare: Gardasil protejează de HPV 6, 11, 16, 18 (prevenirea papiloamelor, negilor genitali, cancerului de col uterin).',
        ],
      },
      {
        h2: 'Îndepărtarea papiloamelor și negilor la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm îndepărtarea papiloamelor și negilor prin metode moderne: criodestrucție, laser. Procedura ambulatoriu, sub anestezie locală.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'keratomy-chto-eto-nuzhno-li-udalyat': {
    sectionsRu: [
      {
        h2: 'Что такое кератомы',
        paragraphs: [
          'Кератомы — доброкачественные образования кожи, связанные с избыточным ороговением. Чаще у людей старше 40 лет. Виды: себорейная кератома (коричневые бляшки с жирными чешуйками), актинический кератоз (шероховатые пятна на открытых участках), кератопапиллома.',
          'Причины: возрастные изменения, солнечное излучение (актинический кератоз), генетическая предрасположенность. Не заразны.',
        ],
      },
      {
        h2: 'Нужно ли удалять кератомы',
        paragraphs: [
          'Себорейная кератома: доброкачественная, не перерождается в рак. Удаление по косметическим показаниям или при травматизации. Актинический кератоз: предраковое состояние, может перейти в плоскоклеточный рак (10-15% случаев). Рекомендуется удаление.',
          'Показания к удалению: быстрый рост, изменение цвета/формы, кровоточивость, зуд, косметический дефект.',
        ],
      },
      {
        h2: 'Методы удаления кератом',
        paragraphs: [
          'Криодеструкция: замораживание жидким азотом. Эффективно для себорейных кератом. Лазер: CO2, эрбиевый. Точное удаление, минимальный риск рубцов. Электрокоагуляция: прижигание.',
          'Хирургическое иссечение: при подозрении на злокачественность (обязательна гистология). Химическая деструкция: трихлоруксусная кислота для актинических кератозов.',
        ],
      },
      {
        h2: 'Профилактика',
        paragraphs: [
          'Солнцезащита: SPF 30-50 ежедневно (особенно для профилактики актинических кератозов). Избегайте солнца 11-16 часов. Регулярные осмотры: у дерматолога раз в год при множественных кератомах.',
        ],
      },
      {
        h2: 'Удаление кератом в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и удаление кератом: дерматоскопия для оценки характера образования, удаление современными методами, гистология при необходимости.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce sunt keratoamele',
        paragraphs: [
          'Keratoamele sunt formațiuni benigne ale pielii, legate de keratinizare excesivă. Mai des la persoane peste 40 ani. Tipuri: keratom seboreic (plăci brune cu solzi grași), keratoză actinică (pete aspre pe zone expuse), keratopapilom.',
          'Cauze: modificări legate de vârstă, radiație solară (keratoză actinică), predispoziție genetică. Nu sunt contagioase.',
        ],
      },
      {
        h2: 'Este necesar să îndepărtați keratoamele',
        paragraphs: [
          'Keratom seboreic: benign, nu se transformă în cancer. Îndepărtare din motive cosmetice sau la traumatizare. Keratoză actinică: stare precanceroasă, poate trece în cancer scuamos (10-15% din cazuri). Se recomandă îndepărtarea.',
          'Indicații pentru îndepărtare: creștere rapidă, schimbarea culorii/formei, sângerare, mâncărime, defect cosmetic.',
        ],
      },
      {
        h2: 'Metode de îndepărtare a keratoamelor',
        paragraphs: [
          'Criodestrucție: congelare cu azot lichid. Eficient pentru keratoamele seboreice. Laser: CO2, erbiu. Îndepărtare precisă, risc minim de cicatrici. Electrocoagulare: cauterizare.',
          'Excizare chirurgicală: la suspiciune de malignitate (histologie obligatorie). Distrugere chimică: acid tricloracetic pentru keratozele actinice.',
        ],
      },
      {
        h2: 'Prevenire',
        paragraphs: [
          'Protecție solară: SPF 30-50 zilnic (în special pentru prevenirea keratozelor actinice). Evitați soarele 11-16 ore. Examinări regulate: la dermatolog o dată pe an la keratoame multiple.',
        ],
      },
      {
        h2: 'Îndepărtarea keratoamelor la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și îndepărtare a keratoamelor: dermatoscopie pentru evaluarea naturii formațiunii, îndepărtare prin metode moderne, histologie dacă este necesar.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'alopeciya-vypadenie-volos-prichiny': {
    sectionsRu: [
      {
        h2: 'Виды алопеции',
        paragraphs: [
          'Андрогенетическая алопеция: наследственное выпадение волос под влиянием гормонов (дигидротестостерон). У мужчин — залысины, теменная зона. У женщин — диффузное поредение в теменной области.',
          'Очаговая алопеция (гнёздная): аутоиммунное заболевание, круглые очаги облысения. Диффузная алопеция: равномерное выпадение по всей голове (стресс, дефициты, гормоны, лекарства).',
        ],
      },
      {
        h2: 'Причины выпадения волос',
        paragraphs: [
          'Гормональные: андрогены (андрогенетическая алопеция), щитовидная железа (гипо/гипертиреоз), послеродовый период. Дефициты: железо, цинк, витамин D, B12, белок.',
          'Стресс: физический (операции, инфекции), эмоциональный. Лекарства: химиотерапия, антикоагулянты, ретиноиды. Заболевания кожи: себорейный дерматит, псориаз, грибковые инфекции.',
        ],
      },
      {
        h2: 'Диагностика',
        paragraphs: [
          'Клинический осмотр: оценка типа выпадения, состояния кожи головы. Трихоскопия: исследование волос под увеличением. Анализы: общий анализ крови, ферритин, витамин D, гормоны щитовидной железы, половые гормоны.',
          'Биопсия кожи головы: при неясном диагнозе (очаговая алопеция, рубцовая алопеция).',
        ],
      },
      {
        h2: 'Лечение алопеции',
        paragraphs: [
          'Андрогенетическая: миноксидил 2-5% (наружно), финастерид 1 мг (мужчины, внутрь), PRP-терапия, мезотерапия. Очаговая: кортикостероиды (местно, инъекции, внутрь), иммуносупрессоры.',
          'Диффузная: устранение причины (коррекция дефицитов, отмена препаратов, лечение заболеваний). Трансплантация волос: при андрогенетической алопеции с достаточной донорской зоной.',
        ],
      },
      {
        h2: 'Лечение алопеции в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение алопеции: клинический осмотр, трихоскопия, направление на анализы, подбор индивидуальной схемы лечения.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Tipuri de alopecie',
        paragraphs: [
          'Alopecie androgenetică: căderea ereditară a părului sub influența hormonilor (dihidrotestosteron). La bărbați — chel, zona parietală. La femei — rărire difuză în zona parietală.',
          'Alopecie areată (în cuib): boală autoimună, focare rotunde de chelie. Alopecie difuză: cădere uniformă pe tot capul (stress, deficiențe, hormoni, medicamente).',
        ],
      },
      {
        h2: 'Cauze ale căderii părului',
        paragraphs: [
          'Hormonale: androgeni (alopecie androgenetică), tiroidă (hipo/hipertiroidism), perioada postpartum. Deficiențe: fier, zinc, vitamina D, B12, proteine.',
          'Stress: fizic (operații, infecții), emoțional. Medicamente: chimioterapie, anticoagulante, retinoizi. Boli ale pielii: dermatită seboreică, psoriazis, infecții fungice.',
        ],
      },
      {
        h2: 'Diagnostic',
        paragraphs: [
          'Examinare clinică: evaluarea tipului de cădere, starea pielii capului. Trichoscopie: studiul părului sub mărire. Analize: hemoleucogramă, feritină, vitamina D, hormoni tiroidieni, hormoni sexuali.',
          'Biopsie a pielii capului: la diagnostic neclar (alopecie areată, alopecie cicatricială).',
        ],
      },
      {
        h2: 'Tratamentul alopeciei',
        paragraphs: [
          'Androgenetică: minoxidil 2-5% (extern), finasterid 1 mg (bărbați, intern), terapie PRP, mezoterapie. Areată: corticosteroizi (local, injecții, intern), imunosupresoare.',
          'Difuză: eliminarea cauzei (corecția deficiențelor, oprirea medicamentelor, tratarea bolilor). Transplant de păr: la alopecie androgenetică cu zonă donatoare suficientă.',
        ],
      },
      {
        h2: 'Tratamentul alopeciei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al alopeciei: examinare clinică, trichoscopie, trimitere pentru analize, selectarea schemei individuale de tratament.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'seboreya-kozhi-golovy-lechenie': {
    sectionsRu: [
      {
        h2: 'Что такое себорея кожи головы',
        paragraphs: [
          'Себорея — нарушение работы сальных желёз с повышенной (жирная себорея) или пониженной (сухая себорея) секрецией кожного сала. Жирная себорея: волосы быстро жирнеют, перхоть, зуд. Сухая: сухость, ломкость волос, мелкая перхоть.',
          'Причины: гормональные изменения (пубертат, беременность), грибы Malassezia, стресс, неправильный уход.',
        ],
      },
      {
        h2: 'Лечение себореи',
        paragraphs: [
          'Противогрибковые шампуни: кетоконазол, цинк пиритион, сульфид селена 2-3 раза в неделю. Кератолитики: салициловая кислота для удаления чешуек. Противовоспалительные: топические кортикостероиды короткими курсами.',
          'Системное лечение: при тяжёлых формах — антиандрогены (женщины), ретиноиды (изотретиноин) под контролем врача.',
        ],
      },
      {
        h2: 'Уход за кожей головы',
        paragraphs: [
          'Мытьё головы: по мере загрязнения (при жирной себорее — ежедневно). Избегайте горячей воды, агрессивных шампуней. Массаж кожи головы: улучшает кровообращение.',
          'Питание: ограничьте жирное, острое, сладкое. Увеличьте овощи, фрукты, омега-3.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este seboreea pielii capului',
        paragraphs: [
          'Seboreea este o tulburare a funcționării glandelor sebacee cu secreție crescută (seboree grasă) sau scăzută (seboree uscată) de sebum. Seboree grasă: părul se îngrașă rapid, mătreață, mâncărime. Uscată: uscăciune, fragilitate a părului, mătreață fină.',
          'Cauze: modificări hormonale (pubertate, sarcină), ciuperci Malassezia, stress, îngrijire incorectă.',
        ],
      },
      {
        h2: 'Tratamentul seboreei',
        paragraphs: [
          'Șampoane antifungice: ketoconazol, zinc pirition, sulfură de seleniu de 2-3 ori pe săptămână. Keratolotice: acid salicilic pentru îndepărtarea solzilor. Antiinflamatoare: corticosteroizi topici în cure scurte.',
          'Tratament sistemic: în formele severe — antiandrogeni (femei), retinoizi (isotretinoină) sub controlul medicului.',
        ],
      },
      {
        h2: 'Îngrijirea pielii capului',
        paragraphs: [
          'Spălarea capului: pe măsură ce se murdărește (la seboree grasă — zilnic). Evitați apa fierbinte, șampoane agresive. Masaj al pielii capului: îmbunătățește circulația.',
          'Alimentație: limitați grasul, picantul, dulcele. Măriți legumele, fructele, omega-3.',
        ],
      },
    ],
  },
  'onikhomikoz-gribok-nogtej-lechenie': {
    sectionsRu: [
      {
        h2: 'Что такое онихомикоз',
        paragraphs: [
          'Онихомикоз — грибковая инфекция ногтей, вызванная дерматофитами, дрожжевыми или плесневыми грибами. Чаще поражаются ногти стоп. Проявления: изменение цвета (жёлтый, белый, коричневый), утолщение, крошение, отслоение ногтя.',
          'Факторы риска: возраст (старше 60 лет), сахарный диабет, иммунодефицит, травмы ногтей, ношение тесной обуви, посещение общественных бассейнов без обуви.',
        ],
      },
      {
        h2: 'Диагностика',
        paragraphs: [
          'Микроскопия: соскоб с ногтя изучают под микроскопом. Посев: определяет вид гриба, чувствительность к препаратам. Важно для выбора эффективного лечения.',
        ],
      },
      {
        h2: 'Лечение онихомикоза',
        paragraphs: [
          'Местное лечение: противогрибковые лаки (аморолфин, циклопирокс) 1-2 раза в неделю, 6-12 месяцев. Эффективны при поражении менее 50% ногтя.',
          'Системное лечение: тербинафин, итраконазол, флуконазол внутрь. Курс 2-4 месяца (ногти стоп), 6 недель (ногти кистей). Обязательно при поражении более 50% ногтя, матрикса.',
          'Комбинированное лечение: системные + местные препараты. Механическое удаление поражённой части ногтя (спиливание) для лучшего проникновения препаратов.',
        ],
      },
      {
        h2: 'Профилактика',
        paragraphs: [
          'Гигиена стоп: ежедневное мытьё, тщательное высушивание между пальцами. Индивидуальная обувь в бассейнах, саунах. Обработка обуви противогрибковыми спреями.',
          'Своевременное лечение микоза стоп (грибок кожи часто переходит на ногти). Контроль сахарного диабета.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este onicomicoza',
        paragraphs: [
          'Onicomicoza este o infecție fungică a unghiilor, cauzată de dermatofite, ciuperci de drojdie sau mucegai. Mai des sunt afectate unghiile picioarelor. Manifestări: schimbarea culorii (galben, alb, maro), îngroșare, sfărâmare, dezlipire a unghiei.',
          'Factori de risc: vârstă (peste 60 ani), diabet zaharat, imunodeficiență, traumatisme ale unghiilor, purtarea încălțămintei strâmte, vizitarea piscinelor publice fără încălțăminte.',
        ],
      },
      {
        h2: 'Diagnostic',
        paragraphs: [
          'Microscopie: raclura de pe unghie se studiază la microscop. Cultivare: determină tipul de ciupercă, sensibilitatea la preparate. Important pentru alegerea tratamentului eficient.',
        ],
      },
      {
        h2: 'Tratamentul onicomicozei',
        paragraphs: [
          'Tratament local: lacuri antifungice (amorolfină, ciclopirox) de 1-2 ori pe săptămână, 6-12 luni. Eficiente la afectarea mai puțin de 50% din unghie.',
          'Tratament sistemic: terbinafină, itraconazol, fluconazol intern. Curs 2-4 luni (unghii picioare), 6 săptămâni (unghii mâini). Obligatoriu la afectarea mai mult de 50% din unghie, matrice.',
          'Tratament combinat: preparate sistemice + locale. Îndepărtarea mecanică a părții afectate a unghiei (pilire) pentru penetrare mai bună a preparatelor.',
        ],
      },
      {
        h2: 'Prevenire',
        paragraphs: [
          'Igiena picioarelor: spălare zilnică, uscare amănunțită între degete. Încălțăminte individuală în piscine, saune. Tratarea încălțămintei cu spray-uri antifungice.',
          'Tratamentul în timp util al micozei picioarelor (ciuperca pielii trece adesea pe unghii). Controlul diabetului zaharat.',
        ],
      },
    ],
  },
  'gipergidroz-lechenie-beltsy': {
    sectionsRu: [
      {
        h2: 'Что такое гипергидроз',
        paragraphs: [
          'Гипергидроз — повышенная потливость, превышающая потребности терморегуляции. Первичный гипергидроз: без видимой причины, чаще подмышки, ладони, стопы, лицо. Вторичный: симптом заболевания (гипертиреоз, диабет, инфекции, опухоли).',
          'Влияет на качество жизни: мокрая одежда, неприятный запах, социальный дискомфорт, ограничения в профессии.',
        ],
      },
      {
        h2: 'Методы лечения гипергидроза',
        paragraphs: [
          'Антиперспиранты: хлорид алюминия 15-25% на ночь на сухую кожу. Блокируют протоки потовых желёз. Эффект временный, требует регулярного применения.',
          'Ботулотоксин: инъекции в зону гипергидроза блокируют сигналы к потовым железам. Эффект 6-12 месяцев. Наиболее эффективный метод для подмышек.',
          'Ионофорез: воздействие слабым электрическим током через воду. Курс 10-20 процедур, поддерживающие — раз в 1-2 недели. Эффективен для ладоней, стоп.',
        ],
      },
      {
        h2: 'Хирургические методы',
        paragraphs: [
          'Симпатэктомия: пересечение симпатических нервов (для ладоней). Эффективно, но риск компенсаторного гипергидроза (усиление потливости в других зонах).',
          'Кюретаж подмышек: удаление потовых желёз. Эффект постоянный, но инвазивно, риск рубцов.',
        ],
      },
      {
        h2: 'Профилактика и уход',
        paragraphs: [
          'Гигиена: душ 1-2 раза в день, антибактериальное мыло (снижает запах). Одежда из натуральных тканей (хлопок, лён), свободного кроя. Избегайте острой пищи, кофеина, алкоголя (усиливают потоотделение).',
        ],
      },
      {
        h2: 'Лечение гипергидроза в Meddera',
        paragraphs: [
          'В клинике Meddera проводим лечение гипергидроза: инъекции ботулотоксина (наиболее эффективный метод), подбор антиперспирантов.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este hiperhidroza',
        paragraphs: [
          'Hiperhidroza este transpirație excesivă, depășind necesitățile de termoreglare. Hiperhidroză primară: fără cauză vizibilă, mai des axile, palme, tălpi, față. Secundară: simptom al bolii (hipertiroidism, diabet, infecții, tumori).',
          'Afectează calitatea vieții: haine umede, miros neplăcut, disconfort social, limitări în profesie.',
        ],
      },
      {
        h2: 'Metode de tratament al hiperhidrozei',
        paragraphs: [
          'Antiperspirante: clorură de aluminiu 15-25% noaptea pe piele uscată. Blochează canalele glandelor sudoripare. Efect temporar, necesită aplicare regulată.',
          'Toxină botulinică: injecții în zona de hiperhidroză blochează semnalele către glandele sudoripare. Efect 6-12 luni. Metoda cea mai eficientă pentru axile.',
          'Ionoforeză: acțiunea curentului electric slab prin apă. Curs de 10-20 proceduri, întreținere — o dată la 1-2 săptămâni. Eficient pentru palme, tălpi.',
        ],
      },
      {
        h2: 'Metode chirurgicale',
        paragraphs: [
          'Simpatectomie: secționarea nervilor simpatici (pentru palme). Eficient, dar risc de hiperhidroză compensatorie (intensificarea transpirației în alte zone).',
          'Curetaj axile: îndepărtarea glandelor sudoripare. Efect permanent, dar invaziv, risc de cicatrici.',
        ],
      },
      {
        h2: 'Prevenire și îngrijire',
        paragraphs: [
          'Igienă: duș de 1-2 ori pe zi, săpun antibacterian (reduce mirosul). Îmbrăcăminte din țesături naturale (bumbac, in), croială largă. Evitați mâncarea picantă, cafeina, alcoolul (intensifică transpirația).',
        ],
      },
      {
        h2: 'Tratamentul hiperhidrozei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm tratament al hiperhidrozei: injecții cu toxină botulinică (metoda cea mai eficientă), selectarea antiperspirantelor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'follikulit-vospalenie-volosyanyh-follikulov': {
    sectionsRu: [
      {
        h2: 'Что такое фолликулит',
        paragraphs: [
          'Фолликулит — воспаление волосяных фолликулов, вызванное бактериями (чаще золотистый стафилококк), грибами, вирусами. Проявляется гнойничками вокруг волоса. Чаще на лице (у мужчин — борода), волосистой части головы, туловище.',
          'Причины: микротравмы при бритье, эпиляции, трение одеждой, повышенная потливость, сниженный иммунитет, сахарный диабет.',
        ],
      },
      {
        h2: 'Виды фолликулита',
        paragraphs: [
          'Поверхностный: гнойнички вокруг волоса, не оставляют рубцов. Глубокий: болезненные узлы, после заживления — рубцы. Псевдофолликулит: вросшие волосы (чаще после бритья у мужчин с кудрявыми волосами).',
        ],
      },
      {
        h2: 'Лечение фолликулита',
        paragraphs: [
          'Местное лечение: антибактериальные мази (мупироцин, фузидовая кислота) 2-3 раза в день. Антисептики (хлоргексидин, мирамистин). Системное лечение: антибиотики внутрь при распространённых, глубоких формах.',
          'Устранение причины: прекратить бритьё (или использовать электробритву), носить свободную одежду, контроль диабета.',
        ],
      },
      {
        h2: 'Профилактика',
        paragraphs: [
          'Гигиена: ежедневный душ, антибактериальное мыло. Правильное бритьё: по росту волос, острые лезвия, увлажнение. Избегайте тесной одежды, синтетики.',
        ],
      },
      {
        h2: 'Лечение фолликулита в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение фолликулита: клинический осмотр, при необходимости — бактериологический посев, подбор лечения.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este foliculita',
        paragraphs: [
          'Foliculita este inflamația foliculilor piloși, cauzată de bacterii (mai des stafilococ auriu), ciuperci, virusuri. Se manifestă prin pustule în jurul părului. Mai des pe față (la bărbați — barbă), partea păroasă a capului, trunchi.',
          'Cauze: microtraumatisme la bărbierit, epilare, frecare de îmbrăcăminte, transpirație crescută, imunitate scăzută, diabet zaharat.',
        ],
      },
      {
        h2: 'Tipuri de foliculită',
        paragraphs: [
          'Superficială: pustule în jurul părului, nu lasă cicatrici. Profundă: noduli dureroși, după vindecare — cicatrici. Pseudofoliculită: păr încarnat (mai des după bărbierit la bărbați cu păr creț).',
        ],
      },
      {
        h2: 'Tratamentul foliculitei',
        paragraphs: [
          'Tratament local: unguente antibacteriene (mupirocină, acid fusidic) de 2-3 ori pe zi. Antiseptice (clorhexidină, miramistin). Tratament sistemic: antibiotice intern în formele răspândite, profunde.',
          'Eliminarea cauzei: opriți bărbieritul (sau folosiți aparat de ras electric), purtați îmbrăcăminte largă, controlul diabetului.',
        ],
      },
      {
        h2: 'Prevenire',
        paragraphs: [
          'Igienă: duș zilnic, săpun antibacterian. Bărbierit corect: în direcția creșterii părului, lame ascuțite, hidratare. Evitați îmbrăcămintea strâmtă, sinteticele.',
        ],
      },
      {
        h2: 'Tratamentul foliculitei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al foliculitei: examinare clinică, dacă este necesar — cultivare bacteriologică, selectarea tratamentului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'pigmentnye-pyatna-prichiny-lechenie': {
    sectionsRu: [
      {
        h2: 'Виды пигментных пятен',
        paragraphs: [
          'Веснушки (эфелиды): мелкие коричневые пятна, появляются весной-летом, светлеют зимой. Генетически обусловлены, чаще у людей со светлой кожей. Лентиго: тёмные пятна, не зависят от сезона. Солнечное лентиго (возрастные пятна) — после 40 лет на открытых участках.',
          'Мелазма (хлоазма): крупные симметричные пятна на лице (лоб, щёки, верхняя губа). Чаще у женщин при беременности, приёме гормональных контрацептивов. Постакне: пигментация после воспалительных элементов акне.',
        ],
      },
      {
        h2: 'Причины гиперпигментации',
        paragraphs: [
          'Солнце: главная причина. УФ-излучение стимулирует меланоциты. Гормоны: беременность, контрацептивы, заболевания щитовидной железы. Воспаление: после акне, травм, ожогов.',
          'Лекарства: некоторые антибиотики, противомалярийные, химиотерапия вызывают фотосенсибилизацию. Заболевания: болезнь Аддисона, гемохроматоз.',
        ],
      },
      {
        h2: 'Лечение пигментных пятен',
        paragraphs: [
          'Отбеливающие средства: гидрохинон 2-4%, койевая кислота, арбутин, витамин C, ниацинамид. Наносить на пятна 1-2 раза в день, курс 2-3 месяца. Обязательно SPF 50+ днём.',
          'Пилинги: гликолевая, молочная, салициловая кислота. Удаляют поверхностный слой с пигментом. Курс 4-6 процедур с интервалом 2 недели. Лазер: фракционный, Q-switched для глубокой пигментации.',
        ],
      },
      {
        h2: 'Профилактика',
        paragraphs: [
          'Солнцезащита: SPF 30-50 ежедневно, обновлять каждые 2 часа. Избегайте солнца 11-16 часов. Шляпы, солнцезащитные очки. Своевременное лечение акне (профилактика постакне).',
        ],
      },
      {
        h2: 'Лечение пигментации в Meddera',
        paragraphs: [
          'В клинике Meddera проводим диагностику и лечение пигментных пятен: дерматоскопия, подбор отбеливающих средств, пилинги, лазерные процедуры.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Tipuri de pete pigmentare',
        paragraphs: [
          'Pistrui (efelide): pete brune mici, apar primăvara-vara, se luminează iarna. Determinate genetic, mai des la persoane cu piele deschisă. Lentigo: pete închise, nu depind de sezon. Lentigo solar (pete de vârstă) — după 40 ani pe zone expuse.',
          'Melasma (cloasma): pete mari simetrice pe față (frunte, obraji, buza superioară). Mai des la femei în sarcină, administrarea contraceptivelor hormonale. Post-acnee: pigmentare după elemente inflamatorii de acnee.',
        ],
      },
      {
        h2: 'Cauze ale hiperpigmentării',
        paragraphs: [
          'Soare: cauza principală. Radiația UV stimulează melanocitele. Hormoni: sarcină, contraceptive, boli ale tiroidei. Inflamație: după acnee, traumatisme, arsuri.',
          'Medicamente: unele antibiotice, antimalarice, chimioterapie provoacă fotosensibilizare. Boli: boala Addison, hemocromatoză.',
        ],
      },
      {
        h2: 'Tratamentul petelor pigmentare',
        paragraphs: [
          'Produse de albire: hidrochinonă 2-4%, acid kojic, arbutină, vitamina C, niacinamidă. Aplicați pe pete de 1-2 ori pe zi, curs 2-3 luni. Obligatoriu SPF 50+ ziua.',
          'Peeling-uri: acid glicolic, lactic, salicilic. Îndepărtează stratul superficial cu pigment. Curs 4-6 proceduri cu interval de 2 săptămâni. Laser: fracțional, Q-switched pentru pigmentare profundă.',
        ],
      },
      {
        h2: 'Prevenire',
        paragraphs: [
          'Protecție solară: SPF 30-50 zilnic, reînnoiți la fiecare 2 ore. Evitați soarele 11-16 ore. Pălării, ochelari de soare. Tratamentul în timp util al acneei (prevenirea post-acnee).',
        ],
      },
      {
        h2: 'Tratamentul pigmentării la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm diagnostic și tratament al petelor pigmentare: dermatoscopie, selectarea produselor de albire, peeling-uri, proceduri cu laser.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'solnechnye-ozhogi-pervaya-pomoshch': {
    sectionsRu: [
      {
        h2: 'Степени солнечных ожогов',
        paragraphs: [
          'I степень: покраснение, боль, жжение. Проходит за 3-5 дней без последствий. II степень: пузыри с прозрачным содержимым, сильная боль. Заживление 7-14 дней, возможна пигментация.',
          'III степень: глубокое повреждение, некроз тканей. Требует медицинской помощи. Редко при солнечных ожогах (чаще при контакте с химическими веществами, огнём).',
        ],
      },
      {
        h2: 'Первая помощь при солнечном ожоге',
        paragraphs: [
          'Охлаждение: прохладный душ (не ледяной!), холодные компрессы на 15-20 минут каждый час. Снижает воспаление, боль. Увлажнение: пантенол, алоэ вера, увлажняющие кремы на водной основе. Наносить 3-4 раза в день.',
          'Обезболивание: ибупрофен, парацетамол внутрь (снимают боль, воспаление). Обильное питьё: вода, электролиты (ожог обезвоживает организм).',
        ],
      },
      {
        h2: 'Чего нельзя делать',
        paragraphs: [
          'Не прокалывайте пузыри (риск инфекции). Не наносите масло, жирные кремы (создают плёнку, усиливают воспаление). Не используйте лёд непосредственно на кожу (обморожение). Не отрывайте отслоившуюся кожу.',
        ],
      },
      {
        h2: 'Когда к врачу',
        paragraphs: [
          'Обширные ожоги (более 50% тела), ожоги II степени на лице, крупные пузыри, признаки инфекции (гной, усиление боли, лихорадка), тепловой удар (головокружение, тошнота, потеря сознания).',
        ],
      },
      {
        h2: 'Профилактика солнечных ожогов',
        paragraphs: [
          'Солнцезащита: SPF 30-50, наносить за 15-20 минут до выхода, обновлять каждые 2 часа, после купания. Избегайте солнца 11-16 часов. Одежда: лёгкая, закрывающая кожу, шляпы.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Grade de arsuri solare',
        paragraphs: [
          'Gradul I: roșeață, durere, arsură. Trece în 3-5 zile fără consecințe. Gradul II: vezicule cu conținut transparent, durere puternică. Vindecare 7-14 zile, posibilă pigmentare.',
          'Gradul III: deteriorare profundă, necroză tisulară. Necesită asistență medicală. Rar la arsuri solare (mai des la contact cu substanțe chimice, foc).',
        ],
      },
      {
        h2: 'Primul ajutor la arsură solară',
        paragraphs: [
          'Răcire: duș rece (nu înghețat!), comprese reci timp de 15-20 minute în fiecare oră. Reduce inflamația, durerea. Hidratare: pantenol, aloe vera, creme hidratante pe bază de apă. Aplicați de 3-4 ori pe zi.',
          'Ameliorarea durerii: ibuprofen, paracetamol intern (ameliorează durerea, inflamația). Hidratare abundentă: apă, electroliți (arsura deshidratează organismul).',
        ],
      },
      {
        h2: 'Ce nu se poate face',
        paragraphs: [
          'Nu perforați veziculele (risc de infecție). Nu aplicați ulei, creme grase (creează peliculă, intensifică inflamația). Nu folosiți gheață direct pe piele (degerare). Nu smulgeți pielea dezlipită.',
        ],
      },
      {
        h2: 'Când la medic',
        paragraphs: [
          'Arsuri extinse (mai mult de 50% din corp), arsuri de gradul II pe față, vezicule mari, semne de infecție (puroi, intensificarea durerii, febră), insolație (amețeală, greață, pierderea conștienței).',
        ],
      },
      {
        h2: 'Prevenirea arsurilor solare',
        paragraphs: [
          'Protecție solară: SPF 30-50, aplicați cu 15-20 minute înainte de ieșire, reînnoiți la fiecare 2 ore, după îmbăiere. Evitați soarele 11-16 ore. Îmbrăcăminte: ușoară, care acoperă pielea, pălării.',
        ],
      },
    ],
  },
};
