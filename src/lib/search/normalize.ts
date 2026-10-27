const EXTRA: Record<string, string> = {
  ё: 'е',
  ă: 'a',
  â: 'a',
  î: 'i',
  ș: 's',
  ş: 's',
  ț: 't',
  ţ: 't',
};

const LETTER_OR_DIGIT = /[\p{L}\p{N}]/u;

const charCache = new Map<string, string>();

function foldChar(ch: string): string {
  const hit = charCache.get(ch);
  if (hit !== undefined) return hit;
  let lower = ch.toLowerCase();
  if (lower.length !== 1) lower = lower.charAt(0);
  const base = EXTRA[lower] ?? lower.normalize('NFD').charAt(0);
  const out = LETTER_OR_DIGIT.test(base) ? base : ' ';
  charCache.set(ch, out);
  return out;
}

/**
 * Lowercases, maps ё→е, strips diacritics (ă â î ș ț ...) and turns everything that is not
 * a letter or a digit into a space. The result has exactly the same length as the input,
 * so offsets found in it are valid in the original string.
 */
export function foldKeepLength(input: string): string {
  let out = '';
  for (const ch of input) {
    out += ch.length === 1 ? foldChar(ch) : ' '.repeat(ch.length);
  }
  return out;
}

/** Folded text with single spaces and no leading or trailing space. */
export function normalizeText(input: string): string {
  return foldKeepLength(input).replace(/ +/g, ' ').trim();
}
