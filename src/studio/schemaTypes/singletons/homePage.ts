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

    // --- Target Verticals ---
    defineField({ name: 'verticalsHeading', title: 'Verticals section heading', type: 'string', initialValue: 'Who We Work With' }),
    defineField({
      name: 'verticals',
      title: 'Target Verticals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'label', media: 'image' } },
      }],
      validation: (r) => r.max(6),
    }),

    // --- Differentiators ---
    defineField({ name: 'differentiatorsHeading', title: 'Differentiators section heading', type: 'string', initialValue: 'What Defines Our Solutions' }),
    defineField({
      name: 'differentiators',
      title: 'Differentiators',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'description', type: 'text', rows: 4, validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'title' } },
      }],
    }),

    // --- Selected Work ---
    defineField({ name: 'selectedWorkHeading', title: 'Selected Work heading', type: 'string', initialValue: 'Our Work (So Far)' }),

    // --- Contact Section ---
    defineField({ name: 'contactHeading', title: 'Contact heading', type: 'string', initialValue: "Let's build learning that drives impact" }),
    defineField({ name: 'contactSubtext', title: 'Contact subtext', type: 'text', rows: 2, initialValue: "Submit your contact details. We'll get back to you within 7 working days." }),
  ],
});
