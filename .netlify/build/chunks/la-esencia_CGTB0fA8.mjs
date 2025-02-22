import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Essensen",
  "locale": "nb",
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
    "set:html": "<p>Det som gjør ethvert nyfødt barn vakkert og elskelig, er dets Essens; denne utgjør i seg selv dets sanne virkelighet…</p>\n<p>Den normale veksten av Essensen i enhver skapning er riktignok svært residual, begynnende…</p>\n<p>Menneskekroppen vokser og utvikler seg i henhold til artenes biologiske lover, men slike muligheter er i seg selv svært begrensede for Essensen…</p>\n<p>Uten tvil kan Essensen bare vokse av seg selv uten hjelp, i svært liten grad…</p>\n<p>Helt ærlig og uten omsvøp vil vi si at den spontane og naturlige veksten av Essensen bare er mulig i løpet av de første tre, fire og fem årene av livet, det vil si i den første fasen av livet…</p>\n<p>Folk tror at veksten og utviklingen av Essensen alltid skjer kontinuerlig, i henhold til evolusjonens mekanikk, men Universal Gnostisisme lærer tydelig at dette ikke er tilfelle…</p>\n<p>For at Essensen skal vokse mer, må noe helt spesielt skje, noe nytt må realiseres.</p>\n<p>Jeg vil understreke arbeidet med seg selv. Utviklingen av Essensen er kun mulig basert på bevisst arbeid og frivillig lidelse…</p>\n<p>Det er nødvendig å forstå at dette arbeidet ikke refererer til spørsmål om yrke, banker, snekring, muring, reparasjon av jernbanespor eller kontorarbeid…</p>\n<p>Dette arbeidet er for alle som har utviklet personligheten; det handler om noe psykologisk…</p>\n<p>Vi vet alle at vi har inni oss det som kalles EGO, JEG, MEG SELV…</p>\n<p>Dessverre er Essensen flaskehals, innesluttet, mellom EGO, og dette er beklagelig.</p>\n<p>Å oppløse det psykologiske JEG, å desintegrere dets uønskede elementer, er presserende, uunngåelig, ikke utsettelig… slik er meningen med arbeidet med seg selv.</p>\n<p>Vi kunne aldri frigjøre Essensen uten å desintegrere det psykologiske JEG på forhånd…</p>\n<p>I Essensen er Religionen, BUDDHA, Visdommen, smertepartiklene fra vår Far som er i Himmelen og all dataen vi trenger for DEN INDRE SELVREALISERING AV VÆREN.</p>\n<p>Ingen kunne tilintetgjøre det psykologiske JEG uten å eliminere de umenneskelige elementene vi har inni oss på forhånd…</p>\n<p>Vi må redusere til aske grusomhetene i disse tider: misunnelsen som dessverre har blitt den hemmelige drivkraften for handling; den uutholdelige grådigheten som har gjort livet så bittert: den kvalmende baktalelsen; ærekrenkelsen som forårsaker så mange tragedier; fylleriene; den skitne lysten som lukter så vondt; osv., osv., osv.</p>\n<p>Etter hvert som alle disse vederstyggelighetene reduseres til kosmisk støv, vil Essensen i tillegg til å frigjøre seg, vokse og utvikle seg harmonisk…</p>\n<p>Uten tvil, når det psykologiske JEG er dødt, skinner Essensen i oss…</p>\n<p>Den frie Essensen gir oss indre skjønnhet; fra slik skjønnhet utgår den perfekte lykke og den sanne Kjærligheten…</p>\n<p>Essensen besitter flere sanser for perfeksjon og ekstraordinære naturlige krefter…</p>\n<p>Når vi “dør i oss selv”, når vi oppløser det psykologiske JEG, nyter vi de verdifulle sansene og kreftene til Essensen…</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
