import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Жизнь",
  "locale": "ru",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Жизнь",
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
    "set:html": "<p>В сфере практической жизни мы всегда обнаруживаем поразительные контрасты. Богатые люди с великолепными резиденциями и множеством друзей иногда страдают ужасно. Скромные пролетарии с киркой и лопатой или представители среднего класса зачастую живут в полном счастье.</p>\n<p>Многие архимиллионеры страдают от сексуального бессилия, а богатые матроны горько оплакивают неверность мужа…</p>\n<p>Богачи мира сего похожи на грифов в золотых клетках, в наше время они не могут жить без “телохранителей”…</p>\n<p>Государственные мужи тащат за собой цепи, они никогда не бывают свободны, они повсюду ходят в окружении вооруженных до зубов людей…</p>\n<p>Изучим эту ситуацию более внимательно. Нам нужно знать, что такое жизнь. Каждый волен думать, как хочет…</p>\n<p>Что бы ни говорили, никто ничего не знает, жизнь оказывается проблемой, которую никто не понимает…</p>\n<p>Когда люди хотят бесплатно рассказать нам историю своей жизни, они цитируют события, имена и фамилии, даты и т.д., и чувствуют удовлетворение, рассказывая свои истории…</p>\n<p>Эти бедные люди не знают, что их рассказы неполны, потому что события, имена и даты - это всего лишь внешняя сторона фильма, отсутствует внутренняя сторона…</p>\n<p>Необходимо знать “состояния сознания”, каждому событию соответствует то или иное душевное состояние.</p>\n<p>Состояния внутренние, а события внешние, внешние события - это еще не все…</p>\n<p>Под внутренними состояниями понимаются хорошие или плохие настроения, беспокойства, депрессия, суеверие, страх, подозрение, милосердие, самоуважение, переоценка себя; состояния счастья, состояния радости и т.д., и т.п.</p>\n<p>Несомненно, внутренние состояния могут точно соответствовать внешним событиям или быть вызваны ими, или не иметь к ним никакого отношения…</p>\n<p>В любом случае, состояния и события различны. Не всегда события точно соответствуют родственным состояниям.</p>\n<p>Внутреннее состояние приятного события может не соответствовать ему. Внутреннее состояние неприятного события может не соответствовать ему. События, которых долго ждали, когда наступали, мы чувствовали, что чего-то не хватает…</p>\n<p>Конечно, не хватало соответствующего внутреннего состояния, которое должно было сочетаться с внешним событием…</p>\n<p>Часто событие, которого не ждали, оказывается тем, которое доставляет нам лучшие моменты…</p>"
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
const url = "src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
