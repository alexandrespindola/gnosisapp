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
          collapsed: false,
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
        {
          label: "Tratado de Psicología Revolucionaria",
          collapsed: false,
          translations: {
            ar: "معاهدة علم النفس الثوري",
            ca: "Tractat de Psicologia Revolucionària",
            cs: "Pojednání o Revoluční Psychologii",
            da: "Afhandling om Revolutionær Psykologi",
            de: "Abhandlung über Revolutionäre Psychologie",
            el: "Πραγματεία Επαναστατικής Ψυχολογίας",
            en: "Treatise on Revolutionary Psychology",
            fa: "رساله روانشناسی انقلابی",
            fr: "Traité de Psychologie Révolutionnaire",
            he: "מסכת פסיכולוגיה מהפכנית",
            hi: "क्रांतिकारी मनोविज्ञान का ग्रंथ",
            id: "Risalah Psikologi Revolusioner",
            it: "Trattato di Psicologia Rivoluzionaria",
            ja: "革命的心理学論",
            ko: "혁명적 심리학 논문",
            nb: "Avhandling om Revolusjonær Psykologi",
            nl: "Verhandeling over Revolutionaire Psychologie",
            pl: "Traktat o Psychologii Rewolucyjnej",
            pt: "Tratado de Psicologia Revolucionária",
            ro: "Tratat de Psihologie Revoluționară",
            ru: "Трактат о Революционной Психологии",
            sk: "Pojednanie o Revolučnej Psychológii",
            sv: "Avhandling om Revolutionär Psykologi",
            tr: "Devrimci Psikoloji Üzerine İnceleme",
            uk: "Трактат про Революційну Психологію",
            vi: "Luận Văn về Tâm Lý Học Cách Mạng",
            zh: "革命心理学论"
          },
          autogenerate: { directory: "tratado-de-psicologia-revolucionaria" },
        },
      ],
    }),
    tailwind(),
  ],
});
