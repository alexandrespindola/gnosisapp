import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LOCALES } from "./src/constants/locales.ts";

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Define your credentials directly here
const STRAPI_URL = process.env.STRAPI_URL || "";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

if (!STRAPI_URL || !ACCESS_TOKEN) {
  throw new Error('STRAPI_URL and ACCESS_TOKEN must be defined in the .env file');
}

interface Chapter {
  documentId: string;
  id: number;
  slug: string; // Slug of the chapter
  locale: string; // Language of the chapter
  text_id: string; // Text ID of the chapter
  order_number: number; // Order number of the chapter
  chapter_number: number; // Order number of the chapter
  title: { [key: string]: string }; // Titles by language
  content: { [key: string]: string }; // Content by language
}

async function fetchChapters(
  bookId: string,
  locale: string
): Promise<Chapter[]> {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/books/${bookId}?locale=${locale}&populate=chapters`, // Using the correct URL to fetch chapters related to the book
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`, // Using the direct token
        },
      }
    );

    const chapters = response.data.data.chapters; // Accesses the chapters from the response
    return chapters; // Returns the chapter data
  } catch (error) {
    const err = error as any;
    console.error(
      `Error fetching chapters for book ID ${bookId}:`,
      err.response ? err.response.data : err.message
    );
    return [];
  }
}

function generateChapterMarkdown(chapter: Chapter, locale: string): string {
  const title = chapter.title;
  const content = chapter.content;
  const chapter_number = chapter.chapter_number;
  const order_number = chapter.order_number;

  if (!title) {
    console.error(`Title not found for chapter ID ${chapter.id}`);
    return ""; // Returns an empty string if title is not available
  }

  return `---
title: ${title}
locale: ${locale}
sidebar:
    label: ${chapter_number > 0 ? `${chapter_number}. ` : ''}${title}
    order: ${order_number}
---
${content}
`;
}

async function main() {
  for (const locale of LOCALES) {
    const booksResponse = await axios.get(
      `${STRAPI_URL}/books?locale=${locale}`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const books = booksResponse.data.data; // Gets the list of books

    for (const book of books) {
      const chapters = await fetchChapters(book.documentId, locale); // Fetches chapters for each book

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
              locale
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
            locale,
            book.text_id
          );
          if (!fs.existsSync(chaptersDir)) {
            fs.mkdirSync(chaptersDir, { recursive: true }); // Creates chapters directory if it doesn't exist
          }

          chapters.forEach((chapter) => {
            const chapterMarkdownContent = generateChapterMarkdown(
              chapter,
              locale
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
