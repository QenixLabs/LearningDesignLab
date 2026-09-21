import { createClient } from '@sanity/client';
import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { caseStudies } from '../src/data/caseStudies';

const scriptDir = import.meta.dirname;

// Load .env or .env.local
for (const fname of ['.env', '.env.local']) {
  const envPath = join(scriptDir, '..', fname);
  if (existsSync(envPath)) {
    const envFile = readFileSync(envPath, 'utf-8');
    for (const rawLine of envFile.split('\n')) {
      const line = rawLine.trim();
      const m = line.match(/^([A-Za-z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
      }
    }
  }
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET ?? 'production',
  apiVersion: '2026-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const assetCache = new Map<string, string>();

async function uploadImage(localPath: string): Promise<string | undefined> {
  const rel = localPath.replace(/^\//, '');
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

async function main() {
  console.log('--- Syncing Case Studies & Project Links to Sanity ---');

  const createdCaseStudies = new Map<string, string>();

  // 1. Create or replace caseStudy documents
  for (let i = 0; i < caseStudies.length; i++) {
    const cs = caseStudies[i];
    const docId = `caseStudy-${cs.slug}`;

    const doc = {
      _id: docId,
      _type: 'caseStudy',
      slug: { _type: 'slug', current: cs.slug },
      client: cs.client,
      title: cs.title,
      subtitle: cs.subtitle,
      category: cs.category,
      heroImage: await imageField(cs.heroImage),
      heroImageAlt: cs.heroImageAlt,
      nutshell: cs.nutshell.map((n, idx) => ({ _key: `n${idx}`, ...n })),
      intro: cs.intro,
      challengeCallout: cs.challengeCallout,
      sections: cs.sections.map((s, sIdx) => ({
        _key: `sec${sIdx}`,
        heading: s.heading,
        level: s.level ?? 2,
        paragraphs: s.paragraphs,
        list: s.list,
        gridItems: s.gridItems?.map((g, gIdx) => ({ _key: `g${gIdx}`, ...g })),
      })),
      curriculumStructure: cs.curriculumStructure
        ? {
            title: cs.curriculumStructure.title,
            description: cs.curriculumStructure.description,
            themes: cs.curriculumStructure.themes?.map((th, thIdx) => ({
              _key: `th${thIdx}`,
              theme: th.theme,
              courses: th.courses,
            })),
            stages: cs.curriculumStructure.stages?.map((st, stIdx) => ({
              _key: `st${stIdx}`,
              stage: st.stage,
              title: st.title,
              description: st.description,
            })),
          }
        : undefined,
      quote: cs.quote,
      impactStats: cs.impactStats?.map((st, stIdx) => ({ _key: `is${stIdx}`, ...st })),
      lessonsLearned: cs.lessonsLearned?.map((les, lIdx) => ({ _key: `ll${lIdx}`, ...les })),
      actions: cs.actions?.map((act, actIdx) => ({ _key: `act${actIdx}`, ...act })),
      orderRank: `a${String(i).padStart(4, '0')}`,
    };

    await client.createOrReplace(doc);
    createdCaseStudies.set(cs.client, docId);
    console.log(`✓ caseStudy: ${cs.client} (${cs.slug})`);
  }

  // 2. Update existing project documents in Sanity to link to these case studies
  console.log('\n--- Updating Project links in Sanity ---');
  const sanityProjects = await client.fetch<Array<{ _id: string; client: string; actions?: any[] }>>(
    `*[_type == "project"] { _id, client, actions }`
  );

  const clientToSlug: Record<string, string> = {
    'UNESCO Myanmar': 'courses-for-community-teachers-in-myanmar',
    'Search for Common Ground': 'multiformat-courses-for-moderators',
    'Patang India': 'gender-awareness-activism-course',
    'GIZ & Swayam': 'ai-data-science-course',
  };

  for (const proj of sanityProjects) {
    const slug = clientToSlug[proj.client];
    if (slug) {
      const caseStudyId = `caseStudy-${slug}`;
      const caseStudyHref = `/projects/${slug}`;

      let currentActions = proj.actions || [];
      // Remove any existing case study button to prevent duplicates
      currentActions = currentActions.filter(
        (a) => !a.label?.toLowerCase().includes('case study')
      );

      // Prepend "Read Case Study"
      const updatedActions = [
        { _key: 'caseStudyBtn', label: 'Read Case Study', href: caseStudyHref },
        ...currentActions,
      ];

      await client
        .patch(proj._id)
        .set({
          caseStudySlug: slug,
          caseStudy: {
            _type: 'reference',
            _ref: caseStudyId,
          },
          actions: updatedActions,
        })
        .commit();

      console.log(`✓ patched project: ${proj.client} -> ${caseStudyHref}`);
    }
  }

  console.log('\nSync to Sanity complete! All projects and case studies are linked.');
}

main().catch((err) => {
  console.error('Error during Sanity sync:', err);
  process.exit(1);
});
