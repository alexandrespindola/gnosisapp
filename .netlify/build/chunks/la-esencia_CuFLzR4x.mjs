import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kiini",
  "locale": "swc",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Kiini",
    "order": 4
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
    "set:html": "<p>Kile chenye kufanya mtoto mchanga kuwa muzuri na kupendeza ni Esencia yake; hii inajumuisha ukweli wake halisi…</p>\n<p>Ukuzi wa kawaida wa Esencia katika kila kiumbe, hakika ni kidogo sana, unaanza…</p>\n<p>Mwili wa binadamu unakua na kuendelea kulingana na sheria za kibiolojia za spishi, lakini uwezekano huo ni mdogo sana kwa Esencia…</p>\n<p>Bila shaka, Esencia inaweza kukua yenyewe bila msaada, kwa kiwango kidogo sana…</p>\n<p>Tukiongea waziwazi bila kuficha, tutasema kwamba ukuzi wa ghafla na wa kawaida wa Esencia, unawezekana tu katika miaka mitatu, minne na mitano ya kwanza ya umri, yaani, katika hatua ya kwanza ya maisha…</p>\n<p>Watu wanafikiria kwamba ukuzi na maendeleo ya Esencia hufanyika kila wakati kwa kuendelea, kulingana na mechanics ya mageuzi, lakini Gnosticismo Universal inafundisha wazi kwamba hii haifanyiki hivyo…</p>\n<p>Ili Esencia ikue zaidi, kitu maalum sana lazima kitokee, kitu kipya lazima kifanyike.</p>\n<p>Ninataka kuelezea kwa mkazo kazi juu ya mtu mwenyewe. Maendeleo ya Esencia yanawezekana tu kwa msingi wa kazi za ufahamu na mateso ya hiari…</p>\n<p>Inahitajika kuelewa kwamba kazi hizi hazihusiani na masuala ya taaluma, benki, useremala, ujenzi, urekebishaji wa reli au masuala ya ofisi…</p>\n<p>Kazi hii ni kwa kila mtu ambaye ameendeleza utu; ni jambo la Kisaikolojia…</p>\n<p>Sisi sote tunajua kwamba tuna ndani yetu kile kinachoitwa EGO, MIMI, MWENYEWE…</p>\n<p>Kwa bahati mbaya Esencia imefungwa, imenaswa, kati ya EGO na hii ni ya kusikitisha.</p>\n<p>Kuvunja EGO ya Kisaikolojia, kuondoa vipengele vyake visivyohitajika, ni muhimu, haipaswi kuahirishwa… hivyo ndivyo maana ya kazi juu ya mtu mwenyewe.</p>\n<p>Hatungeweza kamwe kuifungua Esencia bila kuvunja kwanza EGO ya Kisaikolojia…</p>\n<p>Katika Esencia kuna Dini, BUDDHA, Hekima, chembe za maumivu za Baba yetu aliye mbinguni na data zote tunazohitaji kwa UTEKELEZAJI WA NDANI WA NAFSI WA NAFSI.</p>\n<p>Hakuna mtu anayeweza kuangamiza EGO ya Kisaikolojia bila kuondoa kwanza vipengele visivyo vya kibinadamu ambavyo tunavyo ndani…</p>\n<p>Tunahitaji kupunguza kuwa majivu ukatili wa kutisha wa nyakati hizi: husuda ambayo kwa bahati mbaya imekuwa chemchemi ya siri ya hatua; tamaa isiyovumilika ambayo imefanya maisha kuwa machungu sana: kashfa ya kuchukiza; uchongezi ambao husababisha majanga mengi; ulevi; uasherati mchafu ambao unanuka vibaya sana; nk., nk., nk.</p>\n<p>Kadiri machukizo hayo yote yanavyopunguzwa kuwa vumbi la cosmic, Esencia pamoja na kuachiliwa, itakua na kuendeleza kwa usawa…</p>\n<p>Bila shaka wakati EGO ya Kisaikolojia imekufa, Esencia huangaza ndani yetu…</p>\n<p>Esencia huru hutupatia uzuri wa ndani; kutoka kwa uzuri huo hutoka furaha kamili na Upendo wa kweli…</p>\n<p>Esencia ina hisia nyingi za ukamilifu na nguvu za ajabu za asili…</p>\n<p>Tunapokufa katika Sisi Wenyewe, tunapovunja EGO ya Kisaikolojia, tunafurahia hisia na nguvu za thamani za Esencia…</p>"
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
const url = "src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
