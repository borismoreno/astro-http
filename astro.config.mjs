// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import awsAmplify from 'astro-aws-amplify';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), vue()],

    adapter: awsAmplify(),
    output: 'server',
});