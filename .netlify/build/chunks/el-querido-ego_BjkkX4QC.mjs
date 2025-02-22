import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Milované Ego",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Milované Ego",
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
    "set:html": "<p>Jelikož vyšší a nižší jsou dvě části téže věci, stojí za to stanovit následující důsledek: “VYŠŠÍ JÁ, NIŽŠÍ JÁ” jsou dva aspekty téhož temného a pluralizovaného EGA.</p>\n<p>Takzvané “BOŽSKÉ JÁ” nebo “VYŠŠÍ JÁ”, “ALTER EGO” nebo něco podobného, je jistě trik “MÉHO JÁ”, forma SEBEKLAMU.</p>\n<p>Když JÁ chce pokračovat zde i na onom světě, SEBEKLAME se falešnou představou o Božském Nesmrtelném JÁ…</p>\n<p>Nikdo z nás nemá pravé, trvalé, neměnné, věčné, nevýslovné atd., atd., JÁ.</p>\n<p>Nikdo z nás ve skutečnosti nemá pravou a autentickou Jednotu Bytí; bohužel ani nevlastníme legitimní individualitu.</p>\n<p>Ego, ačkoli pokračuje i za hrob, má nicméně svůj počátek a konec.</p>\n<p>Ego, JÁ, nikdy není něco individuálního, jednotného, jednototalitního. Zjevně JÁ je “JÁJA”.</p>\n<p>Ve Východním Tibetu se “JÁJA” nazývají “PSYCHICKÉ AGREGÁTY” nebo jednoduše “Hodnoty”, ať už jsou tyto poslední pozitivní nebo negativní.</p>\n<p>Pokud uvažujeme o každém “Já” jako o jiné osobě, můžeme důrazně tvrdit následující: “Uvnitř každé osoby, která žije na světě, existuje mnoho osob”.</p>\n<p>Nepochybně uvnitř každého z nás žije mnoho různých lidí, někteří lepší, jiní horší…</p>\n<p>Každé z těchto Já, každá z těchto osob bojuje o nadvládu, chce být exkluzivní, ovládá intelektuální mozek nebo emocionální a motorická centra, kdykoli může, zatímco jiný ho vytlačí…</p>\n<p>Doktrínu mnoha Já učili ve Východním Tibetu praví Jasnovidci, autentičtí Osvícenci…</p>\n<p>Každý z našich psychologických defektů je zosobněn v tom či onom Já. Jelikož máme tisíce a dokonce miliony defektů, žije zjevně mnoho lidí v našem nitru.</p>\n<p>V psychologických otázkách jsme mohli jasně prokázat, že paranoidní, egolatrické a mytomanské subjekty by se za nic na světě nevzdaly kultu milovaného Ega.</p>\n<p>Nepochybně takoví lidé smrtelně nenávidí doktrínu mnoha “JÁ”.</p>\n<p>Když se chce člověk skutečně poznat, musí se auto-pozorovat a snažit se poznat různá “JÁ”, která jsou uvnitř osobnosti.</p>\n<p>Pokud některý z našich čtenářů dosud nerozumí této doktríně mnoha “JÁ”, je to výhradně kvůli nedostatku praxe v oblasti Auto-Pozorování.</p>\n<p>Jak člověk praktikuje Vnitřní Auto-Pozorování, objevuje sám pro sebe mnoho lidí, mnoho “JÁ”, kteří žijí uvnitř naší vlastní osobnosti.</p>\n<p>Ti, kdo popírají doktrínu mnoha Já, kdo uctívají Božské JÁ, se nepochybně nikdy vážně Auto-Nepozorovali. Tentokrát v Sokratovském stylu řekneme, že tito lidé nejenže nevědí, ale navíc nevědí, že nevědí.</p>\n<p>Jistě bychom se nikdy nemohli poznat bez seriózního a hlubokého auto-pozorování.</p>\n<p>Dokud se jakýkoli subjekt bude považovat za Jednoho, je jasné, že jakákoli vnitřní změna bude víc než nemožná.</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
