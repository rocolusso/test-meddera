import { NAV_LINKS } from '@/lib/nav-links';

import type { SearchLocale } from './types';

type PageText = { title: string; description: string };

/** Short descriptions of the five main pages, shown under the title in the results. */
const DESCRIPTIONS: Record<(typeof NAV_LINKS)[number]['key'], Record<SearchLocale, string>> = {
  home: {
    ru: 'Главная страница клиники Meddera в Бельцах.',
    ro: 'Pagina principală a clinicii Meddera din Bălți.',
  },
  about: {
    ru: 'О враче и клинике Meddera.',
    ro: 'Despre medic și clinica Meddera.',
  },
  services: {
    ru: 'Услуги клиники: дерматология и косметология.',
    ro: 'Serviciile clinicii: dermatologie și cosmetologie.',
  },
  blog: {
    ru: 'Статьи о дерматологии и косметологии.',
    ro: 'Articole despre dermatologie și cosmetologie.',
  },
  contacts: {
    ru: 'Адрес, телефон и запись на приём.',
    ro: 'Adresă, telefon și programare la consultație.',
  },
};

export type SearchPage = PageText & { url: string };

export function getSearchPages(locale: SearchLocale): SearchPage[] {
  return NAV_LINKS.map((link) => ({
    url: link.href[locale],
    title: link.label[locale],
    description: DESCRIPTIONS[link.key][locale],
  }));
}
