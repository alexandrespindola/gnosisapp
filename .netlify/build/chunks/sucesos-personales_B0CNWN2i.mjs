import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Osobní události",
  "locale": "cs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Osobní události",
    "order": 9
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
    "set:html": "<p>Úplné, hluboké sebepozorování je nezbytné, chceme-li odhalit chybné psychologické stavy.</p>\n<p>Nelze popřít, že chybné vnitřní stavy lze napravit správnými postupy.</p>\n<p>Vzhledem k tomu, že vnitřní život je magnetem, který přitahuje vnější události, musíme naléhavě a bezodkladně odstranit z naší psychiky chybné psychologické stavy.</p>\n<p>Náprava chybných psychologických stavů je nezbytná, chceme-li zásadně změnit povahu určitých nežádoucích událostí.</p>\n<p>Změnit náš vztah k určitým událostem je možné, pokud odstraníme z našeho nitra určité absurdní psychologické stavy.</p>\n<p>Destruktivní vnější situace by se mohly stát neškodnými, a dokonce i konstruktivními, díky inteligentní nápravě chybných vnitřních stavů.</p>\n<p>Člověk může změnit povahu nepříjemných událostí, které se mu stávají, když se vnitřně očistí. Kdo nikdy nenapravuje absurdní psychologické stavy a věří si, že je velmi silný, stává se obětí okolností.</p>\n<p>Uspořádat náš neuspořádaný vnitřní dům je životně důležité, pokud si přejeme změnit směr nešťastné existence.</p>\n<p>Lidé si na všechno stěžují, trpí, pláčou, protestují, chtěli by změnit život, vymanit se z neštěstí, ve kterém se nacházejí, bohužel nepracují sami na sobě.</p>\n<p>Lidé si nechtějí uvědomit, že vnitřní život přitahuje vnější okolnosti a že pokud jsou bolestivé, je to způsobeno absurdními vnitřními stavy.</p>\n<p>Vnějšek je jen odrazem vnitřku, kdo se vnitřně změní, vytváří nový řád věcí.</p>\n<p>Vnější události by nikdy nebyly tak důležité, jako způsob, jakým na ně reagujeme.</p>\n<p>Zůstal jsi klidný před urážejícím? Přijal jsi s radostí nepříjemné projevy svých bližních?</p>\n<p>Jak jsi reagoval na nevěru milované bytosti? Nechal ses unést jedem žárlivosti? Zabil jsi? Jsi ve vězení?</p>\n<p>Nemocnice, hřbitovy, vězení jsou plné upřímných, pomýlených lidí, kteří reagovali absurdně na vnější události.</p>\n<p>Nejlepší zbraň, kterou může člověk v životě použít, je správný psychologický stav.</p>\n<p>Člověk může odzbrojit šelmy a odhalit zrádce pomocí vhodných vnitřních stavů.</p>\n<p>Chybné vnitřní stavy z nás dělají bezbranné oběti lidské zvrácenosti.</p>\n<p>Naučte se čelit nejpříjemnějším událostem praktického života s vhodným vnitřním postojem…</p>\n<p>Neztotožňujte se s žádnou událostí; pamatujte, že všechno pomíjí; naučte se vnímat život jako film a dostane se vám odměn…</p>\n<p>Nezapomínejte, že události bez jakékoli hodnoty by vás mohly dovést k neštěstí, pokud neodstraníte ze své psychiky chybné vnitřní stavy.</p>\n<p>Každá vnější událost nepochybně potřebuje vhodnou jízdenku; to znamená správný psychologický stav.</p>"
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
const url = "src/content/docs/cs/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/cs/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
