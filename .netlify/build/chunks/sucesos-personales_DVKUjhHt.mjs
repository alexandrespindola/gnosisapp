import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "個人的な出来事",
  "locale": "ja",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. 個人的な出来事",
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
    "set:html": "<p>誤った心理状態を発見するには、自己の内面を深く観察することが不可欠です。</p>\n<p>疑いなく、誤った内的状態は正しい手順によって修正できます。</p>\n<p>内的生活は外的出来事を引き寄せる磁石のようなものなので、一刻も早く、私たちの精神から誤った心理状態を取り除く必要があります。</p>\n<p>望ましくない特定の出来事の性質を根本的に変えたい場合は、誤った心理状態を修正することが不可欠です。</p>\n<p>内なる私たちから特定の不条理な心理状態を取り除けば、特定の出来事との関係を変えることができます。</p>\n<p>破壊的な外的状況も、誤った内的状態を賢明に修正することで、無害になり、建設的でさえありえます。</p>\n<p>人は、内面を清めることによって、自分に起こる不快な出来事の性質を変えることができます。不条理な心理状態を修正しない人は、自分が強いと思い込み、状況の犠牲者になります。</p>\n<p>不幸な人生の流れを変えたい場合は、散らかった内なる家を整理することが重要です。</p>\n<p>人々はあらゆることに不平を言い、苦しみ、泣き、抗議し、人生を変え、自分たちが置かれている不幸から抜け出したいと思っていますが、残念ながら自分自身に対して働きかけません。</p>\n<p>内的生活が外的状況を引き寄せ、外的状況が苦痛である場合、それは不条理な内的状態が原因であることを人々は理解しようとしません。</p>\n<p>外的なものは内的なものの単なる反映であり、内的に変わる人は、物事の新しい秩序を生み出します。</p>\n<p>外的な出来事は、それらに対する反応の仕方ほど重要ではありません。</p>\n<p>あなたは侮辱者に対して平静を保ちましたか？仲間の不快な言動を快く受け入れましたか？</p>\n<p>愛する人の不貞にどのように反応しましたか？嫉妬の毒に身を任せましたか？殺しましたか？刑務所にいますか？</p>\n<p>病院、墓地、刑務所は、外的出来事に対して不条理な形で反応した、正直な誤解者でいっぱいです。</p>\n<p>人が人生で使用できる最良の武器は、正しい心理状態です。</p>\n<p>適切な内的状態によって、獣を武装解除し、裏切り者を暴くことができます。</p>\n<p>誤った内的状態は、私たちを人間の邪悪さに対する無防備な犠牲者に変えます。</p>\n<p>実生活で最も不快な出来事に、適切な内的態度で立ち向かうことを学んでください…</p>\n<p>どんな出来事にも同一化しないでください。すべては過ぎ去ることを忘れないでください。人生を映画として見て、恩恵を受けましょう…</p>\n<p>価値のない出来事が、あなたの精神から誤った内的状態を取り除かない限り、あなたを不幸に導く可能性があることを忘れないでください。</p>\n<p>それぞれの外的出来事は、間違いなく適切なチケット、つまり正確な心理状態を必要とします。</p>"
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
const url = "src/content/docs/ja/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ja/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
