import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "奇妙的阶梯",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. 奇妙的阶梯",
    "order": 2
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
    "set:html": "<p>我们必须渴望真正的改变，摆脱这令人厌烦的惯例，摆脱这纯粹机械、令人厌倦的生活……</p>\n<p>我们首先必须完全清楚地理解，我们每个人，无论是资产阶级还是无产阶级，富裕的还是中产阶级的，富有的还是贫穷的，都真正地处于这样或那样的存在层级……</p>\n<p>醉汉的存在层级与禁欲者不同，妓女的存在层级与少女截然不同。我们所说的这一点是无可辩驳、无法反驳的……</p>\n<p>当我们到达本章的这一部分时，不妨想象一下一个从下到上垂直延伸、有许多阶梯的楼梯……</p>\n<p>毫无疑问，我们正站在这些阶梯的某个阶梯上；下面的阶梯上会有比我们更糟糕的人；上面的阶梯上会找到比我们更好的人……</p>\n<p>在这非凡的垂直线上，在这美妙的阶梯上，显然我们可以找到所有的存在层级……每个人都是不同的，这一点没有人可以反驳……</p>\n<p>毫无疑问，我们现在不是在谈论丑陋或美丽的脸庞，也不是年龄问题。有年轻人和老年人，有即将去世的老人和刚出生的婴儿……</p>\n<p>时间和年龄的问题；出生、成长、发展、结婚、繁殖、衰老和死亡，是水平线特有的……</p>\n<p>在“美妙的阶梯”上，在垂直线上，时间的概念不适用。在这样的阶梯上，我们只能找到“存在层级”……</p>\n<p>人们机械的希望毫无用处；他们认为随着时间的推移，事情会变得更好；我们的祖父母和曾祖父母也是这么想的；但事实恰恰证明了相反……</p>\n<p>“存在层级”才是重要的，这是垂直的；我们正站在一个阶梯上，但我们可以爬到另一个阶梯……</p>\n<p>我们正在谈论的，与不同的“存在层级”相关的“美妙的阶梯”，当然与线性时间无关……</p>\n<p>一个更高的“存在层级”就在我们之上，时时刻刻……</p>\n<p>它不在任何遥远的水平未来中，而是在此时此地；在我们自己内部；在垂直线上……</p>\n<p>显而易见，任何人都可以理解，两条线——水平线和垂直线——时时刻刻都在我们心理内部相遇，形成十字……</p>\n<p>人格在生命的水平线上发展和展开。它在它的线性时间里出生和死亡；它是会消亡的；对于死者的人格来说，没有明天；它不是存在……</p>\n<p>存在的层级；存在本身，不属于时间，与水平线无关；它存在于我们自己内部。现在，在垂直线上……</p>\n<p>在自身之外寻找我们自己的存在，显然是荒谬的……</p>\n<p>不妨得出以下结论：头衔、学位、晋升等，在外部的物理世界中，绝不会真正地提升，不会重新评估存在，不会使我们进入“存在层级”中更高的阶梯……</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
