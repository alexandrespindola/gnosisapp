import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "本质",
  "locale": "zh",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. 本质",
    "order": 4
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
    "set:html": "<p>使所有新生儿显得美丽和可爱的，是他们的本质；这本身就构成了他们真实的现实……</p>\n<p>在所有生物中，本质的正常成长，确实是非常微弱和初期的……</p>\n<p>人体按照物种的生物学规律生长和发展，然而，这些可能性本身对本质来说是非常有限的……</p>\n<p>毫无疑问，本质只能在没有帮助的情况下，以非常小的程度自行成长……</p>\n<p>坦率地说，本质的自发和自然成长，只可能发生在最初的三、四、五年，也就是生命的早期阶段……</p>\n<p>人们认为本质的成长和发展总是以连续的方式进行，符合进化的机制，但普世诺斯底主义清楚地教导说，情况并非如此……</p>\n<p>为了让本质成长更多，必须发生一些非常特别的事情，必须做一些新的事情。</p>\n<p>我想强调的是关于自我工作。本质的发展只有在有意识的工作和自愿的痛苦的基础上才有可能……</p>\n<p>有必要理解，这些工作不是指职业、银行、木工、砖瓦匠、铁路维修或办公室事务……</p>\n<p>这项工作是为所有已经发展出人格的人准备的；这是一种心理上的东西……</p>\n<p>我们都知道，在我们自身内部，存在着被称为自我、本我、我自己、自我的东西……</p>\n<p>不幸的是，本质被禁锢和囚禁在自我之中，这是令人遗憾的。</p>\n<p>瓦解心理自我，摧毁其不良因素，是紧迫的、不可推迟的、不容延缓的……这就是自我工作的意义。</p>\n<p>如果不事先瓦解心理自我，我们就永远无法解放本质……</p>\n<p>在本质中，有宗教、佛陀、智慧、我们天父的痛苦颗粒，以及我们需要进行内在自我实现的全部数据。</p>\n<p>如果不事先消除我们内心的人性泯灭的因素，没有人能够消灭心理自我……</p>\n<p>我们需要将这个时代残酷的怪物化为灰烬：嫉妒，不幸的是它已经成为行动的秘密弹簧；令人无法忍受的贪婪，它使生活变得如此痛苦：令人厌恶的诽谤；引起如此多悲剧的诽谤；酗酒；散发着如此难闻气味的污秽的淫欲；等等，等等，等等。</p>\n<p>随着所有这些可憎之物逐渐化为宇宙尘埃，本质除了获得解放之外，还将和谐地成长和发展……</p>\n<p>毫无疑问，当心理自我死亡时，本质在我们身上闪耀……</p>\n<p>自由的本质赋予我们内在的美丽；这种美丽散发出完美的幸福和真正的爱……</p>\n<p>本质拥有多种完美的感官和非凡的自然力量……</p>\n<p>当我们“死于自身”，当我们瓦解心理自我时，我们就能享受到本质的宝贵感官和力量……</p>"
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
const url = "src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/zh/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
