import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { markdownBase } from './scripts/markdown-base.mjs';

const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://seanixreal.github.io',
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
