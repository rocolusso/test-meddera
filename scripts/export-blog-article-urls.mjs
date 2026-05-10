/**
 * Writes generated/blog-article-final-urls.txt — ONLY newly generated Part 2 articles (26–50 per cluster).
 * Run: node scripts/export-blog-article-urls.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const ORIGIN = 'https://meddera.md';

function extractSlugPairs(text) {
  const pairs = [];
  const oneline = /slugRu:\s*'([^']+)'\s*,\s*slugRo:\s*'([^']+)'/g;
  const multiline = /slugRu:\s*'([^']+)'\s*,\s*\n\s*slugRo:\s*'([^']+)'/g;
  let m;
  while ((m = oneline.exec(text)) !== null) {
    pairs.push({ slugRu: m[1], slugRo: m[2] });
  }
  while ((m = multiline.exec(text)) !== null) {
    pairs.push({ slugRu: m[1], slugRo: m[2] });
  }
  return pairs;
}

let pairs = [];

const blogData = join(root, 'src/blog-data');
for (const name of readdirSync(blogData)) {
  if (!name.endsWith('.ts')) continue;
  if (!name.includes('cluster-articles-part2')) continue;
  pairs.push(...extractSlugPairs(readFileSync(join(blogData, name), 'utf8')));
}

const seen = new Set();
const unique = [];
for (const p of pairs) {
  const k = `${p.slugRu}|${p.slugRo}`;
  if (seen.has(k)) continue;
  seen.add(k);
  unique.push(p);
}
unique.sort((a, b) => a.slugRu.localeCompare(b.slugRu));

const lines = [
  '# Part 2 only (articles 26–50): RU then RO per article. Regenerate: node scripts/export-blog-article-urls.mjs',
  '',
];
for (const p of unique) {
  lines.push(`${ORIGIN}/blog/${p.slugRu}`);
  lines.push(`${ORIGIN}/ro/blog/${p.slugRo}`);
}

const outDir = join(root, 'generated');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'blog-article-final-urls.txt');
writeFileSync(outPath, `${lines.join('\n')}\n`, 'utf8');
console.log(`Part 2 only: ${unique.length} articles (${unique.length * 2} URLs) → ${outPath}`);
