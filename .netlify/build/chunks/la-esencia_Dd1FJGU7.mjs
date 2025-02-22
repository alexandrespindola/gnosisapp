import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Podstata",
  "locale": "cs",
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
    "set:html": "<p>To, co dělá každé novorozené dítě krásným a rozkošným, je jeho Esence; ta sama o sobě představuje jeho skutečnou realitu…</p>\n<p>Normální růst Esence v každém stvoření je jistě velmi malý, počáteční…</p>\n<p>Lidské tělo roste a vyvíjí se v souladu s biologickými zákony druhu, avšak takové možnosti jsou pro Esenci samy o sobě velmi omezené…</p>\n<p>Nepochybně Esence může růst sama o sobě bez pomoci jen ve velmi malé míře…</p>\n<p>Řečeno na rovinu a bez obalu, spontánní a přirozený růst Esence je možný pouze během prvních tří, čtyř a pěti let věku, to znamená v první etapě života…</p>\n<p>Lidé si myslí, že růst a vývoj Esence probíhá vždy kontinuálně, podle mechanismů evoluce, ale univerzální gnosticismus jasně učí, že tomu tak není…</p>\n<p>Aby Esence rostla více, musí se stát něco velmi speciálního, něco nového je třeba realizovat.</p>\n<p>Chci se důrazně zmínit o práci na sobě. Rozvoj Esence je možný pouze na základě vědomé práce a dobrovolného utrpení…</p>\n<p>Je nutné pochopit, že tato práce se netýká záležitostí profese, bank, truhlářství, zednictví, oprav železničních tratí nebo kancelářských záležitostí…</p>\n<p>Tato práce je pro každého, kdo si vyvinul osobnost; jedná se o něco psychologického…</p>\n<p>Všichni víme, že uvnitř sebe máme to, čemu se říká EGO, JÁ, JÁ SAMÉ, JÁ…</p>\n<p>Bohužel je Esence uvězněna, uzavřena v EGU, a to je politováníhodné.</p>\n<p>Rozpustit psychologické JÁ, dezintegrovat jeho nežádoucí prvky, je naléhavé, neodkladné, nezbytné… to je smysl práce na sobě.</p>\n<p>Nikdy bychom nemohli osvobodit Esenci, aniž bychom předtím dezintegrovali psychologické JÁ…</p>\n<p>V Esenci je náboženství, BUDDHA, Moudrost, částečky bolesti našeho Otce, který je v nebesích, a všechna data, která potřebujeme pro INTIMNÍ AUTO-REALIZACI BYTOSTI.</p>\n<p>Nikdo nemůže zničit psychologické JÁ, aniž by předtím eliminoval nelidské prvky, které v sobě nosíme…</p>\n<p>Potřebujeme spálit na popel monstrózní krutost této doby: závist, která se bohužel stala tajnou pružinou jednání; nesnesitelnou chamtivost, která tak zhořkla život; odporné pomlouvání; urážky na cti, které způsobují tolik tragédií; opilství; špinavou chtíč, která tak ošklivě páchne; atd., atd., atd.</p>\n<p>Jakmile se všechny tyto ohavnosti promění v kosmický prach, Esence se kromě emancipace bude harmonicky rozvíjet a růst…</p>\n<p>Nepochybně, když psychologické JÁ zemře, zazáří v nás Esence…</p>\n<p>Svobodná Esence nám propůjčuje intimní krásu; z této krásy vyzařuje dokonalé štěstí a pravá Láska…</p>\n<p>Esence má mnoho smyslů pro dokonalost a mimořádné přirozené síly…</p>\n<p>Když „Zemřeme v Sobě Samých”, když rozpustíme psychologické JÁ, užíváme si vzácných smyslů a sil Esence…</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
