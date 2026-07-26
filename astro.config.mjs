import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://controlresonant.wiki',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/404/')
      && !page.endsWith('/privacy/')
      && !page.endsWith('/faq/is-this-the-official-control-resonant-site/')
      && !page.endsWith('/faq/how-does-the-site-verify-information/')
      && !page.endsWith('/faq/why-do-some-answers-say-not-announced/'),
    changefreq: 'weekly',
    priority: 0.7,
  })],
  redirects: {
    '/faq/is-this-the-official-control-resonant-site/': '/faq/does-control-resonant-have-a-demo/',
    '/faq/how-does-the-site-verify-information/': '/faq/what-was-in-the-media-hands-on-demo/',
    '/faq/why-do-some-answers-say-not-announced/': '/faq/what-are-the-preorder-bonus-items/',
    '/news/steam-language-matrix-confirms-15-text-nine-audio/': '/news/steam-language-matrix-confirms-15-text-eight-audio/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
