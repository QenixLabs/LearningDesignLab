import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'highlight',
      title: 'Highlight phrase (exact substring of quote, rendered highlighted)',
      type: 'string',
    }),
    defineField({ name: 'attribution', title: 'Attribution (name, role, org)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'attribution' } },
});
