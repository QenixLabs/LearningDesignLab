# Plan 04 — Singletons Migration (Home, Services, Site Settings, Page Copy)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Home page copy (hero, selected work), service page content, footer/contact email+LinkedIn, and collection page headers all render from Sanity singletons with local fallbacks.

**Architecture:** Singleton queries added to `src/lib/sanity/queries.ts` (fetch by fixed document ID). Components keep current fallback literals or import from `src/data/`.

**Tech Stack:** GROQ, useSanityQuery, imgUrl.

**Depends on:** Plan 02. Plan 03 recommended first (shared patterns established).

---

### Task 1: Singleton queries

**Files:**
- Modify: `src/lib/sanity/queries.ts`

- [ ] **Step 1: Append to `queries.ts`**

```ts
// ---------- Singletons ----------
export interface SanitySiteSettings {
  contactEmail: string;
  linkedinUrl?: string;
  footerTagline?: string;
}

export const SITE_SETTINGS_QUERY = `
  *[_id == "siteSettings"][0] { contactEmail, linkedinUrl, footerTagline }
`;

export interface SanityHomePage {
  heroTitle: string;
  heroSubtext: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  stats?: { value: number; suffix?: string; label: string }[];
  selectedWorkProjects?: string[];
  selectedWorkScholarships?: string[];
  selectedWorkBlogs?: string[];
  presentations?: { name: string; image?: SanityImageSource }[];
}

export const HOME_PAGE_QUERY = `
  *[_id == "homePage"][0] {
    heroTitle, heroSubtext, primaryCtaLabel, secondaryCtaLabel,
    stats, selectedWorkProjects, selectedWorkScholarships, selectedWorkBlogs,
    presentations
  }
`;

export interface SanityServiceItem {
  title?: string;
  description?: string;
  text?: string;
}

export interface SanityServicePage {
  serviceId: string;
  number?: string;
  title: string;
  description: string;
  items?: SanityServiceItem[];
  itemsHeading?: string;
  approachNote?: string;
  outcomeNote?: string;
  differentiator?: string;
  cta?: string;
  dark?: boolean;
}

export const SERVICE_PAGES_QUERY = `
  *[_type == "servicePage"] {
    serviceId, number, title, description, items, itemsHeading,
    approachNote, outcomeNote, differentiator, cta, dark
  }
`;

export interface SanityPageCopy {
  pageKey: string;
  heading: string;
  intro?: string;
}

export const PAGE_COPY_QUERY = `
  *[_id == $id][0] { pageKey, heading, intro }
`;
```

- [ ] **Step 2: Verify build** — `npm run build` → `✓ built`.

- [ ] **Step 3: Commit**

```bash
git add src/lib/sanity/queries.ts
git commit -m "feat(cms): add singleton GROQ queries"
```

### Task 2: Hero section from `homePage`

**Files:**
- Modify: `src/sections/home/HeroSection.tsx`

- [ ] **Step 1: Wire query**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { HOME_PAGE_QUERY, type SanityHomePage } from '@/lib/sanity/queries';
```

Add fallback constant above component (verbatim current copy):

```tsx
const fallbackHome: SanityHomePage = {
  heroTitle: 'Designing Learning That Works',
  heroSubtext:
    'We are an impact-driven, international learning design firm dedicated to enhancing the effectiveness of skilling, competency development, and educational interventions. We partner with organizations and educational institutions to build evidence-informed, contextually grounded designs that translate learning into real-world outcomes.',
  primaryCtaLabel: 'Work With Us',
  secondaryCtaLabel: 'Explore Services',
  stats: [
    { value: 10, suffix: 'M+', label: 'Learners Impacted' },
    { value: 200, suffix: '+', label: 'Trainings Delivered' },
    { value: 65, suffix: '+', label: 'Digital Courses Built' },
    { value: 20, suffix: '+', label: 'Countries Reached' },
    { value: 25, suffix: '+', label: 'Organizations Partnered' },
  ],
};
```

Inside `HeroSection`:

```tsx
const { data: home } = useSanityQuery<SanityHomePage>(HOME_PAGE_QUERY, {}, fallbackHome);
const stats = home.stats && home.stats.length > 0 ? home.stats : fallbackHome.stats!;
```

Replace JSX literals:
- `Designing Learning That Works` → `{home.heroTitle}`
- subtext paragraph body → `{home.heroSubtext}`
- `<Button text="Work With Us" ...>` → `text={home.primaryCtaLabel ?? 'Work With Us'}`
- `<Button text="Explore Services" ...>` → `text={home.secondaryCtaLabel ?? 'Explore Services'}`
- The 5 `<StatCounter ... />` elements →

```tsx
{stats.map((s) => (
  <StatCounter key={s.label} value={s.value} suffix={s.suffix ?? ''} label={s.label} />
))}
```

- [ ] **Step 2: Verify** — `/` hero unchanged visually; in Studio change heroTitle → publish → hard refresh shows change; block network → fallback.

- [ ] **Step 3: Commit**

```bash
git add src/sections/home/HeroSection.tsx
git commit -m "feat(cms): Hero section reads from Sanity homePage singleton"
```

### Task 3: Selected work section from `homePage`

**Files:**
- Modify: `src/sections/home/SelectedWorkSection.tsx`

- [ ] **Step 1: Wire query**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { HOME_PAGE_QUERY, type SanityHomePage } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
```

Keep existing local arrays (`projects`, `scholarships`, `blogs`, `presentations`) as fallbacks — rename the `presentations` local array type to allow `string` images (it already uses string paths).

Inside `SelectedWorkSection`:

```tsx
const { data: home } = useSanityQuery<SanityHomePage>(HOME_PAGE_QUERY, {}, {} as SanityHomePage);

const projects = home.selectedWorkProjects?.length ? home.selectedWorkProjects : fallbackProjects;
const scholarships = home.selectedWorkScholarships?.length ? home.selectedWorkScholarships : fallbackScholarships;
const blogs = home.selectedWorkBlogs?.length ? home.selectedWorkBlogs : fallbackBlogs;
const presentations = home.presentations?.length
  ? home.presentations.map((p) => ({ name: p.name, image: imgUrl(p.image, 400) ?? '' }))
  : fallbackPresentations;
```

Rename the four existing module-level constants to `fallbackProjects`, `fallbackScholarships`, `fallbackBlogs`, `fallbackPresentations` and delete the inner usages accordingly (they were previously referenced directly in JSX).

- [ ] **Step 2: Verify** — `/` selected work panels render Sanity lists; presentations logos load from CDN; block network → fallback lists.

- [ ] **Step 3: Commit**

```bash
git add src/sections/home/SelectedWorkSection.tsx
git commit -m "feat(cms): Selected work section reads from Sanity homePage singleton"
```

### Task 4: Service pages from `servicePage` docs

**Files:**
- Modify: `src/pages/ServicePage.tsx`
- Modify: `src/sections/home/ServicesSection.tsx`

- [ ] **Step 1: Wire `ServicePage.tsx`**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SERVICE_PAGES_QUERY, type SanityServicePage } from '@/lib/sanity/queries';
import { services as fallbackServices, type ServiceData } from '../data/services';
```

Inside `ServicePage`, replace `const service = services[serviceId];` with:

```tsx
const { data: sanityServices } = useSanityQuery<SanityServicePage[]>(SERVICE_PAGES_QUERY, {}, []);

const service: ServiceData | undefined = (() => {
  const doc = sanityServices.find((s) => s.serviceId === serviceId);
  if (doc) {
    return {
      id: doc.serviceId,
      number: doc.number ?? '',
      title: doc.title,
      description: doc.description,
      items: doc.items ?? [],
      itemsHeading: doc.itemsHeading ?? '',
      approachNote: doc.approachNote,
      outcomeNote: doc.outcomeNote,
      differentiator: doc.differentiator,
      cta: doc.cta ?? '',
      dark: doc.dark,
    };
  }
  return fallbackServices[serviceId];
})();
```

Rest of component unchanged.

- [ ] **Step 2: Wire `ServicesSection.tsx` (home grid)**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SERVICE_PAGES_QUERY, type SanityServicePage } from '@/lib/sanity/queries';
```

Rename existing module `services` array to `fallbackServices` (each entry already has `title`, `description`, `link`). Inside component:

Map over a fixed order so the grid matches current visual order:

```tsx
const { data: sanityServices } = useSanityQuery<SanityServicePage[]>(SERVICE_PAGES_QUERY, {}, []);

const ORDER = ['course-development', 'faculty-enrichment', 'research-evaluation', 'advisory'];
const services = sanityServices.length
  ? ORDER.map((id) => sanityServices.find((s) => s.serviceId === id))
      .filter((s): s is SanityServicePage => Boolean(s))
      .map((s) => ({ title: s.title, description: s.description, link: `/services/${s.serviceId}` }))
  : fallbackServices;
```

- [ ] **Step 3: Verify** — `/services/course-development` and home services grid render Sanity copy; edit a service description in Studio → publish → refreshes live; block network → `services.ts` fallback.

- [ ] **Step 4: Commit**

```bash
git add src/pages/ServicePage.tsx src/sections/home/ServicesSection.tsx
git commit -m "feat(cms): service pages + home services grid read from Sanity"
```

### Task 5: Site settings in Footer + Contact

**Files:**
- Modify: `src/components/Footer.tsx`
- Modify: `src/sections/home/ContactSection.tsx`

- [ ] **Step 1: Wire `Footer.tsx`**

Add imports:

```tsx
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SITE_SETTINGS_QUERY, type SanitySiteSettings } from '@/lib/sanity/queries';
```

Inside `Footer`:

```tsx
const { data: settings } = useSanityQuery<SanitySiteSettings>(SITE_SETTINGS_QUERY, {}, {
  contactEmail: 'shraddha@learningdesignlab.co',
  linkedinUrl: 'https://linkedin.com',
  footerTagline:
    "Researcher's rigour and implementer's realism for organizations that want learning that actually works.",
});
```

Replace:
- `href="mailto:shraddha@learningdesignlab.co"` → `href={\`mailto:\${settings.contactEmail}\`}`
- link text `shraddha@learningdesignlab.co` → `{settings.contactEmail}`
- `href="https://linkedin.com"` → `href={settings.linkedinUrl ?? '#'}`
- Tagline paragraph body → `{settings.footerTagline}` (keep current string as fallback above)

- [ ] **Step 2: Wire `ContactSection.tsx`**

Same imports. Inside component:

```tsx
const { data: settings } = useSanityQuery<SanitySiteSettings>(SITE_SETTINGS_QUERY, {}, {
  contactEmail: 'shraddha@learningdesignlab.co',
});
```

Replace both `mailto:shraddha@learningdesignlab.co` and the visible email text with `{settings.contactEmail}` (href: `mailto:${settings.contactEmail}`).

- [ ] **Step 3: Verify** — footer + contact render email from Sanity; block network → fallback email.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/sections/home/ContactSection.tsx
git commit -m "feat(cms): footer and contact read email/socials from siteSettings"
```

### Task 6: Page copy headers (Publications + Conferences)

**Files:**
- Modify: `src/pages/Publications.tsx`
- Modify: `src/pages/Conferences.tsx`

- [ ] **Step 1: Wire `Publications.tsx`**

Add imports:

```tsx
import { PAGE_COPY_QUERY, type SanityPageCopy } from '@/lib/sanity/queries';
```

Inside component:

```tsx
const { data: copy } = useSanityQuery<SanityPageCopy>(
  PAGE_COPY_QUERY,
  { id: 'pageCopy-publications' },
  {
    pageKey: 'publications',
    heading: 'Our Publications',
    intro:
      'Our publications translate research into practice across digital pedagogy, AI in learning, instructional design, and education for social impact.',
  }
);
```

Replace `<h1 ...>Our Publications</h1>` → `{copy.heading}` and intro paragraph body → `{copy.intro}`.

- [ ] **Step 2: Wire `Conferences.tsx`** — same pattern with `{ id: 'pageCopy-conferences' }` and fallback:

```tsx
{
  pageKey: 'conferences',
  heading: 'Our Work at Conferences',
  intro:
    "We've delivered talks and presentations on a diverse range of topics, including AI in education, Universal Design for Learning (UDL), youth empowerment, and the intersection of cognitive science and learning design.",
}
```

Replace h1 and intro paragraph.

- [ ] **Step 3: Verify** — headings render from Sanity; block network → fallback headings.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Publications.tsx src/pages/Conferences.tsx
git commit -m "feat(cms): publications + conferences headers read from pageCopy"
```

- [ ] **Step 3: Wire Team + Projects headers**

Same pattern in the remaining two pages:

1. Find the current hardcoded page heading/intro — in `src/pages/Team.tsx` (h1 near top of JSX) and in `src/sections/projects/ProjectsList.tsx` (heading markup; `src/pages/Projects.tsx` is a thin wrapper).
2. Copy the current strings verbatim into the fallback object.
3. Add:

```tsx
const { data: copy } = useSanityQuery<SanityPageCopy>(
  PAGE_COPY_QUERY,
  { id: 'pageCopy-team' }, // or 'pageCopy-projects'
  { pageKey: 'team', heading: '<current h1 text>', intro: '<current intro text or undefined>' }
);
```

4. Replace heading/intro JSX with `{copy.heading}` / `{copy.intro}`.
5. If a page has no intro paragraph today, seed it empty (seed script already sets `intro: ''` for team/projects) and render `{copy.intro && <p ...>{copy.intro}</p>}` so client can add one later.

- [ ] **Step 4: Verify** — all 4 collection pages render headings from Sanity; block network → fallback headings.

- [ ] **Step 5: Commit**

```bash
git add src/pages src/sections/projects
git commit -m "feat(cms): team + projects headers read from pageCopy"
```

### Task 7: Close out

- [ ] **Step 1: Full QA matrix**

| Check | Expected |
|---|---|
| `npm run build` | passes; Studio chunk still split |
| Every public route | renders, Sanity-backed where migrated |
| Network blocked | all fallbacks render |
| Studio: edit homePage heroTitle, publish | live on `/` after hard refresh |
| Studio: edit siteSettings email | footer + contact update |

- [ ] **Step 2: Update tracker** — mark plan 04 ✅, commit plan docs.
