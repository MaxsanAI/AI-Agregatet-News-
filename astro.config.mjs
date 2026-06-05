import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ai-hub-news.pages.dev', 
  integrations: [tailwind()],
});
