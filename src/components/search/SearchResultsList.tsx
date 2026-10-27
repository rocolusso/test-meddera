import React from 'react';
import Link from 'next/link';

import { SEARCH_STRINGS } from '@/lib/search/strings';
import type { SearchLocale, SearchResult } from '@/lib/search/types';
import { cn } from '@/lib/utils';

import Highlighted from './Highlighted';

type Props = {
  results: SearchResult[];
  locale: SearchLocale;
  /** Panel mode: the list is a combobox listbox and `activeIndex` marks the keyboard selection. */
  listboxId?: string;
  activeIndex?: number;
  onNavigate?: () => void;
};

export default function SearchResultsList({ results, locale, listboxId, activeIndex = -1, onNavigate }: Props) {
  const t = SEARCH_STRINGS[locale];
  const interactive = Boolean(listboxId);

  return (
    <ul
      id={listboxId}
      role={interactive ? 'listbox' : undefined}
      aria-label={interactive ? t.title : undefined}
      className="m-0 list-none p-0"
    >
      {results.map((r, i) => {
        const active = interactive && i === activeIndex;
        return (
          <li
            key={r.url}
            id={interactive ? `${listboxId}-opt-${i}` : undefined}
            role={interactive ? 'option' : undefined}
            aria-selected={interactive ? active : undefined}
            className={cn('border-b border-border/60 last:border-b-0', active && 'bg-muted')}
          >
            <Link
              href={r.url}
              prefetch={false}
              tabIndex={interactive ? -1 : undefined}
              onClick={onNavigate}
              className="block px-4 py-3 text-pofo-heading hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            >
              <span className="alt-font block text-[10px] font-semibold uppercase leading-4 tracking-[1px] text-pofo-text">
                {t.types[r.type]}
              </span>
              <span className="mt-0.5 block text-[15px] font-semibold leading-[22px]">
                <Highlighted text={r.title} ranges={r.titleHl} />
              </span>
              {r.snippet ? (
                <span className="mt-0.5 block text-[13px] leading-5 text-pofo-text">
                  <Highlighted text={r.snippet} ranges={r.snippetHl} />
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
