import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "愛しのエゴ",
  "locale": "ja",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. 愛しのエゴ",
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
    "set:html": "<p>上下は同じものの二つの部分であることから、次の必然的な結論を述べておく。「上位の自我、下位の自我」は、同じ暗くて多元的なエゴの二つの側面である。</p>\n<p>いわゆる「神聖な自我」または「上位の自我」、「分身」またはそれに類するものは、確かに「私自身」の策略であり、自己欺瞞の一形態である。</p>\n<p>自我がこの世とあの世で生き続けたいとき、不滅の神聖な自我という誤った概念で自己欺瞞する。</p>\n<p>私たちのだれ一人として、真実で、永続的で、不変で、永遠で、言葉にできない「自我」を持っていない。</p>\n<p>私たちのだれ一人として、真の、本物の存在の統一性を持っていない。残念ながら、正当な個性さえ持っていない。</p>\n<p>エゴは墓を超えても続くが、始まりと終わりがある。</p>\n<p>エゴ、自我は、決して個人的なものではなく、単一のものでもなく、全体的なものでもない。明らかに、自我は「自我たち」である。</p>\n<p>東チベットでは、「自我たち」は「精神的集合体」または単に「価値観」と呼ばれ、後者は肯定的または否定的である。</p>\n<p>各「自我」を異なる人物として考えるなら、次のように断言できる。「世界に生きる各人の内には、多くの人が存在する」。</p>\n<p>疑いなく、私たち一人一人の内には、非常に多くの異なる人々が住んでおり、より良い人もいれば、より悪い人もいる。</p>\n<p>これらの自我のそれぞれ、これらの人々のそれぞれは、至上権を求めて戦い、排他的であろうとし、可能な限り知的脳または感情的および運動的中心を制御し、他の人がそれを追い払う。</p>\n<p>多くの自我の教義は、東チベットで真の透視能力者によって、本物の啓発者によって教えられた。</p>\n<p>私たちの心理的な欠点のそれぞれは、特定の自我に具体化されている。数千から数百万もの欠点があるので、明らかに多くの人々が私たちの内部に住んでいる。</p>\n<p>心理的な問題において、パラノイア、エゴイスト、虚言癖のある人は、愛するエゴの崇拝を絶対に放棄しないことを明確に示してきた。</p>\n<p>疑いなく、そのような人々は、多くの「自我たち」の教義を死ぬほど嫌っている。</p>\n<p>人が本当に自分自身を知りたいとき、自己観察し、性格の中にいるさまざまな「自我たち」を知ろうとしなければならない。</p>\n<p>読者の中で、この多くの「自我たち」の教義をまだ理解していない人がいるとしたら、それは自己観察の実践の欠如によるものである。</p>\n<p>内なる自己観察を実践するにつれて、私たちは自分自身の性格の中に住む多くの人々、多くの「自我たち」を自分で発見する。</p>\n<p>多くの自我の教義を否定する人々、神聖な自我を崇拝する人々は、間違いなく真剣に自己観察したことがない。今回はソクラテス風に言えば、それらの人々は知らないだけでなく、知らないことさえ知らない。</p>\n<p>確かに、真剣で深い自己観察なしには、自分自身を知ることは決してできない。</p>\n<p>誰かが自分自身を一つと見なし続ける限り、内部の変化は不可能以上のものであることは明らかである。</p>"
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
const url = "src/content/docs/ja/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
