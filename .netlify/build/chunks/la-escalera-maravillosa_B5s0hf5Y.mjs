import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Danho Rinoshamisa",
  "locale": "sn",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Danho Rinoshamisa",
    "order": 2
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
    "set:html": "<p>Tinofanira kusuwa shanduko yechokwadi, kubuda mune ino tsika inofinha, yeiyi hupenyu hwehumhizha chete, hunonetesa…</p>\n<p>Chinhu chekutanga chatinofanira kunzwisisa zvakajeka ndechekuti mumwe nemumwe wedu angave mabhuruku kana kuti vanhuwo zvavo, vakasununguka kana kuti vepakati, vakapfuma kana kuti varombo, ari chaizvoizvo pane imwe Level of Being…</p>\n<p>Level of Being yechidhakwa yakasiyana neyeasinganwi doro uye ye pfambi yakasiyana zvikuru neye mhandara. Izvi zvatiri kutaura hazvirambiki, hazvipokanidziki…</p>\n<p>Patinosvika pachikamu chino chegwaro redu, hapana chatinorasikirwa nacho kana tikafungidzira manera anotambanudzira kubva pasi kuenda kumusoro, akatwasuka uye ane nhanho zhinji…</p>\n<p>Pasina mubvunzo pane imwe nhanho yeizvi ndipo patinowanikwa; nhanho dziri pasi tichawana vanhu vakatoipa kutidarika; nhanho dziri pamusoro tichawana vanhu vakati nakei kutidarika…</p>\n<p>Mune iyi Vertical yakasarudzika, mune ino manera inoshamisa, zviri pachena kuti tinogona kuwana ese Levels of Being… munhu wese akasiyana uye hapana anogona kuramba izvi…</p>\n<p>Pasina mubvunzo hatisi kutaura nezve zviso zvakashata kana zvakanaka, kana kuti inyaya yezera. Kune vanhu vadiki nevakuru, vakwegura vave kuda kufa nevana vacheche…</p>\n<p>Nyaya yenguva nemakore; nyaya yekuzvarwa, kukura, kukura, kuroora, kubereka, kukwegura nekufa, ndeyeye Horizontal chete…</p>\n<p>Mu “Manera Anoshamisa”, muVertical pfungwa yenguva haigone. Pamatanho eiyo chiyero tinogona kungowana “Levels of Being”…</p>\n<p>Tariro yehunyanzvi yevanhu haibatsiri chinhu; vanotenda kuti nekufamba kwenguva zvinhu zvichanaka; madzitateguru edu nemadzitateguru vaifunga saizvozvo; chokwadi chakatiratidza zvinopesana…</p>\n<p>“Level of Being” ndicho chinhu chakakosha uye ichi iVertical; tiri panhanho imwe asi tinogona kukwira kune imwe nhanho…</p>\n<p>“Manera Anoshamisa” atiri kutaura nezvawo uye anoreva “Levels of Being” akasiyana, zvirokwazvo, hapana chekuita nenguva yakatwasuka…</p>\n<p>“Level of Being” yakakwirira iri pamusoro pedu kubva nguva nenguva…</p>\n<p>Haisi mune ramangwana riri kure rehorizontal, asi pano uye zvino; mukati medu; muVertical…</p>\n<p>Zviri pachena uye chero munhu anogona kunzwisisa, kuti mitsara miviri - Horizontal neVertical - inosangana nguva nenguva mukati mePsychology yedu uye inoumba Muchinjikwa…</p>\n<p>Unhu hunokura uye hunofambira mberi mumutsara weHorizontal weHupenyu. Hunozvarwa nekufa mukati menguva yahunotemerwa; husingaperi; hapana mangwana ehunhu hwemunhu akafa; hahusi Being…</p>\n<p>Levels of Being; Being pachayo, haisi yenguva, haina chekuita neHorizontal Line; inowanikwa mukati medu. Ikozvino, muVertical…</p>\n<p>Zvingave zvisina musoro kutsvaga Being yedu kunze kwedu…</p>\n<p>Hazvina kunaka kutaura zvinotevera sechirevo: Mazita, madhigirii, kukwidziridzwa, nezvimwewo, munyika yekunze yekunze, hazvizokonzeresa kukudzwa kwechokwadi, kuongororwa patsva kweBeing, kupinda panhanho yepamusoro mu “Levels of Being”…</p>"
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
const url = "src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
