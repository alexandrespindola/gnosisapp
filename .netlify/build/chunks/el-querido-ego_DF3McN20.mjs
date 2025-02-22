import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "亲爱的自我",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. 亲爱的自我",
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
    "set:html": "<p>由于上位和下位是同一事物的两个部分，不妨提出以下推论：“上位我，下位我”是同一个黑暗的、多元化的自我的两个方面。</p>\n<p>所谓的“神圣自我”或“上位我”、“另一个自我”或类似的东西，实际上是“我自己”的诡计，是一种自我欺骗的形式。</p>\n<p>当“我”想继续存在于此世和彼世时，就会用“神圣不朽的我”的虚假概念来自我欺骗……</p>\n<p>我们谁都没有一个真正的、永久的、不变的、永恒的、难以形容的“我”，等等，等等，等等。</p>\n<p>我们谁也没有真正和真实的自我统一性；不幸的是，我们甚至没有合法的个性。</p>\n<p>自我虽然在坟墓之外继续存在，但它仍然有开始和结束。</p>\n<p>自我，“我”，从来都不是个体、单一或统一的。显然，“我”是“多个我”。</p>\n<p>在东藏，这些“多个我”被称为“心理聚合体”，或简称为“价值”，无论是积极的还是消极的。</p>\n<p>如果我们把每个“我”都看作是一个不同的人，我们可以肯定地断言：“在世界上每个活着的人的内心，都存在着许多人。”</p>\n<p>毫无疑问，在我们每个人的内心都生活着许多不同的人，有些更好，有些更坏……</p>\n<p>这些“我”中的每一个，这些人之中的每一个，都在为至高无上的地位而斗争，想要成为独一无二的，每次有机会就会控制智力大脑或情感和运动中心，直到被另一个取代……</p>\n<p>多个我的学说是由真正的千里眼，真正的开悟者在东藏教授的……</p>\n<p>我们的每一个心理缺陷都体现在某个特定的“我”身上。由于我们有成千上万甚至数百万个缺陷，显然有很多人生活在我们的内心。</p>\n<p>在心理学问题上，我们已经清楚地证明，偏执、自恋和谎言癖的人，无论如何也不会放弃对心爱的自我的崇拜。</p>\n<p>毫无疑问，这些人非常憎恨多个“我”的学说。</p>\n<p>当一个人真的想了解自己时，他必须进行自我观察，并努力了解存在于人格中的不同“我”。</p>\n<p>如果我们的任何读者仍然不理解这个多个“我”的学说，那完全是由于缺乏自我观察的实践。</p>\n<p>随着一个人练习内在的自我观察，他会自己发现许多人，许多“我”，生活在我们自己的人格中。</p>\n<p>那些否认多个我的学说的人，那些崇拜神圣自我的学说的人，毫无疑问从未认真地进行过自我观察。这次用苏格拉底式的风格来说，这些人不仅无知，而且他们还不知道自己是无知的。</p>\n<p>当然，没有认真而深刻的自我观察，我们永远无法了解自己。</p>\n<p>只要任何一个人仍然认为自己是唯一的，那么任何内在的改变都将是不可能的。</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
