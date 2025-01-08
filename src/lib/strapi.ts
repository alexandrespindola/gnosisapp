const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export const fetchStrapiData = async <T>(endpoint: string): Promise<StrapiResponse<T>> => {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`);
    if (!response.ok) {
        throw new Error('Erro ao buscar dados do Strapi');
    }
    const data: StrapiResponse<T> = await response.json();
    return data;
};
