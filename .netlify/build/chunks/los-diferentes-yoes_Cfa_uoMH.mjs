import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Miye mingi",
  "locale": "lag",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Miye mingi",
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
    "set:html": "<p>Nyu nyama yeyote ilyoingwane itagiitwa muntu, kweli haina umoja ulioelezeka.</p>\n<p>Bila shaka, ukosefu huu wa umoja wa kisaikolojia ndani ya mwanadamu ndio sababu ya shida na machungu mengi.</p>\n<p>Mwili wa kimwili ni umoja kamili na hufanya kazi kama chombo kamili, isipokuwa ukiwa mgonjwa.</p>\n<p>Lakini, maisha ya ndani ya mwanadamu kwa njia yoyote ile sio umoja wa kisaikolojia.</p>\n<p>Jambo baya zaidi kuliko yote, licha ya kile ambacho shule mbalimbali za aina za uongo za esoteriki na uongo za okultisti husema, ni ukosefu wa shirika la kisaikolojia ndani kabisa ya kila mtu.</p>\n<p>Hakika katika hali kama hizo, hakuna kazi ya usawa kama nzima, katika maisha ya ndani ya watu.</p>\n<p>Mwanadamu, kuhusiana na hali yake ya ndani, ni wingi wa kisaikolojia, jumla ya “Mimi”.</p>\n<p>Wajinga walioelimika wa enzi hii ya giza, huabudu “Mimi”, huiabudu, huiweka madhabahuni, huiita “BADALA YANGU”, “Mimi Mkuu”, “Mimi Mtakatifu”, nk, nk, nk.</p>\n<p>“Wajuzi” wa enzi hii nyeusi tunayoishi hawataki kugundua kuwa “Mimi Mkuu” au “Mimi Mdogo”, ni sehemu mbili za Ego iliyounganishwa…</p>\n<p>Mwanadamu hakika hana “Mimi la Kudumu” lakini wingi wa “Mimi” tofauti, wasio wa kibinadamu na wasio na maana.</p>\n<p>Mnyama maskini wa kiakili anayeitwa mwanadamu vibaya, ni kama nyumba iliyo katika machafuko ambapo badala ya bwana mmoja, kuna watumishi wengi ambao wanataka daima kuamuru na kufanya wanachotaka…</p>\n<p>Kosa kubwa zaidi la uongo wa Esoteriki na Okultisti ya bei nafuu, ni kudhani kwamba wengine wanamiliki au kwamba mtu anamiliki “Mimi la Kudumu na Lisilobadilika” lisilo na mwanzo na lisilo na mwisho…</p>\n<p>Ikiwa wale wanaofikiri hivyo wangeamsha ufahamu hata kwa muda mfupi, wangeweza kuonyesha wazi wao wenyewe, kwamba mwanadamu mwenye akili hajawahi kuwa sawa kwa muda mrefu…</p>\n<p>Nyama mwenye akili kutoka kwa mtazamo wa kisaikolojia, anabadilika kila wakati…</p>\n<p>Kufikiri kwamba ikiwa mtu anaitwa Luis daima ni Luis, ni kama mzaha mbaya sana…</p>\n<p>Yule anayeitwa Luis ana ndani yake “Mimi” wengine, egos wengine, ambao huonyesha kupitia utu wake katika nyakati tofauti na ingawa Luis hapendi tamaa, “Mimi” mwingine ndani yake - tumwite Pepe - anapenda tamaa na kadhalika…</p>\n<p>Hakuna mtu anayefanana kila wakati, haihitajiki kuwa mwerevu sana ili kutambua mabadiliko mengi na utata wa kila mtu…</p>\n<p>Kudhani kwamba mtu anamiliki “Mimi la Kudumu na Lisilobadilika” ni sawa na unyanyasaji kwa jirani na kwa mtu mwenyewe…</p>\n<p>Ndani ya kila mtu wanaishi watu wengi, “Mimi” wengi, hili linaweza kuthibitishwa na yeye mwenyewe na moja kwa moja, mtu yeyote aliyeamka, mwenye ufahamu…</p>"
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
const url = "src/content/docs/lag/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
