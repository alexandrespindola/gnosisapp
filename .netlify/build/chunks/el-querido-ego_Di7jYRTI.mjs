import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Любимое Эго",
  "locale": "ru",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Любимое Эго",
    "order": 11
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
    "set:html": "<p>Поскольку верх и низ - это две части одного и того же, нелишним будет установить следующее следствие: “ВЕРХНЕЕ Я, НИЖНЕЕ Я” - это два аспекта одного и того же темного и множественного ЭГО.</p>\n<p>Так называемое “БОЖЕСТВЕННОЕ Я” или “ВЕРХНЕЕ Я”, “ALTER EGO” или что-то в этом роде, безусловно, является уловкой “МОЕГО Я”, формой САМООБМАНА.</p>\n<p>Когда Я хочет продолжаться здесь и в загробной жизни, оно обманывает себя ложным представлением о Бессмертном Божественном Я…</p>\n<p>Ни у кого из нас нет истинного, постоянного, неизменного, вечного, невыразимого “Я” и т.д., и т.п.</p>\n<p>Ни у кого из нас на самом деле нет истинного и подлинного Единства Существа; к сожалению, мы даже не обладаем законной индивидуальностью.</p>\n<p>Эго, хотя и продолжает существовать после могилы, имеет, однако, начало и конец.</p>\n<p>Эго, Я, никогда не является чем-то индивидуальным, единичным, цельным. Очевидно, что Я - это “Я-ЕСМЬ”.</p>\n<p>В Восточном Тибете “Я-ЕСМЬ” называют “ПСИХИЧЕСКИМИ АГРЕГАТАМИ” или просто “Ценностями”, будь то последние положительными или отрицательными.</p>\n<p>Если мы будем думать о каждом “Я” как об отдельном человеке, мы можем настойчиво утверждать следующее: “Внутри каждого человека, живущего в мире, существует много людей”.</p>\n<p>Несомненно, внутри каждого из нас живет множество разных людей, одни лучше, другие хуже…</p>\n<p>Каждое из этих Я, каждый из этих людей борется за превосходство, хочет быть исключительным, контролирует интеллектуальный мозг или эмоциональный и двигательный центры всякий раз, когда может, пока другой не вытеснит его…</p>\n<p>Доктрина о многих Я была преподана в Восточном Тибете истинными Ясновидящими, подлинными Просветленными…</p>\n<p>Каждый из наших психологических недостатков персонифицирован в том или ином Я. Поскольку у нас тысячи и даже миллионы недостатков, очевидно, что внутри нас живет много людей.</p>\n<p>В психологических вопросах мы смогли ясно показать, что субъекты, страдающие паранойей, эголатрией и мифоманией, ни за что на свете не откажутся от культа любимого Эго.</p>\n<p>Несомненно, такие люди смертельно ненавидят доктрину о многих “Я”.</p>\n<p>Когда кто-то действительно хочет познать себя, он должен самонаблюдаться и стараться познать различные “Я”, которые находятся внутри личности.</p>\n<p>Если кто-то из наших читателей еще не понимает эту доктрину о многих “Я”, это происходит исключительно из-за отсутствия практики в вопросах Самонаблюдения.</p>\n<p>По мере того, как человек практикует Внутреннее Самонаблюдение, он сам обнаруживает многих людей, многих “Я”, которые живут внутри нашей собственной личности.</p>\n<p>Те, кто отрицают доктрину о многих Я, те, кто поклоняется Божественному Я, несомненно, никогда серьезно не занимались Самонаблюдением. Говоря на этот раз в сократовском стиле, мы скажем, что эти люди не только не знают, но и не знают, что не знают.</p>\n<p>Безусловно, мы никогда не сможем познать себя без серьезного и глубокого самонаблюдения.</p>\n<p>Пока какой-либо субъект продолжает считать себя Единым, ясно, что любое внутреннее изменение будет более чем невозможным.</p>"
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
const url = "src/content/docs/ru/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ru/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
