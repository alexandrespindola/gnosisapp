// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import { 
  librosTranslations,
  educacionFundamentalTranslations,
  laGranRebelionTranslations,
  tratadoDePsicologiaRevolucionariaTranslations
} from './sidebar/sidebar-imports.mjs';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://books.gnosisdeutschland.org",
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
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
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://analytics.ahrefs.com/analytics.js',
            'data-key': '9ijdpy3K4PNgLGbzxB0J/g',
            async: true
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/astro_media//gnosis-opengraph.webp',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:width',
            content: '1200',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '630',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        }
      ],
      // i18n
      defaultLocale: "root",
      locales: {
        af: {
          label: "🇿🇦 AF - Afrikaans",
        },
        am: {
          label: "🇪🇹 AM - Amharic",
        },
        ar: {
          dir: "rtl",
          label: "🇸🇦 AR - العربية",
        },
        as: {
          label: "🇮🇳 AS - Assamese",
        },
        az: {
          label: "🇦🇿 AZ - Azerbaijani",
        },
        be: {
          label: "🇧🇾 BE - Belarusian",
        },
        bg: {
          label: "🇧🇬 BG - Bulgarian",
        },
        bm: {
          label: "🇲🇱 BM - Bambara",
        },
        bn: {
          label: "🇧🇩 BN - Bengali",
        },
        bo: {
          label: "🇨🇳 BO - Tibetan",
        },
        br: {
          label: "🇫🇷 BR - Breton",
        },
        brx: {
          label: "🇮🇳 BRX - Bodo",
        },
        bs: {
          label: "🇧🇦 BS - Bosnian",
        },
        ca: {
          label: "🇪🇸 CA - Català",
        },
        cgg: {
          label: "🇺🇬 CGG - Chiga",
        },
        cs: {
          label: "🇨🇿 CS - Čeština",
        },
        cy: {
          label: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 CY - Welsh",
        },
        da: {
          label: "🇩🇰 DA - Dansk",
        },
        de: {
          label: "🇩🇪 DE - Deutsch",
        },
        dje: {
          label: "🇳🇪 DJE - Zarma",
        },
        dv: {
          dir: "rtl",
          label: "🇲🇻 DV - Dhivehi",
        },
        el: {
          label: "🇬🇷 EL - Ελληνικά",
        },
        en: {
          label: "🇬🇧 EN - English",
        },
        eo: {
          label: "🌍 EO - Esperanto",
        },
        root: {
          label: "🇪🇸 ES - Español",
          lang: "es",
        },
        et: {
          label: "🇪🇪 ET - Estonian",
        },
        eu: {
          label: "🇪🇺 EU - Basque",
        },
        fa: {
          dir: "rtl",
          label: "🇮🇷 FA - فارسی",
        },
        ff: {
          label: "🇸🇳 FF - Fulah",
        },
        fil: {
          label: "🇵🇭 FIL - Filipino",
        },
        fi: {
          label: "🇫🇮 FI - Finnish",
        },
        fr: {
          label: "🇫🇷 FR - Français",
        },
        ga: {
          label: "🇮🇪 GA - Irish",
        },
        gu: {
          label: "🇮🇳 GU - Gujarati",
        },
        ha: {
          label: "🇳🇬 HA - Hausa",
        },
        he: {
          dir: "rtl",
          label: "🇮🇱 HE - עברית",
        },
        hi: {
          label: "🇮🇳 HI - हिन्दी",
        },
        hr: {
          label: "🇭🇷 HR - Croatian",
        },
        hu: {
          label: "🇭🇺 HU - Hungarian",
        },
        hy: {
          label: "🇦🇲 HY - Armenian",
        },
        id: {
          label: "🇮🇩 ID - Indonesia",
        },
        ig: {
          label: "🇳🇬 IG - Igbo",
        },
        is: {
          label: "🇮🇸 IS - Icelandic",
        },
        it: {
          label: "🇮🇹 IT - Italiano",
        },
        ja: {
          label: "🇯🇵 JA - 日本語",
        },
        kab: {
          label: "🇩🇿 KAB - Kabyle",
        },
        kam: {
          label: "🇰🇪 KAM - Kamba",
        },
        ka: {
          label: "🇬🇪 KA - Georgian",
        },
        kea: {
          label: "🇨🇻 KEA - Kabuverdianu",
        },
        kk: {
          label: "🇰🇿 KK - Kazakh",
        },
        kln: {
          label: "🇰🇪 KLN - Kalenjin",
        },
        km: {
          label: "🇰🇭 KM - Khmer",
        },
        kmr: {
          dir: "rtl",
          label: "🇹🇷 KMR - Northern Kurdish",
        },
        kn: {
          label: "🇮🇳 KN - Kannada",
        },
        ko: {
          label: "🇰🇷 KO - 한국어",
        },
        kok: {
          label: "🇮🇳 KOK - Konkani",
        },
        ky: {
          label: "🇰🇬 KY - Kyrgyz",
        },
        lag: {
          label: "🇹🇿 LAG - Langi",
        },
        lao: {
          label: "🇱🇦 LAO - Laotian",
        },
        lg: {
          label: "🇺🇬 LG - Ganda",
        },
        ln: {
          label: "🇨🇩 LN - Lingala",
        },
        lt: {
          label: "🇱🇹 LT - Lithuanian",
        },
        lv: {
          label: "🇱🇻 LV - Latvian",
        },
        mk: {
          label: "🇲🇰 MK - Macedonian",
        },
        mg: {
          label: "🇲🇬 MG - Malagasy",
        },
        mer: {
          label: "🇰🇪 MER - Meru",
        },
        ml: {
          label: "🇮🇳 ML - Malayalam",
        },
        mn: {
          label: "🇲🇳 MN - Mongolian",
        },
        mr: {
          label: "🇮🇳 MR - Marathi",
        },
        ms: {
          label: "🇲🇾 MS - Malay",
        },
        mt: {
          label: "🇲🇹 MT - Maltese",
        },
        my: {
          label: "🇲🇲 MY - Burmese",
        },
        nb: {
          label: "🇳🇴 NB - Norsk Bokmål",
        },
        ne: {
          label: "🇳🇵 NE - Nepali",
        },
        nl: {
          label: "🇳🇱 NL - Nederlands",
        },
        nus: {
          label: "🇸🇸 NUS - Nuer",
        },
        om: {
          label: "🇪🇹 OM - Oromo",
        },
        or: {
          label: "🇮🇳 OR - Oriya",
        },
        pa: {
          label: "🇮🇳 PA - Punjabi",
        },
        pl: {
          label: "🇵🇱 PL - Polski",
        },
        ps: {
          dir: "rtl",
          label: "🇦🇫 PS - Pashto",
        },
        pt: {
          label: "🇧🇷 PT - Português Brasileiro",
          lang: "pt",
        },
        ro: {
          label: "🇷🇴 RO - Română",
        },
        ru: {
          label: "🇷🇺 RU - Русский",
        },
        rw: {
          label: "🇷🇼 RW - Kinyarwanda",
        },
        sg: {
          label: "🇨🇫 SG - Sango",
        },
        si: {
          label: "🇱🇰 SI - Sinhala",
        },
        sk: {
          label: "🇸🇰 SK - Slovenčina",
        },
        sl: {
          label: "🇸🇮 SL - Slovenian",
        },
        sn: {
          label: "🇿🇼 SN - Shona",
        },
        so: {
          label: "🇸🇴 SO - Somali",
        },
        sq: {
          label: "🇦🇱 SQ - Albanian",
        },
        sr: {
          label: "🇷🇸 SR - Serbian",
        },
        sv: {
          label: "🇸🇪 SV - Svenska",
        },
        sw: {
          label: "🇹🇿 SW - Swahili",
        },
        swc: {
          label: "🇨🇩 SWC - Congo Swahili",
        },
        ta: {
          label: "🇮🇳 TA - Tamil",
        },
        te: {
          label: "🇮🇳 TE - Telugu",
        },
        th: {
          label: "🇹🇭 TH - Thai",
        },
        ti: {
          label: "🇪🇷 TI - Tigrinya",
        },
        tk: {
          label: "🇹🇲 TK - Turkmen",
        },
        tr: {
          label: "🇹🇷 TR - Türkçe",
        },
        uk: {
          label: "🇺🇦 UK - Українська",
        },
        ur: {
          dir: "rtl",
          label: "🇵🇰 UR - Urdu",
        },
        uz: {
          label: "🇺🇿 UZ - Uzbek",
        },
        vi: {
          label: "🇻🇳 VI - Tiếng Việt",
        },
        yo: {
          label: "🇳🇬 YO - Yoruba",
        },
        zh: {
          label: "🇨🇳 ZH - 中文",
        },
        zu: {
          label: "🇿🇦 ZU - Zulu",
        },
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
          translations: librosTranslations,
        },
        {
          label: "Educación Fundamental",
          collapsed: true,
          translations: educacionFundamentalTranslations,
          autogenerate: { directory: "educacion-fundamental", collapsed: true },
        },
        {
          label: "La Gran Rebelión",
          collapsed: true,
          translations: laGranRebelionTranslations,
          autogenerate: { directory: "la-gran-rebelion", collapsed: true },
        },
        {
          label: "Tratado de Psicología Revolucionaria",
          collapsed: true,
          translations: tratadoDePsicologiaRevolucionariaTranslations,
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
