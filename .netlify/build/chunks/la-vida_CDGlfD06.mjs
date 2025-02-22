import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Həyat",
  "locale": "az",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Həyat",
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
    "set:html": "<p>Praktik həyatda həmişə heyrətləndirən ziddiyyətlər aşkar edirik. Sərvətli insanlar möhtəşəm iqamətgahları və çoxlu dostları ilə bəzən dəhşətli əziyyət çəkirlər… Çəkic və kürəkli sadə proletarlar və ya orta təbəqənin insanları bəzən tam xoşbəxtlikdə yaşayırlar.</p>\n<p>Çoxlu milyarderlər cinsi gücsüzlükdən əziyyət çəkir, varlı qadınlar isə ərinin xəyanətinə acı-acı ağlayırlar…</p>\n<p>Yer üzünün zənginləri qızıl qəfəslər arasında kərkəslərə bənzəyirlər, bu günlərdə “mühafizəçilər” olmadan yaşaya bilmirlər…</p>\n<p>Dövlət adamları zəncirlər sürüyürlər, heç vaxt azad deyillər, hər yerdə dişinə qədər silahlanmış insanlarla əhatə olunmuş halda gəzirlər…</p>\n<p>Gəlin bu vəziyyəti daha dərindən araşdıraq. Həyatın nə olduğunu bilməliyik. Hər kəs istədiyi kimi düşünməkdə azaddır…</p>\n<p>Nə desələr də, heç kim heç nə bilmir, həyat heç kimin başa düşmədiyi bir problemdir…</p>\n<p>İnsanlar bizə öz həyat hekayələrini pulsuz danışmaq istədikdə, hadisələri, adları və soyadları, tarixləri və s. sitat gətirirlər və hekayələrini danışarkən məmnunluq duyurlar…</p>\n<p>O yazıq insanlar bilmirlər ki, onların hekayələri natamamdır, çünki hadisələr, adlar və tarixlər filmin yalnız xarici görünüşüdür, daxili görünüşü yoxdur…</p>\n<p>Hər bir hadisəyə müəyyən bir əhval-ruhiyyənin uyğun olduğunu bilmək təcildir.</p>\n<p>Vəziyyətlər daxili, hadisələr isə xaricidir, xarici hadisələr hər şey deyil…</p>\n<p>Daxili vəziyyətlər dedikdə, yaxşı və ya pis əhval-ruhiyyə, narahatlıqlar, depressiya, xurafat, qorxu, şübhə, mərhəmət, özünü düşünmə, özünü həddindən artıq qiymətləndirmə; xoşbəxt hiss etmə, sevinc vəziyyətləri və s., və s., və s. başa düşülür.</p>\n<p>Şübhəsiz ki, daxili vəziyyətlər xarici hadisələrlə tamamilə üst-üstə düşə bilər və ya onlardan yarana bilər, yaxud da onlarla heç bir əlaqəsi olmaya bilər…</p>\n<p>Hər halda, vəziyyətlər və hadisələr fərqlidir. Həmişə hadisələr uyğun vəziyyətlərlə tamamilə üst-üstə düşmür.</p>\n<p>Xoş bir hadisənin daxili vəziyyəti onunla üst-üstə düşməyə bilər. Pis bir hadisənin daxili vəziyyəti onunla üst-üstə düşməyə bilər. Uzun müddət gözlənilən hadisələr gələndə, nəyinsə çatışmadığını hiss etdik…</p>\n<p>Şübhəsiz ki, xarici hadisə ilə birləşməli olan müvafiq daxili vəziyyət çatışmırdı…</p>\n<p>Çox vaxt gözlənilməyən hadisə bizə ən yaxşı anları yaşadan olur…</p>"
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
const url = "src/content/docs/az/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/az/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/az/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
