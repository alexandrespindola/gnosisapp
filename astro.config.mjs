// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      title: "Gnosis",
      defaultLocale: "es",
      locales: {
        de: {
          label: "Deutsch",
        },
        en: {
          label: "English",
        },
        es: {
          label: "Español",
        },
        fr: {
          label: "Français",
        },
        it: {
          label: "Italiano",
        },
        nl: {
          label: "Nederlands",
        },
        pt: {
          label: "Português",
        },
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      /* sidebar: [
				{
					label: 'Libros',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Educación Fundamental', slug: 'books/example' },
					],
				},
			], */
    }),
  ],
});
