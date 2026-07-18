import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const guidesDir = new URL('../src/content/guides/', import.meta.url).pathname;
const files = (await readdir(guidesDir)).filter((name) => name.endsWith('.md')).sort();
const errors = [];
const docs = [];

function visibleWords(markdown) {
  return markdown
    .replace(/^---[\s\S]*?---/, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[`*_#>|\[\]()-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function shingles(words, size = 7) {
  const out = new Set();
  for (let i = 0; i <= words.length - size; i++) out.add(words.slice(i, i + size).join(' ').toLowerCase());
  return out;
}

for (const file of files) {
  const markdown = await readFile(join(guidesDir, file), 'utf8');
  const words = visibleWords(markdown);
  const isIndexable = !/\nindexable:\s*false\b/.test(markdown);
  if (!/^---[\s\S]*?title:\s*["'].+["']/m.test(markdown)) errors.push(`${file}: missing quoted title`);
  if (!/^---[\s\S]*?description:\s*["'].+["']/m.test(markdown)) errors.push(`${file}: missing quoted description`);
  if (isIndexable && words.length < 220) errors.push(`${file}: only ${words.length} visible words (minimum 220)`);
  if (isIndexable && !/## Quick answer/i.test(markdown) && !/## The (short answer|basics)/i.test(markdown)) {
    errors.push(`${file}: missing direct-answer section`);
  }
  if (isIndexable && /\b(lorem ipsum|todo|tbd page|placeholder content)\b/i.test(markdown)) {
    errors.push(`${file}: placeholder language found`);
  }
  docs.push({ file, words, shingles: shingles(words) });
}

for (let i = 0; i < docs.length; i++) {
  for (let j = i + 1; j < docs.length; j++) {
    const a = docs[i].shingles;
    const b = docs[j].shingles;
    const shared = [...a].filter((item) => b.has(item)).length;
    const similarity = shared / Math.max(1, Math.min(a.size, b.size));
    if (similarity > 0.32) errors.push(`${docs[i].file} / ${docs[j].file}: high phrase overlap ${(similarity * 100).toFixed(1)}%`);
  }
}

if (errors.length) {
  console.error(`Content quality audit failed (${errors.length} issues):\n${errors.join('\n')}`);
  process.exit(1);
}

const min = Math.min(...docs.map((doc) => doc.words.length));
console.log(`Content quality audit passed: ${docs.length} guides; shortest page ${min} visible words.`);
