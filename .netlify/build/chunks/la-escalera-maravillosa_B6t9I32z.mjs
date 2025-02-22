import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ar Skeul Veurdezus",
  "locale": "br",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Ar Skeul Veurdezus",
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
    "set:html": "<p>Ret eo deomp c’hoantaat ur gwir cheñchamant, mont er-maez eus ar boas rutinel-se, eus ar vuhez mekanikel, skuizh-se…</p>\n<p>Ar pezh a rankomp kompren da gentañ gant sklaerder eo e kaver pep hini ac’hanomp, bourc’hiz pe proletar, aes pe a renk kreiz, pinvidik pe paour, evel-just en ul live Bezañ bennak…</p>\n<p>Live Bezañ an ever zo disheñvel diouzh hini an den a zalc’h, ha hini ar c’hast zo disheñvel-tre diouzh hini ar plac’h yaouank. Ar pezh a lavaromp amañ zo diflammus, dibosupl da ziskar…</p>\n<p>Pa zegouezhimp el lodenn-mañ eus hor pennad, ne gollimp netra o soñjal en ur skeul a ya eus an traoñ d’an nec’h, a-serzh ha gant ur bern bazennoù…</p>\n<p>Hep mar e vefomp war ur bazenn bennak anezho; bazennoù dindan e vo tud falloc’h egetomp; bazennoù a-us e vo tud gwelloc’h egetomp…</p>\n<p>Er Vertical dibar-mañ, er skeul vrav-mañ, ez eo sklaer e c’hallomp kavout holl liveoù ar Bezañ… disheñvel eo pep den ha den ne c’hall nac’hañ se…</p>\n<p>Hep mar e vefomp o komz diwar-benn dremmoù divalav pe braoñ, ha n’eo ket diwar-benn oadoù. Tud yaouank ha tud kozh a zo, tud kozh war o fin da vervel ha bugale nevez-c’hanet…</p>\n<p>Afer an amzer hag ar bloavezhioù; ganedigezh, kresk, diorren, dimeziñ, genel, kozhañ ha mervel, n’eo nemet d’an Horizontal e talvez…</p>\n<p>Er “Skeul Vrav”, er Vertical ne vez ket kaoz eus amzer. War bazennoù ur skeul a seurt-se ne c’hallomp kavout nemet “Liveoù Bezañ”…</p>\n<p>Sperañs mekanikel an dud n’eo mat da netra; krediñ a reont e vo gwelloc’h an traoù gant an amzer; evel-se e soñje hor zud-kozh hag hor gourdad-kozh; an darvoudoù o deus diskouezet ar c’hontrol memes…</p>\n<p>Ar “Live Bezañ” eo a gont ha Vertical eo; emaomp war ur bazenn met gallout a reomp pignat d’ur bazenn all…</p>\n<p>Ar “Skeul Vrav” a zo kaoz anezhi amañ hag a denn d’an “Liveoù Bezañ” disheñvel, n’he deus netra da welet gant an amzer linennek, e gwirionez…</p>\n<p>Ur “Live Bezañ” uheloc’h a zo diouzhtu a-us deomp eus an eil mare d’egile…</p>\n<p>N’emañ ket en un amzer da zont horizontal pell, met amañ ha bremañ; ennomp hon-unan; er Vertical…</p>\n<p>Splann eo ha gallout a ra forzh piv kompren, emañ an div linenn —Horizontal ha Vertical— a-gevret eus an eil mare d’egile en hor Psikologiezh diabarzh hag e reont ur Groaz…</p>\n<p>An den a zispleg hag a ziorro war linenn Horizontal ar Vuhez. Ganet ha marv eo e-pad e amzer linennek; bresk eo; n’eus ket a warc’hoazh evit den marv; n’eo ket ar Bezañ…</p>\n<p>Liveoù ar Bezañ; ar Bezañ e-unan, n’eo ket eus an amzer, n’en deus netra da welet gant al Linenn Horizontal; emañ ennomp hon-unan. Bremañ, er Vertical…</p>\n<p>Diskiant e vefe klask hor Bezañ hon-unan er-maez ac’hanomp hon-unan…</p>\n<p>Mat e vefe embann an dra-mañ evel korollari: Titloù, derezioù, uheladennadurioù, hag all, er bed fizikel diavaez, ne lakaint ket war wel ur gwir uhelder, adpriziañ ar Bezañ, tremen d’ur bazenn uheloc’h en “Liveoù ar Bezañ” e mod ebet…</p>"
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
const url = "src/content/docs/br/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/br/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/br/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
