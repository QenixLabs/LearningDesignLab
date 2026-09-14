import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'heroSubtext', title: 'Hero subtext', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary CTA label', type: 'string', initialValue: 'Work With Us' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA label', type: 'string', initialValue: 'Explore Services' }),
    defineField({
      name: 'stats',
      title: 'Hero stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'number', validation: (r) => r.required() }),
          defineField({ name: 'suffix', type: 'string', initialValue: '+' }),
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'label' } },
      }],
      validation: (r) => r.max(5),
    }),
    defineField({ name: 'selectedWorkProjects', title: 'Selected work — Projects', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'selectedWorkScholarships', title: 'Selected work — Scholarships', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'selectedWorkBlogs', title: 'Selected work — Blogs', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'presentations',
      title: 'Selected work — Presentations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'name', media: 'image' } },
      }],
    }),
  ],
});
