import { defineCollection, z } from "astro:content";

const aboutus = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      subtitle: z.string().optional(),
      description: z.string(),
      image: image(),
      url: z.string().url(),
      featured: z.number().min(1).optional(),
    }),
});

const team = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      image: image(),
      social: z
        .object({
          instagram: z.string().url().optional(),
          linkedin: z.string().url().optional(),
        })
        .optional(),
    }),
});

export const collections = {
  aboutus,
  team,
};
