import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'AppXwinD Docs',
    },
    navigation: {
      Content: ['tutorials', 'markdownTutorials'],
    },
  },
  collections: {
    tutorials: collection({
      label: 'Tutorials',
      path: 'src/content/docs/**',
      slugField: 'title',
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
        content: fields.mdx({
          label: 'Tutorial content',
          extension: 'mdx',
        }),
      },
    }),
    markdownTutorials: collection({
      label: 'Markdown tutorials',
      path: 'src/content/docs/**',
      slugField: 'title',
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
        content: fields.mdx({
          label: 'Tutorial content',
          extension: 'md',
        }),
      },
    }),
  },
});
