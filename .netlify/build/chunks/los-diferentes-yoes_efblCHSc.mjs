import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Yeityo Chebo Kebenjet",
  "locale": "kln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Yeityo Chebo Kebenjet",
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
    "set:html": "<p>Mamiito kiit ko uu ng’aalkiit, yeu kobaat ketun, ma kit kole ng’aalkiit, ma ko uu maot age tugul.</p>\n<p>Kong’eet kole maat keeguuretyo Psaykolojikal kobaatyet ne tai, ko sabab cheebo kochiit ak iyook.</p>\n<p>Ainetab igeegito ko age tugul ak kobendi kotugul, ago tuguuk che murenik che mi.</p>\n<p>Ago, ainetab kobaatyetab ng’aalkiit ma ko age tugul Psaykolojikal.</p>\n<p>Ng’eet age tugul ne boisyet, keyai ma iyai kityo koboisyek che iyai Seudo-Esoterik ak Seudo-Okultist, ko maat cheibo organaishein Psaykolojikal che toguuk che boisyet.</p>\n<p>Tendo kole mi kobo, maat anyun tisaanda ne kiptai ko age tugul, kobaatyetab andeket.</p>\n<p>Ng’aalkiit, kayokto kobaatyet, ko kityo Psaykolojikal, kityo cheebo “Ai”.</p>\n<p>Kimanaiinik che boisyek che boibo siita ne boisyet, kobendoti “Ai”, kobendoti, kobendi biik che kobo, ko kole “Alter Ego”, “Ai ne Kiplakindet”, “Ai ne bo Dibinit”, ak kemi ko kemi.</p>\n<p>Ma king’eetai “Sabihondosik” che boibo siita ne ng’eet kole mi, kole “Ai ne Kiplakindet” o “Ai ne Kiriptet”, ko kobo isechenik che ki ai.</p>\n<p>Ng’aalkiit maat anyun “Ai ne Kibat”, ago kityok cheibo “Aik” che itai ak che kimane.</p>\n<p>Aineet ne kiiyook kole ko ng’aalkiit, ko uu kooiyet ne ko tisaanda, amu keyai biik che kobo chebo tiendo ak koiyot kole ko tiendo ak koito kobo.</p>\n<p>Ng’eet ne boisyet tab Seudo-Esoterismo ak Seudo-Okultismo ne murenik, ko kole mii bik che kobo, o mii bik che “Ai ne Kibat ak ne Kibat”.</p>\n<p>King’eetai bik che iyai ko maot age tugul, kongeetai kole ng’aalkiit ma kobat.</p>\n<p>Mamiito kiit kayokto Psaykolojikal, ko ki kaat anyun.</p>\n<p>Ng’aalkiit kole kobo kimanet ko Luis, ko uu kobo tisaanda.</p>\n<p>Yeu kobaat ketun Luis ko uu kobo “Aik”, ko kole bik che ng’etun.</p>\n<p>Ma kaimut kobo ketun age tugul, ko king’eetai bik che kobo.</p>\n<p>Ko kole mii bik che “Ai ne kibat”, ko uu tisaanda ne kaimut.</p>\n<p>Mii bik che kobo kityok cheibo “Aik”, ko king’eetai bik che kiit.</p>"
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
const url = "src/content/docs/kln/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
