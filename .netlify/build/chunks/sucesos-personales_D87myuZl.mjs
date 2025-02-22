import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Personlige hendelser",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Personlige hendelser",
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
    "set:html": "<p>Plena, intim selvobservasjon av Selvet er uunngåelig når det gjelder å oppdage feilaktige psykologiske tilstander.</p>\n<p>Uten tvil kan feilaktige indre tilstander korrigeres ved hjelp av korrekte prosedyrer.</p>\n<p>Siden det indre livet er magneten som tiltrekker seg ytre hendelser, trenger vi med maksimal, uunngåelig hast, å eliminere feilaktige psykologiske tilstander fra vår psyke.</p>\n<p>Å korrigere feilaktige psykologiske tilstander er uunnværlig når man ønsker å fundamentalt endre naturen til visse uønskede hendelser.</p>\n<p>Å endre vårt forhold til bestemte hendelser er mulig hvis vi eliminerer visse absurde psykologiske tilstander fra vårt indre.</p>\n<p>Destruktive ytre situasjoner kan bli ufarlige og til og med konstruktive gjennom intelligent korrigering av feilaktige indre tilstander.</p>\n<p>Man kan endre naturen til de ubehagelige hendelsene som skjer med oss, når man renser seg intimt. Den som aldri korrigerer absurde psykologiske tilstander, og tror seg veldig sterk, blir et offer for omstendighetene.</p>\n<p>Å få orden i vårt uordentlige indre hus er viktig når man ønsker å endre kursen på en ulykkelig eksistens.</p>\n<p>Folk klager over alt, lider, gråter, protesterer, ønsker å endre liv, komme seg ut av ulykken de befinner seg i, men dessverre jobber de ikke med seg selv.</p>\n<p>Folk vil ikke innse at det indre livet tiltrekker seg ytre omstendigheter, og at hvis disse er smertefulle, skyldes det absurde indre tilstander.</p>\n<p>Det ytre er bare en refleksjon av det indre, den som endrer seg innvendig skaper en ny orden av ting.</p>\n<p>Ytre hendelser ville aldri være så viktige som måten man reagerer på dem.</p>\n<p>Forble du rolig foran fornærmeren? Mottok du de ubehagelige manifestasjonene av dine medmennesker med glede?</p>\n<p>Hvordan reagerte du på utroskapen til den du elsker? Lot du deg rive med av sjalusiens gift? Drepte du? Er du i fengsel?</p>\n<p>Sykehusene, kirkegårdene eller pantheonene, fengslene, er fulle av oppriktige mennesker som tok feil og reagerte absurd på ytre hendelser.</p>\n<p>Det beste våpenet en mann kan bruke i livet, er en korrekt psykologisk tilstand.</p>\n<p>Man kan avvæpne beist og avsløre forrædere, gjennom passende indre tilstander.</p>\n<p>Feilaktige indre tilstander gjør oss til forsvarsløse ofre for menneskelig perversitet.</p>\n<p>Lær å møte de mest ubehagelige hendelsene i det praktiske livet med en passende indre holdning…</p>\n<p>Ikke identifiser deg med noen hendelse; husk at alt går over; lær å se livet som en film og du vil motta fordelene…</p>\n<p>Ikke glem at hendelser uten noen verdi kan føre deg til ulykke, hvis du ikke eliminerer feilaktige indre tilstander fra din psyke.</p>\n<p>Hver ytre hendelse trenger utvilsomt den passende billetten; det vil si den presise psykologiske tilstanden.</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
