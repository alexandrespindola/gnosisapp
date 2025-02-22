import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Malsamaj Memoj",
  "locale": "eo",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. La Malsamaj Memoj",
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
    "set:html": "<p>La Racia Mamula Racionala erare nomata homo, vere ne posedas difinitan individuecon.</p>\n<p>Sendube, ĉi tiu manko de Psikologia unueco en la Humanoido, estas la kaŭzo de tiom da malfacilaĵoj kaj amarecoj.</p>\n<p>La fizika korpo estas kompleta unuo kaj funkcias kiel organika tuto, krom se ĝi estas malsana.</p>\n<p>Tamen, la interna vivo de la Humanoido neniel estas psikologia unuo.</p>\n<p>La plej grava afero el ĉio ĉi, malgraŭ tio, kion diras la diversaj lernejoj de pseŭdo-esotera kaj pseŭdo-okulta tipo, estas la foresto de Psikologia organizado en la intima fondo de ĉiu subjekto.</p>\n<p>Certe en tiaj kondiĉoj, ne ekzistas harmonia laboro kiel tuto, en la interna vivo de la homoj.</p>\n<p>La Humanoido, rilate al sia interna stato, estas psikologia multobleco, sumo de “Mioj”.</p>\n<p>La ilustritaj ignorantoj de ĉi tiu malluma epoko, adoras la “MION”, ili diigas ĝin, metas ĝin sur la altarojn, nomas ĝin “ALTER EGO”, “SUPERA MIO”, “DIA MIO”, ktp., ktp., ktp.</p>\n<p>La “Saĝuloj” de ĉi tiu nigra aĝo en kiu ni vivas, ne volas konstati, ke “Supera Mio” aŭ “Malsupera Mio”, estas du sekcioj de la sama pluraligita Egoo…</p>\n<p>La Humanoido certe ne havas “Konstantan MION”, sed amason da malsamaj Infrahomaj kaj absurdaj “Mioj”.</p>\n<p>La malriĉa intelekta besto erare nomata homo, similas al malorda domo, kie anstataŭ unu mastro, ekzistas multaj servistoj, kiuj ĉiam volas komandi kaj fari tion, kion ili volas…</p>\n<p>La plej granda eraro de la malmultekosta Pseŭdo-Esoterismo kaj Pseŭdo-Okultismo, estas supozi, ke la aliaj posedas aŭ ke oni havas “Konstantan kaj Neŝanĝeblan MION” sen komenco kaj sen fino…</p>\n<p>Se tiuj, kiuj tiel pensas, vekus konsciencon eĉ por momento, ili povus klare evidentigi por si mem, ke la racia Humanoido neniam estas la sama dum longa tempo…</p>\n<p>La intelekta mamulo el la psikologia vidpunkto, senĉese ŝanĝiĝas…</p>\n<p>Pensi, ke se persono nomiĝas Luis, li ĉiam estas Luis, estas iom kiel ŝerco de tre malbona gusto…</p>\n<p>Tiu subjekto, kiun oni nomas Luis, havas en si mem aliajn “Miojn”, aliajn egoojn, kiuj esprimiĝas per sia personeco en malsamaj momentoj kaj kvankam Luis ne ŝatas avidecon, alia “Mio” en li — ni nomu ĝin Pepe — ŝatas avidecon kaj tiel plu…</p>\n<p>Neniu persono estas la sama en kontinua formo, vere ne necesas esti tre saĝa por plene konstati la sennombrajn ŝanĝojn kaj kontraŭdirojn de ĉiu subjekto…</p>\n<p>Supozi, ke iu posedas “Konstantan kaj Neŝanĝeblan MION”, egalas certe al misuzo kontraŭ la proksimulo kaj kontraŭ si mem…</p>\n<p>Ene de ĉiu persono loĝas multaj personoj, multaj “Mioj”, tion povas kontroli por si mem kaj rekte, ĉiu veka, konscia persono…</p>"
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
const url = "src/content/docs/eo/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
