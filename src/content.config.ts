import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/posts/", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const update = defineCollection({
  loader: glob({ base: "./src/updates/", pattern: "*.{md,mdx}" }),
  schema: z.object({
    publishDate: z.coerce.date(),
  }),
});

export const collections = { blog, update };
