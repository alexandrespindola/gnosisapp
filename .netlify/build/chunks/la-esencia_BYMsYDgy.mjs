import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Motó ya likambo",
  "locale": "ln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Motó ya likambo",
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
    "set:html": "<p>Likambo oyo ekómisaka mwana nyonso ya sika abotami kitoko mpe ya kolinga mingi ezali Esansi na ye; yango moko nde ezali bosolo na ye ya solo…</p>\n<p>Kokola ya Esansi na ekelamu nyonso, ya solo mpenza ezali moke mpenza, ebandi…</p>\n<p>Nzoto ya moto ekolaka mpe etombwanaka engebene mibeko ya biologie ya lolenge, kasi makoki wana ezali na bango moko moke mpenza mpo na Esansi…</p>\n<p>Na ntembe te Esansi ekoki kokola yango moko kozanga lisungi, na moke mpenza…</p>\n<p>Kolobaka polele mpe kozanga maloba ya kobomba, tokoloba ete bokoli ya Esansi ya espontané mpe ya naturel, ekoki kaka na boumeli ya mibu misato, minei mpe mitano ya mbotama, elingi koloba, na etape ya liboso ya bomoi…</p>\n<p>Bato bakanisaka ete bokoli mpe botombwani ya Esansi esalemaka ntango nyonso na ndenge ya kokoba, engebene mécanique ya évolution, kasi Gnosticisme Universel eteyaka polele ete likambo yango esalemaka boye te…</p>\n<p>Mpo ete Esansi ekola mingi, likambo moko ya ntina mingi esengeli kosalema, likambo moko ya sika esengeli kosalema.</p>\n<p>Nalingi kolobela na ndenge ya makasi mosala likoló na yo moko. Botombwani ya Esansi ekoki kaka na ndimbola ya misala ya mayele mpe bampasi ya bolingo malamu…</p>\n<p>Esengeli kososola ete misala oyo etali te makambo ya mosala, banki, mosala ya mabaya, mosala ya mason, kobongisa banzela ya engbunduka to makambo ya biro…</p>\n<p>Mosala oyo ezali mpo na moto nyonso oyo asili kokolisa bomoto; ezali likambo ya Psychologie…</p>\n<p>Biso nyonso toyebi ete tozali na kati na biso moko oyo babengi EGO, YO, NGAYO MOKO, YANGO MOKO…</p>\n<p>Na mawa, Esansi ezwami kati, ekangami kati na ECO mpe yango ezali mawa.</p>\n<p>Kosilisa YO Psychologique, kobebisa biloko na yango ya mabe, ezali likambo ya lombango, ya koboya te, ya kokitisa nsima te… ndenge wana nde ezali ndimbola ya mosala likoló na yo moko.</p>\n<p>Tokokaki ata mokolo moko te kosikola Esansi kozanga kobebisa liboso YO Psychologique…</p>\n<p>Na Esansi ezali na Lingomba, BUDDHA, Mayele, biteni ya mpasi ya Tata na biso oyo azali na Likoló mpe bansango nyonso oyo tosengeli na yango mpo na AUTO-REALISATION INTIME YA MOZALISI.</p>\n<p>Moto moko te akokaki kosilisa YO Psychologique kozanga kolongola liboso biloko ya बॉटो te oyo tomemi na kati…</p>\n<p>Tosengeli kokómisa putulu mabe ya nsɔmɔ ya bantango oyo: zuwa oyo na mawa ekómi resɔ́rɛ sekrɛ́ ya kosala; lokoso oyo ekoki te oyo ekomisi bomoi mabe mingi; maloba ya mbindo; lokuta oyo ebotaka makama mingi; kolangwa masanga; pite ya mbindo oyo ezali na nsolo mabe; etc., etc., etc.</p>\n<p>Ntango mbeba nyonso wana ezali kokóma mputulu ya cosmique, Esansi longola kobima, ekokola mpe ekotombwana na boyokani…</p>\n<p>Na ntembe te, ntango YO Psychologique akufi, Esansi engɛngaka na kati na biso…</p>\n<p>Esansi ya ofele epesaka biso kitoko ya kati; uta na kitoko ya ndenge wana ebimaka esengo ya kokoka mpe Bolingo ya solo…</p>\n<p>Esansi ezali na ndimbola mingi ya kokoka mpe nguya ya likamwisi ya bomoto…</p>\n<p>Ntango “Tokufi na kati na Biso Moko”, ntango tosilisi YO Psychologique, tosepelaka na ndimbola ya motuya mpe nguya ya Esansi…</p>"
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
const url = "src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
