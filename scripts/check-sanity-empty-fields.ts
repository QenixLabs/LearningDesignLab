import { createClient } from '@sanity/client';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const scriptDir = import.meta.dirname;

// Load .env
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

function isEmpty(val: any): boolean {
  if (val === undefined || val === null) return true;
  if (typeof val === 'string' && val.trim() === '') return true;
  if (Array.isArray(val) && val.length === 0) return true;
  if (typeof val === 'object' && Object.keys(val).length === 0) return true;
  return false;
}

async function inspect() {
  const docs = await client.fetch<any[]>('*[!(_id in path("_.**"))]');
  console.log(`Total non-system documents found in dataset: ${docs.length}\n`);

  // Group by document type or specific singleton ID
  const schemaMap: Record<string, string[]> = {
    siteSettings: ['contactEmail', 'linkedinUrl', 'footerTagline'],
    homePage: [
      'heroTitle', 'heroSubtext', 'primaryCtaLabel', 'secondaryCtaLabel', 'stats',
      'verticalsHeading', 'verticals',
      'differentiatorsHeading', 'differentiators',
      'selectedWorkHeading', 'selectedWorkProjects', 'selectedWorkScholarships', 'selectedWorkBlogs', 'presentations',
      'contactHeading', 'contactSubtext',
    ],
    'servicePage-course-development': [
      'serviceId', 'number', 'title', 'description', 'cta', 'dark',
      'heroHeading', 'heroSubtext', 'heroCtaLabel', 'heroStats',
      'problemHeading', 'problemText',
      'processHeading', 'processSteps',
      'offeringsHeading', 'offerings',
      'methodologyHeading', 'methodologyFields',
      'sectorsHeading', 'sectors',
      'outcomesHeading', 'outcomes',
      'proofPointsHeading', 'proofPoints',
      'contactHeading',
    ],
    'servicePage-faculty-enrichment': [
      'serviceId', 'number', 'title', 'description', 'cta', 'dark',
      'heroHeading', 'heroSubtext', 'heroCtaLabel', 'heroStats', 'heroFootnote',
      'problemHeading', 'problemParagraphs',
      'workshopsHeading', 'workshops',
      'acceleratorHeading', 'acceleratorMeta', 'acceleratorParagraphs',
      'processHeading', 'processSteps',
      'methodologyHeading', 'methodologyFields',
      'socialProofHeading', 'socialProofPartners',
      'contactHeading',
    ],
    'servicePage-research-evaluation': [
      'serviceId', 'number', 'title', 'description', 'cta', 'dark',
      'heroHeading', 'heroSubtext', 'heroCtaLabel', 'heroStats',
      'problemHeading', 'problemParagraphs',
      'serviceCardsHeading', 'serviceCards',
      'methodologyHeading', 'methodologyFields',
      'exampleProjectsHeading', 'exampleProjects', 'exampleProjectsCtaText', 'exampleProjectsCtaHref',
      'contactHeading',
    ],
    'servicePage-advisory': [
      'serviceId', 'number', 'title', 'description', 'cta', 'dark',
      'heroHeading', 'heroSubtext', 'heroCtaLabel', 'heroStats',
      'problemHeading', 'problemParagraphs',
      'serviceCardsHeading', 'serviceCards',
      'methodologyHeading', 'methodologyFields',
      'exampleProjectsHeading', 'exampleProjects', 'exampleProjectsCtaText', 'exampleProjectsCtaHref',
      'contactHeading',
    ],
    pageCopy: ['pageKey', 'heading', 'intro'],
    teamMember: ['name', 'role', 'bio', 'image', 'imagePosition', 'linkedin', 'isFounder', 'orderRank'],
    project: ['section', 'client', 'title', 'description', 'image', 'imageAlt', 'actions', 'orderRank'],
    publication: ['citation', 'title', 'venue', 'type', 'href', 'orderRank'],
    conference: ['title', 'year', 'location', 'description', 'image', 'imageAlt', 'imagePosition', 'actions', 'tags', 'orderRank'],
    testimonial: ['quote', 'highlight', 'attribution', 'orderRank'],
  };

  const results: { docId: string; type: string; title?: string; emptyFields: string[]; populatedFields: string[] }[] = [];

  for (const doc of docs) {
    const docKey = schemaMap[doc._id] ? doc._id : doc._type;
    const expectedFields = schemaMap[docKey];
    if (!expectedFields) continue;

    const emptyFields: string[] = [];
    const populatedFields: string[] = [];

    for (const field of expectedFields) {
      if (isEmpty(doc[field])) {
        emptyFields.push(field);
      } else {
        populatedFields.push(field);
      }
    }

    results.push({
      docId: doc._id,
      type: doc._type,
      title: doc.title || doc.name || doc.heading || doc.citation || doc._id,
      emptyFields,
      populatedFields,
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

inspect().catch(console.error);
