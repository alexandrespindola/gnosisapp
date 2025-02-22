import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ketesyek cheuinee eng'ala",
  "locale": "kln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Ketesyek cheuinee eng'ala",
    "order": 3
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
    "set:html": "<p>Maotinyei ko kikimuch konyor kole, nebo wendi matematiik cheiso kobun kole kibendi…</p>\n<p>Kongoi, kitokchin konyor kole wendi ako, ma ara ne kounot nebo ale, amu ne bo kounot nebo koon…</p>\n<p>Ye tinyei konyor wendi ako nebo siret, kikas kome kosir kobun ago, kogonyei kobun koro, kikomuch kosir kokotok koro ago, ma sekunde bo ale, ma sekunde bo koon…</p>\n<p>Kekei bo yu kole, konyor wendi ago…</p>\n<p>Konyor kogonyei kobun, kekei aeng nebo barak chetonon: nebo yu kobendi, nebo ara…</p>\n<p>Koteshei kole nebo yu ngala kotok, kikalil kobendi “Kiprono ak tukul amu”, “Kiplagat ak tukul ye kiaror”, “Kiplimo ak tukul amu”…</p>\n<p>Koteshei kole nebo ara ngala kwong’u, kikalil keteset nebo olel, nebo ketesyok che chang’aek…</p>\n<p>Ye kinyor bendi, ye kakimuch tuguuk kobun, ye ma kitoi ak tuguuk nebo ole ak boit, kobun kebe kimuch kosir ne bo ara…</p>\n<p>Kongoi ma iyoti kakeisto kong’ala kotugul boit che ng’emut; koyai tuguk kobendi ko kibendi; boit che chong’ong’, maktaba, karani, ibara, simu, piik, muet, ak kwong’u…</p>\n<p>Kimong’uneek, koche king’ala kotugul amu kegoishee nebo ole, kobun kebe koiyotoi koishee nebo ole, kotugul amu.</p>\n<p>Koche kimwai, koche kililtoi, koche kigoishee koonot nebo muren nebo ole, nebo ng’etuny, nebo kumet, kobun kibe kotugul bendi, kimuch kobendi ak tuguuk nebo siret kobun…</p>\n<p>Tuguuk kobendi kebe ng’alalet nebo ketesyok nebo ara. Ma tinyei kobendi ne bo olel nebo chang’aek, ame komuch tuguuk kobendi…</p>\n<p>Tuguuk kokimuch koon kole ne bo tukokset; kikimuch koret che kisir kogonyei. Komuch kochang’ kimuche kobendi kogonyei kobendi…</p>\n<p>Kakai, muren kigoishee kogonyei ng’emut nebo koret, nebo karani, kobun kebe kigoishee kobendi…</p>\n<p>Muren ako, ye kigonyei kobendi, ye kikimuch koret ak kitoi kotugul bendi…</p>\n<p>Ye kiyai akil, ye kiyai koret kole tuguuk kotugul, kole ole kebe kokel, kole ole kobendi kobendi kotugul nebo ng’won, kobun kebe keiyai cheiso…</p>\n<p>Ye kongoi kole koret kobun ko ng’ala ko ng’emut, ak kitebiet nebo Akil…</p>\n<p>Koteshei kole kimuche kobendi ak kitebiet che kisir ole…</p>\n<p>Kimong’uneek!, Kalil kiishee kogoishee. Ye keiyai kiyai kemwai; ye kiyai kokumwaek, kililtoi. Kililai ye kililtoi; kiwanganai ye kiwanganai; ma kilal chelel; cheishee keche kotokchin kotugul kobendi ak kitebiet.</p>\n<p>Muren kotugul koimuch kobendi ne bo yu, kiishee koret, kwong’u kiishee kobendi ne bo koret kobendi…</p>\n<p>Ye kimuch kobendi ak kitebiet che kisir, kobun kebe kiyai “Ketesyok nebo Ara”.</p>\n<p>Kebe ng’ala koret kobendi ak “Ketesyok nebo olel nebo Tukokset”.</p>"
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
const url = "src/content/docs/kln/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
