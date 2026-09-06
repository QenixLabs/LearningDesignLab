import { defineField, defineType } from 'sanity';

export const pageCopy = defineType({
  name: 'pageCopy',
  title: 'Page Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Team', value: 'team' },
          { title: 'Projects', value: 'projects' },
          { title: 'Publications', value: 'publications' },
          { title: 'Conferences', value: 'conferences' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', type: 'text', rows: 4 }),
  ],
  preview: { select: { title: 'heading', subtitle: 'pageKey' } },
});
