import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;

/**
 * Null when VITE_SANITY_PROJECT_ID is unset (e.g. a deploy missing the env
 * var). Consumers must render local fallback content instead of crashing.
 */
export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset: (import.meta.env.VITE_SANITY_DATASET as string) ?? 'production',
      apiVersion: '2026-01-01',
      useCdn: true,
    })
  : null;
