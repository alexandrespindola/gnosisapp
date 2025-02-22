import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Життя",
  "locale": "uk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Життя",
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
    "set:html": "<p>У сфері практичного життя ми завжди знаходимо контрасти, які вражають. Заможні люди з чудовими резиденціями та великою кількістю друзів іноді страждають жахливо. .. Скромні пролетарі з киркою та лопатою або люди із середнього класу часто живуть у цілковитому щасті.</p>\n<p>Багато архімільйонерів страждають від статевого безсилля, а багаті матрони гірко плачуть через невірність чоловіка…</p>\n<p>Багатії землі схожі на грифів у золотих клітках, в наш час вони не можуть жити без “охоронців”…</p>\n<p>Державні діячі тягнуть ланцюги, вони ніколи не бувають вільними, вони всюди оточені людьми, озброєними до зубів…</p>\n<p>Вивчимо цю ситуацію більш детально. Нам потрібно знати, що таке життя. Кожен має право висловлювати свою думку, як хоче…</p>\n<p>Що б не говорили, насправді ніхто нічого не знає, життя виявляється проблемою, яку ніхто не розуміє…</p>\n<p>Коли люди хочуть безкоштовно розповісти нам історію свого життя, вони називають події, імена та прізвища, дати тощо, і відчувають задоволення, розповідаючи свої історії…</p>\n<p>Ці бідні люди не знають, що їхні розповіді неповні, тому що події, імена та дати - це лише зовнішній аспект фільму, не вистачає внутрішнього аспекту…</p>\n<p>Необхідно знати “стани свідомості”, кожній події відповідає той чи інший душевний стан.</p>\n<p>Стани є внутрішніми, а події - зовнішніми, зовнішні події - це не все…</p>\n<p>Під внутрішніми станами слід розуміти добрий чи поганий настрій, турботи, депресію, забобони, страх, підозру, милосердя, самоповагу, переоцінку себе; стани відчуття щастя, стани радості тощо, тощо, тощо.</p>\n<p>Безперечно, внутрішні стани можуть точно відповідати зовнішнім подіям або бути спричинені ними, або не мати жодного відношення до них…</p>\n<p>У будь-якому випадку, стани та події різні. Не завжди події точно відповідають спорідненим станам.</p>\n<p>Внутрішній стан приємної події може не відповідати їй. Внутрішній стан неприємної події може не відповідати їй. На події, яких довго чекали, коли вони настали, ми відчували, що чогось не вистачає…</p>\n<p>Звісно, не вистачало відповідного внутрішнього стану, який повинен був поєднуватися із зовнішньою подією…</p>\n<p>Часто подія, якої не очікували, стає тією, яка подарувала нам найкращі моменти…</p>"
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
const url = "src/content/docs/uk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
