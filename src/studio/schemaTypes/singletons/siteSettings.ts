import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General & Contact' },
    { name: 'seo', title: 'SEO & Meta Tags' },
  ],
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      group: 'general',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer tagline',
      type: 'text',
      rows: 3,
      group: 'general',
    }),

    // --- SEO & Meta Tags ---
    defineField({
      name: 'siteTitle',
      title: 'Page / Browser Tab Title',
      description: 'The title shown in the browser tab and search engine results (default: Learning Design Lab)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'Summary shown in Google search results and link previews',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
    defineField({
      name: 'metaKeywords',
      title: 'Meta Keywords',
      description: 'Comma-separated search keywords (e.g. learning design, instructional design, edtech)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (OG Image)',
      description: 'Preview banner image when the website is shared on WhatsApp, LinkedIn, Twitter, etc.',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'customMetaTags',
      title: 'Custom Meta Tags / Verification Tags',
      description:
        'Paste raw <meta> tags or search console verification tags here (e.g. <meta name="google-site-verification" content="..." />). Each tag on a new line.',
      type: 'text',
      rows: 4,
      group: 'seo',
    }),
  ],
});
