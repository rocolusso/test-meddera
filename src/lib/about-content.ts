/**
 * Copy for the About block — keep in sync across locales; only language differs.
 */

export type AboutCopy = {
  sectionTitle: string;
  badge: string;
  name: string;
  bioColumns: [string[], string[]];
  specializationTitle: string;
  specColumns: [string[], string[]];
  imageAlt: string;
};

export const aboutCopy: Record<'ru' | 'ro', AboutCopy> = {
  ru: {
    sectionTitle: 'Обо мне',
    badge: 'Почему выбирают меня?',
    name: 'Пынтя Екатерина',
    bioColumns: [
      [
        'Родом из г. Дрокия, выпускница L.T. B.P.Hasdeu 2006',
        'Выпускница USMF \'Nicolae Testemițanu\' 2006-2013',
        'Резидентура и лицензия врач Дерматовенеролог 2013-2016',
        'Дерматовенеролог в г.Рышканы в AMSA Centrul consultativ 2016-2018',
        'Дерматовенеролог и косметолог, специалист центра\n  "Centrul\n  de Medicină Estetică și Cosmetologie VSV Beauty SRL" г.Бельцы 2018-2020',
      ],
      [
        'Врач Дерматовенеролог в Центре "Магнифик Норд"  с 2018',
        'Дерматолог-косметолог, специалист центра "Magnific\nMedBeauty" SRL г.Бельцы с 2020',
        'Основатель Центра "Meddera" апрель 2024',
        'Врач Дерматовенеролог 1 категории, опыт работы 11 лет',
        'Косметолог, опыт работы 7 лет',
      ],
    ],
    specializationTitle: 'Специализация',
    specColumns: [
      [
        'Дерматология',
        'Венерология',
        'Косметология',
        'Онко-дерматология',
        'Дерматоскопия',
        'Удаление доброкачественных образований (Радиокаутером,\nЭлектрокоагулятором, Jett Plasma)',
        'Эстетическая косметология',
        'Инъекционные процедуры (Филлеры, Контурная\nпластика)',
      ],
      [
        'Аугментация и увеличение губ',
        'Plasmolifting (ПРП терапия)',
        'Мезотерапия (лица ,тела, липолитики)',
        'Биоревитализация',
        'Биорепарация',
        'Полинуклеотиды',
        'Коллагеностимуляторы',
        'Нейротоксин (Ботокс)',
      ],
    ],
    imageAlt: 'Екатерина Пынтя — дерматолог-косметолог, клиника Meddera, Бельцы',
  },
  ro: {
    sectionTitle: 'Despre mine',
    badge: 'De ce mă aleg pe mine?',
    name: 'Pîntea Ecaterina',
    bioColumns: [
      [
        'Originară din orașul Drochia,\nabsolventă a L.T.B.P. Hasdeu în 2006',
        'Absolventă a USMF "Nicolae Testemițanu" 2006-2013',
        'Rezidențiat și licență de medic Dermatovenerolog 2013-2016',
        'Dermatovenerolog în orașul Rîșcani la AMSA\nCentrul consultativ 2016-2018',
        'Dermatovenerolog și cosmetolog, specialist la "Centrul\nde Medicină Estetică și Cosmetologie VSV Beauty SRL" în orașul Bălți 2018-2020',
      ],
      [
        'Medic Dermatovenerolog la Centrul "Magnific Nord" din 2018',
        'Dermatolog-cosmetolog, specialist la "Magnific\n MedBeauty" SRL în orașul Bălți din 2020',
        'Fondatoarea Centrului "Meddera" din aprilie 2024',
        'Medic Dermatovenerolog de categoria I, experiență\nde\n11 ani',
        'Cosmetolog, experiență de 7 ani',
      ],
    ],
    specializationTitle: 'Specializare',
    specColumns: [
      [
        'Dermatologie',
        'Venerologie',
        'Cosmetologie',
        'Onco-dermatologie',
        'Dermatoscopie',
        'Îndepărtarea formațiunilor benigne (cu\nRadiocauter,\nElectrocauter, Jett Plasma)',
        'Dermatologie estetică',
        'Proceduri injectabile (Fileri, Conturare\nfacială)',
      ],
      [
        'Augmentarea și mărirea volumului buzelor',
        'Plasmolifting (PRP terapie)',
        'Mezoterapie (față, corp, lipolitice)',
        'Biorevitalizare',
        'Bioreparație',
        'Polynucleotide',
        'Colagenostimulatori',
        'Neurotoxină (Botox)',
      ],
    ],
    imageAlt: 'Ecaterina Pîntea — dermatolog-cosmetolog, clinica Meddera, Bălți',
  },
};
