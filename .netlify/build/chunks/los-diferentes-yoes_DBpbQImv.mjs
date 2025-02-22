import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "異なる自己",
  "locale": "ja",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. 異なる自己",
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
    "set:html": "<p>人間と誤って呼ばれる理性的な哺乳類は、実際には明確な個性を持ち合わせていません。</p>\n<p>疑いもなく、このヒューマノイドにおける心理的な統一性の欠如が、多くの困難や苦悩の原因となっています。</p>\n<p>肉体は完全なユニットであり、病気でない限り、有機的な全体として機能します。</p>\n<p>しかし、ヒューマノイドの内面生活は、決して心理的な統一性を持っているとは言えません。</p>\n<p>様々な疑似秘教や疑似オカルティスト系の学派が主張することに反して、最も深刻なことは、各個人の心の奥底に心理的な組織がないことです。</p>\n<p>このような状況では、人々の内面生活において、全体として調和のとれた働きが存在しないのは当然です。</p>\n<p>ヒューマノイドは、その内面状態に関して言えば、心理的な多様性、つまり「自我」の集合体なのです。</p>\n<p>この暗黒時代の無知な知識人たちは、「自我」を崇拝し、神格化し、祭壇に祀り上げ、「分身」、「上位自我」、「神聖な自我」などと呼びます。</p>\n<p>私たちが生きているこの暗黒時代の「物知り顔」たちは、「上位自我」や「下位自我」が、多元化された同じエゴの二つの部分に過ぎないということに気づこうとしません…</p>\n<p>ヒューマノイドは、確かに「永続的な自我」を持っているのではなく、多くの異なる、人以下の、そして不条理な「自我」を持っているのです。</p>\n<p>人間と誤って呼ばれる哀れな知的動物は、まるで混乱した家の中にいるかのようです。そこでは、一人の主人の代わりに、常に命令し、自分の好きなようにしたい多くの召使が存在するのです…</p>\n<p>安物の疑似秘教や疑似オカルト主義の最大の誤りは、他人や自分自身が、始まりも終わりもない「永続的で不変な自我」を持っていると想定することです…</p>\n<p>もしそう考える人々が、ほんの一瞬でも意識を目覚めさせることができれば、理性的なヒューマノイドが決して長く同じままでいることはないことを、自ら明確に証明できるでしょう…</p>\n<p>知的な哺乳類は、心理学的な観点から見ると、常に変化し続けています…</p>\n<p>ある人がルイスという名前であるならば、常にルイスであると考えるのは、非常に悪趣味な冗談のようなものです…</p>\n<p>ルイスと呼ばれるその人物は、彼自身の中に他の「自我」、他のエゴを持っており、それらは異なる瞬間に彼の個性を通して表現されます。そして、たとえルイスが貪欲さを好まなくても、彼の中の別の「自我」—ペペとでも呼びましょう—は貪欲さを好むというように、次々と続くのです…</p>\n<p>誰も継続的に同じ人であるということはありません。それぞれの人の無数の変化や矛盾に気づくために、非常に賢明である必要は実際にはありません…</p>\n<p>誰かが「永続的で不変な自我」を持っていると想定することは、当然のことながら、隣人や自分自身に対する虐待に等しいのです…</p>\n<p>それぞれの人の内面には、多くの人が、多くの「自我」が住んでいます。このことは、目覚めた意識のある人なら誰でも、自分自身で直接確認することができます…</p>"
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
const url = "src/content/docs/ja/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
