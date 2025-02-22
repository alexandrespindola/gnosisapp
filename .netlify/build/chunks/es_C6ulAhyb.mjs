const books = {"lord-rings":{"title":"El Señor de los Anillosçççççç","description":"Una historia épica de fantasía...","category":"Fantasía"}};
const common = {"readMore":"Ver más"};
const status = {"original":"Original","automatic":"Traducción Automática","revised":"Revisado"};
const messages = {"originalMessage":"Contenido de este capítulo basado en el texto original en español.","automaticMessage":"Este capítulo ha sido traducido automáticamente del original en español. Aún no ha pasado por revisión humana. Si desea ayudar con la revisión, contáctenos haciendo clic aquí.","revisedMessage":"Este capítulo ha pasado por revisión y traducción humana del texto original en español. Si aún necesita correcciones, contáctenos haciendo clic aquí."};
const es = {
  books,
  common,
  "tableOfContents.onThisPage": "En este capítulo",
  "tableOfContents.overview": "Inicio",
  status,
  messages,
};

export { books, common, es as default, messages, status };
