import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Разные Я",
  "locale": "ru",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Разные Я",
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
    "set:html": "<p>Рациональное млекопитающее, ошибочно называемое человеком, на самом деле не обладает четко выраженной индивидуальностью.</p>\n<p>Несомненно, это отсутствие психологического единства у гуманоида является причиной стольких трудностей и горестей.</p>\n<p>Физическое тело представляет собой целостную единицу и работает как органическое целое, если только оно не больно.</p>\n<p>Однако внутренняя жизнь гуманоида никоим образом не является психологическим единством.</p>\n<p>Самое серьезное во всем этом, несмотря на то, что говорят различные псевдоэзотерические и псевдооккультные школы, — это отсутствие психологической организации в глубине души каждого субъекта.</p>\n<p>Безусловно, в таких условиях не существует гармоничной работы как единого целого во внутренней жизни людей.</p>\n<p>Гуманоид, с точки зрения своего внутреннего состояния, представляет собой психологическую множественность, сумму “Я”.</p>\n<p>Невежественные просвещенные этой мрачной эпохи поклоняются “Я”, обожествляют его, возводят на алтари, называют его “ALTER EGO”, “ВЫСШЕЕ Я”, “БОЖЕСТВЕННОЕ Я” и т.д., и т.п.</p>\n<p>Не хотят осознавать “всезнайки” этого черного века, в котором мы живем, что “Высшее Я” или “Низшее Я” — это две секции одного и того же плюрализованного Эго…</p>\n<p>У гуманоида, конечно же, нет “ПОСТОЯННОГО Я”, а есть множество различных инфрачеловеческих и абсурдных “Я”.</p>\n<p>Бедный интеллектуальный зверь, ошибочно называемый человеком, подобен дому в беспорядке, где вместо одного хозяина есть много слуг, которые всегда хотят командовать и делать то, что им заблагорассудится…</p>\n<p>Самая большая ошибка дешевого псевдоэзотеризма и псевдооккультизма — это предполагать, что другие обладают или что у кого-то есть “ПОСТОЯННОЕ и НЕИЗМЕННОЕ Я” без начала и без конца…</p>\n<p>Если бы те, кто так думает, пробудили сознание хотя бы на мгновение, они могли бы ясно увидеть сами, что рациональный гуманоид никогда не бывает одним и тем же в течение долгого времени…</p>\n<p>Интеллектуальное млекопитающее с психологической точки зрения постоянно меняется…</p>\n<p>Думать, что если человека зовут Луис, то он всегда Луис, — это что-то вроде шутки с очень дурным вкусом…</p>\n<p>У этого субъекта, которого зовут Луис, есть в себе другие “Я”, другие эго, которые выражаются через его личность в разные моменты, и хотя Луису не нравится алчность, другому “Я” в нем — назовем его Пепе — нравится алчность, и так далее…</p>\n<p>Ни один человек не бывает одним и тем же непрерывно, на самом деле не нужно быть очень мудрым, чтобы полностью осознать бесчисленные изменения и противоречия каждого субъекта…</p>\n<p>Предполагать, что кто-то обладает “ПОСТОЯННЫМ и НЕИЗМЕННЫМ Я”, безусловно, равносильно злоупотреблению по отношению к ближнему и к самому себе…</p>\n<p>Внутри каждого человека живут много людей, много “Я”, это может проверить сам и непосредственно любой пробужденный, сознательный человек…</p>"
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
const url = "src/content/docs/ru/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
