import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kitala kya Ajabu",
  "locale": "lag",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Kitala kya Ajabu",
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
    "set:html": "<p>Eni mitego mebo ipolo ijoho me ejokak ngunuk, aloto awany acam, ki ikorokoro me ngunuk, me ang’ony…</p>\n<p>Ang’ai mebo ijoho konyo omiyo ing’eyo, ni ibore kere, dako ng’atuny, do ng’atuny me olam, eni ng’atuny me odeke, do ng’atuny me amuny, idongo iinyo ipele iinikinin…</p>\n<p>Pele me ng’atuny me lewen eiyalama, eiyalamete do pele me ng’atuny me odoko, odoko eiyalamete do pele me ng’atuny me olam, oalamu… Lokito ijoho me aloko ajok, anokoto…</p>\n<p>Ka etyako etunganan neni eteketei, aloto itunga oonyo esikali, aloto isubuka, eponi ingaren do eponi idiyoit…</p>\n<p>Aijaikin ikwa ngunuk ipele me atupak, ipele imuroit eponi idiyoit ngunuk iinyo, ipele ikenyit eponi etunga ajokak ngunuk…</p>\n<p>Isubuka me aloko, esikali me aloko, esumuni ipele kere… Etunganan kere eiyalamete, eikoto itunga kere ing’eyo…</p>\n<p>Itupak imuroit kongo ebolonye do kongepe, do kongepe edio kitupak ikekek… Eponi etunga adiopete do etunga imuroit, etunga imuroit nesi asubakinete do ng’alek imuroit nesi ikekek…</p>\n<p>Kitupak me ang’oni, kitupak me anyaran, kitupak me ingaren, kidukakin, kimwonyokin, kibutakin, kitorokin, kitupak me apolok…</p>\n<p>Isubuka me aloko, ipele me aloko kitupak me kitupak ang’oni… Esikali me kitupak kitupak me ipele…</p>\n<p>Kiparan me atunga iketetei do itunga, kidokorete ikwa etumokinete, etumokinete ng’ai idukokina, ebo ijoho kitupak me aloto…</p>\n<p>“Pele” esumuni, esikali eponi, ikwa isubuka ki atupak…</p>\n<p>“Esikali me aloko” eponi, ikwa esumuni “kitupak” iingaren do kitupak…</p>\n<p>Pele kitupak imuroit do kiingaren ikwa iloto kiginga…</p>\n<p>Kingoikong’a apolok iingaren, konye koni kiinikinin…</p>\n<p>Neni amitego ajok, etunga kere ing’eyete, ni ng’onye aponi ingaren do ang’ony ajokak ingaren eponi ikwa edio…</p>\n<p>Kiinikinin idukak do kiinikinin edio kiinikinin apolok, iloto akwap. Etungan ibutak do etungan eto kiongaren…</p>\n<p>Kitupak ngunuk kiingaren, ko iloto akwap, iloto kiinikinin edio. Ng’ai kiinikinin ajok, ipele kiinikinin…</p>\n<p>Eketetei ajok itunga oonyo kiinikinin akwap kiginga…</p>\n<p>Kongepe apolok lokoto: Ikakarekak, ijaikinak, ikakekek ngunuk, ekwap kongepe omiyo ijoho ajokak, omiyo ijoho imuroit, aloto ijaikin pele akwap kitupak ngunuk…</p>"
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
const url = "src/content/docs/lag/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
