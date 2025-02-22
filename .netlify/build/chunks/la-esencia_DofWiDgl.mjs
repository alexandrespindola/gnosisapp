import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Същността",
  "locale": "bg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Същността",
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
    "set:html": "<p>Това, което прави всяко новородено дете красиво и очарователно, е неговата Същност; тя представлява сама по себе си неговата истинска реалност…</p>\n<p>Нормалното израстване на Същността във всяко създание, със сигурност е много остатъчно, начално…</p>\n<p>Човешкото тяло расте и се развива според биологичните закони на вида, но тези възможности са много ограничени за Същността…</p>\n<p>Безспорно Същността може да расте сама без помощ, в много малка степен…</p>\n<p>Говорейки откровено и без заобикалки, ще кажем, че спонтанното и естествено израстване на Същността е възможно само през първите три, четири и пет години от възрастта, т.е. в първия етап от живота…</p>\n<p>Хората смятат, че растежът и развитието на Същността винаги се извършват непрекъснато, в съответствие с механиката на еволюцията, но Универсалният Гностицизъм ясно учи, че това не е така…</p>\n<p>За да расте Същността повече, трябва да се случи нещо много специално, нещо ново трябва да се направи.</p>\n<p>Искам да се позова по подчертан начин на работата върху себе си. Развитието на Същността е възможно само на базата на съзнателни действия и доброволни страдания…</p>\n<p>Необходимо е да се разбере, че тези дейности не се отнасят до въпроси, свързани с професия, банки, дърводелство, зидария, подреждане на железопътни линии или офис дела…</p>\n<p>Тази работа е за всеки човек, който е развил личността си; става дума за нещо Психологическо…</p>\n<p>Всички ние знаем, че вътре в себе си имаме това, което се нарича ЕГО, АЗ, САМИЯТ АЗ, СЕБЕ СИ…</p>\n<p>За съжаление Същността е бутилирана, затворена, между ЕГО-то и това е жалко.</p>\n<p>Разтварянето на Психологическото АЗ, разграждането на неговите нежелателни елементи е спешно, неотложно, неизбежно… това е смисълът на работата върху себе си.</p>\n<p>Никога не бихме могли да освободим Същността, без предварително да разградим Психологическото АЗ…</p>\n<p>В Същността е Религията, БУДА, Мъдростта, частиците от болката на нашия Отец, който е на Небесата и всички данни, от които се нуждаем за ИНТИМНАТА АВТО-РЕАЛИЗАЦИЯ НА БИТИЕТО.</p>\n<p>Никой не би могъл да унищожи Психологическото АЗ, без предварително да елиминира нечовешките елементи, които носим вътре в себе си…</p>\n<p>Трябва да превърнем в пепел чудовищната жестокост на тези времена: завистта, която за съжаление се е превърнала в таен извор на действие; непоносимата алчност, която е направила живота толкова горчив: отвратителното злословие; клеветата, която причинява толкова трагедии; пиянството; мръсната похот, която мирише толкова лошо; и т.н., и т.н., и т.н.</p>\n<p>Тъй като всички тези мерзости се превръщат в космически прах, Същността, освен че се освобождава, ще расте и ще се развива хармонично…</p>\n<p>Безспорно, когато Психологическото АЗ е умряло, в нас блести Същността…</p>\n<p>Свободната Същност ни дава вътрешна красота; от тази красота произтичат съвършеното щастие и истинската Любов…</p>\n<p>Същността притежава множество сетива за съвършенство и изключителни природни сили…</p>\n<p>Когато “Умрем в Себе Си”, когато разтворим Психологическото АЗ, се наслаждаваме на ценните сетива и сили на Същността…</p>"
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
const url = "src/content/docs/bg/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bg/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bg/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
