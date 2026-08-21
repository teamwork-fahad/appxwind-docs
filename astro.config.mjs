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
			customCss: ['katex/dist/katex.min.css', './src/styles/new-words.css'],

			sidebar: [
				{
					label: 'Angular',
					collapsed: true,
					items: [
						{ slug: 'angular', label: 'Angular Overview' },
						{
							label: 'Part 0 — React → Angular Bridge',
							collapsed: true,
							items: [
								{ slug: 'angular/part-0-react-to-angular', label: '0.1 — React and Angular' },
								{ slug: 'angular/part-0-react-to-angular/react-vs-angular', label: '0.2 — React vs Angular' },
								{ slug: 'angular/part-0-react-to-angular/typescript-overview', label: '0.3 — TypeScript Overview' },
								{ slug: 'angular/part-0-react-to-angular/components', label: '0.4 — Components' },
								{ slug: 'angular/part-0-react-to-angular/props-vs-input', label: '0.5 — Props vs @Input' },
								{ slug: 'angular/part-0-react-to-angular/events-output', label: '0.6 — Events & @Output' },
								{ slug: 'angular/part-0-react-to-angular/data-binding', label: '0.7 — Data Binding' },
								{ slug: 'angular/part-0-react-to-angular/conditional-rendering', label: '0.8 — Conditional Rendering' },
								{ slug: 'angular/part-0-react-to-angular/lists', label: '0.9 — Lists' },
								{ slug: 'angular/part-0-react-to-angular/directives', label: '0.10 — Directives' },
								{ slug: 'angular/part-0-react-to-angular/lifecycle-hooks', label: '0.11 — Lifecycle Hooks' },
								{ slug: 'angular/part-0-react-to-angular/services', label: '0.12 — Services' },
								{ slug: 'angular/part-0-react-to-angular/dependency-injection', label: '0.13 — Dependency Injection' },
								{ slug: 'angular/part-0-react-to-angular/api-calls', label: '0.14 — API Calls' },
								{ slug: 'angular/part-0-react-to-angular/rxjs-observables', label: '0.15 — RxJS & Observables' },
								{ slug: 'angular/part-0-react-to-angular/routing', label: '0.16 — Routing' },
								{ slug: 'angular/part-0-react-to-angular/forms', label: '0.17 — Forms' },
								{ slug: 'angular/part-0-react-to-angular/cheat-sheet', label: '0.18 — Cheat Sheet' },
								{ slug: 'angular/part-0-react-to-angular/mini-project', label: '0.19 — Mini Project' },
								{ slug: 'angular/part-0-react-to-angular/final-practice', label: '0.20 — Final Practice' },
								{ slug: 'angular/part-0-react-to-angular/new-words', label: 'New Words (Easy Meanings)' },
							],
						},
					],
				},
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
								{ slug: 'maths/unit-3/median' },
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
						{ slug: 'sql/sql-queries-exercise-2', label: 'SQL Tasks - Exercise II' },
					],
				},
				{
					label: 'SQLite',
					collapsed: true,
					items: [
						{ slug: 'sqlite', label: 'SQLite' },
						{ slug: 'sqlite/unit-1', label: 'Introduction to SQLite' },
						{ slug: 'sql/unit-2', label: 'Database Backup and CSV Handling' },
						{ slug: 'sqlite-and-python-practice', label: 'SQLite and Python Practice' },
					],
				},
			],
		}),
	],
});