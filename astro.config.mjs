import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { markdownBase } from './scripts/markdown-base.mjs';

const base = process.env.SITE_BASE || '/';
const origin = process.env.SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  || 'https://seanixreal.github.io';

export default defineConfig({
  site: origin,
  base,
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      shikiConfig: { theme: 'github-dark' },
      rehypePlugins: [[markdownBase, { base }]],
    }),
  },
  devToolbar: { enabled: false },
});
