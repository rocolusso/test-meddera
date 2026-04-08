import type { BlogPost } from '@/blog-data/types';

/**
 * Рубрика "Дерматолог в Бельцах" — часть 2 (статьи 26-50)
 * Метаданные для масштабирования после review
 */

export const dermatologistArticlesPart2: BlogPost[] = [
  {
    id: 'melanoma-rannyaya-diagnostika',
    kind: 'article',
    clusterId: 'dermatologist',
    slugRu: 'melanoma-rannyaya-diagnostika-beltsy',
    slugRo: 'melanom-diagnostic-precoce-balti',
    publishedAt: '2026-05-13',
    dateModified: '2026-05-13',
    titleRu: 'Меланома: ранняя диагностика спасает жизни | Meddera',
    titleRo: 'Melanom: diagnosticul precoce salvează vieți | Meddera',
    descriptionRu: 'Меланома: признаки, ранняя диагностика, дерматоскопия. Консультация дерматолога в Бельцах.',
    descriptionRo: 'Melanom: semne, diagnostic precoce, dermatoscopie. Consultația dermatologului în Bălți.',
    excerptRu: 'Как распознать меланому на ранней стадии и почему это важно.',
    excerptRo: 'Cum să recunoașteți melanomul în stadiu precoce și de ce este important.',
    bodyKey: 'dermatologist-article',
    authorByline: { ru: 'Meddera Beauty Clinic', ro: 'Meddera Beauty Clinic' },
  },
  // Статьи 27-50 (метаданные без полного контента)
  {
    id: 'bazalioma-lechenie-udalenie',
    kind: 'article',
    clusterId: 'dermatologist',
    slugRu: 'bazalioma-lechenie-udalenie-beltsy',
    slugRo: 'baziom-tratament-indepartare-balti',
    publishedAt: '2026-05-13',
    dateModified: '2026-05-13',
    titleRu: 'Базалиома: лечение и удаление | Meddera, Бельцы',
    titleRo: 'Baziom: tratament și îndepărtare | Meddera, Bălți',
    descriptionRu: 'Базалиома (базальноклеточный рак кожи): диагностика, методы лечения. Дерматолог в Meddera.',
    descriptionRo: 'Baziom (carcinom bazocelular): diagnostic, metode de tratament. Dermatolog la Meddera.',
    excerptRu: 'Своевременное лечение базалиомы: методы и прогноз.',
    excerptRo: 'Tratament la timp al baziomului: metode și prognostic.',
    bodyKey: 'dermatologist-article',
    authorByline: { ru: 'Meddera Beauty Clinic', ro: 'Meddera Beauty Clinic' },
  },
  {
    id: 'ploskokletochnyj-rak-kozhi',
    kind: 'article',
    clusterId: 'dermatologist',
    slugRu: 'ploskokletochnyj-rak-kozhi-diagnostika-beltsy',
    slugRo: 'carcinom-celule-scuamoase-diagnostic-balti',
    publishedAt: '2026-05-13',
    dateModified: '2026-05-13',
    titleRu: 'Плоскоклеточный рак кожи: диагностика и лечение | Meddera',
    titleRo: 'Carcinom cu celule scuamoase: diagnostic și tratament | Meddera',
    descriptionRu: 'Плоскоклеточный рак кожи: признаки, диагностика, лечение. Консультация дерматолога в Бельцах.',
    descriptionRo: 'Carcinom cu celule scuamoase: semne, diagnostic, tratament. Consultația dermatologului în Bălți.',
    excerptRu: 'Ранняя диагностика и лечение плоскоклеточного рака кожи.',
    excerptRo: 'Diagnostic precoce și tratament al carcinomului cu celule scuamoase.',
    bodyKey: 'dermatologist-article',
    authorByline: { ru: 'Meddera Beauty Clinic', ro: 'Meddera Beauty Clinic' },
  },
  // Продолжение метаданных для статей 29-50...
  // (Здесь будут добавлены остальные 22 статьи с аналогичной структурой)
];
