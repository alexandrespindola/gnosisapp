import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "本質",
  "locale": "ja",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. 本質",
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
    "set:html": "<p>生まれたばかりのすべての子供を美しく愛らしくするのは、その本質です。本質こそが、その真実の姿なのです。</p>\n<p>すべての生き物において、本質が正常に成長することは、確かにごくわずかで、初期の段階に過ぎません。</p>\n<p>人体は、種の生物学的法則に従って成長・発達しますが、そのような可能性は、本質にとっては非常に限られています。</p>\n<p>疑いなく、本質は助けなしでは、ごくわずかしか成長できません。</p>\n<p>率直に言えば、本質の自発的かつ自然な成長は、最初の3、4、5歳、つまり人生の最初の段階でのみ可能です。</p>\n<p>人々は、本質の成長と発達は常に進化のメカニズムに従って継続的に行われると考えていますが、普遍グノーシス主義は、そうではないことを明確に教えています。</p>\n<p>本質がより成長するためには、何か特別なことが起こらなければならず、何か新しいことを実行する必要があります。</p>\n<p>私は、自己に対する取り組みを強調したいと思います。本質の成長は、意識的な努力と自発的な苦しみによってのみ可能です。</p>\n<p>これらの努力は、職業、銀行、大工仕事、石工仕事、鉄道の修理、または事務仕事に関するものではないことを理解する必要があります。</p>\n<p>この取り組みは、人格を発達させたすべての人を対象としたものであり、心理的なものです。</p>\n<p>私たち全員は、自分自身の中に、自我、私、自分自身と呼ばれるものを持っていることを知っています。</p>\n<p>残念ながら、本質は自我の中に閉じ込められており、これは嘆かわしいことです。</p>\n<p>心理的な自我を解消し、その望ましくない要素を分解することは、緊急かつ不可欠なことです。これが自己に対する取り組みの意味です。</p>\n<p>心理的な自我を事前に分解しなければ、本質を解放することは決してできません。</p>\n<p>本質の中には、宗教、仏陀、知恵、天にいます私たちの父の苦しみの粒子、そして自己実現に必要なすべてのデータが含まれています。</p>\n<p>私たちの中にいる非人間的な要素を事前に排除しなければ、誰も心理的な自我を消滅させることはできません。</p>\n<p>私たちは、この時代の残酷で異様なものを灰に変える必要があります。残念ながら行動の秘密の源泉となっている嫉妬、人生を非常に苦いものにした耐え難い貪欲、うんざりするような中傷、多くの悲劇を引き起こす中傷、酔っ払い、非常に嫌な臭いのする不潔な欲望などです。</p>\n<p>これらの忌まわしいものが宇宙の塵へと還元されるにつれて、本質は解放されるだけでなく、調和的に成長・発達します。</p>\n<p>疑いなく、心理的な自我が死んだとき、私たちの中に本質が輝きます。</p>\n<p>自由な本質は、私たちに内なる美しさをもたらします。そのような美しさから、完璧な幸福と真実の愛が生まれます。</p>\n<p>本質は、多種多様な完璧さの感覚と、並外れた自然の力を持っています。</p>\n<p>私たちが「自己の中で死ぬ」とき、心理的な自我を解消するとき、本質の貴重な感覚と力を享受します。</p>"
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
const url = "src/content/docs/ja/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
