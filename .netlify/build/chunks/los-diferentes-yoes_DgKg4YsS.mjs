import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Zviumbwa Zvakasiyana",
  "locale": "sn",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Zviumbwa Zvakasiyana",
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
    "set:html": "<p>Nyama inoyamwisa inofunga zvisizvo inonzi munhu, haitombovi nehunhu hwakajeka.</p>\n<p>Pasina mubvunzo kushaikwa kwekubatana kwepfungwa mumunhu, ndiko kunokonzeresa matambudziko akawanda neshungu.</p>\n<p>Muviri wenyama chinhu chakakwana chinoshanda sezvose zviri pamuviri, kunze kwekunge uchirwara.</p>\n<p>Asi, hupenyu hwemukati hwemunhu hausi kubatana kwepfungwa.</p>\n<p>Chinhu chakanyanya kukomba pane zvese izvi, zvisinei nezvinotaurwa nezvikoro zvakasiyana-siyana zveSeudo-Esoteric uye Seudo-Ocultist, kushaikwa kwesangano repfungwa mukati memoyo wemunhu wese.</p>\n<p>Zvechokwadi mumamiriro ezvinhu akadaro, hapana basa rinowirirana sezvose, muhupenyu hwemukati hwevanhu.</p>\n<p>Munhu, maererano nemamiriro ake emukati, huzhinji hwepfungwa, huwandu hwe “Ini”.</p>\n<p>Vasingazivi vakadzidza venguva ino yerima, vanonamata “INI”, vanoirumbidza, vanoiisa paatari, vanoidana kuti “ALTER EGO”, “INI REPAMUSORO”, “INI ROUBUMWARI”, nezvimwewo, nezvimwewo.</p>\n<p>Havadi kuziva “Vanoziva zvose” vezera rino dema ratiri kurarama, kuti “Ini Yepamusoro” kana “Ini Yakaderera”, zvikamu zviviri zveEgo imwechete yakawanda…</p>\n<p>Munhu haana zvechokwadi “INI YENGUVA DZOSE” asi vazhinji ve “Ini” dzakasiyana-siyana dzisiri dzevanhu uye dzisinganzwisisiki.</p>\n<p>Mhuka ine njere inoshevedzwa zvisizvo munhu, yakafanana neimba isina kurongeka panzvimbo pomuridzi mumwe, pane varanda vazhinji vanoda kurayira nguva dzose uye kuita zvavanoda…</p>\n<p>Chikanganiso chikuru cheSeudo-Esotericism uye Seudo-Occultism yakachipa, kufunga kuti vamwe vane kana kuti vane “INI YENGUVA DZOSE Isingachinji” isina mavambo kana magumo…</p>\n<p>Kana avo vanofunga saizvozvo vamuka kuziva kunyangwe kwechinguvana, vanogona kuratidza zvakajeka ivo pachavo, kuti munhu anonzwisisa haatombori mumwechete kwenguva yakareba…</p>\n<p>Nyama inoyamwisa inofunga kubva pakuona kwepfungwa, iri kuchinja nguva dzose…</p>\n<p>Kufunga kuti kana munhu achinzi Luis anogara ari Luis, zvinoita sejee rinotyisa kwazvo…</p>\n<p>Munhu iyeye anonzi Luis ane mamwe “Ini” mukati make, mamwe maegos, anozviratidza kuburikidza nehunhu hwake panguva dzakasiyana uye kunyangwe Luis asingadi ruchiva, imwe “Ini” maari - ngatitomude Pepe - anoda ruchiva uye zvichingodaro…</p>\n<p>Hapana munhu akafanana nenzira inoenderera mberi, hazvidi kuti uve akachenjera kwazvo kuti uzive zvizere shanduko dzisingaverengeki nekupesana kwemunhu wese…</p>\n<p>Kufunga kuti mumwe munhu ane “INI YENGUVA DZOSE Isingachinji” zvinoreva kubva pakutanga kushungurudzwa kwemuvakidzani uye kwauri pachako…</p>\n<p>Mukati memunhu mumwe nomumwe mune vanhu vazhinji vanogara, “Ini” dzakawanda, izvi zvinogona kusimbiswa iwe pachako uye nenzira yakananga, nomunhu wese akamuka, anoziva…</p>"
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
const url = "src/content/docs/sn/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
