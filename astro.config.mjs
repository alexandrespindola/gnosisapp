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
        af: {
          label: "🇿🇦 Afrikaans",
        },
        am: {
          label: "🇪🇹 Amharic",
        },
        ar: {
          dir: "rtl",
          label: "🇸🇦 العربية",
        },
        as: {
          label: "🇮🇳 Assamese",
        },
        az: {
          label: "🇦🇿 Azerbaijani",
        },
        be: {
          label: "🇧🇾 Belarusian",
        },
        bg: {
          label: "🇧🇬 Bulgarian",
        },
        bm: {
          label: "🇲🇱 Bambara",
        },
        bo: {
          label: "🇨🇳 Tibetan",
        },
        br: {
          label: "🇫🇷 Breton",
        },
        brx: {
          label: "🇮🇳 Bodo",
        },
        bs: {
          label: "🇧🇦 Bosnian",
        },
        ca: {
          label: "Català",
        },
        cgg: {
          label: "🇺🇬 Chiga",
        },
        cs: {
          label: "🇨🇿 Čeština",
        },
        cy: {
          label: "🇬🇧 Welsh",
        },
        da: {
          label: "🇩🇰 Dansk",
        },
        de: {
          label: "🇩🇪 Deutsch",
        },
        dje: {
          label: "🇳🇪 Zarma",
        },
        dv: {
          dir: "rtl",
          label: "🇲🇻 Dhivehi",
        },
        el: {
          label: "🇬🇷 Ελληνικά",
        },
        en: {
          label: "🇬🇧 English",
        },
        eo: {
          label: "🌍 Esperanto",
        },
        root: {
          label: "🇪🇸 Español",
          lang: "es",
        },
        et: {
          label: "🇪🇪 Estonian",
        },
        eu: {
          label: "🇪🇺 Basque",
        },
        fa: {
          dir: "rtl",
          label: "🇮🇷 فارسی",
        },
        ff: {
          label: "🇸🇳 Fulah",
        },
        fil: {
          label: "🇵🇭 Filipino",
        },
        fi: {
          label: "🇫🇮 Finnish",
        },
        fr: {
          label: "🇫🇷 Français",
        },
        ga: {
          label: "🇮🇪 Irish",
        },
        gu: {
          label: "🇮🇳 Gujarati",
        },
        ha: {
          label: "🇳🇬 Hausa",
        },
        he: {
          dir: "rtl",
          label: "🇮🇱 עברית",
        },
        hi: {
          label: "🇮🇳 हिन्दी",
        },
        hr: {
          label: "🇭🇷 Croatian",
        },
        hu: {
          label: "🇭🇺 Hungarian",
        },
        hy: {
          label: "🇦🇲 Armenian",
        },
        id: {
          label: "🇮🇩 Indonesia",
        },
        ig: {
          label: "🇳🇬 Igbo",
        },
        is: {
          label: "🇮🇸 Icelandic",
        },
        it: {
          label: "🇮🇹 Italiano",
        },
        ja: {
          label: "🇯🇵 日本語",
        },
        kab: {
          label: "🇩🇿 Kabyle",
        },
        kam: {
          label: "🇰🇪 Kamba",
        },
        ka: {
          label: "🇬🇪 Georgian",
        },
        kea: {
          label: "🇨🇻 Kabuverdianu",
        },
        kk: {
          label: "🇰🇿 Kazakh",
        },
        kln: {
          label: "🇰🇪 Kalenjin",
        },
        km: {
          label: "🇰🇭 Khmer",
        },
        kmr: {
          dir: "rtl",
          label: "🇹🇷 Northern Kurdish",
        },
        kn: {
          label: "🇮🇳 Kannada",
        },
        ko: {
          label: "🇰🇷 한국어",
        },
        kok: {
          label: "🇮🇳 Konkani",
        },
        ky: {
          label: "🇰🇬 Kyrgyz",
        },
        lag: {
          label: "🇹🇿 Langi",
        },
        lao: {
          label: "🇱🇦 Laotian",
        },
        lg: {
          label: "🇺🇬 Ganda",
        },
        ln: {
          label: "🇨🇩 Lingala",
        },
        lt: {
          label: "🇱🇹 Lithuanian",
        },
        lv: {
          label: "🇱🇻 Latvian",
        },
        mk: {
          label: "🇲🇰 Macedonian",
        },
        mg: {
          label: "🇲🇬 Malagasy",
        },
        mer: {
          label: "🇰🇪 Meru",
        },
        ml: {
          label: "🇮🇳 Malayalam",
        },
        mn: {
          label: "🇲🇳 Mongolian",
        },
        mr: {
          label: "🇮🇳 Marathi",
        },
        ms: {
          label: "🇲🇾 Malay",
        },
        mt: {
          label: "🇲🇹 Maltese",
        },
        my: {
          label: "🇲🇲 Burmese",
        },
        nb: {
          label: "🇳🇴 Norsk Bokmål",
        },
        ne: {
          label: "🇳🇵 Nepali",
        },
        nl: {
          label: "🇳🇱 Nederlands",
        },
        nus: {
          label: "🇸🇸 Nuer",
        },
        om: {
          label: "🇪🇹 Oromo",
        },
        or: {
          label: "🇮🇳 Oriya",
        },
        pa: {
          label: "🇮🇳 Punjabi",
        },
        pl: {
          label: "🇵🇱 Polski",
        },
        ps: {
          dir: "rtl",
          label: "🇦🇫 Pashto",
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
        rw: {
          label: "🇷🇼 Kinyarwanda",
        },
        sg: {
          label: "🇨🇫 Sango",
        },
        shi: {
          label: "🇲🇦 Tachelhit",
        },
        si: {
          label: "🇱🇰 Sinhala",
        },
        sk: {
          label: "🇸🇰 Slovenčina",
        },
        sl: {
          label: "🇸🇮 Slovenian",
        },
        sn: {
          label: "🇿🇼 Shona",
        },
        so: {
          label: "🇸🇴 Somali",
        },
        sq: {
          label: "🇦🇱 Albanian",
        },
        sr: {
          label: "🇷🇸 Serbian",
        },
        sv: {
          label: "🇸🇪 Svenska",
        },
        sw: {
          label: "🇹🇿 Swahili",
        },
        swc: {
          label: "🇨🇩 Congo Swahili",
        },
        ta: {
          label: "🇮🇳 Tamil",
        },
        te: {
          label: "🇮🇳 Telugu",
        },
        th: {
          label: "🇹🇭 Thai",
        },
        ti: {
          label: "🇪🇷 Tigrinya",
        },
        tk: {
          label: "🇹🇲 Turkmen",
        },
        tr: {
          label: "🇹🇷 Türkçe",
        },
        uk: {
          label: "🇺🇦 Українська",
        },
        ur: {
          dir: "rtl",
          label: "🇵🇰 Urdu",
        },
        uz: {
          label: "🇺🇿 Uzbek",
        },
        vi: {
          label: "🇻🇳 Tiếng Việt",
        },
        yo: {
          label: "🇳🇬 Yoruba",
        },
        zh: {
          label: "🇨🇳 中文",
        },
        zu: {
          label: "🇿🇦 Zulu",
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
            af: "Boeke",
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
            af: "Fundamentele Onderwys",
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
          autogenerate: { directory: "educacion-fundamental", collapsed: true },
        },
        {
          label: "Tratado de Psicología Revolucionaria",
          collapsed: true,
          translations: {
            af: "Verhandeling oor Revolusionêre Sielkunde",
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
          autogenerate: { directory: "tratado-de-psicologia-revolucionaria", collapsed: true },
        },
      ],
    }),
    tailwind(),
  ],
});
