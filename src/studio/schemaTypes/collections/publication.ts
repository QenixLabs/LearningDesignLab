import { defineField, defineType } from 'sanity';

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'citation', title: 'Citation (authors, year)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'venue', type: 'string' }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['Journal Article', 'Conference Paper', 'Report', 'Magazine Article', 'Preprint', 'Edited Periodical'],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'href', title: 'Link URL (use # for no link)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
});
