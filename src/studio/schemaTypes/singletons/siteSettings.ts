import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'footerTagline', title: 'Footer tagline', type: 'text', rows: 3 }),
  ],
});
