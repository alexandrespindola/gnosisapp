/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_D5RFOXkj.mjs';
import { g as getBooks, $ as $$BookCard, a as $$StarlightPage } from '../../chunks/StarlightPage_BKJ2kKfD.mjs';
import { L as LOCALES_PREFIX } from '../../chunks/locales_CVLhBcGW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  return LOCALES_PREFIX.map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}
const $$Books = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Books;
  const { lang } = Astro2.params;
  const books = await getBooks(lang) || [];
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    title: lang === "pt" ? "Livros" : lang === "es" ? "Libros" : "Books",
    description: lang === "pt" ? "Biblioteca de Livros" : lang === "es" ? "Biblioteca de Libros" : "Book Library",
    template: "splash"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${books.length > 0 ? books.map((book) => renderTemplate`${renderComponent($$result2, "BookCard", $$BookCard, { "book": {
    title: book?.title || "Sem t\xEDtul",
    text_id: book?.text_id || "Sem id",
    description: book?.description || "Sem descri\xE7\xE3o",
    category: book?.category || "Sem categoria",
    year: book?.year || 0,
    author: book?.author.name || "Sem autor",
    coverImage: book?.cover_image?.formats?.small?.url || "/default-cover.jpg"
  }, "buttonText": lang === "pt" ? "Ver mais" : lang === "es" ? "Ver m\xE1s" : "Read more" })}`) : renderTemplate`<div class="col-span-full text-center py-8"> ${lang === "pt" ? "Nenhum livro encontrado" : lang === "es" ? "No se encontraron libros" : "No books foundd"} </div>`} </div> ` })}`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/src/pages/[lang]/books.astro", undefined);

const $$file = "/home/prometeu/Documentos/Astro/gnosisapp/src/pages/[lang]/books.astro";
const $$url = "/[lang]/books";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Books,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
