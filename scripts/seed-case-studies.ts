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
  console.log(`  ↑ uploaded ${rel} -> ${asset._id}`);
  return asset._id;
}

async function imageField(localPath?: string, alt?: string, caption?: string, layout?: string) {
  if (!localPath) return undefined;
  const ref = await uploadImage(localPath);
  if (!ref) return undefined;
  const obj: any = {
    _type: 'image',
    asset: { _type: 'reference', _ref: ref },
  };
  if (alt) obj.alt = alt;
  if (caption) obj.caption = caption;
  if (layout) obj.layout = layout;
  return obj;
}

async function main() {
  console.log('--- Syncing Case Studies & Images to Sanity ---');

  // Fetch existing caseStudy docs so we don't accidentally overwrite custom user changes if present
  const existingStudies = await client.fetch<any[]>(`*[_type == "caseStudy"] {
    _id,
    heroImage,
    heroImageAlt,
    sections
  }`);
  const existingMap = new Map<string, any>(existingStudies.map((s) => [s._id, s]));

  const createdCaseStudies = new Map<string, string>();

  // 1. Create or update caseStudy documents
  for (let i = 0; i < caseStudies.length; i++) {
    const cs = caseStudies[i];
    const docId = `caseStudy-${cs.slug}`;
    const existing = existingMap.get(docId);

    // Hero image: preserve existing Sanity asset if present, otherwise upload
    let heroImage = existing?.heroImage;
    if (!heroImage?.asset?._ref) {
      heroImage = await imageField(cs.heroImage, cs.heroImageAlt);
    }

    // Sections: build sections with images, preserving existing user image assets if present
    const sections = await Promise.all(
      cs.sections.map(async (s, sIdx) => {
        const existingSec = existing?.sections?.[sIdx];

        // Single image
        let image = undefined;
        if (existingSec?.image?.asset?._ref) {
          image = existingSec.image;
        } else if (s.image?.src) {
          image = await imageField(s.image.src, s.image.alt, s.image.caption, s.image.layout || 'full');
        }

        // Multiple images / collage
        let images = undefined;
        if (existingSec?.images && existingSec.images.length > 0) {
          images = existingSec.images;
        } else if (s.images && s.images.length > 0) {
          const uploaded = await Promise.all(
            s.images.map(async (img, imgIdx) => {
              const f = await imageField(img.src, img.alt, img.caption, img.layout || 'phone');
              return f ? { _key: `img${imgIdx}`, ...f } : undefined;
            })
          );
          images = uploaded.filter(Boolean);
        }

        return {
          _key: existingSec?._key || `sec${sIdx}`,
          heading: existingSec?.heading ?? s.heading,
          level: existingSec?.level ?? s.level ?? 2,
          paragraphs: existingSec?.paragraphs ?? s.paragraphs,
          callout: existingSec?.callout ?? s.callout,
          list: existingSec?.list ?? s.list,
          numberedList: existingSec?.numberedList ?? s.numberedList,
          gridItems: (existingSec?.gridItems ?? s.gridItems)?.map((g: any, gIdx: number) => ({
            _key: g._key || `g${gIdx}`,
            title: g.title,
            description: g.description,
          })),
          image,
          images: images && images.length > 0 ? images : undefined,
          imagesCaption: existingSec?.imagesCaption ?? s.imagesCaption,
        };
      })
    );

    const doc = {
      _id: docId,
      _type: 'caseStudy',
      slug: { _type: 'slug', current: cs.slug },
      client: existing?.client ?? cs.client,
      title: existing?.title ?? cs.title,
      subtitle: existing?.subtitle ?? cs.subtitle,
      category: existing?.category ?? cs.category,
      heroImage,
      heroImageAlt: existing?.heroImageAlt ?? cs.heroImageAlt,
      nutshell: (existing?.nutshell ?? cs.nutshell).map((n: any, idx: number) => ({
        _key: n._key || `n${idx}`,
        label: n.label,
        value: n.value,
      })),
      intro: existing?.intro ?? cs.intro,
      challengeCallout: existing?.challengeCallout ?? cs.challengeCallout,
      sections,
      curriculumStructure: (existing?.curriculumStructure ?? cs.curriculumStructure)
        ? {
            title: (existing?.curriculumStructure ?? cs.curriculumStructure).title,
            description: (existing?.curriculumStructure ?? cs.curriculumStructure).description,
            themes: (existing?.curriculumStructure ?? cs.curriculumStructure).themes?.map(
              (th: any, thIdx: number) => ({
                _key: th._key || `th${thIdx}`,
                theme: th.theme,
                courses: th.courses,
              })
            ),
            stages: (existing?.curriculumStructure ?? cs.curriculumStructure).stages?.map(
              (st: any, stIdx: number) => ({
                _key: st._key || `st${stIdx}`,
                stage: st.stage,
                title: st.title,
                description: st.description,
              })
            ),
          }
        : undefined,
      quote: existing?.quote ?? cs.quote,
      impactStats: (existing?.impactStats ?? cs.impactStats)?.map((st: any, stIdx: number) => ({
        _key: st._key || `is${stIdx}`,
        value: st.value,
        label: st.label,
        subtext: st.subtext,
      })),
      lessonsLearned: (existing?.lessonsLearned ?? cs.lessonsLearned)?.map(
        (les: any, lIdx: number) => ({
          _key: les._key || `ll${lIdx}`,
          number: les.number,
          text: les.text,
        })
      ),
      actions: (existing?.actions ?? cs.actions)?.map((act: any, actIdx: number) => ({
        _key: act._key || `act${actIdx}`,
        label: act.label,
        href: act.href,
        variant: act.variant,
      })),
      orderRank: existing?.orderRank ?? `a${String(i).padStart(4, '0')}`,
    };

    await client.createOrReplace(doc);
    createdCaseStudies.set(cs.client, docId);
    console.log(`✓ synced caseStudy: ${cs.client} (${cs.slug})`);
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
      currentActions = currentActions.filter(
        (a) => !a.label?.toLowerCase().includes('case study')
      );

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

  console.log('\nSync to Sanity complete! All projects and case studies are populated with images and linked.');
}

main().catch((err) => {
  console.error('Error during Sanity sync:', err);
  process.exit(1);
});
