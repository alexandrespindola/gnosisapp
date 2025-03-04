// src/i18n/utils.ts
import es from '../content/i18n/es.json';
import en from '../content/i18n/en.json';
import pt from '../content/i18n/pt.json';

// Mapeamento de locales para arquivos de tradução
const translations = {
  es,
  en,
  pt
};

// Função para obter uma tradução por chave
export function useTranslations(locale: string) {
  // Fallback para espanhol se o locale não for suportado
  const currentTranslations = translations[locale] || translations.es;
  
  return function t(key: string): string {
    // Suporta chaves aninhadas como 'books.viewMore'
    return key.split('.').reduce((obj, k) => obj && obj[k], currentTranslations) || key;
  };
}
