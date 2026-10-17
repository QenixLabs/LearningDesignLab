import { defineField, defineType } from 'sanity';

export const communityPage = defineType({
  name: 'communityPage',
  title: 'Community Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero & Stats' },
    { name: 'webinars', title: 'Webinars & Talks' },
    { name: 'dialogues', title: 'Dialogues' },
    { name: 'meetups', title: 'Meetups' },
    { name: 'publications', title: 'Blog & Reading Club' },
    { name: 'communityHub', title: 'WhatsApp Hub' },
    { name: 'advisorsVolunteers', title: 'Advisors & Volunteers' },
    { name: 'contact', title: 'Contact Section' },
  ],
  fields: [
    // --- Hero & Socials ---
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
      group: 'hero',
      initialValue: 'Community & Open Initiatives',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'Learning Designers Community',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      group: 'hero',
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g. 60+)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'LDC Social & Community Links',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'website', title: 'Website URL', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp Community Invite URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube Channel URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
      ],
    }),

    // --- ACTIVITY 1: Webinars & Expert Talks ---
    defineField({
      name: 'webinarsHeading',
      title: 'Webinars Section Heading',
      type: 'string',
      group: 'webinars',
      initialValue: 'Webinars & Expert Talks',
    }),
    defineField({
      name: 'webinarsDescription',
      title: 'Webinars Section Description',
      type: 'text',
      rows: 3,
      group: 'webinars',
    }),
    defineField({
      name: 'webinars',
      title: 'Webinars',
      type: 'array',
      group: 'webinars',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'speaker', title: 'Speaker (e.g. with Julie Dirksen)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'role', title: 'Role / Bio snippet', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'tag', title: 'Category Tag (e.g. Behavior Change)', type: 'string' }),
            defineField({
              name: 'thumbnail',
              title: 'Custom Thumbnail (Optional)',
              description: 'Optional override. Leave blank to automatically fetch and display the video thumbnail directly from the YouTube link.',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({ name: 'url', title: 'YouTube URL', type: 'url', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'speaker', media: 'thumbnail' } },
        },
      ],
    }),

    // --- ACTIVITY 2: Cross-Country Education Dialogues ---
    defineField({
      name: 'dialoguesLabel',
      title: 'Dialogues Section Label',
      type: 'string',
      group: 'dialogues',
      initialValue: 'International Exchanges',
    }),
    defineField({
      name: 'dialoguesHeading',
      title: 'Dialogues Section Heading',
      type: 'string',
      group: 'dialogues',
      initialValue: 'Cross-Country Education Dialogues',
    }),
    defineField({
      name: 'dialoguesDescription',
      title: 'Dialogues Section Description',
      type: 'text',
      rows: 3,
      group: 'dialogues',
    }),
    defineField({
      name: 'dialogues',
      title: 'Cross-Country Education Dialogues',
      type: 'array',
      group: 'dialogues',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'countries', title: 'Country Tags', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
            defineField({ name: 'highlight', title: 'Highlight Question / Quote', type: 'text', rows: 2 }),
            defineField({ name: 'url', title: 'LinkedIn Post URL', type: 'url', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    // --- ACTIVITY 3: Learning Professionals Meetups ---
    defineField({
      name: 'meetupsLabel',
      title: 'Meetups Section Label',
      type: 'string',
      group: 'meetups',
      initialValue: 'Monthly Peer Learning',
    }),
    defineField({
      name: 'meetupsHeading',
      title: 'Meetups Section Heading',
      type: 'string',
      group: 'meetups',
      initialValue: 'Learning Professionals Meetups',
    }),
    defineField({
      name: 'meetupsParagraph1',
      title: 'Meetups Paragraph 1',
      type: 'text',
      rows: 3,
      group: 'meetups',
    }),
    defineField({
      name: 'meetupsParagraph2',
      title: 'Meetups Paragraph 2',
      type: 'text',
      rows: 3,
      group: 'meetups',
    }),
    defineField({
      name: 'meetupsEventsUrl',
      title: 'Meetups Luma Events URL',
      type: 'url',
      group: 'meetups',
      initialValue: 'https://luma.com/learningdesigners?period=past',
    }),
    defineField({
      name: 'meetupVideo',
      title: 'Meetup Video Showcase',
      type: 'object',
      group: 'meetups',
      fields: [
        defineField({ name: 'tag', title: 'Badge Tag', type: 'string', initialValue: 'Peer Learning' }),
        defineField({
          name: 'thumbnail',
          title: 'Custom Thumbnail (Optional)',
          description: 'Optional override. Leave blank to automatically fetch and display the video thumbnail directly from the YouTube link.',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({ name: 'url', title: 'YouTube URL', type: 'url' }),
      ],
    }),

    // --- ACTIVITY 4: Global South’s Learning Blog & Newsletter ---
    defineField({
      name: 'blogLabel',
      title: 'Blog Section Label',
      type: 'string',
      group: 'publications',
      initialValue: 'Publications & Research',
    }),
    defineField({
      name: 'blogHeading',
      title: 'Blog Section Heading',
      type: 'string',
      group: 'publications',
      initialValue: "Global South's Learning Blog & Newsletter",
    }),
    defineField({
      name: 'blogDescription',
      title: 'Blog Section Description',
      type: 'text',
      rows: 3,
      group: 'publications',
    }),
    defineField({
      name: 'blogNewsletterUrl',
      title: 'Newsletter URL',
      type: 'url',
      group: 'publications',
    }),
    defineField({
      name: 'blogPosts',
      title: 'Blog Articles',
      type: 'array',
      group: 'publications',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({ name: 'category', title: 'Category (e.g. Behavioral Science)', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Banner Image',
              description:
                'Upload the article banner or cover image. (Unlike YouTube, LinkedIn does not allow external websites to automatically fetch thumbnails from links).',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({ name: 'url', title: 'LinkedIn Article URL', type: 'url', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
        },
      ],
    }),

    // --- ACTIVITY 5: Reading Club ---
    defineField({
      name: 'readingClubLabel',
      title: 'Reading Club Label',
      type: 'string',
      group: 'publications',
      initialValue: 'Evidence-Informed Practice',
    }),
    defineField({
      name: 'readingClubHeading',
      title: 'Reading Club Heading',
      type: 'string',
      group: 'publications',
      initialValue: 'Reading Club',
    }),
    defineField({
      name: 'readingClubDescription',
      title: 'Reading Club Description',
      type: 'text',
      rows: 4,
      group: 'publications',
    }),
    defineField({
      name: 'readingClubHowItWorks',
      title: 'Reading Club How It Works Text',
      type: 'text',
      rows: 2,
      group: 'publications',
    }),

    // --- ACTIVITY 6: Events, Resources, & Expert Insights Posters ---
    defineField({
      name: 'expertPostersLabel',
      title: 'Expert Posters Label',
      type: 'string',
      group: 'publications',
      initialValue: 'Knowledge Hub',
    }),
    defineField({
      name: 'expertPostersHeading',
      title: 'Expert Posters Heading',
      type: 'string',
      group: 'publications',
      initialValue: 'Events, Resources, & Expert Insights',
    }),
    defineField({
      name: 'expertPostersDescription',
      title: 'Expert Posters Description',
      type: 'text',
      rows: 3,
      group: 'publications',
    }),
    defineField({
      name: 'expertPosters',
      title: 'Expert Insights Posters',
      type: 'array',
      group: 'publications',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'speakers', title: 'Speakers', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({ name: 'badge', title: 'Badge Label (e.g. Teacher Expertise)', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Poster Image / Banner',
              description:
                'Upload the poster or infographic image. (Unlike YouTube, LinkedIn does not allow external sites to automatically pull thumbnails from post URLs, so the image file must be uploaded here).',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({ name: 'url', title: 'LinkedIn Post URL', type: 'url', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'speakers', media: 'image' } },
        },
      ],
    }),

    // --- ACTIVITY 7: WhatsApp Community Hub ---
    defineField({
      name: 'whatsappHubLabel',
      title: 'WhatsApp Hub Label',
      type: 'string',
      group: 'communityHub',
      initialValue: 'WhatsApp Community Hub',
    }),
    defineField({
      name: 'whatsappHubHeading',
      title: 'WhatsApp Hub Heading',
      type: 'string',
      group: 'communityHub',
      initialValue: 'Group Discussions, Resources and Global Job Postings',
    }),
    defineField({
      name: 'whatsappHubDescription',
      title: 'WhatsApp Hub Description',
      type: 'text',
      rows: 3,
      group: 'communityHub',
    }),
    defineField({
      name: 'whatsappHubButtonText',
      title: 'WhatsApp Hub Button Text',
      type: 'string',
      group: 'communityHub',
      initialValue: 'Join the community',
    }),
    defineField({
      name: 'whatsappHubUrl',
      title: 'WhatsApp Hub URL',
      type: 'url',
      group: 'communityHub',
    }),

    // --- Advisors & Volunteers ---
    defineField({
      name: 'advisorsLabel',
      title: 'Advisors Label',
      type: 'string',
      group: 'advisorsVolunteers',
      initialValue: 'Guidance & Scientific Rigor',
    }),
    defineField({
      name: 'advisorsHeading',
      title: 'Advisors Heading',
      type: 'string',
      group: 'advisorsVolunteers',
      initialValue: 'Our Advisors',
    }),
    defineField({
      name: 'advisorsDescription',
      title: 'Advisors Description',
      type: 'text',
      rows: 2,
      group: 'advisorsVolunteers',
    }),
    defineField({
      name: 'advisors',
      title: 'Advisors',
      type: 'array',
      group: 'advisorsVolunteers',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'role', title: 'Role (e.g. Educational Scientist)', type: 'string' }),
            defineField({ name: 'affiliation', title: 'Affiliation (e.g. University of Toronto)', type: 'string' }),
            defineField({ name: 'bio', title: 'Bio description', type: 'text', rows: 3 }),
            defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
        },
      ],
    }),

    defineField({
      name: 'volunteersLabel',
      title: 'Volunteers Label',
      type: 'string',
      group: 'advisorsVolunteers',
      initialValue: 'The Driving Force',
    }),
    defineField({
      name: 'volunteersHeading',
      title: 'Volunteers Heading',
      type: 'string',
      group: 'advisorsVolunteers',
      initialValue: 'Our Volunteers',
    }),
    defineField({
      name: 'volunteersDescription',
      title: 'Volunteers Description',
      type: 'text',
      rows: 2,
      group: 'advisorsVolunteers',
    }),
    defineField({
      name: 'volunteers',
      title: 'Volunteers',
      type: 'array',
      group: 'advisorsVolunteers',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'role', title: 'Role (e.g. Founder, Meet-up Facilitator)', type: 'string' }),
            defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
        },
      ],
    }),

    // --- Contact Section ---
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
      group: 'contact',
      initialValue: 'Contribute to LDC',
    }),
    defineField({
      name: 'contactSubtext',
      title: 'Contact Subtext',
      type: 'text',
      rows: 2,
      group: 'contact',
      initialValue: "Submit your contact details. We'll get back to you within 7 working days.",
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      description: 'Optional custom email for community inquiries (defaults to site settings email)',
      type: 'string',
      group: 'contact',
    }),
  ],
});
