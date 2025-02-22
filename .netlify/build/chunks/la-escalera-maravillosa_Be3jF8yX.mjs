import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Escala Meravellosa",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. L'Escala Meravellosa",
    "order": 2
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
    "set:html": "<p>Hem d’anhelar un canvi veritable, sortir d’aquesta rutina avorrida, d’aquesta vida merament mecanicista, cansina…</p>\n<p>El que primer hem de comprendre amb entera claredat és que cadascú de nosaltres, ja sigui burgès o proletari, acomodat o de la classe mitjana, ric o miserable, es troba realment en tal o qual Nivell de Ser…</p>\n<p>El Nivell de Ser del borratxo és diferent del de l’abstemi i el de la prostituta molt diferent del de la donzella. Això que estem dient és irrefutable, irrebatible…</p>\n<p>En arribar a aquesta part del nostre capítol, no perdem res amb imaginar-nos una escala que s’estén de baix cap a dalt, verticalment i amb moltíssims graons…</p>\n<p>Inqüestionablement, en algun graó d’aquests ens trobem nosaltres; graons avall hi haurà gent pitjor que nosaltres; graons amunt es trobaran persones millors que nosaltres…</p>\n<p>En aquesta Vertical extraordinària, en aquesta escala meravellosa, és clar que podem trobar tots els Nivells de Ser… cada persona és diferent i això ningú ho pot refutar…</p>\n<p>Indubtablement no estem ara parlant de cares lletges o boniques, ni tampoc es tracta de qüestió d’edats. Hi ha gent jove i vella, ancians que ja estan per morir i nens acabats de néixer…</p>\n<p>La qüestió del temps i dels anys; això de néixer, créixer, desenvolupar-se, casar-se, reproduir-se, envellir-se i morir, és exclusiu de l’Horitzontal…</p>\n<p>A l‘“Escala Meravellosa”, a la Vertical el concepte temps no hi cap. En els graons de tal escala només podem trobar “Nivells de Ser”…</p>\n<p>L’esperança mecànica de la gent no serveix per a res; creuen que amb el temps les coses seran millors; així pensaven els nostres avis i besavis; els fets precisament han vingut a demostrar el contrari…</p>\n<p>El “Nivell de Ser” és el que compta i això és Vertical; ens trobem en un graó però podem pujar a un altre graó…</p>\n<p>L‘“Escala Meravellosa” de la qual estem parlant i que es refereix als diferents “Nivells de Ser”, certament, no té res a veure amb el temps lineal…</p>\n<p>Un “Nivell de Ser” més alt està immediatament per sobre de nosaltres d’instant en instant…</p>\n<p>No està en cap remot futur horitzontal, sinó aquí i ara; dins de nosaltres mateixos; a la Vertical…</p>\n<p>És ostensible i qualsevol ho pot comprendre, que les dues línies —Horitzontal i Vertical— es troben de moment en moment en el nostre interior Psicològic i formen Creu…</p>\n<p>La personalitat es desenvolupa i es desembolica en la línia Horitzontal de la Vida. Neix i mor dins del seu temps lineal; és perible; no existeix cap demà per a la personalitat del mort; no és el Ser…</p>\n<p>Els Nivells del Ser; el Ser mateix, no és del temps, no té res a veure amb la Línia Horitzontal; es troba dins de nosaltres mateixos. Ara, a la Vertical…</p>\n<p>Resultaria manifestament absurd buscar el nostre propi Ser fora de si mateixos…</p>\n<p>No està de més establir com a corol·lari el següent: Títols, graus, ascensos, etc., en el món físic exterior, de cap manera originarien exaltació autèntica, reavaluació del Ser, pas a un graó superior en els “Nivells del Ser”…</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
