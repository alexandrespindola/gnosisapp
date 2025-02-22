import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "人生",
  "locale": "ja",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. 人生",
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
    "set:html": "<p>実生活の領域では、驚くほど対照的な事柄が常に存在することに気づかされます。裕福な人々が豪華な邸宅に住み、多くの友人に囲まれていても、時に恐ろしい苦しみを味わうことがあります。一方、つるはしやシャベルを使う謙虚な労働者や、中流階級の人々が、完全に幸せな生活を送っていることもあります。</p>\n<p>多くの大富豪が性的不能に苦しみ、裕福な婦人たちが夫の不貞を嘆き悲しんでいるのです…</p>\n<p>この世の富豪たちは、金の檻の中のハゲタカのようです。最近では「ボディーガード」なしでは生きていけません…</p>\n<p>政治家たちは鎖を引きずり、決して自由ではありません。どこへ行くにも、重武装した人々に囲まれています…</p>\n<p>この状況をもっと詳しく調べてみましょう。人生とは何かを知る必要があります。誰もが自由に意見を述べることができます…</p>\n<p>何を言われようと、誰も何も知らないのは確かです。人生は誰にも理解できない問題なのです…</p>\n<p>人々が自分の人生の物語を無料で語ってくれるとき、出来事、氏名、日付などを引用し、自分の話に満足感を感じています…</p>\n<p>これらの気の毒な人々は、自分の話が不完全であることに気づいていません。なぜなら、出来事、氏名、日付は、映画の表面的な側面に過ぎず、内面的な側面が欠けているからです…</p>\n<p>「意識状態」を知ることが急務です。各出来事には、特定の精神状態が対応しています。</p>\n<p>状態は内面的であり、出来事は外面的です。外的な出来事がすべてではありません…</p>\n<p>内的な状態とは、良いまたは悪い気分、心配事、鬱、迷信、恐怖、疑念、慈悲心、自己評価、自己過大評価、幸福感、喜びの状態などを意味します。</p>\n<p>疑いなく、内的な状態は外的な出来事と正確に対応したり、外的な出来事から生じたり、または外的な出来事と全く関係がない場合があります…</p>\n<p>いずれにせよ、状態と出来事は異なります。常に出来事が親近感のある状態と正確に対応するとは限りません。</p>\n<p>楽しい出来事の内的な状態が、その出来事と対応しないこともあります。不快な出来事の内的な状態が、その出来事と対応しないこともあります。長い間待ち望んでいた出来事が起こったとき、何かが欠けていると感じることがあります…</p>\n<p>確かに、外的な出来事と組み合わされるべき対応する内的な状態が欠けていたのです…</p>\n<p>予期していなかった出来事が、最高の瞬間をもたらしてくれることもよくあります…</p>"
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
const url = "src/content/docs/ja/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
