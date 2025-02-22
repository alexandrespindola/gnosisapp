import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Het Geliefde Ego",
  "locale": "nl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Het Geliefde Ego",
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
    "set:html": "<p>Aangezien boven en onder twee delen van hetzelfde zijn, is het niet overbodig om het volgende corollarium te formuleren: “HOGER ZELF, LAGER ZELF” zijn twee aspecten van hetzelfde duistere en gepluraliseerde EGO.</p>\n<p>Het zogenaamde “GODDELIJKE ZELF” of “HOGER ZELF”, “ALTER EGO” of iets dergelijks, is zeker een truc van het “IK ZELF”, een vorm van ZELF-BEDROG.</p>\n<p>Wanneer het ZELF hier en in het hiernamaals wil voortbestaan, bedriegt het Zichzelf met het valse concept van een Onsterfelijk Goddelijk ZELF…</p>\n<p>Niemand van ons heeft een waar, permanent, onveranderlijk, eeuwig, onuitsprekelijk, enz., enz., enz. “Zelf”.</p>\n<p>Niemand van ons heeft in werkelijkheid een ware en authentieke Eenheid van Zijn; helaas bezitten we zelfs geen legitieme individualiteit.</p>\n<p>Het Ego, hoewel het voorbij het graf voortduurt, heeft echter een begin en een einde.</p>\n<p>Het Ego, het ZELF, is nooit iets individueels, unitairs, unitotaals. Het ZELF is uiteraard “ZELVEN”.</p>\n<p>In Oost-Tibet worden de “ZELVEN” “PSYCHISCHE AGGREGATEN” of simpelweg “Waarden” genoemd, of deze laatste nu positief of negatief zijn.</p>\n<p>Als we over elk “Zelf” nadenken als een ander persoon, kunnen we met nadruk het volgende stellen: “Binnen elke persoon die in de wereld leeft, bestaan veel personen”.</p>\n<p>Het is onbetwistbaar dat er in ieder van ons veel verschillende mensen wonen, sommigen beter, anderen slechter…</p>\n<p>Elk van deze Zelven, elk van deze personen strijdt om de suprematie, wil exclusief zijn, controleert de intellectuele hersenen of de emotionele en motorische centra wanneer hij maar kan, terwijl een ander hem verdringt…</p>\n<p>De Doctrine van de vele Zelven werd in Oost-Tibet onderwezen door de ware Helderzienden, door de authentieke Verlichten…</p>\n<p>Elk van onze psychologische gebreken is gepersonifieerd in zo’n Zelf. Aangezien we duizenden en zelfs miljoenen gebreken hebben, wonen er klaarblijkelijk veel mensen in ons.</p>\n<p>In psychologische kwesties hebben we duidelijk kunnen aantonen dat paranoïde, egolatrische en mythemane onderwerpen voor geen goud afscheid zouden nemen van de cultus van het geliefde Ego.</p>\n<p>Het is onbetwistbaar dat dergelijke mensen de doctrine van de vele “Zelven” dodelijk haten.</p>\n<p>Wanneer iemand zichzelf echt wil leren kennen, moet hij zichzelf observeren en proberen de verschillende “Zelven” te leren kennen die in de persoonlijkheid zitten.</p>\n<p>Als een van onze lezers deze doctrine van de vele “Zelven” nog niet begrijpt, is dit uitsluitend te wijten aan het gebrek aan oefening in Zelf-Observatie.</p>\n<p>Naarmate men de Innerlijke Zelf-Observatie beoefent, ontdekt men zelf veel mensen, veel “Zelven”, die in onze eigen persoonlijkheid leven.</p>\n<p>Degenen die de doctrine van de vele Zelven ontkennen, degenen die een Goddelijk ZELF aanbidden, hebben zich ongetwijfeld nooit serieus Zelf geobserveerd. Om deze keer in Sokratische stijl te spreken, zullen we zeggen dat die mensen niet alleen onwetend zijn, maar ook niet weten dat ze onwetend zijn.</p>\n<p>Het is zeker dat we onszelf nooit zouden kunnen kennen zonder serieuze en diepgaande zelfobservatie.</p>\n<p>Zolang een willekeurig onderwerp zichzelf als Eén blijft beschouwen, is het duidelijk dat elke innerlijke verandering meer dan onmogelijk zal zijn.</p>"
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
const url = "src/content/docs/nl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
