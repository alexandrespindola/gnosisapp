// src/lib/api.ts
import axios from "axios";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const ACCESS_TOKEN = "c84e291e514904d2f6d92135d85da6a2f1073486e2c9052563c1713c0ac97ceb49ba47d488f789d3a86d5ebeda6fee6c2c8ba2fe3a665b13674e1b911374c631c390674bf56b749430d2782b67b33c2af31af9945595118c745d5406467f255fae4bb3c49e26ee5c93ce3af638d8a9aba05b9b226446775014c403db1e199a42";
console.log('Token:', ACCESS_TOKEN); // Debug para verificar se o token está definido

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
