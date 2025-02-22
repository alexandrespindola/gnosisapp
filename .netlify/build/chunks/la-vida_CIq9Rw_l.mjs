import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Het Leven",
  "locale": "nl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Het Leven",
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
    "set:html": "<p>Op het gebied van het praktische leven ontdekken we altijd contrasten die verbazen. Rijke mensen met een prachtige woning en veel vrienden lijden soms vreselijk. Eenvoudige arbeiders met een houweel en schop of mensen uit de middenklasse leven vaak in compleet geluk.</p>\n<p>Veel multimiljonairs lijden aan seksuele impotentie en rijke dames bewenen bitter de ontrouw van hun echtgenoot…</p>\n<p>De rijken der aarde lijken gieren in gouden kooien, tegenwoordig kunnen ze niet zonder “lijfwachten” leven…</p>\n<p>Staatslieden slepen kettingen mee, ze zijn nooit vrij, lopen overal rond omringd door mensen die tot de tanden bewapend zijn…</p>\n<p>Laten we deze situatie eens nader bekijken. We moeten weten wat het leven is. Iedereen is vrij om te denken wat hij wil…</p>\n<p>Wat ze ook zeggen, niemand weet iets zeker, het leven is een probleem dat niemand begrijpt…</p>\n<p>Wanneer mensen ons gratis het verhaal van hun leven willen vertellen, noemen ze gebeurtenissen, namen en achternamen, datums, enz., en ze zijn tevreden als ze hun verhalen vertellen…</p>\n<p>Die arme mensen weten niet dat hun verhalen onvolledig zijn, omdat gebeurtenissen, namen en datums slechts het uiterlijke aspect van de film zijn, het innerlijke aspect ontbreekt…</p>\n<p>Het is dringend noodzakelijk om “bewustzijnstoestanden” te kennen, aan elke gebeurtenis komt een bepaalde gemoedstoestand overeen.</p>\n<p>De toestanden zijn innerlijk en de gebeurtenissen zijn uiterlijk, de externe gebeurtenissen zijn niet alles…</p>\n<p>Onder innerlijke toestanden verstaan we de goede of slechte stemmingen, de zorgen, de depressie, het bijgeloof, de angst, de achterdocht, de barmhartigheid, de zelfbeschouwing, de overschatting van zichzelf; toestanden van zich gelukkig voelen, toestanden van vreugde, enz., enz., enz.</p>\n<p>Het staat onomstotelijk vast dat de innerlijke toestanden exact kunnen overeenkomen met de uiterlijke gebeurtenissen of erdoor veroorzaakt kunnen worden, of er geen enkel verband mee kunnen hebben…</p>\n<p>In ieder geval zijn toestanden en gebeurtenissen verschillend. Niet altijd komen de gebeurtenissen exact overeen met verwante toestanden.</p>\n<p>De innerlijke toestand van een aangename gebeurtenis komt misschien niet overeen met die gebeurtenis. De innerlijke toestand van een onaangename gebeurtenis komt misschien niet overeen met die gebeurtenis. Gebeurtenissen waar lang naar uitgekeken is, toen ze kwamen voelden we dat er iets ontbrak…</p>\n<p>Er ontbrak zeker de bijbehorende innerlijke toestand die gecombineerd moest worden met de uiterlijke gebeurtenis…</p>\n<p>Vaak is de gebeurtenis die niet werd verwacht degene die ons de beste momenten heeft bezorgd…</p>"
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
const url = "src/content/docs/nl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
