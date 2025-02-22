import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Vnitřní stát",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Vnitřní stát",
    "order": 7
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
    "set:html": "<p>Správně kombinovat vnitřní stavy s vnějšími událostmi, to znamená žít inteligentně…</p>\n<p>Každá inteligentně prožitá událost vyžaduje svůj specifický vnitřní stav…</p>\n<p>Bohužel, lidé, když se ohlédnou za svým životem, si myslí, že se skládá výhradně z vnějších událostí…</p>\n<p>Ubozí lidé! Myslí si, že kdyby se jim nestala ta či ona událost, byl by jejich život lepší…</p>\n<p>Domnívají se, že jim štěstí uniklo a že promarnili příležitost být šťastní…</p>\n<p>Litují ztraceného, pláčou nad tím, čím pohrdali, sténají při vzpomínce na staré přešlapy a neštěstí…</p>\n<p>Lidé si nechtějí uvědomit, že vegetovat neznamená žít a že schopnost vědomě existovat závisí výhradně na kvalitě vnitřních stavů Duše…</p>\n<p>Nezáleží na tom, jak krásné jsou vnější události života, pokud se v daných chvílích nenacházíme ve správném vnitřním stavu, i ty nejlepší události se nám mohou zdát monotónní, otravné nebo prostě nudné…</p>\n<p>Někdo s úzkostí očekává svatební hostinu, je to událost, ale mohlo by se stát, že je v daný moment tak ustaraný, že si z toho ve skutečnosti neužije žádné potěšení a všechno se stane tak suchým a chladným jako protokol…</p>\n<p>Zkušenost nás naučila, že ne všichni lidé, kteří se účastní banketu nebo plesu, si to opravdu užívají…</p>\n<p>Nikdy nechybí nudný člověk na nejlepší oslavě a ty nejchutnější kousky potěší jedny a rozpláčou druhé…</p>\n<p>Velmi málo lidí umí důvěrně kombinovat vnější událost s vhodným vnitřním stavem…</p>\n<p>Je politováníhodné, že lidé neumí žít vědomě: pláčou, když se mají smát, a smějí se, když mají plakat…</p>\n<p>Kontrola je jiná: Moudrý člověk může být veselý, ale nikdy plný šíleného běsnění; smutný, ale nikdy zoufalý a sklíčený… klidný uprostřed násilí; abstinent v orgiích; cudný mezi chtíčem atd.</p>\n<p>Melancholické a pesimistické osoby si o životě myslí to nejhorší a upřímně si nepřejí žít…</p>\n<p>Každý den vidíme lidi, kteří jsou nejen nešťastní, ale navíc – a co je horší – ztrpčují život i ostatním…</p>\n<p>Takové lidi by nezměnilo ani každodenní živé z oslavy na oslavu; psychologickou nemoc si nesou v sobě… takoví lidé mají vnitřní stavy definitivně zvrácené…</p>\n<p>Nicméně se tito jedinci sami označují za spravedlivé, svaté, ctnostné, ušlechtilé, obětavé, mučedníky atd., atd., atd.</p>\n<p>Jsou to lidé, kteří o sobě příliš smýšlejí; lidé, kteří se mají velmi rádi…</p>\n<p>Jedinci, kteří se velmi litují a kteří vždy hledají únikové cesty, aby se vyhnuli vlastní odpovědnosti…</p>\n<p>Lidé, kteří jsou zvyklí na nižší emoce, a je zřejmé, že z tohoto důvodu denně vytvářejí podlidské psychické prvky.</p>\n<p>Nešťastné události, zvraty osudu, bída, dluhy, problémy atd., jsou výhradní záležitostí těch, kteří neumí žít…</p>\n<p>Každý si může vytvořit bohatou intelektuální kulturu, ale jen velmi málo lidí se naučilo žít správně…</p>\n<p>Když chce člověk oddělit vnější události od vnitřních stavů vědomí, konkrétně prokazuje svou neschopnost důstojně existovat.</p>\n<p>Ti, kteří se naučí vědomě kombinovat vnější události a vnitřní stavy, kráčejí po cestě úspěchu…</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
