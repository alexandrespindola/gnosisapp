import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Personaj Okazaĵoj",
  "locale": "eo",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Personaj Okazaĵoj",
    "order": 9
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
    "set:html": "<p>Plena aŭt-observado intima de la Propra Memo, estas neprokrastebla kiam temas pri malkovri malĝustajn psikologiajn statojn.</p>\n<p>Nedubeble la malĝustaj internaj statoj povas esti korektitaj per ĝustaj proceduroj.</p>\n<p>Ĉar la interna vivo estas la magneto, kiu allogas la eksterajn eventojn, ni urĝe bezonas, kun maksimuma neprokrastebleco, forigi el nia psiko la erarajn psikologiajn statojn.</p>\n<p>Korekti malĝustajn psikologiajn statojn estas esenca, kiam oni volas fundamente ŝanĝi la naturon de certaj nedezirindaj eventoj.</p>\n<p>Ŝanĝi nian rilaton kun certaj eventoj, estas ebla se ni forigas el nia interno certajn absurdajn psikologiajn statojn.</p>\n<p>Eksteraj detruaj situacioj, povus iĝi sendanĝeraj kaj eĉ konstruemaj per la inteligenta korektado de la eraraj internaj statoj.</p>\n<p>Oni povas ŝanĝi la naturon de la malagrablaj eventoj, kiuj okazas al ni, kiam oni puriĝas intime. Kiu neniam korektas la absurdajn psikologiajn statojn, kredante sin tre forta, iĝas viktimo de la cirkonstancoj.</p>\n<p>Ordigi nian malordan internan domon estas vivnecesa, kiam oni deziras ŝanĝi la direkton de malfeliĉa ekzisto.</p>\n<p>La homoj plendas pri ĉio, suferas, ploras, protestas, volus ŝanĝi vivon, eliri el la malfeliĉo en kiu ili troviĝas, malfeliĉe ili ne laboras sur si mem.</p>\n<p>La homoj ne volas rimarki, ke la interna vivo allogas eksterajn cirkonstancojn kaj ke se ĉi tiuj estas doloraj, tio ŝuldiĝas al la absurdaj internaj statoj.</p>\n<p>La ekstero estas nur la reflekto de la interno, kiu ŝanĝas interne estigas novan ordon de aferoj.</p>\n<p>La eksteraj eventoj neniam estus tiel gravaj, kiel la maniero reagi al ili.</p>\n<p>Ĉu vi restis serena antaŭ la insultanto? Ĉu vi akceptis kun plezuro la malagrablajn manifestaciojn de viaj proksimuloj?</p>\n<p>En kia maniero vi reagis antaŭ la malfideleco de la amato? Ĉu vi lasis vin forporti de la veneno de la ĵaluzo? Ĉu vi mortigis? Ĉu vi estas en la karcero?</p>\n<p>La hospitaloj, la tombejoj, la karceroj, estas plenaj de sinceraj erarintoj, kiuj reagis en absurda maniero antaŭ la eksteraj eventoj.</p>\n<p>La plej bona armilo, kiun homo povas uzi en la vivo, estas ĝusta Psikologia stato.</p>\n<p>Oni povas senarmigi sovaĝbestojn kaj malkaŝi perfidulojn, per taŭgaj internaj statoj.</p>\n<p>La malĝustaj internaj statoj konvertas nin en senhelpajn viktimojn de la homa malbono.</p>\n<p>Lernu alfronti vin antaŭ la plej malagrablaj okazoj de la praktika vivo kun taŭga interna sinteno…</p>\n<p>Ne identigu vin kun iu ajn okazaĵo; memoru ke ĉio pasas; lernu vidi la vivon kiel filmon kaj vi ricevos la profitojn…</p>\n<p>Ne forgesu ke eventoj sen ajna valoro povus konduki vin al la malfeliĉo, se vi ne forigas el via Psiko la malĝustajn internajn statojn.</p>\n<p>Ĉiu ekstera evento bezonas, nedubeble, la taŭgan bileton; tio estas, de la preciza Psikologia stato.</p>"
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
const url = "src/content/docs/eo/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
