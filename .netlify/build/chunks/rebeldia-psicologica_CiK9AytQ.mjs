import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psykologisk Oprør",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Psykologisk Oprør",
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
    "set:html": "<p>Det er ikke overflødig at minde vores læsere om, at der findes et matematisk punkt inde i os selv…</p>\n<p>Utvivlsomt findes et sådant punkt aldrig i fortiden, ej heller i fremtiden…</p>\n<p>Den, der ønsker at opdage dette mystiske punkt, må søge det her og nu, inde i sig selv, præcis i dette øjeblik, ikke et sekund frem, ikke et sekund tilbage…</p>\n<p>De to pinde, den lodrette og den vandrette, i det hellige kors mødes i dette punkt…</p>\n<p>Vi befinder os altså fra øjeblik til øjeblik over for to veje: den vandrette og den lodrette…</p>\n<p>Det er tydeligt, at den vandrette er meget “banal”, på den går “Hr. Jensen og alle de andre”, “Hr. Hansen og alle dem, der kommer”, “Hr. Rasmussen og hele verden”…</p>\n<p>Det er indlysende, at den lodrette er anderledes; det er de intelligente rebels vej, de revolutionæres…</p>\n<p>Når man husker sig selv, når man arbejder på sig selv, når man ikke identificerer sig med alle livets problemer og sorger, går man faktisk ad den lodrette vej…</p>\n<p>Det er bestemt aldrig en let opgave at eliminere de negative følelser; at miste al identifikation med vores eget livsforløb; problemer af enhver art, forretninger, gæld, afdrag, lån, telefon, vand, lys osv., osv., osv.</p>\n<p>De arbejdsløse, dem der af den ene eller anden grund har mistet jobbet, arbejdet, lider åbenlyst under mangel på penge, og at glemme deres situation, ikke bekymre sig eller identificere sig med deres eget problem, er faktisk frygteligt svært.</p>\n<p>De, der lider, de, der græder, de, der har været ofre for et forræderi, en dårlig behandling i livet, en utaknemlighed, en bagvaskelse eller et bedrageri, glemmer virkelig sig selv, deres virkelige indre væsen, de identificerer sig fuldstændigt med deres moralske tragedie…</p>\n<p>Arbejdet på sig selv er den grundlæggende egenskab ved den lodrette vej. Ingen kunne betræde den store oprørs vej, hvis de aldrig arbejdede på sig selv…</p>\n<p>Det arbejde, vi henviser til, er af psykologisk art; det beskæftiger sig med en vis transformation af det nuværende øjeblik, vi befinder os i. Vi er nødt til at lære at leve fra øjeblik til øjeblik…</p>\n<p>For eksempel har en person, der er fortvivlet over et følelsesmæssigt, økonomisk eller politisk problem, åbenlyst glemt sig selv…</p>\n<p>Hvis en sådan person stopper et øjeblik, hvis de observerer situationen og forsøger at huske sig selv og derefter bestræber sig på at forstå meningen med deres holdning…</p>\n<p>Hvis de reflekterer lidt, hvis de tænker på, at alt går over; at livet er illusorisk, flygtigt, og at døden reducerer alle verdens forfængeligheder til aske…</p>\n<p>Hvis de forstår, at deres problem i bund og grund ikke er mere end en “halmbrand”, et skin af et lys, der snart slukkes, vil de pludselig med overraskelse se, at alt har ændret sig…</p>\n<p>Det er muligt at transformere mekaniske reaktioner gennem logisk konfrontation og indre selvreleksion af væsenet…</p>\n<p>Det er tydeligt, at folk reagerer mekanisk på livets forskellige omstændigheder…</p>\n<p>Stakkels mennesker! De bliver som regel altid ofre. Når nogen smigrer dem, smiler de; når de ydmyges, lider de. De fornærmer, hvis de fornærmes; de sårer, hvis de såres; de er aldrig frie; deres medmennesker har magt til at føre dem fra glæde til sorg, fra håb til fortvivlelse.</p>\n<p>Hver af disse personer, der går ad den vandrette vej, ligner et musikinstrument, hvor hver af deres medmennesker spiller, hvad de har lyst til…</p>\n<p>Den, der lærer at transformere de mekaniske reaktioner, begiver sig faktisk ind på den “lodrette vej”.</p>\n<p>Dette repræsenterer en grundlæggende ændring i “værensniveauet”, et ekstraordinært resultat af det “psykologiske oprør”.</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
