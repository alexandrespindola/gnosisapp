import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LOCALES_PREFIX } from "./src/constants/locales.ts";

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

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

  return `---
title: ${title}
lang: ${locale}
template: splash
hero:
  author: Samael Aun Weor
  image:
    file: ${coverImage}
  actions:
    - text: Leer libro
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
