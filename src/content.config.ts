import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // verification status drives the on-page "clearance stamp"
    status: z
      .enum(['confirmed', 'preview', 'datamined', 'speculation'])
      .default('preview'),
    category: z.string(),
    order: z.number().default(99),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { guides };
