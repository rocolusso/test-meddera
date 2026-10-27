import { useCallback, useEffect, useState } from 'react';

import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import type { SearchLocale, SearchResponse } from '@/lib/search/types';

export const SEARCH_DEBOUNCE_MS = 250;
export const SEARCH_MIN_CHARS = 2;
const CACHE_LIMIT = 40;

export type SearchStatus = 'idle' | 'loading' | 'results' | 'empty' | 'error';

/** Answers of this tab, so that backspacing or reopening the panel does not repeat requests. */
const responseCache = new Map<string, SearchResponse>();

function remember(key: string, value: SearchResponse) {
  if (responseCache.size >= CACHE_LIMIT) {
    const oldest = responseCache.keys().next().value;
    if (oldest !== undefined) responseCache.delete(oldest);
  }
  responseCache.set(key, value);
}

type Settled = { key: string; data: SearchResponse | null; failed: boolean };

export function useSiteSearch(rawQuery: string, locale: SearchLocale, limit: number) {
  const query = rawQuery.trim();
  const debounced = useDebouncedValue(query, SEARCH_DEBOUNCE_MS);
  const [settled, setSettled] = useState<Settled | null>(null);
  const [lastGood, setLastGood] = useState<SearchResponse | null>(null);
  const [attempt, setAttempt] = useState(0);

  const key = `${locale}|${limit}|${debounced}`;

  useEffect(() => {
    if (debounced.length < SEARCH_MIN_CHARS) return undefined;

    const cached = responseCache.get(key);
    if (cached) {
      setSettled({ key, data: cached, failed: false });
      setLastGood(cached);
      return undefined;
    }

    const controller = new AbortController();
    const params = new URLSearchParams({ q: debounced, lang: locale, limit: String(limit) });
    fetch(`/api/search?${params.toString()}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`search ${res.status}`);
        return res.json() as Promise<SearchResponse>;
      })
      .then((data) => {
        remember(key, data);
        setSettled({ key, data, failed: false });
        setLastGood(data);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setSettled({ key, data: null, failed: true });
      });

    return () => controller.abort();
    // `attempt` re-runs the request after an error.
  }, [debounced, key, limit, locale, attempt]);

  const retry = useCallback(() => {
    setSettled(null);
    setAttempt((n) => n + 1);
  }, []);

  let status: SearchStatus;
  let data: SearchResponse | null = null;

  if (query.length < SEARCH_MIN_CHARS) {
    status = 'idle';
  } else if (debounced !== query || settled?.key !== key) {
    // Typing or waiting for the answer: keep the previous list on screen instead of flashing.
    status = 'loading';
    data = lastGood;
  } else if (settled.failed) {
    status = 'error';
  } else {
    data = settled.data;
    status = data && data.total > 0 ? 'results' : 'empty';
  }

  return { status, data, retry };
}

export default useSiteSearch;
