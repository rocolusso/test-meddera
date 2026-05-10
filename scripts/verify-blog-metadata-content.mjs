/**
 * Ensures every article id from cluster metadata has a matching content key (prevents render → notFound / 404).
 * Run: node scripts/verify-blog-metadata-content.mjs
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const blogData = join(root, 'src/blog-data');

function extractIds(text) {
  const ids = [];
  const re = /\bid:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(text)) !== null) ids.push(m[1]);
  return ids;
}

function loadBlob(...relativePaths) {
  let blob = '';
  for (const rel of relativePaths) {
    try {
      blob += readFileSync(join(blogData, rel), 'utf8');
    } catch {
      console.error(`Missing file: ${rel}`);
      process.exit(1);
    }
  }
  return blob;
}

function hasArticleContent(blob, id) {
  return blob.includes(`'${id}':`) || blob.includes(`"${id}":`);
}

const bundles = [
  {
    name: 'dermatologist',
    meta: ['dermatologist-cluster-articles-part1.ts', 'dermatologist-cluster-articles-part2.ts'],
    content: ['dermatologist-article-content.ts', 'dermatologist-article-content-part2.ts'],
  },
  {
    name: 'botox',
    meta: ['botox-cluster-articles-part1.ts', 'botox-cluster-articles-part2.ts'],
    content: ['botox-article-content.ts', 'botox-article-content-part2.ts'],
  },
  {
    name: 'lips',
    meta: ['lips-cluster-articles-part1.ts', 'lips-cluster-articles-part2.ts'],
    content: ['lips-article-content.ts', 'lips-article-content-part2.ts'],
  },
  {
    name: 'mesotherapy-face',
    meta: ['mesotherapy-face-cluster-articles-part1.ts', 'mesotherapy-face-cluster-articles-part2.ts'],
    content: ['mesotherapy-face-article-content.ts', 'mesotherapy-face-article-content-part2.ts'],
  },
  {
    name: 'biorevitalization',
    meta: ['biorevitalization-cluster-articles-part1.ts', 'biorevitalization-cluster-articles-part2.ts'],
    content: [
      'biorevitalization-article-content.ts',
      'biorevitalization-article-content-part2.ts',
      'biorevitalization-article-content-part3.ts',
    ],
  },
  {
    name: 'fillers',
    meta: ['fillers-cluster-articles-part1.ts', 'fillers-cluster-articles-part2.ts'],
    content: ['fillers-article-content.ts', 'fillers-article-content-part2.ts', 'fillers-article-content-part3.ts'],
  },
];

let errors = 0;
for (const b of bundles) {
  let ids = [];
  for (const f of b.meta) {
    ids.push(...extractIds(readFileSync(join(blogData, f), 'utf8')));
  }
  ids = [...new Set(ids)];
  const blob = loadBlob(...b.content);
  const missing = ids.filter((id) => !hasArticleContent(blob, id));
  if (missing.length) {
    console.error(`❌ ${b.name}: missing content for ids:\n  ${missing.join('\n  ')}`);
    errors += missing.length;
  } else {
    console.log(`✅ ${b.name}: ${ids.length} articles ↔ content keys OK`);
  }
}

const regPath = join(blogData, 'registry.ts');
const reg = readFileSync(regPath, 'utf8');
const lipStart = reg.indexOf("id: 'lip-consult-questions'");
if (lipStart >= 0) {
  const lipSection = reg.slice(lipStart);
  const lipIds = extractIds(lipSection);
  const lipBlob = loadBlob(
    'lips-article-content.ts',
    'lips-article-content-part2.ts',
    'lip-cluster-article-content.ts',
  );
  const missingLip = lipIds.filter((id) => !hasArticleContent(lipBlob, id));
  if (missingLip.length) {
    console.error(`❌ registry lip articles: missing content:\n  ${missingLip.join('\n  ')}`);
    errors += missingLip.length;
  } else {
    console.log(`✅ registry inline lips: ${lipIds.length} articles ↔ content OK`);
  }
}

if (errors) {
  console.error(`\nTotal missing keys: ${errors}`);
  process.exit(1);
}
console.log('\n✅ All cluster + inline lip articles have content keys (no empty render → 404 from missing copy).');
