import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Život",
  "locale": "sr",
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
    "set:html": "<p>Na polju praktičnog života uvek otkrivamo zapanjujuće kontraste. Bogati ljudi sa veličanstvenim rezidencijama i mnogo prijatelja ponekad strašno pate. .. Skromni proleteri sa pijukom i lopatom ili ljudi iz srednje klase, često žive u potpunoj sreći.</p>\n<p>Mnogi multimilioneri pate od seksualne impotencije, a bogate matrone gorko oplakuju neverstvo svojih muževa…</p>\n<p>Bogataši zemlje izgledaju kao lešinari u zlatnim kavezima, jer u ovo vreme ne mogu da žive bez “telohranitelja”…</p>\n<p>Državnici vuku lance, nikada nisu slobodni, svuda se kreću okruženi ljudima naoružanim до zuba…</p>\n<p>Proučimo ovu situaciju detaljnije. Potrebno je da znamo šta je život. Svako ima pravo da misli kako želi…</p>\n<p>Šta god da kažu, sigurno niko ništa ne zna, život je problem koji niko ne razume…</p>\n<p>Kada ljudi žele da nam besplatno ispričaju priču o svom životu, citiraju događaje, imena i prezimena, datume, itd., i osećaju zadovoljstvo kada pričaju svoje priče…</p>\n<p>Ti jadni ljudi ne znaju da su njihove priče nepotpune jer su događaji, imena i datumi samo spoljašnji aspekt filma, nedostaje unutrašnji aspekt…</p>\n<p>Hitno je upoznati “stanja svesti”, svakom događaju odgovara određeno psihičko stanje.</p>\n<p>Stanja su unutrašnja, a događaji spoljašnji, spoljašnji događaji nisu sve…</p>\n<p>Pod unutrašnjim stanjima podrazumevaju se dobra ili loša raspoloženja, brige, depresija, sujeverje, strah, sumnja, milosrđe, samo-razmatranje, precenjivanje sebe; stanja osećanja sreće, stanja radosti, itd., itd., itd.</p>\n<p>Nesumnjivo, unutrašnja stanja mogu tačno odgovarati spoljašnjim događajima ili biti uzrokovana njima, ili nemati nikakve veze sa njima…</p>\n<p>U svakom slučaju, stanja i događaji su različiti. Događaji se ne poklapaju uvek tačno sa srodnim stanjima.</p>\n<p>Unutrašnje stanje prijatnog događaja možda ne odgovara samom događaju. Unutrašnje stanje neprijatnog događaja možda ne odgovara samom događaju. Događaje koje smo dugo čekali, kada su se desili, osetili smo da nešto nedostaje…</p>\n<p>Zaista je nedostajalo odgovarajuće unutrašnje stanje koje je trebalo kombinovati sa spoljašnjim događajem…</p>\n<p>Mnogo puta se desi da je događaj koji se nije očekivao onaj koji nam je pružio najbolje trenutke…</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
