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
        da: {
          label: "Dansk",
        },
        de: {
          label: "Deutsch",
        },
        el: {
          label: "Ελληνικά",
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
        hi: {
          label: "हिन्दी",
        },
        it: {
          label: "Italiano",
        },
        ja: {
          label: "日本語",
        },
        ko: {
          label: "한국어",
        },
        nl: {
          label: "Nederlands",
        },
        pt: {
          label: "Português",
        },
        ro: {
          label: "Română",
        },
        ru: {
          label: "Русский",
        },
        sv: {
          label: "Svenska",
        },
        tr: {
          label: "Türkçe",
        },
        zh: {
          label: "中文",
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
            da: "Bøger",
            de: "Bücher",
            el: "Βιβλία",
            en: "Books",
            fr: "Livres",
            hi: "पुस्तकें",
            it: "Libri",
            ja: "本",
            ko: "책",
            nl: "Boeken",
            pt: "Livros",
            ro: "Cărți",
            ru: "Книги",
            sv: "Böcker",
            tr: "Kitaplar",
            zh: "书",
          },
        },
        {
          label: "Educación Fundamental",
          collapsed: true,
          translations: {
            da: "Fundamental Uddannelse",
            de: "Grundbildung",
            en: "Fundamental Education",
            el: "Βασική Εκπαίδευση",
            fr: "Éducation Fondamentale",
            hi: "मौलिक शिक्षा",
            it: "Educazione Fondamentale",
            ja: "基礎教育",
            ko: "기본 교육",
            nl: "Fundamenteel Onderwijs",
            pt: "Educação Fundamental",
            ro: "Educație Fundamentală",
            ru: "Основное образование",
            sv: "Grundutbildning",
            tr: "Temel Eğitim",
            zh: "基础教育",
          },
          autogenerate: { directory: "educacion-fundamental" },
        },
      ],
    }),
    tailwind(),
  ],
});
