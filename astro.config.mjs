// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    AstroPWA({
      base: '/',
      scope: '/',
      includeAssets: ['favicon.png', 'robots.txt', 'sitemap.xml'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Gnosis',
        short_name: 'Gnosis',
        description: 'Gnosis es un proyecto educativo que busca la liberación de la humanidad a través de la educación y la psicología revolucionaria.',
        theme_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/img/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp, txt}']
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/$/]
      },
      experimental: {
        directoryAndTrailingSlashHandler: true
      }
    }),
    starlight({
      title: "Gnosis",
      favicon: "/img/favicon.png",
      customCss: ["./src/tailwind.css"],
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
    }),
    tailwind(),
  ],
});
