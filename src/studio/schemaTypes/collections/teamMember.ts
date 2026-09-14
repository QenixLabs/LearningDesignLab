import { defineField, defineType } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 5 }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imagePosition', title: 'Image position override (Tailwind class, e.g. object-[center_20%])', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'isFounder', title: 'Founder (shown separately on top)', type: 'boolean', initialValue: false }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
});
