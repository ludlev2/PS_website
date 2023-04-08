import { defineConfig } from 'astro/config';
import Unfonts from 'unplugin-fonts/astro';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [Unfonts({
    google: {
      families: ['Cabin', {
        name: 'Open Sans',
        styles: 'wght@300;400'
      }]
    }
  }), image()]
});