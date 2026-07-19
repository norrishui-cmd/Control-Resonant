import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const publisherId = 'ca-pub-9505220977121599';
const pages = [];
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) await walk(path);
    else if (item.name === 'index.html') pages.push(path);
  }
}
await walk(root);

const errors = [];
const seenTitles = new Map();
const newsPages = [];
const knownRoutes = new Set(pages.map((file) => file.replace(root, '/').replace(/index\.html$/, '')));
knownRoutes.add('/404.html');
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const path = file.replace(root, '/').replace(/index\.html$/, '');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const h1Count = (html.match(/<h1[ >]/g) ?? []).length;
  const adsenseMetaCount = (html.match(new RegExp(`<meta name="google-adsense-account" content="${publisherId}"`, 'g')) ?? []).length;
  const adsenseScriptCount = (html.match(new RegExp(`adsbygoogle\\.js\\?client=${publisherId}`, 'g')) ?? []).length;
  if (!title) errors.push(`${path}: missing title`);
  if (!description || description.length < 70) errors.push(`${path}: missing/short meta description`);
  if (!canonical) errors.push(`${path}: missing canonical`);
  if (canonical && canonical !== `https://controlresonant.wiki${path}`) errors.push(`${path}: canonical is not self-referencing (${canonical})`);
  if (h1Count !== 1) errors.push(`${path}: expected 1 H1, found ${h1Count}`);
  if (adsenseMetaCount !== 1) errors.push(`${path}: expected exactly 1 AdSense account meta tag, found ${adsenseMetaCount}`);
  if (adsenseScriptCount !== 1) errors.push(`${path}: expected exactly 1 AdSense script, found ${adsenseScriptCount}`);
  if (title && seenTitles.has(title)) errors.push(`${path}: duplicate title with ${seenTitles.get(title)}`);
  if (title) seenTitles.set(title, path);
  if (path.startsWith('/news/') && path !== '/news/') {
    newsPages.push({ path, html });
    const visibleText = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
    const words = visibleText.split(/\s+/).filter(Boolean).length;
    if (words < 220) errors.push(`${path}: news report has only ${words} visible words (minimum 220)`);
    if (!html.includes('"@type":"NewsArticle"')) errors.push(`${path}: missing NewsArticle schema`);
    if (!/Official source<\/h2>[\s\S]*?href="https:\/\//.test(html)) errors.push(`${path}: missing visible official source link`);
  }
  if (path.startsWith('/de/') || path.startsWith('/fr/') || path === '/') {
    const htmlLang = html.match(/<html lang="([^"]+)"/)?.[1];
    const expectedLang = path.startsWith('/de/') ? 'de' : path.startsWith('/fr/') ? 'fr' : 'en';
    if (htmlLang !== expectedLang) errors.push(`${path}: html lang is ${htmlLang}, expected ${expectedLang}`);
  }
  if (path.startsWith('/de/') || path.startsWith('/fr/')) {
    for (const code of ['en', 'de', 'fr', 'x-default']) {
      if (!new RegExp(`<link rel="alternate" hreflang="${code}" href="https://controlresonant\\.wiki/`).test(html)) {
        errors.push(`${path}: missing absolute hreflang ${code}`);
      }
    }
  }
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (!href || href.startsWith('/_astro/') || /\.[a-z0-9]+$/i.test(href)) continue;
    const route = href.endsWith('/') ? href : `${href}/`;
    if (!knownRoutes.has(route)) errors.push(`${path}: broken internal link ${href}`);
  }
}

if (newsPages.length !== 25) errors.push(`/news/: expected 25 independent news URLs, found ${newsPages.length}`);
const requiredNewsModules = {
  '/release-date/': 5,
  '/guides/': 5,
  '/guides/characters-and-story/': 5,
  '/guides/platforms-and-performance/': 5,
  '/about/': 5,
};
for (const [route, expected] of Object.entries(requiredNewsModules)) {
  const file = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === route);
  if (!file) { errors.push(`${route}: required News module host page missing`); continue; }
  const html = await readFile(file, 'utf8');
  const uniqueNewsLinks = new Set([...html.matchAll(/href="(\/news\/[^"#]+\/)"/g)].map(match => match[1]));
  if (uniqueNewsLinks.size !== expected) errors.push(`${route}: expected ${expected} unique News links, found ${uniqueNewsLinks.size}`);
}

const adsTxt = (await readFile(join(root, 'ads.txt'), 'utf8')).trim();
const expectedAdsTxt = 'google.com, pub-9505220977121599, DIRECT, f08c47fec0942fa0';
if (adsTxt !== expectedAdsTxt) errors.push(`/ads.txt: expected exact Google publisher record`);
const notFoundHtml = await readFile(join(root, '404.html'), 'utf8');
if ((notFoundHtml.match(new RegExp(`<meta name="google-adsense-account" content="${publisherId}"`, 'g')) ?? []).length !== 1) {
  errors.push('/404.html: expected exactly 1 AdSense account meta tag');
}
if ((notFoundHtml.match(new RegExp(`adsbygoogle\\.js\\?client=${publisherId}`, 'g')) ?? []).length !== 1) {
  errors.push('/404.html: expected exactly 1 AdSense script');
}

if (errors.length) {
  console.error(`SEO audit failed (${errors.length} issues):\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`SEO and AdSense audit passed: ${pages.length + 1} HTML pages checked; ads.txt verified.`);
