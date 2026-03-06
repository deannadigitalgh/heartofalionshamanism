// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heartofalionshamanism.com',
  title: 'Heart Of A Lion Shamanism | Deanna Stennett, L.Ac., MA',
  integrations: [sitemap()],
});
