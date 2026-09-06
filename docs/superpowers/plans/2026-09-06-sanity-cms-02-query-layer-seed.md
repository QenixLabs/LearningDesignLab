# Plan 02 — Data Extraction + Query Layer + Seed

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** All hardcoded content lives in `src/data/*.ts` (imported by pages — no behavior change), Sanity query layer exists, seed script pushes all content + images into Sanity.

**Architecture:** Extract inline arrays to data files (single source of truth, reused as runtime fallbacks). Query layer in `src/lib/sanity/`. Seed script (`tsx`, server-side write token) uploads images from `public/images/` to Sanity assets and creates documents with fixed IDs for singletons.

**Tech Stack:** @sanity/client, @sanity/image-url, tsx.

**Depends on:** Plan 01 (schemas deployed, env vars set).

---

### Task 1: Extract inline data to `src/data/`

**Files:**
- Create: `src/data/team.ts`, `src/data/publications.ts`, `src/data/conferences.ts`, `src/data/projects.ts`, `src/data/testimonials.ts`
- Modify: `src/pages/Team.tsx`, `src/pages/Publications.tsx`, `src/pages/Conferences.tsx`, `src/sections/projects/ProjectsList.tsx`, `src/sections/home/TestimonialsSection.tsx`

- [ ] **Step 1: `src/data/team.ts`** — move `SocialLinks`, `TeamMember` interfaces, `founder`, `team` from `Team.tsx`; export all:

```ts
export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description?: string;
  imagePosition?: string;
  socials?: SocialLinks;
}

export const founder: TeamMember = { /* ...exact current object from Team.tsx... */ };

export const team: TeamMember[] = [ /* ...exact current array from Team.tsx... */ ];
```

Copy content verbatim from `src/pages/Team.tsx` lines 21-end of array. Do not paraphrase.

- [ ] **Step 2: `src/data/publications.ts`**

```ts
export interface Publication {
  citation: string;
  title: string;
  venue: string;
  type: string;
  href: string;
}

export const publications: Publication[] = [ /* ...verbatim from Publications.tsx... */ ];
```

- [ ] **Step 3: `src/data/conferences.ts`**

```ts
export interface ConferenceAction {
  label: string;
  href: string;
}

export interface Conference {
  title: string;
  year: string;
  location: string;
  description: string;
  imageAlt: string;
  image?: string;
  images?: string[];
  imagePosition?: string;
  actions?: ConferenceAction[];
  tags?: string[];
}

export const conferences: Conference[] = [ /* ...verbatim from Conferences.tsx... */ ];
```

- [ ] **Step 4: `src/data/projects.ts`** — move `ProjectAction`, `Project`, `CardSection`, `cardSections` from `ProjectsList.tsx`:

```ts
export interface ProjectAction {
  label: string;
  href: string;
}

export interface Project {
  client: string;
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
  actions?: ProjectAction[];
}

export interface CardSection {
  title: string;
  projects: Project[];
}

export const cardSections: CardSection[] = [ /* ...verbatim from ProjectsList.tsx (all 3 sections, 16 projects)... */ ];
```

- [ ] **Step 5: `src/data/testimonials.ts`**

```ts
export interface Testimonial {
  quote: string;
  highlight?: string;
  attribution: string;
}

export const defaultTestimonials: Testimonial[] = [ /* ...verbatim from TestimonialsSection.tsx... */ ];
```

- [ ] **Step 6: Update imports in the 5 source files**

- `Team.tsx`: delete moved interfaces/arrays, add `import { founder, team } from '../data/team';` — keep `TeamMember` type via `import type { TeamMember } from '../data/team';` if referenced locally.
- `Publications.tsx`: add `import { publications } from '../data/publications';`
- `Conferences.tsx`: add `import { conferences } from '../data/conferences';`
- `ProjectsList.tsx`: add `import { cardSections } from '../../data/projects';`
- `TestimonialsSection.tsx`: add `import { defaultTestimonials } from '../../data/testimonials';` and `import type { Testimonial } from '../../data/testimonials';` — remove local interface + array.

- [ ] **Step 7: Verify**

Run: `npm run build`
Expected: `✓ built`, no type errors. Manually load `/team`, `/publications`, `/conferences`, `/projects`, `/` — all identical to before.

- [ ] **Step 8: Commit**

```bash
git add src/data src/pages src/sections
git commit -m "refactor: extract inline content arrays into src/data modules"
```

### Task 2: Query layer

**Files:**
- Create: `src/lib/sanity/client.ts`
- Create: `src/lib/sanity/image.ts`
- Create: `src/lib/sanity/useSanityQuery.ts`

- [ ] **Step 1: Write `client.ts`**

```ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: (import.meta.env.VITE_SANITY_DATASET as string) ?? 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
});
```

- [ ] **Step 2: Write `image.ts`**

```ts
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

/**
 * Accepts a Sanity image object (from GROQ) or a local string path (fallback).
 * Returns a CDN URL with hotspot/crop applied, or the string unchanged.
 */
export function imgUrl(source: SanityImageSource | string | undefined, width = 800): string | undefined {
  if (!source) return undefined;
  if (typeof source === 'string') return source;
  return builder.image(source).width(width).auto('format').url();
}
```

- [ ] **Step 3: Write `useSanityQuery.ts`**

```ts
import { useEffect, useState } from 'react';
import { sanityClient } from './client';

interface QueryResult<T> {
  data: T;
  loading: boolean;
}

/**
 * Fetches from Sanity at runtime. On any error (offline, API down, bad query)
 * returns the fallback so the public site always renders.
 */
export function useSanityQuery<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T
): QueryResult<T> {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch<T>(query, params)
      .then((result) => {
        if (!cancelled && result !== null) setData(result);
      })
      .catch((err) => {
        console.error('[sanity] fetch failed, using fallback content:', err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, loading };
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: `✓ built`.

- [ ] **Step 5: Commit**

```bash
git add src/lib/sanity
git commit -m "feat(cms): add Sanity client, image helper, and useSanityQuery hook"
```

### Task 3: Seed script

**Files:**
- Create: `scripts/seed-sanity.ts`
- Modify: `.env.local` (add write token)
- Modify: `package.json` (add seed script)

- [ ] **Step 1: Create write token**

Open `https://manage.sanity.io` → project → API → Tokens → Add token → name `seed`, permissions **Editor**. Append to `.env.local`:

```bash
SANITY_WRITE_TOKEN=<token>
```

- [ ] **Step 2: Add npm script to `package.json`**

In `"scripts"`:

```json
"seed:sanity": "tsx scripts/seed-sanity.ts"
```

- [ ] **Step 3: Write `scripts/seed-sanity.ts`**

```ts
import { createClient } from '@sanity/client';
import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';

// ESM-safe __dirname (Node 20.11+)
const scriptDir = import.meta.dirname;

// Load .env.local manually (no dotenv dependency)
const envFile = readFileSync(join(scriptDir, '..', '.env.local'), 'utf-8');
for (const line of envFile.split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
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

/** Upload a local /images/... path to Sanity assets, return asset _ref. */
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
    {
      id: 'pageCopy-team',
      pageKey: 'team',
      heading: 'Our Team',
      intro: '',
    },
    {
      id: 'pageCopy-projects',
      pageKey: 'projects',
      heading: 'Selected Projects',
      intro: '',
    },
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
    await client.createOrReplace({ _id: p.id, _type: 'pageCopy', ...p });
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
```

- [ ] **Step 4: Run seed**

```bash
npm run seed:sanity
```

Expected: `✓` per document, `Seed complete.` Warnings for missing image files are acceptable only if the file genuinely doesn't exist in `public/` — investigate any warning against the data file path.

- [ ] **Step 5: Verify in Studio**

Open `http://localhost:5173/studio`:
- Home Page form shows hero copy + 5 stats.
- Service Pages list has 4 entries with items.
- Team Members shows founder + all members with photos.
- Projects shows 16, Publications 14, Conferences 12, Testimonials 4.
- Drag handles visible on collection lists (orderable plugin).

- [ ] **Step 6: Commit**

```bash
git add scripts/seed-sanity.ts package.json
git commit -m "feat(cms): add Sanity seed script for existing content"
```

### Task 4: Guard against double-seed

- [ ] **Step 1: Add idempotency note**

Collections use `client.create` — re-running duplicates them. Add guard at top of `run()` in `scripts/seed-sanity.ts`:

```ts
const existing = await client.fetch<number>('count(*[_type == "teamMember"])');
if (existing > 0) {
  console.error(`Dataset already has ${existing} teamMember docs. Delete collection docs in Studio (or via 'npx sanity dataset' CLI) before re-seeding.`);
  process.exit(1);
}
```

- [ ] **Step 2: Verify guard triggers**

Run: `npm run seed:sanity`
Expected: exits with the guard error (dataset already seeded).

- [ ] **Step 3: Commit**

```bash
git add scripts/seed-sanity.ts
git commit -m "feat(cms): guard seed script against double-seeding"
```

### Task 5: Close out

- [ ] **Step 1: Update tracker** — mark plan 02 ✅, commit plan docs.
