import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Чудесная лестница",
  "locale": "ru",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Чудесная лестница",
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
    "set:html": "<p>Мы должны жаждать истинных перемен, вырваться из этой скучной рутины, из этой чисто механистичной, утомительной жизни…</p>\n<p>Первое, что мы должны понять с полной ясностью, это то, что каждый из нас, будь то буржуа или пролетарий, обеспеченный или принадлежащий к среднему классу, богатый или нищий, действительно находится на том или ином Уровне Бытия…</p>\n<p>Уровень Бытия пьяницы отличается от уровня Бытия трезвенника, а уровень Бытия проститутки очень отличается от уровня Бытия девственницы. То, что мы говорим, неопровержимо, бесспорно…</p>\n<p>Подойдя к этой части нашей главы, мы ничего не теряем, представив себе лестницу, которая простирается снизу вверх, вертикально и имеет много ступеней…</p>\n<p>Несомненно, мы находимся на какой-то из этих ступеней; на ступенях ниже будут люди хуже нас; на ступенях выше будут люди лучше нас…</p>\n<p>На этой необычной Вертикали, на этой чудесной лестнице, очевидно, мы можем найти все Уровни Бытия… каждый человек отличается, и никто не может это опровергнуть…</p>\n<p>Несомненно, сейчас мы говорим не о некрасивых или красивых лицах, и дело не в возрасте. Есть молодые и старые люди, старики, которые уже собираются умирать, и новорожденные дети…</p>\n<p>Вопрос времени и лет; то, что рождается, растет, развивается, женится, размножается, стареет и умирает, относится исключительно к Горизонтали…</p>\n<p>На “Чудесной Лестнице”, в Вертикали понятие времени не уместно. На ступенях этой лестницы мы можем найти только “Уровни Бытия”…</p>\n<p>Механическая надежда людей ни к чему не приводит; они верят, что со временем все станет лучше; так думали наши деды и прадеды; факты же показали обратное…</p>\n<p>“Уровень Бытия” - это то, что имеет значение, и это Вертикально; мы находимся на одной ступени, но можем подняться на другую ступень…</p>\n<p>“Чудесная Лестница”, о которой мы говорим и которая относится к различным “Уровням Бытия”, конечно, не имеет ничего общего с линейным временем…</p>\n<p>“Уровень Бытия” выше находится непосредственно над нами в каждый момент…</p>\n<p>Он не находится в каком-то далеком горизонтальном будущем, а здесь и сейчас; внутри нас самих; в Вертикали…</p>\n<p>Очевидно, и любой может понять, что две линии - Горизонталь и Вертикаль - встречаются в каждый момент в нашем Психологическом внутреннем мире и образуют Крест…</p>\n<p>Личность развивается и разворачивается на Горизонтальной линии Жизни. Она рождается и умирает в своем линейном времени; она преходяща; для личности умершего не существует никакого завтра; это не Бытие…</p>\n<p>Уровни Бытия; само Бытие, не от времени, не имеет ничего общего с Горизонтальной Линией; оно находится внутри нас самих. Сейчас, в Вертикали…</p>\n<p>Было бы явно абсурдно искать свое собственное Бытие вне себя…</p>\n<p>Не лишним будет заключить следующее: Титулы, звания, повышения и т. д. во внешнем физическом мире никоим образом не приведут к подлинному возвышению, переоценке Бытия, переходу на ступень выше в “Уровнях Бытия”…</p>"
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
const url = "src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
