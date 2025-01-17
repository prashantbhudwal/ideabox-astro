// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = { blog };
