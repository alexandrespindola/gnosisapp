// src/lib/api.ts
import axios from "axios";

const STRAPI_URL = "https://cms.gnosisdeutschland.org/api";
const ACCESS_TOKEN_GENERATE_PAGES = "59025f7f24d343381b185bd054a14af2b3e8b77988c0e7fad04bbbd6de3531cfe3293dfc4b3f720a4fd61a051af30eed6e1168412010b0b092d9bee796940d16c89b3aa64fe66457c7f2dc29badf185230d2c926cd9503970334efa4888aae0ad4d6d659f5a0e7c8aff72668dab2e8c2170f234d1b76b04c193a029b6ac3a54c";

export async function getBooks(locale: string) {
  try {
    // Modificação: Usar pt-BR para busca, mas manter o locale original
    const searchLocale = locale === 'pt' ? 'pt-BR' : locale;
    
    const response = await axios.get(`${STRAPI_URL}/books?locale=${searchLocale}&populate=*`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN_GENERATE_PAGES}`,
      },
    });
    
    // Mapear os dados para garantir que o locale seja o original
    const mappedData = response.data.data.map((book: any) => ({
      ...book,
      locale: locale // Substituir o locale retornado pelo locale original
    }));
    
    return mappedData;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}
