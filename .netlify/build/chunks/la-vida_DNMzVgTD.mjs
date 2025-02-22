import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "الحياة",
  "locale": "ar",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. الحياة",
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
    "set:html": "<p>في ميدان الحياة العملية، نكتشف دائمًا تناقضات تدهشنا. أغنياء يملكون مساكن فخمة وصداقات عديدة، يعانون أحيانًا بشكل مروع… وبروليتاريون متواضعون يعملون بالفأس والمعول، أو أشخاص من الطبقة المتوسطة، يعيشون غالبًا في سعادة تامة.</p>\n<p>العديد من أصحاب المليارات يعانون من العجز الجنسي، وأمهات ثريات يبكين بمرارة خيانة أزواجهن…</p>\n<p>أثرياء الأرض يبدون كالنسور في أقفاص ذهبية، في هذه الأوقات لا يستطيعون العيش بدون “حراس شخصيين”…</p>\n<p>رجال الدولة يجرون سلاسل، ليسوا أحرارًا أبدًا، يتجولون في كل مكان محاطين بأشخاص مسلحين حتى الأسنان…</p>\n<p>لندرس هذا الوضع بمزيد من التفصيل. نحتاج أن نعرف ما هي الحياة. لكل شخص الحق في أن يبدي رأيه كما يشاء…</p>\n<p>مهما قالوا، بالتأكيد لا أحد يعرف شيئًا، الحياة تبدو مشكلة لا يفهمها أحد…</p>\n<p>عندما يرغب الناس في أن يرووا لنا مجانًا قصة حياتهم، يذكرون الأحداث والأسماء والألقاب والتواريخ وما إلى ذلك، ويشعرون بالرضا عند سرد حكاياتهم…</p>\n<p>هؤلاء المساكين يجهلون أن رواياتهم غير مكتملة لأن الأحداث والأسماء والتواريخ ليست سوى المظهر الخارجي للفيلم، والجزء الداخلي مفقود…</p>\n<p>من الضروري معرفة “حالات الوعي”، لكل حدث حالة مزاجية معينة مقابلة.</p>\n<p>الحالات داخلية والأحداث خارجية، الأحداث الخارجية ليست كل شيء…</p>\n<p>يُفهم من الحالات الداخلية المزاج الجيد أو السيئ، والهموم، والاكتئاب، والخرافات، والخوف، والشك، والرحمة، والاعتبار الذاتي، والمبالغة في تقدير الذات؛ حالات الشعور بالسعادة، وحالات الفرح، إلخ، إلخ، إلخ.</p>\n<p>مما لا شك فيه أن الحالات الداخلية يمكن أن تتوافق تمامًا مع الأحداث الخارجية أو أن تكون ناتجة عنها، أو ألا تكون لها علاقة بها على الإطلاق…</p>\n<p>على أي حال، الحالات والأحداث مختلفة. لا تتطابق الأحداث دائمًا تمامًا مع الحالات المماثلة.</p>\n<p>قد لا تتوافق الحالة الداخلية لحدث ممتع مع الحدث نفسه. قد لا تتوافق الحالة الداخلية لحدث غير سار مع الحدث نفسه. الأحداث التي طال انتظارها، عندما أتت شعرنا أن شيئًا ما مفقود…</p>\n<p>بالتأكيد كانت الحالة الداخلية المقابلة التي كان ينبغي أن تتحد مع الحدث الخارجي مفقودة…</p>\n<p>في كثير من الأحيان، يكون الحدث الذي لم يكن متوقعًا هو الذي يوفر لنا أفضل اللحظات…</p>"
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
const url = "src/content/docs/ar/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ar/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ar/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
