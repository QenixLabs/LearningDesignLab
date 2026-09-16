import { defineField, defineType } from 'sanity';

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  groups: [
    { name: 'general', title: 'General Info' },
    { name: 'hero', title: 'Hero' },
    { name: 'problem', title: 'Problem' },
    { name: 'process', title: 'Process / Strategy' },
    { name: 'offerings', title: 'Offerings' },
    { name: 'workshops', title: 'Workshops' },
    { name: 'accelerator', title: 'Accelerator' },
    { name: 'serviceCards', title: 'Practice Areas' },
    { name: 'exampleProjects', title: 'Example Projects' },
    { name: 'methodology', title: 'Methodology' },
    { name: 'sectorsOutcomes', title: 'Sectors & Outcomes' },
    { name: 'socialProof', title: 'Partners' },
    { name: 'contact', title: 'Contact' },
  ],
  fields: [
    defineField({
      name: 'serviceId',
      title: 'Service',
      type: 'string',
      group: 'general',
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
    defineField({ name: 'number', title: 'Number (e.g. 01)', type: 'string', group: 'general' }),
    defineField({ name: 'title', type: 'string', group: 'general', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 4, group: 'general', validation: (r) => r.required() }),
    defineField({ name: 'cta', title: 'CTA label', type: 'string', group: 'general' }),
    defineField({ name: 'dark', title: 'Dark theme', type: 'boolean', initialValue: false, group: 'general' }),

    // --- Hero Section ---
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtext', title: 'Hero Subtext', type: 'text', rows: 4, group: 'hero' }),
    defineField({ name: 'heroCtaLabel', title: 'Hero CTA Label', type: 'string', initialValue: 'Contact Us', group: 'hero' }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      group: 'hero',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'number', validation: (r) => r.required() }),
          defineField({ name: 'suffix', type: 'string', initialValue: '+' }),
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'decimals', type: 'number', description: 'Optional decimal places (e.g. 1 for 4.4)' }),
        ],
        preview: { select: { title: 'label', subtitle: 'value' } },
      }],
      validation: (r) => r.max(5),
    }),
    defineField({
      name: 'heroFootnote',
      title: 'Hero Footnote',
      type: 'string',
      description: 'e.g. *Impact of our workshops based on pre- and post-surveys.',
      group: 'hero',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
    }),

    // --- Problem Section ---
    defineField({
      name: 'problemHeading',
      title: 'Problem Heading',
      type: 'string',
      group: 'problem',
    }),
    defineField({
      name: 'problemText',
      title: 'Problem Text (Single Block)',
      type: 'text',
      rows: 4,
      group: 'problem',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
    }),
    defineField({
      name: 'problemParagraphs',
      title: 'Problem Paragraphs',
      type: 'array',
      group: 'problem',
      hidden: ({ document }) => document?.serviceId === 'course-development',
      of: [{ type: 'text', rows: 3 }],
    }),

    // --- Process / Strategy Section ---
    defineField({
      name: 'processHeading',
      title: 'Process / Strategy Heading',
      type: 'string',
      group: 'process',
      hidden: ({ document }) => document?.serviceId !== 'course-development' && document?.serviceId !== 'faculty-enrichment',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process / Strategy Steps',
      type: 'array',
      group: 'process',
      hidden: ({ document }) => document?.serviceId !== 'course-development' && document?.serviceId !== 'faculty-enrichment',
      of: [{ type: 'text', rows: 2 }],
    }),

    // --- What We Offer Section (Course Development) ---
    defineField({
      name: 'offeringsHeading',
      title: 'Offerings Heading',
      type: 'string',
      group: 'offerings',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
    }),
    defineField({
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      group: 'offerings',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'highlight', type: 'string', description: 'Optional part of label to underline' }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),

    // --- Faculty Workshops Section (Faculty Enrichment) ---
    defineField({
      name: 'workshopsHeading',
      title: 'Workshops Heading',
      type: 'string',
      group: 'workshops',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
    }),
    defineField({
      name: 'workshops',
      title: 'Workshops',
      type: 'array',
      group: 'workshops',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'meta', type: 'string', title: 'Format / Duration (e.g. In-Person · 3 Days)' }),
          defineField({ name: 'description', type: 'text', rows: 3, validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'title', subtitle: 'meta' } },
      }],
    }),

    // --- Faculty Accelerator Section (Faculty Enrichment) ---
    defineField({
      name: 'acceleratorHeading',
      title: 'Accelerator Heading',
      type: 'string',
      group: 'accelerator',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
    }),
    defineField({
      name: 'acceleratorMeta',
      title: 'Accelerator Duration (e.g. 4-6 Months)',
      type: 'string',
      group: 'accelerator',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
    }),
    defineField({
      name: 'acceleratorParagraphs',
      title: 'Accelerator Paragraphs',
      type: 'array',
      group: 'accelerator',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
      of: [{ type: 'text', rows: 3 }],
    }),

    // --- Service Cards (Research & Evaluation and Advisory) ---
    defineField({
      name: 'serviceCardsHeading',
      title: 'Practice Areas / Services Heading',
      type: 'string',
      group: 'serviceCards',
      hidden: ({ document }) => document?.serviceId !== 'research-evaluation' && document?.serviceId !== 'advisory',
    }),
    defineField({
      name: 'serviceCards',
      title: 'Practice Area Cards',
      type: 'array',
      group: 'serviceCards',
      hidden: ({ document }) => document?.serviceId !== 'research-evaluation' && document?.serviceId !== 'advisory',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
          defineField({
            name: 'paragraphs',
            type: 'array',
            of: [{ type: 'text', rows: 3 }],
            validation: (r) => r.required(),
          }),
        ],
        preview: { select: { title: 'title' } },
      }],
    }),

    // --- Example Projects (Research & Evaluation and Advisory) ---
    defineField({
      name: 'exampleProjectsHeading',
      title: 'Example Projects Heading',
      type: 'string',
      group: 'exampleProjects',
      hidden: ({ document }) => document?.serviceId !== 'research-evaluation' && document?.serviceId !== 'advisory',
    }),
    defineField({
      name: 'exampleProjects',
      title: 'Example Projects',
      type: 'array',
      group: 'exampleProjects',
      hidden: ({ document }) => document?.serviceId !== 'research-evaluation' && document?.serviceId !== 'advisory',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'title', media: 'image' } },
      }],
    }),
    defineField({
      name: 'exampleProjectsCtaText',
      title: 'Example Projects Button Text',
      type: 'string',
      group: 'exampleProjects',
      initialValue: 'See All Our Projects',
      hidden: ({ document }) => document?.serviceId !== 'research-evaluation' && document?.serviceId !== 'advisory',
    }),
    defineField({
      name: 'exampleProjectsCtaHref',
      title: 'Example Projects Button Link',
      type: 'string',
      group: 'exampleProjects',
      initialValue: '/projects',
      hidden: ({ document }) => document?.serviceId !== 'research-evaluation' && document?.serviceId !== 'advisory',
    }),

    // --- Methodology Section ---
    defineField({ name: 'methodologyHeading', title: 'Methodology Heading', type: 'string', group: 'methodology' }),
    defineField({
      name: 'methodologyFields',
      title: 'Methodology Fields (up to 9)',
      type: 'array',
      group: 'methodology',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'highlight', type: 'boolean', initialValue: false }),
        ],
        preview: { select: { title: 'name' } },
      }],
      validation: (r) => r.max(9),
    }),

    // --- Target Sectors Section (Course Development) ---
    defineField({
      name: 'sectorsHeading',
      title: 'Target Sectors Heading',
      type: 'string',
      group: 'sectorsOutcomes',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
    }),
    defineField({
      name: 'sectors',
      title: 'Target Sectors',
      type: 'array',
      group: 'sectorsOutcomes',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'title', media: 'image' } },
      }],
    }),

    // --- Outcomes Section (Course Development) ---
    defineField({
      name: 'outcomesHeading',
      title: 'Outcomes Heading',
      type: 'string',
      group: 'sectorsOutcomes',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcome Labels (up to 4)',
      type: 'array',
      group: 'sectorsOutcomes',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
      of: [{ type: 'string' }],
      validation: (r) => r.max(4),
    }),

    // --- Proof Points Section (Course Development) ---
    defineField({
      name: 'proofPointsHeading',
      title: 'Proof Points Heading',
      type: 'string',
      group: 'sectorsOutcomes',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
    }),
    defineField({
      name: 'proofPoints',
      title: 'Proof Point Projects',
      type: 'array',
      group: 'sectorsOutcomes',
      hidden: ({ document }) => document?.serviceId !== 'course-development',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'title', media: 'image' } },
      }],
    }),

    // --- Social Proof / Partners Section (Faculty Enrichment) ---
    defineField({
      name: 'socialProofHeading',
      title: 'Partners / Social Proof Heading',
      type: 'string',
      group: 'socialProof',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
    }),
    defineField({
      name: 'socialProofPartners',
      title: 'Partner Logos',
      type: 'array',
      group: 'socialProof',
      hidden: ({ document }) => document?.serviceId !== 'faculty-enrichment',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'logo', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'name', media: 'logo' } },
      }],
    }),

    // --- Contact Section ---
    defineField({
      name: 'contactHeading',
      title: 'Contact Section Heading',
      type: 'string',
      group: 'contact',
      description: 'Custom CTA heading on this service page',
    }),
  ],
  preview: { select: { title: 'title' } },
});
