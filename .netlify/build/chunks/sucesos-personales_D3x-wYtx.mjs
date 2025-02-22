import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Mambo ya Mundu",
  "locale": "lag",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Mambo ya Mundu",
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
    "set:html": "<p>Kujitazama mwenyewe kwa undani ni jambo lisiloepukika wakati wa kugundua hali mbaya za kisaikolojia.</p>\n<p>Bila shaka, hali mbaya za ndani zinaweza kurekebishwa kupitia taratibu sahihi.</p>\n<p>Kwa kuwa maisha ya ndani ni sumaku inayovutia matukio ya nje, tunahitaji kwa dharura kuondoa hali mbaya za kisaikolojia kutoka akilini mwetu.</p>\n<p>Kurekebisha hali mbaya za kisaikolojia ni muhimu wakati mtu anataka kubadilisha kimsingi asili ya matukio fulani yasiyotakikana.</p>\n<p>Kubadilisha uhusiano wetu na matukio fulani inawezekana ikiwa tunaondoa hali za kisaikolojia zisizo na maana ndani yetu.</p>\n<p>Hali za nje zenye uharibifu zinaweza kuwa zisizo na madhara na hata zenye kujenga kupitia urekebishaji wa akili wa hali mbaya za ndani.</p>\n<p>Mtu anaweza kubadilisha asili ya matukio yasiyopendeza yanayotokea kwetu, anapotakasika kwa undani. Yeyote ambaye harekebishi kamwe hali mbaya za kisaikolojia, akijiamini sana, anakuwa mwathirika wa hali.</p>\n<p>Kuweka utaratibu katika nyumba yetu ya ndani iliyo vurugika ni muhimu, wakati mtu anataka kubadilisha mkondo wa maisha mabaya.</p>\n<p>Watu hulalamika juu ya kila kitu, wanateseka, wanalia, wanalalamika, wangependa kubadilisha maisha, kutoka kwa bahati mbaya wanayojikuta, kwa bahati mbaya hawafanyi kazi juu yao wenyewe.</p>\n<p>Watu hawataki kugundua kwamba maisha ya ndani huvutia hali za nje na kwamba ikiwa hizi ni zenye uchungu, ni kwa sababu ya hali za ndani zisizo na maana.</p>\n<p>Nje ni onyesho tu la ndani, anayebadilika ndani huleta mpangilio mpya wa vitu.</p>\n<p>Matukio ya nje hayangekuwa muhimu sana, kama jinsi ya kuitikia kwao.</p>\n<p>Je, ulibaki mtulivu mbele ya mtukanaji? Je, ulipokea kwa furaha maonyesho yasiyopendeza ya wenzako?</p>\n<p>Uliitikiaje ukosefu wa uaminifu wa mpendwa wako? Je, ulijiacha ubebwe na sumu ya wivu? Je, uliua? Je, uko gerezani?</p>\n<p>Hospitali, makaburi, magereza, yamejaa watu wanyofu waliojitolea ambao waliitikia kwa njia isiyo ya maana matukio ya nje.</p>\n<p>Silaha bora ambayo mtu anaweza kutumia katika maisha, ni hali sahihi ya kisaikolojia.</p>\n<p>Mtu anaweza kuwapokonya silaha wanyama wakali na kufichua wasaliti, kupitia hali sahihi za ndani.</p>\n<p>Hali mbaya za ndani hutufanya kuwa wahasiriwa wasio na ulinzi wa uovu wa kibinadamu.</p>\n<p>Jifunze kukabiliana na matukio yasiyopendeza zaidi ya maisha ya vitendo na mtazamo sahihi wa ndani…</p>\n<p>Usijitambulishe na tukio lolote; kumbuka kuwa kila kitu kinapita; jifunze kuona maisha kama sinema na utapokea faida…</p>\n<p>Usisahau kwamba matukio yasiyo na thamani yanaweza kukuelekeza kwenye bahati mbaya, ikiwa huondoa hali mbaya za ndani kutoka akilini mwako.</p>\n<p>Kila tukio la nje linahitaji, bila shaka, tiketi inayofaa; yaani, hali sahihi ya kisaikolojia.</p>"
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
const url = "src/content/docs/lag/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
