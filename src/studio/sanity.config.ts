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
  auth: {
    providers: [
      {
        name: 'sanity',
        title: 'Email / Password',
        url: 'https://api.sanity.io/v1/auth/login/sanity',
      },
    ],
  },
});
