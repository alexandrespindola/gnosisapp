import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Kara Memo",
  "locale": "eo",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. La Kara Memo",
    "order": 11
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
    "set:html": "<p>Ĉar supera kaj malsupra estas du sekcioj de la sama afero, ne estas superflue fiksi la jenan konsekvencon: “MI SUPERA, MI MALSUPRA” estas du aspektoj de la sama tenebra kaj pluraligita EGOO.</p>\n<p>La tiel nomata “DIA MI” aŭ “SUPERA MI”, “ALTER EGOO” aŭ io simila, estas certe ruzo de la “MI MEM”, formo de MEM-TROMPO.</p>\n<p>Kiam la MI volas daŭri ĉi tie kaj en la postvivo, ĝi Mem-trompas per la falsa koncepto de Dia Senmorta MI…</p>\n<p>Neniu el ni havas veran, konstantan, neŝanĝeblan, eternan, nedireblan, ktp., ktp., ktp. “Mi”.</p>\n<p>Neniu el ni havas vere veran kaj aŭtentan Unuecon de Esteco; bedaŭrinde ni eĉ ne posedas legitiman individuecon.</p>\n<p>La Egoo, kvankam ĝi daŭras trans la tombo, tamen havas komencon kaj finon.</p>\n<p>La Egoo, la MI, neniam estas io individua, unitara, unitotala. Evidente la MI estas “MIOJ”.</p>\n<p>En Orienta Tibeto la “MIOJ” estas nomataj “PSIKAJ AGREGATOJ” aŭ simple “Valoroj”, ĉu ĉi tiuj lastaj estas pozitivaj aŭ negativaj.</p>\n<p>Se ni pensas pri ĉiu “Mi” kiel malsama persono, ni povas emfaze aserti la jenon: “Ene de ĉiu persono, kiu vivas en la mondo, ekzistas multaj personoj”.</p>\n<p>Nediskuteble ene de ĉiu el ni vivas multaj malsamaj homoj, kelkaj pli bonaj, aliaj pli malbonaj…</p>\n<p>Ĉiu el ĉi tiuj Mioj, ĉiu el ĉi tiuj personoj luktas por la supereco, volas esti ekskluziva, kontrolas la intelektan cerbon aŭ la emociajn kaj movajn centrojn ĉiufoje kiam ĝi povas, dum alia forigas ĝin…</p>\n<p>La Doktrino de la multaj Mioj estis instruita en Orienta Tibeto fare de la veraj Klarvidantoj, de la aŭtentaj Iluminitoj…</p>\n<p>Ĉiu el niaj psikologiaj difektoj estas personigita en tiu aŭ alia Mi. Ĉar ni havas milojn kaj eĉ milionojn da difektoj, ŝajne loĝas multaj homoj en nia interno.</p>\n<p>En psikologiaj aferoj ni povis klare evidentigi, ke la paranoikaj, egoismaj kaj mitomaniulaj subjektoj por nenio en la vivo forlasus la kulton al la kara Egoo.</p>\n<p>Nediskuteble tiaj homoj morte malamas la doktrinon de la multaj “Mioj”.</p>\n<p>Kiam oni vere volas koni sin mem, oni devas mem-observi sin kaj provi koni la malsamajn “Miojn”, kiuj estas metitaj ene de la personeco.</p>\n<p>Se iu el niaj legantoj ankoraŭ ne komprenas ĉi tiun doktrinon de la multaj “Mioj”, tio ŝuldiĝas ekskluzive al la manko de praktiko en la afero de Mem-Observado.</p>\n<p>Dum oni praktikas la Internan Mem-Observadon, oni malkovras mem multajn homojn, multajn “Miojn”, kiuj vivas ene de nia propra personeco.</p>\n<p>Tiuj, kiuj neas la doktrinon de la multaj Mioj, tiuj, kiuj adoras Dian MION, sendube neniam serioze Mem-Observis sin. Parolante ĉi-foje en Sokratia stilo, ni diros, ke tiuj homoj ne nur ignoras, sed ankaŭ ignoras, ke ili ignoras.</p>\n<p>Certe ni neniam povus koni nin mem, sen la serioza kaj profunda mem-observado.</p>\n<p>Dum iu ajn subjekto daŭre konsideras sin kiel Unu, estas klare, ke ajna interna ŝanĝo estos pli ol neebla.</p>"
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
const url = "src/content/docs/eo/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eo/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
