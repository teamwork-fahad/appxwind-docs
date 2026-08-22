import { collection, config, fields } from '@keystatic/core';

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
      name: 'AppXwinD Docs',
    },
    navigation: {
      'All content (46 files)': ['tutorials', 'markdownTutorials'],
    },
  },
  collections: {
    tutorials: collection({
      label: 'MDX tutorials (6)',
      path: 'src/content/docs/**',
      slugField: 'title',
      previewUrl: '/{slug}/',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      columns: ['title', 'description'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { length: { min: 1 } },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        sidebar: fields.object({
          label: fields.text({ label: 'Sidebar Label' }),
          order: fields.integer({ label: 'Sidebar Order' }),
          hidden: fields.checkbox({ label: 'Hide in Sidebar' }),
          badge: fields.text({ label: 'Sidebar Badge' }),
        }),
        content: fields.mdx({
          label: 'Tutorial content',
          extension: 'mdx',
        }),
      },
    }),
    markdownTutorials: collection({
      label: 'Markdown tutorials (40)',
      path: 'src/content/docs/**',
      slugField: 'title',
      previewUrl: '/{slug}/',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      columns: ['title', 'description'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { length: { min: 1 } },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        sidebar: fields.object({
          label: fields.text({ label: 'Sidebar Label' }),
          order: fields.integer({ label: 'Sidebar Order' }),
          hidden: fields.checkbox({ label: 'Hide in Sidebar' }),
          badge: fields.text({ label: 'Sidebar Badge' }),
        }),
        content: fields.mdx({
          label: 'Tutorial content',
          extension: 'md',
        }),
      },
    }),
  },
});
