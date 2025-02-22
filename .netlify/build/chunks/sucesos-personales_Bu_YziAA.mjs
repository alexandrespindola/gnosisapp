import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "个人经历",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. 个人经历",
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
    "set:html": "<p>对自我的全然内在观察，在发现错误的心理状态时是迫切需要的。</p>\n<p>毫无疑问，错误的内在状态可以通过正确的程序加以纠正。</p>\n<p>由于内在生活是吸引外在事件的磁铁，我们迫切需要尽快从我们的精神中消除错误的心理状态。</p>\n<p>当想要从根本上改变某些不良事件的性质时，纠正错误的心理状态是必不可少的。</p>\n<p>如果我们消除内心中某些荒谬的心理状态，改变我们与某些事件的关系是可能的。</p>\n<p>通过明智地纠正错误的内在状态，具有破坏性的外部情况可能会变得无害，甚至具有建设性。</p>\n<p>当一个人在内心深处净化自己时，他可以改变发生在我们身上的不愉快事件的性质。那些从不纠正荒谬的心理状态，自认为非常强大的人，会成为环境的受害者。</p>\n<p>当想要改变不幸的命运时，整理我们混乱的内在之家至关重要。</p>\n<p>人们抱怨一切，受苦，哭泣，抗议，想改变生活，摆脱困境，但不幸的是，他们不努力改变自己。</p>\n<p>人们不愿意识到内在生活会吸引外在环境，如果外在环境是痛苦的，那是因为荒谬的内在状态。</p>\n<p>外在仅仅是内在的反映，内在改变的人会带来新的秩序。</p>\n<p>外在事件永远不会像我们对事件的反应方式那么重要。</p>\n<p>你面对侮辱者时保持冷静了吗？你欣然接受了同胞们的不愉快表现吗？</p>\n<p>你如何回应爱人的不忠？你是否被嫉妒的毒药所控制？你杀人了吗？你还在监狱里吗？</p>\n<p>医院、墓地、陵墓、监狱里都充满了真诚的错误者，他们在面对外在事件时做出了荒谬的反应。</p>\n<p>一个人在生活中可以使用的最好武器是正确的心理状态。</p>\n<p>通过适当的内在状态，一个人可以解除野兽的武装，揭露叛徒。</p>\n<p>错误的内在状态使我们成为人类邪恶的无助受害者。</p>\n<p>学会以适当的内在态度面对现实生活中最不愉快的事件……</p>\n<p>不要认同任何事件；记住一切都会过去；学会把生活看作是一部电影，你将获得益处……</p>\n<p>不要忘记，如果你不消除精神中错误的内在状态，毫无价值的事件可能会给你带来不幸。</p>\n<p>毫无疑问，每个外部事件都需要适当的车票；也就是说，需要精确的心理状态。</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
