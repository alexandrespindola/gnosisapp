import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Nafsi Tofauti",
  "locale": "sw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Nafsi Tofauti",
    "order": 10
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
    "set:html": "<p>Mnyama Mwenye Akili anayeitwa kimakosa binadamu, hasa hana utambulisho maalum.</p>\n<p>Bila shaka ukosefu huu wa umoja wa Kisaikolojia katika Mwanadamu, ndio sababu ya ugumu mwingi na uchungu.</p>\n<p>Mwili wa kimwili ni kitengo kamili na hufanya kazi kama kitu kimoja cha kikaboni, isipokuwa kama mgonjwa.</p>\n<p>Hata hivyo, maisha ya ndani ya Mwanadamu kwa vyovyote vile si kitengo cha kisaikolojia.</p>\n<p>Jambo zito zaidi kuliko yote, licha ya kile ambacho shule mbalimbali za aina ya Uongo-Esoteriki na Uongo-Ufichaji zinasema, ni ukosefu wa shirika la Kisaikolojia katika kina cha ndani cha kila mtu.</p>\n<p>Hakika katika hali kama hizo, hakuna kazi ya usawa kama kitu kizima, katika maisha ya ndani ya watu.</p>\n<p>Mwanadamu, kuhusiana na hali yake ya ndani, ni wingi wa kisaikolojia, jumla ya “Mimi”.</p>\n<p>Wajinga wenye elimu wa enzi hii ya giza, wanaabudu “MIMI”, wanaifanya mungu, wanaweka kwenye madhabahu, wanaita “BADALA YANGU”, “MIMI MKUU”, “MIMI WA KIMUNGU”, nk, nk, nk.</p>\n<p>Hawataki kutambua “Wajuzi” wa enzi hii nyeusi tunayoishi, kwamba “Mimi Mkuu” au “Mimi Mdogo”, ni sehemu mbili za Ego moja iliyo wingi…</p>\n<p>Mwanadamu hakika hana “MIMI wa Kudumu” bali umati wa “Mimi” tofauti Wasio Binadamu na wasio na maana.</p>\n<p>Mnyama duni wa kiakili anayeitwa kimakosa binadamu, anafanana na nyumba iliyo katika fujo ambapo badala ya bwana mmoja, kuna watumishi wengi ambao wanataka daima kuamuru na kufanya wanachotaka…</p>\n<p>Kosa kubwa zaidi la Uongo-Esoteriki na Uongo-Ufichaji rahisi, ni kudhani kwamba wengine wanamiliki au kwamba mtu ana “MIMI wa Kudumu na Asiyebadilika” bila mwanzo na bila mwisho…</p>\n<p>Ikiwa hao wanaofikiria hivyo wangeamsha fahamu hata kwa muda mfupi, wangeweza kuona wazi kwao wenyewe, kwamba Mwanadamu mwenye akili kamwe si yule yule kwa muda mrefu…</p>\n<p>Mnyama mwenye akili kutoka mtazamo wa kisaikolojia, anabadilika kila mara…</p>\n<p>Kufikiria kwamba ikiwa mtu anaitwa Luis daima ni Luis, ni jambo kama utani mbaya sana…</p>\n<p>Mtu huyo anayeitwa Luis ana ndani yake “Mimi” wengine, Egos wengine, ambao wanajieleza kupitia utu wake katika nyakati tofauti na ingawa Luis hapendi tamaa, “Mimi” mwingine ndani yake —tumuite Pepe— anapenda tamaa na kadhalika…</p>\n<p>Hakuna mtu aliye sawa kwa kuendelea, kweli haihitajiki kuwa na hekima sana ili kutambua kikamilifu mabadiliko mengi na utata wa kila mtu…</p>\n<p>Kudhani kwamba mtu anamiliki “Mimi wa Kudumu na Asiyebadilika” hakika ni unyanyasaji kwa jirani na kwa mtu mwenyewe…</p>\n<p>Ndani ya kila mtu wanaishi watu wengi, “Mimi” wengi, hili linaweza kuthibitishwa na yeye mwenyewe na moja kwa moja, mtu yeyote aliyeamka, mwenye fahamu…</p>"
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
const url = "src/content/docs/sw/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
