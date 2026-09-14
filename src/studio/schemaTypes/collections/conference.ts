import { defineField, defineType } from 'sanity';

export const conference = defineType({
  name: 'conference',
  title: 'Conference / Talk',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 5 }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'images',
      title: 'Additional images (stacked; overrides single image when present)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'imageAlt', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'imagePosition', title: 'Image position override (Tailwind class)', type: 'string' }),
    defineField({
      name: 'actions',
      title: 'Action buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'href', type: 'url', validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'year', media: 'image' } },
});
