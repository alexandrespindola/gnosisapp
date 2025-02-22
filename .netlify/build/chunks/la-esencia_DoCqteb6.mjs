import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Magego",
  "locale": "lag",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Magego",
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
    "set:html": "<p>Kile kinaleta uzuri na kupendeza kwa kila mtoto mchanga ni Kiini chake; hiki ndicho uhalisia wake halisi…</p>\n<p>Ukuaji wa kawaida wa Kiini katika kila kiumbe, hakika ni kidogo sana, wa awali…</p>\n<p>Mwili wa binadamu hukua na kuendelezwa kulingana na sheria za kibiolojia za spishi, hata hivyo uwezekano huo ni mdogo sana kwa Kiini…</p>\n<p>Bila shaka Kiini kinaweza tu kukua chenyewe bila msaada, kwa kiwango kidogo sana…</p>\n<p>Kusema ukweli na bila kuficha, tutasema kwamba ukuaji wa asili na wa hiari wa Kiini, unawezekana tu wakati wa miaka mitatu, minne na mitano ya kwanza ya umri, yaani, katika hatua ya kwanza ya maisha…</p>\n<p>Watu hufikiria kwamba ukuaji na maendeleo ya Kiini hufanyika daima kwa namna endelevu, kulingana na mechanics ya mageuzi, lakini Ugnostiki wa Ulimwengu unafundisha wazi kwamba hii haitokei hivyo…</p>\n<p>Ili Kiini kukua zaidi, kitu maalum sana lazima kitokee, kitu kipya lazima kifanyike.</p>\n<p>Ninataka kurejelea kwa mkazo kazi juu ya mtu mwenyewe. Maendeleo ya Kiini yanawezekana tu kwa msingi wa kazi za fahamu na mateso ya hiari…</p>\n<p>Ni muhimu kuelewa kwamba kazi hizi hazihusiani na masuala ya taaluma, benki, useremala, uashi, ukarabati wa njia za reli au masuala ya ofisi…</p>\n<p>Kazi hii ni kwa kila mtu ambaye ameendeleza utu; ni jambo la Kisaikolojia…</p>\n<p>Sisi sote tunajua kwamba tuna ndani yetu kile kinachoitwa EGO, MIMI, MWENYEWE…</p>\n<p>Kwa bahati mbaya, Kiini kinapatikana kikiwa kimefungwa, kimebanwa, kati ya EGO na hii ni ya kusikitisha.</p>\n<p>Kuyeyusha EGO ya Kisaikolojia, kuondoa vipengele vyake visivyohitajika, ni haraka, haiepukiki, haiwezi kuahirishwa… hivyo ndivyo maana ya kazi juu ya mtu mwenyewe.</p>\n<p>Hatungeweza kamwe kukomboa Kiini bila kuondoa EGO ya Kisaikolojia hapo awali…</p>\n<p>Katika Kiini kuna Dini, BUDDHA, Hekima, chembe za maumivu za Baba yetu aliye Mbinguni na data yote tunayohitaji kwa UTAMBUZI WA NDANI WA NAFSI.</p>\n<p>Hakuna mtu anayeweza kuangamiza EGO ya Kisaikolojia bila kuondoa hapo awali vipengele visivyo vya kibinadamu tulivyo navyo ndani…</p>\n<p>Tunahitaji kupunguza kuwa majivu ukatili mbaya wa nyakati hizi: husuda ambayo kwa bahati mbaya imekuja kuwa chemchemi ya siri ya hatua; uchoyo usioweza kuvumilika ambao umerudisha maisha kuwa machungu sana: masingizio ya kuchukiza; uongo ambao huleta majanga mengi; ulevi; uasherati mchafu unaonuka vibaya sana; nk., nk., nk.</p>\n<p>Kadiri machukizo hayo yote yanavyopunguzwa kuwa mavumbi ya anga, Kiini pamoja na kuachiliwa, kitakua na kuendelezwa kwa upatanifu…</p>\n<p>Bila shaka wakati EGO ya Kisaikolojia imekufa, Kiini huangaza ndani yetu…</p>\n<p>Kiini huru hutupatia uzuri wa ndani; kutoka kwa uzuri kama huo hutoka furaha kamili na Upendo wa kweli…</p>\n<p>Kiini kina hisia nyingi za ukamilifu na nguvu za ajabu za asili…</p>\n<p>Wakati “Tunakufa Katika Nafsi Zetu”, tunapoyeyusha EGO ya Kisaikolojia, tunafurahia hisia na nguvu za thamani za Kiini…</p>"
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
const url = "src/content/docs/lag/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
