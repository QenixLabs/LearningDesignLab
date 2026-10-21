import { defineField, defineType } from 'sanity';

export const ourWork = defineType({
  name: 'ourWork',
  title: 'Our Work',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Projects', value: 'projects' },
          { title: 'Case Studies', value: 'case-studies' },
          { title: 'Publications', value: 'publications' },
          { title: 'Conferences', value: 'conferences' },
          { title: 'Team', value: 'team' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', type: 'text', title: 'Subtitle / Intro', rows: 4 }),
    defineField({ name: 'subtitle', type: 'text', title: 'Subtitle', rows: 4, hidden: true }),
  ],
  preview: { select: { title: 'heading', subtitle: 'pageKey' } },
});

export const pageCopy = defineType({
  name: 'pageCopy',
  title: 'Our Work / Page Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Projects', value: 'projects' },
          { title: 'Case Studies', value: 'case-studies' },
          { title: 'Publications', value: 'publications' },
          { title: 'Conferences', value: 'conferences' },
          { title: 'Team', value: 'team' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', type: 'text', title: 'Subtitle / Intro', rows: 4 }),
    defineField({ name: 'subtitle', type: 'text', title: 'Subtitle', rows: 4, hidden: true }),
  ],
  preview: { select: { title: 'heading', subtitle: 'pageKey' } },
});
