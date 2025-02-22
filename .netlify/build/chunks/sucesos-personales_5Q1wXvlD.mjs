import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Лични преживявания",
  "locale": "bg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Лични преживявания",
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
    "set:html": "<p>Пълното, лично самонаблюдение на самия Аз е належащо, когато става въпрос за откриване на погрешни психологически състояния.</p>\n<p>Несъмнено погрешните вътрешни състояния могат да бъдат коригирани чрез правилни процедури.</p>\n<p>Тъй като вътрешният живот е магнитът, който привлича външни събития, спешно трябва да премахнем погрешните психологически състояния от нашата психика.</p>\n<p>Коригирането на погрешните психологически състояния е наложително, когато искате коренно да промените природата на определени нежелани събития.</p>\n<p>Промяната на отношението ни към определени събития е възможна, ако премахнем от вътрешността си определени абсурдни психологически състояния.</p>\n<p>Външни разрушителни ситуации биха могли да станат безобидни и дори конструктивни чрез интелигентната корекция на погрешните вътрешни състояния.</p>\n<p>Човек може да промени природата на неприятните събития, които ни се случват, когато се пречисти интимно. Който никога не коригира абсурдните психологически състояния, вярвайки, че е много силен, се превръща в жертва на обстоятелствата.</p>\n<p>Да внесем ред в нашия разхвърлян вътрешен дом е жизненоважно, когато искаме да променим хода на едно нещастно съществуване.</p>\n<p>Хората се оплакват от всичко, страдат, плачат, протестират, искат да променят живота си, да излязат от нещастието, в което се намират, за съжаление не работят върху себе си.</p>\n<p>Хората не искат да осъзнаят, че вътрешният живот привлича външни обстоятелства и че ако те са болезнени, това се дължи на абсурдните вътрешни състояния.</p>\n<p>Външното е само отражение на вътрешното, който се променя вътрешно, създава нов ред на нещата.</p>\n<p>Външните събития никога не биха били толкова важни, колкото начина, по който реагираме на тях.</p>\n<p>Останахте ли спокоен пред обиждащия? Приехте ли с удоволствие неприятните прояви на ближните си?</p>\n<p>Как реагирахте на изневярата на любимия човек? Поддадохте ли се на отровата на ревността? Убихте ли? В затвора ли сте?</p>\n<p>Болниците, гробищата или пантеоните, затворите са пълни с искрени, но заблудени хора, които реагираха абсурдно на външните събития.</p>\n<p>Най-доброто оръжие, което човек може да използва в живота, е правилното психологическо състояние.</p>\n<p>Човек може да обезоръжи зверове и да разкрие предатели чрез подходящи вътрешни състояния.</p>\n<p>Погрешните вътрешни състояния ни превръщат в беззащитни жертви на човешката поквара.</p>\n<p>Научете се да се изправяте пред най-неприятните събития от практическия живот с подходящо вътрешно отношение…</p>\n<p>Не се идентифицирайте с никое събитие; помнете, че всичко минава; научете се да гледате на живота като на филм и ще получите ползите…</p>\n<p>Не забравяйте, че събития без никаква стойност биха могли да ви доведат до нещастие, ако не премахнете от психиката си погрешните вътрешни състояния.</p>\n<p>Всяко външно събитие, несъмнено, се нуждае от подходящия билет; тоест от точното психологическо състояние.</p>"
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
const url = "src/content/docs/bg/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bg/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bg/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
