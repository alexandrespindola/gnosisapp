import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Matukio Binafsi",
  "locale": "sw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Matukio Binafsi",
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
    "set:html": "<p>Uchunguzi wa kina wa kibinafsi wa Nafsi ni muhimu sana linapokuja suala la kugundua hali mbaya za kisaikolojia.</p>\n<p>Bila shaka, hali mbaya za ndani zinaweza kurekebishwa kupitia taratibu sahihi.</p>\n<p>Kwa vile maisha ya ndani ni sumaku inayovutia matukio ya nje, tunahitaji haraka sana kuondoa hali mbaya za kisaikolojia kutoka akili zetu.</p>\n<p>Kurekebisha hali mbaya za kisaikolojia ni muhimu wakati mtu anataka kubadilisha kimsingi asili ya matukio fulani yasiyotakiwa.</p>\n<p>Kubadilisha uhusiano wetu na matukio fulani, inawezekana ikiwa tunaondoa ndani yetu hali fulani za kisaikolojia zisizo na maana.</p>\n<p>Hali za nje zenye uharibifu zinaweza kuwa zisizo na madhara na hata za kujenga kupitia marekebisho ya akili ya hali mbaya za ndani.</p>\n<p>Mtu anaweza kubadilisha asili ya matukio yasiyopendeza yanayotukia, anapotakasa ndani. Yeyote asiyerekebisha hali mbaya za kisaikolojia, akijiona kuwa na nguvu sana anakuwa mwathirika wa mazingira.</p>\n<p>Kuweka utaratibu katika nyumba yetu ya ndani iliyo vurugika ni muhimu, wakati mtu anataka kubadilisha mkondo wa maisha mabaya.</p>\n<p>Watu hulalamika juu ya kila kitu, wanateseka, wanalia, wanalalamika, wangependa kubadilisha maisha, kutoka kwenye bahati mbaya wanayojikuta, kwa bahati mbaya hawafanyi kazi juu yao wenyewe.</p>\n<p>Watu hawataki kugundua kuwa maisha ya ndani huvutia hali za nje na kwamba ikiwa hizi zinaumiza ni kwa sababu ya hali mbaya za ndani.</p>\n<p>Mambo ya nje ni onyesho tu la mambo ya ndani, yeyote anayebadilika ndani huleta utaratibu mpya wa mambo.</p>\n<p>Matukio ya nje hayangewahi kuwa muhimu kama jinsi tunavyoitikia.</p>\n<p>Je, ulikaa kimya mbele ya mtukanaji? Je, ulipokea kwa furaha maonyesho yasiyopendeza ya watu wenzako?</p>\n<p>Uliitikiaje ukafiri wa mpendwa? Je, ulijiachia katika sumu ya wivu? Je, uliua? Je, uko gerezani?</p>\n<p>Hospitali, makaburi, magereza, zimejaa watu wanyofu waliofanya makosa ambao walitenda kwa njia isiyo na maana kwa matukio ya nje.</p>\n<p>Silaha bora ambayo mtu anaweza kutumia katika maisha ni hali sahihi ya Kisaikolojia.</p>\n<p>Mtu anaweza kuondoa silaha wanyama wakali na kufichua wasaliti, kupitia hali sahihi za ndani.</p>\n<p>Hali mbaya za ndani hutufanya kuwa waathirika wasio na ulinzi wa uovu wa binadamu.</p>\n<p>Jifunze kukabiliana na matukio yasiyopendeza zaidi ya maisha ya vitendo na mtazamo sahihi wa ndani…</p>\n<p>Usijitambulishe na tukio lolote; kumbuka kwamba kila kitu kinapita; jifunze kuona maisha kama sinema na utapokea faida…</p>\n<p>Usisahau kwamba matukio yasiyo na thamani yoyote yanaweza kukupeleka kwenye bahati mbaya, ikiwa huondoa hali mbaya za ndani kutoka kwa Akili yako.</p>\n<p>Kila tukio la nje linahitaji, bila shaka tiketi sahihi; yaani, hali sahihi ya Kisaikolojia.</p>"
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
const url = "src/content/docs/sw/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
