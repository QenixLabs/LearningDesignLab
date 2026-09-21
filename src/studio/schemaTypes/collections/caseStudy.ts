import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title (H1)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Courses & Curricula',
          'Workshops',
          'Research, Evaluation, & Knowledge Products',
        ],
      },
      initialValue: 'Courses & Curricula',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'nutshell',
      title: 'In a Nutshell (Key Attributes)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'value', type: 'text', rows: 2, title: 'Value' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Introductory Paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'challengeCallout',
      title: 'Core Design Challenge Callout',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sections',
      title: 'Narrative Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string', title: 'Heading' }),
            defineField({
              name: 'level',
              type: 'number',
              title: 'Heading Level',
              options: { list: [2, 3] },
              initialValue: 2,
            }),
            defineField({
              name: 'paragraphs',
              type: 'array',
              title: 'Paragraphs',
              of: [{ type: 'text', rows: 3 }],
            }),
            defineField({
              name: 'list',
              type: 'array',
              title: 'Bulleted Takeaways (Checkmarks)',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'gridItems',
              type: 'array',
              title: 'Grid Cards (Key Pillars)',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'title', type: 'string', title: 'Card Title' }),
                    defineField({ name: 'description', type: 'text', rows: 3, title: 'Card Description' }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: 'heading' },
          },
        },
      ],
    }),
    defineField({
      name: 'curriculumStructure',
      title: 'Curriculum Framework / Learning Arc',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Framework Title' }),
        defineField({ name: 'description', type: 'text', rows: 2, title: 'Description' }),
        defineField({
          name: 'themes',
          title: 'Thematic Tracks (e.g. UNESCO Myanmar)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'theme', type: 'string', title: 'Theme Name' }),
                defineField({
                  name: 'courses',
                  type: 'array',
                  title: 'Course Titles',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'stages',
          title: 'Sequential Stages / Modules (e.g. Patang)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'stage', type: 'string', title: 'Stage (e.g. Module 1)' }),
                defineField({ name: 'title', type: 'string', title: 'Stage Title' }),
                defineField({ name: 'description', type: 'text', rows: 2, title: 'Description' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'quote',
      title: 'Client / Reviewer Testimonial Quote',
      type: 'object',
      fields: [
        defineField({ name: 'text', type: 'text', rows: 4, title: 'Quote Text' }),
        defineField({ name: 'attribution', type: 'string', title: 'Attribution Name' }),
        defineField({ name: 'role', type: 'string', title: 'Role & Organization' }),
      ],
    }),
    defineField({
      name: 'impactStats',
      title: 'Key Impact Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Metric Value' }),
            defineField({ name: 'label', type: 'string', title: 'Metric Label' }),
            defineField({ name: 'subtext', type: 'string', title: 'Subtext' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'lessonsLearned',
      title: 'Key Lessons Learned',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'number', title: 'Lesson Number' }),
            defineField({ name: 'text', type: 'text', rows: 2, title: 'Lesson Text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'actions',
      title: 'Action Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Button Label' }),
            defineField({ name: 'href', type: 'string', title: 'Link Target URL' }),
            defineField({
              name: 'variant',
              type: 'string',
              options: { list: ['primary', 'secondary', 'outline'] },
              initialValue: 'primary',
            }),
          ],
        },
      ],
    }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'heroImage',
    },
  },
});
