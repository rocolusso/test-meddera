/** Single source of truth for the main navigation (header, burger menu, footer). */
export type NavLocale = 'ru' | 'ro';

export type NavLink = {
  key: 'home' | 'about' | 'services' | 'blog' | 'contacts';
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

export function toNavLocale(locale: string): NavLocale {
  return locale === 'ro' ? 'ro' : 'ru';
}
