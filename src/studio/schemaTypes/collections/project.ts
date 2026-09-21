import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          'Courses & Curricula',
          'Workshops',
          'Research, Evaluation, & Knowledge Products',
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'client', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'actions',
      title: 'Action buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'href', type: 'string', validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),
    defineField({
      name: 'caseStudy',
      title: 'Linked Case Study',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
      description: 'Link to a full dedicated write-up / case study for this project',
    }),
    defineField({
      name: 'caseStudySlug',
      title: 'Case Study URL Slug',
      type: 'string',
      description: 'e.g. ai-data-science-course or /projects/ai-data-science-course',
    }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'client', media: 'image' } },
});
