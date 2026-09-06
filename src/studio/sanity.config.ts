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
