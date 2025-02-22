import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Digwyddiadau Personol",
  "locale": "cy",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Digwyddiadau Personol",
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
    "set:html": "<p>Mae hunan-arsylwi personol dwfn ar y Hunan yn dod yn anochel wrth geisio darganfod cyflyrau seicolegol anghywir.</p>\n<p>Yn ddi-os, gellir cywiro cyflyrau mewnol anghywir trwy weithdrefnau cywir.</p>\n<p>Gan fod y bywyd mewnol fel magnet sy’n denu digwyddiadau allanol, mae angen i ni, ar frys mwyaf anochel, ddileu cyflyrau seicolegol anghywir o’n psyche.</p>\n<p>Mae cywiro cyflyrau seicolegol anghywir yn hanfodol pan ddymunir newid yn sylfaenol natur digwyddiadau annymunol penodol.</p>\n<p>Mae newid ein perthynas â digwyddiadau penodol yn bosibl os byddwn yn dileu cyflyrau seicolegol hurt penodol o’n mewn.</p>\n<p>Gallai sefyllfaoedd allanol dinistriol ddod yn ddiniwed a hyd yn oed yn adeiladol trwy gywiro’n ddeallus gyflyrau mewnol anghywir.</p>\n<p>Gall rhywun newid natur y digwyddiadau annymunol sy’n digwydd i ni, pan fydd yn puro’n agos atom. Mae pwy bynnag na fydd byth yn cywiro cyflyrau seicolegol hurt, gan gredu ei fod yn gryf iawn, yn dod yn ddioddefwr amgylchiadau.</p>\n<p>Mae rhoi trefn ar ein tŷ mewnol anhrefnus yn hanfodol, pan ddymunir newid cwrs bywyd truenus.</p>\n<p>Mae pobl yn cwyno am bopeth, yn dioddef, yn crio, yn protestio, byddent yn hoffi newid bywyd, dianc o’r anffawd y maent ynddi, yn anffodus nid ydynt yn gweithio ar eu hunain.</p>\n<p>Nid yw pobl eisiau sylweddoli bod y bywyd mewnol yn denu amgylchiadau allanol a bod hyn yn achosi cyflyrau mewnol hurt os ydynt yn boenus.</p>\n<p>Dim ond adlewyrchiad o’r tu mewn yw’r tu allan, pwy bynnag sy’n newid yn fewnol sy’n creu trefn newydd o bethau.</p>\n<p>Ni fyddai digwyddiadau allanol byth mor bwysig â’r ffordd o ymateb iddynt.</p>\n<p>A arhosasoch yn llonydd gerbron y sarhaus? A dderbynioch yn garedig amlygiadau annymunol eich cymdogion?</p>\n<p>Sut ymatebasoch i anffyddlondeb yr un a garwyd? A ganiatawyd i chi eich hun gael eich cario i ffwrdd gan wenwyn cenfigen? A laddasoch chi? Ydych chi yn y carchar?</p>\n<p>Mae ysbytai, mynwentydd neu banthionau, carchardai, yn llawn o bobl onest anghywir a ymatebodd mewn ffordd hurt i ddigwyddiadau allanol.</p>\n<p>Y ffordd orau y gall dyn ei defnyddio mewn bywyd yw cyflwr Seicolegol cywir.</p>\n<p>Gall rhywun ddiarfogi bwystfilod a datgelu bradwyr, trwy gyflyrau mewnol priodol.</p>\n<p>Mae cyflyrau mewnol anghywir yn ein gwneud ni’n ddioddefwyr diamddiffyn o drygioni dynol.</p>\n<p>Dysgwch sut i wynebu digwyddiadau mwyaf annymunol bywyd ymarferol gydag agwedd fewnol briodol…</p>\n<p>Peidiwch â chysylltu eich hun ag unrhyw ddigwyddiad; cofiwch fod popeth yn mynd heibio; dysgwch weld bywyd fel ffilm a byddwch yn derbyn y manteision…</p>\n<p>Peidiwch ag anghofio y gallai digwyddiadau heb unrhyw werth eich arwain i dranc, os na fyddwch yn dileu’r cyflyrau mewnol anghywir o’ch Psyche.</p>\n<p>Mae angen tocyn priodol ar bob digwyddiad allanol, yn ddiamau; hynny yw, y cyflwr Seicolegol cywir.</p>"
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
const url = "src/content/docs/cy/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cy/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cy/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
