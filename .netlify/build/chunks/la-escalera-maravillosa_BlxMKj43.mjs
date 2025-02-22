import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Den Fantastiske Trappe",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Den Fantastiske Trappe",
    "order": 2
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
    "set:html": "<p>Vi må længes efter en ægte forandring, ud af denne kedelige rutine, dette blot mekaniske, trættende liv…</p>\n<p>Det, vi først må forstå fuldt ud, er, at hver enkelt af os, hvad enten vi er borgerlige eller proletarer, velhavende eller fra middelklassen, rige eller elendige, i virkeligheden befinder os på et bestemt Værensniveau…</p>\n<p>Værensniveauet for en drukkenbolt er anderledes end for en afholdsmand, og en prostituerets er meget forskelligt fra en piges. Det, vi siger, er uigendriveligt, ubestrideligt…</p>\n<p>Nu vi er nået til denne del af vores kapitel, skader det ikke at forestille os en stige, der strækker sig lodret nedefra og op med mange trin…</p>\n<p>Ubestrideligt befinder vi os på et eller andet trin; trinene nedenunder vil være folk værre end os; trinene ovenover vil være folk bedre end os…</p>\n<p>På denne ekstraordinære lodrette linje, på denne vidunderlige stige, er det klart, at vi kan finde alle Værensniveauer… hver person er forskellig, og det kan ingen bestride…</p>\n<p>Vi taler naturligvis ikke om grimme eller smukke ansigter, og det handler heller ikke om alder. Der er unge og gamle, ældre, der er ved at dø, og nyfødte børn…</p>\n<p>Spørgsmålet om tid og år; det med at blive født, vokse op, udvikle sig, blive gift, formere sig, blive gammel og dø er udelukkende forbeholdt det horisontale…</p>\n<p>På den “Vidunderlige Stige”, på det Lodrette, er der intet begreb om tid. På trinene på denne stige kan vi kun finde “Værensniveauer”…</p>\n<p>Folks mekaniske håb tjener intet formål; de tror, at tingene vil blive bedre med tiden; sådan tænkte vores bedsteforældre og oldeforældre; kendsgerningerne har netop vist det modsatte…</p>\n<p>“Værensniveauet” er det, der tæller, og det er Lodret; vi befinder os på et trin, men vi kan klatre op til et andet trin…</p>\n<p>Den “Vidunderlige Stige”, vi taler om, og som henviser til de forskellige “Værensniveauer”, har bestemt intet at gøre med lineær tid…</p>\n<p>Et højere “Værensniveau” er umiddelbart over os fra øjeblik til øjeblik…</p>\n<p>Det er ikke i en fjern horisontal fremtid, men her og nu; inde i os selv; i det Lodrette…</p>\n<p>Det er tydeligt, og alle kan forstå, at de to linjer - Horisontal og Lodret - mødes fra øjeblik til øjeblik i vores indre psykologi og danner et kors…</p>\n<p>Personligheden udvikler sig og udfolder sig på livets horisontale linje. Den fødes og dør inden for sin lineære tid; den er forgængelig; der er ingen morgendag for den dødes personlighed; det er ikke Væren…</p>\n<p>Værensniveauerne; Væren selv, er ikke af tid, har intet at gøre med den Horisontale Linje; den findes inde i os selv. Nu, i det Lodrette…</p>\n<p>Det ville være åbenlyst absurd at lede efter vores eget Væsen uden for os selv…</p>\n<p>Det skader ikke at fastslå følgende som en konsekvens: Titler, grader, forfremmelser osv. i den ydre fysiske verden vil på ingen måde give anledning til autentisk ophøjelse, revurdering af Væren, et skridt opad i “Værensniveauerne”…</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
