export type ArticleSection = { h2: string; paragraphs: string[] };

export type BotoxArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

export const BOTOX_ARTICLE_CONTENT: Record<string, BotoxArticleCopy> = {
  'botoks-beltsy-chto-nuzhno-znat': {
    sectionsRu: [
      {
        h2: 'Что такое ботокс и как он работает',
        paragraphs: [
          'Ботокс (ботулотоксин типа А) — препарат, который временно блокирует передачу нервных импульсов к мимическим мышцам. Это приводит к расслаблению мышц и разглаживанию морщин, образованных активной мимикой.',
          'Механизм действия: ботулотоксин блокирует выброс ацетилхолина в нервно-мышечном синапсе. Мышца перестаёт сокращаться, морщина разглаживается. Эффект временный, обратимый, длится 3-6 месяцев.',
          'Ботокс не заполняет морщины (как филлеры), а расслабляет мышцы. Поэтому эффективен для мимических морщин (лоб, межбровье, "гусиные лапки"), но не для статических морщин и потери объёма.',
        ],
      },
      {
        h2: 'Показания к инъекциям ботокса',
        paragraphs: [
          'Коррекция мимических морщин: горизонтальные морщины лба, вертикальные морщины межбровья ("морщины гнева"), периорбитальные морщины ("гусиные лапки"), морщины переносицы ("кроличьи морщины").',
          'Лечение гипергидроза: повышенная потливость подмышек, ладоней, стоп. Ботокс блокирует сигналы к потовым железам, эффект длится 6-12 месяцев.',
          'Профилактика морщин: инъекции в молодом возрасте (25-30 лет) в небольших дозах предотвращают образование глубоких морщин. Мышцы "привыкают" к расслабленному состоянию.',
        ],
      },
      {
        h2: 'Противопоказания',
        paragraphs: [
          'Абсолютные: беременность, лактация, аллергия на компоненты препарата, нервно-мышечные заболевания (миастения, синдром Ламберта-Итона), воспаление в зоне инъекций.',
          'Относительные: приём антикоагулянтов (повышен риск синяков), антибиотиков аминогликозидов (усиливают эффект ботокса), острые инфекции, обострение хронических заболеваний.',
          'Важно: сообщите врачу обо всех принимаемых препаратах, хронических заболеваниях, предыдущих процедурах ботокса. Это влияет на выбор дозы и зон введения.',
        ],
      },
      {
        h2: 'Подготовка к процедуре',
        paragraphs: [
          'За 7-10 дней: прекратить приём антикоагулянтов (аспирин, ибупрофен) по согласованию с врачом, чтобы снизить риск синяков. Избегать алкоголя за 2-3 дня до процедуры.',
          'В день процедуры: приходите без макияжа, не планируйте физические нагрузки и наклоны головы вниз на 4-6 часов после инъекций.',
          'Что взять с собой: список принимаемых препаратов, результаты предыдущих процедур ботокса (если были), фотографии желаемого результата для обсуждения с врачом.',
        ],
      },
      {
        h2: 'Ботокс в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные препараты ботулотоксина типа А. Процедуру проводит опытный дерматокосметолог с учётом анатомии лица и активности мимических мышц.',
          'Консультация включает: оценку показаний, выбор зон для коррекции, расчёт дозы, обсуждение ожиданий и возможных побочных эффектов.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este botoxul și cum funcționează',
        paragraphs: [
          'Botoxul (toxină botulinică tip A) este un preparat care blochează temporar transmiterea impulsurilor nervoase către mușchii mimici. Acest lucru duce la relaxarea mușchilor și netezirea ridurilor formate de mimica activă.',
          'Mecanism de acțiune: toxina botulinică blochează eliberarea acetilcolinei în sinapsa neuromusculară. Mușchiul încetează să se contracte, rida se netezește. Efectul este temporar, reversibil, durează 3-6 luni.',
          'Botoxul nu umple ridurile (ca filler-ele), ci relaxează mușchii. De aceea este eficient pentru ridurile mimice (frunte, între sprâncene, "lăbușe"), dar nu pentru ridurile statice și pierderea volumului.',
        ],
      },
      {
        h2: 'Indicații pentru injecțiile cu botox',
        paragraphs: [
          'Corecția ridurilor mimice: riduri orizontale ale frunții, riduri verticale între sprâncene ("riduri de furie"), riduri periorbitale ("lăbușe"), riduri ale nasului ("riduri de iepure").',
          'Tratamentul hiperhidrozei: transpirație excesivă a axilelor, palmelor, tălpilor. Botoxul blochează semnalele către glandele sudoripare, efectul durează 6-12 luni.',
          'Prevenirea ridurilor: injecții la vârstă tânără (25-30 ani) în doze mici previn formarea ridurilor profunde. Mușchii "se obișnuiesc" cu starea relaxată.',
        ],
      },
      {
        h2: 'Contraindicații',
        paragraphs: [
          'Absolute: sarcină, alăptare, alergie la componentele preparatului, boli neuromusculare (miastenie, sindrom Lambert-Eaton), inflamație în zona injecțiilor.',
          'Relative: administrarea anticoagulantelor (risc crescut de vânătăi), antibiotice aminoglicozide (intensifică efectul botoxului), infecții acute, exacerbarea bolilor cronice.',
          'Important: informați medicul despre toate medicamentele pe care le luați, bolile cronice, procedurile anterioare cu botox. Acest lucru influențează alegerea dozei și zonelor de administrare.',
        ],
      },
      {
        h2: 'Pregătirea pentru procedură',
        paragraphs: [
          'Cu 7-10 zile înainte: opriți administrarea anticoagulantelor (aspirină, ibuprofen) în acord cu medicul, pentru a reduce riscul de vânătăi. Evitați alcoolul cu 2-3 zile înainte de procedură.',
          'În ziua procedurii: veniți fără machiaj, nu planificați efort fizic și înclinarea capului în jos timp de 4-6 ore după injecții.',
          'Ce să aduceți: lista medicamentelor pe care le luați, rezultatele procedurilor anterioare cu botox (dacă au fost), fotografii ale rezultatului dorit pentru discuție cu medicul.',
        ],
      },
      {
        h2: 'Botoxul la clinica Meddera',
        paragraphs: [
          'La Meddera folosim preparate certificate de toxină botulinică tip A. Procedura este efectuată de un dermatocosmetolog experimentat, ținând cont de anatomia feței și activitatea mușchilor mimici.',
          'Consultația include: evaluarea indicațiilor, alegerea zonelor pentru corecție, calculul dozei, discutarea așteptărilor și posibilelor efecte secundare.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-pokazaniya-protivopokazaniya': {
    sectionsRu: [
      {
        h2: 'Показания к инъекциям ботокса',
        paragraphs: [
          'Мимические морщины: горизонтальные морщины лба (образуются при поднятии бровей), вертикальные морщины межбровья ("морщины гнева", "единица"), периорбитальные морщины ("гусиные лапки" в уголках глаз).',
          'Другие эстетические показания: морщины переносицы ("кроличьи морщины"), опущение уголков рта, гипертрофия жевательных мышц (квадратная форма лица), гипергидроз (повышенная потливость) подмышек, ладоней, стоп.',
          'Профилактика морщин: инъекции в молодом возрасте (25-30 лет) в небольших дозах предотвращают образование глубоких морщин. Мышцы "привыкают" к расслабленному состоянию, морщины не углубляются.',
        ],
      },
      {
        h2: 'Абсолютные противопоказания',
        paragraphs: [
          'Беременность и лактация: ботулотоксин противопоказан, так как нет данных о безопасности для плода и ребёнка. Планировать беременность можно через 3-6 месяцев после последней инъекции.',
          'Нервно-мышечные заболевания: миастения, синдром Ламберта-Итона, боковой амиотрофический склероз. Ботокс усиливает мышечную слабость, может привести к опасным осложнениям.',
          'Аллергия на компоненты препарата: ботулотоксин типа А, альбумин человека. Если была аллергическая реакция на предыдущие инъекции — процедура противопоказана.',
        ],
      },
      {
        h2: 'Относительные противопоказания',
        paragraphs: [
          'Приём антикоагулянтов: аспирин, варфарин, клопидогрел повышают риск синяков. Прекратите приём за 7-10 дней до процедуры (по согласованию с лечащим врачом).',
          'Антибиотики аминогликозиды: гентамицин, стрептомицин усиливают эффект ботокса, могут привести к избыточному расслаблению мышц. Сообщите врачу о приёме любых препаратов.',
          'Острые инфекции, обострение хронических заболеваний: процедуру лучше отложить до выздоровления. Воспаление в зоне инъекций — абсолютное противопоказание.',
        ],
      },
      {
        h2: 'Возрастные ограничения',
        paragraphs: [
          'Минимальный возраст: 18 лет (официально). На практике ботокс редко назначают до 25 лет, так как мимические морщины ещё не сформированы. Исключение — гипергидроз, асимметрия лица.',
          'Максимальный возраст: ограничений нет, если нет противопоказаний по здоровью. После 60 лет эффект может быть менее выраженным из-за потери эластичности кожи, но процедура безопасна.',
          'Оптимальный возраст: 30-50 лет — период, когда мимические морщины уже заметны, но кожа ещё сохраняет тонус. Ботокс даёт максимальный эффект омоложения.',
        ],
      },
      {
        h2: 'Консультация перед ботоксом в Meddera',
        paragraphs: [
          'На консультации врач оценивает показания и противопоказания, изучает анамнез (хронические заболевания, приём препаратов, предыдущие процедуры ботокса).',
          'Обсуждаем ожидания: какие зоны хотите скорректировать, какой результат хотите получить. Врач объясняет, что реально достижимо, какие дозы потребуются.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Indicații pentru injecțiile cu botox',
        paragraphs: [
          'Riduri mimice: riduri orizontale ale frunții (formate la ridicarea sprâncenelor), riduri verticale între sprâncene ("riduri de furie", "unitate"), riduri periorbitale ("lăbușe" în colțurile ochilor).',
          'Alte indicații estetice: riduri ale nasului ("riduri de iepure"), coborârea colțurilor gurii, hipertrofia mușchilor masticatori (formă pătrată a feței), hiperhidroza (transpirație excesivă) a axilelor, palmelor, tălpilor.',
          'Prevenirea ridurilor: injecții la vârstă tânără (25-30 ani) în doze mici previn formarea ridurilor profunde. Mușchii "se obișnuiesc" cu starea relaxată, ridurile nu se adâncesc.',
        ],
      },
      {
        h2: 'Contraindicații absolute',
        paragraphs: [
          'Sarcină și alăptare: toxina botulinică este contraindicată, deoarece nu există date despre siguranța pentru făt și copil. Planificarea sarcinii este posibilă în 3-6 luni după ultima injecție.',
          'Boli neuromusculare: miastenie, sindrom Lambert-Eaton, scleroză laterală amiotrofică. Botoxul intensifică slăbiciunea musculară, poate duce la complicații periculoase.',
          'Alergie la componentele preparatului: toxină botulinică tip A, albumină umană. Dacă a fost reacție alergică la injecțiile anterioare — procedura este contraindicată.',
        ],
      },
      {
        h2: 'Contraindicații relative',
        paragraphs: [
          'Administrarea anticoagulantelor: aspirină, warfarină, clopidogrel cresc riscul de vânătăi. Opriți administrarea cu 7-10 zile înainte de procedură (în acord cu medicul curant).',
          'Antibiotice aminoglicozide: gentamicină, streptomicină intensifică efectul botoxului, pot duce la relaxare excesivă a mușchilor. Informați medicul despre administrarea oricăror preparate.',
          'Infecții acute, exacerbarea bolilor cronice: procedura este mai bine să fie amânată până la vindecare. Inflamația în zona injecțiilor — contraindicație absolută.',
        ],
      },
      {
        h2: 'Restricții de vârstă',
        paragraphs: [
          'Vârsta minimă: 18 ani (oficial). În practică, botoxul este rar prescris până la 25 ani, deoarece ridurile mimice nu sunt încă formate. Excepție — hiperhidroza, asimetria feței.',
          'Vârsta maximă: nu există restricții, dacă nu există contraindicații de sănătate. După 60 ani efectul poate fi mai puțin pronunțat din cauza pierderii elasticității pielii, dar procedura este sigură.',
          'Vârsta optimă: 30-50 ani — perioada când ridurile mimice sunt deja vizibile, dar pielea încă păstrează tonusul. Botoxul dă efect maxim de întinerire.',
        ],
      },
      {
        h2: 'Consultația înainte de botox la Meddera',
        paragraphs: [
          'La consultație medicul evaluează indicațiile și contraindicațiile, studiază anamneza (boli cronice, administrarea de preparate, proceduri anterioare cu botox).',
          'Discutăm așteptările: ce zone doriți să corectați, ce rezultat doriți să obțineți. Medicul explică ce este realizabil, ce doze vor fi necesare.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-kak-prohodit-procedura': {
    sectionsRu: [
      {
        h2: 'Подготовка к процедуре ботокса',
        paragraphs: [
          'За 7-10 дней: прекратите приём антикоагулянтов (аспирин, ибупрофен) по согласованию с врачом. Избегайте алкоголя за 2-3 дня до процедуры (алкоголь расширяет сосуды, повышает риск синяков).',
          'В день процедуры: приходите без макияжа (или врач снимет его перед процедурой). Не планируйте физические нагрузки, посещение сауны, наклоны головы вниз на 4-6 часов после инъекций.',
          'Консультация: врач оценивает активность мимических мышц, обсуждает зоны для коррекции, рассчитывает дозу. Фотографируем лицо в покое и при мимике для оценки результата.',
        ],
      },
      {
        h2: 'Этапы процедуры',
        paragraphs: [
          'Очищение кожи: врач очищает кожу антисептиком. Анестезия обычно не требуется (иглы очень тонкие), но по желанию можно нанести анестезирующий крем за 15-20 минут.',
          'Разметка: врач отмечает точки для инъекций с учётом анатомии мышц и желаемого результата. Количество точек зависит от зоны: лоб — 5-8 точек, межбровье — 3-5, "гусиные лапки" — 3-5 с каждой стороны.',
          'Инъекции: врач вводит препарат тонкой иглой в мимические мышцы. Процедура занимает 10-15 минут. Ощущения: лёгкий укол, жжение проходит за несколько секунд.',
        ],
      },
      {
        h2: 'После процедуры',
        paragraphs: [
          'Первые 4-6 часов: не ложитесь, не наклоняйте голову вниз, не массируйте зону инъекций (чтобы препарат не мигрировал в соседние мышцы). Можно вернуться к обычной жизни.',
          'Первые 24 часа: избегайте физических нагрузок, сауны, горячей ванны, алкоголя. Не трогайте лицо руками. Можно умываться прохладной водой, наносить лёгкий крем.',
          'Первые 2 недели: избегайте агрессивных косметологических процедур (пилинги, лазер, массаж лица). Можно использовать декоративную косметику, солнцезащитный крем.',
        ],
      },
      {
        h2: 'Когда виден результат',
        paragraphs: [
          'Первые признаки: через 2-3 дня появляется лёгкое расслабление мышц. Полный эффект: через 10-14 дней, когда препарат полностью подействовал на нервно-мышечные синапсы.',
          'Длительность эффекта: 3-6 месяцев в зависимости от дозы, зоны, индивидуального метаболизма. Лоб и межбровье — 4-6 месяцев, "гусиные лапки" — 3-4 месяца.',
          'Повторные процедуры: рекомендуются через 4-6 месяцев для поддержания результата. При регулярных инъекциях эффект может длиться дольше (мышцы "отучаются" сокращаться).',
        ],
      },
      {
        h2: 'Ботокс в клинике Meddera',
        paragraphs: [
          'В Meddera используются сертифицированные препараты ботулотоксина типа А. Процедуру проводит опытный дерматокосметолог с учётом анатомии лица.',
          'Консультация включает: оценку показаний, выбор зон для коррекции, расчёт дозы, обсуждение ожиданий и возможных побочных эффектов.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Pregătirea pentru procedura cu botox',
        paragraphs: [
          'Cu 7-10 zile înainte: opriți administrarea anticoagulantelor (aspirină, ibuprofen) în acord cu medicul. Evitați alcoolul cu 2-3 zile înainte de procedură (alcoolul dilată vasele, crește riscul de vânătăi).',
          'În ziua procedurii: veniți fără machiaj (sau medicul îl va îndepărta înainte de procedură). Nu planificați efort fizic, vizitarea saunei, înclinarea capului în jos timp de 4-6 ore după injecții.',
          'Consultația: medicul evaluează activitatea mușchilor mimici, discută zonele pentru corecție, calculează doza. Fotografiem fața în repaus și la mimică pentru evaluarea rezultatului.',
        ],
      },
      {
        h2: 'Etapele procedurii',
        paragraphs: [
          'Curățarea pielii: medicul curăță pielea cu antiseptic. Anestezia de obicei nu este necesară (acele foarte subțiri), dar la dorință se poate aplica cremă anestezică cu 15-20 minute înainte.',
          'Marcarea: medicul marchează punctele pentru injecții ținând cont de anatomia mușchilor și rezultatul dorit. Numărul de puncte depinde de zonă: frunte — 5-8 puncte, între sprâncene — 3-5, "lăbușe" — 3-5 de fiecare parte.',
          'Injecții: medicul introduce preparatul cu ac subțire în mușchii mimici. Procedura durează 10-15 minute. Senzații: înțepătură ușoară, arsură trece în câteva secunde.',
        ],
      },
      {
        h2: 'După procedură',
        paragraphs: [
          'Primele 4-6 ore: nu vă culcați, nu înclinați capul în jos, nu masați zona injecțiilor (pentru ca preparatul să nu migreze în mușchii vecini). Puteți reveni la viața obișnuită.',
          'Primele 24 ore: evitați efortul fizic, sauna, baia fierbinte, alcoolul. Nu atingeți fața cu mâinile. Puteți spăla fața cu apă rece, aplica cremă ușoară.',
          'Primele 2 săptămâni: evitați procedurile cosmetologice agresive (peeling-uri, laser, masaj facial). Puteți folosi cosmetice decorative, cremă cu protecție solară.',
        ],
      },
      {
        h2: 'Când este vizibil rezultatul',
        paragraphs: [
          'Primele semne: în 2-3 zile apare relaxarea ușoară a mușchilor. Efect complet: în 10-14 zile, când preparatul a acționat complet asupra sinapselor neuromusculare.',
          'Durata efectului: 3-6 luni în funcție de doză, zonă, metabolism individual. Frunte și între sprâncene — 4-6 luni, "lăbușe" — 3-4 luni.',
          'Proceduri repetate: recomandate în 4-6 luni pentru menținerea rezultatului. La injecții regulate efectul poate dura mai mult (mușchii "se dezobișnuiesc" să se contracte).',
        ],
      },
      {
        h2: 'Botoxul la clinica Meddera',
        paragraphs: [
          'La Meddera folosim preparate certificate de toxină botulinică tip A. Procedura este efectuată de un dermatocosmetolog experimentat ținând cont de anatomia feței.',
          'Consultația include: evaluarea indicațiilor, alegerea zonelor pentru corecție, calculul dozei, discutarea așteptărilor și posibilelor efecte secundare.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-rezultaty-dlitelnost': {
    sectionsRu: [
      {
        h2: 'Когда виден результат ботокса',
        paragraphs: [
          'Первые изменения: через 2-3 дня после инъекций. Мышцы начинают расслабляться, морщины постепенно разглаживаются. Максимальный эффект: через 10-14 дней. Полное расслабление мышц, морщины максимально разглажены.',
          'Индивидуальные особенности: у некоторых результат виден раньше (на 3-5 день), у других — позже (на 14-21 день). Зависит от дозы, глубины морщин, индивидуальной чувствительности к препарату.',
        ],
      },
      {
        h2: 'Сколько держится эффект ботокса',
        paragraphs: [
          'Средняя длительность: 3-6 месяцев. Зависит от зоны, дозы, индивидуальных особенностей. Лоб, межбровье: 4-6 месяцев. Гусиные лапки: 3-4 месяца (активная мимика).',
          'Факторы, влияющие на длительность: возраст (у молодых эффект держится дольше), доза (больше доза — дольше эффект), физическая активность (интенсивные тренировки ускоряют метаболизм препарата).',
        ],
      },
      {
        h2: 'Что влияет на результат',
        paragraphs: [
          'Квалификация врача: правильная техника инъекций, точные дозировки, знание анатомии. Качество препарата: оригинальные препараты (Ботокс, Диспорт, Ксеомин) дают предсказуемый результат.',
          'Соблюдение рекомендаций: первые 4 часа не ложиться, не наклоняться, не массировать зону инъекций. Первые 2 недели избегать сауны, солярия, интенсивных тренировок.',
        ],
      },
      {
        h2: 'Повторные процедуры',
        paragraphs: [
          'Оптимальная частота: каждые 4-6 месяцев. При регулярных процедурах эффект может держаться дольше (мышцы "привыкают" к расслабленному состоянию).',
          'Не рекомендуется делать чаще 3 месяцев: риск развития резистентности (устойчивости) к препарату. Не стоит ждать полного исчезновения эффекта: лучше делать повторную процедуру, когда мимика начинает возвращаться.',
        ],
      },
      {
        h2: 'Результаты ботокса в Meddera',
        paragraphs: [
          'В клинике Meddera используем оригинальные препараты ботулотоксина. Индивидуальный подход: оцениваем глубину морщин, тип кожи, мимическую активность.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Când este vizibil rezultatul botoxului',
        paragraphs: [
          'Primele schimbări: în 2-3 zile după injecții. Mușchii încep să se relaxeze, ridurile se netezesc treptat. Efect maxim: în 10-14 zile. Relaxare completă a mușchilor, riduri maxim netezite.',
          'Particularități individuale: la unii rezultatul este vizibil mai devreme (în 3-5 zile), la alții — mai târziu (în 14-21 zile). Depinde de doză, adâncimea ridurilor, sensibilitatea individuală la preparat.',
        ],
      },
      {
        h2: 'Cât ține efectul botoxului',
        paragraphs: [
          'Durata medie: 3-6 luni. Depinde de zonă, doză, particularități individuale. Frunte, între sprâncene: 4-6 luni. Picioare de gâscă: 3-4 luni (mimică activă).',
          'Factori care influențează durata: vârsta (la tineri efectul ține mai mult), doza (doză mai mare — efect mai lung), activitatea fizică (antrenamente intense accelerează metabolismul preparatului).',
        ],
      },
      {
        h2: 'Ce influențează rezultatul',
        paragraphs: [
          'Calificarea medicului: tehnica corectă a injecțiilor, dozaje precise, cunoașterea anatomiei. Calitatea preparatului: preparate originale (Botox, Dysport, Xeomin) oferă rezultat previzibil.',
          'Respectarea recomandărilor: primele 4 ore nu vă culcați, nu vă aplecați, nu masați zona injecțiilor. Primele 2 săptămâni evitați sauna, solarul, antrenamente intense.',
        ],
      },
      {
        h2: 'Proceduri repetate',
        paragraphs: [
          'Frecvența optimă: la fiecare 4-6 luni. La proceduri regulate efectul poate ține mai mult (mușchii "se obișnuiesc" cu starea relaxată).',
          'Nu se recomandă mai des de 3 luni: risc de dezvoltare a rezistenței la preparat. Nu așteptați dispariția completă a efectului: mai bine faceți procedura repetată când mimică începe să revină.',
        ],
      },
      {
        h2: 'Rezultatele botoxului la Meddera',
        paragraphs: [
          'La clinica Meddera folosim preparate originale de toxină botulină. Abordare individuală: evaluăm adâncimea ridurilor, tipul de piele, activitatea mimică.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-uhod-posle-procedury': {
    sectionsRu: [
      {
        h2: 'Первые 4 часа после ботокса',
        paragraphs: [
          'Не ложитесь: сохраняйте вертикальное положение минимум 4 часа. Это предотвращает миграцию препарата в соседние мышцы. Не наклоняйтесь: избегайте наклонов головы вниз (завязывание шнурков, уборка).',
          'Не массируйте зону инъекций: не трогайте, не растирайте лицо. Не надевайте тесные головные уборы, очки (если инъекции в области лба, межбровья).',
        ],
      },
      {
        h2: 'Первые 2 недели после ботокса',
        paragraphs: [
          'Избегайте высоких температур: сауна, баня, солярий, горячая ванна, солнце (усиливают кровообращение, ускоряют метаболизм препарата). Ограничьте физические нагрузки: интенсивные тренировки, наклоны, перевёрнутые позы йоги.',
          'Не употребляйте алкоголь: первые 2-3 дня (усиливает отёки, замедляет заживление). Избегайте косметологических процедур: пилинги, массаж лица, аппаратные процедуры на зоне инъекций.',
        ],
      },
      {
        h2: 'Уход за кожей',
        paragraphs: [
          'Очищение: мягкие средства, не растирайте кожу. Увлажнение: лёгкие кремы, сыворотки (наносите аккуратно, без массажа). Солнцезащита: SPF 30-50 ежедневно (особенно важно первые 2 недели).',
          'Декоративная косметика: можно наносить через 4 часа после процедуры (аккуратно, без растирания).',
        ],
      },
      {
        h2: 'Что можно делать',
        paragraphs: [
          'Активная мимика: первые дни можно активно работать мышцами (хмуриться, поднимать брови) — это помогает препарату равномерно распределиться. Обычный образ жизни: работа, лёгкие прогулки, обычное питание.',
        ],
      },
      {
        h2: 'Рекомендации Meddera',
        paragraphs: [
          'В клинике Meddera после процедуры вы получаете подробные письменные рекомендации. Контрольный осмотр через 2 недели для оценки результата.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Primele 4 ore după botox',
        paragraphs: [
          'Nu vă culcați: păstrați poziția verticală minim 4 ore. Acest lucru previne migrarea preparatului în mușchii vecini. Nu vă aplecați: evitați înclinarea capului în jos (legarea șireturilor, curățenie).',
          'Nu masați zona injecțiilor: nu atingeți, nu frecați fața. Nu purtați pălării strâmte, ochelari (dacă injecțiile sunt în zona frunții, între sprâncene).',
        ],
      },
      {
        h2: 'Primele 2 săptămâni după botox',
        paragraphs: [
          'Evitați temperaturi ridicate: saună, baie, solar, baie fierbinte, soare (intensifică circulația, accelerează metabolismul preparatului). Limitați efortul fizic: antrenamente intense, aplecări, poziții inversate de yoga.',
          'Nu consumați alcool: primele 2-3 zile (intensifică edemele, încetinește vindecarea). Evitați procedurile cosmetice: peeling-uri, masaj facial, proceduri cu aparate pe zona injecțiilor.',
        ],
      },
      {
        h2: 'Îngrijirea pielii',
        paragraphs: [
          'Curățare: produse blânde, nu frecați pielea. Hidratare: creme ușoare, seruri (aplicați cu grijă, fără masaj). Protecție solară: SPF 30-50 zilnic (deosebit de important primele 2 săptămâni).',
          'Cosmetice decorative: se pot aplica după 4 ore de la procedură (cu grijă, fără frecare).',
        ],
      },
      {
        h2: 'Ce se poate face',
        paragraphs: [
          'Mimică activă: primele zile puteți lucra activ cu mușchii (încruntați, ridicați sprâncenele) — acest lucru ajută preparatul să se distribuie uniform. Stil de viață obișnuit: muncă, plimbări ușoare, alimentație obișnuită.',
        ],
      },
      {
        h2: 'Recomandările Meddera',
        paragraphs: [
          'La clinica Meddera după procedură primiți recomandări detaliate scrise. Examinare de control în 2 săptămâni pentru evaluarea rezultatului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-zony-injekcij': {
    sectionsRu: [
      {
        h2: 'Верхняя треть лица',
        paragraphs: [
          'Лоб: горизонтальные морщины при поднятии бровей. Инъекции в лобную мышцу расслабляют её, разглаживают морщины. Межбровье: вертикальные морщины (складка льва) при нахмуривании. Инъекции в мышцы-сморщиватели.',
          'Гусиные лапки: морщины вокруг глаз при улыбке. Инъекции в круговую мышцу глаза. Переносица: горизонтальные морщины при сморщивании носа (кроличьи морщины).',
        ],
      },
      {
        h2: 'Средняя треть лица',
        paragraphs: [
          'Нос: коррекция опущенного кончика носа, морщин на переносице. Инъекции в мышцу, опускающую перегородку носа. Подъём бровей: инъекции в мышцы, опускающие брови, создают эффект лифтинга.',
          'Десневая улыбка: коррекция чрезмерного обнажения дёсен при улыбке. Инъекции в мышцу, поднимающую верхнюю губу.',
        ],
      },
      {
        h2: 'Нижняя треть лица',
        paragraphs: [
          'Подбородок: морщины на подбородке ("апельсиновая корка"). Инъекции в подбородочную мышцу. Уголки рта: опущенные уголки рта. Инъекции в мышцу, опускающую угол рта.',
          'Шея: тяжи на шее (платизма). Инъекции в платизму для разглаживания тяжей.',
        ],
      },
      {
        h2: 'Нелицевые зоны',
        paragraphs: [
          'Гипергидроз: подмышки, ладони, стопы. Инъекции блокируют сигналы к потовым железам. Бруксизм: жевательные мышцы. Инъекции расслабляют мышцы, уменьшают скрежетание зубами.',
        ],
      },
      {
        h2: 'Зоны коррекции в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса во все зоны. Индивидуальный подход: оцениваем мимику, глубину морщин, желаемый результат.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Treimea superioară a feței',
        paragraphs: [
          'Frunte: riduri orizontale la ridicarea sprâncenelor. Injecții în mușchiul frontal îl relaxează, netezesc ridurile. Între sprâncene: riduri verticale (cuta leului) la încruntare. Injecții în mușchii încreți.',
          'Picioare de gâscă: riduri în jurul ochilor la zâmbet. Injecții în mușchiul circular al ochiului. Nas: riduri orizontale la încreținarea nasului (riduri de iepure).',
        ],
      },
      {
        h2: 'Treimea mijlocie a feței',
        paragraphs: [
          'Nas: corecția vârfului coborât al nasului, riduri pe nas. Injecții în mușchiul care coboară septul nazal. Ridicarea sprâncenelor: injecții în mușchii care coboară sprâncenele, creează efect de lifting.',
          'Zâmbet gingival: corecția expunerii excesive a gingiilor la zâmbet. Injecții în mușchiul care ridică buza superioară.',
        ],
      },
      {
        h2: 'Treimea inferioară a feței',
        paragraphs: [
          'Bărbie: riduri pe bărbie ("coajă de portocală"). Injecții în mușchiul bărbiei. Colțurile gurii: colțuri coborâte ale gurii. Injecții în mușchiul care coboară colțul gurii.',
          'Gât: cordoane pe gât (platisma). Injecții în platismă pentru netezirea cordoanelor.',
        ],
      },
      {
        h2: 'Zone non-faciale',
        paragraphs: [
          'Hiperhidroză: axile, palme, tălpi. Injecțiile blochează semnalele către glandele sudoripare. Bruxism: mușchi masticatori. Injecțiile relaxează mușchii, reduc scrâșnitul dinților.',
        ],
      },
      {
        h2: 'Zone de corecție la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox în toate zonele. Abordare individuală: evaluăm mimica, adâncimea ridurilor, rezultatul dorit.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-oslozhneniya-pobelochnye-effekty': {
    sectionsRu: [
      {
        h2: 'Нормальные реакции после ботокса',
        paragraphs: [
          'Следы от инъекций: небольшие красные точки, проходят за несколько часов. Лёгкие синяки: возможны при попадании в сосуд, проходят за 3-7 дней. Лёгкая отёчность: в зоне инъекций, проходит за 1-2 дня.',
          'Головная боль: редко, в первые 24 часа, проходит самостоятельно. Эти реакции не требуют лечения.',
        ],
      },
      {
        h2: 'Временные побочные эффекты',
        paragraphs: [
          'Асимметрия: лёгкая асимметрия мимики в первые дни (препарат распределяется неравномерно). Проходит через 3-5 дней. Тяжесть в области инъекций: ощущение тяжести в лбу, бровях. Проходит через 1-2 недели.',
          'Опущение века (птоз): редко (1-5% случаев), при миграции препарата в мышцу, поднимающую веко. Проходит через 2-4 недели. Можно корректировать специальными каплями.',
        ],
      },
      {
        h2: 'Как избежать осложнений',
        paragraphs: [
          'Выбор врача: квалифицированный дерматокосметолог с опытом работы с ботулотоксином. Знание анатомии, правильная техника инъекций. Качество препарата: оригинальные препараты (Ботокс, Диспорт, Ксеомин).',
          'Соблюдение рекомендаций: первые 4 часа не ложиться, не наклоняться, не массировать зону инъекций. Первые 2 недели избегать сауны, солярия, интенсивных тренировок.',
        ],
      },
      {
        h2: 'Когда обратиться к врачу',
        paragraphs: [
          'Сильная асимметрия: сохраняется более 2 недель. Опущение века: затрудняет зрение. Аллергическая реакция: сыпь, зуд, отёк (редко). Другие необычные симптомы: слабость, затруднение глотания, дыхания (очень редко).',
        ],
      },
      {
        h2: 'Безопасность ботокса в Meddera',
        paragraphs: [
          'В клинике Meddera используем только оригинальные препараты. Квалифицированные врачи с опытом работы. Индивидуальный подход, точные дозировки.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Reacții normale după botox',
        paragraphs: [
          'Urme de injecții: puncte roșii mici, dispar în câteva ore. Vânătăi ușoare: posibile la lovirea vasului, dispar în 3-7 zile. Edem ușor: în zona injecțiilor, dispare în 1-2 zile.',
          'Durere de cap: rar, în primele 24 ore, trece singură. Aceste reacții nu necesită tratament.',
        ],
      },
      {
        h2: 'Efecte secundare temporare',
        paragraphs: [
          'Asimetrie: asimetrie ușoară a mimicii în primele zile (preparatul se distribuie neuniform). Trece în 3-5 zile. Greutate în zona injecțiilor: senzație de greutate în frunte, sprâncene. Trece în 1-2 săptămâni.',
          'Coborârea pleoapei (ptoză): rar (1-5% din cazuri), la migrarea preparatului în mușchiul care ridică pleoapă. Trece în 2-4 săptămâni. Se poate corecta cu picături speciale.',
        ],
      },
      {
        h2: 'Cum să evitați complicațiile',
        paragraphs: [
          'Alegerea medicului: dermatocosmetolog calificat cu experiență în lucrul cu toxină botulină. Cunoașterea anatomiei, tehnica corectă a injecțiilor. Calitatea preparatului: preparate originale (Botox, Dysport, Xeomin).',
          'Respectarea recomandărilor: primele 4 ore nu vă culcați, nu vă aplecați, nu masați zona injecțiilor. Primele 2 săptămâni evitați sauna, solarul, antrenamente intense.',
        ],
      },
      {
        h2: 'Când să vă adresați medicului',
        paragraphs: [
          'Asimetrie puternică: persistă mai mult de 2 săptămâni. Coborârea pleoapei: îngreunează vederea. Reacție alergică: erupție, mâncărime, edem (rar). Alte simptome neobișnuite: slăbiciune, dificultate la înghițire, respirație (foarte rar).',
        ],
      },
      {
        h2: 'Siguranța botoxului la Meddera',
        paragraphs: [
          'La clinica Meddera folosim doar preparate originale. Medici calificați cu experiență de lucru. Abordare individuală, dozaje precise.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-chastota-povtornyh-procedur': {
    sectionsRu: [
      {
        h2: 'Оптимальная частота инъекций',
        paragraphs: [
          'Средний интервал: 4-6 месяцев между процедурами. Зависит от зоны, дозы, индивидуальных особенностей. Первая процедура: эффект держится 3-4 месяца. Повторные процедуры: эффект может держаться дольше (4-6 месяцев).',
          'Почему эффект удлиняется: мышцы "привыкают" к расслабленному состоянию, мимика становится менее активной.',
        ],
      },
      {
        h2: 'Можно ли делать чаще',
        paragraphs: [
          'Не рекомендуется чаще 3 месяцев: риск развития резистентности (устойчивости) к препарату. Организм вырабатывает антитела к ботулотоксину, эффект от процедур снижается.',
          'Исключения: гипергидроз (повышенная потливость), бруксизм (скрежетание зубами) — можно делать чаще по медицинским показаниям.',
        ],
      },
      {
        h2: 'Когда делать повторную процедуру',
        paragraphs: [
          'Не ждите полного исчезновения эффекта: лучше делать повторную процедуру, когда мимика начинает возвращаться (примерно 70-80% эффекта ещё сохраняется). Это помогает поддерживать стабильный результат.',
          'Признаки возвращения мимики: морщины начинают появляться при активной мимике, мышцы становятся более подвижными.',
        ],
      },
      {
        h2: 'Что будет, если делать слишком часто',
        paragraphs: [
          'Резистентность: организм вырабатывает антитела, препарат перестаёт действовать. Атрофия мышц: при очень частых инъекциях мышцы могут атрофироваться (ослабнуть). Неестественный вид: "замороженное" лицо без мимики.',
        ],
      },
      {
        h2: 'Рекомендации Meddera',
        paragraphs: [
          'В клинике Meddera составляем индивидуальный график процедур. Контрольный осмотр через 2 недели, планирование следующей процедуры.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Frecvența optimă a injecțiilor',
        paragraphs: [
          'Interval mediu: 4-6 luni între proceduri. Depinde de zonă, doză, particularități individuale. Prima procedură: efectul ține 3-4 luni. Proceduri repetate: efectul poate ține mai mult (4-6 luni).',
          'De ce efectul se prelungește: mușchii "se obișnuiesc" cu starea relaxată, mimica devine mai puțin activă.',
        ],
      },
      {
        h2: 'Se poate face mai des',
        paragraphs: [
          'Nu se recomandă mai des de 3 luni: risc de dezvoltare a rezistenței la preparat. Organismul produce anticorpi la toxina botulină, efectul procedurilor scade.',
          'Excepții: hiperhidroză (transpirație crescută), bruxism (scrâșnit dinți) — se poate face mai des din indicații medicale.',
        ],
      },
      {
        h2: 'Când să faceți procedura repetată',
        paragraphs: [
          'Nu așteptați dispariția completă a efectului: mai bine faceți procedura repetată când mimica începe să revină (aproximativ 70-80% din efect încă se păstrează). Acest lucru ajută să mențineți rezultatul stabil.',
          'Semne de revenire a mimicii: ridurile încep să apară la mimică activă, mușchii devin mai mobili.',
        ],
      },
      {
        h2: 'Ce se întâmplă dacă faceți prea des',
        paragraphs: [
          'Rezistență: organismul produce anticorpi, preparatul încetează să acționeze. Atrofia mușchilor: la injecții foarte frecvente mușchii pot atrofia (slăbi). Aspect nenatural: față "înghețată" fără mimică.',
        ],
      },
      {
        h2: 'Recomandările Meddera',
        paragraphs: [
          'La clinica Meddera elaborăm program individual de proceduri. Examinare de control în 2 săptămâni, planificarea procedurii următoare.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-vozrast-kogda-nachinat': {
    sectionsRu: [
      {
        h2: 'С какого возраста разрешён ботокс',
        paragraphs: [
          'Официально: с 18 лет (возраст совершеннолетия). На практике: большинство врачей рекомендуют начинать с 25-30 лет. До 25 лет: кожа ещё эластичная, морщины легко разглаживаются без инъекций.',
          'Исключения: по медицинским показаниям (гипергидроз, бруксизм, мигрень) можно делать раньше.',
        ],
      },
      {
        h2: 'Профилактический ботокс',
        paragraphs: [
          '25-30 лет: оптимальный возраст для начала профилактических инъекций. Первые мимические морщины только начинают формироваться. Цель: предотвратить углубление морщин, замедлить старение.',
          'Дозы: меньше, чем для коррекции глубоких морщин. Эффект: естественный, сохраняется мимика, но морщины не углубляются.',
        ],
      },
      {
        h2: 'Коррекционный ботокс',
        paragraphs: [
          '35-40 лет: морщины уже сформированы, видны в покое. Цель: разгладить существующие морщины, предотвратить новые. Дозы: выше, чем для профилактики.',
          '40+ лет: глубокие морщины, может потребоваться комбинация ботокса с филлерами, пилингами, лазерными процедурами.',
        ],
      },
      {
        h2: 'Есть ли верхняя граница возраста',
        paragraphs: [
          'Нет: ботокс можно делать в любом возрасте, если нет противопоказаний. Особенности после 60 лет: кожа менее эластичная, эффект может быть менее выраженным. Может потребоваться комбинация с другими процедурами (филлеры, лифтинг).',
        ],
      },
      {
        h2: 'Консультация в Meddera',
        paragraphs: [
          'В клинике Meddera оцениваем состояние кожи, глубину морщин, мимическую активность. Подбираем оптимальный возраст и схему процедур.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'De la ce vârstă este permis botoxul',
        paragraphs: [
          'Oficial: de la 18 ani (vârsta majoratului). În practică: majoritatea medicilor recomandă să începeți de la 25-30 ani. Până la 25 ani: pielea este încă elastică, ridurile se netezesc ușor fără injecții.',
          'Excepții: din indicații medicale (hiperhidroză, bruxism, migrenă) se poate face mai devreme.',
        ],
      },
      {
        h2: 'Botox preventiv',
        paragraphs: [
          '25-30 ani: vârsta optimă pentru începerea injecțiilor preventive. Primele riduri mimice abia încep să se formeze. Scop: prevenirea adâncirii ridurilor, încetinirea îmbătrânirii.',
          'Doze: mai mici decât pentru corecția ridurilor profunde. Efect: natural, se păstrează mimica, dar ridurile nu se adâncesc.',
        ],
      },
      {
        h2: 'Botox corectiv',
        paragraphs: [
          '35-40 ani: ridurile sunt deja formate, vizibile în repaus. Scop: netezirea ridurilor existente, prevenirea celor noi. Doze: mai mari decât pentru prevenire.',
          '40+ ani: riduri profunde, poate fi necesară combinația botoxului cu fillere, peeling-uri, proceduri cu laser.',
        ],
      },
      {
        h2: 'Există limită superioară de vârstă',
        paragraphs: [
          'Nu: botoxul se poate face la orice vârstă, dacă nu există contraindicații. Particularități după 60 ani: pielea este mai puțin elastică, efectul poate fi mai puțin pronunțat. Poate fi necesară combinația cu alte proceduri (fillere, lifting).',
        ],
      },
      {
        h2: 'Consultație la Meddera',
        paragraphs: [
          'La clinica Meddera evaluăm starea pielii, adâncimea ridurilor, activitatea mimică. Selectăm vârsta optimă și schema de proceduri.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-vs-fillery-raznica': {
    sectionsRu: [
      {
        h2: 'Механизм действия',
        paragraphs: [
          'Ботокс: ботулотоксин типа А блокирует передачу нервных импульсов к мышцам. Мышцы расслабляются, морщины разглаживаются. Не добавляет объём, только расслабляет мышцы.',
          'Филлеры: гиалуроновая кислота (чаще всего) заполняет морщины, складки, добавляет объём. Не влияет на мышцы, работает как наполнитель.',
        ],
      },
      {
        h2: 'Зоны применения',
        paragraphs: [
          'Ботокс: верхняя треть лица (лоб, межбровье, гусиные лапки), динамические морщины (появляются при мимике). Также: гипергидроз, бруксизм, мигрень.',
          'Филлеры: средняя и нижняя треть лица (носогубные складки, губы, скулы, подбородок), статические морщины (видны в покое). Восполнение объёма, контурирование.',
        ],
      },
      {
        h2: 'Результаты и длительность',
        paragraphs: [
          'Ботокс: результат через 3-14 дней, эффект 3-6 месяцев. Постепенное разглаживание морщин. Филлеры: результат сразу после процедуры, эффект 6-18 месяцев (зависит от препарата, зоны).',
          'Ботокс: эффект временный, полностью обратимый. Филлеры: можно растворить гиалуронидазой при необходимости.',
        ],
      },
      {
        h2: 'Можно ли сочетать',
        paragraphs: [
          'Да: ботокс и филлеры отлично дополняют друг друга. Ботокс расслабляет мышцы верхней трети лица, филлеры восполняют объём средней и нижней трети. Комплексный подход даёт наилучший результат омоложения.',
          'Последовательность: сначала ботокс (через 2 недели результат), затем филлеры. Или одновременно (в разные зоны).',
        ],
      },
      {
        h2: 'Ботокс и филлеры в Meddera',
        paragraphs: [
          'В клинике Meddera проводим обе процедуры. Индивидуальный подход: оцениваем тип старения, зоны коррекции, составляем комплексный план.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Mecanism de acțiune',
        paragraphs: [
          'Botox: toxina botulinică tip A blochează transmiterea impulsurilor nervoase către mușchi. Mușchii se relaxează, ridurile se netezesc. Nu adaugă volum, doar relaxează mușchii.',
          'Fillere: acidul hialuronic (cel mai des) umple ridurile, pliurile, adaugă volum. Nu influențează mușchii, funcționează ca umplutură.',
        ],
      },
      {
        h2: 'Zone de aplicare',
        paragraphs: [
          'Botox: treimea superioară a feței (frunte, între sprâncene, picioare de gâscă), riduri dinamice (apar la mimică). De asemenea: hiperhidroză, bruxism, migrenă.',
          'Fillere: treimea mijlocie și inferioară a feței (pliuri nazolabiale, buze, pomeți, bărbie), riduri statice (vizibile în repaus). Restabilirea volumului, conturare.',
        ],
      },
      {
        h2: 'Rezultate și durată',
        paragraphs: [
          'Botox: rezultat în 3-14 zile, efect 3-6 luni. Netezire treptată a ridurilor. Fillere: rezultat imediat după procedură, efect 6-18 luni (depinde de preparat, zonă).',
          'Botox: efect temporar, complet reversibil. Fillere: se pot dizolva cu hialuronidază dacă este necesar.',
        ],
      },
      {
        h2: 'Se pot combina',
        paragraphs: [
          'Da: botoxul și fillerele se completează perfect. Botoxul relaxează mușchii treimii superioare a feței, fillerele restabilesc volumul treimii mijlocii și inferioare. Abordarea complexă oferă cel mai bun rezultat de întinerire.',
          'Secvență: mai întâi botox (în 2 săptămâni rezultat), apoi fillere. Sau simultan (în zone diferite).',
        ],
      },
      {
        h2: 'Botox și fillere la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm ambele proceduri. Abordare individuală: evaluăm tipul de îmbătrânire, zonele de corecție, elaborăm plan complex.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-mify-pravda': {
    sectionsRu: [
      {
        h2: 'Миф 1: Ботокс — это яд',
        paragraphs: [
          'Правда: ботулотоксин — это токсин, но в косметологии используются микроскопические дозы (в тысячи раз меньше токсичной). Препарат одобрен FDA, используется более 30 лет. Безопасность доказана миллионами процедур.',
          'Аналогия: многие лекарства в больших дозах токсичны, но в терапевтических дозах безопасны и эффективны.',
        ],
      },
      {
        h2: 'Миф 2: Лицо станет "замороженным"',
        paragraphs: [
          'Правда: при правильной технике и дозировке мимика сохраняется естественной. "Замороженное" лицо — результат передозировки или неправильной техники. Современный подход: естественный результат, сохранение мимики.',
          'Решение: выбирайте квалифицированного врача, обсуждайте желаемый результат (естественный или более выраженный).',
        ],
      },
      {
        h2: 'Миф 3: После ботокса нельзя остановиться',
        paragraphs: [
          'Правда: ботокс не вызывает физической зависимости. Можно прекратить процедуры в любой момент. Мышцы вернутся к прежнему состоянию, морщины вернутся (но не станут глубже, чем были).',
          'Психологический аспект: многим нравится результат, поэтому они продолжают процедуры. Но это выбор, а не зависимость.',
        ],
      },
      {
        h2: 'Миф 4: Ботокс накапливается в организме',
        paragraphs: [
          'Правда: ботулотоксин полностью выводится из организма за 3-6 месяцев. Не накапливается в тканях, не влияет на другие органы. Каждая процедура — это новая доза, которая действует временно.',
        ],
      },
      {
        h2: 'Миф 5: Ботокс только для женщин',
        paragraphs: [
          'Правда: ботокс подходит и мужчинам. Около 10-15% пациентов — мужчины. Особенности: мужчинам требуются большие дозы (мышцы сильнее), результат более естественный (сохраняется мужественность).',
        ],
      },
      {
        h2: 'Факты о ботоксе в Meddera',
        paragraphs: [
          'В клинике Meddera используем оригинальные препараты, индивидуальный подход. Развенчиваем мифы на консультации, показываем реальные результаты.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Mit 1: Botoxul este otravă',
        paragraphs: [
          'Adevăr: toxina botulinică este o toxină, dar în cosmetologie se folosesc doze microscopice (de mii de ori mai mici decât doza toxică). Preparatul este aprobat de FDA, se folosește de peste 30 ani. Siguranța este dovedită de milioane de proceduri.',
          'Analogie: multe medicamente în doze mari sunt toxice, dar în doze terapeutice sunt sigure și eficiente.',
        ],
      },
      {
        h2: 'Mit 2: Fața va deveni "înghețată"',
        paragraphs: [
          'Adevăr: la tehnica și dozajul corect mimica rămâne naturală. Fața "înghețată" — rezultat al supradozajului sau tehnicii incorecte. Abordarea modernă: rezultat natural, păstrarea mimicii.',
          'Soluție: alegeți medic calificat, discutați rezultatul dorit (natural sau mai pronunțat).',
        ],
      },
      {
        h2: 'Mit 3: După botox nu te poți opri',
        paragraphs: [
          'Adevăr: botoxul nu provoacă dependență fizică. Puteți opri procedurile oricând. Mușchii se vor întoarce la starea anterioară, ridurile se vor întoarce (dar nu vor deveni mai profunde decât au fost).',
          'Aspect psihologic: multora le place rezultatul, de aceea continuă procedurile. Dar este alegere, nu dependență.',
        ],
      },
      {
        h2: 'Mit 4: Botoxul se acumulează în organism',
        paragraphs: [
          'Adevăr: toxina botulinică este complet eliminată din organism în 3-6 luni. Nu se acumulează în țesuturi, nu influențează alte organe. Fiecare procedură — este o doză nouă care acționează temporar.',
        ],
      },
      {
        h2: 'Mit 5: Botoxul este doar pentru femei',
        paragraphs: [
          'Adevăr: botoxul este potrivit și pentru bărbați. Aproximativ 10-15% din pacienți — bărbați. Particularități: bărbații necesită doze mai mari (mușchi mai puternici), rezultat mai natural (se păstrează masculinitatea).',
        ],
      },
      {
        h2: 'Fapte despre botox la Meddera',
        paragraphs: [
          'La clinica Meddera folosim preparate originale, abordare individuală. Demontăm miturile la consultație, arătăm rezultate reale.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-preparaty-vidy': {
    sectionsRu: [
      {
        h2: 'Основные препараты ботулотоксина',
        paragraphs: [
          'Ботокс (Botox): оригинальный препарат от Allergan (США). Самый известный, используется с 1989 года. Высокая степень очистки, предсказуемый результат. Диспорт (Dysport): препарат от Ipsen (Франция). Более быстрое начало действия (2-3 дня), больше диффузия.',
          'Ксеомин (Xeomin): препарат от Merz (Германия). Не содержит комплексообразующих белков, меньше риск развития резистентности. Лантокс (Lantox): российский препарат. Более доступная цена.',
        ],
      },
      {
        h2: 'Разница между препаратами',
        paragraphs: [
          'Единицы измерения: у каждого препарата свои единицы. 1 единица Ботокса ≈ 2.5-3 единицы Диспорта ≈ 1 единица Ксеомина. Важно: нельзя напрямую сравнивать дозы разных препаратов.',
          'Диффузия: Диспорт имеет большую диффузию (распространяется на большую площадь). Плюс: меньше инъекций для больших зон. Минус: выше риск миграции в соседние мышцы.',
        ],
      },
      {
        h2: 'Какой препарат лучше',
        paragraphs: [
          'Нет однозначного ответа: все препараты эффективны и безопасны при правильном применении. Выбор зависит от: зоны коррекции (для больших зон — Диспорт, для точечной коррекции — Ботокс, Ксеомин), индивидуальной чувствительности.',
          'Опыт врача: важнее марки препарата. Квалифицированный врач знает особенности каждого препарата, правильно рассчитывает дозы.',
        ],
      },
      {
        h2: 'Можно ли менять препараты',
        paragraphs: [
          'Да: можно менять препараты между процедурами. Если один препарат перестал действовать (резистентность), можно попробовать другой. Но лучше не менять без причины (если текущий препарат даёт хороший результат).',
        ],
      },
      {
        h2: 'Препараты в Meddera',
        paragraphs: [
          'В клинике Meddera используем оригинальные препараты: Ботокс, Диспорт, Ксеомин. Подбираем препарат индивидуально с учётом зоны коррекции и ваших предпочтений.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Preparate principale cu toxină botulină',
        paragraphs: [
          'Botox: preparat original de la Allergan (SUA). Cel mai cunoscut, se folosește din 1989. Grad înalt de purificare, rezultat previzibil. Dysport: preparat de la Ipsen (Franța). Începere mai rapidă a acțiunii (2-3 zile), difuzie mai mare.',
          'Xeomin: preparat de la Merz (Germania). Nu conține proteine complexante, risc mai mic de dezvoltare a rezistenței. Lantox: preparat rusesc. Preț mai accesibil.',
        ],
      },
      {
        h2: 'Diferența între preparate',
        paragraphs: [
          'Unități de măsură: fiecare preparat are propriile unități. 1 unitate Botox ≈ 2.5-3 unități Dysport ≈ 1 unitate Xeomin. Important: nu se pot compara direct dozele diferitelor preparate.',
          'Difuzie: Dysport are difuzie mai mare (se răspândește pe suprafață mai mare). Plus: mai puține injecții pentru zone mari. Minus: risc mai mare de migrare în mușchii vecini.',
        ],
      },
      {
        h2: 'Care preparat este mai bun',
        paragraphs: [
          'Nu există răspuns univoc: toate preparatele sunt eficiente și sigure la aplicare corectă. Alegerea depinde de: zona de corecție (pentru zone mari — Dysport, pentru corecție punctuală — Botox, Xeomin), sensibilitate individuală.',
          'Experiența medicului: mai importantă decât marca preparatului. Medicul calificat cunoaște particularitățile fiecărui preparat, calculează corect dozele.',
        ],
      },
      {
        h2: 'Se pot schimba preparatele',
        paragraphs: [
          'Da: se pot schimba preparatele între proceduri. Dacă un preparat a încetat să acționeze (rezistență), se poate încerca altul. Dar mai bine nu schimbați fără motiv (dacă preparatul curent oferă rezultat bun).',
        ],
      },
      {
        h2: 'Preparate la Meddera',
        paragraphs: [
          'La clinica Meddera folosim preparate originale: Botox, Dysport, Xeomin. Selectăm preparatul individual ținând cont de zona de corecție și preferințele dumneavoastră.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-gusiyne-lapki': {
    sectionsRu: [
      {
        h2: 'Что такое гусиные лапки',
        paragraphs: [
          'Гусиные лапки — мимические морщины вокруг глаз, расходящиеся веером от внешних уголков. Появляются при улыбке, прищуривании. Причины: активная работа круговой мышцы глаза, тонкая кожа вокруг глаз (мало сальных желёз, коллагена), солнце (прищуривание от яркого света).',
          'Возраст появления: первые гусиные лапки — 25-30 лет (динамические, видны только при улыбке). После 35-40 лет — становятся статическими (видны в покое).',
        ],
      },
      {
        h2: 'Как ботокс убирает гусиные лапки',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в круговую мышцу глаза расслабляют её. Мышца перестаёт сокращаться при улыбке, морщины разглаживаются. Техника: 2-3 точки инъекций с каждой стороны (внешний угол глаза, виски).',
          'Результат: через 3-7 дней морщины начинают разглаживаться. Максимальный эффект через 10-14 дней. Длительность: 3-4 месяца (зона активной мимики).',
        ],
      },
      {
        h2: 'Особенности процедуры',
        paragraphs: [
          'Дозировка: 6-15 единиц Ботокса на каждую сторону (зависит от выраженности морщин, силы мышц). Важно: не передозировать (риск опущения нижнего века, асимметрия улыбки).',
          'Безопасность: процедура безопасна при правильной технике. Квалифицированный врач знает анатомию, избегает опасных зон.',
        ],
      },
      {
        h2: 'Можно ли сочетать с другими процедурами',
        paragraphs: [
          'Да: ботокс для гусиных лапок хорошо сочетается с филлерами под глаза (убирают тёмные круги, впадины), пилингами (улучшают качество кожи), лазерными процедурами (стимулируют коллаген).',
          'Последовательность: сначала ботокс, через 2 недели — другие процедуры.',
        ],
      },
      {
        h2: 'Коррекция гусиных лапок в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса для коррекции гусиных лапок. Индивидуальный подход: оцениваем глубину морщин, силу мышц, желаемый результат.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce sunt picioarele de gâscă',
        paragraphs: [
          'Picioarele de gâscă — riduri mimice în jurul ochilor, care se răspândesc în evantai de la colțurile exterioare. Apar la zâmbet, strâmbătură. Cauze: lucrul activ al mușchiului circular al ochiului, piele subțire în jurul ochilor (puține glande sebacee, colagen), soare (strâmbătură de la lumina puternică).',
          'Vârsta de apariție: primele picioare de gâscă — 25-30 ani (dinamice, vizibile doar la zâmbet). După 35-40 ani — devin statice (vizibile în repaus).',
        ],
      },
      {
        h2: 'Cum elimină botoxul picioarele de gâscă',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în mușchiul circular al ochiului îl relaxează. Mușchiul încetează să se contracte la zâmbet, ridurile se netezesc. Tehnică: 2-3 puncte de injecții de fiecare parte (colț exterior al ochiului, tâmple).',
          'Rezultat: în 3-7 zile ridurile încep să se netezească. Efect maxim în 10-14 zile. Durată: 3-4 luni (zonă de mimică activă).',
        ],
      },
      {
        h2: 'Particularități ale procedurii',
        paragraphs: [
          'Dozaj: 6-15 unități Botox pe fiecare parte (depinde de pronunțarea ridurilor, forța mușchilor). Important: nu supradozați (risc de coborâre a pleoapei inferioare, asimetrie a zâmbetului).',
          'Siguranță: procedura este sigură la tehnica corectă. Medicul calificat cunoaște anatomia, evită zonele periculoase.',
        ],
      },
      {
        h2: 'Se poate combina cu alte proceduri',
        paragraphs: [
          'Da: botoxul pentru picioare de gâscă se combină bine cu fillere sub ochi (elimină cercurile întunecate, gropile), peeling-uri (îmbunătățesc calitatea pielii), proceduri cu laser (stimulează colagenul).',
          'Secvență: mai întâi botox, în 2 săptămâni — alte proceduri.',
        ],
      },
      {
        h2: 'Corecția picioarelor de gâscă la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox pentru corecția picioarelor de gâscă. Abordare individuală: evaluăm adâncimea ridurilor, forța mușchilor, rezultatul dorit.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-mezhbrove-skladka-lva': {
    sectionsRu: [
      {
        h2: 'Что такое складка льва',
        paragraphs: [
          'Складка льва — вертикальные морщины между бровями, появляются при нахмуривании. Причины: активная работа мышц-сморщивателей (corrugator supercilii, procerus), привычка хмуриться (концентрация, яркий свет, плохое зрение).',
          'Характер: динамические морщины (появляются при мимике) постепенно становятся статическими (видны в покое). Придают лицу угрюмый, усталый вид.',
        ],
      },
      {
        h2: 'Как ботокс убирает складку льва',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в мышцы-сморщиватели расслабляют их. Мышцы перестают сводить брови, морщины разглаживаются. Техника: 4-5 точек инъекций в области межбровья.',
          'Результат: через 3-7 дней морщины начинают разглаживаться. Максимальный эффект через 10-14 дней. Лицо выглядит более открытым, доброжелательным. Длительность: 4-6 месяцев.',
        ],
      },
      {
        h2: 'Дозировка и техника',
        paragraphs: [
          'Дозировка: 15-25 единиц Ботокса (зависит от глубины морщин, силы мышц, пола — мужчинам требуется больше). Важно: правильная техника (избегать инъекций слишком низко — риск опущения бровей).',
          'Особенности: у некоторых людей мышцы-сморщиватели очень сильные, требуются большие дозы или повторные процедуры чаще.',
        ],
      },
      {
        h2: 'Можно ли сочетать с другими зонами',
        paragraphs: [
          'Да: межбровье часто корректируют вместе с лбом (комплексная коррекция верхней трети лица). Это даёт гармоничный результат, предотвращает компенсаторное поднятие бровей.',
          'Также сочетается с: гусиными лапками, филлерами (если морщины очень глубокие, ботокс + филлер).',
        ],
      },
      {
        h2: 'Коррекция межбровья в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса для коррекции складки льва. Индивидуальный подход: оцениваем глубину морщин, силу мышц, анатомические особенности.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este cuta leului',
        paragraphs: [
          'Cuta leului — riduri verticale între sprâncene, apar la încruntare. Cauze: lucrul activ al mușchilor încreți (corrugator supercilii, procerus), obiceiul de a se încrunta (concentrare, lumină puternică, vedere slabă).',
          'Caracter: riduri dinamice (apar la mimică) devin treptat statice (vizibile în repaus). Dau feței aspect posomorât, obosit.',
        ],
      },
      {
        h2: 'Cum elimină botoxul cuta leului',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în mușchii încreți îi relaxează. Mușchii încetează să apropie sprâncenele, ridurile se netezesc. Tehnică: 4-5 puncte de injecții în zona dintre sprâncene.',
          'Rezultat: în 3-7 zile ridurile încep să se netezească. Efect maxim în 10-14 zile. Fața arată mai deschisă, prietenoasă. Durată: 4-6 luni.',
        ],
      },
      {
        h2: 'Dozaj și tehnică',
        paragraphs: [
          'Dozaj: 15-25 unități Botox (depinde de adâncimea ridurilor, forța mușchilor, sex — bărbații necesită mai mult). Important: tehnica corectă (evitați injecțiile prea jos — risc de coborâre a sprâncenelor).',
          'Particularități: la unele persoane mușchii încreți sunt foarte puternici, necesită doze mari sau proceduri repetate mai des.',
        ],
      },
      {
        h2: 'Se poate combina cu alte zone',
        paragraphs: [
          'Da: între sprâncene se corectează adesea împreună cu fruntea (corecție complexă a treimii superioare a feței). Acest lucru oferă rezultat armonios, previne ridicarea compensatorie a sprâncenelor.',
          'De asemenea se combină cu: picioare de gâscă, fillere (dacă ridurile sunt foarte profunde, botox + filler).',
        ],
      },
      {
        h2: 'Corecția între sprâncene la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox pentru corecția cutei leului. Abordare individuală: evaluăm adâncimea ridurilor, forța mușchilor, particularitățile anatomice.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-lob-gorizontalnye-morshchiny': {
    sectionsRu: [
      {
        h2: 'Почему появляются морщины на лбу',
        paragraphs: [
          'Причины: активная работа лобной мышцы (поднятие бровей при удивлении, разговоре), привычка поднимать брови (компенсация опущения верхних век), возрастные изменения (снижение эластичности кожи).',
          'Характер: динамические морщины (появляются при поднятии бровей) постепенно становятся статическими (видны в покое). Количество морщин: от 2-3 до 7-8 горизонтальных линий.',
        ],
      },
      {
        h2: 'Как ботокс разглаживает лоб',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в лобную мышцу расслабляют её. Мышца перестаёт поднимать брови, морщины разглаживаются. Техника: 4-8 точек инъекций на лбу (зависит от площади, глубины морщин).',
          'Результат: через 3-7 дней морщины начинают разглаживаться. Максимальный эффект через 10-14 дней. Лоб становится гладким. Длительность: 4-6 месяцев.',
        ],
      },
      {
        h2: 'Важные нюансы коррекции лба',
        paragraphs: [
          'Риск опущения бровей: если полностью расслабить лобную мышцу, брови могут опуститься (особенно при возрастном птозе). Решение: частичное расслабление (сохраняется лёгкая подвижность), или коррекция только центральной части лба.',
          'Сочетание с межбровьем: лоб и межбровье часто корректируют вместе (гармоничный результат, предотвращение компенсаторного напряжения мышц).',
        ],
      },
      {
        h2: 'Дозировка',
        paragraphs: [
          'Дозировка: 10-30 единиц Ботокса (зависит от площади лба, глубины морщин, силы мышц, пола). Мужчинам требуется больше (мышцы сильнее). Важно: не передозировать (риск "тяжёлых" бровей, неестественного вида).',
        ],
      },
      {
        h2: 'Коррекция лба в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса для коррекции морщин лба. Индивидуальный подход: оцениваем высоту лба, положение бровей, глубину морщин.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'De ce apar ridurile pe frunte',
        paragraphs: [
          'Cauze: lucrul activ al mușchiului frontal (ridicarea sprâncenelor la surprindere, vorbire), obiceiul de a ridica sprâncenele (compensarea coborârii pleoapelor superioare), modificări legate de vârstă (scăderea elasticității pielii).',
          'Caracter: riduri dinamice (apar la ridicarea sprâncenelor) devin treptat statice (vizibile în repaus). Numărul de riduri: de la 2-3 până la 7-8 linii orizontale.',
        ],
      },
      {
        h2: 'Cum netezește botoxul fruntea',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în mușchiul frontal îl relaxează. Mușchiul încetează să ridice sprâncenele, ridurile se netezesc. Tehnică: 4-8 puncte de injecții pe frunte (depinde de suprafață, adâncimea ridurilor).',
          'Rezultat: în 3-7 zile ridurile încep să se netezească. Efect maxim în 10-14 zile. Fruntea devine netedă. Durată: 4-6 luni.',
        ],
      },
      {
        h2: 'Nuanțe importante ale corecției frunții',
        paragraphs: [
          'Risc de coborâre a sprâncenelor: dacă relaxați complet mușchiul frontal, sprâncenele pot coborî (în special la ptoză legată de vârstă). Soluție: relaxare parțială (se păstrează mobilitate ușoară), sau corecție doar a părții centrale a frunții.',
          'Combinație cu zona dintre sprâncene: fruntea și zona dintre sprâncene se corectează adesea împreună (rezultat armonios, prevenirea tensiunii compensatorii a mușchilor).',
        ],
      },
      {
        h2: 'Dozaj',
        paragraphs: [
          'Dozaj: 10-30 unități Botox (depinde de suprafața frunții, adâncimea ridurilor, forța mușchilor, sex). Bărbații necesită mai mult (mușchi mai puternici). Important: nu supradozați (risc de sprâncene "grele", aspect nenatural).',
        ],
      },
      {
        h2: 'Corecția frunții la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox pentru corecția ridurilor de pe frunte. Abordare individuală: evaluăm înălțimea frunții, poziția sprâncenelor, adâncimea ridurilor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-brovi-lifting': {
    sectionsRu: [
      {
        h2: 'Что такое лифтинг бровей ботоксом',
        paragraphs: [
          'Лифтинг бровей — подъём опущенных бровей с помощью инъекций ботулотоксина. Не хирургический метод, без разрезов и швов. Механизм: расслабление мышц, опускающих брови, позволяет мышцам, поднимающим брови, работать без противодействия. Брови приподнимаются на 1-3 мм.',
          'Показания: опущенные брови (возрастное, после неудачных процедур), "тяжёлые" веки, асимметрия бровей.',
        ],
      },
      {
        h2: 'Техника процедуры',
        paragraphs: [
          'Зоны инъекций: хвост брови (латеральная часть круговой мышцы глаза), под бровью (мышца, опускающая бровь). Дозировка: 2-4 единицы Ботокса на каждую сторону. Результат: через 7-14 дней брови приподнимаются, взгляд становится более открытым.',
          'Важно: не переборщить с дозой (риск чрезмерного подъёма, неестественный вид). Квалифицированный врач знает точки инъекций, правильные дозы.',
        ],
      },
      {
        h2: 'Преимущества метода',
        paragraphs: [
          'Безоперационный: без разрезов, швов, длительной реабилитации. Быстро: процедура 10-15 минут, результат через 1-2 недели. Обратимый: эффект временный (4-6 месяцев), если не понравится — можно не повторять.',
          'Естественный результат: лёгкий подъём бровей, открытый взгляд без "удивлённого" вида.',
        ],
      },
      {
        h2: 'Ограничения метода',
        paragraphs: [
          'Подъём ограничен: 1-3 мм (не заменит хирургический лифтинг при выраженном птозе). Временный эффект: требуются повторные процедуры каждые 4-6 месяцев. Не подходит при очень низком положении бровей (нужна операция).',
        ],
      },
      {
        h2: 'Лифтинг бровей в Meddera',
        paragraphs: [
          'В клинике Meddera проводим лифтинг бровей ботоксом. Индивидуальный подход: оцениваем положение бровей, степень птоза, желаемый результат.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este liftingul sprâncenelor cu botox',
        paragraphs: [
          'Liftingul sprâncenelor — ridicarea sprâncenelor coborâte cu ajutorul injecțiilor cu toxină botulină. Metodă nechirurgicală, fără incizii și cusături. Mecanism: relaxarea mușchilor care coboară sprâncenele, permite mușchilor care ridică sprâncenele să lucreze fără opoziție. Sprâncenele se ridică cu 1-3 mm.',
          'Indicații: sprâncene coborâte (legate de vârstă, după proceduri nereușite), pleoape "grele", asimetrie a sprâncenelor.',
        ],
      },
      {
        h2: 'Tehnica procedurii',
        paragraphs: [
          'Zone de injecții: coada sprâncenei (partea laterală a mușchiului circular al ochiului), sub sprânceană (mușchiul care coboară sprânceana). Dozaj: 2-4 unități Botox pe fiecare parte. Rezultat: în 7-14 zile sprâncenele se ridică, privirea devine mai deschisă.',
          'Important: nu exagerați cu doza (risc de ridicare excesivă, aspect nenatural). Medicul calificat cunoaște punctele de injecții, dozele corecte.',
        ],
      },
      {
        h2: 'Avantajele metodei',
        paragraphs: [
          'Fără operație: fără incizii, cusături, reabilitare îndelungată. Rapid: procedura 10-15 minute, rezultat în 1-2 săptămâni. Reversibil: efect temporar (4-6 luni), dacă nu place — nu se poate repeta.',
          'Rezultat natural: ridicare ușoară a sprâncenelor, privire deschisă fără aspect "surprins".',
        ],
      },
      {
        h2: 'Limitări ale metodei',
        paragraphs: [
          'Ridicare limitată: 1-3 mm (nu înlocuiește liftingul chirurgical la ptoză pronunțată). Efect temporar: necesită proceduri repetate la fiecare 4-6 luni. Nu este potrivit la poziție foarte joasă a sprâncenelor (necesită operație).',
        ],
      },
      {
        h2: 'Liftingul sprâncenelor la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm lifting de sprâncene cu botox. Abordare individuală: evaluăm poziția sprâncenelor, gradul de ptoză, rezultatul dorit.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-nos-korrekciya': {
    sectionsRu: [
      {
        h2: 'Какие проблемы носа корректирует ботокс',
        paragraphs: [
          'Опущенный кончик носа: с возрастом или при улыбке кончик носа опускается. Ботокс расслабляет мышцу, опускающую перегородку носа, кончик приподнимается на 1-2 мм. Морщины на переносице: "кроличьи морщины" при сморщивании носа.',
          'Широкие крылья носа: ботокс расслабляет мышцы, расширяющие крылья носа (эффект небольшой, не заменит ринопластику).',
        ],
      },
      {
        h2: 'Техника коррекции',
        paragraphs: [
          'Опущенный кончик: 1-2 единицы Ботокса в основание носовой перегородки (между носом и верхней губой). Результат: кончик приподнимается, нос выглядит более изящным. Кроличьи морщины: 2-4 единицы в переносицу.',
          'Важно: не передозировать (риск затруднения дыхания, неестественного вида). Процедура требует опыта врача, знания анатомии.',
        ],
      },
      {
        h2: 'Результаты и длительность',
        paragraphs: [
          'Результат: через 7-14 дней. Эффект тонкий, естественный (не радикальное изменение формы носа). Длительность: 3-4 месяца. Подходит для: лёгкой коррекции, профилактики опущения кончика носа, коррекции после ринопластики.',
        ],
      },
      {
        h2: 'Ограничения',
        paragraphs: [
          'Не заменит ринопластику: ботокс даёт небольшую коррекцию (1-2 мм). При выраженных деформациях носа нужна операция. Временный эффект: требуются повторные процедуры.',
        ],
      },
      {
        h2: 'Коррекция носа в Meddera',
        paragraphs: [
          'В клинике Meddera проводим коррекцию носа ботоксом. Индивидуальный подход: оцениваем форму носа, степень опущения кончика, желаемый результат.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce probleme ale nasului corectează botoxul',
        paragraphs: [
          'Vârful coborât al nasului: cu vârsta sau la zâmbet vârful nasului coboară. Botoxul relaxează mușchiul care coboară septul nazal, vârful se ridică cu 1-2 mm. Riduri pe nas: "riduri de iepure" la încreținarea nasului.',
          'Aripi late ale nasului: botoxul relaxează mușchii care lărgesc aripile nasului (efect mic, nu înlocuiește rinoplastia).',
        ],
      },
      {
        h2: 'Tehnica corecției',
        paragraphs: [
          'Vârf coborât: 1-2 unități Botox la baza septului nazal (între nas și buza superioară). Rezultat: vârful se ridică, nasul arată mai delicat. Riduri de iepure: 2-4 unități în nas.',
          'Important: nu supradozați (risc de dificultate la respirație, aspect nenatural). Procedura necesită experiența medicului, cunoașterea anatomiei.',
        ],
      },
      {
        h2: 'Rezultate și durată',
        paragraphs: [
          'Rezultat: în 7-14 zile. Efect subtil, natural (nu schimbare radicală a formei nasului). Durată: 3-4 luni. Potrivit pentru: corecție ușoară, prevenirea coborârii vârfului nasului, corecție după rinoplastie.',
        ],
      },
      {
        h2: 'Limitări',
        paragraphs: [
          'Nu înlocuiește rinoplastia: botoxul oferă corecție mică (1-2 mm). La deformări pronunțate ale nasului este necesară operația. Efect temporar: necesită proceduri repetate.',
        ],
      },
      {
        h2: 'Corecția nasului la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm corecție a nasului cu botox. Abordare individuală: evaluăm forma nasului, gradul de coborâre a vârfului, rezultatul dorit.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-podborodok-morshchiny': {
    sectionsRu: [
      {
        h2: 'Почему появляются морщины на подбородке',
        paragraphs: [
          'Причины: гиперактивность подбородочной мышцы (mentalis), возрастные изменения (снижение эластичности кожи, потеря объёма), привычка поджимать губы, напрягать подбородок. Проявления: "апельсиновая корка" (мелкие бугорки), вертикальные морщины, неровная поверхность подбородка.',
        ],
      },
      {
        h2: 'Как ботокс разглаживает подбородок',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в подбородочную мышцу расслабляют её. Мышца перестаёт сокращаться, кожа разглаживается. Техника: 2-4 точки инъекций в области подбородка. Дозировка: 4-8 единиц Ботокса.',
          'Результат: через 7-14 дней подбородок становится гладким, исчезает "апельсиновая корка". Длительность: 3-4 месяца.',
        ],
      },
      {
        h2: 'Дополнительные эффекты',
        paragraphs: [
          'Лёгкий лифтинг: расслабление подбородочной мышцы может слегка приподнять уголки рта (если они опущены из-за напряжения подбородка). Улучшение контура: подбородок выглядит более чётким, гладким.',
        ],
      },
      {
        h2: 'Можно ли сочетать с филлерами',
        paragraphs: [
          'Да: при выраженных морщинах, потере объёма подбородка ботокс сочетают с филлерами. Ботокс расслабляет мышцу, филлер восполняет объём. Последовательность: сначала ботокс, через 2 недели — филлер.',
        ],
      },
      {
        h2: 'Коррекция подбородка в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса для коррекции морщин подбородка. Индивидуальный подход: оцениваем выраженность морщин, тонус мышц.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'De ce apar ridurile pe bărbie',
        paragraphs: [
          'Cauze: hiperactivitatea mușchiului bărbiei (mentalis), modificări legate de vârstă (scăderea elasticității pielii, pierderea volumului), obiceiul de a strânge buzele, tensionarea bărbiei. Manifestări: "coajă de portocală" (umflături mici), riduri verticale, suprafață neuniformă a bărbiei.',
        ],
      },
      {
        h2: 'Cum netezește botoxul bărbia',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în mușchiul bărbiei îl relaxează. Mușchiul încetează să se contracte, pielea se netezește. Tehnică: 2-4 puncte de injecții în zona bărbiei. Dozaj: 4-8 unități Botox.',
          'Rezultat: în 7-14 zile bărbia devine netedă, dispare "coaja de portocală". Durată: 3-4 luni.',
        ],
      },
      {
        h2: 'Efecte suplimentare',
        paragraphs: [
          'Lifting ușor: relaxarea mușchiului bărbiei poate ridica ușor colțurile gurii (dacă sunt coborâte din cauza tensiunii bărbiei). Îmbunătățirea conturului: bărbia arată mai clară, netedă.',
        ],
      },
      {
        h2: 'Se poate combina cu fillere',
        paragraphs: [
          'Da: la riduri pronunțate, pierderea volumului bărbiei botoxul se combină cu fillere. Botoxul relaxează mușchiul, fillerul restabilește volumul. Secvență: mai întâi botox, în 2 săptămâni — filler.',
        ],
      },
      {
        h2: 'Corecția bărbiei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox pentru corecția ridurilor bărbiei. Abordare individuală: evaluăm pronunțarea ridurilor, tonusul mușchilor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-sheya-platizmy': {
    sectionsRu: [
      {
        h2: 'Что такое тяжи на шее',
        paragraphs: [
          'Тяжи (платизмальные тяжи) — вертикальные выступающие полосы на шее, вызванные напряжением платизмы (поверхностной мышцы шеи). Причины: возрастное ослабление мышцы, потеря эластичности кожи, генетическая предрасположенность. Проявления: видны при напряжении шеи (разговор, глотание), в покое — у людей старше 50 лет.',
        ],
      },
      {
        h2: 'Как ботокс убирает тяжи',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в платизму расслабляют мышцу. Тяжи разглаживаются, шея выглядит более гладкой, молодой. Техника: множественные инъекции вдоль тяжей (10-20 точек). Дозировка: 20-50 единиц Ботокса (зависит от выраженности тяжей).',
          'Результат: через 7-14 дней тяжи становятся менее заметными или исчезают. Длительность: 3-4 месяца.',
        ],
      },
      {
        h2: 'Дополнительные эффекты',
        paragraphs: [
          'Лифтинг нижней трети лица: расслабление платизмы может слегка приподнять овал лица (мышца тянет кожу вниз). Разглаживание горизонтальных морщин: на шее (эффект небольшой).',
        ],
      },
      {
        h2: 'Ограничения метода',
        paragraphs: [
          'Не заменит пластику шеи: при выраженном птозе, избытке кожи нужна операция. Временный эффект: требуются повторные процедуры. Риски: при неправильной технике — затруднение глотания, слабость мышц шеи (редко).',
        ],
      },
      {
        h2: 'Коррекция шеи в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса для коррекции тяжей шеи. Индивидуальный подход: оцениваем выраженность тяжей, состояние кожи шеи.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce sunt cordoanele de pe gât',
        paragraphs: [
          'Cordoanele (cordoane platismale) — benzi verticale proeminente pe gât, cauzate de tensiunea platismei (mușchiul superficial al gâtului). Cauze: slăbirea musculară legată de vârstă, pierderea elasticității pielii, predispoziție genetică. Manifestări: vizibile la tensionarea gâtului (vorbire, înghițire), în repaus — la persoane peste 50 ani.',
        ],
      },
      {
        h2: 'Cum elimină botoxul cordoanele',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în platismă relaxează mușchiul. Cordoanele se netezesc, gâtul arată mai neted, mai tânăr. Tehnică: injecții multiple de-a lungul cordoanelor (10-20 puncte). Dozaj: 20-50 unități Botox (depinde de pronunțarea cordoanelor).',
          'Rezultat: în 7-14 zile cordoanele devin mai puțin vizibile sau dispar. Durată: 3-4 luni.',
        ],
      },
      {
        h2: 'Efecte suplimentare',
        paragraphs: [
          'Lifting al treimii inferioare a feței: relaxarea platismei poate ridica ușor ovalul feței (mușchiul trage pielea în jos). Netezirea ridurilor orizontale: pe gât (efect mic).',
        ],
      },
      {
        h2: 'Limitări ale metodei',
        paragraphs: [
          'Nu înlocuiește plastica gâtului: la ptoză pronunțată, exces de piele este necesară operația. Efect temporar: necesită proceduri repetate. Riscuri: la tehnică incorectă — dificultate la înghițire, slăbiciune a mușchilor gâtului (rar).',
        ],
      },
      {
        h2: 'Corecția gâtului la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox pentru corecția cordoanelor gâtului. Abordare individuală: evaluăm pronunțarea cordoanelor, starea pielii gâtului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-gipergidro z-podmyshek': {
    sectionsRu: [
      {
        h2: 'Что такое гипергидроз',
        paragraphs: [
          'Гипергидроз — повышенная потливость, превышающая потребности терморегуляции. Первичный: без видимой причины, чаще подмышки, ладони, стопы. Вторичный: симптом заболевания (гипертиреоз, диабет). Влияет на качество жизни: мокрая одежда, неприятный запах, социальный дискомфорт.',
        ],
      },
      {
        h2: 'Как ботокс лечит гипергидроз',
        paragraphs: [
          'Механизм: ботулотоксин блокирует передачу нервных импульсов к потовым железам. Железы перестают вырабатывать пот. Техника: множественные поверхностные инъекции в подмышечную область (15-20 точек на каждую сторону). Дозировка: 50-100 единиц Ботокса на обе подмышки.',
          'Результат: через 3-7 дней потоотделение значительно снижается или прекращается. Длительность: 6-12 месяцев (дольше, чем для морщин).',
        ],
      },
      {
        h2: 'Эффективность метода',
        paragraphs: [
          'Высокая: снижение потоотделения на 80-90%. Одобрено FDA для лечения гипергидроза. Безопасно: блокируется только 2% потовых желёз организма (подмышки), терморегуляция не нарушается.',
        ],
      },
      {
        h2: 'Альтернативы',
        paragraphs: [
          'Антиперспиранты: хлорид алюминия 15-25% (менее эффективно, требует ежедневного применения). Ионофорез: для ладоней, стоп (не подходит для подмышек). Хирургия: симпатэктомия, кюретаж (инвазивно, риск компенсаторного гипергидроза).',
        ],
      },
      {
        h2: 'Лечение гипергидроза в Meddera',
        paragraphs: [
          'В клинике Meddera проводим лечение гипергидроза подмышек ботоксом. Эффективный, безопасный метод. Процедура 20-30 минут.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este hiperhidroza',
        paragraphs: [
          'Hiperhidroza — transpirație excesivă, depășind necesitățile de termoreglare. Primară: fără cauză vizibilă, mai des axile, palme, tălpi. Secundară: simptom al bolii (hipertiroidism, diabet). Afectează calitatea vieții: haine umede, miros neplăcut, disconfort social.',
        ],
      },
      {
        h2: 'Cum tratează botoxul hiperhidroza',
        paragraphs: [
          'Mecanism: toxina botulinică blochează transmiterea impulsurilor nervoase către glandele sudoripare. Glandele încetează să producă sudoare. Tehnică: injecții superficiale multiple în zona axilară (15-20 puncte pe fiecare parte). Dozaj: 50-100 unități Botox pentru ambele axile.',
          'Rezultat: în 3-7 zile transpirația scade semnificativ sau încetează. Durată: 6-12 luni (mai mult decât pentru riduri).',
        ],
      },
      {
        h2: 'Eficacitatea metodei',
        paragraphs: [
          'Înaltă: reducerea transpirației cu 80-90%. Aprobat de FDA pentru tratamentul hiperhidrozei. Sigur: se blochează doar 2% din glandele sudoripare ale organismului (axile), termoreglarea nu este perturbată.',
        ],
      },
      {
        h2: 'Alternative',
        paragraphs: [
          'Antiperspirante: clorură de aluminiu 15-25% (mai puțin eficient, necesită aplicare zilnică). Ionoforeză: pentru palme, tălpi (nu este potrivită pentru axile). Chirurgie: simpatectomie, curetaj (invaziv, risc de hiperhidroză compensatorie).',
        ],
      },
      {
        h2: 'Tratamentul hiperhidrozei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm tratament al hiperhidrozei axilelor cu botox. Metodă eficientă, sigură. Procedura 20-30 minute.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-bruksizm-skrezhetanie-zubami': {
    sectionsRu: [
      {
        h2: 'Что такое бруксизм',
        paragraphs: [
          'Бруксизм — непроизвольное скрежетание, сжимание зубов (чаще ночью, во сне). Причины: стресс, тревожность, неправильный прикус, нарушения сна. Последствия: стирание эмали, трещины зубов, боль в челюсти, головные боли, гипертрофия жевательных мышц (квадратное лицо).',
        ],
      },
      {
        h2: 'Как ботокс помогает при бруксизме',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в жевательные мышцы (массетеры) расслабляют их. Сила сжатия челюстей снижается, скрежетание уменьшается или прекращается. Техника: 2-4 точки инъекций в каждую жевательную мышцу. Дозировка: 25-50 единиц Ботокса на каждую сторону.',
          'Результат: через 7-14 дней уменьшается сила сжатия челюстей, скрежетание. Длительность: 4-6 месяцев.',
        ],
      },
      {
        h2: 'Дополнительные эффекты',
        paragraphs: [
          'Уменьшение объёма жевательных мышц: при гипертрофии (квадратное лицо) мышцы уменьшаются, лицо становится более овальным, женственным. Эффект через 2-3 месяца. Уменьшение головных болей: связанных с напряжением челюстей.',
        ],
      },
      {
        h2: 'Важные нюансы',
        paragraphs: [
          'Не влияет на жевание: дозы достаточно для расслабления при скрежетании, но не мешают нормальному жеванию. Не заменяет капы: при сильном бруксизме рекомендуется сочетать ботокс с ночными капами (защищают зубы).',
        ],
      },
      {
        h2: 'Лечение бруксизма в Meddera',
        paragraphs: [
          'В клинике Meddera проводим лечение бруксизма ботоксом. Эффективный метод снижения скрежетания зубами, защиты эмали.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este bruxismul',
        paragraphs: [
          'Bruxismul — scrâșnit, strângere involuntară a dinților (mai des noaptea, în somn). Cauze: stress, anxietate, mușcătură incorectă, tulburări de somn. Consecințe: uzura smalțului, fisuri ale dinților, durere în maxilar, dureri de cap, hipertrofia mușchilor masticatori (față pătrată).',
        ],
      },
      {
        h2: 'Cum ajută botoxul la bruxism',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în mușchii masticatori (maseteri) îi relaxează. Forța de strângere a maxilarelor scade, scrâșnitul se reduce sau încetează. Tehnică: 2-4 puncte de injecții în fiecare mușchi masticator. Dozaj: 25-50 unități Botox pe fiecare parte.',
          'Rezultat: în 7-14 zile scade forța de strângere a maxilarelor, scrâșnitul. Durată: 4-6 luni.',
        ],
      },
      {
        h2: 'Efecte suplimentare',
        paragraphs: [
          'Reducerea volumului mușchilor masticatori: la hipertrofie (față pătrată) mușchii se reduc, fața devine mai ovală, feminină. Efect în 2-3 luni. Reducerea durerilor de cap: legate de tensiunea maxilarelor.',
        ],
      },
      {
        h2: 'Nuanțe importante',
        paragraphs: [
          'Nu influențează mestecat: dozele sunt suficiente pentru relaxare la scrâșnit, dar nu împiedică mestecat normal. Nu înlocuiește gutierele: la bruxism puternic se recomandă combinarea botoxului cu gutiere nocturne (protejează dinții).',
        ],
      },
      {
        h2: 'Tratamentul bruxismului la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm tratament al bruxismului cu botox. Metodă eficientă de reducere a scrâșnitului dinților, protecție a smalțului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-desnevaya-ulybka': {
    sectionsRu: [
      {
        h2: 'Что такое десневая улыбка',
        paragraphs: [
          'Десневая улыбка (gummy smile) — чрезмерное обнажение дёсен при улыбке (более 3-4 мм). Причины: гиперактивность мышцы, поднимающей верхнюю губу, короткая верхняя губа, избыточный рост верхней челюсти, длинные зубы.',
          'Влияние: эстетический дискомфорт, неуверенность при улыбке. Не является заболеванием, но многие хотят скорректировать.',
        ],
      },
      {
        h2: 'Как ботокс корректирует десневую улыбку',
        paragraphs: [
          'Механизм: инъекции ботулотоксина в мышцу, поднимающую верхнюю губу, расслабляют её. Губа поднимается меньше, дёсны обнажаются меньше. Техника: 2-3 точки инъекций с каждой стороны носа (у основания крыльев). Дозировка: 2-4 единицы Ботокса на каждую сторону.',
          'Результат: через 7-14 дней при улыбке дёсны обнажаются на 2-4 мм меньше. Улыбка выглядит более гармоничной. Длительность: 3-4 месяца.',
        ],
      },
      {
        h2: 'Преимущества метода',
        paragraphs: [
          'Безоперационный: без разрезов, швов, длительной реабилитации. Быстро: процедура 5-10 минут, результат через 1-2 недели. Обратимый: эффект временный, если не понравится — можно не повторять. Естественный результат: улыбка остаётся естественной, только дёсны меньше видны.',
        ],
      },
      {
        h2: 'Ограничения',
        paragraphs: [
          'Не подходит при всех причинах: если десневая улыбка вызвана избыточным ростом челюсти, короткой губой — нужна ортодонтия, хирургия. Временный эффект: требуются повторные процедуры каждые 3-4 месяца.',
        ],
      },
      {
        h2: 'Коррекция десневой улыбки в Meddera',
        paragraphs: [
          'В клинике Meddera проводим коррекцию десневой улыбки ботоксом. Индивидуальный подход: оцениваем причину, степень обнажения дёсен.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Ce este zâmbetul gingival',
        paragraphs: [
          'Zâmbetul gingival (gummy smile) — expunere excesivă a gingiilor la zâmbet (mai mult de 3-4 mm). Cauze: hiperactivitatea mușchiului care ridică buza superioară, buză superioară scurtă, creștere excesivă a maxilarului superior, dinți lungi.',
          'Influență: disconfort estetic, nesiguranță la zâmbet. Nu este boală, dar mulți doresc să corecteze.',
        ],
      },
      {
        h2: 'Cum corectează botoxul zâmbetul gingival',
        paragraphs: [
          'Mecanism: injecțiile cu toxină botulină în mușchiul care ridică buza superioară îl relaxează. Buza se ridică mai puțin, gingiile se expun mai puțin. Tehnică: 2-3 puncte de injecții de fiecare parte a nasului (la baza aripilor). Dozaj: 2-4 unități Botox pe fiecare parte.',
          'Rezultat: în 7-14 zile la zâmbet gingiile se expun cu 2-4 mm mai puțin. Zâmbetul arată mai armonios. Durată: 3-4 luni.',
        ],
      },
      {
        h2: 'Avantajele metodei',
        paragraphs: [
          'Fără operație: fără incizii, cusături, reabilitare îndelungată. Rapid: procedura 5-10 minute, rezultat în 1-2 săptămâni. Reversibil: efect temporar, dacă nu place — nu se poate repeta. Rezultat natural: zâmbetul rămâne natural, doar gingiile sunt mai puțin vizibile.',
        ],
      },
      {
        h2: 'Limitări',
        paragraphs: [
          'Nu este potrivit pentru toate cauzele: dacă zâmbetul gingival este cauzat de creșterea excesivă a maxilarului, buză scurtă — este necesară ortodonție, chirurgie. Efect temporar: necesită proceduri repetate la fiecare 3-4 luni.',
        ],
      },
      {
        h2: 'Corecția zâmbetului gingival la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm corecție a zâmbetului gingival cu botox. Abordare individuală: evaluăm cauza, gradul de expunere a gingiilor.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-migreni-golovnye-boli': {
    sectionsRu: [
      {
        h2: 'Ботокс для лечения мигрени',
        paragraphs: [
          'Одобрено FDA: с 2010 года ботокс одобрен для лечения хронической мигрени (15+ дней головной боли в месяц, из них 8+ дней мигрени). Механизм: ботулотоксин блокирует высвобождение нейромедиаторов боли, снижает чувствительность нервных окончаний.',
          'Не подходит для: эпизодической мигрени (менее 15 дней головной боли в месяц), головных болей напряжения.',
        ],
      },
      {
        h2: 'Как проходит процедура',
        paragraphs: [
          'Техника: 31 точка инъекций в 7 зонах (лоб, виски, затылок, шея, плечи). Дозировка: 155-195 единиц Ботокса. Процедура: 15-20 минут, повторяется каждые 12 недель (3 месяца).',
          'Результат: через 2-3 недели после первой процедуры. Максимальный эффект после 2-3 процедур (6-9 месяцев лечения).',
        ],
      },
      {
        h2: 'Эффективность',
        paragraphs: [
          'Снижение частоты мигрени: на 50-70% (на 8-9 дней меньше головной боли в месяц). Снижение интенсивности: приступы становятся менее сильными. Улучшение качества жизни: меньше пропусков работы, социальной активности.',
        ],
      },
      {
        h2: 'Побочные эффекты',
        paragraphs: [
          'Частые: боль в шее, головная боль (парадоксально, но проходит), слабость мышц шеи. Редкие: опущение века, асимметрия. Большинство побочных эффектов проходят за 2-4 недели.',
        ],
      },
      {
        h2: 'Лечение мигрени в Meddera',
        paragraphs: [
          'В клинике Meddera проводим лечение хронической мигрени ботоксом по протоколу FDA. Требуется консультация невролога для подтверждения диагноза.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Botox pentru tratamentul migrenei',
        paragraphs: [
          'Aprobat de FDA: din 2010 botoxul este aprobat pentru tratamentul migrenei cronice (15+ zile de durere de cap pe lună, din care 8+ zile de migrenă). Mecanism: toxina botulinică blochează eliberarea neurotransmițătorilor durerii, reduce sensibilitatea terminațiilor nervoase.',
          'Nu este potrivit pentru: migrenă episodică (mai puțin de 15 zile de durere de cap pe lună), dureri de cap tensionale.',
        ],
      },
      {
        h2: 'Cum decurge procedura',
        paragraphs: [
          'Tehnică: 31 puncte de injecții în 7 zone (frunte, tâmple, ceafă, gât, umeri). Dozaj: 155-195 unități Botox. Procedura: 15-20 minute, se repetă la fiecare 12 săptămâni (3 luni).',
          'Rezultat: în 2-3 săptămâni după prima procedură. Efect maxim după 2-3 proceduri (6-9 luni de tratament).',
        ],
      },
      {
        h2: 'Eficacitate',
        paragraphs: [
          'Reducerea frecvenței migrenei: cu 50-70% (cu 8-9 zile mai puține de durere de cap pe lună). Reducerea intensității: atacurile devin mai puțin puternice. Îmbunătățirea calității vieții: mai puține absențe de la muncă, activitate socială.',
        ],
      },
      {
        h2: 'Efecte secundare',
        paragraphs: [
          'Frecvente: durere de gât, durere de cap (paradoxal, dar trece), slăbiciune a mușchilor gâtului. Rare: coborârea pleoapei, asimetrie. Majoritatea efectelor secundare trec în 2-4 săptămâni.',
        ],
      },
      {
        h2: 'Tratamentul migrenei la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm tratament al migrenei cronice cu botox conform protocolului FDA. Este necesară consultația neurologului pentru confirmarea diagnosticului.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-beremennost-grudnoe-vskarmlivanie': {
    sectionsRu: [
      {
        h2: 'Можно ли ботокс при беременности',
        paragraphs: [
          'Официальная позиция: ботокс противопоказан при беременности. FDA категория C (исследования на животных показали риск для плода, исследования на людях не проводились). Теоретический риск: ботулотоксин может проникать через плаценту, влиять на развитие плода.',
          'На практике: нет доказанных случаев вреда (многие женщины делали ботокс, не зная о беременности). Но из-за отсутствия исследований рекомендуется воздержаться.',
        ],
      },
      {
        h2: 'Можно ли ботокс при грудном вскармливании',
        paragraphs: [
          'Официальная позиция: ботокс противопоказан при ГВ. Неизвестно, проникает ли ботулотоксин в грудное молоко. Теоретический риск: если проникает, может влиять на ребёнка (слабость мышц, затруднение глотания).',
          'Рекомендации: подождать окончания ГВ или перерыв минимум 3 месяца после последнего кормления.',
        ],
      },
      {
        h2: 'Что делать, если сделали ботокс и узнали о беременности',
        paragraphs: [
          'Не паниковать: нет доказанных случаев вреда. Сообщить врачу: акушеру-гинекологу, который ведёт беременность. Наблюдение: регулярные УЗИ, скрининги для контроля развития плода. Большинство беременностей протекают нормально.',
        ],
      },
      {
        h2: 'Когда можно делать ботокс после родов',
        paragraphs: [
          'Если не кормите грудью: сразу после родов (когда восстановитесь физически). Если кормите грудью: после окончания ГВ или перерыв 3 месяца после последнего кормления. Планирование беременности: лучше сделать ботокс за 3 месяца до планируемого зачатия (препарат полностью выведется).',
        ],
      },
      {
        h2: 'Консультация в Meddera',
        paragraphs: [
          'В клинике Meddera соблюдаем все противопоказания. Перед процедурой уточняем: беременность, ГВ, планирование беременности. Безопасность пациентки — приоритет.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Se poate botox în sarcină',
        paragraphs: [
          'Poziția oficială: botoxul este contraindicat în sarcină. FDA categoria C (studiile pe animale au arătat risc pentru făt, studii pe oameni nu au fost efectuate). Risc teoretic: toxina botulinică poate pătrunde prin placentă, influența dezvoltarea fătului.',
          'În practică: nu există cazuri dovedite de rău (multe femei au făcut botox, neștiind despre sarcină). Dar din cauza lipsei de studii se recomandă abținerea.',
        ],
      },
      {
        h2: 'Se poate botox la alăptare',
        paragraphs: [
          'Poziția oficială: botoxul este contraindicat la alăptare. Nu se știe dacă toxina botulinică pătrunde în laptele matern. Risc teoretic: dacă pătrunde, poate influența copilul (slăbiciune musculară, dificultate la înghițire).',
          'Recomandări: așteptați sfârșitul alăptării sau pauză minim 3 luni după ultima hrănire.',
        ],
      },
      {
        h2: 'Ce să faceți dacă ați făcut botox și ați aflat despre sarcină',
        paragraphs: [
          'Nu intrați în panică: nu există cazuri dovedite de rău. Informați medicul: obstetrician-ginecolog care conduce sarcina. Supraveghere: ecografii regulate, screening-uri pentru controlul dezvoltării fătului. Majoritatea sarcinilor decurg normal.',
        ],
      },
      {
        h2: 'Când se poate face botox după naștere',
        paragraphs: [
          'Dacă nu alăptați: imediat după naștere (când vă veți recupera fizic). Dacă alăptați: după sfârșitul alăptării sau pauză de 3 luni după ultima hrănire. Planificarea sarcinii: mai bine faceți botox cu 3 luni înainte de concepția planificată (preparatul se va elimina complet).',
        ],
      },
      {
        h2: 'Consultație la Meddera',
        paragraphs: [
          'La clinica Meddera respectăm toate contraindicațiile. Înainte de procedură clarificăm: sarcină, alăptare, planificarea sarcinii. Siguranța pacientei — prioritate.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
  'botoks-muzhchinam-osobennosti': {
    sectionsRu: [
      {
        h2: 'Ботокс для мужчин: статистика',
        paragraphs: [
          'Растущий тренд: около 10-15% пациентов на ботоксе — мужчины. Возраст: чаще 35-55 лет (руководители, публичные люди). Мотивация: выглядеть моложе, энергичнее, конкурентоспособнее в карьере. Без "женственности": мужчины хотят естественный результат, сохранение мужественности.',
        ],
      },
      {
        h2: 'Особенности процедуры для мужчин',
        paragraphs: [
          'Большие дозы: мужские мышцы сильнее, требуется на 20-40% больше препарата. Другая техника: цель — не полное расслабление мышц, а сохранение лёгкой мимики (мужественный вид). Зоны: чаще лоб, межбровье (убрать "хмурый" вид), реже — гусиные лапки.',
          'Результат: более сдержанный, естественный (не "гладкое" лицо, а уменьшение глубины морщин).',
        ],
      },
      {
        h2: 'Популярные зоны для мужчин',
        paragraphs: [
          'Межбровье: складка льва (придаёт угрюмый, агрессивный вид). Самая популярная зона. Лоб: горизонтальные морщины (признак возраста). Гусиные лапки: реже (многие мужчины считают их "характерными").',
          'Нелицевые зоны: гипергидроз подмышек (очень популярно), бруксизм (скрежетание зубами).',
        ],
      },
      {
        h2: 'Мифы о ботоксе для мужчин',
        paragraphs: [
          'Миф: "Это не мужественно". Правда: ухоженный вид — признак успеха, самоуважения. Многие успешные мужчины делают ботокс. Миф: "Будет заметно". Правда: при правильной технике результат естественный, никто не заметит (просто будете выглядеть отдохнувшим, моложе).',
        ],
      },
      {
        h2: 'Ботокс для мужчин в Meddera',
        paragraphs: [
          'В клинике Meddera проводим инъекции ботокса мужчинам. Понимаем особенности мужской анатомии, психологии. Конфиденциальность гарантирована.',
          'Запись на консультацию: 400 MDL (первичная), 250 MDL (повторная). Адрес: Бельцы, ул. Штефан чел Маре, 13.',
        ],
      },
    ],
    sectionsRo: [
      {
        h2: 'Botox pentru bărbați: statistică',
        paragraphs: [
          'Trend în creștere: aproximativ 10-15% din pacienții la botox — bărbați. Vârstă: mai des 35-55 ani (manageri, persoane publice). Motivație: să arate mai tineri, mai energici, mai competitivi în carieră. Fără "feminitate": bărbații doresc rezultat natural, păstrarea masculinității.',
        ],
      },
      {
        h2: 'Particularități ale procedurii pentru bărbați',
        paragraphs: [
          'Doze mai mari: mușchii bărbătești sunt mai puternici, necesită cu 20-40% mai mult preparat. Tehnică diferită: scopul — nu relaxare completă a mușchilor, ci păstrarea mimicii ușoare (aspect masculin). Zone: mai des frunte, între sprâncene (eliminarea aspectului "posomorât"), mai rar — picioare de gâscă.',
          'Rezultat: mai reținut, natural (nu față "netedă", ci reducerea adâncimii ridurilor).',
        ],
      },
      {
        h2: 'Zone populare pentru bărbați',
        paragraphs: [
          'Între sprâncene: cuta leului (dă aspect posomorât, agresiv). Zona cea mai populară. Frunte: riduri orizontale (semn de vârstă). Picioare de gâscă: mai rar (mulți bărbați le consideră "caracteristice").',
          'Zone non-faciale: hiperhidroză axilară (foarte popular), bruxism (scrâșnit dinți).',
        ],
      },
      {
        h2: 'Mituri despre botox pentru bărbați',
        paragraphs: [
          'Mit: "Nu este masculin". Adevăr: aspectul îngrijit — semn de succes, autorespect. Mulți bărbați de succes fac botox. Mit: "Va fi vizibil". Adevăr: la tehnica corectă rezultatul este natural, nimeni nu va observa (pur și simplu veți arăta odihnit, mai tânăr).',
        ],
      },
      {
        h2: 'Botox pentru bărbați la Meddera',
        paragraphs: [
          'La clinica Meddera efectuăm injecții cu botox pentru bărbați. Înțelegem particularitățile anatomiei masculine, psihologiei. Confidențialitate garantată.',
          'Programare la consultație: 400 MDL (primară), 250 MDL (repetată). Adresa: Bălți, str. Ștefan cel Mare, 13.',
        ],
      },
    ],
  },
};
