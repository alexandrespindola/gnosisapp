import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Essència",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. L'Essència",
    "order": 4
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
    "set:html": "<p>El que fa bell i adorable a tot nen acabat de néixer és la seva Essència; aquesta constitueix en si mateixa la seva veritable realitat…</p>\n<p>El normal creixement de l’Essència en tota criatura, certament és molt residual, incipient…</p>\n<p>El cos humà creix i es desenvolupa d’acord amb les lleis biològiques de l’espècie, no obstant això, tals possibilitats resulten per si mateixes molt limitades per a l’Essència…</p>\n<p>Inqüestionablement, l’Essència només pot créixer per si mateixa sense ajuda, en petitíssim grau…</p>\n<p>Parlant francament i sense ambigüitats direm que el creixement espontani i natural de l’Essència, només és possible durant els primers tres, quatre i cinc anys d’edat, és a dir, en la primera etapa de la vida…</p>\n<p>La gent pensa que el creixement i desenvolupament de l’Essència es realitza sempre de forma contínua, d’acord amb la mecànica de l’evolució, més el Gnosticisme Universal ensenya clarament que això no passa així…</p>\n<p>Amb la finalitat de que l’Essència creixi més, alguna cosa molt especial ha de succeir, alguna cosa nova s’ha de realitzar.</p>\n<p>Vull referir-me de forma emfàtica al treball sobre si mateix. El desenvolupament de l’Essència únicament és possible a base de treballs conscients i patiments voluntaris…</p>\n<p>És necessari comprendre que aquests treballs no es refereixen a qüestions de professió, bancs, fusteria, paleteria, arranjament de línies fèrries o assumptes d’oficina…</p>\n<p>Aquest treball és per a tota persona que ha desenvolupat la personalitat; es tracta d’alguna cosa Psicològica…</p>\n<p>Tots nosaltres sabem que tenim dins de si mateixos això que s’anomena EGO, JO, MI MATEIX, SI MATEIX…</p>\n<p>Desgraciadament l’Essència es troba embotellada, embotellada, entre l’ECO i això és lamentable.</p>\n<p>Dissoldre el JO Psicològic, desintegrar els seus elements indesitjables, és urgent, inajornable, inescapable… així és el sentit del treball sobre si mateix.</p>\n<p>Mai podríem alliberar l’Essència sense desintegrar prèviament el JO Psicològic…</p>\n<p>En l’Essència està la Religió, el BUDDHA, la Saviesa, les partícules de dolor del nostre Pare que està en els Cels i totes les dades que necessitem per a l’AUTO-REALITZACIÓ ÍNTIMA DE L’ÉSSER.</p>\n<p>Ningú podria aniquilar el JO Psicològic sense eliminar prèviament els elements inhumans que portem dins…</p>\n<p>Necessitem reduir a cendres la crueltat monstruosa d’aquests temps: l’enveja que desgraciadament ha vingut a convertir-se en el ressort secret de l’acció; la cobdícia insuportable que ha tornat la vida tan amarga: l’fastigosa maledicència; la calúmnia que tantes tragèdies origina; les borratxeres; la immunda luxúria que fa tan mala olor; etc., etc., etc.</p>\n<p>A mesura que totes aquestes abominacions es van reduint a polseguera còsmica, l’Essència a més d’emancipar-se, creixerà i es desenvoluparà harmoniosament…</p>\n<p>Inqüestionablement quan el JO Psicològic ha mort, resplendeix en nosaltres l’Essència…</p>\n<p>L’Essència lliure ens confereix bellesa íntima; de tal bellesa emanen la felicitat perfecta i el veritable Amor…</p>\n<p>L’Essència posseeix múltiples sentits de perfecció i extraordinaris poders naturals…</p>\n<p>Quan “Morim en Si Mateixos”, quan dissolvem el JO Psicològic, gaudim dels preuosos sentits i poders de l’Essència…</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
