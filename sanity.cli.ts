import { readFileSync } from 'node:fs';
import { defineCliConfig } from 'sanity/cli';

// The Sanity CLI does not auto-load .env.local (the seed script hand-parses it);
// mirror that here so CLI commands work with the same local env file.
try {
  const env = readFileSync('.env.local', 'utf8');
  for (const line of env.split('\n')) {
    const m = line.match(/^([A-Z_]+)=["']?(.*?)["']?$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch {
  // no .env.local — rely on process env
}

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID!,
    dataset: process.env.VITE_SANITY_DATASET ?? 'production',
  },
});
