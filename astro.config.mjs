import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeComments: true,
          removeAttributeQuotes: true,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
