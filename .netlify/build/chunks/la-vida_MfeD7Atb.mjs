import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Cuộc Sống",
  "locale": "vi",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Cuộc Sống",
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
    "set:html": "<p>Trong lĩnh vực thực tế cuộc sống, chúng ta luôn khám phá ra những sự tương phản đáng kinh ngạc. Những người giàu có với dinh thự tráng lệ và nhiều bạn bè, đôi khi phải chịu đựng những nỗi kinh hoàng… Những người lao động nghèo khổ với cuốc xẻng hoặc những người thuộc tầng lớp trung lưu, đôi khi lại sống trong hạnh phúc trọn vẹn.</p>\n<p>Nhiều tỷ phú đau khổ vì bất lực tình dục và những bà vợ giàu có cay đắng khóc than vì sự không chung thủy của chồng…</p>\n<p>Những người giàu có trên trái đất dường như là những con kền kền giữa những chiếc lồng vàng, trong thời buổi này họ không thể sống mà không có “vệ sĩ”…</p>\n<p>Các chính khách mang xiềng xích, không bao giờ được tự do, đi khắp nơi được bao quanh bởi những người có vũ trang tận răng…</p>\n<p>Hãy nghiên cứu tình huống này kỹ lưỡng hơn. Chúng ta cần biết cuộc sống là gì. Mỗi người được tự do bày tỏ ý kiến ​​của mình như mong muốn…</p>\n<p>Dù người ta nói gì, chắc chắn không ai biết gì cả, cuộc sống hóa ra là một vấn đề mà không ai hiểu được…</p>\n<p>Khi mọi người muốn kể cho chúng ta miễn phí câu chuyện cuộc đời họ, họ trích dẫn các sự kiện, tên và họ, ngày tháng, v.v., và họ cảm thấy hài lòng khi kể lại những câu chuyện của mình…</p>\n<p>Những người nghèo khổ đó không biết rằng những câu chuyện của họ không đầy đủ vì các sự kiện, tên và ngày tháng chỉ là khía cạnh bên ngoài của bộ phim, khía cạnh bên trong còn thiếu…</p>\n<p>Điều cấp thiết là phải biết “trạng thái ý thức”, mỗi sự kiện tương ứng với một trạng thái tâm trạng nhất định.</p>\n<p>Các trạng thái là bên trong và các sự kiện là bên ngoài, các sự kiện bên ngoài không phải là tất cả…</p>\n<p>Hiểu các trạng thái bên trong là những khuynh hướng tốt hay xấu, những lo lắng, sự chán nản, sự mê tín, nỗi sợ hãi, sự nghi ngờ, lòng trắc ẩn, sự tự xem xét, sự đánh giá quá cao bản thân; trạng thái cảm thấy hạnh phúc, trạng thái vui vẻ, v.v., v.v., v.v.</p>\n<p>Không thể nghi ngờ rằng các trạng thái bên trong có thể tương ứng chính xác với các sự kiện bên ngoài hoặc bắt nguồn từ chúng, hoặc không có mối quan hệ nào với chúng…</p>\n<p>Trong mọi trường hợp, các trạng thái và sự kiện khác nhau. Không phải lúc nào các sự kiện cũng tương ứng chính xác với các trạng thái liên quan</p>\n<p>Trạng thái bên trong của một sự kiện dễ chịu có thể không tương ứng với nó. Trạng thái bên trong của một sự kiện khó chịu có thể không tương ứng với nó. Những sự kiện được mong đợi từ lâu, khi đến chúng ta cảm thấy có gì đó thiếu…</p>\n<p>Chắc chắn, trạng thái bên trong tương ứng lẽ ra phải kết hợp với sự kiện bên ngoài còn thiếu…</p>\n<p>Nhiều khi, sự kiện không mong đợi lại là sự kiện mang lại cho chúng ta những khoảnh khắc tuyệt vời nhất…</p>"
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
const url = "src/content/docs/vi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/vi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/vi/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
