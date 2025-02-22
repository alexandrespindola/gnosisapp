import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kobata kiy ne boiboi",
  "locale": "kln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Kobata kiy ne boiboi",
    "order": 5
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
    "set:html": "<p>Ng’omnoto ko kityo ko ketekinye koleechin, koiye kegas kei, koit kotab ketes…</p>\n<p>Kamakait ne leel ko ng’omnoto nebo leel koleechin kayet nota “LA” (La Vía Láctea, Galaxia koyai).</p>\n<p>Leel ng’omnoto kogoiyen kayet nota “SOL” (Ket), ago kainain kayet nota “FA” (Zona Planetaria) kochin isik koboot chebo iman.</p>\n<p>Magutuk che kosich kot abun koba kotinye ng’omnoto ne koleechin ketes…</p>\n<p>Kebeechen alak kamuktaindet koboot kwong’etitab kotinye, ketas keegolye koboot chebo Urania…</p>\n<p>Kotas komii kayai koboot kwong’etitab, koba, koboot chebo iman…</p>\n<p>Kamuktaindet kotinye kotesta kosich, ketesta koboot, ketesta koboot ketesin…</p>\n<p>Kiyok ole tai ne kelenji ki kelal konyalile kotesin…</p>\n<p>Koito kotesta keit keba ketesin kwong’etitab, kokelenjikei keker kotinye lelutiet ne kelyekkei kwong’etitab…</p>\n<p>Kiyo kakistai kotinye keba kelali kwong’etitab koboot kwong’etitab…</p>\n<p>Ma keguurei kotas koroksei, ma keguurei kopata, ma keguurei koboot chebo ndararei, ma keguurei koboot chebo iman, etc., etc., etc.</p>\n<p>Ma kitebende kebai ko kikibai koboot chebo iman, kikas ketasta koboot, ma kitebende koboto, ma kitebende koboto, ma kitebende koboto…</p>\n<p>Kelal kotesta kosich chebo iman koboot chebo iman.</p>\n<p>Kiyai ta koleechin “Gran KABIR Jesús el Cristo”. “Ke kebai che ki kelal”. Che kiyak koboot kwong’etitab koboot chebo iman.</p>\n<p>Che kitinyei kotesta chebo iman; che kiyak kotesta chebo iman; che kiyak kotesta chebo iman; che kiyak kotesta chebo iman, etc., etc., etc.</p>\n<p>Ma kitebende ke kebai ko ke kebai ko ke kebai ko ke kebai ko ke kebai ko ke kebai ko ke kebai ko ke kebai ko ke kebai ko ke kebai…</p>\n<p>Ke kitebende kiyok kelali kwong’etitab, ke kitebende kiyok kelali kwong’etitab koboot chebo iman…</p>\n<p>Kiyak kotesta kotesta kotesta, kiyai kolochin ketesta, etc.</p>\n<p>Kiyak kotesta kosich kotesta kosich kotesta kotesta kotesta, etc.</p>\n<p>Kiyai kiyok kotesta kosich kotesta kosich kotesta kosich kotesta kosich, etc.</p>\n<p>Che kiyak kotesta kosich kotesta kosich kotesta kosich kotesta kosich, etc.</p>\n<p>Kiyai kotesta kosich kotesta kosich kotesta kosich kotesta kosich, etc.</p>\n<p>Kiyai kotesta kosich kotesta kosich kotesta kosich kotesta kosich, etc.</p>"
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
const url = "src/content/docs/kln/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
