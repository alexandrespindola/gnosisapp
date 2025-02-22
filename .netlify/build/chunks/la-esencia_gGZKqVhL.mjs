import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Tirrinyin",
  "locale": "kln",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Tirrinyin",
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
    "set:html": "<p>Kile ne ki miising’ ng’alal ko kaa anyiny che boiboiyet ne ketes nebo ng’wony, ko ng’etunywa; ng’etunywa aii ko ng’alek che tee amu kwong’un…</p>\n<p>Tingeet nebo ng’etunywa kobun ole miising’, ko kitokchini, ko kaitet…</p>\n<p>Mechenik chebiny ko kobun ak koyai koboitinwek chebo sayansi, ago ng’alek cheich kotokchini kong’etenywa…</p>\n<p>Ma kotes kole ng’etunywa kobun kekeny, kobun kakwaitet…</p>\n<p>Kiyookchin kotinygei kole tinyeet nebo ng’etunywa kobun kekeny kobun ole miising’, ko kobun kobooitini chebun ang’wan ak muut, ko kokai chebun ng’wony…</p>\n<p>Mutai tugul kole ng’etunywa kobun koroor koboitinwek chebo kayootet, ago Gnosticismo Universal ko kiyookchini kole ma ko kiich…</p>\n<p>Ngeetinyei ng’etunywa kobun, ko tee ng’alek ne ki miising’, ng’alek che tegei kocheer…</p>\n<p>Achamei koyookchini kobwa kobaibai. Tingeet nebo ng’etunywa kobun kekeny kobun olemiising’ koroor kobwa chemiach ak kayaitich…</p>\n<p>Kamwaita kole tinyeet nekicheer ko matei ng’alek chebo biashara, benki, kamasta, mujenzi, kitinyeet nebo ng’oonisiek…</p>\n<p>Tinyeet neii ko ng’aleek chemii kobo chito neiyai personali; ng’aleek chebo Psychological…</p>\n<p>Cheiso tugul kiyookchini ko tee EGO, YO, MI MISMO, SI MISMO…</p>\n<p>Agine kitokchini, ng’etunywa ko kayai, kagalil, kotinygei EGO ak kagin…</p>\n<p>Kogisainy YO Psychological, koger ng’alek cheboindet kobwa kakobun… kiisyoo ng’aleek cheboindet kobwa kakobun, kobaabai… kiich ko tinyeet kobwa kobaibai…</p>\n<p>Ma kitogosta kolibee ng’etunywa kasob kochikise YO Psychological…</p>\n<p>Olemiising’ nebo ng’etunywa ko tee dini, BUDDHA, Sabiduría, ng’alek chebo chamyet nebo Baba chemii kokwenut, ak ng’aleek cheiis kole kitogosta kwong’u AUTO-REALIZACION INTIMA DEL SER.</p>\n<p>Ma teisyee koger YO Psychological kasob kogere ng’aleek cheboindet ole miising’…</p>\n<p>Kitogosta koger kayai chemii ko kayai: mwaet cheboindet cheyach biashara tugul; kiboishet neboindet cheyach ng’wony ne keegon; ng’aleek cheboindet; ng’aleek chekireet cheyach kiyootet; mbaret; kayootet cheboindet; ak kole…</p>\n<p>Koteisyee kwong’u ng’aleek cheboindet, ko kobun ng’etunywa koroor koboitinwek chebo kakai…</p>\n<p>Kiyookchini kager YO Psychological kobun ko kogoistai ng’etunywa…</p>\n<p>Ng’etunywa ne kogoistai ko koi miising’; kiboishet neii ko koi chamyet ak ng’wony…</p>\n<p>Ng’etunywa ko tee ng’aleek chebo kai ak ng’aleek cheboindet…</p>\n<p>Kagersai “Kobune ole Miising’”, koger YO Psychological, kobun kobun kole tee tinyeet ak ng’aleek nebo Ng’etunywa…</p>"
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
const url = "src/content/docs/kln/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kln/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
