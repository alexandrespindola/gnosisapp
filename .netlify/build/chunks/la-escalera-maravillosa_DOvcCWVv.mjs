import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Matattakalar Al'ajabi",
  "locale": "ha",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Matattakalar Al'ajabi",
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
    "set:html": "<p>Dole ne mu yi sha’awar gagarumin sauyi, mu fita daga wannan gajiyarwa, wannan rayuwa mai gundura, ta atomatik…</p>\n<p>Abu na farko da ya kamata mu fahimta sarai shi ne cewa kowannenmu, ko burge, ko talaka, mai dukiya, ko talaka, mai arziki, ko matalauci, yana cikin wannan matakin kasancewa…</p>\n<p>Matakin kasancewar mashayin giya ya bambanta da na mai kin giya, na karuwa kuma ya sha bamban da na budurwa. Abin da muke fada ba za a iya musunta shi ba, ba za a iya karyata shi ba…</p>\n<p>Yayin da muka zo wannan bangare na babinmu, ba mu rasa komai wajen tunanin tsani da ke mikewa daga kasa zuwa sama, a tsaye kuma yana da matakai da yawa…</p>\n<p>Babu shakka a wani mataki daga cikin wadannan muna samun kanmu; matakai a kasa za a sami mutane mafi muni fiye da mu; matakai a sama za a sami mutane mafi alheri fiye da mu…</p>\n<p>A wannan tsaye na ban mamaki, a cikin wannan tsani mai ban mamaki, a bayyane yake cewa za mu iya samun dukkan matakan kasancewa… kowane mutum ya bambanta kuma babu wanda zai iya musun wannan. ..</p>\n<p>Babu shakka ba ma maganar munanan fuskoki ko kyawawa a yanzu, kuma ba batun shekaru ba ne. Akwai matasa da tsofaffi, tsofaffi da suka kusa mutuwa da jarirai…</p>\n<p>Batun lokaci da shekaru; wannan na haihuwa, girma, haɓakawa, aure, haifuwa, tsufa da mutuwa, keɓance ne ga kwance…</p>\n<p>A cikin “Tsani Mai ban mamaki”, a cikin Tsaye, ra’ayin lokaci bai dace ba. A kan matakan wannan sikelin kawai za mu iya samun “Matakan Kasancewa”…</p>\n<p>Fatara ta inji na mutane ba ta da amfani; sun yi imani cewa da lokaci abubuwa za su inganta; haka kakanninmu da kakanninmu suka yi tunani; abubuwan da suka faru sun zo don nuna akasin haka…</p>\n<p>“Matakin Kasancewa” shine abin da ke da mahimmanci kuma wannan shine Tsaye; muna kan mataki amma za mu iya hawa wani mataki. ..</p>\n<p>“Tsani Mai ban mamaki” da muke magana akai kuma yana nufin “Matakan Kasancewa” daban-daban, tabbas, ba shi da alaƙa da lokaci mai layi…</p>\n<p>“Mataki na Kasancewa” mafi girma yana nan take a samanmu daga lokaci zuwa lokaci…</p>\n<p>Ba ya cikin wani nesa mai nisa a nan gaba, amma a nan da yanzu; a cikin kanmu; a cikin Tsaye…</p>\n<p>A bayyane yake kuma kowa zai iya fahimta, cewa layukan guda biyu - Kwance da Tsaye - suna haduwa daga lokaci zuwa lokaci a cikin tunaninmu kuma suna samar da Giciye…</p>\n<p>Halayyar tana haɓaka kuma tana buɗewa a cikin layin kwance na Rayuwa. An haife shi kuma ya mutu a cikin lokaci mai layi; yana lalacewa; babu gobe ga halayyar mamaci; ba shi da Kasancewa…</p>\n<p>Matakan Kasancewa; Kasancewa da kansa, ba na lokaci bane, ba shi da alaƙa da Layin Kwance; yana cikin kanmu. Yanzu, a cikin Tsaye…</p>\n<p>Zai zama abin ban mamaki a nemi Kasancewarmu a waje da kanmu…</p>\n<p>Ba cutarwa ba ne a kafa kamar haka: Take, digiri, haɓakawa, da sauransu, a duniyar zahiri ta waje, ba za su haifar da gagarumar ɗaukaka ba, sake kimanta Kasancewa, sauyawa zuwa mataki mafi girma a cikin “Matakan Kasancewa”…</p>"
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
const url = "src/content/docs/ha/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
