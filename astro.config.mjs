import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    adapter: cloudflare(),
    output: "server",
    vite: {
        plugins: [tailwindcss()],
    },
});