import { createClient } from '@sanity/client';
import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';

// ESM-safe __dirname (Node 20.11+)
const scriptDir = import.meta.dirname;

// Load .env.local manually (no dotenv dependency)
const envFile = readFileSync(join(scriptDir, '..', '.env.local'), 'utf-8');
for (const line of envFile.split('\n')) {
  const m = line.match(/^([A-Z_]+)=["']?(.*?)["']?$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
}

import { services } from '../src/data/services';
import { founder, team } from '../src/data/team';
import { publications } from '../src/data/publications';
import { conferences } from '../src/data/conferences';
import { cardSections } from '../src/data/projects';
import { defaultTestimonials } from '../src/data/testimonials';

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET ?? 'production',
  apiVersion: '2026-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const assetCache = new Map<string, string>();

/** Upload a local /images/... path to Sanity assets, return asset _id. */
async function uploadImage(localPath: string): Promise<string | undefined> {
  const rel = localPath.replace(/^\//, ''); // '/images/team/x.png' -> 'images/team/x.png'
  const abs = join(scriptDir, '..', 'public', rel);
  if (!existsSync(abs)) {
    console.warn(`  ⚠ missing file: ${rel}`);
    return undefined;
  }
  if (assetCache.has(rel)) return assetCache.get(rel);
  const asset = await client.assets.upload('image', createReadStream(abs), {
    filename: basename(abs),
  });
  assetCache.set(rel, asset._id);
  console.log(`  ↑ uploaded ${rel}`);
  return asset._id;
}

async function imageField(localPath?: string) {
  if (!localPath) return undefined;
  const ref = await uploadImage(localPath);
  return ref ? { _type: 'image', asset: { _type: 'reference', _ref: ref } } : undefined;
}

async function run() {
  const existing = await client.fetch<number>('count(*[_type == "teamMember"])');
  if (existing > 0) {
    console.error(`Dataset already has ${existing} teamMember docs. Delete collection docs in Studio (or via 'npx sanity dataset' CLI) before re-seeding.`);
    process.exit(1);
  }

  // --- Singletons ---
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    contactEmail: 'shraddha@learningdesignlab.co',
    linkedinUrl: 'https://linkedin.com',
    footerTagline: '',
  });
  console.log('✓ siteSettings');

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroTitle: 'Designing Learning That Works',
    heroSubtext:
      'We are an impact-driven, international learning design firm dedicated to enhancing the effectiveness of skilling, competency development, and educational interventions. We partner with organizations and educational institutions to build evidence-informed, contextually grounded designs that translate learning into real-world outcomes.',
    primaryCtaLabel: 'Work With Us',
    secondaryCtaLabel: 'Explore Services',
    stats: [
      { _key: 's1', value: 10, suffix: 'M+', label: 'Learners Impacted' },
      { _key: 's2', value: 200, suffix: '+', label: 'Trainings Delivered' },
      { _key: 's3', value: 65, suffix: '+', label: 'Digital Courses Built' },
      { _key: 's4', value: 20, suffix: '+', label: 'Countries Reached' },
      { _key: 's5', value: 25, suffix: '+', label: 'Organizations Partnered' },
    ],
    selectedWorkProjects: [
      'Applied online courses on AI and a story-based course on Data Science for GIZ & SWAYAM',
      'Research to study the impact of Digital Girl Hub Program (a large-scale skilling and employment program for girls): UNICEF India',
      'Workshops on AI for Teaching, Learning and Research for faculty members of Stirling University, UAE',
      'Employability curriculum (student trainer manual and trainer workbook) for ITIs in India with Quest Alliance',
    ],
    selectedWorkScholarships: [
      'Navigating Structural, Epistemic, and Human Dimensions in Education',
      'Reimagining Learning with AI: Towards a Learning Society',
      'Development and Validation of a Brief Digital Pedagogy Competency Scale (SPANCER)',
    ],
    selectedWorkBlogs: [
      "Why Facts Don't Change Minds: Designing Learning That Transcends Behavior",
      'Learning How to Learn: Introducing the Science of Learning to Undergraduate Students',
      'Beyond the Hype: What AI Actually Means for the Next Billion Learners',
    ],
    presentations: await Promise.all(
      [
        { name: 'Indian Institute of Technology, Delhi', path: '/images/logos/iit delhi.jpg' },
        { name: 'University of Northern Colorado', path: '/images/logos/northern colorado.jpg' },
        { name: 'Masinde Muliro University of Science & Technology, Kenya', path: '/images/logos/masinde muliro.png' },
      ].map(async (p, i) => ({
        _key: `p${i}`,
        name: p.name,
        image: await imageField(p.path),
      }))
    ),
  });
  console.log('✓ homePage');

  // --- Service pages ---
  for (const svc of Object.values(services)) {
    await client.createOrReplace({
      _id: `servicePage-${svc.id}`,
      _type: 'servicePage',
      serviceId: svc.id,
      number: svc.number,
      title: svc.title,
      description: svc.description,
      itemsHeading: svc.itemsHeading,
      items: svc.items.map((it, i) => ({ _key: `i${i}`, ...it })),
      approachNote: svc.approachNote,
      outcomeNote: svc.outcomeNote,
      differentiator: svc.differentiator,
      cta: svc.cta,
      dark: svc.dark ?? false,
    });
    console.log(`✓ servicePage-${svc.id}`);
  }

  // --- Page copy ---
  const pageCopy = [
    { id: 'pageCopy-team', pageKey: 'team', heading: 'Our Team', intro: '' },
    { id: 'pageCopy-projects', pageKey: 'projects', heading: 'Selected Projects', intro: '' },
    {
      id: 'pageCopy-publications',
      pageKey: 'publications',
      heading: 'Our Publications',
      intro:
        'Our publications translate research into practice across digital pedagogy, AI in learning, instructional design, and education for social impact.',
    },
    {
      id: 'pageCopy-conferences',
      pageKey: 'conferences',
      heading: 'Our Work at Conferences',
      intro:
        "We've delivered talks and presentations on a diverse range of topics, including AI in education, Universal Design for Learning (UDL), youth empowerment, and the intersection of cognitive science and learning design.",
    },
  ];
  for (const p of pageCopy) {
    const { id, ...doc } = p;
    await client.createOrReplace({ _id: id, _type: 'pageCopy', ...doc });
    console.log(`✓ ${p.id}`);
  }

  // --- Team members (founder first, orderRank via zero-padded index) ---
  const allMembers = [{ ...founder, isFounder: true }, ...team.map((m) => ({ ...m, isFounder: false }))];
  for (let i = 0; i < allMembers.length; i++) {
    const m = allMembers[i];
    await client.create({
      _type: 'teamMember',
      name: m.name,
      role: m.role,
      bio: m.description,
      image: await imageField(m.image),
      imagePosition: m.imagePosition,
      linkedin: m.socials?.linkedin,
      isFounder: m.isFounder,
      orderRank: `a${String(i).padStart(4, '0')}`,
    });
    console.log(`✓ teamMember ${m.name}`);
  }

  // --- Projects ---
  let pi = 0;
  for (const section of cardSections) {
    for (const p of section.projects) {
      await client.create({
        _type: 'project',
        section: section.title,
        client: p.client,
        title: p.title,
        description: p.description,
        image: await imageField(p.image),
        imageAlt: p.imageAlt,
        actions: p.actions?.map((a, i) => ({ _key: `a${i}`, ...a })),
        orderRank: `a${String(pi++).padStart(4, '0')}`,
      });
      console.log(`✓ project ${p.title}`);
    }
  }

  // --- Publications ---
  for (let i = 0; i < publications.length; i++) {
    const p = publications[i];
    await client.create({
      _type: 'publication',
      citation: p.citation,
      title: p.title,
      venue: p.venue,
      type: p.type,
      href: p.href,
      orderRank: `a${String(i).padStart(4, '0')}`,
    });
    console.log(`✓ publication ${p.title.slice(0, 50)}`);
  }

  // --- Conferences ---
  for (let i = 0; i < conferences.length; i++) {
    const c = conferences[i];
    const extraImages = c.images
      ? await Promise.all(c.images.map((img) => imageField(img)))
      : undefined;
    await client.create({
      _type: 'conference',
      title: c.title,
      year: c.year,
      location: c.location,
      description: c.description,
      image: await imageField(c.image),
      images: extraImages?.filter(Boolean).map((img, j) => ({ _key: `img${j}`, ...img })),
      imageAlt: c.imageAlt,
      imagePosition: c.imagePosition,
      actions: c.actions?.map((a, j) => ({ _key: `a${j}`, ...a })),
      tags: c.tags,
      orderRank: `a${String(i).padStart(4, '0')}`,
    });
    console.log(`✓ conference ${c.title.slice(0, 50)}`);
  }

  // --- Testimonials ---
  for (let i = 0; i < defaultTestimonials.length; i++) {
    const t = defaultTestimonials[i];
    await client.create({ _type: 'testimonial', ...t, orderRank: `a${String(i).padStart(4, '0')}` });
    console.log(`✓ testimonial ${t.attribution.slice(0, 40)}`);
  }

  console.log('\nSeed complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
