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
        ar: {
          dir: "rtl",
          label: "🇸🇦 العربية",
        },
        ca: {
          label: "Català",
        },
        cs: {
          label: "🇨🇿 Čeština",
        },
        da: {
          label: "🇩🇰 Dansk",
        },
        de: {
          label: "🇩🇪 Deutsch",
        },
        el: {
          label: "🇬🇷 Ελληνικά",
        },
        en: {
          label: "🇬🇧 English",
        },
        root: {
          label: "🇪🇸 Español",
          lang: "es",
        },
        fa: {
          dir: "rtl",
          label: "🇮🇷 فارسی",
        },
        fr: {
          label: "🇫🇷 Français",
        },
        he: {
          dir: "rtl",
          label: "🇮🇱 עברית",
        },
        hi: {
          label: "🇮🇳 हिन्दी",
        },
        id: {
          label: "🇮🇩 Indonesia",
        },
        it: {
          label: "🇮🇹 Italiano",
        },
        ja: {
          label: "🇯🇵 日本語",
        },
        ko: {
          label: "🇰🇷 한국어",
        },
        nb: {
          label: "🇳🇴 Norsk Bokmål",
        },
        nl: {
          label: "🇳🇱 Nederlands",
        },
        pl: {
          label: "🇵🇱 Polski",
        },
        pt: {
          label: "🇵🇹 Português",
        },
        ro: {
          label: "🇷🇴 Română",
        },
        ru: {
          label: "🇷🇺 Русский",
        },
        sk: {
          label: "🇸🇰 Slovenčina",
        },
        sv: {
          label: "🇸🇪 Svenska",
        },
        tr: {
          label: "🇹🇷 Türkçe",
        },
        uk: {
          label: "🇺🇦 Українська",
        },
        vi: {
          label: "🇻🇳 Tiếng Việt",
        },
        zh: {
          label: "🇨🇳 中文",
        },
      },

      // Components
      components: {
        Footer: "./src/components/override/Footer.astro",
        Header: "./src/components/override/Header.astro",
        TableOfContents: "./src/components/override/TableOfContents.astro",
      },

      // Social links
      social: {
      },

      // Sidebar links
      sidebar: [
        {
          label: "Libros",
          slug: "",
          translations: {
            ar: "كتب",
            ca: "Llibres",
            cs: "Knihy",
            da: "Bøger",
            de: "Bücher",
            el: "Βιβλία",
            en: "Books",
            fa: "کتاب‌ها",
            fr: "Livres",
            he: "ספרים",
            hi: "पुस्तकें",
            id: "Buku",
            it: "Libri",
            ja: "本",
            ko: "책",
            nb: "Bøker",
            nl: "Boeken",
            pl: "Książki",
            pt: "Livros",
            ro: "Cărți",
            ru: "Книги",
            sk: "Knihy",
            sv: "Böcker",
            tr: "Kitaplar",
            uk: "Книги",
            vi: "Sách",
            zh: "书",
          },
        },
        {
          label: "Educación Fundamental",
          collapsed: true,
          translations: {
            ar: "التعليم الأساسي",
            ca: "Educació Bàsica",
            cs: "Základní Vzdělávání",
            da: "Fundamental Uddannelse",
            de: "Grundbildung",
            el: "Βασική Εκπαίδευση",
            en: "Fundamental Education",
            fa: "آموزش ابتدایی",
            fr: "Éducation Fondamentale",
            he: "חינוך בסיסי",
            hi: "मौलिक शिक्षा",
            id: "Pendidikan Dasar",
            it: "Educazione Fondamentale",
            ja: "基礎教育",
            ko: "기본 교육",
            nb: "Grunnleggende Utdanning",
            nl: "Fundamenteel Onderwijs",
            pl: "Edukacja Podstawowa",
            pt: "Educação Fundamental",
            ro: "Educație Fundamentală",
            ru: "Основное образование",
            sk: "Základné Vzdelávanie",
            sv: "Grundutbildning",
            tr: "Temel Eğitim",
            uk: "Фундаментальна Освіта",
            vi: "Giáo Dục Cơ Bản",
            zh: "基础教育",
          },
          autogenerate: { directory: "educacion-fundamental" },
        },
      ],
    }),
    tailwind(),
  ],
});
