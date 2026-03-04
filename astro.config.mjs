// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://heartofalionshamanism.com',
  title: 'Heart Of A Lion Shamanism | Deanna Stennett, L.Ac., MA',
  adapter: cloudflare()
});