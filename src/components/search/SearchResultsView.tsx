'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useSiteSearch } from '@/hooks/useSiteSearch';
import { SEARCH_PATH, SEARCH_STRINGS } from '@/lib/search/strings';
import type { SearchLocale } from '@/lib/search/types';

import SearchIcon from './SearchIcon';
import SearchResultsList from './SearchResultsList';

const PAGE_LIMIT = 30;
const MAX_QUERY = 64;

/** Body of the /search and /ro/search pages. The query lives in `?q=`; results come from /api/search. */
export default function SearchResultsView({ locale }: { locale: SearchLocale }) {
  const t = SEARCH_STRINGS[locale];
  const router = useRouter();
  const urlQuery = (useSearchParams().get('q') ?? '').slice(0, MAX_QUERY);

  const [query, setQuery] = useState(urlQuery);
  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const { status, data, retry } = useSiteSearch(query, locale, PAGE_LIMIT);
  const results = data?.results ?? [];
  const trimmed = query.trim();

  let message: React.ReactNode = null;
  if (status === 'idle') message = t.hint;
  else if (status === 'loading' && results.length === 0) message = t.loading;
  else if (status === 'empty') message = t.empty;
  else if (status === 'error') {
    message = (
      <>
        {t.error}
        {' '}
        <button type="button" onClick={retry} className="font-semibold text-deep-pink underline">
          {t.retry}
        </button>
      </>
    );
  } else if (status === 'results') {
    message = t.shown(results.length, data?.total ?? results.length);
  }

  return (
    <div>
      <form
        role="search"
        action={SEARCH_PATH[locale]}
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          if (trimmed.length >= 2) {
            router.replace(`${SEARCH_PATH[locale]}?q=${encodeURIComponent(trimmed)}`, { scroll: false });
          }
        }}
        className="flex items-stretch gap-2"
      >
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">{t.placeholder}</span>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-pofo-text" />
          <input
            type="search"
            name="q"
            enterKeyHint="search"
            autoComplete="off"
            spellCheck={false}
            maxLength={MAX_QUERY}
            placeholder={t.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 w-full appearance-none border border-border bg-background pl-10 pr-3 text-[16px] text-pofo-heading outline-none placeholder:text-pofo-text/70 focus:border-deep-pink"
          />
        </label>
        <button
          type="submit"
          className="alt-font h-12 shrink-0 bg-pofo-heading px-5 text-[12px] font-semibold uppercase tracking-[0.5px] text-background transition-colors hover:bg-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {t.submit}
        </button>
      </form>

      <p role="status" aria-live="polite" className="mt-4 min-h-6 text-[14px] text-pofo-text">
        {message}
      </p>

      {results.length > 0 ? (
        <div
          className={
            status === 'loading'
              ? 'mt-2 border border-border bg-background opacity-60 transition-opacity'
              : 'mt-2 border border-border bg-background transition-opacity'
          }
        >
          <SearchResultsList results={results} locale={locale} />
        </div>
      ) : null}
    </div>
  );
}
