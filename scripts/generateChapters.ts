import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LOCALES_PREFIX } from "../src/constants/locales.ts";

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../env/.env") });

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

interface Chapter {
  documentId: string;
  id: number;
  slug: string; // Slug of the chapter
  locale: string; // Language of the chapter
  text_id: string; // Text ID of the chapter
  order_number: number; // Order number of the chapter
  translation_state: string; // Translation state of the chapter
  chapter_number: number; // Order number of the chapter
  title: { [key: string]: string }; // Titles by language
  content: { [key: string]: string }; // Content by language
  book?: Book; // Book reference
}

async function fetchChapters(
  bookId: string,
  locale: string,
  bookData: Book
): Promise<Chapter[]> {
  try {
    // Modificação: Usar pt-BR para busca, mas manter o locale original
    const searchLocale = locale === 'pt' ? 'pt-BR' : locale;
    
    const response = await axios.get(
      `${STRAPI_URL}/books/${bookId}?locale=${searchLocale}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const chapters = response.data.data.chapters;
    return chapters.map((chapter: Chapter) => ({
      ...chapter,
      book: {
        ...bookData,
        cover_image: response.data.data.cover_imag,
      },
    }));
  } catch (error) {
    const err = error as any;
    console.error(
      `Error fetching chapters for book ID ${bookId}:`,
      err.response ? err.response.data : err.message
    );
    return [];
  }
}

function generateChapterMarkdown(chapter: Chapter, locale: string, book: Book): string {
  const title = chapter.title;
  const content = chapter.content;
  const chapter_number = chapter.chapter_number;
  const order_number = chapter.order_number;
  const translation_state = chapter.translation_state;
  const cover_image = book.cover_image?.formats?.small?.url ?? "";

  if (!title) {
    console.error(`Title not found for chapter ID ${chapter.id}`);
    return "";
  }

  return `---
title: ${title}
locale: ${locale}
statusTranslation: ${translation_state || ""}
${cover_image ? `coverImage: ${cover_image}` : ``}
sidebar:
    label: ${chapter_number > 0 ? `${chapter_number}. ` : ""}${title}
    order: ${order_number}
---
${content}
`;
}

async function main() {
  for (const locale of LOCALES_PREFIX) {
    const booksResponse = await axios.get(
      `${STRAPI_URL}/books?locale=${locale}&populate=*`, // Using the correct URL to fetch books
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const books = booksResponse.data.data; // Gets the list of books

    for (const book of books) {
      const chapters = await fetchChapters(book.documentId, locale, book); // Fetches chapters for each book

      // Generate markdown files for chapters in Español (default)
      if (locale === "es") {
        if (chapters.length > 0) {
          const chaptersDir = path.join(
            __dirname,
            "src/content/docs",
            book.text_id
          );
          if (!fs.existsSync(chaptersDir)) {
            fs.mkdirSync(chaptersDir, { recursive: true }); // Creates chapters directory if it doesn't exist
          }

          chapters.forEach((chapter) => {
            const chapterMarkdownContent = generateChapterMarkdown(
              chapter,
              locale,
              book
            );
            if (chapterMarkdownContent) {
              const chapterFileName = `${chapter.slug}.mdx`; // File name based on the chapter ID
              fs.writeFileSync(
                path.join(chaptersDir, chapterFileName),
                chapterMarkdownContent
              );
              console.log(
                `MDX generated for chapter: ${chapterFileName} in ${chaptersDir}`
              );
            }
          });
        }
      } else {
        // Generate markdown files for chapters in other languages
        if (chapters.length > 0) {
          const chaptersDir = path.join(
            __dirname,
            "src/content/docs",
            locale === 'pt' ? 'pt' : locale,
            book.text_id
          );
          if (!fs.existsSync(chaptersDir)) {
            fs.mkdirSync(chaptersDir, { recursive: true }); // Creates chapters directory if it doesn't exist
          }

          chapters.forEach((chapter) => {
            const chapterMarkdownContent = generateChapterMarkdown(
              chapter,
              locale,
              book
            );
            if (chapterMarkdownContent) {
              const chapterFileName = `${chapter.text_id}.mdx`; // File name based on the chapter ID
              fs.writeFileSync(
                path.join(chaptersDir, chapterFileName),
                chapterMarkdownContent
              );
              console.log(
                `MDX generated for chapter: ${chapterFileName} in ${chaptersDir}`
              );
            }
          });
        }
      }
    }
  }
}

main().catch((err) => console.error(err));
