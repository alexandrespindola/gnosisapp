import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Emiringaaniro y'Obuntu Bwingi",
  "locale": "cgg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Emiringaaniro y'Obuntu Bwingi",
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
    "set:html": "<p>Ekishoro ekirikwenda kushobya ekitetwa omuntu, mazima tikirimu obumwe obuhikire.</p>\n<p>Tikirikushobora, okubura obumwe bw’omutima omu muntu, nikyo kireeta oburemeezi n’obusaasi bwingi.</p>\n<p>Omubiri gw’enyama guri kimwe gukora nk’ekintu kimwe, kutooreka ngu gurwaire.</p>\n<p>Kwonka, amagara g’omunda g’omuntu tigari bumwe bw’omutima.</p>\n<p>Ekisingireyo obubi aha byoona, n’obu abeesigwa b’ebishomyo by’ebishuba n’eby’obuhanga bwa mpamba baakugamba bata, n’okubura entebeekateeka y’omutima omu mutima gw’omuntu weena.</p>\n<p>Buzima omu mbeera nk’ezi, tihariho omurimo ogurikukora omu bwire obuhingwire, omu magara g’omunda g’abantu.</p>\n<p>Omuntu, aha mbeera ye y’omunda, n’obutari bumwe bw’omutima, okugata hamwe kwa “Ndi”.</p>\n<p>Abatazikwetegyereza ab’obwire obu obw’omwirima, nibaramya “NDI”, nibamugira Ruhanga, nibamuteeka aha itambiro, nibamweta “NDI ONDI”, “NDI OMUHANGO”, “NDI ENTAAMAINE”, n’ebindi, n’ebindi, n’ebindi.</p>\n<p>Tibatendera kwetegyereza “abanyabwenge” b’emyaka egi emibi ei turimu, ngu “NDI OMUHANGO” nari “NDI OWA HANSI”, n’emitwaro ebiri y’Ego emingi…</p>\n<p>Omuntu mazima tareihireho “NDI Ow’Eriima” kureka omubungo gw’emiringo ya “Ndi” etarikumana n’etarikwetegyereza.</p>\n<p>Enyama yoona etarikwetegyereza etetwa omuntu, emeesire nk’enju erimu akajumo omwanya gw’omwami gumwe, harimu abaheereza baingi abarikwenda obwire bwona okutegeka n’okukora eki barikwenda…</p>\n<p>Enshobe enkuru y’obuhangwa bwa mpamba obushabire, n’okuteekateeka ngu abandi baine nari ngu omuntu aine “NDI Ow’Eriima Otariihinduka” ataine kutandika n’ahaheru…</p>\n<p>Abo abarikuteekateeka batyo baazinduka omu bwengye n’obu bwakuba obumwe bw’akanya, bari kubasa kworekwa obumwe, ngu omuntu atakora nk’omuntu obwire bwingi…</p>\n<p>Enyama erikwetegyereza okuruga omu mitima, eri kuhinduka obutoosha…</p>\n<p>Okuteekateeka ngu omuntu yeetwa Luis obutoosha ni Luis, nikireetera nk’okushamba kw’obusaasi bwingi…</p>\n<p>Omuntu ogwo arikweetwa Luis aine omunda ye “Ndi” abandi, Egos abandi, abarikworeka obuntu bwe omu bwire butarikushushana n’obu Luis atarikukunda omutima gw’obusheeshe, “Ndi” ondi omuri we - tumwete Pepe - akunda omutima gw’obusheeshe kandi nikwo kirikugyenda…</p>\n<p>Tihariho omuntu orikumana obutoosha, mazima tiri bwetaagisa kuba omunyabwenge kukwetegyereza eby’okuhinduka bingi n’eby’okureetera okuhakana kwa buri omuntu…</p>\n<p>Okuteekateeka ngu omuntu aine “NDI Ow’Eriima Otariihinduka” nikireetera okukora ebintu bibi aha muriraanwa kandi nawe…</p>\n<p>Omunda ya buri muntu harimu abantu baingi, “Ndi” baingi, eki nokubasa kukyetegyereza nawe omu muringo oguhikire, omuntu weena azindukire, orimu obwengye…</p>"
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
const url = "src/content/docs/cgg/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cgg/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cgg/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
