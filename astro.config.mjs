// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [starlight({
    title: "Gnosis",
    customCss: [
      './src/tailwind.css',
    ],
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
      /* {
        label: "Psicología Revolucionaria",
        collapsed: true,
        translations: {
          de: "Revolutionäre Psychologie",
          en: "Revolutionary Psychology",
          fr: "Psychologie Révolutionnaire",
          it: "Psicologia Rivoluzionaria",
          nl: "Revolutionaire Psychologie",
          pt: "Psicologia Revolucionária",
        },
        autogenerate: { directory: "educacion-fundamental" },
      }, */
    ],
  }), tailwind()],
});