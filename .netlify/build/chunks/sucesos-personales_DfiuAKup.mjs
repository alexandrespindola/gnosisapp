import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Personliga händelser",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Personliga händelser",
    "order": 9
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
    "set:html": "<p>Fullständig intim själviakttagelse är oundgänglig när man försöker upptäcka felaktiga psykologiska tillstånd.</p>\n<p>Otvekligt kan felaktiga inre tillstånd korrigeras genom korrekta metoder.</p>\n<p>Eftersom det inre livet är magneten som attraherar yttre händelser, behöver vi med största brådskande att eliminera felaktiga psykologiska tillstånd från vårt psyke.</p>\n<p>Att korrigera felaktiga psykologiska tillstånd är nödvändigt om man vill förändra naturen hos vissa oönskade händelser i grunden.</p>\n<p>Att förändra vår relation till vissa händelser är möjligt om vi eliminerar vissa absurda psykologiska tillstånd inifrån.</p>\n<p>Destruktiva yttre situationer kan bli ofarliga och till och med konstruktiva genom intelligent korrigering av felaktiga inre tillstånd.</p>\n<p>Man kan ändra naturen hos de obehagliga händelser som drabbar oss när man renar sig innerst inne. Den som aldrig korrigerar absurda psykologiska tillstånd och tror sig vara mycket stark blir ett offer för omständigheterna.</p>\n<p>Att skapa ordning i vårt oordnade inre är vitalt när man vill förändra förloppet av en olycklig existens.</p>\n<p>Folk klagar över allt, lider, gråter, protesterar, vill förändra sina liv, ta sig ur den olycka de befinner sig i, men tyvärr arbetar de inte med sig själva.</p>\n<p>Folk vill inte inse att det inre livet attraherar yttre omständigheter och att om dessa är smärtsamma beror det på absurda inre tillstånd.</p>\n<p>Det yttre är bara en spegling av det inre, den som förändras inombords skapar en ny ordning.</p>\n<p>Yttre händelser skulle aldrig vara så viktiga som sättet att reagera på dem.</p>\n<p>Förblev du lugn inför den som förolämpade dig? Tog du emot dina medmänniskors obehagliga yttringar med välbehag?</p>\n<p>Hur reagerade du på den älskades otrohet? Lät du dig föras med av avundsjukans gift? Dödade du? Sitter du i fängelse?</p>\n<p>Sjukhus, kyrkogårdar, fängelser är fulla av uppriktigt missförstådda människor som reagerade absurt på yttre händelser.</p>\n<p>Det bästa vapnet en människa kan använda i livet är ett korrekt psykologiskt tillstånd.</p>\n<p>Man kan avväpna vilddjur och avslöja förrädare genom lämpliga inre tillstånd.</p>\n<p>Felaktiga inre tillstånd gör oss till försvarslösa offer för mänsklig perversitet.</p>\n<p>Lär er att möta de mest obehagliga händelserna i det praktiska livet med en lämplig inre attityd…</p>\n<p>Identifiera er inte med någon händelse; kom ihåg att allt går över; lär er att se livet som en film och ni kommer att få fördelarna…</p>\n<p>Glöm inte att händelser utan något värde kan leda er till olycka om ni inte eliminerar felaktiga inre tillstånd från ert psyke.</p>\n<p>Varje yttre händelse behöver otvivelaktigt rätt biljett; det vill säga det exakta psykologiska tillståndet.</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
