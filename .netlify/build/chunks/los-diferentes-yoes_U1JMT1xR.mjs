import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Mitindo mingi ya mimi",
  "locale": "swc",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Mitindo mingi ya mimi",
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
    "set:html": "<p>Nyama anaye fikiri vibaya anayeitwa mutu, kweli hana umoja wake mwenyewe wa maana.</p>\n<p>Hakuna shaka, hii ukosefu wa umoja wa kiakili katika binadamu ndio sababu ya shida nyingi na machungu.</p>\n<p>Mwili wa kimwili ni umoja kamili na unafanya kazi kama mwili mzima, isipokuwa kama una ugonjwa.</p>\n<p>Lakini, maisha ya ndani ya binadamu kwa njia yoyote ile sio umoja wa kiakili.</p>\n<p>Jambo kubwa kuliko yote, licha ya kile shule mbali mbali za aina ya Uongo-Esoteric na Uongo-Uganga zinasema, ni ukosefu wa shirika la kiakili katika kina cha ndani cha kila mtu.</p>\n<p>Hakika katika hali kama hizo, hakuna kazi yenye usawa kama nzima, katika maisha ya ndani ya watu.</p>\n<p>Binadamu, kuhusu hali yake ya ndani, ni wingi wa kisaikolojia, jumla ya “Mimi”.</p>\n<p>Wajinga walioelimika wa enzi hii ya giza, wanamwabudu “MIMI”, wanamfanya mungu, wanamweka kwenye madhabahu, wanamwita “Mimi MWINGINE”, “MIMI JUU”, “MIMI MTAKATIFU”, nk., nk., nk.</p>\n<p>Hawataki kugundua “Wenye akili” wa enzi hii nyeusi tunayoishi, kwamba “Mimi Juu” au “Mimi Chini”, ni sehemu mbili za Ego moja iliyo na wingi…</p>\n<p>Binadamu hakika hana “MIMI WA KUDUMU” lakini umati wa “Mimi” mbalimbali wasio na akili na wasio na maana.</p>\n<p>Mnyama duni anayeitwa mtu vibaya, anafanana na nyumba iliyo katika fujo ambapo badala ya bwana, kuna watumishi wengi ambao wanataka daima kutoa amri na kufanya kile wanachotaka…</p>\n<p>Kosa kubwa la Uongo-Esotericism na Uongo-Uganga wa bei nafuu, ni kudhani kwamba wengine wanamiliki au kwamba mtu ana “MIMI WA KUDUMU NA ASIYEBADILIKA” bila mwanzo na bila mwisho…</p>\n<p>Ikiwa wale wanaofikiria hivyo wangeamsha fahamu hata kwa muda mfupi, wangeweza kuonyesha wazi wenyewe, kwamba Binadamu mwenye akili kamwe huwa si sawa kwa muda mrefu…</p>\n<p>Nyama anaye fikiri kiakili kutoka kwa mtazamo wa kisaikolojia, anabadilika kila wakati…</p>\n<p>Kufikiria kwamba ikiwa mtu anaitwa Luis daima ni Luis, inasababisha kitu kama mzaha mbaya sana…</p>\n<p>Huyo mtu anayeitwa Luis ana ndani yake “Mimi” wengine, egos wengine, ambao huonyesha kupitia utu wake katika nyakati tofauti na ingawa Luis hapendi uchoyo, “Mimi” mwingine ndani yake - tumwite Pepe - anapenda uchoyo na kadhalika…</p>\n<p>Hakuna mtu yeyote aliye sawa kila mara, hakika haihitajiki kuwa na hekima sana ili kugundua wazi mabadiliko mengi na migongano ya kila mtu…</p>\n<p>Kudhani kwamba mtu anamiliki “MIMI WA KUDUMU NA ASIYEBADILIKA” hakika ni matumizi mabaya kwa jirani na kwako mwenyewe…</p>\n<p>Ndani ya kila mtu wanaishi watu wengi, “Mimi” wengi, hii inaweza kuthibitishwa na wewe mwenyewe na moja kwa moja, mtu yeyote aliyeamka, mwenye ufahamu…</p>"
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
const url = "src/content/docs/swc/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
