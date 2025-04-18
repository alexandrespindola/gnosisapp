import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../env/.env") });

// Check for dev flag
const isDev = process.argv.includes('--dev');

// Dynamically import locales based on dev flag
let LOCALES_PREFIX: string[];
try {
  if (isDev) {
    const devLocalesModule = await import('../src/constants/dev.locales.ts');
    LOCALES_PREFIX = devLocalesModule.LOCALES_PREFIX;
    console.log('Using dev locales:', LOCALES_PREFIX);
  } else {
    const localesModule = await import('../src/constants/locales.ts');
    LOCALES_PREFIX = localesModule.LOCALES_PREFIX;
  }
} catch (error) {
  console.error('Error importing locales:', error);
  process.exit(1);
}

// Function to load translations for a specific locale
function loadTranslations(locale: string) {
  try {
    const translationPath = path.resolve(__dirname, `../src/content/i18n/${locale}.json`);
    const translationContent = fs.readFileSync(translationPath, 'utf-8');
    return JSON.parse(translationContent);
  } catch (error) {
    console.error(`Error loading translations for locale ${locale}:`, error);
    return { books: { readBook: 'Read book' } }; // Fallback
  }
}

// Define your credentials directly here
const STRAPI_URL = process.env.PUBLIC_STRAPI_URL || "";
const ACCESS_TOKEN = process.env.PUBLIC_ACCESS_TOKEN || "";

if (!STRAPI_URL || !ACCESS_TOKEN) {
  throw new Error(
    "STRAPI_URL and ACCESS_TOKEN must be defined in the .env file"
  );
}

interface Book {
  documentId: string;
  title: string;
  author: string;
  text_id: string;
  cover_image: {
    formats: {
      small: {
        url: string;
        ext: string;
        width: number;
        height: number;
      };
    };
  };
}

function generateIndexMarkdown(book: Book, locale: string): string {
  const coverImage = book.cover_image?.formats?.small?.url ?? "";
  const title = book.title;

  // Load translations for the specific locale
  const translations = loadTranslations(locale);
  const readBookText = translations.books?.readBook || 'Read book';

  return `---
title: ${title}
lang: ${locale}
template: splash
hero:
  author: Samael Aun Weor
  image:
    file: ${coverImage}
  actions:
    - text: ${readBookText}
      link: prefacio
      icon: right-arrow
sidebar:
  label: Intro
  order: -1
---
`;
}

async function main() {
  for (const locale of LOCALES_PREFIX) {
    // Modificação: usar pt-BR para busca, mas manter o locale original
    const searchLocale = locale === 'pt' ? 'pt-BR' : locale;
    
    const booksResponse = await axios.get(
      `${STRAPI_URL}/books?locale=${searchLocale}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const books = booksResponse.data.data;

    for (const book of books) {
      // Usar o locale original para geração de markdown
      const indexMarkdownContent = generateIndexMarkdown(book, locale);

      const indexDir = path.join(
        __dirname,
        "..",
        "src/content/docs",
        locale === "es" ? book.text_id : path.join(locale, book.text_id)
      );

      if (!fs.existsSync(indexDir)) {
        fs.mkdirSync(indexDir, { recursive: true });
      }

      const indexFileName = "index.mdx";
      fs.writeFileSync(
        path.join(indexDir, indexFileName),
        indexMarkdownContent
      );

      console.log(
        `Index MDX generated for book: ${book.text_id} in ${indexDir}`
      );
    }
  }
}

main().catch((err) => console.error(err));
