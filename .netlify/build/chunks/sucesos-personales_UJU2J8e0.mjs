import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Личные происшествия",
  "locale": "ru",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Личные происшествия",
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
    "set:html": "<p>Полное, глубокое самонаблюдение за своим “Я” становится безотлагательным, когда речь идет об обнаружении ошибочных психологических состояний.</p>\n<p>Несомненно, ошибочные внутренние состояния могут быть исправлены с помощью правильных процедур.</p>\n<p>Поскольку внутренняя жизнь является магнитом, притягивающим внешние события, нам крайне срочно необходимо устранить из нашей психики ошибочные психологические состояния.</p>\n<p>Исправление ошибочных психологических состояний необходимо, когда требуется фундаментально изменить природу определенных нежелательных событий.</p>\n<p>Изменить наше отношение к определенным событиям возможно, если мы устраним изнутри определенные абсурдные психологические состояния.</p>\n<p>Разрушительные внешние ситуации могут стать безвредными и даже конструктивными благодаря разумному исправлению ошибочных внутренних состояний.</p>\n<p>Можно изменить природу неприятных событий, которые с нами происходят, когда мы очищаемся внутренне. Тот, кто никогда не исправляет абсурдные психологические состояния, считая себя очень сильным, становится жертвой обстоятельств.</p>\n<p>Привести в порядок наш беспорядочный внутренний дом жизненно важно, когда хочется изменить ход несчастного существования.</p>\n<p>Люди жалуются на все, страдают, плачут, протестуют, хотели бы изменить жизнь, выйти из несчастья, в котором находятся, но, к сожалению, не работают над собой.</p>\n<p>Люди не хотят осознавать, что внутренняя жизнь притягивает внешние обстоятельства, и что если они болезненны, то это связано с абсурдными внутренними состояниями.</p>\n<p>Внешнее - это всего лишь отражение внутреннего, кто меняется внутренне, порождает новый порядок вещей.</p>\n<p>Внешние события никогда не будут так важны, как способ реагирования на них.</p>\n<p>Сохранили ли вы спокойствие перед оскорбителем? Приняли ли вы с удовольствием неприятные проявления ваших ближних?</p>\n<p>Как вы отреагировали на неверность любимого человека? Поддались ли вы яду ревности? Убили? Находитесь ли вы в тюрьме?</p>\n<p>Больницы, кладбища, тюрьмы полны искренних, заблуждающихся людей, которые абсурдно отреагировали на внешние события.</p>\n<p>Лучшее оружие, которое человек может использовать в жизни, - это правильное психологическое состояние.</p>\n<p>Можно обезоружить зверей и разоблачить предателей с помощью соответствующих внутренних состояний.</p>\n<p>Ошибочные внутренние состояния превращают нас в беззащитных жертв человеческой злобы.</p>\n<p>Научитесь встречать самые неприятные события в практической жизни с правильным внутренним отношением…</p>\n<p>Не отождествляйтесь ни с каким событием; помните, что все проходит; научитесь смотреть на жизнь как на фильм и получите выгоду…</p>\n<p>Не забывайте, что события, не имеющие никакой ценности, могут привести вас к несчастью, если вы не устраните из своей психики ошибочные внутренние состояния.</p>\n<p>Каждое внешнее событие, несомненно, нуждается в подходящем билете; то есть, в точном психологическом состоянии.</p>"
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
const url = "src/content/docs/ru/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
