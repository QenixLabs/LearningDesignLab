# Sanity CMS Implementation Tracker

**Spec:** `docs/superpowers/specs/2026-09-06-sanity-cms-design.md`
**Created:** 2026-09-06

## Sub-plans

| # | Plan | File | Depends on | Status |
|---|------|------|-----------|--------|
| 01 | Sanity scaffold + schemas + embedded Studio | `2026-09-06-sanity-cms-01-scaffold-studio.md` | — | ✅ Complete |
| 02 | Data extraction + query layer + seed | `2026-09-06-sanity-cms-02-query-layer-seed.md` | 01 | ✅ Complete |
| 03 | Collections migration (Team, Publications, Conferences, Projects) | `2026-09-06-sanity-cms-03-collections-migration.md` | 02 | ✅ Complete |
| 04 | Singletons migration (Home, Services, site settings, page copy) | `2026-09-06-sanity-cms-04-singletons-migration.md` | 02 (03 recommended) | ⬜ Not started |
| 05 | Client handoff (deploy env, CORS, editor invite, guide) | `2026-09-06-sanity-cms-05-client-handoff.md` | 03 + 04 | ⬜ Not started |

## Rules

- Each plan ends in a working, buildable site. Fallbacks stay in place until plan 05.
- Run plans in order. Do not start 03/04 until 02's seed has been verified in Studio.
- After each plan: `npm run build` must pass and the plan's checkbox steps all ticked.
- Update this tracker's Status column as plans complete.

## Shared decisions (from spec)

- Sanity free tier, dataset `production`, runtime fetch via CDN (`useCdn: true`).
- Studio embedded lazy at `/studio` route in this repo.
- Images flow through `imgUrl()` helper (`@sanity/image-url`, hotspot-aware). Fallback images stay as local string paths.
- Ordering via `orderRank` + `@sanity/orderable-document-list` drag handles.
- No test infra — gate is `tsc -b && vite build` + manual QA matrix per plan.
