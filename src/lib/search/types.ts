export type SearchLocale = 'ru' | 'ro';

export type SearchEntryType = 'page' | 'hub' | 'article';

/** One piece of readable text of a document, in reading order. */
export type SearchBlock = { kind: 'h2' | 'p'; text: string };

export type SearchEntry = {
  type: SearchEntryType;
  url: string;
  title: string;
  description: string;
  blocks: SearchBlock[];
  /**
   * Normalized haystacks. Each starts with a space and words are separated by one space,
   * so "word starts with X" is a plain `indexOf(' ' + X)`.
   */
  nTitle: string;
  nDescription: string;
  nHeadings: string;
  nBody: string;
};

export type SearchIndex = {
  locale: SearchLocale;
  entries: SearchEntry[];
};

export type SearchResult = {
  type: SearchEntryType;
  title: string;
  url: string;
  snippet: string;
  /** Flat list of [start, end, start, end, ...] offsets into `title`. */
  titleHl: number[];
  /** Flat list of [start, end, start, end, ...] offsets into `snippet`. */
  snippetHl: number[];
};

export type SearchResponse = {
  results: SearchResult[];
  total: number;
};
