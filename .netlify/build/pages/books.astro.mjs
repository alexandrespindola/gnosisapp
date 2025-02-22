/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D5RFOXkj.mjs';
import { g as getBooks, $ as $$BookCard, a as $$StarlightPage } from '../chunks/StarlightPage_BKJ2kKfD.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Books = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getBooks("es") || [];
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    title: "Libros",
    description: "Biblioteca de Libros",
    template: "splash"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${books.length > 0 ? books.map((book) => renderTemplate`${renderComponent($$result2, "BookCard", $$BookCard, { "book": {
    title: book?.title || "Sin t\xEDtulo",
    text_id: book?.text_id || "Sin id",
    description: book?.description || "Sin descripci\xF3n",
    category: book?.category || "Sin categor\xEDa",
    year: book?.year || 0,
    author: book?.author.name || "Sin autor",
    coverImage: book?.cover_image?.formats?.small?.url || "/default-cover.jpg"
  }, "buttonText": "Ver m\xE1s" })}`) : renderTemplate`<div class="col-span-full text-center py-8">
No se encontraron libros
</div>`} </div> ` })}`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/src/pages/books.astro", undefined);

const $$file = "/home/prometeu/Documentos/Astro/gnosisapp/src/pages/books.astro";
const $$url = "/books";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Books,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
