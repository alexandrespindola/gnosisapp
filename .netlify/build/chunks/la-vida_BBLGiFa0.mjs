import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Vivo",
  "locale": "eo",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. La Vivo",
    "order": 6
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>En la kampo de la praktika vivo ni ĉiam malkovras kontrastojn kiuj mirigas. Riĉaj homoj kun grandioza rezidejo kaj multaj amikecoj, foje terure suferas. .. Humilaj proletoj kun pioĉo kaj ŝpato aŭ homoj de la mezklaso, kutime vivas foje en kompleta feliĉo.</p>\n<p>Multaj arĉimilionuloj suferas de seksa impotenco kaj riĉaj matronoj amare ploras pro la malfideleco de la edzo…</p>\n<p>La riĉuloj de la tero ŝajnas vulturoj inter oraj kaĝoj, en ĉi tiuj tempoj ili ne povas vivi sen “korpogardistoj”…</p>\n<p>Ŝtatestroj trenas katenojn, neniam estas liberaj, ĉirkaŭiras ĉien ĉirkaŭitaj de homoj armitaj ĝis la dentoj…</p>\n<p>Ni studu ĉi tiun situacion pli detale. Ni bezonas scii kio estas la vivo. Ĉiu rajtas opinii kiel li volas…</p>\n<p>Diru kion ili diras certe neniu scias ion, la vivo rezultas problemo kiun neniu komprenas…</p>\n<p>Kiam la homoj deziras rakonti al ni senpage la historion de sia vivo, ili citas eventojn, nomojn kaj familiajn nomojn, datojn, ktp., kaj sentas kontenton kiam ili faras siajn rakontojn…</p>\n<p>Tiuj malriĉaj homoj ignoras ke iliaj rakontoj estas nekompletaj ĉar eventoj, nomoj kaj datoj, estas nur la ekstera aspekto de la filmo, mankas la interna aspekto…</p>\n<p>Estas urĝe koni “statojn de konscio”, al ĉiu evento respondas tia aŭ alia anima stato.</p>\n<p>La statoj estas internaj kaj la eventoj estas eksteraj, la eksteraj okazaĵoj ne estas ĉio…</p>\n<p>Kompreniĝu kiel internaj statoj la bonajn aŭ malbonajn dispoziciojn, la zorgojn, la deprimon, la superstiĉon, la timon, la suspekton, la kompaton, la mem-konsideron, la tro-taksadon de Si mem; statojn de senti sin feliĉa, statojn de ĝojo, ktp., ktp., ktp.</p>\n<p>Nedisputeble la internaj statoj povas respondi precize al la eksteraj okazaĵoj aŭ esti originataj de ĉi tiuj, aŭ ne havi rilaton kun la samaj…</p>\n<p>Ĉiukaze statoj kaj eventoj estas malsamaj. Ne ĉiam la okazoj respondas precize al afiitaj statoj</p>\n<p>La interna stato de agrabla evento povus ne respondi al la sama. La interna stato de malagrabla evento povus ne respondi al la sama. Okazaĵoj atenditaj dum longa tempo, kiam ili venis ni sentis ke mankis io…</p>\n<p>Certe mankis la responda interna stato kiu devis kombiniĝi kun la ekstera okazaĵo…</p>\n<p>Multfoje la okazaĵo kiun oni ne atendis fariĝas tiu kiu plej bonajn momentojn havigis al ni…</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/eo/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
