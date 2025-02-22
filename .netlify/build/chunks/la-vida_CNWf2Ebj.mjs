import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Y Fywyd",
  "locale": "cy",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Y Fywyd",
    "order": 6
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
    "set:html": "<p>Yn nhir ymarferol bywyd, rydym bob amser yn darganfod cyferbyniadau syfrdanol. Mae pobl gyfoethog gyda phreswylfeydd godidog a llawer o gyfeillgarwch, weithiau’n dioddef yn ofnadwy. .. Mae proletariaid gostyngedig yn gweithio gyda phic a rhaw neu bobl o’r dosbarth canol, fel arfer yn byw mewn hapusrwydd llwyr weithiau.</p>\n<p>Mae llawer o archiffilwyr yn dioddef o analluedd rhywiol ac mae matronau cyfoethog yn crio’n chwerw am anffyddlondeb eu gŵr…</p>\n<p>Mae’r cyfoethog ar y ddaear yn ymddangos fel fwlturiaid mewn cewyll aur, yn ystod yr amseroedd hyn ni allant fyw heb “warchodwyr”…</p>\n<p>Mae dynion gwladol yn llusgo cadwyni, nid ydynt byth yn rhydd, maent yn crwydro ym mhob man wedi’u hamgylchynu gan bobl arfog hyd y dannedd…</p>\n<p>Gadewch i ni astudio’r sefyllfa hon yn fanylach. Mae angen i ni wybod beth yw bywyd. Mae pawb yn rhydd i leisio barn fel y mynnant…</p>\n<p>Beth bynnag a ddywedant, yn sicr nid oes neb yn gwybod dim, mae bywyd yn broblem nad oes neb yn ei deall…</p>\n<p>Pan fydd pobl yn dymuno dweud wrthym hanes eu bywyd yn rhad ac am ddim, maent yn dyfynnu digwyddiadau, enwau a chyfenwau, dyddiadau, ac ati, ac yn teimlo’n fodlon wrth adrodd eu straeon…</p>\n<p>Mae’r bobl druain hynny’n anwybodus bod eu straeon yn anghyflawn oherwydd bod digwyddiadau, enwau a dyddiadau, ond yn agwedd allanol y ffilm, mae’r agwedd fewnol ar goll…</p>\n<p>Mae’n fater brys i wybod “cyflyrau ymwybyddiaeth”, mae cyflwr meddwl penodol yn cyfateb i bob digwyddiad.</p>\n<p>Mae’r cyflyrau’n fewnol ac mae’r digwyddiadau’n allanol, nid yw’r digwyddiadau allanol yn bopeth…</p>\n<p>Deellir wrth gyflyrau mewnol y tueddiadau da neu ddrwg, y pryderon, iselder, ofergoeliaeth, ofn, amheuaeth, trugaredd, hunan-ystyriaeth, gor-amcangyfrif o’ch hun; cyflyrau teimlo’n hapus, cyflyrau llawenydd, ac ati, ac ati, ac ati.</p>\n<p>Heb os, gall cyflyrau mewnol gyfateb yn union i ddigwyddiadau allanol neu gael eu hachosi ganddynt, neu beidio â chael unrhyw berthynas â hwy…</p>\n<p>Beth bynnag, mae cyflyrau a digwyddiadau yn wahanol. Nid yw digwyddiadau bob amser yn cyfateb yn union i gyflyrau perthnasol</p>\n<p>Gallai cyflwr mewnol digwyddiad dymunol beidio â chyfateb iddo. Gallai cyflwr mewnol digwyddiad annymunol beidio â chyfateb iddo. Digwyddiadau yr arhoswyd amdanynt am amser hir, pan ddaethant roeddem yn teimlo bod rhywbeth ar goll…</p>\n<p>Yn sicr roedd y cyflwr mewnol cyfatebol ar goll a ddylai fod wedi’i gyfuno â’r digwyddiad allanol…</p>\n<p>Lawer gwaith mae’r digwyddiad na ddisgwyliwyd yn digwydd i fod yr un sydd wedi rhoi’r eiliadau gorau inni…</p>"
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
const url = "src/content/docs/cy/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cy/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cy/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
