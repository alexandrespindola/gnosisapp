// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      // Site metadata
      title: "GNOSIS",

      // Visual settings
      logo: {
        src: "./src/img/favicon.png",
      },
      favicon: "/img/favicon.png",
      customCss: [
        "@fontsource/lato/400.css",
        "@fontsource/lato/700.css",
        "./src/styles/css/tailwind.css",
        "./src/styles/css/base.css",
        "./src/styles/css/custom.css",
      ],
      // i18n
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

      // Components
      components: {
        Header: "./src/components/Header.astro",
      },

      // Social links
      social: {
        github: "https://github.com/withastro/starlight",
      },

      // Sidebar links
      sidebar: [
        {
          label: "Libros",
          slug: "",
          translations: {
            de: "Bücher",
            en: "Books",
            fr: "Livres",
            it: "Libri",
            nl: "Boeken",
            pt: "Livros",
          },
        },
        {
          label: "Educación Fundamental",
          collapsed: true,
          translations: {
            de: "Grundbildung",
            en: "Fundamental Education",
            fr: "Éducation Fondamentale",
            it: "Educazione Fondamentale",
            nl: "Fundamenteel Onderwijs",
            pt: "Educação Fundamental",
          },
          autogenerate: { directory: "educacion-fundamental" },
        },
      ],
    }),
    tailwind(),
  ],
});
