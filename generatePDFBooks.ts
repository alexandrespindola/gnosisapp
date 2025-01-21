import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { LOCALES_PREFIX } from "./src/constants/locales.ts";
import PDFDocument from "pdfkit";

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Define your credentials directly here
const STRAPI_URL = process.env.STRAPI_URL || "";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

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
  slug: string;
  locale: string;
  text_id: string;
  order_number: number;
  translation_state: string;
  chapter_number: number;
  title: { [key: string]: string };
  content: { [key: string]: string };
  book?: Book;
}

async function fetchChapters(
  bookId: string,
  locale: string,
  bookData: Book
): Promise<Chapter[]> {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/books/${bookId}?locale=${locale}&populate=*`,
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
        cover_image: response.data.data.cover_image,
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

async function generatePDF(chapter: Chapter, locale: string, book: Book): Promise<string> {
  const doc = new PDFDocument();
  const pdfDir = path.join(__dirname, 'pdfs', book.text_id, locale);
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }
  const pdfPath = path.join(pdfDir, `${chapter.slug}.pdf`);
  
  doc.pipe(fs.createWriteStream(pdfPath));

  // Add content to PDF
  doc.fontSize(18).text(chapter.title[locale], { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(chapter.content[locale]);

  doc.end();

  return new Promise((resolve) => {
    doc.on('end', () => {
      resolve(pdfPath);
    });
  });
}

async function main() {
  for (const locale of LOCALES_PREFIX) {
    const booksResponse = await axios.get(
      `${STRAPI_URL}/books?locale=${locale}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const books = booksResponse.data.data;

    for (const book of books) {
      const chapters = await fetchChapters(book.documentId, locale, book);

      for (const chapter of chapters) {
        const pdfPath = await generatePDF(chapter, locale, book);
        console.log(`PDF generated: ${pdfPath}`);
      }
    }
  }
}

main().catch((err) => console.error(err));