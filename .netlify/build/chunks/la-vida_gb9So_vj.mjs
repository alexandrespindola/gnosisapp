import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Amagara",
  "locale": "cgg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Amagara",
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
    "set:html": "<p>Omu bwire obw’amagara g’okukora, buri buri tusanga ebihabwe ebitutangaaza. Abantu abagugaaine abaine amaka marungi n’emikago mingi, obumwe nibabona amaganya mabi. .. Abakozi abacureezi abakora n’engaro n’omufuko nari abantu b’aha rubaju rw’agati, obumwe nibatuura omu kushemererwa kwingi.</p>\n<p>Abagugaaine baingi nibagumirwa kukora omukwenda kandi abakazi abagugaaine nibarira muno ahabw’okushisha kw’abaami baabo…</p>\n<p>Abagugaaine b’ensi nibasaana nk’ebiguru omu nju za zahabu, omu bwire obu tibarikubaasa kutuura bataine “abarinzi b’emibiri”…</p>\n<p>Abanyamurwa b’eihanga nibakurura enyoliri, tibarikubaasa kwemererwa, nibagyeenda omu myanya yoona bahurikiziibwe abantu abaine ebyoma bingi…</p>\n<p>Tugye twegyendereze embeera egi muno. twine kumanya ebi amagara gari. Buri omwe ahemerirwe kugamba eki arikwenda…</p>\n<p>Bagambe eki barikugamba, buzima tihaine ou orikumanya, amagara gaba ekizibu eki bataarikwetegyereza…</p>\n<p>Abantu nibabuurira obwomeezi bwabo kubusinga, nibaronda ebyabaho, amaziina, ebiro, nibasemerezebwa kukora enyemereza zaabo…</p>\n<p>Abantu abacureezi abo tibarikwetegyereza ngu enyemereza zaabo tiziijwire ahabw’okuba ebyabaho, amaziina n’ebiro, nikyo kintu kyoona ekiri ahagati y’ekibonabona, ekirikubura nikyo kirikukiraho…</p>\n<p>N’ekyomuhiganano kumanya “embeera z’amagezi”, buri kyabaho nikikwatana n’embeera nk’egi.</p>\n<p>Embeera ziri omunda kandi ebyabaho biri aha rubaju, ebyabaho byaha rubaju tisi byo byoona…</p>\n<p>Yetegyereze ebi omu mbeera z’omunda, enyemereza nungi nari mbi, okwehagarariza, obusaasi, okutiina, okuteebereza, embabazi, okwetwara nk’ogu orikukiraho, okwetungura; embeera z’okukora eshemeza, embeera z’okusemererwa, n’ebindi, n’ebindi.</p>\n<p>Tikirikuraburuzibwa ngu embeera z’omunda zirikubaasa kukwatana n’ebyabaho byaha rubaju nari okutandika nazo, nari kutagira kakwate nazo…</p>\n<p>Omu mbeera yoona embeera n’ebyabaho bitahukana. Tikiri obwire bwona ngu ebintu byaba nibikwatana n’embeera zigwoona.</p>\n<p>Embeera y’omunda y’ekintu ekirikusemeza neebaasa kutakwatana n’ekyo. Embeera y’omunda y’ekintu ekitarikusemeza neebaasa kutakwatana n’ekyo. Ebyabaho ebi turikutinduka obwire buringwa, obu byaija tukamanya ngu harimu ekirikubura…</p>\n<p>Buzima harimu ekirikubura eky’okukwatana n’embeera y’omunda ekirikubaasa kukwatana n’ekyabaho kyaha rubaju…</p>\n<p>Obumwe ebintu ebi tutarikwetenga nibyo bituheereza obwire burungi…</p>"
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
const url = "src/content/docs/cgg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cgg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cgg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
