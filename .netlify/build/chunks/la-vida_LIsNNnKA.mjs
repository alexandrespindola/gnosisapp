import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Jireenya",
  "locale": "om",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Jireenya",
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
    "set:html": "<p>Laafa jireenya keessatti walitti bu’iinsa nama ajaa’ibsiisan yeroo hundumaa arganna. Namoonni qabeenya qaban, mana jireenyaa bareedaa fi michuu hedduu qaban, yeroo tokko tokko haala sodaachisaa keessa seenu. .. Hojjettoonni harka qalleeyyii fi namoonni sadarkaa giddu galeessaa keessa jiran, yeroo tokko tokko gammachuu guutuun jiraatu.</p>\n<p>Namoonni qarshii hedduu qaban baay’een isaanii dadhabina qaama saalaa irraa kan ka’e ni dhiphatu, dubartoonni badhaadhinni immoo gantummaa abbaa manaa isaaniitiif imimmaan ni dhangalaasu…</p>\n<p>Badhaadhinni lafaa allaattota warqeen keessatti hidhaman fakkaatu, yeroo ammaa kana “eegdota qaamaa” malee jiraachuu hin danda’an…</p>\n<p>Namoonni mootummaa hidhaa harkisu, matumaa bilisa hin ta’an, yeroo hundumaa namoota hidhannoo guutuu qabanitti marsanii deemu…</p>\n<p>Haala kana bal’inaan haa qorannu. Jireenyi maal akka ta’e beekuu qabna. Namni kamiyyuu akka barbaadetti yaaduu keessatti bilisa dha…</p>\n<p>Maal jedhanis dhugaa dubbachuuf eenyuyyuu waan tokko hin beeku, jireenyi rakkoo eenyuyyuu hin hubanne ta’ee argama…</p>\n<p>Yeroo namoonni seenaa jireenya isaanii tola akka nutti himan barbaadan, taateewwan, maqaa fi maqaa abbaa, guyyaa, kkf eeru, akkasumas gabaasa isaanii yeroo dhiyeessanitti gammachuu ni argatu…</p>\n<p>Namoonni hiyyeeyyii kun gabaasni isaanii guutuu akka hin taane ni wallaalu, sababiin isaas taateewwan, maqaa fi guyyaan alaa isa filmii qofa, keessa isaa hin jiru…</p>\n<p>“Haala hubannaa” beekuun ariifachiisaa dha, taatee kamiyyuuf haala miiraa akkanaa yookiin akkanaa kan walsimu qaba.</p>\n<p>Haalonni keessaati, taateewwan immoo alaa dha, taateewwan alaa hundaa miti…</p>\n<p>Haalota keessaa jechuun qophaa’ina gaarii yookiin hamaa, yaaddoo, gadda, amantii sobaa, soda, shakkii, mararfannoo, of ilaaluu, of xiqqeessuu; haala gammachuu keessa jiraachuu, haala gammachuu, kkf, kkf, kkf dha.</p>\n<p>Haalota keessaa taateewwan alaa wajjin sirriitti walsimuu yookiin isaan irraa madduu, yookiin walitti dhufeenya isaanii wajjin matumaa qabaachuu dhiisuun hin oolu…</p>\n<p>Haala kamiyyuu keessatti haalonnii fi taateewwan adda adda. Yeroo hundumaa taateewwan haalota walfakkaatan wajjin sirriitti hin walsiman</p>\n<p>Haalli keessaa taatee nama gammachiisuu wajjin walsimuu dhiisuu danda’a. Haalli keessaa taatee nama gaddisiisuu wajjin walsimuu dhiisuu danda’a. Taateewwan yeroo dheeraadhaaf eeggannu, yeroo dhufan waanti tokko akka hir’ate nutti dhaga’ama…</p>\n<p>Dhugumatti haalli keessaa taatee alaa wajjin walitti makamuu qabuutu hir’ate…</p>\n<p>Yeroo baay’ee taateen hin eeggamne yeroo gaarii caalaatti kan nuuf kenne ta’ee argama…</p>"
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
const url = "src/content/docs/om/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/om/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/om/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
