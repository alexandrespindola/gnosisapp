import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ngantadi",
  "locale": "ff",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Ngantadi",
    "order": 4
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
    "set:html": "<p>Ko woni moƴƴi e teddugol ngel ardaagal e nder suka heddii ko ko woni Hoyre maggel; ngel ko hoore maggel woni goonga maggel…</p>\n<p>Mawninde Hoyre nder koomu nduu, goonga ko seedaaɗum, fuɗɗorde…</p>\n<p>Ndeewu neɗɗo mawni e timmi e laawol nguurndam, ammaa nduuɗi meeɗaa wonde ko ndimaagu Hoyre…</p>\n<p>Gooto alaa fellere Hoyre ina waawi mawninde hoore mum nder gootel, nder fotde famarde…</p>\n<p>E haala goonga e ɓanngunngo, mawninde e jeytaaki Hoyre, ina waawi wonde tan nder jeego, nayi e jowi duuɓi, ko woni, nder fuɗɗorde nguurndam…</p>\n<p>Yimɓe ina miijo mawninde e timminde Hoyre ina waawi wonde e nder ndimaagu, e laawol nguurndam, ammaa Gnosiism duniyaaru ina jannga ɓanngunngo ko woni waɗaa nii…</p>\n<p>Ngam Hoyre mawninde ɓurugol, huunde timmunde ina waawi wonde, huunde hesere ina waawi waɗde.</p>\n<p>Miɗo welaa haalde e ɓanngunngo golle e hoore. Mawninde Hoyre ina waawi wonde tan e nder golle miijo e ɗuuɗal…</p>\n<p>Ina hasi faamu golle ɗee ngonaa jaŋde golle, bankiiji, njamndi, cuɗeele, jaŋde laabi leydi bee golle biro…</p>\n<p>Golle ɗee ko ngam neɗɗo fuu timmini hoore mum; ko huunde Psikoloji…</p>\n<p>Men fuu men ina nganndi men ina jogii nder hoore mum men ko wi’ee ego, mi, hoore am, hoore mum…</p>\n<p>E hoore mun mun Hoyre ina yoolaa, ina joggee, nder eco e ɗum ko haawni.</p>\n<p>Tikkugo miijo Psikoloji, seertaaki ko boni nder magge, ko haawi, ko newi, ko ko haɗaa… ko ɗum woni fahamgol golle e hoore.</p>\n<p>Men meeɗaa yaafugo Hoyre sey men seerti miijo Psikoloji…</p>\n<p>Nder Hoyre woni Diina, Buddha, ganndal, bammbaaɗe metteeɗe baaba men woni e asamaani e ganndal fuu ko men nange ngam hoore timminde nder hoore men.</p>\n<p>Gooto alaa ina waawi wujjugo miijo Psikoloji sey o wujji ko alaa neɗɗo ngoni nder men…</p>\n<p>Ina hasi men yoorugo e buutu bonnude jaŋde: hasidi ko ko boni ko woni maaje jaŋde; tikkugo ko newiɗaa ko waɗi nguurndam ko meeree: bonnude mbeleeɗe; felooji waɗi metteeɗe; borroji; zinaajo ko fooli… ekn, ekn, ekn.</p>\n<p>E nokku bonnuji ɗii ina yooroo e poolaraawo duniyaru, Hoyre e nder yaafugo, ina mawna e timmina e nder ndimaagu…</p>\n<p>Gooto alaa felere nde miijo Psikoloji maayi, ina jaɓɓe nder men Hoyre…</p>\n<p>Hoyre yaafotooɗe ina okka men moƴƴere nder hoore; e nder moƴƴere ndee ina yaara weltugo timmunngo e yidde goonga…</p>\n<p>Hoyre ina jogii faamuuji timminde e baawɗe jeeyɗe…</p>\n<p>Nde men “Maayi nder Hoore Men”, nde men tikki miijo Psikoloji, men ina weltii faamuuji e baawɗe Hoyre…</p>"
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
const url = "src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
