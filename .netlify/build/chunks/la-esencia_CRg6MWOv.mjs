import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Podstata",
  "locale": "sk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Podstata",
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
    "set:html": "<p>To, čo robí každé novonarodené dieťa krásnym a rozkošným, je jeho Esencia; tá sama osebe tvorí jeho skutočnú realitu…</p>\n<p>Normálny rast Esencie v každom stvorení je určite veľmi reziduálny, počiatočný…</p>\n<p>Ľudské telo rastie a vyvíja sa podľa biologických zákonov druhu, avšak tieto možnosti sú samy osebe pre Esenciu veľmi obmedzené…</p>\n<p>Nepochybne Esencia môže rásť sama o sebe bez pomoci len v minimálnom rozsahu…</p>\n<p>Ak budeme hovoriť úprimne a bez obalu, povieme, že spontánny a prirodzený rast Esencie je možný len počas prvých troch, štyroch a piatich rokov veku, teda v prvej etape života…</p>\n<p>Ľudia si myslia, že rast a vývoj Esencie prebieha vždy kontinuálne, podľa mechaniky evolúcie, avšak Univerzálny Gnosticizmus jasne učí, že to tak nie je…</p>\n<p>Aby Esencia rástla viac, musí sa stať niečo veľmi špeciálne, niečo nové sa musí uskutočniť.</p>\n<p>Chcem sa dôrazne zmieniť o práci na sebe. Rozvoj Esencie je možný len na základe vedomých prác a dobrovoľného utrpenia…</p>\n<p>Je potrebné pochopiť, že tieto práce sa netýkajú otázok profesie, bánk, stolárstva, murárstva, opravy železničných tratí alebo kancelárskych záležitostí…</p>\n<p>Táto práca je pre každého, kto si vyvinul osobnosť; ide o niečo Psychologické…</p>\n<p>Všetci vieme, že v sebe máme to, čo sa nazýva EGO, JA, MOJE JA, SEBA SAMÉHO…</p>\n<p>Žiaľ, Esencia sa nachádza uväznená, uzavretá medzi EGOM a to je poľutovaniahodné.</p>\n<p>Rozpustiť Psychologické JA, dezintegrovať jeho nežiaduce prvky, je urgentné, neodkladné, nezadržateľné… taký je zmysel práce na sebe.</p>\n<p>Nikdy by sme nemohli oslobodiť Esenciu bez toho, aby sme predtým dezintegrovali Psychologické JA…</p>\n<p>V Esencii je Náboženstvo, BUDDHA, Múdrosť, častice bolesti nášho Otca, ktorý je v Nebesiach a všetky údaje, ktoré potrebujeme pre INTIMNU AUTO-REALIZÁCIU BYTOSTI.</p>\n<p>Nikto by nemohol zničiť Psychologické JA bez toho, aby predtým odstránil neľudské prvky, ktoré v sebe nosíme…</p>\n<p>Potrebujeme spáliť na popol monštruóznu krutosť týchto čias: závisť, ktorá sa, žiaľ, stala tajným motorom konania; neznesiteľnú chamtivosť, ktorá urobila život takým trpkým: nechutné ohováranie; ohováranie, ktoré spôsobuje toľko tragédií; opilstvo; špinavú chtíč, ktorá tak škaredo zapácha; atď., atď., atď.</p>\n<p>Ako sa všetky tieto ohavnosti premieňajú na kozmický prach, Esencia sa okrem toho, že sa emancipuje, bude harmonicky rásť a vyvíjať…</p>\n<p>Nepochybne, keď Psychologické JA zomrie, v nás žiari Esencia…</p>\n<p>Slobodná Esencia nám dáva intímnu krásu; z takejto krásy vyžaruje dokonalé šťastie a pravá Láska…</p>\n<p>Esencia má mnohonásobné zmysly dokonalosti a mimoriadne prirodzené sily…</p>\n<p>Keď “Zomrieme v Sebe Samých”, keď rozpustíme Psychologické JA, tešíme sa z vzácnych zmyslov a síl Esencie…</p>"
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
const url = "src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sk/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
