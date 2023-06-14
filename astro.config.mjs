import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://josecret.github.io',
	base: '/theme',
	integrations: [mdx(), sitemap()],
});
