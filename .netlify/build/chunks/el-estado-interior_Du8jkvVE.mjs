import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "内在状态",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. 内在状态",
    "order": 7
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
    "set:html": "<p>正确地将内在状态与外在事件相结合，就是聪明地生活…</p>\n<p>任何以智慧体验的事件都需要其相应的特定内在状态…</p>\n<p>然而，不幸的是，人们在回顾自己的人生时，认为人生本身完全是由外部事件构成的…</p>\n<p>可怜的人们！他们认为如果某件事没有发生在他们身上，他们的生活会更好…</p>\n<p>他们认为好运没有眷顾他们，他们失去了快乐的机会…</p>\n<p>他们哀叹失去的东西，哭泣自己鄙视的东西，呻吟着回忆起过去的绊脚石和灾难…</p>\n<p>人们不愿意识到，苟延残喘不是生活，而有意识地存在的能力完全取决于灵魂内在状态的质量…</p>\n<p>当然，无论生活中的外部事件多么美好，如果我们在当时没有处于适当的内在状态，最好的事件也可能显得单调、乏味或 simplemente 无聊…</p>\n<p>有人焦急地等待着婚礼的庆祝，这是一件事，但可能会发生这样一件事，即在事件发生的准确时刻，他们太过于担心，以至于没有从中获得任何乐趣，以至于一切都变得像协议一样干燥和冰冷…</p>\n<p>经验告诉我们，并非所有参加宴会或舞会的人都真正享受其中…</p>\n<p>即使在最好的庆祝活动中，也永远不乏无聊的人，最美味的菜肴会使一些人高兴，而使另一些人哭泣…</p>\n<p>很少有人能够自信地将外部事件与适当的内部状态相结合…</p>\n<p>令人遗憾的是，人们不知道如何有意识地生活：他们应该笑的时候哭，应该哭的时候笑…</p>\n<p>控制是不同的：智者可以快乐，但绝不会陷入疯狂的狂热之中；悲伤但绝不会绝望和沮丧；在暴力中保持平静；在狂欢中保持节制；在淫欲中保持贞洁等等。</p>\n<p>忧郁和悲观的人们认为生活是最糟糕的，坦率地说，他们不想活下去…</p>\n<p>我们每天都看到不仅不幸的人，而且——更糟糕的是——使别人的生活也变得痛苦的人…</p>\n<p>即使这些人每天都参加派对，也不会改变；心理疾病存在于他们内心…这些人拥有绝对邪恶的内在状态…</p>\n<p>然而，这些人自称是公正的、神圣的、有德的、高尚的、乐于助人的、受难者等等等等。</p>\n<p>他们是自视过高的人；非常爱自己的人…</p>\n<p>怜悯自己并总是寻找逃避自己责任的借口的人…</p>\n<p>这样的人习惯于低级情绪，显然因此每天都在创造次等人格心理元素。</p>\n<p>不幸的事件、命运的挫折、贫困、债务、问题等等，是那些不知道如何生活的人的专属…</p>\n<p>任何人都可以形成丰富的智力文化，但很少有人学会正直地生活…</p>\n<p>当一个人想将外部事件与意识的内在状态分开时，他具体地表明自己没有能力有尊严地存在。</p>\n<p>那些学会自觉地将外部事件和内部状态相结合的人，正在走向成功的道路…</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
