// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      prerender: true,

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
        en: {
          label: "🇬🇧 EN - English",
        },
        root: {
          label: "🇪🇸 ES - Español",
          lang: "es",
        },
        pt: {
          label: "🇧🇷 PT - Português Brasileiro",
          lang: "pt",
        }
      },

      // Components
      components: {
        Footer: "./src/components/override/Footer.astro",
        Header: "./src/components/override/Header.astro",
        Sidebar: "./src/components/override/Sidebar.astro",
        TableOfContents: "./src/components/override/TableOfContents.astro",
      },

      // Social links
      social: {},

      // Sidebar links
      sidebar: [
        {
          label: "Libros",
          slug: "",
          translations: {
            en: "Books",
            root: "Libros",
            pt: "Livros"
          },
        },
        {
          label: "Educación Fundamental",
          collapsed: true,
          translations: {
            en: "Fundamental Education",
            root: "Educación Fundamental",
            pt: "Educação Fundamental"
          },
          autogenerate: { directory: "educacion-fundamental", collapsed: true },
        },
        {
          label: "Tratado de Psicología Revolucionaria",
          collapsed: true,
          translations: {
            en: "Treatise on Revolutionary Psychology",
            root: "Tratado de Psicología Revolucionaria",
            pt: "Tratado de Psicologia Revolucionária"
          },
          autogenerate: {
            directory: "tratado-de-psicologia-revolucionaria",
            collapsed: true,
          },
        },
      ],
    }),
    tailwind(),
  ],
});
