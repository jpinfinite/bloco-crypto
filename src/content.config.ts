import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const noticiasCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['REGULAÇÃO', 'SEGURANÇA', 'INFRAESTRUTURA', 'MERCADO']),
    readingTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

const educacaoCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/educacao' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    trilha: z.enum(['01. Fundamentos', '02. Autocustódia', '03. DeFi', '04. Impostos']),
    nivel: z.enum(['Iniciante', 'Intermediário', 'Avançado']),
    readingTime: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = {
  noticias: noticiasCollection,
  educacao: educacaoCollection,
};
