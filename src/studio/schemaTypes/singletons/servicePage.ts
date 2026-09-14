import { defineField, defineType } from 'sanity';

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceId',
      title: 'Service',
      type: 'string',
      options: {
        list: [
          { title: 'Frameworks, Courses & Curriculums', value: 'course-development' },
          { title: 'Faculty & Teacher Enrichment', value: 'faculty-enrichment' },
          { title: 'Research & Evaluation', value: 'research-evaluation' },
          { title: 'Advisory', value: 'advisory' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'number', title: 'Number (e.g. 01)', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'itemsHeading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 3 }),
          defineField({ name: 'text', type: 'string', title: 'Text (short form, used instead of title+description)' }),
        ],
        preview: { select: { title: 'title', subtitle: 'text' } },
      }],
    }),
    defineField({ name: 'approachNote', type: 'text', rows: 2 }),
    defineField({ name: 'outcomeNote', type: 'text', rows: 2 }),
    defineField({ name: 'differentiator', type: 'text', rows: 3 }),
    defineField({ name: 'cta', title: 'CTA label', type: 'string' }),
    defineField({ name: 'dark', title: 'Dark theme', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'title' } },
});
