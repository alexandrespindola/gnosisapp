import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Els Diferents Jo",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Els Diferents Jo",
    "order": 10
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
    "set:html": "<p>El Mamífer Racional equivocadament anomenat home, realment no posseeix una individualitat definida.</p>\n<p>Inqüestionablement aquesta falta d’unitat Psicològica en l’Humanoide, és la causa de tantes dificultats i amargors.</p>\n<p>El cos físic és una unitat completa i treballa com un tot orgànic, tret d’estar malalt.</p>\n<p>Però, la vida interior de l’Humanoide de cap manera és una unitat psicològica.</p>\n<p>El més greu de tot això, malgrat el que diguin les diverses escoles de tipus Pseudo-Esotèric i Pseudo-Ocultista, és l’absència d’organització Psicològica en el fons íntim de cada subjecte.</p>\n<p>Certament en tals condicions, no existeix treball harmoniós com un tot, en la vida interior de les persones.</p>\n<p>L’Humanoide, respecte del seu estat interior, és una multiplicitat psicològica, una suma de “Joes”.</p>\n<p>Els ignorants il·lustrats d’aquesta època tenebrosa, li rendeixen culte al “JO”, l’endeuten, el posen en els altars, l’anomenen “ALTER EGO”, “JO SUPERIOR”, “JO DIVÍ”, etc., etc., etc.</p>\n<p>No volen adonar-se els “Sabihondos” d’aquesta edat negra en què vivim, que “Jo Superior” o “Jo Inferior”, són dues seccions del mateix Ego pluralitzat…</p>\n<p>L’Humanoide no té certament un “JO Permanent” sinó una multitud de diferents “Joes” Infrahumans i absurds.</p>\n<p>El pobre animal intel·lectual equivocadament anomenat home, és semblant a una casa en desordre on en comptes d’un amo, existeixen molts criats que volen sempre manar i fer el que els ve de gust…</p>\n<p>L’error més gran del Pseudo-Esoterisme i Pseudo-Ocultisme barat, és suposar que els altres posseeixen o que es té un “JO Permanent i Immutable” sense principi i sense fi…</p>\n<p>Si aquells que així pensen despertessin consciència encara que fos per un instant, podrien evidenciar clarament per si mateixos, que l’Humanoide racional mai és el mateix per molt temps…</p>\n<p>El mamífer intel·lectual des del punt de vista psicològic, està canviant contínuament…</p>\n<p>Pensar que si una persona es diu Lluís és sempre Lluís, resulta una cosa així com una broma de molt mal gust…</p>\n<p>Aquest subjecte a qui s’anomena Lluís té en si mateix altres “Joes”, altres egos, que s’expressen a través de la seva personalitat en diferents moments i encara que a Lluís no li agradi la cobdícia, un altre “Jo” en ell —anomenem-lo Pepe— li agrada la cobdícia i així successivament…</p>\n<p>Cap persona és la mateixa de forma contínua, realment no es necessita ser molt savi per adonar-se cabalment dels innombrables canvis i contradiccions de cada subjecte…</p>\n<p>Suposar que algú posseeix un “Jo Permanent i Immutable” equival per descomptat a un abús envers el proïsme i per a un mateix…</p>\n<p>Dins de cada persona viuen moltes persones, molts “Joes”, això ho pot verificar per si mateix i de forma directa, qualsevol persona desperta, conscient…</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
