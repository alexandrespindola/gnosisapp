import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A Lényeg",
  "locale": "hu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. A Lényeg",
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
    "set:html": "<p>Ami minden újszülöttet szépé és imádnivalóvá tesz, az a Lényeg; ez önmagában a valódi valóságuk…</p>\n<p>A Lényeg normális növekedése minden teremtményben, bizonyosan nagyon csekély, kezdetleges…</p>\n<p>Az emberi test a faj biológiai törvényei szerint növekszik és fejlődik, azonban ezek a lehetőségek önmagukban nagyon korlátozottak a Lényeg számára…</p>\n<p>Kétségtelen, hogy a Lényeg csak segítség nélkül, nagyon kis mértékben képes növekedni…</p>\n<p>Őszintén és kertelés nélkül elmondjuk, hogy a Lényeg spontán és természetes növekedése csak az első három, négy és öt életévben lehetséges, azaz az élet első szakaszában…</p>\n<p>Az emberek azt gondolják, hogy a Lényeg növekedése és fejlődése mindig folyamatosan történik, a fejlődés mechanikája szerint, de az Univerzális Gnoszticizmus világosan tanítja, hogy ez nem így van…</p>\n<p>Annak érdekében, hogy a Lényeg jobban növekedjen, valami különlegesnek kell történnie, valami újat kell végrehajtani.</p>\n<p>Hangsúlyozottan szeretnék utalni az önmagunkon végzett munkára. A Lényeg fejlődése csak tudatos munkák és önkéntes szenvedések alapján lehetséges…</p>\n<p>Szükséges megérteni, hogy ezek a munkák nem szakmai kérdésekre, bankokra, asztalosmunkára, kőművesmunkára, vasútvonalak javítására vagy irodai ügyekre vonatkoznak…</p>\n<p>Ez a munka minden személynek szól, aki kifejlesztette a személyiségét; ez valami Pszichológiai…</p>\n<p>Mindannyian tudjuk, hogy van bennünk valami, amit ÉN-nek, EGO-nak, ÖNMAGAMNAK nevezünk…</p>\n<p>Sajnos a Lényeg be van zárva, bezárva az EGO közé, és ez sajnálatos.</p>\n<p>A Pszichológiai ÉN feloldása, a nemkívánatos elemeinek szétzúzása sürgős, halaszthatatlan, nem tűr halasztást… ez az önmagunkon végzett munka értelme.</p>\n<p>Soha nem tudnánk felszabadítani a Lényeget anélkül, hogy előzetesen szétzúznánk a Pszichológiai ÉN-t…</p>\n<p>A Lényegben van a Vallás, a BUDDHA, a Bölcsesség, a mennyei Atyánk fájdalomrészecskéi és minden adat, amire szükségünk van a LÉNY BELSŐ ÖNVALÓSÍTÁSÁHOZ.</p>\n<p>Senki sem tudná megsemmisíteni a Pszichológiai ÉN-t anélkül, hogy előzetesen eltávolítaná a bennünk lévő embertelen elemeket…</p>\n<p>Hamuva kell égetnünk korunk szörnyű kegyetlenségét: az irigységet, amely sajnos a cselekvés titkos rugójává vált; az elviselhetetlen kapzsiságot, amely oly keserűvé tette az életet: a visszataszító rosszindulatot; a rágalmazást, amely annyi tragédiát okoz; a részegségeket; a mocskos kéjvágyat, amely oly büdös; stb., stb., stb.</p>\n<p>Ahogy mindezen szörnyűségek kozmikus porrá válnak, a Lényeg a felszabadulás mellett harmonikusan fog növekedni és fejlődni…</p>\n<p>Kétségtelen, hogy amikor a Pszichológiai ÉN meghalt, a Lényeg ragyog bennünk…</p>\n<p>A szabad Lényeg belső szépséget kölcsönöz nekünk; ebből a szépségből árad a tökéletes boldogság és az igaz Szeretet…</p>\n<p>A Lényegnek számtalan tökéletességérzéke és rendkívüli természetes ereje van…</p>\n<p>Amikor “Meghalunk Önmagunkban”, amikor feloldjuk a Pszichológiai ÉN-t, élvezzük a Lényeg értékes érzékeit és erejét…</p>"
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
const url = "src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
