# Plan 01 — Sanity Scaffold + Schemas + Embedded Studio

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sanity project exists, all schemas defined, Studio mounted at `/studio` and booting locally.

**Architecture:** Studio is a React component from `sanity`, mounted lazy on `/studio/*` inside the existing Vite SPA. Schemas live in `src/studio/schemaTypes/`. Config in `src/studio/sanity.config.ts` reads env vars shared with the public site.

**Tech Stack:** sanity v4, sanity/structure, @sanity/orderable-document-list, Vite, React Router 7.

**Spec:** `docs/superpowers/specs/2026-09-06-sanity-cms-design.md`

---

### Task 1: Create Sanity project + env vars

**Files:**
- Create: `.env.local`
- Modify: `.gitignore` (verify `.env.local` ignored)

- [ ] **Step 1: Login and create project**

```bash
npx sanity login
npx sanity projects create --display-name "LDLab"
```

Expected: output includes a project ID (e.g. `abc123xy`). Copy it.

- [ ] **Step 2: Write `.env.local`**

```bash
VITE_SANITY_PROJECT_ID=<project-id-from-step-1>
VITE_SANITY_DATASET=production
```

- [ ] **Step 3: Verify `.gitignore` covers it**

Run: `grep -q '^\.env' .gitignore && echo OK || echo '.env*' >> .gitignore`
Expected: `OK` or line appended.

- [ ] **Step 4: Add localhost CORS origin**

```bash
npx sanity cors add http://localhost:5173
```

Expected: "Origin added". (Production origin added in plan 05.)

- [ ] **Step 5: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore env files for Sanity credentials"
```

### Task 2: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install**

```bash
npm install sanity @sanity/client @sanity/image-url @sanity/orderable-document-list
npm install -D tsx
```

Expected: installs clean. `sanity` pulls React 19-compatible Studio v4.

- [ ] **Step 2: Verify build still green**

Run: `npm run build`
Expected: `✓ built` with no new errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add Sanity dependencies"
```

### Task 3: Singleton schemas

**Files:**
- Create: `src/studio/schemaTypes/singletons/siteSettings.ts`
- Create: `src/studio/schemaTypes/singletons/homePage.ts`
- Create: `src/studio/schemaTypes/singletons/servicePage.ts`
- Create: `src/studio/schemaTypes/singletons/pageCopy.ts`

- [ ] **Step 1: Write `siteSettings.ts`**

```ts
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
```

- [ ] **Step 2: Write `homePage.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'heroSubtext', title: 'Hero subtext', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary CTA label', type: 'string', initialValue: 'Work With Us' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA label', type: 'string', initialValue: 'Explore Services' }),
    defineField({
      name: 'stats',
      title: 'Hero stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'number', validation: (r) => r.required() }),
          defineField({ name: 'suffix', type: 'string', initialValue: '+' }),
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'label' } },
      }],
      validation: (r) => r.max(5),
    }),
    defineField({ name: 'selectedWorkProjects', title: 'Selected work — Projects', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'selectedWorkScholarships', title: 'Selected work — Scholarships', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'selectedWorkBlogs', title: 'Selected work — Blogs', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'presentations',
      title: 'Selected work — Presentations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'name', media: 'image' } },
      }],
    }),
  ],
});
```

- [ ] **Step 3: Write `servicePage.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceId',
      title: 'Service',
      type: 'string',
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
    defineField({ name: 'number', title: 'Number (e.g. 01)', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'itemsHeading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 3 }),
          defineField({ name: 'text', type: 'string', title: 'Text (short form, used instead of title+description)' }),
        ],
        preview: { select: { title: 'title', subtitle: 'text' } },
      }],
    }),
    defineField({ name: 'approachNote', type: 'text', rows: 2 }),
    defineField({ name: 'outcomeNote', type: 'text', rows: 2 }),
    defineField({ name: 'differentiator', type: 'text', rows: 3 }),
    defineField({ name: 'cta', title: 'CTA label', type: 'string' }),
    defineField({ name: 'dark', title: 'Dark theme', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'title' } },
});
```

- [ ] **Step 4: Write `pageCopy.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const pageCopy = defineType({
  name: 'pageCopy',
  title: 'Page Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Team', value: 'team' },
          { title: 'Projects', value: 'projects' },
          { title: 'Publications', value: 'publications' },
          { title: 'Conferences', value: 'conferences' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', type: 'text', rows: 4 }),
  ],
  preview: { select: { title: 'heading', subtitle: 'pageKey' } },
});
```

- [ ] **Step 5: Commit**

```bash
git add src/studio/schemaTypes/singletons
git commit -m "feat(cms): add singleton schemas (siteSettings, homePage, servicePage, pageCopy)"
```

### Task 4: Collection schemas

**Files:**
- Create: `src/studio/schemaTypes/collections/teamMember.ts`
- Create: `src/studio/schemaTypes/collections/project.ts`
- Create: `src/studio/schemaTypes/collections/publication.ts`
- Create: `src/studio/schemaTypes/collections/conference.ts`
- Create: `src/studio/schemaTypes/collections/testimonial.ts`

- [ ] **Step 1: Write `teamMember.ts`**

```ts
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
```

- [ ] **Step 2: Write `project.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          'Courses & Curricula',
          'Workshops',
          'Research, Evaluation, & Knowledge Products',
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'client', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'imagePosition', title: 'Image position override (Tailwind class)', type: 'string' }),
    defineField({
      name: 'actions',
      title: 'Action buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'href', type: 'string', validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'client', media: 'image' } },
});
```

- [ ] **Step 3: Write `publication.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'citation', title: 'Citation (authors, year)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'venue', type: 'string' }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['Journal Article', 'Conference Paper', 'Report', 'Magazine Article', 'Preprint', 'Edited Periodical'],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'href', title: 'Link URL (use # for no link)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
});
```

- [ ] **Step 4: Write `conference.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const conference = defineType({
  name: 'conference',
  title: 'Conference / Talk',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 5 }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'images',
      title: 'Additional images (stacked; overrides single image when present)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'imageAlt', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'imagePosition', title: 'Image position override (Tailwind class)', type: 'string' }),
    defineField({
      name: 'actions',
      title: 'Action buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'href', type: 'url', validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'title', subtitle: 'year', media: 'image' } },
});
```

- [ ] **Step 5: Write `testimonial.ts`**

```ts
import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'highlight',
      title: 'Highlight phrase (exact substring of quote, rendered highlighted)',
      type: 'string',
    }),
    defineField({ name: 'attribution', title: 'Attribution (name, role, org)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'orderRank', type: 'string', hidden: true }),
  ],
  preview: { select: { title: 'attribution' } },
});
```

- [ ] **Step 6: Commit**

```bash
git add src/studio/schemaTypes/collections
git commit -m "feat(cms): add collection schemas (team, projects, publications, conferences, testimonials)"
```

### Task 5: Schema barrel + desk structure + Studio config

**Files:**
- Create: `src/studio/schemaTypes/index.ts`
- Create: `src/studio/structure.ts`
- Create: `src/studio/sanity.config.ts`

- [ ] **Step 1: Write `schemaTypes/index.ts`**

```ts
import { siteSettings } from './singletons/siteSettings';
import { homePage } from './singletons/homePage';
import { servicePage } from './singletons/servicePage';
import { pageCopy } from './singletons/pageCopy';
import { teamMember } from './collections/teamMember';
import { project } from './collections/project';
import { publication } from './collections/publication';
import { conference } from './collections/conference';
import { testimonial } from './collections/testimonial';

export const schemaTypes = [
  siteSettings,
  homePage,
  servicePage,
  pageCopy,
  teamMember,
  project,
  publication,
  conference,
  testimonial,
];
```

- [ ] **Step 2: Write `structure.ts`**

```ts
import type { StructureResolver } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

const SERVICE_PAGES = [
  { id: 'servicePage-course-development', title: 'Courses & Curriculums' },
  { id: 'servicePage-faculty-enrichment', title: 'Faculty Enrichment' },
  { id: 'servicePage-research-evaluation', title: 'Research & Evaluation' },
  { id: 'servicePage-advisory', title: 'Advisory' },
];

const PAGE_COPY = [
  { id: 'pageCopy-team', title: 'Team page' },
  { id: 'pageCopy-projects', title: 'Projects page' },
  { id: 'pageCopy-publications', title: 'Publications page' },
  { id: 'pageCopy-conferences', title: 'Conferences page' },
];

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('LDLab Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Service Pages')
        .child(
          S.list()
            .title('Service Pages')
            .items(
              SERVICE_PAGES.map((p) =>
                S.listItem()
                  .title(p.title)
                  .child(S.document().schemaType('servicePage').documentId(p.id))
              )
            )
        ),
      S.listItem()
        .title('Page Copy')
        .child(
          S.list()
            .title('Page Copy')
            .items(
              PAGE_COPY.map((p) =>
                S.listItem()
                  .title(p.title)
                  .child(S.document().schemaType('pageCopy').documentId(p.id))
              )
            )
        ),
      S.divider(),
      orderableDocumentListDeskItem({ type: 'teamMember', title: 'Team Members', S, context }),
      orderableDocumentListDeskItem({ type: 'project', title: 'Projects', S, context }),
      orderableDocumentListDeskItem({ type: 'publication', title: 'Publications', S, context }),
      orderableDocumentListDeskItem({ type: 'conference', title: 'Conferences', S, context }),
      orderableDocumentListDeskItem({ type: 'testimonial', title: 'Testimonials', S, context }),
    ]);
```

- [ ] **Step 3: Write `sanity.config.ts`**

```ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  name: 'ldlab',
  title: 'LDLab',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: (import.meta.env.VITE_SANITY_DATASET as string) ?? 'production',
  basePath: '/studio',
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
});
```

- [ ] **Step 4: Commit**

```bash
git add src/studio
git commit -m "feat(cms): wire schemas, desk structure, and Studio config"
```

### Task 6: Mount Studio at `/studio` route

**Files:**
- Create: `src/pages/StudioPage.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write `src/pages/StudioPage.tsx`**

```tsx
import { Studio } from 'sanity';
import config from '../studio/sanity.config';

export default function StudioPage() {
  return (
    <div style={{ height: '100vh' }}>
      <Studio config={config} />
    </div>
  );
}
```

- [ ] **Step 2: Add lazy route in `src/App.tsx`**

Replace whole file content with:

```tsx
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import Team from './pages/Team';
import ServicePage from './pages/ServicePage';
import AdvisoryPage from './pages/AdvisoryPage';
import ResearchEvaluationPage from './pages/ResearchEvaluationPage';

const StudioPage = lazy(() => import('./pages/StudioPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/conferences" element={<Conferences />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Navigate to="/services/course-development" replace />} />
      <Route path="/services/course-development" element={<ServicePage serviceId="course-development" />} />
      <Route path="/services/faculty-enrichment" element={<ServicePage serviceId="faculty-enrichment" />} />
      <Route path="/services/research-evaluation" element={<ResearchEvaluationPage />} />
      <Route path="/services/advisory" element={<AdvisoryPage />} />
      <Route
        path="/studio/*"
        element={
          <Suspense fallback={<div style={{ padding: '2rem' }}>Loading Studio…</div>}>
            <StudioPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
```

- [ ] **Step 3: Verify dev server + Studio boots**

Run: `npm run dev` (background), open `http://localhost:5173/studio`.
Expected: Sanity login screen renders (no blank page, no console errors). Public routes still render.

- [ ] **Step 4: Verify production build + chunk split**

Run: `npm run build`
Expected: `✓ built`. Output lists a separate large chunk for the Studio (e.g. `StudioPage-*.js` ~1 MB) — main bundle roughly unchanged.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/pages/StudioPage.tsx
git commit -m "feat(cms): mount Sanity Studio lazily at /studio"
```

### Task 7: Smoke QA

- [ ] **Step 1: Manual QA**

- `/studio` loads login; after login, sidebar shows Site Settings, Home Page, Service Pages, Page Copy, then 5 collections.
- Home (`/`) renders unchanged.
- Empty dataset → singleton forms open with empty fields; no crash.

- [ ] **Step 2: Update tracker**

Mark plan 01 ✅ in `docs/superpowers/plans/2026-09-06-sanity-cms-tracker.md`, commit:

```bash
git add docs/superpowers/plans
git commit -m "docs: mark plan 01 (scaffold + studio) complete"
```
