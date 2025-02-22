import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Az Élet",
  "locale": "hu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Az Élet",
    "order": 6
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
    "set:html": "<p>A gyakorlati élet területén mindig meglepő ellentéteket fedezünk fel. Gazdag emberek, gyönyörű lakóhelyekkel és sok baráttal, néha szörnyen szenvednek. … Alázatos, csákányos és lapátos proletárok vagy a középosztály tagjai néha teljes boldogságban élnek.</p>\n<p>Sok szupergazdag szenved szexuális impotenciában, a gazdag matrónák pedig keservesen sírják férjük hűtlenségét…</p>\n<p>A föld gazdagjai keselyűknek tűnnek aranyketrecek között, manapság nem élhetnek “testőrök” nélkül…</p>\n<p>Az államférfiak láncokat cipelnek, soha nem szabadok, mindenhol fogig felfegyverzett emberek veszik körül őket…</p>\n<p>Tanulmányozzuk ezt a helyzetet alaposabban. Tudnunk kell, mi az élet. Mindenki szabadon vélekedhet, ahogy akar…</p>\n<p>Bármit is mondanak, valójában senki sem tud semmit, az élet egy olyan probléma, amelyet senki sem ért…</p>\n<p>Amikor az emberek ingyen el akarják mesélni nekünk életük történetét, eseményeket, neveket és vezetékneveket, dátumokat stb. említenek, és elégedettséget éreznek elbeszéléseik során…</p>\n<p>Ezek a szegény emberek nem tudják, hogy elbeszéléseik hiányosak, mert az események, nevek és dátumok csak a film külső aspektusát jelentik, hiányzik a belső aspektus…</p>\n<p>Sürgősen meg kell ismernünk a “tudatállapotokat”, minden eseményhez tartozik egy bizonyos lelkiállapot.</p>\n<p>Az állapotok belsők, az események külsők, a külső események nem minden…</p>\n<p>A belső állapotok alatt értsük a jó vagy rossz hajlamokat, az aggodalmakat, a depressziót, a babonát, a félelmet, a gyanakvást, a könyörületet, az öntetszelgést, az önmagasztalást; a boldogság állapotait, az öröm állapotait stb., stb., stb.</p>\n<p>Kétségtelen, hogy a belső állapotok pontosan megfelelhetnek a külső eseményeknek, vagy azok okozhatják őket, vagy semmilyen kapcsolatban sem állhatnak velük…</p>\n<p>Mindenesetre az állapotok és az események különböznek. Nem mindig felelnek meg pontosan az események a hozzájuk tartozó állapotoknak.</p>\n<p>Egy kellemes esemény belső állapota nem feltétlenül felel meg az eseménynek. Egy kellemetlen esemény belső állapota nem feltétlenül felel meg az eseménynek. Hosszú ideje várt események, amikor bekövetkeztek, éreztük, hogy valami hiányzik…</p>\n<p>Bizonyára hiányzott a megfelelő belső állapot, amelynek kombinálódnia kellett volna a külső eseménnyel…</p>\n<p>Sokszor a váratlan esemény adja a legjobb pillanatokat.</p>"
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
const url = "src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
