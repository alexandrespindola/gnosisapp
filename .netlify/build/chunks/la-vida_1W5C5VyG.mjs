import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "삶",
  "locale": "ko",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. 삶",
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
    "set:html": "<p>실생활의 영역에서 우리는 늘 놀라운 대조를 발견합니다. 막대한 재산을 가지고 훌륭한 저택에 살며 많은 친구를 가진 부유한 사람들이 때로는 끔찍하게 고통받습니다. 반면 곡괭이와 삽을 든 소박한 노동자나 중산층 사람들은 때때로 완전한 행복 속에서 살아갑니다.</p>\n<p>많은 억만장자들이 성적 불능으로 고통받고 부유한 여성들은 남편의 불륜을 몹시 슬퍼합니다…</p>\n<p>세상의 부자들은 금새 안에 갇힌 독수리처럼 보이며, 요즘에는 “경호원” 없이는 살 수 없습니다…</p>\n<p>정치인들은 사슬을 끌고 다니며 결코 자유롭지 않고, 어디를 가든 총으로 무장한 사람들로 둘러싸여 있습니다…</p>\n<p>이 상황을 좀 더 자세히 살펴봅시다. 우리는 삶이 무엇인지 알아야 합니다. 각자는 원하는 대로 의견을 제시할 자유가 있습니다…</p>\n<p>사람들이 뭐라고 말하든 아무도 아무것도 모릅니다. 삶은 아무도 이해하지 못하는 문제입니다…</p>\n<p>사람들이 자신의 삶에 대한 이야기를 무료로 들려주고 싶어 할 때, 사건, 이름, 성, 날짜 등을 언급하며 이야기를 할 때 만족감을 느낍니다…</p>\n<p>그 불쌍한 사람들은 자신의 이야기가 불완전하다는 것을 모릅니다. 왜냐하면 사건, 이름, 날짜는 영화의 외부적인 모습일 뿐이고, 내부적인 모습이 빠져 있기 때문입니다…</p>\n<p>각 사건에는 특정한 감정 상태가 따르므로 “의식 상태”를 아는 것이 시급합니다.</p>\n<p>상태는 내적이고 사건은 외적이며, 외부적인 사건이 전부가 아닙니다…</p>\n<p>내부 상태는 좋거나 나쁜 기분, 걱정, 우울증, 미신, 두려움, 의심, 자비, 자기 배려, 자기 과대평가, 행복감, 즐거움 등으로 이해해야 합니다.</p>\n<p>의심할 여지 없이 내부 상태는 외부 사건과 정확히 일치하거나 외부 사건에 의해 발생하거나 외부 사건과 아무런 관련이 없을 수 있습니다…</p>\n<p>어쨌든 상태와 사건은 다릅니다. 사건이 항상 관련 상태와 정확히 일치하는 것은 아닙니다.</p>\n<p>유쾌한 사건의 내부 상태가 사건과 일치하지 않을 수 있습니다. 불쾌한 사건의 내부 상태가 사건과 일치하지 않을 수 있습니다. 오랫동안 기다려온 사건이 일어났을 때, 우리는 무언가가 빠졌다고 느낍니다…</p>\n<p>분명히 외부 사건과 결합되어야 할 해당 내부 상태가 빠져 있었습니다…</p>\n<p>기대하지 않았던 사건이 최고의 순간을 제공해주는 경우가 많습니다…</p>"
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
const url = "src/content/docs/ko/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ko/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ko/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
