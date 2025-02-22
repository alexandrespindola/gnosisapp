import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ljubljeni Ego",
  "locale": "sl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Ljubljeni Ego",
    "order": 11
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
    "set:html": "<p>Ker sta zgornji in spodnji del dva dela iste stvari, je dobro določiti naslednjo posledico: “VIŠJI JAZ, NIŽJI JAZ” sta dva vidika istega mračnega in razpršenega EGA.</p>\n<p>Tako imenovani “BOŽANSKI JAZ” ali “VIŠJI JAZ”, “ALTER EGO” ali kaj podobnega, je v resnici trik “JAZ SAMA”, oblika SAMOPREVARE.</p>\n<p>Ko JAZ želi nadaljevati tukaj in v onostranstvu, se SAMOPREVARJA z lažnim konceptom Božanskega Nesmrtnega JAZA …</p>\n<p>Nihče od nas nima resničnega, trajnega, nespremenljivega, večnega, neizrekljivega itd. “Jaza”.</p>\n<p>Nihče od nas v resnici nima prave in pristne Enotnosti Biti; žal nimamo niti legitimne individualnosti.</p>\n<p>Ego ima sicer nadaljevanje onkraj groba, vendar ima začetek in konec.</p>\n<p>Ego, JAZ, ni nikoli nekaj individualnega, enotnega, enotnega. Očitno je JAZ “JAZI”.</p>\n<p>V vzhodnem Tibetu se “JAZI” imenujejo “PSIHIČNI AGREGATI” ali preprosto “Vrednote”, bodisi pozitivne ali negativne.</p>\n<p>Če na vsak “Jaz” gledamo kot na drugačno osebo, lahko odločno trdimo naslednje: “Znotraj vsake osebe, ki živi na svetu, obstaja veliko oseb.”</p>\n<p>Nedvomno znotraj vsakega od nas živi veliko različnih ljudi, nekateri boljši, drugi slabši …</p>\n<p>Vsak od teh Jazov, vsaka od teh oseb se bori za prevlado, želi biti izključna, nadzoruje intelektualne možgane ali čustvene in motorične centre, kadar koli lahko, medtem ko ga drugi premakne …</p>\n<p>Doktrino o mnogih Jazih so v vzhodnem Tibetu poučevali pravi Jasnovidci, pristni Razsvetljeni …</p>\n<p>Vsaka od naših psiholoških napak je poosebljena v tem ali onem Jazu. Ker imamo na tisoče in celo milijone napak, očitno v nas živi veliko ljudi.</p>\n<p>V psiholoških vprašanjih smo jasno dokazali, da paranoični, egolatrski in mitomani za nič na svetu ne bi opustili čaščenja ljubljenega Ega.</p>\n<p>Nedvomno taki ljudje smrtno sovražijo doktrino o mnogih “Jazih”.</p>\n<p>Ko se človek resnično želi spoznati, se mora samo-opazovati in poskušati spoznati različne “Jaze”, ki so v osebnosti.</p>\n<p>Če kdo od naših bralcev še ne razume te doktrine o mnogih “Jazih”, je to izključno zaradi pomanjkanja prakse samo-opazovanja.</p>\n<p>Ko človek vadi notranje samo-opazovanje, sam odkrije veliko ljudi, veliko “Jazov”, ki živijo znotraj naše lastne osebnosti.</p>\n<p>Tisti, ki zanikajo doktrino o mnogih Jazih, tisti, ki častijo Božanski JAZ, se nedvomno nikoli resno niso samo-opazovali. Če tokrat govorimo v Sokratovem slogu, bomo rekli, da ti ljudje ne samo da ne vedo, ampak tudi ne vedo, da ne vedo.</p>\n<p>Seveda se nikoli ne bi mogli spoznati brez resnega in poglobljenega samo-opazovanja.</p>\n<p>Dokler kateri koli posameznik še vedno meni, da je En, je jasno, da bo vsaka notranja sprememba več kot nemogoča.</p>"
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
const url = "src/content/docs/sl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
