import { z, defineCollection } from "astro:content";

// Define a collection of Apps
const appsCollection = defineCollection({
    type: 'content', 
// Define the schema 
    schema: z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string().optional(),
        banner: z.string().optional(), //Image can be optional
        thumbnail: z.string(),
        author: z.string(),
        website: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});

// Define a collection of Apps
const browserCollection = defineCollection({
    type: 'content', 
// Define the schema 
    schema: z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string(),
        banner: z.string().optional(), //Image can be optional
        thumbnail: z.string(),
        author: z.string(),
        website: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});

// Define a collection of Apps
const toolsCollection = defineCollection({
    type: 'content', 
// Define the schema 
    schema: z.object({
        title: z.string().max(100),
        category: z.array(z.string()),
        summary: z.string(),
        banner: z.string().optional(), //Image can be optional
        thumbnail: z.string(),
        author: z.string(),
        website: z.string().url(),
        country: z.string(),
        rating: z.number(),
        apk: z.string().url().optional(),
        windows: z.string().url().optional(),
        apple: z.string().url().optional(),
    }),
});
// Export

export const collections = {
    'apps': 'appCollection',
    'browsers': 'browserCollection',
    'tools': 'toolsCollection',
};
