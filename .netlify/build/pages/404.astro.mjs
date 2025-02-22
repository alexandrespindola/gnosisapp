/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../chunks/astro/server_D5RFOXkj.mjs';
import { s as starlightConfig, g as getCollectionPathFromRoot, p as project, a as getEntry, B as BuiltInDefaultLocale } from '../chunks/translations_DWItyM-a.mjs';
import { n as normalizeCollectionEntry } from '../chunks/Page_UV64aIJS.mjs';
import { $ as $$Common } from '../chunks/common_BJqJbb1d.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = undefined;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: Astro2.locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  const route = { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": route })}`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/static/404.astro", undefined);

const $$file = "/home/prometeu/Documentos/Astro/gnosisapp/node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/static/404.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
