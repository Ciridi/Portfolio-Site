import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const webUrl = z.url({ protocol: /^https?$/ });
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(['current', 'past']),
    year: z.number().int().min(1900).max(2200),
    technologies: z.array(z.string().min(1)).default([]),
    category: z.string().default('Project'),
    role: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().default(''),
    github: webUrl.optional(),
    demo: webUrl.optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});
export const collections = { projects };
