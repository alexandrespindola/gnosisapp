import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psykologisk opprør",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Psykologisk opprør",
    "order": 3
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
    "set:html": "<p>Det skader ikke å minne våre lesere om at det finnes et matematisk punkt inni oss selv…</p>\n<p>Utvilsomt befinner aldri et slikt punkt seg i fortiden, og heller ikke i fremtiden…</p>\n<p>Den som vil oppdage dette mystiske punktet, må søke det her og nå, inni seg selv, nøyaktig i dette øyeblikket, ikke et sekund frem, ikke et sekund tilbake…</p>\n<p>De to stengene, den vertikale og den horisontale, på det hellige kors, møtes i dette punktet…</p>\n<p>Vi befinner oss altså fra øyeblikk til øyeblikk ved to veier: den horisontale og den vertikale…</p>\n<p>Det er åpenbart at den horisontale er veldig “klein”, den vandrer “Ola og hele gjengen” på, “Per og alle som kommer”, “Don Raimundo og hele verden”…</p>\n<p>Det er tydelig at den vertikale er annerledes; det er veien for de intelligente opprørerne, de revolusjonære…</p>\n<p>Når man husker seg selv, når man jobber med seg selv, når man ikke identifiserer seg med alle livets problemer og sorger, går man faktisk den vertikale veien…</p>\n<p>Det er sannelig aldri en lett oppgave å eliminere negative følelser; å miste all identifikasjon med sitt eget livsforløp; problemer av alle slag, forretninger, gjeld, betaling av regninger, boliglån, telefon, vann, strøm, osv., osv., osv.</p>\n<p>Arbeidsledige, de som av en eller annen grunn har mistet jobben, arbeidet, lider åpenbart av mangel på penger, og å glemme sin situasjon, ikke bekymre seg, eller identifisere seg med sitt eget problem, er faktisk fryktelig vanskelig.</p>\n<p>De som lider, de som gråter, de som har blitt ofre for et svik, en dårlig betaling i livet, en utakknemlighet, en baktalelse eller et bedrageri, glemmer virkelig seg selv, sitt virkelige indre vesen, de identifiserer seg fullstendig med sin moralske tragedie…</p>\n<p>Arbeidet med seg selv er det grunnleggende kjennetegnet ved den vertikale veien. Ingen kan gå den store opprørets vei hvis de aldri jobber med seg selv…</p>\n<p>Arbeidet vi refererer til er av psykologisk type; det omhandler en viss transformasjon av øyeblikket vi befinner oss i. Vi trenger å lære å leve fra øyeblikk til øyeblikk…</p>\n<p>For eksempel, en person som er fortvilet over et sentimentalt, økonomisk eller politisk problem har åpenbart glemt seg selv…</p>\n<p>Hvis en slik person stopper opp et øyeblikk, hvis han observerer situasjonen og prøver å huske seg selv og deretter anstrenger seg for å forstå meningen med sin holdning…</p>\n<p>Hvis han reflekterer litt, hvis han tenker på at alt går over; at livet er illusorisk, flyktig og at døden reduserer alle verdens forfengeligheter til aske…</p>\n<p>Hvis han forstår at problemet hans i bunn og grunn ikke er mer enn en “halmbrann”, et lykteskinn som snart slukker, vil han plutselig se med overraskelse at alt har endret seg…</p>\n<p>Å transformere mekaniske reaksjoner er mulig gjennom logisk konfrontasjon og den indre selvrefluksjonen av Vesenet…</p>\n<p>Det er åpenbart at folk reagerer mekanisk på de forskjellige omstendighetene i livet…</p>\n<p>Stakkars folk!, De pleier alltid å bli ofre. Når noen smigrer dem, smiler de; når de ydmykes, lider de. De fornærmer hvis de fornærmes; de sårer hvis de såres; de er aldri frie; deres likemenn har makt til å føre dem fra glede til tristhet, fra håp til fortvilelse.</p>\n<p>Hver person av dem som går den horisontale veien, ligner et musikkinstrument, der hver av deres likemenn spiller det som behager dem…</p>\n<p>Den som lærer å transformere mekaniske forhold, går faktisk inn på den “vertikale veien”.</p>\n<p>Dette representerer en fundamental endring i “Vesensnivået”, et ekstraordinært resultat av det “psykologiske opprøret”.</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
