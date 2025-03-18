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

// Define credentials for Strapi API
const STRAPI_URL = process.env.PUBLIC_STRAPI_URL || "";
const ACCESS_TOKEN = process.env.PUBLIC_ACCESS_TOKEN || "";

// Directory for storing locale-specific cache timestamps
const CACHE_DIR = path.resolve(__dirname, "../.cache/timestamps");

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Function to get last build timestamp for a specific locale
function getLastBuildTimestamp(locale: string): string {
  const cacheFile = path.resolve(CACHE_DIR, `${locale}.timestamp`);
  
  // Default to an old timestamp if no cache exists
  if (!fs.existsSync(cacheFile)) {
    return "2020-01-01T00:00:00.000Z";
  }
  
  return fs.readFileSync(cacheFile, "utf-8").trim();
}

// Function to save timestamp for a specific locale
function saveLocaleTimestamp(locale: string, timestamp: string) {
  const cacheFile = path.resolve(CACHE_DIR, `${locale}.timestamp`);
  fs.writeFileSync(cacheFile, timestamp);
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
  chapter_number: number; // Chapter number
  title: string; // Title of the chapter
  content: string; // Content of the chapter
  book?: Book; // Book reference
  updatedAt: string; // Timestamp of last update
}

async function fetchChapters(
  bookId: string,
  locale: string,
  bookData: Book
): Promise<Chapter[]> {
  try {
    // Get last build timestamp for this specific locale
    const lastBuildTimestamp = getLastBuildTimestamp(locale);
    
    // Use pt-BR for search, but keep original locale
    const searchLocale = locale === 'pt' ? 'pt-BR' : locale;

    const response = await axios.get(
      `${STRAPI_URL}/books/${bookId}?locale=${searchLocale}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const chapters = response.data.data.chapters || [];
    
    // Filter chapters based on timestamp
    return chapters.filter((chapter: Chapter) => {
      const chapterUpdatedAt = new Date(chapter.updatedAt);
      const lastBuildDate = new Date(lastBuildTimestamp);
      
      // Debug logging for each chapter
      console.log(`📘 Chapter ${chapter.id} (${chapter.slug}):`, {
        updatedAt: chapter.updatedAt,
        lastBuildDate: lastBuildTimestamp,
        willBeProcessed: chapterUpdatedAt > lastBuildDate
      });

      return chapterUpdatedAt > lastBuildDate;
    }).map((chapter: Chapter) => ({
      ...chapter,
      book: {
        ...bookData,
        cover_image: response.data.data.cover_image,
      },
    }));
  } catch (error) {
    const err = error as any;
    console.error(
      `🚨 Error fetching chapters for book ID ${bookId}:`,
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
    console.error(`🚫 Title not found for chapter ID ${chapter.id}`);
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
  console.log(`🕰️ Starting chapter generation`);

  try {
    for (const locale of LOCALES_PREFIX) {
      console.log(`🌐 Processing locale: ${locale}`);
      
      const booksResponse = await axios.get(
        `${STRAPI_URL}/books?locale=${locale}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      const books = booksResponse.data.data;
      console.log(`📚 Found ${books.length} books for ${locale}`);

      // Create current timestamp for this locale
      const currentTimestamp = new Date().toISOString();

      for (const book of books) {
        const chapters = await fetchChapters(book.documentId, locale, book);
        console.log(`📖 Processing book: ${book.text_id} (${chapters.length} chapters)`);

        if (chapters.length > 0) {
          const chaptersDir = path.join(
            __dirname,
            "..",
            "src/content/docs",
            locale === 'pt' ? 'pt' : locale,
            book.text_id
          );
          
          if (!fs.existsSync(chaptersDir)) {
            fs.mkdirSync(chaptersDir, { recursive: true });
          }

          chapters.forEach((chapter) => {
            const chapterMarkdownContent = generateChapterMarkdown(
              chapter,
              locale,
              book
            );
            
            if (chapterMarkdownContent) {
              const chapterFileName = locale === 'es' 
                ? `${chapter.slug}.mdx` 
                : `${chapter.text_id}.mdx`;
              
              const fullPath = path.join(chaptersDir, chapterFileName);
              
              fs.writeFileSync(fullPath, chapterMarkdownContent);
              
              console.log(`📄 MDX generated for chapter: ${chapterFileName} in ${chaptersDir}`);
            }
          });
        }
      }

      // Save timestamp for this specific locale after processing
      saveLocaleTimestamp(locale, currentTimestamp);
    }
    
    console.log('✅ Chapter generation complete');
  } catch (error) {
    console.error('❌ Error during chapters generation', error);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});