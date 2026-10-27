import type { SearchEntryType, SearchLocale } from './types';

type SearchStrings = {
  open: string;
  title: string;
  placeholder: string;
  submit: string;
  close: string;
  hint: string;
  loading: string;
  empty: string;
  error: string;
  retry: string;
  allResults: string;
  pageTitle: string;
  pageIntro: string;
  shown: (shown: number, total: number) => string;
  types: Record<SearchEntryType, string>;
};

export const SEARCH_STRINGS: Record<SearchLocale, SearchStrings> = {
  ru: {
    open: 'Поиск',
    title: 'Поиск по сайту',
    placeholder: 'Поиск по сайту и блогу',
    submit: 'Найти',
    close: 'Закрыть поиск',
    hint: 'Введите не меньше двух символов',
    loading: 'Ищем…',
    empty: 'Ничего не найдено. Попробуйте другое слово.',
    error: 'Не удалось выполнить поиск.',
    retry: 'Повторить',
    allResults: 'Все результаты',
    pageTitle: 'Поиск',
    pageIntro: 'Страницы сайта и статьи блога.',
    shown: (shown, total) => `Показано ${shown} из ${total}`,
    types: { page: 'Страница', hub: 'Рубрика', article: 'Статья' },
  },
  ro: {
    open: 'Căutare',
    title: 'Căutare pe site',
    placeholder: 'Căutare pe site și în blog',
    submit: 'Căutați',
    close: 'Închide căutarea',
    hint: 'Introduceți cel puțin două caractere',
    loading: 'Căutăm…',
    empty: 'Nu s-a găsit nimic. Încercați alt cuvânt.',
    error: 'Căutarea nu a reușit.',
    retry: 'Reîncercați',
    allResults: 'Toate rezultatele',
    pageTitle: 'Căutare',
    pageIntro: 'Paginile site-ului și articolele din blog.',
    shown: (shown, total) => `Afișate ${shown} din ${total}`,
    types: { page: 'Pagină', hub: 'Rubrică', article: 'Articol' },
  },
};

/** Full results page of each locale. The query goes into `?q=`. */
export const SEARCH_PATH: Record<SearchLocale, string> = {
  ru: '/search',
  ro: '/ro/search',
};
