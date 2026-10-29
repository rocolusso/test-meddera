import { isGoogleReviewsEnabled } from '@/lib/google-reviews/config';
import { getNavLinks, type NavLink } from '@/lib/nav-links';

import type { SearchLocale } from './types';

type PageText = { title: string; description: string };

/** Short descriptions of the five main pages, shown under the title in the results. */
const DESCRIPTIONS: Record<NavLink['key'], Record<SearchLocale, string>> = {
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
  reviews: {
    ru: 'Рейтинг и отзывы пациентов из Google.',
    ro: 'Rating și recenzii ale pacienților din Google.',
  },
  contacts: {
    ru: 'Адрес, телефон и запись на приём.',
    ro: 'Adresă, telefon și programare la consultație.',
  },
};

export type SearchPage = PageText & { url: string };

export function getSearchPages(locale: SearchLocale): SearchPage[] {
  return getNavLinks(isGoogleReviewsEnabled()).map((link) => ({
    url: link.href[locale],
    title: link.label[locale],
    description: DESCRIPTIONS[link.key][locale],
  }));
}
