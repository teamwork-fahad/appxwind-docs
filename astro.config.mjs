import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import react from '@astrojs/react';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
	output: 'server',
	adapter: node({ mode: 'standalone' }),
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		react(),
		keystatic(),
		starlight({
			title: 'AppXwinD Docs',
			customCss: ['katex/dist/katex.min.css'],

			sidebar: [
				{
					label: 'CSS',
					collapsed: true,
					items: [{ slug: 'css/introduction' }],
				},
				{
					label: 'Data Structures and Algorithms',
					collapsed: true,
					items: [
						{ slug: 'dsa' },
						{ slug: 'dsa/introduction', label: 'Introduction and Analysis' },
						{ slug: 'dsa/linear', label: 'Linear Data Structures' },
						{ slug: 'dsa/non-linear', label: 'Non-Linear Data Structures' },
						{ slug: 'dsa/searching', label: 'Searching Techniques' },
						{ slug: 'dsa/sorting', label: 'Sorting Techniques' },
					],
				},
				{
					label: 'Fundamentals of Computer',
					collapsed: true,
					items: [
						{ slug: 'foc' },
						{ slug: 'foc/unit-1', label: 'Introduction to Computers' },
						{ slug: 'foc/unit-2', label: 'Number Systems and Digital Logic' },
						{ slug: 'foc/unit-3', label: 'Software and Programming Concepts' },
						{ slug: 'foc/unit-4', label: 'Introduction to Linux' },
						{ slug: 'foc/unit-5', label: 'OpenOffice Suite' },
					],
				},
				{
					label: 'HTML',
					collapsed: true,
					items: [{ slug: 'html/introduction' }],
				},
				{
					label: 'JavaScript',
					collapsed: true,
					items: [{ slug: 'javascript/introduction' }],
				},
				{
					label: 'Mathematics',
					collapsed: true,
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
							collapsed: true,
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
					collapsed: true,
					items: [
						{ slug: 'oop' },
						{
							label: 'C++ Examples and Syllabus',
							collapsed: true,
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
					collapsed: true,
					items: [
						{ slug: 'python/introduction' },
						{ slug: 'python/dhp-practical-tasks-2026', label: 'DHP Practical Tasks 2026' },
						{ slug: 'sql/unit-3', label: 'Python with SQLite' },
						{ slug: 'sql/unit-4', label: 'Text and CSV Files' },
						{ slug: 'sql/unit-5', label: 'Data Visualization' },
					],
				},
				{
					label: 'SQL',
					collapsed: true,
					items: [
						{ slug: 'sql' },
						{ slug: 'sql/unit-1', label: 'Introduction to SQL' },
						{ slug: 'sql/unit-2', label: 'SQL Backup and CSV Handling' },
						{ slug: 'sql/sql-queries-exercise-2', label: 'SQL Tasks - Exercise II' },
					],
				},
			],
		}),
	],
});