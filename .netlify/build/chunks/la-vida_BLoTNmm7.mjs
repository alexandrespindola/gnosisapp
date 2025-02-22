import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Život",
  "locale": "bs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Život",
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
    "set:html": "<p>U području praktičnog života uvijek otkrivamo zapanjujuće kontraste. Bogati ljudi s veličanstvenim rezidencijama i brojnim prijateljima ponekad strašno pate. Skromni proleteri s krampom i lopatom ili ljudi iz srednje klase, ponekad žive u potpunoj sreći.</p>\n<p>Mnogi multimilijarderi pate od seksualne nemoći, a bogate matrone gorko plaču zbog nevjere svojih muževa…</p>\n<p>Bogataši zemlje izgledaju kao lešinari u zlatnim kavezima, u ovo vrijeme ne mogu živjeti bez “tjelohranitelja”…</p>\n<p>Državnici vuku lance, nikada nisu slobodni, hodaju posvuda okruženi ljudima naoružanim do zuba…</p>\n<p>Proučimo ovu situaciju detaljnije. Moramo znati što je život. Svatko ima pravo misliti što želi…</p>\n<p>Što god rekli, nitko zapravo ništa ne zna, život je problem koji nitko ne razumije…</p>\n<p>Kada nam ljudi žele besplatno ispričati priču o svom životu, navode događaje, imena i prezimena, datume itd., i osjećaju zadovoljstvo dok pričaju svoje priče…</p>\n<p>Ti jadni ljudi ne znaju da su njihove priče nepotpune jer su događaji, imena i datumi samo vanjski aspekt filma, nedostaje unutarnji aspekt…</p>\n<p>Hitno je upoznati “stanja svijesti”, svakom događaju odgovara određeno duševno stanje.</p>\n<p>Stanja su unutarnja, a događaji vanjski, vanjski događaji nisu sve…</p>\n<p>Pod unutarnjim stanjima podrazumijevaju se dobra ili loša raspoloženja, brige, depresija, praznovjerje, strah, sumnja, milosrđe, samouvažavanje, precjenjivanje sebe; stanja osjećaja sreće, stanja užitka, itd., itd., itd.</p>\n<p>Nesumnjivo, unutarnja stanja mogu točno odgovarati vanjskim događajima ili biti uzrokovana njima, ili s njima uopće nemaju veze…</p>\n<p>U svakom slučaju, stanja i događaji su različiti. Ne poklapaju se uvijek događaji točno s odgovarajućim stanjima</p>\n<p>Unutarnje stanje ugodnog događaja možda ne odgovara samom događaju. Unutarnje stanje neugodnog događaja možda ne odgovara samom događaju. Događaji koje smo dugo čekali, kad su došli, osjetili smo da nešto nedostaje…</p>\n<p>Sigurno je nedostajalo odgovarajuće unutarnje stanje koje se trebalo kombinirati s vanjskim događajem…</p>\n<p>Mnogo puta se dogodi da događaj koji nismo očekivali bude onaj koji nam je pružio najbolje trenutke…</p>"
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
const url = "src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
