import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Різні Я",
  "locale": "uk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Різні Я",
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
    "set:html": "<p>Раціональний ссавець, помилково названий людиною, насправді не володіє визначеною індивідуальністю.</p>\n<p>Безсумнівно, ця відсутність психологічної єдності в гуманоїді є причиною стількох труднощів і гіркоти.</p>\n<p>Фізичне тіло є цілісною одиницею і працює як органічне ціле, якщо воно не хворе.</p>\n<p>Однак внутрішнє життя гуманоїда жодним чином не є психологічною єдністю.</p>\n<p>Найсерйозніше з усього цього, всупереч тому, що говорять різні псевдоезотеричні та псевдоокультні школи, - це відсутність психологічної організації в глибині кожної особи.</p>\n<p>Безсумнівно, за таких умов у внутрішньому житті людей не існує гармонійної роботи як єдиного цілого.</p>\n<p>Гуманоїд, щодо свого внутрішнього стану, є психологічною множинністю, сумою “Я”.</p>\n<p>Неосвічені інтелектуали цієї темної епохи поклоняються “Я”, обожнюють його, ставлять на вівтарі, називають “ALTER EGO”, “ВИЩЕ Я”, “БОЖЕСТВЕННЕ Я” і т.д., і т.п.</p>\n<p>“Всезнайки” цієї чорної епохи, в якій ми живемо, не хочуть усвідомлювати, що “Вище Я” або “Нижче Я” - це дві секції одного і того ж плюралізованого Его…</p>\n<p>Гуманоїд, безумовно, не має “ПОСТІЙНОГО Я”, а має безліч різних Інфралюдських і абсурдних “Я”.</p>\n<p>Бідна інтелектуальна тварина, помилково названа людиною, схожа на будинок у безладі, де замість одного господаря є багато слуг, які завжди хочуть командувати і робити те, що їм заманеться…</p>\n<p>Найбільша помилка дешевого псевдоезотеризму і псевдоокультизму полягає в тому, що вони припускають, що інші володіють або що у них є “ПОСТІЙНЕ і НЕЗМІННЕ Я” без початку і кінця…</p>\n<p>Якщо б ті, хто так думає, хоча б на мить пробудили свідомість, вони могли б чітко самі переконатися, що раціональний гуманоїд ніколи не буває довго однаковим…</p>\n<p>Інтелектуальний ссавець з психологічної точки зору постійно змінюється…</p>\n<p>Думати, що якщо людину звати Луїс, то вона завжди Луїс, - це щось на зразок жарту з дуже поганим смаком…</p>\n<p>Ця особа, яку називають Луїсом, має в собі інші “Я”, інші его, які виражаються через його особистість в різні моменти, і хоча Луїс не любить жадібності, інше “Я” в ньому - назвемо його Пепе - любить жадібність, і так далі…</p>\n<p>Жодна людина не є постійно однаковою, насправді не потрібно бути дуже мудрим, щоб повністю усвідомити незліченні зміни і протиріччя кожної особи…</p>\n<p>Припускати, що хтось володіє “ПОСТІЙНИМ і НЕЗМІННИМ Я”, безумовно, рівнозначно зловживанню стосовно ближнього і до самого себе…</p>\n<p>Всередині кожної людини живе багато людей, багато “Я”, це може перевірити самостійно і безпосередньо будь-яка людина, яка прокинулася, свідома…</p>"
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
const url = "src/content/docs/uk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uk/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
