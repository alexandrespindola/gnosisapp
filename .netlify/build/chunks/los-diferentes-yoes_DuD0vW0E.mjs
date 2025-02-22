import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Y Gwahanol Iau",
  "locale": "cy",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Y Gwahanol Iau",
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
    "set:html": "<p>Nid oes gan y Mamal Rhesymegol a elwir yn gamarweiniol yn ddyn, unigolyddiaeth ddiffiniedig mewn gwirionedd.</p>\n<p>Heb os, y diffyg undod Seicolegol hwn yn y Humanoid, yw achos cymaint o anawsterau a chwerwder.</p>\n<p>Mae’r corff corfforol yn uned gyflawn ac yn gweithio fel cyfanwaith organig, oni bai ei fod yn sâl.</p>\n<p>Serch hynny, nid yw bywyd mewnol y Humanoid mewn unrhyw ffordd yn undod seicolegol.</p>\n<p>Y peth mwyaf difrifol o’r cyfan, er gwaethaf yr hyn y mae’r gwahanol ysgolion o fath Seudo-Esoterig a Seudo-Ocultista yn ei ddweud, yw absenoldeb trefniadaeth Seicolegol yng nghalon fewnol pob pwnc.</p>\n<p>Yn sicr, mewn amodau o’r fath, nid oes unrhyw waith cytûn fel cyfanwaith, ym mywyd mewnol pobl.</p>\n<p>O ran ei gyflwr mewnol, mae’r Humanoid yn amrywiaeth seicolegol, yn swm o “Fi”.</p>\n<p>Mae ignorantiaid goleuedig yr oes dywyll hon, yn addoli’r “FI”, yn ei ddyrchafu, yn ei roi ar yr allorau, yn ei alw’n “ALTER EGO”, “FI UWCH”, “FI DDWYFOL”, ac ati, ac ati, ac ati.</p>\n<p>Nid ydynt am i’r “Doethion” o’r oes ddu hon yr ydym yn byw ynddi, sylweddoli bod “Fi Uwch” neu “Fi Is” yn ddwy ran o’r un Ego lluosog…</p>\n<p>Yn sicr nid oes gan y Humanoid “FI Barhaol” ond llu o wahanol “Fi” Is-ddynol a chwerthinllyd.</p>\n<p>Mae’r anifail deallus gwael a elwir yn gamarweiniol yn ddyn, yn debyg i dŷ mewn anhrefn lle yn lle meistr, mae yna lawer o weision sydd bob amser eisiau gorchymyn a gwneud beth bynnag a fynnant …</p>\n<p>Y camgymeriad mwyaf o Seudo-Esoterigiaeth a Seudo-Ocultiaeth rhad, yw tybio bod gan eraill neu fod ganddynt “FI Barhaol ac Annewidiol” heb ddechrau na diwedd …</p>\n<p>Pe bai’r rhai sy’n meddwl fel hyn yn deffro ymwybyddiaeth hyd yn oed am eiliad, gallent ddangos yn glir drostynt eu hunain, nad yw’r Humanoid rhesymegol byth yr un fath am amser hir …</p>\n<p>O safbwynt seicolegol, mae’r mamal deallus yn newid yn barhaus …</p>\n<p>Mae meddwl, os yw person yn cael ei alw’n Luis, ei fod bob amser yn Luis, yn rhywbeth fel jôc o flas gwael iawn …</p>\n<p>Mae gan y pwnc hwnnw a elwir yn Luis ynddo’i hun “Fi” eraill, egos eraill, sy’n mynegi eu hunain trwy ei bersonoliaeth ar wahanol adegau ac er nad yw Luis yn hoffi trachwant, mae “Fi” arall ynddo - gadewch i ni ei alw’n Pepe - yn hoffi trachwant ac yn y blaen …</p>\n<p>Nid yw unrhyw berson yr un fath yn barhaus, nid oes angen bod yn ddoeth iawn i sylweddoli’n llawn newidiadau a gwrthddywediadau dirifedi pob pwnc …</p>\n<p>Mae tybio bod gan rywun “Fi Barhaol ac Annewidiol” yn cyfateb, wrth gwrs, i gamdriniaeth tuag at gymydog rhywun ac at ei hun …</p>\n<p>Y tu mewn i bob person mae llawer o bobl yn byw, llawer o “Fi”, gall unrhyw berson effro, ymwybodol wirio hyn drosto’i hun ac yn uniongyrchol …</p>"
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
const url = "src/content/docs/cy/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cy/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cy/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
