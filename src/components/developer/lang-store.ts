import { DEVELOPER_LOCALES } from '@/lib/developer-locale';

import type { DeveloperLang } from './copy';

const STORAGE_KEY = 'dev_lang';

let current: DeveloperLang | null = null;
const listeners = new Set<() => void>();

function isLang(v: unknown): v is DeveloperLang {
  return typeof v === 'string' && (DEVELOPER_LOCALES as readonly string[]).includes(v);
}

/** ?lang= wins, then the choice remembered in this browser, then Russian. */
function readInitial(): DeveloperLang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (isLang(fromUrl)) return fromUrl;
  } catch {
    // no window.location: fall through
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // storage may be blocked
  }
  return 'ru';
}

export function subscribeLang(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLangSnapshot(): DeveloperLang {
  if (current === null) current = readInitial();
  return current;
}

export function getLangServerSnapshot(): DeveloperLang {
  return 'ru';
}

export function setLang(next: DeveloperLang): void {
  current = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // storage may be blocked
  }
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(window.history.state, '', url.toString());
  } catch {
    // keep the language in memory only
  }
  listeners.forEach((l) => l());
}
