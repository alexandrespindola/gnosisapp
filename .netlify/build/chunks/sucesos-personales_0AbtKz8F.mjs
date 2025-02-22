import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Abubuwan Da Suka Faru Da Kai",
  "locale": "ha",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Abubuwan Da Suka Faru Da Kai",
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
    "set:html": "<p>Cikakken lura da kai na sirri, ba makawa ne idan ana son gano halaye na tunani marasa kyau.</p>\n<p>Ba shakka za a iya gyara halaye na ciki marasa kyau ta hanyar hanyoyi masu kyau.</p>\n<p>Tunda rayuwar ciki ita ce maganadisu da ke jan abubuwan da ke faruwa a waje, muna bukatar gaggawa, kawar da halaye na tunani mara kyau daga tunaninmu.</p>\n<p>Gyara halaye na tunani marasa kyau yana da matukar muhimmanci idan ana son canza yanayin wasu abubuwan da ba a so.</p>\n<p>Canza dangantakarmu da wasu abubuwan da suka faru, yana yiwuwa idan muka kawar da wasu halaye na tunani marasa ma’ana daga cikinmu.</p>\n<p>Za a iya mayar da yanayi na waje masu halakarwa zuwa marasa lahani har ma da masu amfani ta hanyar gyara mai kyau na halaye na ciki marasa kyau.</p>\n<p>Mutum zai iya canza yanayin abubuwan da ba su da daɗi da ke faruwa da mu, lokacin da aka tsarkake shi a ciki. Wanda bai taɓa gyara halaye na tunani marasa ma’ana ba, yana tunanin kansa mai ƙarfi yana zama wanda abin ya shafa.</p>\n<p>Sanya tsari a cikin gidanmu na ciki mai rikicewa yana da matukar muhimmanci, lokacin da ake so a canza tafarkin rayuwa mara dadi.</p>\n<p>Mutane suna kuka game da komai, suna wahala, suna kuka, suna zanga-zanga, suna so su canza rayuwarsu, su fita daga cikin bala’in da suka sami kansu, abin takaici ba sa aiki a kansu.</p>\n<p>Mutane ba sa so su gane cewa rayuwar ciki tana jawo yanayi na waje kuma idan waɗannan suna da zafi saboda halaye na ciki marasa ma’ana.</p>\n<p>Abin da ke waje kawai yana nuna abin da ke ciki, wanda ya canza a ciki yana haifar da sabon tsari na abubuwa.</p>\n<p>Abubuwan da ke waje ba za su taɓa zama masu mahimmanci ba, kamar yadda za a amsa musu.</p>\n<p>Shin kun kasance cikin nutsuwa a gaban mai zagi? Shin kun karɓi bayyanar da ba ta dace ba daga ‘yan uwanku?</p>\n<p>Ta yaya kuka amsa rashin aminci na ƙaunataccen? Shin kun bar kanku ku tafi da gubar kishi? Shin kun kashe? Kuna cikin kurkuku?</p>\n<p>Asibitoci, makabartu ko pantheons, gidajen yari, cike suke da masu gaskiya da suka yi kuskure da suka amsa cikin wauta ga abubuwan da ke waje.</p>\n<p>Mafi kyawun makamin da mutum zai iya amfani da shi a rayuwa shine yanayin tunani mai kyau.</p>\n<p>Mutum zai iya kwance damarar dabbobi masu zafin rai da fallasa maciya amana, ta hanyar halaye na ciki masu dacewa.</p>\n<p>Halaye na ciki marasa kyau suna mai da mu waɗanda ba su da tsaro na muguntar ɗan adam.</p>\n<p>Koyi yadda za ku fuskanci abubuwan da ba su da daɗi a rayuwa ta zahiri tare da halin ciki mai dacewa…</p>\n<p>Kada ku gane kanku da kowane lamari; ku tuna cewa komai yana wucewa; ku koyi ganin rayuwa a matsayin fim kuma za ku sami fa’idodi…</p>\n<p>Kada ku manta cewa abubuwan da ba su da daraja za su iya kai ku ga rashin sa’a, idan ba ku kawar da halaye na ciki marasa kyau daga tunanin ku ba.</p>\n<p>Kowane lamari na waje yana buƙatar, ba shakka, tikitin da ya dace; wato, yanayin tunani daidai.</p>"
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
const url = "src/content/docs/ha/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ha/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
