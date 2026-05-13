import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const appsCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/apps' }),
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string().optional(),
        banner: image().optional(),
        thumbnail: image(),
        author: z.string(),
        website: z.string().url(),
        collection: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});

const browserCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/browsers' }),
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string(),
        banner: image().optional(),
        thumbnail: image(),
        author: z.string(),
        website: z.string().url(),
        collection: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});

const comCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/communication' }),
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string(),
        banner: image().optional(),
        thumbnail: image(),
        author: z.string(),
        website: z.string().url(),
        collection: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});

const toolsCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
    schema: ({ image }) => z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string(),
        banner: image().optional(),
        thumbnail: image(),
        author: z.string(),
        website: z.string().url(),
        collection: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});

export const collections = {
    'apps': appsCollection,
    'browsers': browserCollection,
    'communication': comCollection,
    'tools': toolsCollection,
};