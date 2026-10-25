import { defineArrayMember, defineField, defineType } from 'sanity';

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
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Descriptive text for accessibility & SEO',
        }),
      ],
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Image Alt Text (Fallback)',
      type: 'string',
      description: 'Used if no alt text is set directly on the hero image above',
    }),
    defineField({
      name: 'nutshell',
      title: 'In a Nutshell (Key Attributes)',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'nutshellItem',
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'value', type: 'text', rows: 2, title: 'Value' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        }),
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
        defineArrayMember({
          name: 'sectionItem',
          title: 'Section',
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
              name: 'callout',
              title: 'Callout Box (Highlighted Quote / Key Takeaway)',
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string', title: 'Callout Label' }),
                defineField({ name: 'text', type: 'text', rows: 3, title: 'Callout Text' }),
              ],
            }),
            defineField({
              name: 'list',
              title: 'Bulleted Takeaways (Checkmarks)',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'numberedList',
              title: 'Numbered Steps / List',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'gridItems',
              title: 'Grid Cards (Key Pillars)',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'gridItem',
                  type: 'object',
                  fields: [
                    defineField({ name: 'title', type: 'string', title: 'Card Title' }),
                    defineField({ name: 'description', type: 'text', rows: 3, title: 'Card Description' }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'image',
              title: 'Section Image (Single)',
              description: 'Replace or upload an image for this section (e.g. diagrams, screenshots, infographics)',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'caption', title: 'Caption', type: 'string' }),
                defineField({
                  name: 'layout',
                  title: 'Layout Style',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Full Width (Screenshots & Diagrams)', value: 'full' },
                      { title: 'Phone Mockup (Mobile Screens)', value: 'phone' },
                      { title: 'Card (Dark Container)', value: 'card' },
                    ],
                  },
                  initialValue: 'full',
                }),
              ],
            }),
            defineField({
              name: 'images',
              title: 'Section Image Collage / Gallery (Multiple)',
              description: 'Multiple images displayed side-by-side (e.g. 3 mobile app screens)',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'collageImage',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
                    defineField({
                      name: 'layout',
                      title: 'Layout Style',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Phone Mockup', value: 'phone' },
                          { title: 'Card', value: 'card' },
                          { title: 'Full Width', value: 'full' },
                        ],
                      },
                      initialValue: 'phone',
                    }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'imagesCaption',
              title: 'Collage Overall Caption',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              paragraphs: 'paragraphs',
              media: 'image',
            },
            prepare({ heading, paragraphs, media }) {
              const snippet = Array.isArray(paragraphs) && paragraphs.length > 0 ? paragraphs[0] : '';
              return {
                title: heading || (snippet ? snippet.slice(0, 55) + '…' : 'Section (Image/Showcase)'),
                subtitle: heading && snippet ? snippet.slice(0, 65) + '…' : (heading ? undefined : 'No heading specified'),
                media,
              };
            },
          },
        }),
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
            defineArrayMember({
              name: 'curriculumTheme',
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
            }),
          ],
        }),
        defineField({
          name: 'stages',
          title: 'Sequential Stages / Modules (e.g. Patang)',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'curriculumStage',
              type: 'object',
              fields: [
                defineField({ name: 'stage', type: 'string', title: 'Stage (e.g. Module 1)' }),
                defineField({ name: 'title', type: 'string', title: 'Stage Title' }),
                defineField({ name: 'description', type: 'text', rows: 2, title: 'Description' }),
              ],
            }),
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
        defineArrayMember({
          name: 'impactStat',
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Metric Value' }),
            defineField({ name: 'label', type: 'string', title: 'Metric Label' }),
            defineField({ name: 'subtext', type: 'string', title: 'Subtext' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'lessonsLearned',
      title: 'Key Lessons Learned',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'lessonLearned',
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'number', title: 'Lesson Number' }),
            defineField({ name: 'text', type: 'text', rows: 2, title: 'Lesson Text' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'actions',
      title: 'Action Buttons',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'actionBtn',
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
        }),
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
