// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


import node from '@astrojs/node';


// import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  // adapter: awsAmplify(),
  output: 'static',

  adapter: node({
    mode: 'standalone'
  })
});