import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['open-source', 'aprendizado', 'projeto', 'infra', 'nota']),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    contribution: z.string().optional(),
    learnings: z.string().optional(),
    stack: z.array(z.string()),
    status: z.enum(['ativo', 'pausado', 'arquivado', 'concluido']),
    repoUrl: z.string().url().optional(),
    docsUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    updatedAt: z.coerce.date(),
    currently: z.array(z.string()),
    learning: z.array(z.string()),
    exploring: z.array(z.string()),
  }),
});

export const collections = { changelog, projects, now };
