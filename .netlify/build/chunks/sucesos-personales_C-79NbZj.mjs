import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Особисті події",
  "locale": "uk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Особисті події",
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
    "set:html": "<p>Повна, глибока само-обсервація внутрішнього Я є нагальною необхідністю, коли йдеться про виявлення хибних психологічних станів.</p>\n<p>Безсумнівно, хибні внутрішні стани можна виправити за допомогою правильних процедур.</p>\n<p>Оскільки внутрішнє життя є магнітом, який притягує зовнішні події, нам терміново необхідно усунути з нашої психіки помилкові психологічні стани.</p>\n<p>Виправлення хибних психологічних станів є необхідним, коли потрібно фундаментально змінити природу певних небажаних подій.</p>\n<p>Зміна нашого ставлення до певних подій можлива, якщо ми усунемо з нашого внутрішнього світу певні абсурдні психологічні стани.</p>\n<p>Зовнішні руйнівні ситуації можуть стати нешкідливими і навіть конструктивними завдяки розумному виправленню помилкових внутрішніх станів.</p>\n<p>Можна змінити природу неприємних подій, які з нами трапляються, коли людина щиро очищається. Той, хто ніколи не виправляє абсурдні психологічні стани, вважаючи себе дуже сильним, стає жертвою обставин.</p>\n<p>Навести порядок у нашому безладному внутрішньому домі життєво необхідно, коли хочеться змінити хід нещасливого існування.</p>\n<p>Люди скаржаться на все, страждають, плачуть, протестують, хочуть змінити життя, вийти з нещастя, в якому опинилися, але, на жаль, не працюють над собою.</p>\n<p>Люди не хочуть усвідомлювати, що внутрішнє життя притягує зовнішні обставини, і якщо вони болючі, то це через абсурдні внутрішні стани.</p>\n<p>Зовнішнє є лише відображенням внутрішнього, хто змінюється внутрішньо, породжує новий порядок речей.</p>\n<p>Зовнішні події ніколи не будуть такими важливими, як спосіб реагування на них.</p>\n<p>Чи залишалися ви спокійними перед образником? Чи з радістю приймали неприємні прояви ваших ближніх?</p>\n<p>Як ви відреагували на невірність коханої людини? Чи дозволили ви отруїти себе ревнощами? Вбивали? Ви у в’язниці?</p>\n<p>Лікарні, кладовища, в’язниці переповнені щирими помилками, які абсурдно реагували на зовнішні події.</p>\n<p>Найкраща зброя, яку людина може використовувати в житті, - це правильний психологічний стан.</p>\n<p>Можна роззброїти звірів і викрити зрадників за допомогою відповідних внутрішніх станів.</p>\n<p>Хибні внутрішні стани перетворюють нас на беззахисних жертв людської розбещеності.</p>\n<p>Навчіться зустрічати найнеприємніші події практичного життя з відповідним внутрішнім настроєм…</p>\n<p>Не ідентифікуйте себе з жодною подією; пам’ятайте, що все минає; навчіться дивитися на життя як на фільм і отримаєте користь…</p>\n<p>Не забувайте, що події, які не мають жодної цінності, можуть призвести вас до нещастя, якщо ви не усунете з вашої психіки помилкові внутрішні стани.</p>\n<p>Кожна зовнішня подія, безсумнівно, потребує відповідного квитка; тобто, точного психологічного стану.</p>"
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
const url = "src/content/docs/uk/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uk/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uk/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
