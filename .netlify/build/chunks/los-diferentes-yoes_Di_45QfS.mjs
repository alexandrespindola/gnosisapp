import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L-Iji differenti",
  "locale": "mt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. L-Iji differenti",
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
    "set:html": "<p>Il-Mammiferu Razzjonali żbaljatament imsejjaħ bniedem, fir-realtà ma jippossjedix individwalità definita.</p>\n<p>Bla dubju din in-nuqqas ta’ unità Psikoloġika fil-Umanoide, hija l-kawża ta’ tant diffikultajiet u mrar.</p>\n<p>Il-ġisem fiżiku huwa unità kompluta u jaħdem bħala ħaġa sħiħa organika, sakemm ma jkunx marid.</p>\n<p>Iżda, il-ħajja interjuri tal-Umanoide bl-ebda mod mhi unità psikoloġika.</p>\n<p>L-iktar ħaġa serja minn dawn kollha, minkejja dak li jgħidu d-diversi skejjel tat-tip Pseudo-Eżoteriku u Pseudo-Okkultista, hija n-nuqqas ta’ organizzazzjoni Psikoloġika fil-qiegħ intimu ta’ kull suġġett.</p>\n<p>Ċertament f’dawn il-kundizzjonijiet, ma teżisti l-ebda ħidma armonjuża bħala ħaġa sħiħa, fil-ħajja interjuri tan-nies.</p>\n<p>L-Umanoide, fir-rigward tal-istat interjuri tiegħu, hija multipliċità psikoloġika, somma ta’ “Jien”.</p>\n<p>L-injoranti illustrati ta’ din l-epoka mudlama, jaduraw lill-“Jien”, jidolizzawh, ipoġġuh fuq l-altari, isejħulu “ALTER EGO”, “Jien Superjuri”, “Jien Divin”, eċċ., eċċ., eċċ.</p>\n<p>Ma jridux jindunaw is-“Saħħan” ta’ din l-età sewda li ngħixu fiha, li “Jien Superjuri” jew “Jien Inferjuri”, huma żewġ sezzjonijiet tal-istess Ego pluralizzat…</p>\n<p>L-Umanoide ċertament m’għandux “Jien Permanenti” iżda moltitudni ta’ “Jien” Infrahumani u assurdi differenti.</p>\n<p>L-imsejken annimal intellettwali żbaljatament imsejjaħ bniedem, huwa simili għal dar f’diżordni fejn minflok sid, jeżistu ħafna qaddejja li dejjem iridu jikkmandaw u jagħmlu dak li jaqblilhom…</p>\n<p>L-akbar żball tas-Pseudo-Eżoteriżmu u Pseudo-Okkultiżmu rħis, huwa li wieħed jassumi li l-oħrajn jippossjedu jew li wieħed għandu “Jien Permanenti u Immutabbli” mingħajr bidu u mingħajr tmiem…</p>\n<p>Kieku dawk li jaħsbu hekk iqumu koxxjenza anke jekk għal istant, ikunu jistgħu juru b’mod ċar waħedhom, li l-Umanoide razzjonali qatt ma jkun l-istess għal żmien twil…</p>\n<p>Il-mammiferu intellettwali mil-lat psikoloġiku, qiegħed jinbidel kontinwament…</p>\n<p>Li wieħed jaħseb li jekk persuna tissejjaħ Luis hija dejjem Luis, jirriżulta xi ħaġa bħal ċajta ta’ gost ħażin ħafna…</p>\n<p>Dak is-suġġett li jissejjaħ Luis għandu fih innifsu “Jien” oħra, egos oħra, li jesprimu ruħhom permezz tal-personalità tiegħu f’mumenti differenti u għalkemm Luis ma jogħġbux ir-regħba, “Jien” ieħor fih —ejja nsejħulu Pepe— jogħġbu r-regħba u hekk suċċessivament…</p>\n<p>L-ebda persuna ma hija l-istess b’mod kontinwu, verament m’hemmx bżonn li wieħed ikun għaref ħafna biex jinduna bis-sħiħ bil-bidliet u l-kontradizzjonijiet innumerabbli ta’ kull suġġett…</p>\n<p>Li wieħed jassumi li xi ħadd jippossjedi “Jien Permanenti u Immutabbli” huwa ekwivalenti mill-ewwel għal abbuż lejn il-proxxmu u lejn wieħed innifsu…</p>\n<p>Ġewwa kull persuna jgħixu ħafna nies, ħafna “Jien”, dan jista’ jivverifikah waħdu u b’mod dirett, kwalunkwe persuna mqajma, konxja…</p>"
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
const url = "src/content/docs/mt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mt/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
