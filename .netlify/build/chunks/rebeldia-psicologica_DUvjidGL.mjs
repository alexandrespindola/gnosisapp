import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kakiyokchinyeet neeti neeti",
  "locale": "kln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-educacion-fundamental.webp-2d51a7828a2b1309555be27f7e2a61a0.webp",
  "sidebar": {
    "label": "32. Kakiyokchinyeet neeti neeti",
    "order": 32
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
    "set:html": "<p>Kit ne boisyotok komwa kaat boisiek alak lokote kote kobun nebo dunia ne tee eng kamuget nebo kobunotet kobendi kobaru amu kokochi alak bichotok, ko kamwa komie kobunotet ne bo taunet ne bo bichotok, ko yaa eng Europe nebo alemu amu meng’isiek, ago Afrika ne yaamu amu kotugul meng’isiek, eng lowai nebo Vedas alemu, ago eng Indies nebo Kasarta, eng Austria ago China.</p>\n<p>Ng’atutiet nyo nebo kiy, ng’atutiet nebo kaat ne miach kalyet eng ng’atutiet kobendi kobaru, ko ye iteshe bik che somok, koleji ago yunibesitit.</p>\n<p>Ko tee eng saa nebo kabisa nebo kapkirwok. Ago ngotugul kobisa eng ng’ony sobondo ago eng ng’atutiet. Kobisa Kapindet, Motoksyek, Mercancías de Lujo, alak alak.</p>\n<p>Mokorista kibendi, ko kasei koleji che industriali, yunibesitit, ko kibendi kaboristo che somok.</p>\n<p>Amu saa nebo kabisa nebo kapkirwok kobisa, ko ng’alek tugul eng ng’onyi ko kebeji kobochi kobunotet nebo saet. Bik chemii kelyet eng ng’otugul ago kebeji kobunotet.</p>\n<p>Ng’alechini ne itun eng saa nebo kabisa nebo kapkirwok kobisa, ko yaa kaiteshe amu bendi somanet nebo ng’atutiet ko kigochin ng’alek che miach.</p>\n<p>“Ola ne Lel” ko miach eng bik che somok. Ngaale koteshi kwo alak, ko ng’otugul kobendi kowolel, ng’otugul kobendi kochemi, ko kikong’et, ko kokong’egei.</p>\n<p>Kogochi kobochi kobunotet, kokochi kaimut, kogochi kaimut ne bo kobunotet nebo saet, kogochi kaimut kobendi kobochi ng’alek che somok amu koimut alak bik, kobendi ko katam kolechini ne bo itun, kowendi kobunotet ne bo itun.</p>\n<p>Ko yaa kaiteshe kolee kelyet kobochi bomet ago koyamu muny.</p>\n<p>Amu saa nebo kelyet ako kogochi kobunotet, ko bik chemii eng leget, eng yootet, eng kotet, eng lowai kakebechi kolee ko yaa kobunotet, ng’alechini, ago kokong’egei kabisa kobendi eng tuiyet, kobendi eng akengeet, kobendi eng kamaiywet, alak alak alak.</p>\n<p>Ng’atutiet tugul nebo kamukta ko kigochin kelyet ako kogochi kobunotet, bik chemii kasarta, kobendi kelyet eng imbaat.</p>\n<p>Bik chemii kasarta kobendi eng ng’otugul, kokong’egei kobendi eng somanet ne yaamu, kolee ko alak bik, kobendi eng ng’alechini ne bo itun, kobendi eng ng’alechini ne bo itun, kobendi eng che miach.</p>\n<p>Kalenjin chemii eng ng’ony, che somok che kaat, che yaamu kaiteshe kobendi kobaru ng’alek che miach eng bomet, ago eng bik che somok alemu kokokochin.</p>\n<p>Chemii cheebo rebeldia che somok che kamwa. Baita: Rebeldia Psicológica violenta. Aeng’: Rebeldia Psicológica profunda ne bo INTELIGENCIA.</p>\n<p>Rebeldia nebo baita ko Reaccionario conservador ago retardatario. Rebeldia nebo aeng’ ko REVOLUCIONARIO.</p>\n<p>Eng rebeldia nebo baita, ko keteshe REFORMADOR ne koremba nguo che yaamu ago kokobaat kotinye.</p>"
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
const url = "src/content/docs/kln/educacion-fundamental/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/educacion-fundamental/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/educacion-fundamental/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
