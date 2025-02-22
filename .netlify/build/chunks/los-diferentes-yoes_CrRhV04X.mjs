import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "不同的自我",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. 不同的自我",
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
    "set:html": "<p>被错误地称为人的理性哺乳动物，实际上并没有一个明确的个体性。</p>\n<p>毫无疑问，人类这种心理上的不统一性是造成如此多困难和痛苦的原因。</p>\n<p>身体是一个完整的整体，作为一个有机的整体运作，除非生病。</p>\n<p>然而，人类的内在生活绝不是一个心理上的统一体。</p>\n<p>最严重的是，尽管各种伪玄学和伪神秘学派怎么说，在每个人的内心深处，都缺乏心理组织。</p>\n<p>诚然，在这种情况下，在人们的内心生活中，不存在作为一个整体的和谐工作。</p>\n<p>人类就其内在状态而言，是一种心理上的多重性，是许多“自我”的总和。</p>\n<p>这个黑暗时代的无知者们崇拜“自我”，将其奉为神明，将其置于祭坛之上，称之为“另一个自我”、“更高的自我”、“神圣的自我”等等。</p>\n<p>我们所处的这个黑暗时代的“智者”们不愿意识到，“更高的自我”或“更低的自我”只是同一多元化自我的两个部分……</p>\n<p>人类当然没有一个“永恒的自我”，而是一大堆不同的、非人性的和荒谬的“自我”。</p>\n<p>可怜的、被错误地称为人的理性动物，就像一间混乱的房子，里面不是一个主人，而是许多总是想发号施令、为所欲为的仆人……</p>\n<p>廉价的伪玄学和伪神秘学最大的错误，是假设其他人拥有或者自己拥有一个“永恒不变的、无始无终的自我”……</p>\n<p>如果那些这样想的人能哪怕一瞬间觉醒意识，他们就能清楚地亲身体验到，理性的人类永远不会长时间保持不变……</p>\n<p>从心理学的角度来看，理性的哺乳动物在不断变化……</p>\n<p>认为如果一个人名叫路易斯，他就永远是路易斯，这简直像是一个非常糟糕的玩笑……</p>\n<p>那个被称为路易斯的人，自身拥有其他的“自我”，其他的“小我”，这些“小我”在不同的时刻通过他的个性来表达，即使路易斯不喜欢贪婪，他身上的另一个“自我”——我们称之为佩佩——却喜欢贪婪，等等……</p>\n<p>没有人能持续地保持不变，实际上不需要非常聪明就能充分意识到每个人无数的变化和矛盾……</p>\n<p>认为某人拥有一个“永恒不变的自我”，无疑是对邻居和对自己的一种冒犯……</p>\n<p>在每个人的内心都住着许多人，许多“自我”，任何觉醒的、有意识的人都可以亲自直接验证这一点……</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
