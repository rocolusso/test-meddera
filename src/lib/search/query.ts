import { foldKeepLength, normalizeText } from './normalize';
import type { SearchEntry, SearchEntryType, SearchIndex, SearchResponse, SearchResult } from './types';

const MAX_TOKENS = 8;
const SNIPPET_LENGTH = 160;

const TYPE_RANK: Record<SearchEntryType, number> = { page: 0, hub: 1, article: 2 };

const W_TITLE = 10;
const W_DESCRIPTION = 4;
const W_HEADING = 3;
const W_BODY = 1;

/**
 * Word prefix used for matching, so that "ботокса" finds "ботокс" and "губы" finds "губах".
 * Short words are kept whole, longer ones lose their ending, never more than 6 letters are kept.
 */
export function stemOf(token: string): string {
  const n = token.length;
  if (n <= 3) return token;
  const keep = n <= 5 ? n - 1 : n - 2;
  return token.slice(0, Math.min(6, keep));
}

export function parseQuery(raw: string): string[] {
  const seen = new Set<string>();
  for (const token of normalizeText(raw).split(' ')) {
    if (token) seen.add(stemOf(token));
    if (seen.size >= MAX_TOKENS) break;
  }
  return [...seen];
}

function hasWord(haystack: string, stem: string): boolean {
  return haystack.indexOf(` ${stem}`) !== -1;
}

function countWord(haystack: string, stem: string): number {
  const needle = ` ${stem}`;
  let count = 0;
  let from = haystack.indexOf(needle);
  while (from !== -1) {
    count += 1;
    from = haystack.indexOf(needle, from + needle.length);
  }
  return count;
}

/** Returns the score of an entry, or 0 when at least one query word is missing from it. */
function scoreEntry(entry: SearchEntry, stems: string[], phrase: string): number {
  let score = 0;
  for (const stem of stems) {
    if (hasWord(entry.nTitle, stem)) {
      score += W_TITLE;
    } else if (hasWord(entry.nDescription, stem)) {
      score += W_DESCRIPTION;
    } else if (hasWord(entry.nHeadings, stem)) {
      score += W_HEADING;
    } else {
      const count = countWord(entry.nBody, stem);
      if (count === 0) return 0;
      score += W_BODY + Math.min(count, 10) * 0.1;
    }
  }
  if (stems.length > 1) {
    if (entry.nTitle.includes(` ${phrase}`)) score += 6;
    else if (entry.nBody.includes(` ${phrase}`)) score += 2;
  }
  return score;
}

/** Offsets [start, end, ...] of every word of `text` that starts with one of the stems. */
function highlights(text: string, stems: string[]): number[] {
  const folded = foldKeepLength(text);
  const out: number[] = [];
  for (const m of folded.matchAll(/[^ ]+/g)) {
    const word = m[0];
    if (stems.some((s) => word.startsWith(s))) {
      const start = m.index ?? 0;
      out.push(start, start + word.length);
    }
  }
  return out;
}

function firstMatchStart(folded: string, stems: string[]): number {
  for (const m of folded.matchAll(/[^ ]+/g)) {
    if (stems.some((s) => m[0].startsWith(s))) return m.index ?? 0;
  }
  return -1;
}

function distinctMatched(folded: string, stems: string[]): number {
  const words = folded.split(' ');
  let n = 0;
  for (const s of stems) {
    if (words.some((w) => w.startsWith(s))) n += 1;
  }
  return n;
}

function cutWindow(text: string, pos: number): string {
  if (text.length <= SNIPPET_LENGTH + 20) return text;
  let start = Math.max(0, pos - 50);
  if (start > 0) {
    const space = text.lastIndexOf(' ', start);
    start = space === -1 ? start : space + 1;
  }
  let end = Math.min(text.length, start + SNIPPET_LENGTH);
  if (end < text.length) {
    const space = text.lastIndexOf(' ', end);
    if (space > pos) end = space;
  }
  const body = text.slice(start, end).trim();
  return `${start > 0 ? '…' : ''}${body}${end < text.length ? '…' : ''}`;
}

/** Picks the text that matches the most query words, preferring the description and earlier blocks. */
function buildSnippet(entry: SearchEntry, stems: string[]): string {
  const candidates: string[] = [entry.description, ...entry.blocks.filter((b) => b.kind === 'p').map((b) => b.text)];
  let best = '';
  let bestFolded = '';
  let bestScore = -1;
  for (const text of candidates) {
    if (!text) continue;
    const folded = foldKeepLength(text);
    const score = distinctMatched(folded, stems);
    if (score > bestScore) {
      best = text;
      bestFolded = folded;
      bestScore = score;
      if (score === stems.length) break;
    }
  }
  if (!best) return '';
  return cutWindow(best, Math.max(0, firstMatchStart(bestFolded, stems)));
}

export function searchIndex(index: SearchIndex, rawQuery: string, limit: number): SearchResponse {
  const stems = parseQuery(rawQuery);
  if (stems.length === 0) return { results: [], total: 0 };
  const phrase = normalizeText(rawQuery);

  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of index.entries) {
    const score = scoreEntry(entry, stems, phrase);
    if (score > 0) scored.push({ entry, score });
  }
  scored.sort(
    (a, b) =>
      b.score - a.score ||
      TYPE_RANK[a.entry.type] - TYPE_RANK[b.entry.type] ||
      a.entry.title.localeCompare(b.entry.title, index.locale),
  );

  const results: SearchResult[] = scored.slice(0, limit).map(({ entry }) => {
    const snippet = buildSnippet(entry, stems);
    return {
      type: entry.type,
      title: entry.title,
      url: entry.url,
      snippet,
      titleHl: highlights(entry.title, stems),
      snippetHl: highlights(snippet, stems),
    };
  });
  return { results, total: scored.length };
}
