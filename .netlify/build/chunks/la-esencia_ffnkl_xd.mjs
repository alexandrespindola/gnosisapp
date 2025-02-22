import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Essensen",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Essensen",
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
    "set:html": "<p>Det, der gør ethvert nyfødt barn smukt og elskeligt, er dets Essens; denne udgør i sig selv dets sande virkelighed…</p>\n<p>Den normale vækst af Essensen i enhver skabning er bestemt meget residual, gryende…</p>\n<p>Den menneskelige krop vokser og udvikler sig i overensstemmelse med artens biologiske love, men sådanne muligheder er i sig selv meget begrænsede for Essensen…</p>\n<p>Det er ubestrideligt, at Essensen kun kan vokse af sig selv uden hjælp i meget ringe grad…</p>\n<p>Helt ærligt og uden omsvøb vil vi sige, at den spontane og naturlige vækst af Essensen kun er mulig i løbet af de første tre, fire og fem år, det vil sige i livets første fase…</p>\n<p>Folk tror, at væksten og udviklingen af Essensen altid sker kontinuerligt i overensstemmelse med evolutionens mekanik, men den Universelle Gnosticisme lærer tydeligt, at dette ikke er tilfældet…</p>\n<p>For at Essensen kan vokse mere, må der ske noget meget specielt, noget nyt skal udføres.</p>\n<p>Jeg vil gerne med eftertryk henvise til arbejdet med sig selv. Udviklingen af Essensen er kun mulig på basis af bevidste arbejder og frivillig lidelse…</p>\n<p>Det er nødvendigt at forstå, at disse arbejder ikke refererer til spørgsmål om profession, banker, snedkeri, murerarbejde, reparation af jernbanespor eller kontorarbejde…</p>\n<p>Dette arbejde er for enhver person, der har udviklet personligheden; det handler om noget Psykologisk…</p>\n<p>Vi ved alle, at vi indeni har det, der kaldes EGO, JEG, MIT SELV, SIG SELV…</p>\n<p>Uheldigvis er Essensen flaskehalset, indesluttet, mellem EGO’et, og dette er beklageligt.</p>\n<p>At opløse det Psykologiske JEG, at desintegrere dets uønskede elementer, er presserende, uopsætteligt, kan ikke udsættes… sådan er meningen med arbejdet med sig selv.</p>\n<p>Vi kunne aldrig befri Essensen uden først at desintegrere det Psykologiske JEG…</p>\n<p>I Essensen er Religionen, BUDDHA, Visdommen, smertepartiklerne fra vor Fader, som er i Himlen, og alle de data, vi har brug for til den INDRE SELV-REALISERING AF VÆSENET.</p>\n<p>Ingen kunne udslette det Psykologiske JEG uden først at eliminere de umenneskelige elementer, vi bærer inden i…</p>\n<p>Vi er nødt til at reducere vore dages monstrøse grusomhed til aske: misundelsen, der uheldigvis er blevet til handlingens hemmelige fjeder; den uudholdelige grådighed, der har gjort livet så bittert: den væmmelige bagtalelse; bagvaskelsen, der forårsager så mange tragedier; drukkenskabet; den beskidte liderlighed, der lugter så grimt; osv., osv., osv.</p>\n<p>I takt med at alle disse vederstyggeligheder reduceres til kosmisk støv, vil Essensen ud over at blive frigjort vokse og udvikle sig harmonisk…</p>\n<p>Det er ubestrideligt, at når det Psykologiske JEG er dødt, skinner Essensen i os…</p>\n<p>Den frie Essens giver os indre skønhed; fra en sådan skønhed udspringer den perfekte lykke og den sande Kærlighed…</p>\n<p>Essensen besidder mange sanser for perfektion og ekstraordinære naturlige kræfter…</p>\n<p>Når vi “dør i os selv”, når vi opløser det Psykologiske JEG, nyder vi Essensens dyrebare sanser og kræfter…</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
