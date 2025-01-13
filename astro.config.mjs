// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      title: "Gnosis",
      defaultLocale: "root",
      locales: {
        de: {
          label: "Deutsch",
        },
        en: {
          label: "English",
        },
        root: {
          label: "Español",
          lang: "es",
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
    }),
  ],
});
