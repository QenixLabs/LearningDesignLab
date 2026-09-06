# Plan 05 — Client Handoff

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Production deploy serves CMS-backed site, client can log in at `/studio` and edit content, client has a written guide.

**Architecture:** Vercel env vars mirror `.env.local`; production origin added to Sanity CORS; client invited as Sanity `editor`; cheat-sheet guide committed to `docs/`.

**Depends on:** Plans 03 + 04 complete.

---

### Task 1: Production env + CORS

- [ ] **Step 1: Add Vercel env vars**

```bash
npx vercel env add VITE_SANITY_PROJECT_ID production
npx vercel env add VITE_SANITY_DATASET production
```

(Or Vercel dashboard → Project → Settings → Environment Variables.) Values from `.env.local`. `VITE_SANITY_DATASET` = `production`.

**Never** add `SANITY_WRITE_TOKEN` to Vercel — write token stays local-only for seeding.

- [ ] **Step 2: Add production CORS origin**

```bash
npx sanity cors add https://<production-domain>
```

Include the Vercel preview wildcard if client will preview: `npx sanity cors add https://<project>-*.vercel.app` ( Sanity supports wildcard subdomains).

- [ ] **Step 3: Deploy + verify**

```bash
git push origin main
```

Vercel auto-deploys. Verify production `/studio` loads login and public pages render Sanity content.

- [ ] **Step 4: Commit any config changes** (none expected; tracker update covered in Task 4).

### Task 2: Invite client as editor

- [ ] **Step 1: Invite**

`https://manage.sanity.io` → project → Members → Invite member → client email → role **Editor**.

Editor role: can create/edit/publish content; cannot change schemas, tokens, CORS, or billing.

- [ ] **Step 2: Verify client access**

Client opens `https://<production-domain>/studio`, logs in with invited email (Google or email/password), sees "LDLab Content" sidebar. Walk them through editing one team member bio + publish during onboarding call.

### Task 3: Write client guide

**Files:**
- Create: `docs/cms-client-guide.md`

- [ ] **Step 1: Write guide**

```markdown
# Editing the Website — Quick Guide

**Where to log in:** https://<production-domain>/studio
Use the Google account (or email) you were invited with.

## What you can edit

| Sidebar section | What it controls |
|---|---|
| Site Settings | Contact email, LinkedIn link, footer tagline |
| Home Page | Hero headline + paragraph, buttons, stats, "Selected Work" lists |
| Service Pages | The four service pages (title, description, item lists, CTA text) |
| Page Copy | Headings + intro text on Team, Projects, Publications, Conferences pages |
| Team Members | Add/edit/remove/reorder people. "Founder" checkbox = shown on top |
| Projects | Project cards. "Section" picks which group they appear in |
| Publications | Publication entries. Set Link URL to `#` to show without a link |
| Conferences | Talks/conferences with photos, tags, and buttons |
| Testimonials | Quotes shown in the carousel. "Highlight" must be copied exactly from the quote text |

## Publishing

1. Make your edits.
2. Click **Publish** (top right).
3. Changes are live on the website within ~1 minute. Hard-refresh (Ctrl+Shift+R) to see them.

## Reordering

Team Members, Projects, Publications, Conferences, and Testimonials lists have **drag handles** (⋮⋮) on the left — drag to change the order on the site.

## Images

- Click an image field → **Upload**.
- After upload, click the image to adjust the **crop/hotspot** (controls which part shows when the site crops it).
- Always fill the **Alt** field where present (short description of what's in the photo).

## Rules of thumb

- Never delete a document you're unsure about — unpublish instead ( Publish → arrow → Unpublish).
- Keep headings short; long headings break layouts.
- If something looks wrong on the site after publishing, tell the developer — old content can be restored from document history (clock icon in the editor).

## Need help?

Contact: <developer email>
```

- [ ] **Step 2: Commit**

```bash
git add docs/cms-client-guide.md
git commit -m "docs: add client CMS editing guide"
```

### Task 4: Final QA + tracker

- [ ] **Step 1: Production QA matrix**

| Check | Expected |
|---|---|
| All public routes on production | render Sanity content |
| `/studio` on production | login works, client can edit + publish |
| Edit in Studio → publish | live on production within ~1 min |
| Block `*.sanity.io` in DevTools | fallback content, no crash |
| Lighthouse mobile spot check | no regression vs pre-CMS baseline |

- [ ] **Step 2: Update tracker** — mark plan 05 ✅ in `docs/superpowers/plans/2026-09-06-sanity-cms-tracker.md`.

- [ ] **Step 3: Commit**

```bash
git add docs/superpowers/plans
git commit -m "docs: mark Sanity CMS implementation complete"
```
