# Sanity CMS for LDLab Landing Page — Design

**Date:** 2026-09-06
**Status:** Approved (design phase)
**Goal:** Hand client a CMS to manage landing page content — edit existing copy, manage collections (projects, team, publications, conferences, testimonials), and upload/swap images — without developer involvement.

## Context

- Vite + React 19 + TypeScript SPA, Tailwind v3, shadcn-style components
- Content currently hardcoded in `src/data/` and `src/sections/`
- Deployed on Vercel, no backend
- Pages: Home, Projects, Team, Publications, Conferences, Service pages (Advisory, Research & Evaluation, etc.)

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| CMS backend | Sanity (hosted, free tier) | 3 users, 20k documents, image CDN; best editing UX for non-technical client |
| Studio placement | Embedded at `/studio` in this repo | One repo, one deploy; client edits at `yoursite.com/studio`; Studio is React, lazy-loaded chunk |
| Content delivery | Runtime fetch via Sanity CDN | Publish live in seconds; no Vercel rebuilds or webhook plumbing |
| Content modeling | Singletons + collections | Maps 1:1 to existing data files; no page-builder (YAGNI) |
| Resilience | Hardcoded fallback per section | Site renders even if Sanity unreachable; enables incremental migration |

## Architecture

```
┌─ Vite SPA (Vercel) ─────────────────────────┐
│  Public routes (/, /projects, /team, ...)   │
│    → useSanityQuery hook                    │
│    → @sanity/client (CDN, runtime fetch)    │
│    → fallback: current hardcoded copy       │
│  /studio route (lazy chunk)                 │
│    → Sanity Studio embedded                 │
│    → auth: Sanity login (client invited)    │
└──────────────────────────────────────────────┘
              │ HTTPS
┌─ Sanity Cloud (free tier) ──────────────────┐
│  Dataset: production                        │
│  Singletons: siteSettings, homePage,        │
│    servicePage × N, page-level copy docs    │
│  Collections: project, teamMember,          │
│    publication, conference, testimonial     │
│  Image pipeline (hotspot, CDN resize)       │
└──────────────────────────────────────────────┘
```

- One repo, one deploy. Studio code lives in `src/studio/` (schemas + config), mounted lazy at `/studio`. Studio chunk (~1 MB) code-split so public bundle unaffected.
- Env vars `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` shared by site and Studio, set in Vercel env + `.env.local`.
- Auth: client invited to Sanity project as `editor`; login at `/studio` with Google/email. No custom auth code.

## Content Model

### Singletons (one document each, edited as forms)

| Document | Fields |
|---|---|
| `siteSettings` | logo, contact email, phone, social links, footer text |
| `homePage` | hero (heading, sub, CTA), about blurb, stats list, featured section copy |
| `servicePage` × N | one per service — title, intro, items list, notes, CTA |
| `teamPage`, `projectsPage`, `publicationsPage`, `conferencesPage` | page-level copy (titles, intros) |

### Collections (client adds/removes/reorders)

| Type | Fields |
|---|---|
| `project` | title, slug, description (Portable Text), image, tags, link, course URL, order |
| `teamMember` | name, role, bio, photo (hotspot), LinkedIn URL, order |
| `publication` | citation, title, venue, type, link |
| `conference` | title, date, location, description, link |
| `testimonial` | quote, name, role, org, photo |

- Rich text: plain text fields throughout — current UI renders plain paragraphs; Portable Text is YAGNI here. Revisit only if client asks for in-paragraph links/bold.
- Media: Sanity `image` type with hotspot/crop; frontend renders via `@sanity/image-url` with width/quality params (auto WebP, CDN resize).
- Ordering: `order` field + `@sanity/orderable-document-list` drag handles for projects/team.
- Studio desk structure: sidebar groups "Site Settings", "Pages" (singletons), "Content" (collections).

## Frontend Integration

Query layer in `src/lib/sanity/`:

- `client.ts` — configured `@sanity/client` (`useCdn: true`, pinned `apiVersion`)
- `queries.ts` — GROQ per document/collection; projections shaped to match existing TS types
- `useSanityQuery<T>(query, params, fallback)` — fetch + loading/error state; returns fallback on error

Migration pattern per section (incremental, independently shippable):

```tsx
const { data } = useSanityQuery(TEAM_QUERY, {}, fallbackTeam)
<TeamSection members={data} />
```

- Section components unchanged — only data source swaps.
- Images: `urlFor(image).width(800).auto('format').url()` helper; existing `<img>` tags swap `src` only.
- Portable Text: not used (plain text fields); `@portabletext/react` omitted from deps.
- Loading UX: sections render fallback copy immediately, swap when fetch resolves — no spinners on public site; first paint always complete.

## Error Handling

**Public site:**
- Sanity API down/timeout → hook returns fallback content; site never breaks.
- Malformed/missing fields → GROQ projections use `coalesce`/`select` defaults.
- Draft/unpublished docs → CDN serves published only.

**Studio:**
- Validation rules on required fields (title, image alt) block publish with inline errors.
- Client role = `editor`: content only, no schema/project settings.

**Config:**
- No tokens client-side — public read-only dataset, no secrets.
- Site origin added to Sanity project CORS allowed origins.

**Seed:**
- One-time `scripts/seed-sanity.ts` pushes current hardcoded content into Sanity as initial documents. Fallback layer kept permanently as safety net.

## Testing & Rollout

- No existing test infra — scope proportionate.
- Schema check: `sanity schema extract` + Studio boots clean.
- Manual QA matrix: every page against Sanity-backed content; network killed → fallback renders; empty collection → section hides gracefully.
- Gate: `tsc -b && vite build` passes; Studio chunk code-split verified (public bundle size unchanged).

### Phases

1. Scaffold Sanity project + schemas + Studio at `/studio` (public site unchanged)
2. Seed script pushes current content; verify in Studio
3. Migrate sections to `useSanityQuery` one by one, fallbacks intact
4. Client onboarding: editor invite, 30-min walkthrough, one-page cheat sheet
5. Monitor first week

### Cost

Sanity free tier covers this (3 users, 20k docs, ample bandwidth). $0 ongoing.
