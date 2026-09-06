# Plan 03 — Collections Migration (Team, Publications, Conferences, Projects)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Team, Publications, Conferences, and Projects pages render from Sanity at runtime, with `src/data/` files as instant-paint fallbacks.

**Architecture:** One GROQ query per collection in `src/lib/sanity/queries.ts`. Each page calls `useSanityQuery` with its local data file as fallback, maps Sanity shape → existing component shape, and passes through `imgUrl()` for images. No component redesign.

**Tech Stack:** GROQ, useSanityQuery (plan 02), imgUrl helper.

**Depends on:** Plan 02 (seed verified in Studio).

---

### Task 1: Collection queries + types

**Files:**
- Create: `src/lib/sanity/queries.ts`

- [ ] **Step 1: Write `queries.ts`**

```ts
import type { SanityImageSource } from '@sanity/image-url';

// ---------- Team ----------
export interface SanityTeamMember {
  name: string;
  role: string;
  description?: string;
  image?: SanityImageSource;
  imagePosition?: string;
  linkedin?: string;
  isFounder: boolean;
}

export const TEAM_QUERY = `
  *[_type == "teamMember"] | order(orderRank asc) {
    name, role, "description": bio, image, imagePosition, linkedin, isFounder
  }
`;

// ---------- Publications ----------
export interface SanityPublication {
  citation: string;
  title: string;
  venue?: string;
  type: string;
  href: string;
}

export const PUBLICATIONS_QUERY = `
  *[_type == "publication"] | order(orderRank asc) {
    citation, title, "venue": coalesce(venue, ''), type, href
  }
`;

// ---------- Conferences ----------
export interface SanityConference {
  title: string;
  year?: string;
  location?: string;
  description?: string;
  image?: SanityImageSource;
  images?: SanityImageSource[];
  imageAlt: string;
  imagePosition?: string;
  actions?: { label: string; href: string }[];
  tags?: string[];
}

export const CONFERENCES_QUERY = `
  *[_type == "conference"] | order(orderRank asc) {
    title, "year": coalesce(year, ''), "location": coalesce(location, ''),
    "description": coalesce(description, ''), image, images, imageAlt,
    imagePosition, actions, tags
  }
`;

// ---------- Projects ----------
export interface SanityProject {
  section: string;
  client: string;
  title: string;
  description: string;
  image?: SanityImageSource;
  imageAlt: string;
  actions?: { label: string; href: string }[];
}

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(orderRank asc) {
    section, client, title, description, image, imageAlt, actions
  }
`;

// ---------- Testimonials ----------
export interface SanityTestimonial {
  quote: string;
  highlight?: string;
  attribution: string;
}

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(orderRank asc) { quote, highlight, attribution }
`;
```

- [ ] **Step 2: Verify build**

Run: `npm run build` — Expected: `✓ built`.

- [ ] **Step 3: Commit**

```bash
git add src/lib/sanity/queries.ts
git commit -m "feat(cms): add GROQ queries and result types for collections"
```

### Task 2: Migrate Team page

**Files:**
- Modify: `src/pages/Team.tsx`

- [ ] **Step 1: Wire query**

At top of `Team.tsx` add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { TEAM_QUERY, type SanityTeamMember } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { founder as fallbackFounder, team as fallbackTeam, type TeamMember } from '../data/team';
```

Inside the `Team` component, before render:

```tsx
const { data: members } = useSanityQuery<SanityTeamMember[]>(TEAM_QUERY, {}, []);

const toTeamMember = (m: SanityTeamMember): TeamMember => ({
  name: m.name,
  role: m.role,
  image: imgUrl(m.image, 800),
  description: m.description,
  imagePosition: m.imagePosition,
  socials: m.linkedin ? { linkedin: m.linkedin } : undefined,
});

const founder: TeamMember =
  members.length > 0
    ? toTeamMember(members.find((m) => m.isFounder) ?? members[0])
    : fallbackFounder;

const team: TeamMember[] =
  members.length > 0
    ? members.filter((m) => !m.isFounder).map(toTeamMember)
    : fallbackTeam;
```

Delete the old static imports' usage — local `founder`/`team` constants now shadow nothing; ensure no duplicate declarations remain.

- [ ] **Step 2: Verify**

Run: `npm run dev`. Load `/team`:
- With network: Sanity data renders (identical content, images now from CDN).
- DevTools → Network → block `*.sanity.io` → reload: fallback content renders, console shows `[sanity] fetch failed`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Team.tsx
git commit -m "feat(cms): Team page reads from Sanity with local fallback"
```

### Task 3: Migrate Publications page

**Files:**
- Modify: `src/pages/Publications.tsx`

- [ ] **Step 1: Wire query**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { PUBLICATIONS_QUERY, type SanityPublication } from '@/lib/sanity/queries';
import { publications as fallbackPublications } from '../data/publications';
```

Inside component:

```tsx
const { data: publications } = useSanityQuery<SanityPublication[]>(
  PUBLICATIONS_QUERY,
  {},
  fallbackPublications
);
```

Replace `const isLinked = index < 9;` with:

```tsx
const isLinked = pub.href !== '#';
```

(The old index-based check only worked because the array was hand-ordered; with client-managed ordering, `#` is the explicit "no link" marker. Seed data preserves `#` on the same 5 entries, so rendering is unchanged.)

Delete the old `const publications = [...]` literal and old `Publication` interface (now imported from data file in plan 02 — keep that import).

- [ ] **Step 2: Verify** — `/publications` renders; 9 linked cards, 5 plain; block network → fallback.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Publications.tsx
git commit -m "feat(cms): Publications page reads from Sanity with local fallback"
```

### Task 4: Migrate Conferences page

**Files:**
- Modify: `src/pages/Conferences.tsx`

- [ ] **Step 1: Wire query**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { CONFERENCES_QUERY, type SanityConference } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { conferences as fallbackConferences } from '../data/conferences';
```

Inside component:

```tsx
const { data: rawConferences } = useSanityQuery<SanityConference[]>(
  CONFERENCES_QUERY,
  {},
  []
);

const conferences =
  rawConferences.length > 0
    ? rawConferences.map((c) => ({
        ...c,
        image: imgUrl(c.image, 1200),
        images: c.images?.map((img) => imgUrl(img, 1200) ?? ''),
      }))
    : fallbackConferences;
```

Remove old static array + interfaces (imported from `../data/conferences` since plan 02).

- [ ] **Step 2: Verify** — `/conferences` renders all 12 entries, alternating layout intact, images from CDN; block network → fallback.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Conferences.tsx
git commit -m "feat(cms): Conferences page reads from Sanity with local fallback"
```

### Task 5: Migrate Projects list

**Files:**
- Modify: `src/sections/projects/ProjectsList.tsx`

- [ ] **Step 1: Wire query**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { PROJECTS_QUERY, type SanityProject } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { cardSections as fallbackSections } from '../../data/projects';
```

Inside component (before render):

```tsx
const { data: rawProjects } = useSanityQuery<SanityProject[]>(PROJECTS_QUERY, {}, []);

const cardSections =
  rawProjects.length > 0
    ? ['Courses & Curricula', 'Workshops', 'Research, Evaluation, & Knowledge Products']
        .map((sectionTitle) => ({
          title: sectionTitle,
          projects: rawProjects
            .filter((p) => p.section === sectionTitle)
            .map((p) => ({
              client: p.client,
              title: p.title,
              description: p.description,
              image: imgUrl(p.image, 1200),
              imageAlt: p.imageAlt,
              actions: p.actions,
            })),
        }))
        .filter((s) => s.projects.length > 0)
    : fallbackSections;
```

Remove old static `cardSections` + interfaces.

- [ ] **Step 2: Verify** — `/projects` shows 3 sections, 16 cards total, images from CDN; block network → fallback.

- [ ] **Step 3: Commit**

```bash
git add src/sections/projects/ProjectsList.tsx
git commit -m "feat(cms): Projects list reads from Sanity with local fallback"
```

### Task 6: Migrate home Testimonials

**Files:**
- Modify: `src/sections/home/TestimonialsSection.tsx`

- [ ] **Step 1: Wire query**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { TESTIMONIALS_QUERY, type SanityTestimonial } from '@/lib/sanity/queries';
import { defaultTestimonials } from '../../data/testimonials';
```

Inside component, replace `const testimonials = items ?? defaultTestimonials;` with:

```tsx
const { data: fetched } = useSanityQuery<SanityTestimonial[]>(TESTIMONIALS_QUERY, {}, []);
const testimonials = items ?? (fetched.length > 0 ? fetched : defaultTestimonials);
```

(Explicit `items` prop still wins — Advisory/Research pages pass their own.)

- [ ] **Step 2: Verify** — `/` testimonials carousel renders Sanity items; block network → defaults.

- [ ] **Step 3: Commit**

```bash
git add src/sections/home/TestimonialsSection.tsx
git commit -m "feat(cms): Testimonials section reads from Sanity with local fallback"
```

### Task 7: Close out

- [ ] **Step 1: Full QA matrix**

| Check | Expected |
|---|---|
| `npm run build` | passes |
| `/team`, `/publications`, `/conferences`, `/projects`, `/` | render from Sanity |
| Network blocked (Sanity domain) | fallback content, no crash |
| In Studio: reorder team members → publish | order changes on site within seconds (hard refresh) |
| In Studio: unpublish one publication | it disappears from site |

- [ ] **Step 2: Update tracker** — mark plan 03 ✅, commit plan docs.
