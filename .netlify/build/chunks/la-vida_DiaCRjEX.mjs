import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Vida",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. La Vida",
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
    "set:html": "<p>En el terreny de la vida pràctica sempre descobrim contrastos que sorprenen. Persones adinerades amb una residència magnífica i moltes amistats, de vegades pateixen espantosament. .. Humils proletaris de pic i pala o persones de la classe mitjana, solen viure de vegades en completa felicitat.</p>\n<p>Molts multimilionaris pateixen d’impotència sexual i riques matrones ploren amargament la infidelitat del marit…</p>\n<p>Els rics de la terra semblen voltors entre gàbies d’or, en aquests temps no poden viure sense “guardaespatlles”…</p>\n<p>Els homes d’estat arrosseguen cadenes, mai no són lliures, van pertot arreu envoltats de gent armada fins a les dents…</p>\n<p>Estudiem aquesta situació més detingudament. Necessitem saber què és la vida. Cadascú és lliure d’opinar com vulgui…</p>\n<p>Diguin el que diguin, certament ningú no sap res, la vida resulta un problema que ningú entén…</p>\n<p>Quan la gent desitja explicar-nos gratuïtament la història de la seva vida, citen esdeveniments, noms i cognoms, dates, etc., i senten satisfacció en fer els seus relats…</p>\n<p>Aquesta pobra gent ignora que els seus relats estan incomplets perquè els esdeveniments, noms i dates, són tan sols l’aspecte extern de la pel·lícula, falta l’aspecte intern…</p>\n<p>És urgent conèixer “estats de consciència”, a cada esdeveniment li correspon tal o qual estat anímic.</p>\n<p>Els estats són interiors i els esdeveniments són exteriors, els esdeveniments externs no ho són tot…</p>\n<p>Entengui’s per estats interiors les bones o males disposicions, les preocupacions, la depressió, la superstició, el temor, la sospita, la misericòrdia, l’auto-consideració, la sobreestimació de si mateix; estats de sentir-se feliç, estats de gaudi, etc., etc., etc.</p>\n<p>Inqüestionablement els estats interiors poden correspondre’s exactament amb els esdeveniments exteriors o ser originats per aquests, o no tenir cap relació amb els mateixos…</p>\n<p>En tot cas, estats i esdeveniments són diferents. No sempre els successos es corresponen exactament amb estats afins</p>\n<p>L’estat interior d’un esdeveniment agradable podria no correspondre’s amb el mateix. L’estat interior d’un esdeveniment desagradable podria no correspondre’s amb el mateix. Esdeveniments esperats durant molt de temps, quan van venir vam sentir que faltava alguna cosa…</p>\n<p>Certament faltava el corresponent estat interior que s’havia de combinar amb l’esdeveniment exterior…</p>\n<p>Moltes vegades l’esdeveniment que no s’esperava ve a ser el que millors moments ens ha proporcionat…</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
