import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().positive(),
    category: z.enum(['setup', 'reference']),
    duration: z.string(),
    reviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    status: z.literal('proposed'),
    sources: z.array(z.object({ title: z.string(), url: z.url() })).min(1),
  }),
});

export const collections = { guides };
