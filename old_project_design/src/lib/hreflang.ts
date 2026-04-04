export const SITE_ORIGIN = 'https://meddera.md';

export function serviceAlternatesRu(canonicalRu: string) {
  return {
    canonical: canonicalRu,
    languages: {
      ru: canonicalRu,
      ro: `${canonicalRu}/ro`,
      'x-default': canonicalRu,
    },
  };
}

export function serviceAlternatesRo(canonicalRo: string) {
  const canonicalRu = canonicalRo.replace(/\/ro$/, '');
  return {
    canonical: canonicalRo,
    languages: {
      ru: canonicalRu,
      ro: canonicalRo,
      'x-default': canonicalRu,
    },
  };
}
