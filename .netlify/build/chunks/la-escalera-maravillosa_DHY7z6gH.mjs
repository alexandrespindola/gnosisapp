import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ngazi ya Ajabu",
  "locale": "sw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Ngazi ya Ajabu",
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
    "set:html": "<p>Lazima tutamani mabadiliko ya kweli, kutoka katika utaratibu huu wa kuchosha, maisha haya ya kimakanika tu, yanayochosha…</p>\n<p>Jambo la kwanza tunalopaswa kuelewa kwa uwazi kabisa ni kwamba kila mmoja wetu, awe ni mtu wa tabaka la juu au mfanyakazi, mwenye uwezo au wa tabaka la kati, tajiri au masikini, kwa kweli yuko katika Kiwango fulani cha Kuwa…</p>\n<p>Kiwango cha Kuwa cha mlevi ni tofauti na cha asiye kunywa pombe, na cha kahaba ni tofauti sana na cha bikira. Hili tunalolisema haliwezi kukanushwa, haliwezi kupingwa…</p>\n<p>Tunapofika sehemu hii ya sura yetu, hatupotezi chochote tukifikiria ngazi inayoinuka kutoka chini kwenda juu, wima na yenye ngazi nyingi sana…</p>\n<p>Bila shaka yoyote, tuko katika ngazi mojawapo kati ya hizi; ngazi za chini kutakuwa na watu wabaya kuliko sisi; ngazi za juu watakuwepo watu wazuri kuliko sisi…</p>\n<p>Katika Wima hii ya ajabu, katika ngazi hii ya ajabu, ni wazi kwamba tunaweza kupata Viwango vyote vya Kuwa… kila mtu ni tofauti na hakuna anayeweza kupinga hili…</p>\n<p>Bila shaka, hatuzungumzii sasa sura mbaya au nzuri, wala si suala la umri. Kuna watu vijana na wazee, wazee ambao wako tayari kufa na watoto wachanga…</p>\n<p>Suala la wakati na miaka; hili la kuzaliwa, kukua, kuendeleza, kuoa, kuzaa, kuzeeka na kufa, ni la Ulalo pekee…</p>\n<p>Katika “Ngazi ya Ajabu”, katika Wima dhana ya wakati haipo. Katika ngazi za ngazi hiyo tunaweza kupata tu “Viwango vya Kuwa”…</p>\n<p>Tumaini la kimakanika la watu halifai chochote; wanaamini kwamba baada ya muda mambo yatakuwa bora; hivyo ndivyo babu na bibi zetu walivyofikiria; ukweli umeonyesha kinyume chake…</p>\n<p>“Kiwango cha Kuwa” ndicho muhimu na hili ni Wima; tuko kwenye ngazi lakini tunaweza kupanda ngazi nyingine…</p>\n<p>“Ngazi ya Ajabu” tunayozungumzia na ambayo inahusu “Viwango tofauti vya Kuwa”, hakika, haina uhusiano wowote na wakati wa mstari…</p>\n<p>“Kiwango cha Kuwa” cha juu zaidi kiko mara moja juu yetu kila wakati…</p>\n<p>Hakiko katika siku zijazo za mbali za ulalo, bali hapa na sasa; ndani yetu wenyewe; katika Wima…</p>\n<p>Ni dhahiri na mtu yeyote anaweza kuelewa, kwamba mistari miwili - Ulalo na Wima - inakutana kila wakati ndani ya Akili zetu na kuunda Msalaba…</p>\n<p>Utu huendelea na kufunuka katika mstari Ulalo wa Maisha. Unazaliwa na kufa ndani ya wakati wake wa mstari; ni wa kupita; hakuna kesho kwa utu wa mtu aliyekufa; si Kuwa…</p>\n<p>Viwango vya Kuwa; Kuwa yenyewe, si ya wakati, haina uhusiano wowote na Mstari Ulalo; inapatikana ndani yetu wenyewe. Sasa, katika Wima…</p>\n<p>Itakuwa wazi kabisa kutafuta Kuwa kwetu wenyewe nje yetu…</p>\n<p>Si vibaya kusema kama matokeo yafuatayo: Vyeo, shahada, kupandishwa vyeo, n.k., katika ulimwengu wa nje wa kimwili, kwa vyovyote vile havisababishi kuinuliwa halisi, tathmini upya ya Kuwa, kupanda ngazi ya juu katika “Viwango vya Kuwa”…</p>"
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
const url = "src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sw/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
