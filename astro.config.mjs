import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://controlresonant.wiki',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/404/') && !page.endsWith('/privacy/'),
    changefreq: 'weekly',
    priority: 0.7,
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
