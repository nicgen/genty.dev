import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    tech: z.array(z.object({
      name: z.string(),
      icon: z.string(),
    })),
    images: z.array(z.string()),
    links: z.array(z.object({
      type: z.string(),
      url: z.string(),
      icon: z.string(),
    })),
    category: z.string(),
    status: z.string(),
  })
});

const user = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    profession: z.string(),
    bio: z.string(),
    socials: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })),
  })
});

export const collections = {
  'projects': projects,
  'user': user,
};
