/** Single source of truth for the main navigation (header, burger menu, footer). */
export type NavLocale = 'ru' | 'ro';

export type NavLink = {
  key: 'home' | 'about' | 'services' | 'blog' | 'reviews' | 'contacts';
  href: Record<NavLocale, string>;
  label: Record<NavLocale, string>;
};

export const NAV_LINKS: readonly NavLink[] = [
  { key: 'home', href: { ru: '/', ro: '/ro' }, label: { ru: 'Главная', ro: 'Acasă' } },
  { key: 'about', href: { ru: '/about', ro: '/ro/about' }, label: { ru: 'Обо мне', ro: 'Despre mine' } },
  { key: 'services', href: { ru: '/services', ro: '/ro/services' }, label: { ru: 'Услуги', ro: 'Servicii' } },
  { key: 'blog', href: { ru: '/blog', ro: '/ro/blog' }, label: { ru: 'Блог', ro: 'Blog' } },
  { key: 'contacts', href: { ru: '/contacts', ro: '/ro/contacts' }, label: { ru: 'Контакты', ro: 'Contacte' } },
] as const;

/** Shown (between "Blog" and "Contacts") only while GOOGLE_REVIEWS_ENABLED=true, see getNavLinks. */
const REVIEWS_NAV_LINK: NavLink = {
  key: 'reviews',
  href: { ru: '/otzyvy', ro: '/ro/recenzii' },
  label: { ru: 'Отзывы', ro: 'Recenzii' },
};

/**
 * The menu links. `withReviews` comes from isGoogleReviewsEnabled() on the server (the burger menu is a client
 * component and gets it as a prop, so there is no second switch).
 */
export function getNavLinks(withReviews: boolean): readonly NavLink[] {
  if (!withReviews) return NAV_LINKS;
  const links = [...NAV_LINKS];
  links.splice(links.findIndex((l) => l.key === 'contacts'), 0, REVIEWS_NAV_LINK);
  return links;
}

export function toNavLocale(locale: string): NavLocale {
  return locale === 'ro' ? 'ro' : 'ru';
}
