import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Gertaera Pertsonalak",
  "locale": "eu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Gertaera Pertsonalak",
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
    "set:html": "<p>Nire buruaren auto-behaketa intimo betea ezinbestekoa da, egoera psikologiko okerrak aurkitu nahi direnean.</p>\n<p>Ukaezina da barne-egoera okerrak prozedura zuzenen bidez zuzendu daitezkeela.</p>\n<p>Barne-bizitza kanpoko gertaerak erakartzen dituen iman izanik, premiazko beharrizan dugu, ezin atzeratuz, egoera psikologiko okerrak gure psikeatik kentzea.</p>\n<p>Egoera psikologiko okerrak zuzentzea ezinbestekoa da nahi denean funtsean aldatzea zenbait gertaera desatseginen izaera.</p>\n<p>Zenbait gertaerarekin dugun harremana aldatzea posible da gure barnetik zenbait egoera psikologiko absurdu kentzen baditugu.</p>\n<p>Kanpoko egoera suntsitzaileak kaltegabe bihur litezke, eta baita eraikitzaile ere, barneko egoera okerren zuzenketa adimentsuaren bidez.</p>\n<p>Guri gertatzen zaizkigun gertaera desatseginen izaera alda dezakegu, intimoan arazten garenean. Egoera psikologiko absurduak inoiz zuzentzen ez dituenak, oso indartsua dela uste izanda, zirkunstantzien biktima bihurtzen da.</p>\n<p>Gure barneko etxe nahasian ordena jartzea funtsezkoa da, existentzia zoritxarreko baten norabidea aldatu nahi denean.</p>\n<p>Jendea guztiaz kexatzen da, sufritzen du, negar egiten du, protestatzen du, bizitza aldatu nahi luke, aurkitzen den zoritxarretik atera, tamalez ez du bere baitan lan egiten.</p>\n<p>Jendeak ez du konturatu nahi barne-bizitzak kanpoko zirkunstantziak erakartzen dituela eta hauek mingarriak badira barneko egoera absurduei zor zaiela.</p>\n<p>Kanpokoa barnekoaren isla baino ez da, barnean aldatzen denak gauzen ordena berri bat sortzen du.</p>\n<p>Kanpoko gertaerak ez lirateke inoiz hain garrantzitsuak izango, haien aurrean erreakzionatzeko modua bezala.</p>\n<p>Lasai egon zinen iraintzailearen aurrean? Atseginez hartu zenituen zure antzekoen adierazpen desatseginak?</p>\n<p>Zelan erreakzionatu zenuen maitatuaren infidelitatearen aurrean? Zelosien pozoiak eraman zintuen? Hil zenuen? Kartzela zaude?</p>\n<p>Ospitaleak, hilerriak edo panteoiak, kartzelak, kanpoko gertaeren aurrean modu absurduan erreakzionatu zuten zintzo okerrez beteta daude.</p>\n<p>Gizon batek bizitzan erabili dezakeen armarik onena egoera psikologiko zuzena da.</p>\n<p>Piztiak desarmatu eta traidoreak desenmaskara daitezke, barneko egoera egokien bidez.</p>\n<p>Barneko egoera okerrak gizakiaren perbertsitatearen biktima babesgabe bihurtzen gaituzte.</p>\n<p>Ikasi bizitza praktikoko gertaera desatseginenei aurre egiten barneko jarrera egoki batekin…</p>\n<p>Ez zaitez inolako gertakarirekin identifikatu; gogoratu dena pasatzen dela; ikasi bizitza pelikula bat bezala ikusten eta onurak jasoko dituzu…</p>\n<p>Ez ahaztu balio gabeko gertakariek zoritxarrera eraman zaitzaketela, zure psiketik barneko egoera okerrak kentzen ez badituzu.</p>\n<p>Kanpoko gertaera bakoitzak, ukaezinez, txartel egokia behar du; hau da, egoera psikologiko zehatza.</p>"
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
const url = "src/content/docs/eu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
