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
