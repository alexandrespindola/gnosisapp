import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Undrastiginn",
  "locale": "is",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Undrastiginn",
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
    "set:html": "<p>Við verðum að þrá sanna breytingu, komast út úr þessari leiðinlegu rútínu, þessu lífi sem er bara vélrænt og þreytandi…</p>\n<p>Það fyrsta sem við verðum að skilja fullkomlega er að hvert og eitt okkar, hvort sem það er borgari eða verkalýðsmaður, efnaður eða af millistétt, ríkur eða fátækur, er í raun á ákveðnu tilverustigi…</p>\n<p>Tilverustig drykkjumannsins er annað en bindindismannsins og tilverustig vændiskonunnar er mjög frábrugðið tilverustigi meyjarinnar. Það sem við erum að segja er óumdeilt og óhrekjanlegt…</p>\n<p>Þegar við komum að þessum hluta kaflans okkar, þá skaðar það okkur ekki að ímynda okkur stiga sem teygir sig lóðrétt upp og niður með mjög mörgum þrepum…</p>\n<p>Á einhverju þrepi af þessum stigum erum við óumdeilanlega; neðar á stigunum verður fólk verra en við; ofar á stigunum verður fólk betra en við…</p>\n<p>Á þessari óvenjulegu lóðréttu línu, á þessum dásamlega stiga, er ljóst að við getum fundið öll tilverustigin… hver einstaklingur er öðruvísi og enginn getur mótmælt því…</p>\n<p>Við erum vissulega ekki að tala um ljót eða falleg andlit, né heldur er þetta spurning um aldur. Það er ungt og gamalt fólk, aldrað fólk sem er að deyja og nýfædd börn…</p>\n<p>Spurningin um tíma og ár; þetta með að fæðast, vaxa, þroskast, giftast, fjölga sér, eldast og deyja, er eingöngu á láréttu plani…</p>\n<p>Á “Dásamlega stiganum”, á lóðréttu plani, á hugmyndin um tíma ekki við. Á þrepunum á slíkum stiga getum við aðeins fundið “Tilverustig”…</p>\n<p>Vélræn von fólks gagnast engu; það heldur að hlutirnir muni batna með tímanum; þannig hugsuðu afi okkar og ömmur; staðreyndirnar hafa einmitt sannað hið gagnstæða…</p>\n<p>“Tilverustigið” er það sem skiptir máli og það er lóðrétt; við erum á einu þrepi en við getum farið upp á annað þrep…</p>\n<p>“Dásamlegi stiginn” sem við erum að tala um og vísar til mismunandi “Tilverustiga”, hefur vissulega ekkert með línulegan tíma að gera…</p>\n<p>Hærra “Tilverustig” er strax fyrir ofan okkur frá augnabliki til augnabliks…</p>\n<p>Það er ekki í neinni fjarlægri láréttri framtíð, heldur hér og nú; innra með okkur sjálfum; á lóðréttu plani…</p>\n<p>Það er augljóst og allir geta skilið að línurnar tvær —lárétta og lóðrétta— mætast á hverri stundu í okkar sálfræðilega innra með okkur og mynda kross…</p>\n<p>Persónuleikinn þróast og afhjúpast á láréttu línu lífsins. Hann fæðist og deyr innan síns línulega tíma; hann er forgengilegur; það er enginn morgundagur fyrir persónuleika hins látna; hann er ekki Veran…</p>\n<p>Tilverustigin; Veran sjálf, er ekki af tímanum, hefur ekkert með láréttu línuna að gera; hún er innra með okkur sjálfum. Núna, á lóðréttu plani…</p>\n<p>Það væri augljóslega fáránlegt að leita að okkar eigin Veru utan okkar sjálfra…</p>\n<p>Það er ekki úr vegi að setja fram eftirfarandi sem röksemdafærslu: Titlar, gráður, stöðuhækkanir o.s.frv., í ytri efnisheimi, myndu á engan hátt leiða til ekta upphafningar, endurmats á Verunni, skrefs upp á hærra þrep í “Tilverustigunum”…</p>"
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
const url = "src/content/docs/is/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/is/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/is/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
