import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'codeflow',
  apiVersion: '2024-01-15',
  useCdn: true, // Set to false if you want fresh data
  token: process.env.SANITY_API_TOKEN_PUBLISH || process.env.SANITY_API_TOKEN, // Use PUBLISH token (Editor role) for write operations
});
