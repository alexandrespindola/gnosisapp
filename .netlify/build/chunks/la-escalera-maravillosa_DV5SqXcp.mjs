import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Escalier ya Kokamwa",
  "locale": "ln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Escalier ya Kokamwa",
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
    "set:html": "<p>Tosengeli kozala na mposa ya mbongwana ya solo, kobima na momeseno oyo ya kolɛmbisa, na bomoi oyo bobele ya masini, ya kolɛmbisa…</p>\n<p>Likambo ya liboso oyo tosengeli kokanga ntina na yango malamu mpenza ezali ete mokomoko na biso, ezala bourgeoisie to proletaire, moto ya bozwi to moto ya kati, mozwi to mobola, azali mpenza na Nivo moko boye ya Kozala…</p>\n<p>Nivo ya Kozala ya molangwi masanga ekeseni na oyo ya moto oyo amɛlaka masanga te mpe oyo ya ndumba ekeseni mpenza na oyo ya elenge mwasi. Oyo tozali koloba ezali likambo ya solo, oyo tokoki kobwaka te…</p>\n<p>Ntango tokómi na eteni oyo ya mokapo na biso, tozali kobungisa eloko te na kokanisa échelle oyo ezali komata kobanda na nse kino likoló, na lolenge ya kolongwa mpe na bitape mingi mpenza…</p>\n<p>Na ntembe te, tozali na litape moko ya yango; na bitape na nse ekozala bato mabe koleka biso; na bitape na likoló, tokomona bato malamu koleka biso…</p>\n<p>Na Verticale oyo ya kokamwa, na échelle oyo ya kitoko, ezali polele ete tokoki kokuta Nivo nyonso ya Kozala… moto na moto azali ndenge mosusu mpe moto moko te akoki kobwaka yango…</p>\n<p>Na ntembe te, tozali koloba te sikawa makambo ya bilongi mabe to kitoko, mpe ezali likambo ya bambula te. Ezali na bilenge mpe mikóló, bankɔkɔ oyo bakómi pene na kokufa mpe bana mike oyo babotami sika…</p>\n<p>Likambo ya ntango mpe ya bambula; oyo ya kobotama, kokola, kokola, kobala, kobota bana, konuna mpe kokufa, ezali bobele ya Horizontal…</p>\n<p>Na “Echelle ya Kitoko”, na Verticale likanisi ya ntango ezali te. Na bitape ya échelle motindo wana, tokoki kokuta bobele “Nivo ya Kozala”…</p>\n<p>Elikya ya masini ya bato ezali na litomba te; bandimaka ete nsima ya ntango makambo ekozala malamu; bobele bongo bankɔkɔ na biso mpe bankɔkɔ na biso bazalaki kokanisa; makambo mpenza emonisi nde likambo mosusu…</p>\n<p>“Nivo ya Kozala” nde ezali na ntina mpe oyo ezali Verticale; tozali na litape moko kasi tokoki komata na litape mosusu…</p>\n<p>“Echelle ya Kitoko” oyo tozali kolobela mpe etali “Nivo ya Kozala” ndenge na ndenge, ya solo, ezali na boyokani te na ntango ya molɔngɔ…</p>\n<p>“Nivo ya Kozala” ya likoló ezali mbala moko likoló na biso uta ntango na ntango…</p>\n<p>Ezali te na mikolo oyo ekoya ya mosika, kasi awa mpe sikoyo; na kati na biso moko; na Verticale…</p>\n<p>Ezali polele mpe moto nyonso akoki kokanga ntina, ete milɔngɔ mibale —Horizontal mpe Vertical— ekutani uta ntango na ntango na kati ya Makanisi na biso mpe esali Ekulusu…</p>\n<p>Bomoto ekolaka mpe ebimaka na molɔngɔ ya Horizontal ya Bomoi. Ebotami mpe ekufaka na kati ya ntango na yango ya molɔngɔ; ekobeba; ezali na lobi te mpo na bomoto ya moto oyo akufi; ezali Kozala te…</p>\n<p>Nivo ya Kozala; Kozala mpenza, ezali ya ntango te, ezali na boyokani te na Molɔngɔ ya Horizontal; ezali na kati na biso moko. Sikawa, na Verticale…</p>\n<p>Ekozala mpenza likambo ya bozoba koluka Kozala na biso moko na libanda ya biso moko…</p>\n<p>Ezali mabe te kotya lokola corollaire likambo oyo elandi: Mitindo, diplôme, komata na mosala, mpe bongo na mokili ya mosuni ya libanda, na lolenge moko te ekobimisa kokumisama ya solo, kotalela lisusu Kozala, kokende na litape ya likoló na “Nivo ya Kozala”…</p>"
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
const url = "src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ln/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
