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
│  └─ robots.txt
└─ src/
   ├─ content.config.ts      # "guides" collection + status schema
   ├─ styles/global.css       # design tokens (the "case file" theme)
   ├─ layouts/BaseLayout.astro # SEO head: canonical, OG, JSON-LD
   ├─ components/             # Header, Footer, GuideCard, Countdown, StatusStamp
   ├─ pages/
   │  ├─ index.astro          # homepage hub
   │  ├─ release-date.astro    # release / platforms / FAQ (FAQ schema)
   │  ├─ guides/index.astro    # all guides, grouped
   │  ├─ guides/[...slug].astro # one page per markdown guide
   │  ├─ about.astro           # sources + status-system + disclaimer
   │  ├─ privacy.astro
   │  └─ 404.astro
   └─ content/guides/         # 5 markdown guides — add more here
```

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

## Notes

- Fonts (Chakra Petch + IBM Plex) load from Google Fonts via `<link>`. Self-host later if you want zero third-party requests.
- The sitemap is generated automatically at `/sitemap-index.xml`; `robots.txt` already points to it. Submit that to Google Search Console.
- To add Google Analytics later, drop the GA snippet into `BaseLayout.astro`'s `<head>`.
