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
					label: 'CSS',
					items: [{ slug: 'css/introduction' }],
				},
				{
					label: 'HTML',
					items: [{ slug: 'html/introduction' }],
				},
				{
					label: 'JavaScript',
					items: [{ slug: 'javascript/introduction' }],
				},
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
					label: 'Object-Oriented Programming',
					items: [
						{ slug: 'oop' },
						{
							label: 'C++ Examples and Syllabus',
							items: [
								{ slug: 'oop/cpp' },
								{ slug: 'oop/cpp/fundamentals' },
								{ slug: 'oop/cpp/encapsulation-inheritance' },
								{ slug: 'oop/cpp/polymorphism' },
							],
						},
						{ slug: 'oop/java', label: 'Java Examples' },
						{ slug: 'oop/python', label: 'Python Examples' },
						{ slug: 'oop/php', label: 'PHP Examples' },
					],
				},
				{
					label: 'Python',
					items: [
						{ slug: 'python/introduction' },
						{ slug: 'sql/unit-3', label: 'Python with SQLite' },
						{ slug: 'sql/unit-4', label: 'Text and CSV Files' },
						{ slug: 'sql/unit-5', label: 'Data Visualization' },
					],
				},
				{
					label: 'SQLite',
					items: [
						{ slug: 'sql' },
						{ slug: 'sql/unit-1', label: 'Introduction to SQLite' },
						{ slug: 'sql/unit-2', label: 'Backup and CSV Handling' },
					],
				},
			],
		}),
	],
});