import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Il-Ħajja",
  "locale": "mt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Il-Ħajja",
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
    "set:html": "<p>Fil-qasam tal-ħajja prattika dejjem niskopru kuntrasti li jissorprendu. Nies sinjuri b’residenza magnífica u ħafna ħbieb, xi drabi jsofru b’mod terribbli. .. Proletarji umli bil-pikk u l-pala jew nies mill-klassi tan-nofs, ġeneralment jgħixu xi drabi f’hena sħiħa.</p>\n<p>Ħafna arċimiljunarji jsofru minn impotenza sesswali u matruni sinjuri jibku bl-imrar l-infedeltà tar-raġel…</p>\n<p>Is-sinjuri tad-dinja jidhru avultuni bejn gaġeġ tad-deheb, f’dawn iż-żminijiet ma jistgħux jgħixu mingħajr “bodyguards”…</p>\n<p>L-irġiel tal-istat ikaxkru ktajjen, qatt ma jkunu ħielsa, jimxu kullimkien imdawrin b’nies armati sa snienhom…</p>\n<p>Nistudjaw din is-sitwazzjoni b’aktar reqqa. Jeħtieġ li nkunu nafu x’inhi l-ħajja. Kull wieħed huwa liberu li jesprimi l-opinjoni tiegħu kif irid…</p>\n<p>Tgħid x’tgħid, ċertament ħadd ma jaf xejn, il-ħajja tirriżulta fi problema li ħadd ma jifhem…</p>\n<p>Meta n-nies jixtiequ jirrakkuntawna l-istorja ta’ ħajjithom b’xejn, isemmu avvenimenti, ismijiet u kunjomijiet, dati, eċċ., u jħossu sodisfazzjon meta jirrakkontaw l-istejjer tagħhom…</p>\n<p>Dawk in-nies foqra ma jafux li l-istejjer tagħhom mhumiex kompluti għaliex avvenimenti, ismijiet u dati, huwa biss l-aspett estern tal-film, nieqes l-aspett intern…</p>\n<p>Huwa urġenti li nkunu nafu “stati ta’ koxjenza”, lil kull avveniment jikkorrispondi dan jew dak l-istat animiku.</p>\n<p>L-istati huma interjuri u l-avvenimenti huma esterni, l-avvenimenti esterni mhumiex kollox…</p>\n<p>Ifhem bħala stati interjuri d-dispożizzjonijiet tajbin jew ħżiena, it-tħassib, id-dipressjoni, is-superstizzjoni, il-biża’, s-suspett, il-ħniena, l-awtokonsiderazzjoni, l-istima żejda ta’ Ruħu; stati ta’ kif tħossok ferħan, stati ta’ ferħ, eċċ., eċċ., eċċ.</p>\n<p>Bla dubju, l-istati interjuri jistgħu jikkorrispondu eżattament mal-avvenimenti esterni jew jiġu oriġinati minn dawn tal-aħħar, jew ma jkollhom l-ebda relazzjoni magħhom…</p>\n<p>Fi kwalunkwe każ l-istati u l-avvenimenti huma differenti. Mhux dejjem is-suċċessi jikkorrispondu eżattament ma’ stati affini</p>\n<p>L-istat interjuri ta’ avveniment pjaċevoli jista’ ma jikkorrispondix miegħu. L-istat interjuri ta’ avveniment spjaċevoli jista’ ma jikkorrispondx miegħu. Avvenimenti mistennija għal żmien twil, meta ġew ħassejna li kien jonqos xi ħaġa…</p>\n<p>Ċertament kien jonqos l-istat interjuri korrispondenti li kellu jingħaqad mal-avveniment estern…</p>\n<p>Ħafna drabi l-avveniment li ma kienx mistenni jispiċċa jkun dak li pprovdilna l-aqwa mumenti…</p>"
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
const url = "src/content/docs/mt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mt/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
