import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
	output: 'server',
	adapter: netlify(),
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		react(),
		keystatic(),
		starlight({
			title: 'AppXwinD Docs',
			editLink: {
				baseUrl: 'https://github.com/teamwork-fahad/appxwind-docs/edit/master/src/content/docs/',
			},
			customCss: ['katex/dist/katex.min.css', './src/styles/new-words.css'],
			components: {
				EditLink: './src/components/EditLink.astro',
			},

			sidebar: [
				{
					label: 'Angular',
					collapsed: true,
					items: [{ autogenerate: { directory: 'angular' } }],
				},
				{
					label: 'CSS',
					collapsed: true,
					items: [{ autogenerate: { directory: 'css' } }],
				},
				{
					label: 'Data Structures and Algorithms',
					collapsed: true,
					items: [{ autogenerate: { directory: 'dsa' } }],
				},
				{
					label: 'Fundamentals of Computer',
					collapsed: true,
					items: [{ autogenerate: { directory: 'foc' } }],
				},
				{
					label: 'HTML',
					collapsed: true,
					items: [{ autogenerate: { directory: 'html' } }],
				},
				{
					label: 'JavaScript',
					collapsed: true,
					items: [{ autogenerate: { directory: 'javascript' } }],
				},
				{
					label: 'Mathematics',
					collapsed: true,
					items: [{ autogenerate: { directory: 'maths' } }],
				},
				{
					label: 'Object-Oriented Programming',
					collapsed: true,
					items: [{ autogenerate: { directory: 'oop' } }],
				},
				{
					label: 'Python',
					collapsed: true,
					items: [{ autogenerate: { directory: 'python' } }],
				},
				{
					label: 'SQL',
					collapsed: true,
					items: [{ autogenerate: { directory: 'sql' } }],
				},
				{
					label: 'SQLite',
					collapsed: true,
					items: [{ autogenerate: { directory: 'sqlite' } }],
				},
			],
		}),
	],
	vite: {
		server: {
			watch: {
				ignored: ['!**/src/content/docs/**'],
			},
		},
		plugins: [
			{
				name: 'vite-plugin-astro-content-watcher',
				configureServer(server) {
					const handleFileChange = (filePath) => {
						const normalizedPath = filePath.replace(/\\/g, '/');
						if (normalizedPath.includes('src/content/docs/') && /\.(md|mdx)$/.test(normalizedPath)) {
							server.moduleGraph.invalidateAll();
							server.ws.send({ type: 'full-reload' });
						}
					};

					server.watcher.on('add', handleFileChange);
					server.watcher.on('unlink', handleFileChange);
					server.watcher.on('change', handleFileChange);
				},
			},
		],
	},
});