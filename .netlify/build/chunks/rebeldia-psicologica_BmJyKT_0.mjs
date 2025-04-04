import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "心理叛逆",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. 心理叛逆",
    "order": 3
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
    "set:html": "<p>提醒我们的读者，我们自身内部存在一个数学点，这并非多余…</p>\n<p>毫无疑问，这个点绝不在过去，也不在未来…</p>\n<p>任何想发现这个神秘点的人，都必须在此刻此地，在自身内部寻找，就在这一瞬间，既不能超前一秒，也不能落后一秒…</p>\n<p>圣十字架的垂直和水平两根木头，就在这个点上相遇…</p>\n<p>因此，我们时刻都面临着两条道路：水平之路和垂直之路…</p>\n<p>显然，水平之路非常“媚俗”，“文森特和所有人”、“维列加斯和所有来的人”、“雷蒙德先生和全世界”都在走这条路…</p>\n<p>显而易见，垂直之路是不同的；这是聪明叛逆者之路，是革命者之路…</p>\n<p>当一个人想起自己，当他努力改变自己，当他不认同生活中的所有问题和痛苦时，实际上他就在走垂直之路…</p>\n<p>当然，消除负面情绪绝非易事；彻底摆脱对我们自身生活的认同；摆脱各种问题，生意、债务、分期付款、抵押贷款、电话费、水费、电费等等，等等，等等。</p>\n<p>失业者，那些由于某种原因失去工作的人，显然会因缺钱而痛苦，而忘记他们的情况，不担心，不认同他们自身的问题，实际上是极其困难的。</p>\n<p>那些受苦的人，那些哭泣的人，那些被背叛、被生活中的恶报、被忘恩负义、被诽谤或被欺骗的人，他们真的忘记了自己，忘记了他们真正的内在存在，他们完全认同他们的道德悲剧…</p>\n<p>努力改变自己是垂直之路的根本特征。如果一个人从不努力改变自己，他就永远无法踏上伟大反叛之路…</p>\n<p>我们所说的努力是指心理方面的；它关注我们所处的当下时刻的某种转变。我们需要学会活在当下…</p>\n<p>例如，一个人因情感、经济或政治问题而绝望，显然他已经忘记了自己…</p>\n<p>如果这个人停下来片刻，如果他观察情况并试图想起自己，然后努力理解他态度的意义…</p>\n<p>如果他稍微思考一下，如果他想到一切都会过去；生命是虚幻的、短暂的，死亡会将世间所有的虚荣化为灰烬…</p>\n<p>如果他明白他的问题本质上只不过是“稻草之火”，一种很快熄灭的鬼火，他很快就会惊讶地发现一切都改变了…</p>\n<p>通过逻辑对抗和内在自省来改变机械反应是可能的…</p>\n<p>显然，人们对生活中的各种情况做出机械的反应…</p>\n<p>可怜的人们！他们总是成为受害者。当有人奉承他们时，他们会微笑；当他们被羞辱时，他们会痛苦。如果他们被侮辱，他们就会侮辱；如果他们被伤害，他们就会伤害；他们永远不自由；他们的同类有能力将他们从快乐带到悲伤，从希望带到绝望。</p>\n<p>那些走水平之路的每个人都像一件乐器，他们的每个同类都会随意演奏…</p>\n<p>谁学会改变机械关系，实际上就进入了“垂直之路”。</p>\n<p>这代表了“存在层面”的根本转变，是“心理反叛”的非凡结果。</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
