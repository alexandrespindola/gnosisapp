import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Fundaa",
  "locale": "dje",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Fundaa",
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
    "set:html": "<p>Gundumay beeriyaŋ ra, iri ga tammaasa dumi dumiyaŋ kaŋ yaŋ ga dambara alhakku. Arzɛkoy goy da keyyoŋ da baaru beeriyaŋ, waati fooyaŋ i ga taabi gumo. .. Goykoy taakeydaŋ wala borey kaŋ yaŋ ga goro jine, waati fooyaŋ i ga funa farhã beeriyaŋ ra.</p>\n<p>Arzɛkalborey beeriyaŋ boŋ ga taabi jannubeeriyaŋ ra, da wayborey arzɛkakoy ga koyro gumo i ze kaŋ ga tilasandi sabbay se…</p>\n<p>Arzɛkalborey duniya ra ga manandi fofo kaŋ yaŋ go kargaŋ guryaŋ ra, zamana hinka hinka din ra, i si hin ka goro “garjikoy” laalayaŋ laalaŋ.</p>\n<p>Borey kaŋ yaŋ ga goro laamana bonkooyaŋ ra ga gaabu alkaa, i si to da yanci, i ga dira koyne borey kaŋ yaŋ ga ti da takuba kaŋ yaŋ ga taŋ teete.</p>\n<p>Iri ma taamuyaŋ din duma da kyara. Iri ga tilasandi ka bay kaŋ ngey ne ga ti fundu. Boro kulu to nda cimi ka miila mate kaŋ a ga ba.</p>\n<p>Hay fo kaŋ yaŋ borey ga ci, cimi no boro si bay hay fo, fundu ga ciya tangama kaŋ boro kulu si faham.</p>\n<p>Waati kaŋ borey ga ba ka bayrandi iri da bariyaŋ i fundu, i ga taali hay fo, duma da adadu, zaamayaŋ, dsb., i ga funa waati kaŋ i ga te i sariyaŋ.</p>\n<p>Borey miskina din ga faham kaŋ i sariyaŋ si to zama alhayti, duma da zaamayaŋ, no ga ti bayray fo filme gaa, a guma si to.</p>\n<p>A ga to da yazi ka bay “hayyaŋ bayraŋ”, alhayti kulu ga tammaasa mate wala mate laakal din.</p>\n<p>Hayyaŋ ga ciya dugu ra da alhayti ga ciya bayray fo, alhayti kaŋ yaŋ go bayraŋ si to.</p>\n<p>Faham ga ciya dugu ra kaŋ ti alheri wala laaleyaŋ ciyaŋ, laakal ciyaŋ, sappa, dabu ciyaŋ, humay ciyaŋ, hakika ciyaŋ, kayni ciyaŋ, suubanandi ciyaŋ, baarakandi ciyaŋ ngey boŋ, hayyaŋ kaŋ ti ka funa ka goro farhã ra, funa dumi ra, dsb., dsb., dsb.</p>\n<p>Da cimi hayyaŋ dugu ra ga hin ka tammaasa da cimi da hayyaŋ bayraŋ wala ka ye ka fun taaleyaŋ se, wala ka laala tammaasa kulu nda nga.</p>\n<p>Alkasu kulu ra, hayyaŋ da alhayti ga duma. Alwaati kulu alhaala si tammaasa da cimi nda hayyaŋ beeriyaŋ.</p>\n<p>Hayyaŋ dugu ra kaŋ ga funa ga hin ka laala ka tammaasa nda nga. Hayyaŋ dugu ra kaŋ ga funa ga hin ka laala ka tammaasa nda nga. Alhayti kaŋ yaŋ go kayni alwaati beeri ra, waati kaŋ i kaa, iri ga funa kaŋ hay fo laala.</p>\n<p>Da cimi hay fo laala hayyaŋ dugu ra kaŋ ga tilasandi ka gam nda hayyaŋ bayraŋ.</p>\n<p>Alwaati beeriyaŋ ra alhayti kaŋ boro si kayni ga ye ka ciya hay fo kaŋ yaŋ ga nandi alwaati beeriyaŋ iri se.</p>"
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
const url = "src/content/docs/dje/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/dje/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/dje/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
