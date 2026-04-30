import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeComments: true,
          removeAttributeQuotes: true,
        }
      },
      Image: false, // We use Astro's native Image component for better control
      JavaScript: true,
      SVG: true,
    })
  ],
});