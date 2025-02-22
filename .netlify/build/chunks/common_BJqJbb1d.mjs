import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from './astro/server_D5RFOXkj.mjs';
import { k as renderEntry } from './translations_DWItyM-a.mjs';
import { j as generateRouteData, $ as $$Page } from './Page_UV64aIJS.mjs';

const $$Astro = createAstro();
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  const { route } = Astro2.props;
  const { Content, headings } = await renderEntry(route.entry);
  const routeData = generateRouteData({ props: { ...route, headings }, url: Astro2.url });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...routeData }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": route.entry.data })}` })}`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/common.astro", undefined);

export { $$Common as $ };
