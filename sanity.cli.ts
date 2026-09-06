import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID ?? 'iqfeaj83',
    dataset: process.env.VITE_SANITY_DATASET ?? 'production',
  },
});
