import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Zázračné schodiště",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Zázračné schodiště",
    "order": 2
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
    "set:html": "<p>Musíme toužit po skutečné změně, vymanit se z této nudné rutiny, z tohoto pouhého mechanického, otravného života…</p>\n<p>První, co musíme s naprostou jasností pochopit, je, že každý z nás, ať už buržoa nebo proletář, dobře situovaný nebo ze střední třídy, bohatý nebo ubohý, se skutečně nachází na takové či onaké úrovni bytí…</p>\n<p>Úroveň bytí opilce je jiná než úroveň bytí abstinenta a úroveň bytí prostitutky je velmi odlišná od úrovně bytí panny. To, co říkáme, je nevyvratitelné, nepopiratelné…</p>\n<p>Když se dostaneme k této části naší kapitoly, nic neztratíme tím, že si představíme schodiště, které se táhne zdola nahoru, svisle a s mnoha schody…</p>\n<p>Nepochybně se nacházíme na jednom z těchto schodů; o schod níže budou lidé horší než my; o schod výše budou lidé lepší než my…</p>\n<p>V této mimořádné vertikále, na tomto úžasném schodišti, je jasné, že můžeme najít všechny úrovně bytí… každý člověk je jiný a to nikdo nemůže popřít…</p>\n<p>Nepochybně teď nemluvíme o ošklivých nebo hezkých tvářích, ani se nejedná o otázku věku. Jsou mladí a staří lidé, starci, kteří už se chystají zemřít, a novorozené děti…</p>\n<p>Otázka času a let; to, že se člověk narodí, roste, vyvíjí se, ožení se, rozmnožuje se, stárne a umírá, je výhradně záležitostí horizontály…</p>\n<p>Na “Úžasném schodišti”, ve vertikále, koncept času neplatí. Na schodech takového schodiště můžeme najít pouze “úrovně bytí”…</p>\n<p>Mechanická naděje lidí k ničemu není; věří, že časem bude lépe; tak si to mysleli naši prarodiče a praprarodiče; fakta naopak dokazují opak…</p>\n<p>“Úroveň bytí” je to, co se počítá, a to je vertikální; nacházíme se na jednom schodu, ale můžeme vystoupit na jiný schod…</p>\n<p>“Úžasné schodiště”, o kterém mluvíme a které se týká různých “úrovní bytí”, jistě nemá nic společného s lineárním časem…</p>\n<p>Vyšší “úroveň bytí” je bezprostředně nad námi z okamžiku na okamžik…</p>\n<p>Není v žádné vzdálené horizontální budoucnosti, ale tady a teď; uvnitř nás samotných; ve vertikále…</p>\n<p>Je zřejmé a každý to může pochopit, že se obě linie – horizontální a vertikální – setkávají z okamžiku na okamžik v našem psychologickém nitru a tvoří kříž…</p>\n<p>Osobnost se rozvíjí a rozplývá na horizontální linii života. Rodí se a umírá v rámci svého lineárního času; je pomíjivá; pro osobnost mrtvého žádné zítřky neexistují; není to bytí…</p>\n<p>Úrovně bytí; samotné bytí, není záležitostí času, nemá nic společného s horizontální linií; nachází se uvnitř nás samotných. Nyní, ve vertikále…</p>\n<p>Bylo by zjevně absurdní hledat naše vlastní bytí mimo sebe…</p>\n<p>Neuškodí, když si jako důsledek stanovíme následující: Tituly, hodnosti, povýšení atd. ve vnějším fyzickém světě v žádném případě nezpůsobí autentické povznesení, přehodnocení bytí, přechod na vyšší schod v “úrovních bytí”…</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
