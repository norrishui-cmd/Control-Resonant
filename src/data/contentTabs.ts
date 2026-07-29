import type { NewsTab } from './news';
import type { FaqTab } from './faqs';

const platformSignals = [
  'platform', 'system-requirements', 'ps5', 'xbox', 'steam', 'mac',
  'geforce', 'accessibility', 'language-support', 'controller',
];
const characterSignals = [
  'character', 'story', 'dylan', 'jesse', 'zoe', 'darling', 'board',
  'hiss', 'oldest-house', 'manhattan', 'fbc-field', 'opening-sequence',
  'seven-years',
];
const databaseSignals = [
  'aberrant-form', 'combat-ability', 'artifact', 'mold', 'resonant-boss',
  'seekers', 'barrage', 'shield', 'flurry', 'slash', 'slice', 'crush',
  'drill', 'extend',
];
const releaseSignals = [
  'release', 'edition', 'preorder', 'early-access', 'demo-beta', 'media-demo',
];

export function tabsForContent(id: string, category = ''): { news: NewsTab; faq: FaqTab } {
  const value = `${id} ${category}`.toLowerCase();
  if (platformSignals.some(signal => value.includes(signal))) return { news: 'platforms', faq: 'platforms' };
  if (characterSignals.some(signal => value.includes(signal))) return { news: 'characters', faq: 'characters' };
  if (releaseSignals.some(signal => value.includes(signal))) return { news: 'release', faq: 'release' };
  if (databaseSignals.some(signal => value.includes(signal))) return { news: 'database', faq: 'guides' };
  return { news: 'guides', faq: 'guides' };
}
