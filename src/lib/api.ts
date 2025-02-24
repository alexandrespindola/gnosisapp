// src/lib/api.ts
import axios from "axios";

const STRAPI_URL = "https://railwayapp-strapi-production-3ea7.up.railway.app";
const ACCESS_TOKEN = "1c2abcb722fac8849c3a91e61be7e72cd28e698dec954189c37c96677d2b315e835d16fde326d4059add9925c72a11ab1c1b96dd39d6c83eaed5c5f1afeabeec8cbcbb9b479fcf33736bf8818c35a950f04fb8ab0fd0824ef365816c512fbbcaf519aac4bb21bb3b21dcabd78bf2e8f832bc324da93582512d002a2fd87b8f30";

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
