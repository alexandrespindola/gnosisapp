import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Funtsa",
  "locale": "eu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Funtsa",
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
    "set:html": "<p>Haur jaioberri oro eder eta maitagarri egiten duena bere Esentzia da; hau berez bere benetako errealitatea da…</p>\n<p>Izaki ororen Esentziaren hazkunde normala oso hondarrezkoa, hasiberria da…</p>\n<p>Giza gorputza espeziearen lege biologikoen arabera hazten eta garatzen da, hala ere, aukera horiek oso mugatuak dira Esentziarentzat…</p>\n<p>Ukaezina da Esentzia berez bakarrik hazi daitekeela laguntzarik gabe, oso maila txikian…</p>\n<p>Zintzotasunez eta anbageriarik gabe esango dugu Esentziaren hazkunde espontaneo eta naturala posible dela soilik lehenengo hiru, lau eta bost urteetan, hau da, bizitzako lehen etapan…</p>\n<p>Jendeak uste du Esentziaren hazkundea eta garapena etengabe egiten direla beti, eboluzioaren mekanikaren arabera, baina Gnostizismo Unibertsalak argi eta garbi irakasten du hori ez dela horrela gertatzen…</p>\n<p>Esentzia gehiago haz dadin, oso gauza berezia gertatu behar da, zerbait berria egin behar da.</p>\n<p>Norbere buruaren gaineko lanari buruz hitz egin nahi dut enfasi bereziaz. Esentziaren garapena lan kontzienteetan eta pairamen boluntarioetan oinarrituta bakarrik da posible…</p>\n<p>Beharrezkoa da ulertzea lan hauek ez direla lanbide, banku, arotzeria, igeltserotza, trenbide-konponketa edo bulegoko kontuetakoak…</p>\n<p>Lan hau nortasuna garatu duen pertsona ororentzat da; zerbait Psikologikoa da…</p>\n<p>Guztiok dakigu gure baitan dugula EGOA, NI, NEURE BURUA, BEREZKOA deitzen dena…</p>\n<p>Zoritxarrez, Esentzia ECOaren artean botilaratuta, ontziratuta dago, eta hori tamalgarria da.</p>\n<p>YO Psikologikoa desegitea, bere elementu desegokiak desintegratzea, premiazkoa, atzeraezina, ezin atzeratuzkoa da… hori da norbere buruaren gaineko lanaren zentzua.</p>\n<p>Inoiz ezingo genuke Esentzia askatu aurretik YO Psikologikoa desintegratu gabe…</p>\n<p>Esentzian dago Erlijioa, BUDDHA, Jakinduria, Zeruetan dagoen gure Aitaren min-partikulak eta IZATEAREN BEREZKO AUTO-ERREALIZAZIORAKO behar ditugun datu guztiak.</p>\n<p>Inork ezingo luke YO Psikologikoa suntsitu aurretik gure baitan daramatzagun elementu gizagabeak kendu gabe…</p>\n<p>Garai hauetako ankerkeria izugarria errauts bihurtu behar dugu: inbidia, zoritxarrez ekintzaren ezkutuko eragile bihurtu dena; bizitza hain mingots bihurtu duen gutizia jasanezina: aharrausigarria den maledikzioa; hainbeste tragedia eragiten duen kalumnia; mozkortasunak; hain usain txarra duen lizunkeria zikina; etab., etab., etab.</p>\n<p>Abominazio horiek guztiak hauts kosmiko bihurtzen diren heinean, Esentzia, emantzipatzeaz gain, harmonikoki haziko eta garatuko da…</p>\n<p>Ukaezina da YO Psikologikoa hil denean, Esentzia gugan distiratzen dela…</p>\n<p>Esentzia askeak barne edertasuna ematen digu; edertasun horretatik zoriontasun perfektua eta benetako Maitasuna sortzen dira…</p>\n<p>Esentziak perfekzio-zentzu ugari eta aparteko ahalmen naturalak ditu…</p>\n<p>“Geure buruetan Hiltzen garenean”, YO Psikologikoa desegiten dugunean, Esentziaren zentzu eta ahalmen preziatuez gozatzen dugu…</p>"
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
const url = "src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/eu/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
