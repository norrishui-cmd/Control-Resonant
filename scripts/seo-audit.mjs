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
const faqPages = [];
const legacyRedirects = new Set([
  '/faq/is-this-the-official-control-resonant-site/',
  '/faq/how-does-the-site-verify-information/',
  '/faq/why-do-some-answers-say-not-announced/',
]);
const knownRoutes = new Set(pages.map((file) => file.replace(root, '/').replace(/index\.html$/, '')));
knownRoutes.add('/404.html');
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const path = file.replace(root, '/').replace(/index\.html$/, '');
  if (legacyRedirects.has(path)) {
    if (!html.includes('http-equiv="refresh"') || !html.includes('<link rel="canonical"')) {
      errors.push(`${path}: legacy FAQ route is not a valid static redirect`);
    }
    continue;
  }
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
  if (path.startsWith('/faq/') && path !== '/faq/') {
    faqPages.push({ path, html });
    const visibleText = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
    const words = visibleText.split(/\s+/).filter(Boolean).length;
    if (words < 180) errors.push(`${path}: FAQ answer has only ${words} visible words (minimum 180)`);
    if (!html.includes('"@type":"FAQPage"') || !html.includes('"@type":"Question"')) errors.push(`${path}: missing FAQPage/Question schema`);
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

if (newsPages.length !== 35) errors.push(`/news/: expected 35 independent news URLs, found ${newsPages.length}`);
if (faqPages.length !== 50) errors.push(`/faq/: expected 50 independent FAQ URLs, found ${faqPages.length}`);
const faqHubFile = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === '/faq/');
if (faqHubFile) {
  const faqHubHtml = await readFile(faqHubFile, 'utf8');
  const hubFaqLinks = new Set([...faqHubHtml.matchAll(/href="(\/faq\/[^"#]+\/)"/g)].map(match => match[1]));
  const schemaQuestions = (faqHubHtml.match(/"@type":"Question"/g) ?? []).length;
  if (hubFaqLinks.size !== 50) errors.push(`/faq/: expected links to 50 FAQ detail pages, found ${hubFaqLinks.size}`);
  if (schemaQuestions !== 50) errors.push(`/faq/: expected 50 FAQPage schema questions, found ${schemaQuestions}`);
} else errors.push('/faq/: FAQ hub page missing');
const requiredNewsModules = {
  '/release-date/': 5,
  '/guides/': 5,
  '/database/': 5,
  '/guides/characters-and-story/': 5,
  '/guides/platforms-and-performance/': 5,
  '/faq/': 5,
  '/about/': 5,
  '/de/datenbank/': 5,
  '/fr/base-de-donnees/': 5,
};
for (const [route, expected] of Object.entries(requiredNewsModules)) {
  const file = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === route);
  if (!file) { errors.push(`${route}: required News module host page missing`); continue; }
  const html = await readFile(file, 'utf8');
  const uniqueNewsLinks = new Set([...html.matchAll(/href="(\/news\/[^"#]+\/)"/g)].map(match => match[1]));
  if (uniqueNewsLinks.size !== expected) errors.push(`${route}: expected ${expected} unique News links, found ${uniqueNewsLinks.size}`);
}
const requiredFaqModules = {
  '/release-date/': 5,
  '/guides/': 5,
  '/database/': 5,
  '/guides/characters-and-story/': 5,
  '/guides/platforms-and-performance/': 5,
  '/about/': 5,
  '/de/datenbank/': 5,
  '/fr/base-de-donnees/': 5,
};
for (const [route, expected] of Object.entries(requiredFaqModules)) {
  const file = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === route);
  if (!file) { errors.push(`${route}: required FAQ module host page missing`); continue; }
  const html = await readFile(file, 'utf8');
  const uniqueFaqLinks = new Set([...html.matchAll(/href="(\/faq\/[^"#]+\/)"/g)].map(match => match[1]));
  if (uniqueFaqLinks.size !== expected) errors.push(`${route}: expected ${expected} unique FAQ links, found ${uniqueFaqLinks.size}`);
}

const databaseFile = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === '/database/');
if (!databaseFile) errors.push('/database/: game database hub missing');
else {
  const databaseHtml = await readFile(databaseFile, 'utf8');
  const recordLinks = [...databaseHtml.matchAll(/<tbody[\s\S]*?<\/tbody>/g)]
    .flatMap(section => [...section[0].matchAll(/href="(\/[^"#]+\/)"/g)].map(match => match[1]));
  if (recordLinks.length !== 47) errors.push(`/database/: expected 47 tracked record links, found ${recordLinks.length}`);
  if (!databaseHtml.includes('"@type":"CollectionPage"') || !databaseHtml.includes('"@type":"ItemList"')) {
    errors.push('/database/: missing CollectionPage/ItemList schema');
  }
  if (!databaseHtml.includes('July 25, 2026')) errors.push('/database/: missing visible evidence review date');
}

for (const [lang, databaseRoute, languageName, ariaName] of [
  ['de', '/de/datenbank/', 'Deutsch', 'Sprache'],
  ['fr', '/fr/base-de-donnees/', 'Français', 'Langue'],
]) {
  const localizedDetails = pages.filter(page => {
    const route = page.replace(root, '/').replace(/index\.html$/, '');
    return route.startsWith(`/${lang}/`) && route !== `/${lang}/` && route !== databaseRoute;
  });
  if (localizedDetails.length !== 50) errors.push(`/${lang}/: expected 50 localized routes (49 details + guides hub), found ${localizedDetails.length}`);
  const localizedGuideDetails = localizedDetails.filter(page => !page.endsWith('/guides/index.html'));
  for (const page of localizedGuideDetails) {
    const html = await readFile(page, 'utf8');
    const route = page.replace(root, '/').replace(/index\.html$/, '');
    const visibleText = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
    const words = visibleText.split(/\s+/).filter(Boolean).length;
    if (words < 220) errors.push(`${route}: localized guide has only ${words} visible words (minimum 220)`);
    if (!html.includes('border-l-4 border-clearance') || !html.includes('aria-labelledby="sources-heading"') || !html.includes('aria-labelledby="related-heading"')) {
      errors.push(`${route}: localized page is missing English-layout content modules`);
    }
  }
  const guidesRoute = `/${lang}/guides/`;
  const guidesHub = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === guidesRoute);
  if (!guidesHub) errors.push(`${guidesRoute}: localized Guides hub missing`);
  else {
    const html = await readFile(guidesHub, 'utf8');
    const databasePath = lang === 'de' ? '/de/datenbank/' : '/fr/base-de-donnees/';
    const localizedLinks = new Set([...html.matchAll(new RegExp(`href="(/${lang}/[^"#]+/)"`, 'g'))].map(match => match[1]).filter(link => link !== `/${lang}/` && link !== guidesRoute && link !== databasePath));
    if (localizedLinks.size !== 49) errors.push(`${guidesRoute}: expected links to 49 localized details, found ${localizedLinks.size}`);
    if (!html.includes('"@type":"CollectionPage"') || !html.includes('"@type":"ItemList"')) errors.push(`${guidesRoute}: missing CollectionPage/ItemList schema`);
  }
  const localizedDatabase = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === databaseRoute);
  if (!localizedDatabase) errors.push(`${databaseRoute}: localized database missing`);
  else {
    const html = await readFile(localizedDatabase, 'utf8');
    const tableLinks = [...html.matchAll(/<tbody[\s\S]*?<\/tbody>/g)]
      .flatMap(section => [...section[0].matchAll(/href="(\/[^"#]+\/)"/g)].map(match => match[1]));
    if (tableLinks.length !== 23) errors.push(`${databaseRoute}: expected 23 localized records, found ${tableLinks.length}`);
    if (!html.includes('"@type":"CollectionPage"') || !html.includes(`inLanguage":"${lang}`)) errors.push(`${databaseRoute}: missing localized CollectionPage schema`);
  }
  const homeFile = pages.find(page => page.replace(root, '/').replace(/index\.html$/, '') === `/${lang}/`);
  if (homeFile) {
    const html = await readFile(homeFile, 'utf8');
    if (!html.includes(`aria-label="${ariaName}"`) || !html.includes(`>${languageName}<`)) errors.push(`/${lang}/: navigation language dropdown missing current locale`);
    for (const navHref of lang === 'de'
      ? ['/de/erscheinungsdatum/','/de/guides/','/de/datenbank/','/de/charaktere-und-story/','/de/plattformen/','/faq/']
      : ['/fr/date-de-sortie/','/fr/guides/','/fr/base-de-donnees/','/fr/personnages-et-histoire/','/fr/plateformes/','/faq/']) {
      if (!html.includes(`href="${navHref}"`)) errors.push(`/${lang}/: English-parity navigation missing ${navHref}`);
    }
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
