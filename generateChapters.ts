import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your credentials directly here
const STRAPI_URL = "https://cms-strapi-gnosis-7a489057103c.herokuapp.com/api"; // URL of the Strapi API
const ACCESS_TOKEN =
  "299b15708b1919ce793939f42746b02e8e3154edbabc5199cfb4a6542a1371756b32c3fcd25ba7eb4e7fe398a19d5b4a7c9e3779766261daaa8931c6419be7e0ab89103f8d3b68ad83c531b503cebfed741be6ab8b1d8c1e31d378ef4bef4813782f602debdb40d8f6168e19da68de9e73319089f034c7ea64a06185873fc1bc"; // Access token
const LOCALES = ["es", "en", "pt", "it", "fr", "de", "nl"]; // Supported languages

interface Chapter {
  documentId: string;
  id: number;
  slug: string; // Slug of the chapter
  locale: string; // Language of the chapter
  text_id: string; // Text ID of the chapter
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

  if (!title) {
    console.error(`Title not found for chapter ID ${chapter.id}`);
    return ""; // Returns an empty string if title is not available
  }

  return `---
title: ${title}
locale: ${locale}
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
            "books",
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
              const chapterFileName = `${chapter.text_id}.md`; // File name based on the chapter ID
              fs.writeFileSync(
                path.join(chaptersDir, chapterFileName),
                chapterMarkdownContent
              );
              console.log(
                `Markdown generated for chapter: ${chapterFileName} in ${chaptersDir}`
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
            "books",
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
              const chapterFileName = `${chapter.text_id}.md`; // File name based on the chapter ID
              fs.writeFileSync(
                path.join(chaptersDir, chapterFileName),
                chapterMarkdownContent
              );
              console.log(
                `Markdown generated for chapter: ${chapterFileName} in ${chaptersDir}`
              );
            }
          });
        }
      }
    }
  }
}

main().catch((err) => console.error(err));
