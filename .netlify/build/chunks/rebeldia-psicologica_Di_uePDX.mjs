import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Rebel·lia Psicològica",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Rebel·lia Psicològica",
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
    "set:html": "<p>No està de més recordar als nostres lectors, que existeix un punt matemàtic dins de nosaltres mateixos…</p>\n<p>Inqüestionablement, aquest punt mai es troba en el passat, ni tampoc en el futur…</p>\n<p>Qui vulgui descobrir aquest punt misteriós, l’ha de buscar aquí i ara, dins de si mateix, exactament en aquest instant, ni un segon endavant, ni un segon enrere…</p>\n<p>Els dos pals Vertical i Horitzontal de la Santa Creu, es troben, en aquest punt…</p>\n<p>Ens trobem, doncs, d’instant en instant davant de dos Camins: l’Horitzontal i el Vertical…</p>\n<p>És ostensible que l’Horitzontal és molt “cursi”, per ell hi caminen “En Vicent i tota la gent”, “En Villegas i tot el que arriba”, “En Don Raimundo i tothom”…</p>\n<p>És evident que el Vertical és diferent; és el camí dels rebels intel·ligents, el dels Revolucionaris…</p>\n<p>Quan un es recorda de si mateix, quan treballa sobre si mateix, quan no s’identifica amb tots els problemes i penes de la vida, de fet va per la Senda Vertical…</p>\n<p>Certament, mai resulta una tasca fàcil eliminar les emocions negatives; perdre tota identificació amb el nostre propi tren de vida; problemes de tota índole, negocis, deutes, pagament de lletres, hipoteques, telèfon, aigua, llum, etc., etc., etc.</p>\n<p>Els desocupats, aquells que per tal o qual motiu han perdut l’ocupació, la feina, evidentment pateixen per falta de diners i oblidar el seu cas, no preocupar-se, ni identificar-se amb el seu propi problema, resulta de fet espantosament difícil.</p>\n<p>Els que pateixen, els que ploren, aquells que han estat víctimes d’alguna traïció, d’un mal pagament a la vida, d’una Ingratitud, d’una calúmnia o d’algun frau, realment s’obliden de si mateixos, del seu real Ser íntim, s’identifiquen completament amb la seva tragèdia moral…</p>\n<p>El treball sobre si mateix és la característica fonamental del Camí Vertical. Ningú podria trepitjar la Senda de la Gran Rebel·lia, si mai treballés sobre si mateix…</p>\n<p>El treball al qual ens estem referint és de tipus Psicològic; s’ocupa de certa transformació del moment present en què ens trobem. Necessitem aprendre a viure d’instant en instant…</p>\n<p>Per exemple, una persona que es troba desesperada per algun problema sentimental, econòmic o polític òbviament s’ha oblidat de si mateixa…</p>\n<p>Aquesta persona, si s’atura un instant, si observa la situació i intenta recordar-se a si mateixa i després s’esforça a comprendre el sentit de la seva actitud…</p>\n<p>Si reflexiona una mica, si pensa que tot passa; que la vida és il·lusòria, fugaç i que la mort redueix a cendres totes les vanitats del món…</p>\n<p>Si comprèn que el seu problema en el fons no és més que una “flamarada d’estopa”, un foc follet que aviat s’apaga, veurà de sobte amb sorpresa que tot ha canviat…</p>\n<p>Transformar reaccions mecàniques és possible mitjançant la confrontació lògica i l’Auto-Reflexió Íntima del Ser…</p>\n<p>És evident que les gents reaccionen mecànicament davant les diverses circumstàncies de la vida…</p>\n<p>Pobres gents!, Solen sempre convertir-se en víctimes. Quan algú els adula somriuen; quan els humilien, pateixen. Insulten si se’ls insulta; fereixen si se’ls fereix; mai són lliures; els seus semblants tenen poder per portar-los de l’alegria a la tristesa, de l’esperança a la desesperació.</p>\n<p>Cada persona d’aquestes que van pel Camí Horitzontal, s’assembla a un instrument musical, on cada un dels seus semblants toca el que li ve de gust…</p>\n<p>Qui aprèn a transformar les relacions mecàniques, de fet es fica pel “Camí Vertical”.</p>\n<p>Això representa un canvi fonamental en el “Nivell de Ser” resultat extraordinari de la “Rebel·lia Psicològica”.</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
