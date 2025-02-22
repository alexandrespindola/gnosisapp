import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kitabu ca mitimago",
  "locale": "lag",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Kitabu ca mitimago",
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
    "set:html": "<p>Owek kera piny iwiye wa luwakiji wa atin, ni kidongoi me matematika e ijimunete i apei.</p>\n<p>Apugan ka, kidongoi apei mam imong aloto, komo nako alimor…</p>\n<p>Apugan noi ajokisikin kidongoi kon, myo ijoikin epei aleu, e ijimunete ite, epei aleu kede alimor, komo kidongoi kede alimor.</p>\n<p>Akiro ibare ibaren kede ajukisikin, a itunga me Lakristo, e ijimunete i kidongoi kon.</p>\n<p>Ebala ijoikin epei aleu, nako akirwa ario: Akiro ibare kede ajukisikin…</p>\n<p>Eyalama ka, kiro ibare epone “poyopoyo”, myo ikoku “Vicente kede lumamun lo”, “Villegas kede apugan noi alimor”, “Don Raimundo kede lumamun lo”…</p>\n<p>Eyalama ka, ajukisikin epone apugan; e ewala i lumai amumunyete, i lumai i lumakirebolushina…</p>\n<p>Apugan noi ekaru akwap, apugan noi edol akwap, apugan noi mam enyami kede ijaasi kede ebala i lumajok, ebala edol epei ajukisikin…</p>\n<p>Nyo kon emaam atin aloku alotor ejaasi; iyuun epei aleu elootoi enyami kede akwap; elootoi ebala i lumajok, eposia, ideni, oloto, emesani, idenyi, amai, musana, ing’ang’i…</p>\n<p>Iluteng’ana, lumoi elootoi epuoyo adumun amwaisa, amam angituk akamunete, komo anyami, mam amwaisa, mam enyami kede akwap, epone atin aloku alotor ejaasi.</p>\n<p>Lumoi iyalaara, lumoi ilila, lumoi emam akonyenete, lumoi eposia aloku atip, emam atin aloku alotor, enyami akwap a atin, emam aloku alotor ejaasi…</p>\n<p>Edol akwap e ebala itak ajukisikin. Mam itunga noi edola ebala i lumakirebolushina, apugan noi mam edola akwap a atin…</p>\n<p>Ebala epone, edol edol aloku atip; edol ajukisikin aloku ebala noi eloto ijoikin. Ebalu edol aleu edol ebala noi eloto…</p>\n<p>Ebala amio, itunga noi edol ajukisikin aloku enyamitai aloto, eposia i lumaimar, eposia i lumapolotika atin aloku akwap a atin…</p>\n<p>Itunga kon, apugan noi ejwoka epei aleu, apugan noi ebala amwaisa, ebala edol akwap, edol atin aloku alotor ejaasi…</p>\n<p>Apugan noi enyooro ki pinyi, apugan noi edol atip, apugan noi alotor edol akwap, ki pinyi ebala lo akwap…</p>\n<p>Apugan noi enyami akwap a atin, e ebala lo epone “ing’ang’i e atip”, idumuni noi elukere, ere epone anyiunete…</p>\n<p>Ebala elootoi elootoi enyami atin aloku alotor, e akwap akonyenete kede atin atin aloku alotor ejaasi…</p>\n<p>Eyalama ka, ilutunga iyalaara atin aloku alotor ebala i lumajok…</p>\n<p>Ilutunga iyalaara, imong ilutunga apei. Apugan noi ekokori iyale, apugan noi iyalaara; apugan noi enyami, iyoonye. Ipokya ki poi, iyalaara ki poi; mam itunga ilimunete; imong amwaisa edumunitai imong ilila, imong ing’ang’ aloku ajukisikino.</p>\n<p>Itunga noi, edol ebala ibare, edol edumuni, imong amwaisa iloto noi edumunitai…</p>\n<p>Apugan noi edol elootoi enyami, ki pinyi “Ebala ajukisikin”.</p>\n<p>Etumunete itunga edumuni “Kiwang lo akwap”, elootoi emam atin “Erebulyono aloku atip”.</p>"
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
const url = "src/content/docs/lag/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lag/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
