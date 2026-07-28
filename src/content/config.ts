import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// The CMS list widget writes `{ items: [...] }` without stable ids, so index them here.
const itemsParser = (text: string) =>
  JSON.parse(text).items.map((item: Record<string, unknown>, index: number) => ({
    id: String(index),
    ...item,
  }));

const speakers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/speakers' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    organisation: z.string(),
    photo: z.string().optional(),
    talkTitle: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
  }),
});

const faq = defineCollection({
  loader: file('src/content/faq/faq.json', { parser: itemsParser }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

const agenda = defineCollection({
  loader: file('src/content/agenda/agenda.json', { parser: itemsParser }),
  schema: z.object({
    time: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const homeFaq = defineCollection({
  loader: file('src/content/home-faq/faq.json', { parser: itemsParser }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = { speakers, faq, agenda, homeFaq };
