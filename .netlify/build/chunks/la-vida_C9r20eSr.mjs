import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Die Lewe",
  "locale": "af",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Die Lewe",
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
    "set:html": "<p>Op die gebied van die praktiese lewe ontdek ons altyd kontraste wat verbaas. Ryk mense met pragtige wonings en baie vriende ly soms vreeslik. .. Nederige proletariërs van pik en graaf of mense van die middelklas, leef soms in volkome geluk.</p>\n<p>Baie aarts-miljoenêrs ly aan seksuele impotensie en ryk matrones beween bitterlik die ontrouheid van die man…</p>\n<p>Die rykes van die aarde lyk soos aasvoëls tussen goue hokke, deesdae kan hulle nie sonder “lyfwagte” leef nie…</p>\n<p>Staatsmanne sleep kettings, hulle is nooit vry nie, hulle loop oral omring deur mense gewapen tot op die tande…</p>\n<p>Kom ons bestudeer hierdie situasie meer noukeurig. Ons moet weet wat die lewe is. Elkeen is vry om te dink soos hy wil…</p>\n<p>Sê wat hulle wil, sekerlik weet niemand iets nie, die lewe is ‘n probleem wat niemand verstaan nie…</p>\n<p>Wanneer mense die storie van hul lewe gratis aan ons wil vertel, noem hulle gebeurtenisse, name en vanne, datums, ens., en voel tevrede wanneer hulle hul verhale vertel…</p>\n<p>Daardie arme mense is onbewus daarvan dat hul verhale onvolledig is omdat gebeurtenisse, name en datums slegs die eksterne aspek van die film is, die interne aspek ontbreek…</p>\n<p>Dit is dringend om “bewussynstoestande” te ken, elke gebeurtenis stem ooreen met ‘n spesifieke gemoedstoestand.</p>\n<p>Die toestande is innerlik en die gebeurtenisse is uiterlik, die eksterne gebeurtenisse is nie alles nie…</p>\n<p>Verstaan onder innerlike toestande die goeie of slegte beskikkings, die bekommernisse, die depressie, die bygeloof, die vrees, die agterdog, die barmhartigheid, die self-oorweging, die oor-skatting van jouself; toestande om gelukkig te voel, toestande van vreugde, ens., ens., ens.</p>\n<p>Ongetwyfeld kan die innerlike toestande presies ooreenstem met die uiterlike gebeurtenisse of deur hulle veroorsaak word, of geen verband daarmee hê nie…</p>\n<p>In elk geval is toestande en gebeurtenisse verskillend. Gebeurtenisse stem nie altyd presies ooreen met verwante toestande nie.</p>\n<p>Die innerlike toestand van ‘n aangename gebeurtenis stem dalk nie daarmee ooreen nie. Die innerlike toestand van ‘n onaangename gebeurtenis stem dalk nie daarmee ooreen nie. Gebeurtenisse waarop lank gewag is, toe dit gekom het, het ons gevoel dat iets ontbreek…</p>\n<p>Sekerlik het die ooreenstemmende innerlike toestand wat met die uiterlike gebeurtenis gekombineer moes word, ontbreek…</p>\n<p>Baie keer is die gebeurtenis wat nie verwag is nie, die een wat die beste oomblikke aan ons verskaf het…</p>"
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
const url = "src/content/docs/af/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/af/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/af/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
