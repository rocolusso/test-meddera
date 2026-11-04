'use client';

import { useMemo } from 'react';
import Link from 'next/link';

import { useLocationPath } from './useLocationPath';
import { slugWords, SUGGEST_PREFIX as PREFIX } from './suggest-words';

export interface SuggestionCandidate {
  href: string;
  label: string;
  kind: 'service' | 'article';
  /** Slug words of the page in both locales. */
  keys: string[];
}

interface Props {
  candidates: SuggestionCandidate[];
  title: string;
  serviceLabel: string;
  articleLabel: string;
}

const MAX_SUGGESTIONS = 3;

/** Words share the first PREFIX letters: survives the different transliterations (mezoterapyya and mezoterapiya match). */
function score(pathWords: string[], keys: string[]): number {
  const prefixes = new Set(keys.map((k) => k.slice(0, PREFIX)));
  return pathWords.filter((w) => prefixes.has(w.slice(0, PREFIX))).length;
}

/**
 * "Did you mean": matches the words of the missing address against service and blog hub slugs.
 * Renders nothing when there is no match.
 */
export default function NotFoundSuggestions({ candidates, title, serviceLabel, articleLabel }: Props) {
  const path = useLocationPath();

  const matches = useMemo(() => {
    const words = path ? slugWords(path) : [];
    if (words.length === 0) return [];
    return candidates
      .map((c, i) => ({ c, i, s: score(words, c.keys) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || a.i - b.i)
      .slice(0, MAX_SUGGESTIONS)
      .map((x) => x.c);
  }, [path, candidates]);

  if (matches.length === 0) return null;

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2.5 border-l-[3px] border-deep-pink bg-muted px-4 py-3.5 md:mb-11 md:px-[22px] md:py-[18px]">
      <span className="alt-font mb-0.5 w-full text-[12px] font-semibold uppercase tracking-[1px] text-pofo-heading md:mb-0 md:mr-1.5 md:w-auto">
        {title}
      </span>
      {matches.map((m) => (
        <Link
          key={m.href}
          href={m.href}
          className="inline-flex h-[34px] items-center gap-2 rounded-full border border-border bg-background px-3.5 text-[14px] text-pofo-heading transition-colors hover:border-deep-pink hover:text-deep-pink"
        >
          <span className="alt-font text-[10px] font-semibold uppercase tracking-[0.8px] text-accent-text">
            {m.kind === 'service' ? serviceLabel : articleLabel}
          </span>
          {m.label}
        </Link>
      ))}
    </div>
  );
}
