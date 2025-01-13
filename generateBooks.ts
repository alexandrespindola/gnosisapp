import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obter __filename e __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Defina suas credenciais diretamente aqui
const STRAPI_URL = "https://cms-strapi-gnosis-7a489057103c.herokuapp.com/api"; // URL da API do Strapi
const ACCESS_TOKEN = "c84e291e514904d2f6d92135d85da6a2f1073486e2c9052563c1713c0ac97ceb49ba47d488f789d3a86d5ebeda6fee6c2c8ba2fe3a665b13674e1b911374c631c390674bf56b749430d2782b67b33c2af31af9945595118c745d5406467f255fae4bb3c49e26ee5c93ce3af638d8a9aba05b9b226446775014c403db1e199a42"; // Token de acesso
const LOCALES = ["es", "en", "pt", "it", "fr", "de", "nl"]; // Idiomas suportados

interface Book {
  documentId: string;
  id: number;
  slug: string; // Slug do livro
  locale: string; // Idioma do livro
  title: { [key: string]: string }; // Títulos por idioma

}

async function fetchBooks(locale: string): Promise<Book[]> {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/books?locale=${locale}`, // Usando a URL direta
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`, // Usando o token direto
        },
      }
    );
    return response.data.data; // Retorna os dados dos livros
  } catch (error) {
    const err = error as any;
    console.error(
      "Erro ao buscar livros:",
      err.response ? err.response.data : err.message
    );
    return [];
  }
}

function generateMarkdown(book: Book, locale: string): string {
  const title = book.title; // Fallback para espanhol com verificação

  if (!title) {
    console.error(`Título ou conteúdo não encontrado para o livro ID ${book.id}`);
    return ''; // Retorna uma string vazia se título ou conteúdo não estiverem disponíveis
  }

  return `---
title: ${title}
locale: ${locale}
---

`;
}

async function main() {
  for (const locale of LOCALES) {
    const books = await fetchBooks(locale); // Busca livros para o locale atual
    if (books.length === 0) {
      console.log(`Nenhum livro encontrado para o locale ${locale}.`);
      continue; // Continua para o próximo idioma
    }

    const localeDir = path.join(__dirname, "src/content/docs/books", locale);
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true }); // Cria diretório se não existir
    }

    books.forEach((book) => {
      const markdownContent = generateMarkdown(book, locale);
      if (markdownContent) { // Verifica se o conteúdo Markdown foi gerado corretamente
        const fileName = `${book.locale}-${book.slug}.md`; // Nome do arquivo pode ser baseado no ID do livro
        
        // A função writeFileSync sobrescreve o arquivo se já existir com o mesmo nome.
        fs.writeFileSync(path.join(localeDir, fileName), markdownContent);
        console.log(`Markdown gerado: ${fileName} em ${localeDir}`);
      }
    });
  }
}

main().catch((err) => console.error(err));
