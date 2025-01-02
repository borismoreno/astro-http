// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import awsAmplify from 'astro-aws-amplify';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), db()],

    adapter: awsAmplify(),
    output: 'server',
});