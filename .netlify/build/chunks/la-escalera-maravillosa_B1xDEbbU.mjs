import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ngazi ya Ajabu",
  "locale": "swc",
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
    "set:html": "<p>Lazima tutamani mabadiliko ya kweli, kutoka katika mazoea haya ya kuchosha, kutoka katika maisha haya ya kimitambo tu, ya kukasirisha…</p>\n<p>Jambo la kwanza tunalohitaji kuelewa kwa uwazi kamili ni kwamba kila mmoja wetu, iwe ni ubwanyenye au mletariat, tajiri au wa tabaka la kati, tajiri au maskini, kwa kweli yuko katika Ngazi fulani ya Kuwa…</p>\n<p>Ngazi ya Kuwa ya mlevi ni tofauti na ya mtu asiyekunywa pombe na ile ya kahaba ni tofauti sana na ile ya mwanamwali. Hili tunalosema haliwezi kukanushwa, haliwezi kupingwa…</p>\n<p>Tunapofika sehemu hii ya sura yetu, hatupotezi chochote kwa kufikiria ngazi ambayo inaenea kutoka chini kwenda juu, wima na kwa hatua nyingi sana…</p>\n<p>Bila shaka, tuko kwenye hatua mojawapo ya hizi; chini ya hatua kutakuwa na watu wabaya zaidi kuliko sisi; juu ya hatua kutakuwa na watu bora kuliko sisi…</p>\n<p>Katika Mstari huu wa Ajabu, katika ngazi hii ya ajabu, ni wazi kwamba tunaweza kupata Ngazi zote za Kuwa… kila mtu ni tofauti na hakuna mtu anayeweza kupinga hili…</p>\n<p>Bila shaka hatuzungumzii sasa nyuso mbaya au nzuri, wala si suala la umri. Kuna vijana na wazee, wazee ambao tayari wako karibu kufa na watoto wachanga…</p>\n<p>Suala la wakati na miaka; jambo hilo la kuzaliwa, kukua, kuendeleza, kuoa, kuzaa, kuzeeka na kufa, ni la kipekee kwa Mstari mlalo…</p>\n<p>Katika “Ngazi ya Ajabu”, katika Mstari wima dhana ya wakati haifai. Katika hatua za ngazi kama hiyo tunaweza kupata tu “Ngazi za Kuwa”…</p>\n<p>Matumaini ya kimitambo ya watu hayafai kwa chochote; wanaamini kwamba baada ya muda mambo yatakuwa bora; hivyo ndivyo babu zetu na babu zetu walivyofikiri; ukweli umekuja kuonyesha kinyume chake…</p>\n<p>“Ngazi ya Kuwa” ndiyo muhimu na hii ni Wima; tuko kwenye hatua lakini tunaweza kupanda hatua nyingine. ..</p>\n<p>“Ngazi ya Ajabu” tunayozungumzia na ambayo inarejelea “Ngazi tofauti za Kuwa”, kwa hakika, haina uhusiano wowote na wakati wa mstari…</p>\n<p>“Ngazi ya Kuwa” ya juu zaidi iko mara moja juu yetu kutoka wakati hadi wakati…</p>\n<p>Haiko katika siku zijazo za mbali za mlalo, lakini hapa na sasa; ndani yetu sisi wenyewe; katika Mstari wima…</p>\n<p>Ni dhahiri na mtu yeyote anaweza kuelewa, kwamba mistari miwili - Mstari mlalo na Mstari wima - hukutana kila wakati ndani ya Saikolojia yetu na kuunda Msalaba…</p>\n<p>Utu hukua na kufunguka katika mstari mlalo wa Maisha. Huzaliwa na kufa ndani ya wakati wake wa mstari; ni wa kupita; hakuna kesho kwa utu wa mtu aliyekufa; siyo Kuwa…</p>\n<p>Ngazi za Kuwa; Kuwa mwenyewe, siyo ya wakati, haina uhusiano wowote na Mstari mlalo; inapatikana ndani yetu sisi wenyewe. Sasa, katika Mstari wima…</p>\n<p>Ingedhihirika kuwa ni upuuzi kumtafuta Kuwa wetu nje ya sisi wenyewe…</p>\n<p>Haifai sana kuweka yafuatayo kama matokeo: Vyeo, digrii, kupandishwa vyeo, n.k., katika ulimwengu wa nje wa kimwili, kwa njia yoyote ile ingeleta msisimko wa kweli, tathmini upya ya Kuwa, hatua ya kwenda kwenye hatua ya juu katika “Ngazi za Kuwa”…</p>"
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
const url = "src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/swc/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
