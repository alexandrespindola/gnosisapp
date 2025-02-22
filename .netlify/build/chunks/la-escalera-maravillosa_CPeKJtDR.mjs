import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "A Csodálatos Lépcső",
  "locale": "hu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. A Csodálatos Lépcső",
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
    "set:html": "<p>Vágynunk kell egy valódi változásra, ki kell lépnünk ebből a buta rutinból, ebből a pusztán mechanikus, fárasztó életből…</p>\n<p>Mindenekelőtt világosan meg kell értenünk, hogy mindannyian, legyen szó polgárról vagy proletárról, jómódúról vagy középosztálybeliről, gazdagról vagy nyomorúságosról, valójában egy bizonyos Lét-szinten vagyunk…</p>\n<p>A részeg Lét-szintje különbözik a nem ivóétól, a prostituálté pedig nagyon különbözik a szűzéétől. Amit mondunk, az megcáfolhatatlan, visszavonhatatlan…</p>\n<p>Fejezetünk ezen részéhez érve semmit sem veszítünk azzal, ha elképzelünk egy létrát, amely függőlegesen, rengeteg fokkal nyúlik fel alulról felfelé…</p>\n<p>Kétségtelen, hogy ezen a létrán valamelyik fokon állunk; alattunk rosszabb emberek lesznek, mint mi; felettünk pedig jobbak…</p>\n<p>Ebben a rendkívüli függőlegesben, ebben a csodálatos létrában egyértelmű, hogy a Lét-szintek mindegyikét megtalálhatjuk… minden ember más, és ezt senki sem cáfolhatja…</p>\n<p>Kétségtelen, hogy most nem csúnya vagy szép arcokról beszélünk, és nem is kor kérdése. Vannak fiatalok és öregek, haldokló öregek és újszülött csecsemők…</p>\n<p>Az idő és az évek kérdése; a születés, növekedés, fejlődés, házasság, szaporodás, öregedés és halál, az a vízszintes sajátja…</p>\n<p>A “Csodálatos Létrán”, a függőlegesben az idő fogalma nem fér el. Ezen létra fokain csak “Lét-szinteket” találhatunk…</p>\n<p>Az emberek mechanikus reménye semmire sem jó; azt hiszik, hogy idővel minden jobb lesz; így gondolták nagyszüleink és dédszüleink is; a tények éppen az ellenkezőjét bizonyították…</p>\n<p>A “Lét-szint” az, ami számít, és ez függőleges; egy fokon vagyunk, de feljebb is léphetünk…</p>\n<p>A “Csodálatos Létra”, amelyről beszélünk, és amely a különböző “Lét-szintekre” vonatkozik, bizonyosan semmi köze a lineáris időhöz…</p>\n<p>Egy magasabb “Lét-szint” azonnal felettünk van pillanatról pillanatra…</p>\n<p>Nincs a távoli horizontális jövőben, hanem itt és most; önmagunkban; a függőlegesben…</p>\n<p>Nyilvánvaló, és bárki megértheti, hogy a két vonal – a vízszintes és a függőleges – pillanatról pillanatra találkozik pszichológiai belsőnkben, és keresztet alkot…</p>\n<p>A személyiség a vízszintes életvonalon fejlődik és bontakozik ki. A lineáris idejében születik és hal meg; mulandó; a halott személyiségének nincs holnapja; nem a Lét…</p>\n<p>A Lét-szintek; maga a Lét, nem az időből való, semmi köze a vízszintes vonalhoz; önmagunkban van. Most, a függőlegesben…</p>\n<p>Nyilvánvalóan abszurd lenne önmagunkon kívül keresni a saját Létünket…</p>\n<p>Nem árt leszögezni a következőket: címek, fokozatok, előléptetések stb. a külső fizikai világban semmiképpen sem eredményezhetnek hiteles felmagasztosulást, a Lét újraértékelését, a “Lét-szintek” magasabb fokára lépést…</p>"
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
const url = "src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
