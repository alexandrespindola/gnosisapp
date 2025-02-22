/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../chunks/astro/server_D5RFOXkj.mjs';
import { i as paths } from '../chunks/Page_UV64aIJS.mjs';
import { $ as $$Common } from '../chunks/common_BJqJbb1d.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": Astro2.props })}`;
}, "/home/prometeu/Documentos/Astro/gnosisapp/node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/static/index.astro", undefined);

const $$file = "/home/prometeu/Documentos/Astro/gnosisapp/node_modules/.pnpm/@astrojs+starlight@0.30.5_astro@5.1.3_@netlify+blobs@8.1.1_@types+node@22.10.5_jiti@1.2_85a566938a49a29c5119297fdb2e5ec7/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
