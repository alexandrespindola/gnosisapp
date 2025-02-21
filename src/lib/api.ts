// src/lib/api.ts
import axios from "axios";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const ACCESS_TOKEN = import.meta.env.PUBLIC_ACCESS_TOKEN;

export async function getBooks(locale: string) {
  try {
    const response = await axios.get(`${STRAPI_URL}/books?locale=${locale}&populate=*`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}
