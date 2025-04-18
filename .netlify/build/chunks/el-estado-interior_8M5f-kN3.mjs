import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Den indre stat",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Den indre stat",
    "order": 7
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
    "set:html": "<p>At kombinere indre tilstande med ydre begivenheder på den rigtige måde er at leve intelligent…</p>\n<p>Enhver intelligent oplevet begivenhed kræver sin tilsvarende specifikke indre tilstand…</p>\n<p>Men desværre tror folk, når de ser tilbage på deres liv, at det udelukkende består af ydre begivenheder…</p>\n<p>Stakkels folk! De tror, at hvis den ene eller den anden begivenhed ikke var sket, ville deres liv have været bedre…</p>\n<p>De antager, at heldet var dem imøde og at de mistede muligheden for at være lykkelige…</p>\n<p>De begræder det tabte, græder over det, de foragtede, stønner ved mindet om gamle snublesten og ulykker…</p>\n<p>Folk vil ikke indse, at vegeteren ikke lever, og at evnen til at eksistere bevidst udelukkende afhænger af kvaliteten af sjælens indre tilstande…</p>\n<p>Det er bestemt ligegyldigt, hvor smukke de ydre begivenheder i livet er, hvis vi ikke er i den passende indre tilstand i sådanne øjeblikke, kan de bedste begivenheder virke monotone, irriterende eller simpelthen kedelige…</p>\n<p>Nogen venter spændt på bryllupsfesten, det er en begivenhed, men det kan ske, at man er så optaget på selve tidspunktet for begivenheden, at man virkelig ikke nyder nogen glæde ved det, og at det hele bliver så tørt og koldt som en protokol…</p>\n<p>Erfaringen har lært os, at ikke alle, der deltager i en banket eller en dans, virkelig nyder det…</p>\n<p>Der mangler aldrig en kedelig person i de bedste fester, og de mest lækre stykker glæder nogle og får andre til at græde…</p>\n<p>Meget få mennesker ved, hvordan man fortroligt kombinerer den ydre begivenhed med den passende indre tilstand…</p>\n<p>Det er beklageligt, at folk ikke ved, hvordan man lever bevidst: de græder, når de skal grine, og griner, når de skal græde…</p>\n<p>Kontrol er anderledes: Den vise kan være glad, men aldrig fyldt med vildt vanvid; trist, men aldrig desperat og nedslået… rolig midt i volden; afholdende i orgiet; kysk midt i lysten osv.</p>\n<p>Melankolske og pessimistiske mennesker tænker det værste om livet og ønsker ærligt talt ikke at leve…</p>\n<p>Hver dag ser vi mennesker, der ikke kun er ulykkelige, men som desuden – og hvad værre er – også gør livet bittert for andre…</p>\n<p>Sådanne mennesker ville ikke ændre sig, selvom de levede fra fest til fest hver dag; den psykologiske sygdom bærer de indeni… sådanne mennesker har definitivt perverse intime tilstande…</p>\n<p>Ikke desto mindre beskriver disse subjekter sig selv som retfærdige, hellige, dydige, ædle, hjælpsomme, martyrer osv., osv., osv.</p>\n<p>Det er mennesker, der anser sig selv for meget; mennesker, der elsker sig selv meget…</p>\n<p>Individer, der ynker sig selv meget, og som altid søger smuthuller for at undgå deres egne ansvar…</p>\n<p>Sådanne mennesker er vant til de lavere følelser, og det er tydeligt, at de af den grund dagligt skaber psykiske elementer, der er umenneskelige.</p>\n<p>Ulykkelige begivenheder, tilbageslag i formue, elendighed, gæld, problemer osv., er udelukkende for de mennesker, der ikke ved, hvordan man lever…</p>\n<p>Alle kan danne sig en rig intellektuel kultur, men der er meget få mennesker, der har lært at leve retfærdigt…</p>\n<p>Når man vil adskille ydre begivenheder fra bevidsthedens indre tilstande, viser man konkret sin manglende evne til at eksistere værdigt.</p>\n<p>De, der lærer bevidst at kombinere ydre begivenheder og indre tilstande, går ad succesens vej…</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
