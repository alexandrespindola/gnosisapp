import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Matukio ya Kibinafsi",
  "locale": "swc",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Matukio ya Kibinafsi",
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
    "set:html": "<p>Kujitazama kwa ndani kwa ukamilifu, ni muhimu sana wakati unataka kugundua hali za kisaikolojia ambazo si sahihi.</p>\n<p>Bila shaka, hali za ndani ambazo si sahihi zinaweza kurekebishwa kupitia njia sahihi.</p>\n<p>Kwa sababu maisha ya ndani ni sumaku ambayo inavuta matukio ya nje, tunahitaji haraka sana, kuondoa hali za kisaikolojia zisizo sahihi kutoka kwa akili zetu.</p>\n<p>Kurekebisha hali za kisaikolojia ambazo si sahihi ni muhimu sana wakati unataka kubadilisha kabisa asili ya matukio fulani yasiyotakikana.</p>\n<p>Kubadilisha uhusiano wetu na matukio fulani, inawezekana ikiwa tunaondoa kutoka ndani yetu hali za kisaikolojia ambazo hazina maana.</p>\n<p>Hali za nje ambazo zinaweza kuharibu, zinaweza kuwa zisizo na madhara na hata zenye kujenga kupitia urekebishaji wa akili wa hali za ndani zisizo sahihi.</p>\n<p>Mtu anaweza kubadilisha asili ya matukio yasiyopendeza yanayotukia, wakati anatakaswa ndani. Yeyote asiyerekebisha hali za kisaikolojia ambazo hazina maana, akijiona kuwa na nguvu sana anakuwa mwathirika wa hali.</p>\n<p>Kuweka utaratibu katika nyumba yetu ya ndani iliyojaa fujo ni muhimu sana, wakati unataka kubadilisha mkondo wa maisha ya bahati mbaya.</p>\n<p>Watu wanalalamika kuhusu kila kitu, wanateseka, wanalia, wanalalamika, wangependa kubadilisha maisha yao, kutoka katika bahati mbaya wanayoipata, kwa bahati mbaya hawafanyi kazi juu yao wenyewe.</p>\n<p>Watu hawataki kugundua kuwa maisha ya ndani yanavutia hali za nje na kwamba ikiwa hizi zinaumiza ni kwa sababu ya hali za ndani ambazo hazina maana.</p>\n<p>Kilicho nje ni onyesho tu la kilicho ndani, yeyote anayebadilika ndani anaanzisha utaratibu mpya wa mambo.</p>\n<p>Matukio ya nje hayangewahi kuwa muhimu sana, kama njia ya kuitikia mambo hayo.</p>\n<p>Je! Ulibaki mtulivu mbele ya mtukanaji? Je! Ulipokea kwa furaha maonyesho yasiyopendeza ya majirani zako?</p>\n<p>Uliitikiaje ukafiri wa mpendwa? Je! Ulijiacha upelekwe na sumu ya wivu? Uliua? Uko gerezani?</p>\n<p>Hospitali, makaburi au mapango, magereza, yamejaa watu wazuri waliofanya makosa ambao waliitikia kwa njia isiyo na maana kwa matukio ya nje.</p>\n<p>Silaha bora ambayo mwanaume anaweza kutumia katika maisha, ni hali sahihi ya kisaikolojia.</p>\n<p>Mtu anaweza kuvunja silaha za wanyama wakali na kufichua wasaliti, kupitia hali za ndani zinazofaa.</p>\n<p>Hali za ndani ambazo si sahihi zinatufanya kuwa wahasiriwa wasio na ulinzi wa uovu wa kibinadamu.</p>\n<p>Jifunzeni kukabiliana na matukio mabaya zaidi ya maisha ya vitendo na mtazamo wa ndani unaofaa…</p>\n<p>Msijitambulishe na tukio lolote; kumbukeni kwamba kila kitu kinapita; jifunzeni kuona maisha kama filamu na mtapokea faida…</p>\n<p>Msisahau kwamba matukio yasiyo na thamani yoyote yanaweza kuwapeleka kwenye bahati mbaya, ikiwa hamtoondoa kutoka kwa akili zenu hali za ndani zisizo sahihi.</p>\n<p>Kila tukio la nje linahitaji, bila shaka, tiketi inayofaa; yaani, hali sahihi ya kisaikolojia.</p>"
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
const url = "src/content/docs/swc/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
