import { collection, config, fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';

const mdxComponents = {
  details: wrapper({
    label: 'Details (<details>)',
    schema: {},
  }),
  summary: wrapper({
    label: 'Summary (<summary>)',
    schema: {},
  }),
  b: wrapper({
    label: 'Bold (<b>)',
    schema: {},
  }),
  GitHubCode: wrapper({
    label: 'GitHub Code Embed',
    schema: {
      repo: fields.text({ label: 'Repository' }),
      file: fields.text({ label: 'File Path' }),
    },
  }),
  Code: wrapper({
    label: 'Code Block',
    schema: {},
  }),
};

const commonSchemaMD = {
  title: fields.slug({
    name: {
      label: 'Title',
      description: 'Document title shown in header and navigation',
      validation: { length: { min: 1 } },
    },
  }),
  description: fields.text({
    label: 'Description',
    description: 'Brief summary of this tutorial or exercise',
    multiline: true,
  }),
  sidebar: fields.object({
    label: fields.text({ label: 'Custom Sidebar Label' }),
    order: fields.integer({ label: 'Sidebar Order (e.g. 1, 2, 3)' }),
    hidden: fields.checkbox({ label: 'Hide in Sidebar' }),
    badge: fields.text({ label: 'Sidebar Badge (e.g. New)' }),
  }),
  content: fields.mdx({
    label: 'Tutorial Content',
    extension: 'md',
    components: mdxComponents,
  }),
};

const commonSchemaMDX = {
  ...commonSchemaMD,
  content: fields.mdx({
    label: 'Tutorial Content',
    extension: 'mdx',
    components: mdxComponents,
  }),
};

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
          kind: 'github',
          repo: {
            owner: 'teamwork-fahad',
            name: 'appxwind-docs',
          },
        },
  ui: {
    brand: {
      name: 'AppXwinD Docs Admin',
    },
    navigation: {
      '📚 Subjects & Categories': [
        'dsa',
        'sql',
        'python',
        'angular',
        'maths',
        'foc',
        'oop',
      ],
      '📁 All Content Files': [
        'markdownTutorials',
        'tutorials',
      ],
    },
  },
  collections: {
    dsa: collection({
      label: '💻 Data Structures & Algorithms',
      path: 'src/content/docs/dsa/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    sql: collection({
      label: '🗄️ SQL & Databases',
      path: 'src/content/docs/sql/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    python: collection({
      label: '🐍 Python Programming',
      path: 'src/content/docs/python/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    angular: collection({
      label: '🅰️ Angular Framework',
      path: 'src/content/docs/angular/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    maths: collection({
      label: '📐 Mathematics',
      path: 'src/content/docs/maths/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    foc: collection({
      label: '⚙️ Fundamentals of Computer',
      path: 'src/content/docs/foc/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    oop: collection({
      label: '🧱 Object-Oriented Programming',
      path: 'src/content/docs/oop/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
    tutorials: collection({
      label: '⚡ MDX Documents (.mdx)',
      path: 'src/content/docs/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMDX,
    }),
    markdownTutorials: collection({
      label: '📄 All Markdown Documents (.md)',
      path: 'src/content/docs/**',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'description'],
      schema: commonSchemaMD,
    }),
  },
});
