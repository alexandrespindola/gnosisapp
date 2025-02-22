import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kiini",
  "locale": "sw",
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
    "set:html": "<p>Kinachomfanya mtoto mchanga kuwa mrembo na mwenye kupendeka ni Kiini chake; hiki chenyewe kinaunda uhalisia wake wa kweli…</p>\n<p>Ukuaji wa kawaida wa Kiini katika kiumbe chochote, kwa hakika ni kidogo sana, changa…</p>\n<p>Mwili wa binadamu hukua na huendelea kulingana na sheria za kibiolojia za spishi, hata hivyo uwezekano huo wenyewe una mipaka sana kwa Kiini…</p>\n<p>Bila shaka Kiini kinaweza tu kukua chenyewe bila msaada, kwa kiwango kidogo sana…</p>\n<p>Tukizungumza kwa uwazi na bila kuficha, tutasema kwamba ukuaji wa hiari na wa asili wa Kiini, unawezekana tu wakati wa miaka mitatu, minne na mitano ya kwanza ya umri, yaani, katika hatua ya kwanza ya maisha…</p>\n<p>Watu hufikiri kwamba ukuaji na maendeleo ya Kiini hufanyika kila wakati kwa kuendelea, kulingana na mechanics ya mageuzi, lakini Gnosticismo Universal inafundisha wazi kuwa hii haifanyiki hivyo…</p>\n<p>Ili Kiini kikue zaidi, kitu maalum sana lazima kitokee, kitu kipya lazima kifanyike.</p>\n<p>Ninataka kurejelea kwa msisitizo kazi juu ya mtu mwenyewe. Maendeleo ya Kiini yanawezekana tu kwa msingi wa kazi za fahamu na mateso ya hiari…</p>\n<p>Ni muhimu kuelewa kwamba kazi hizi hazihusiani na masuala ya taaluma, benki, useremala, uashi, urekebishaji wa njia za reli au masuala ya ofisi…</p>\n<p>Kazi hii ni kwa kila mtu ambaye ameendeleza utu; ni suala la Kisaikolojia…</p>\n<p>Sote tunajua kwamba tuna ndani yetu kile kinachoitwa EGO, MIMI, MWENYEWE, NAFSI…</p>\n<p>Kwa bahati mbaya Kiini kiko kimefungwa, kimenaswa, kati ya EGO na hili ni la kusikitisha.</p>\n<p>Kufuta EGO ya Kisaikolojia, kutenganisha vipengele vyake visivyohitajika, ni muhimu, ni lazima, haiwezi kuahirishwa… hivyo ndivyo maana ya kazi juu ya mtu mwenyewe.</p>\n<p>Hatuwezi kamwe kukomboa Kiini bila kutenganisha kwanza EGO ya Kisaikolojia…</p>\n<p>Katika Kiini kuna Dini, BUDDHA, Hekima, chembe za maumivu za Baba yetu aliye Mbinguni na data zote tunazohitaji kwa KUJITAMBUA KAMILI KWA NDANI KWA NAFSI.</p>\n<p>Hakuna mtu anayeweza kuangamiza EGO ya Kisaikolojia bila kuondoa kwanza vipengele visivyo vya kibinadamu ambavyo tunavyo ndani…</p>\n<p>Tunahitaji kupunguza kuwa majivu ukatili mbaya wa nyakati hizi: husuda ambayo kwa bahati mbaya imekuja kuwa kichocheo cha siri cha utendaji; uchoyo usiovumilika ambao umeifanya maisha kuwa machungu sana: uovu unaochukiza; kashfa ambayo husababisha majanga mengi; ulevi; uasherati mchafu ambao unanuka vibaya sana; nk., nk., nk.</p>\n<p>Kadiri machukizo hayo yote yanapunguzwa kuwa vumbi la cosmic, Kiini pamoja na kuachiliwa, kitakua na kuendeleza kwa usawa…</p>\n<p>Bila shaka wakati EGO ya Kisaikolojia imekufa, Kiini huangaza ndani yetu…</p>\n<p>Kiini huru hutupatia uzuri wa ndani; kutoka kwa uzuri huo hutoka furaha kamili na Upendo wa kweli…</p>\n<p>Kiini kina maana nyingi za ukamilifu na nguvu za ajabu za asili…</p>\n<p>Tunapokufa katika Nafsi Zetu, tunapofuta EGO ya Kisaikolojia, tunafurahia maana na nguvu za thamani za Kiini…</p>"
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
const url = "src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
