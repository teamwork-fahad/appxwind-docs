import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'AppXwinD Docs',
			customCss: ['katex/dist/katex.min.css'],

			sidebar: [
				{
					label: 'Mathematics',
					items: [
						{
							label: 'Unit 1 — Relations, Functions, Sequence and Series',
							link: '/maths/unit-1/',
						},
						{
							label: 'Unit 2 — Theory of Matrices',
							link: '/maths/unit-2/',
						},
						{
							label: 'Unit 3 — Basic Statistics',
							items: [
								{ slug: 'maths/unit-3' },
								{ slug: 'maths/unit-3/frequency-distribution' },
								{ slug: 'maths/unit-3/central-tendency' },
								{ slug: 'maths/unit-3/mean' },
								{ slug: 'maths/unit-3/quartiles-deciles-percentiles' },
								{ slug: 'maths/unit-3/dispersion' },
							],
						},
						{
							label: 'Unit 4 — Probability Theory',
							link: '/maths/unit-4/',
						},
						{
							label: 'Unit 5 — Random Variables and Distributions',
							link: '/maths/unit-5/',
						},
					],
				},
				{
					label: 'SQL Practice',
					items: [{ slug: 'sql' }],
				},
			],
		}),
	],
});