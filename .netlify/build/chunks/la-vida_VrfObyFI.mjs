import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "生活",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. 生活",
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
    "set:html": "<p>在实际生活中，我们总能发现令人惊讶的对比。家境殷实、拥有豪宅和众多朋友的人，有时会遭受巨大的痛苦……而卑微的体力劳动者或中产阶级人士，有时却能生活得非常幸福。</p>\n<p>许多亿万富翁患有性功能障碍，富有的贵妇们则为丈夫的不忠而痛苦流涕……</p>\n<p>大地上的富人似乎是金笼中的秃鹫，在当今时代，他们离不开“保镖”……</p>\n<p>政治家们身负枷锁，永远无法自由，无论走到哪里都被全副武装的人包围……</p>\n<p>让我们更仔细地研究这种情况。我们需要了解什么是生活。每个人都可以自由地发表自己的意见……</p>\n<p>无论人们怎么说，确实没有人知道任何事情，生活是一个无人能懂的问题……</p>\n<p>当人们想免费向我们讲述他们的人生故事时，他们会引用事件、姓名、日期等等，并在讲述时感到满足……</p>\n<p>这些可怜的人们不知道他们的故事是不完整的，因为事件、姓名和日期只是电影的外部表现，缺乏内部视角……</p>\n<p>迫切需要了解“意识状态”，每个事件都对应着某种特定的情绪状态。</p>\n<p>状态是内在的，事件是外在的，外部事件并非全部……</p>\n<p>内在状态可以理解为良好或不良的情绪、担忧、抑郁、迷信、恐惧、怀疑、怜悯、自我关怀、自我高估；感到快乐的状态、喜悦的状态等等，等等，等等。</p>\n<p>毫无疑问，内在状态可以与外部事件完全对应，或者由外部事件引起，或者与外部事件没有任何关系……</p>\n<p>无论如何，状态和事件是不同的。事件并不总是与相关状态完全对应。</p>\n<p>一个令人愉快的事件的内在状态可能与其不对应。一个令人不快的事件的内在状态可能与其不对应。期待已久的事件到来时，我们却感到缺少了什么……</p>\n<p>确实缺少了应该与外部事件相结合的相应的内在状态……</p>\n<p>很多时候，意想不到的事件反而带来了我们最美好的时光……</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
