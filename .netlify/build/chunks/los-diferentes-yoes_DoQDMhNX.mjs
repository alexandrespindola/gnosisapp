import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A Különböző Ének",
  "locale": "hu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. A Különböző Ének",
    "order": 10
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
    "set:html": "<p>A Racionális Emlős, akit tévesen embernek neveznek, valójában nem rendelkezik határozott egyéniséggel.</p>\n<p>Kétségtelen, hogy az emberféle pszichológiai egységének hiánya okozza a sok nehézséget és keserűséget.</p>\n<p>A fizikai test egy teljes egység, és szerves egészként működik, hacsak nem beteg.</p>\n<p>Az emberféle belső élete azonban semmiképpen sem pszichológiai egység.</p>\n<p>A legsúlyosabb az egészben, a különféle álezoterikus és álokkultista iskolák állításaival szemben, a pszichológiai szervezettség hiánya minden egyes alany bensőjében.</p>\n<p>Bizonyos, hogy ilyen körülmények között nincs harmonikus munka egészként az emberek belső életében.</p>\n<p>Az emberféle, belső állapotát tekintve, egy pszichológiai sokféleség, egy “Ének” összege.</p>\n<p>A tudatlan tudósok ebben a sötét korban az “Én”-t imádják, istenítik, az oltárra helyezik, “ALTER EGÓ”-nak, “FELSŐBB ÉN”-nek, “ISTENI ÉN”-nek stb., stb., stb. nevezik.</p>\n<p>Nem akarják észrevenni a “Mindentudók” ebben a sötét korban, amelyben élünk, hogy a “FELSŐBB ÉN” vagy az “ALSÓBB ÉN” ugyanazon pluralizált Egó két szekciója…</p>\n<p>Az emberféle valójában nem rendelkezik “ÁLLANDÓ ÉN”-nel, hanem rengeteg különböző Infrahumánus és abszurd “Én”-nel.</p>\n<p>A szegény intellektuális állat, akit tévesen embernek neveznek, olyan, mint egy rendetlen ház, ahol egy úr helyett sok szolga van, akik mindig parancsolni és azt akarják tenni, amihez kedvük van…</p>\n<p>A legfőbb tévedés az olcsó Álezoterizmus és Álokkultizmus részéről az a feltételezés, hogy másoknak van vagy hogy van egy “ÁLLANDÓ és VÁLTOZHATATLAN ÉN”-jük kezdet és vég nélkül…</p>\n<p>Ha azok, akik így gondolkodnak, felébrednének a tudatuk, akár csak egy pillanatra is, világosan bebizonyíthatnák maguknak, hogy a racionális emberféle soha nem ugyanaz sokáig…</p>\n<p>Az intellektuális emlős pszichológiai szempontból folyamatosan változik…</p>\n<p>Azt gondolni, hogy ha valakit Lajosnak hívnak, az mindig Lajos, olyan, mint egy nagyon rosszízű vicc…</p>\n<p>Annak a személynek, akit Lajosnak hívnak, vannak benne más “Én”-ek, más egók, amelyek a személyiségén keresztül fejeződnek ki különböző pillanatokban, és bár Lajos nem szereti a kapzsiságot, egy másik “Én” benne - nevezzük Pepének - szereti a kapzsiságot, és így tovább…</p>\n<p>Senki sem ugyanaz folyamatosan, valójában nem kell túl okosnak lenni ahhoz, hogy valaki teljes mértékben tisztában legyen az egyes személyek számtalan változásával és ellentmondásával…</p>\n<p>Feltételezni, hogy valakinek van egy “ÁLLANDÓ és VÁLTOZHATATLAN ÉN”-je, természetesen visszaélés a felebaráttal és önmagunkkal szemben…</p>\n<p>Minden emberben sok ember él, sok “Én”, ezt közvetlenül és önállóan ellenőrizheti minden éber, tudatos ember…</p>"
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
const url = "src/content/docs/hu/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
