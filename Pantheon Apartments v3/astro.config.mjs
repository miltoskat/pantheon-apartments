// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

/* GH Pages note:
 * - For a project site (`<user>.github.io/<repo>/`), set `base: '/<repo>/'`.
 * - For a user site or custom domain, leave `base` at default `/`.
 * Set `site` to your final domain (e.g. `https://pantheonapartments.gr`) once known.
 */

export default defineConfig({
  site: 'https://pantheon-apartments.gr',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
