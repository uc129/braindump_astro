/**
 * /* imports
 *
 * @format
 */

import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://braindumpstudio.vercel.app/',
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.js',
      },
    }),
  ],
  output: 'static',
  // adapter: vercel(),
});
