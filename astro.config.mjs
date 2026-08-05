import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
	site: 'https://iraspa.in',
	integrations: [icon(), sitemap()],
	output: 'server',
	adapter: node({ mode: 'standalone' }),
});
