import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [mdx(), react(), icon()],
  site: process.env.VERCEL 
    ? 'https://csarch2-virtual-exhibit-ten.vercel.app'
    : 'https://jrgo7.github.io',
  base: process.env.VERCEL ? '/' : 'virtual-exhibit-template',
});