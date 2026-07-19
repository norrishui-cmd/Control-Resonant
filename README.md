# Control Resonant Field Guide — controlresonant.wiki

A static SEO content site for the game **Control Resonant** (Control 2), built with **Astro 5** + **Tailwind CSS v4**. Fully static output — no server, no database, no environment variables. Ideal for Vercel's free static hosting.

## What's inside

```
controlresonant/
├─ astro.config.mjs          # site URL + sitemap + Tailwind v4 plugin
├─ package.json
├─ tsconfig.json
├─ public/
│  ├─ favicon.svg            # broken-circle mark
│  ├─ og.png                 # social share image (1200×630)
│  ├─ ads.txt                # Google AdSense publisher authorization
│  └─ robots.txt
└─ src/
   ├─ content.config.ts      # "guides" collection + status schema
   ├─ styles/global.css       # design tokens (the "case file" theme)
   ├─ layouts/BaseLayout.astro # SEO head: canonical, OG, JSON-LD
   ├─ components/             # Header, Footer, GuideCard, Countdown, StatusStamp
   ├─ pages/
   │  ├─ index.astro          # homepage hub
   │  ├─ release-date.astro    # release / platforms / FAQ (FAQ schema)
   │  ├─ news/index.astro       # source-linked news center, grouped by topic
   │  ├─ news/[slug].astro      # 25 independent NewsArticle pages
   │  ├─ faq/index.astro        # 50-answer FAQ hub + FAQPage schema
   │  ├─ faq/[slug].astro       # one permanent, source-linked URL per question
   │  ├─ guides/index.astro    # all guides, grouped
   │  ├─ guides/[...slug].astro # one page per markdown guide
   │  ├─ about.astro           # sources + status-system + disclaimer
   │  ├─ privacy.astro
   │  └─ 404.astro
   └─ content/guides/         # evidence-backed markdown guides — add more here
```

`SEO_PLAN_2000_URLS.md` contains the phased expansion model and indexability quality gate. The production build runs two audits: `scripts/content-quality-audit.mjs` checks useful depth, direct answers, placeholders and cross-page phrase overlap; `scripts/seo-audit.mjs` checks titles, descriptions, canonicals, H1s, duplicate titles and internal links.

The five core detail tabs—Release Date, Guides, Characters, Platforms, and About—each expose exactly five topic-matched news reports. Every report has its own canonical `/news/<slug>/` URL, dated official source, visible direct answer, related-report links, and `NewsArticle` structured data. The news audit rejects missing pages, thin reports, incorrect per-tab counts, and missing source links.

FAQ is a primary navigation tab. The `/faq/` hub contains 50 source-checked answers grouped into five topics, with a complete 50-question `FAQPage` graph. Every question also has a self-canonical `/faq/<slug>/` detail URL, direct answer, official source, related guide, and related-question links. Each core detail tab exposes exactly five context-matched FAQ entries; the build audit enforces all counts, answer depth, schema, and source visibility.

## Add a new guide

Drop a new `.md` file into `src/content/guides/`. Frontmatter:

```md
---
title: "Your Title"
description: "One-sentence summary for SEO + cards."
status: preview        # confirmed | preview | datamined | speculation
category: "Combat & Builds"
order: 6
updated: 2026-07-01
published: 2026-07-01
indexable: true
sources:
  - label: "Official source title"
    url: "https://example.com/source"
---

Body in Markdown...
```

It appears automatically on the homepage and the guides page, and gets its own URL at `/guides/<filename>/`.

## Deploy (no terminal needed)

1. Create a new repository on GitHub and upload **all** of these files (keep the folder structure).
2. Go to **vercel.com → Add New → Project** and import that repository.
3. Vercel auto-detects Astro. Leave the defaults:
   - Build command: `astro build`
   - Output directory: `dist`
4. Click **Deploy**. Then add `controlresonant.wiki` under the project's **Domains**.

That's it — no env vars. Every push to the repo triggers a rebuild.

## Google AdSense verification

Publisher `ca-pub-9505220977121599` is configured once in the global layout, so every English, German, French, and future page inherits both the AdSense loader and account meta tag. The authorized seller record is served from `/ads.txt`.

After deployment, verify:

- `https://controlresonant.wiki/ads.txt` returns `google.com, pub-9505220977121599, DIRECT, f08c47fec0942fa0`
- homepage source contains `google-adsense-account`
- homepage source contains `adsbygoogle.js?client=ca-pub-9505220977121599`

The production audit fails if the script or account meta tag is missing or duplicated on any generated page.

## Notes

- Fonts (Chakra Petch + IBM Plex) load from Google Fonts via `<link>`. Self-host later if you want zero third-party requests.
- The sitemap is generated automatically at `/sitemap-index.xml`; `robots.txt` already points to it. Submit that to Google Search Console.
- To add Google Analytics later, drop the GA snippet into `BaseLayout.astro`'s `<head>`.
