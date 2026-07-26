# Official language rollout — V12

Checked against the official Steam product page on July 26, 2026.

## Current game-language matrix

| Language | Interface | Full audio | Subtitles | Site route |
| --- | --- | --- | --- | --- |
| English | Yes | Yes | Yes | `/` |
| French | Yes | Yes | Yes | `/fr/` |
| Italian | Yes | Yes | Yes | `/it/` |
| German | Yes | Yes | Yes | `/de/` |
| Spanish — Spain | Yes | Yes | Yes | `/es/` |
| Japanese | Yes | Yes | Yes | `/ja/` |
| Korean | Yes | No | Yes | `/ko/` |
| Portuguese — Brazil | Yes | Yes | Yes | `/pt-br/` |
| Simplified Chinese | Yes | Yes | Yes | `/zh-cn/` |
| Spanish — Latin America | Yes | No | Yes | `/es-419/` |
| Traditional Chinese | Yes | No | Yes | `/zh-tw/` |
| Polish | Yes | No | Yes | `/pl/` |
| Russian | Yes | No | Yes | `/ru/` |
| Turkish | Yes | No | Yes | `/tr/` |
| Ukrainian | Yes | No | Yes | `/uk/` |

Steam currently shows 15 interface/subtitle languages and eight full-audio languages. The previous site copy that counted Ukrainian as a ninth full-audio language has been corrected.

## V12 implementation

- Added a localized home and a localized language-support detail page for each of the 12 official languages missing from V11.
- Expanded desktop and mobile language selectors from three to all 15 official languages.
- Added a complete 15-language hreflang cluster to every localized home and language-support page, plus `x-default`.
- Reused the English visual system: hero, direct-answer panel, content sections, source card, related-guide grid, News module, FAQ module, breadcrumbs and responsive navigation.
- Kept untranslated deep-guide topics on their established English canonicals rather than creating placeholder translations.
- Updated the English, German and French language guides, the FAQ answer and two News records from nine to eight full-audio languages.
- Redirected the obsolete `...nine-audio/` News URL to the corrected `...eight-audio/` canonical and kept the obsolete URL out of the sitemap.

## Quality boundary for the next expansion

The new locales now have a technically complete, useful entry layer. Future batches should localize proven high-intent guide clusters—release/platforms first, then combat and story—only when each page can carry a direct answer, native-language body copy, official sources and useful internal links. Do not multiply all 101 English guides across 12 locales before that quality gate is met.
