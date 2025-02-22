import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Животът",
  "locale": "bg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Животът",
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
    "set:html": "<p>В областта на практическия живот винаги откриваме контрасти, които удивляват. Богати хора с великолепни жилища и много приятели, понякога страдат ужасно. .. Скромни работници с мотика и лопата или хора от средната класа, често живеят в пълно щастие.</p>\n<p>Много архимилионери страдат от сексуална импотентност, а богати матрони горчиво оплакват изневярата на съпрузите си…</p>\n<p>Богатите на земята изглеждат като лешояди в златни клетки, в днешно време не могат да живеят без “телохранители”…</p>\n<p>Държавните мъже влачат вериги, никога не са свободни, навсякъде са заобиколени от хора, въоръжени до зъби…</p>\n<p>Нека проучим тази ситуация по-подробно. Трябва да знаем какво е животът. Всеки е свободен да мисли както си иска…</p>\n<p>Каквото и да казват, със сигурност никой не знае нищо, животът е проблем, който никой не разбира…</p>\n<p>Когато хората искат да ни разкажат безплатно историята на живота си, те цитират събития, имена и фамилии, дати и т.н., и изпитват удовлетворение, когато разказват историите си…</p>\n<p>Тези бедни хора не знаят, че техните истории са непълни, защото събитията, имената и датите са само външният аспект на филма, липсва вътрешният аспект…</p>\n<p>Наложително е да познаваме “състоянията на съзнанието”, на всяко събитие съответства определено душевно състояние.</p>\n<p>Състоянията са вътрешни, а събитията са външни, външните събития не са всичко…</p>\n<p>Разбирайте под вътрешни състояния добрите или лошите нагласи, притесненията, депресията, суеверието, страха, подозрението, милосърдието, самооценката, надценяването на себе си; състояния на щастие, състояния на наслада и т.н., и т.н., и т.н.</p>\n<p>Безспорно вътрешните състояния могат да съответстват точно на външните събития или да бъдат причинени от тях, или да нямат никаква връзка с тях…</p>\n<p>Във всеки случай състоянията и събитията са различни. Не винаги събитията съответстват точно на сродни състояния</p>\n<p>Вътрешното състояние на едно приятно събитие може да не съответства на самото събитие. Вътрешното състояние на едно неприятно събитие може да не съответства на самото събитие. Събития, очаквани дълго време, когато дойдоха, почувствахме, че нещо липсва…</p>\n<p>Със сигурност липсваше съответното вътрешно състояние, което трябваше да се комбинира с външното събитие…</p>\n<p>Много пъти събитието, което не се е очаквало, се оказва това, което ни е донесло най-добрите моменти…</p>"
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
const url = "src/content/docs/bg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
