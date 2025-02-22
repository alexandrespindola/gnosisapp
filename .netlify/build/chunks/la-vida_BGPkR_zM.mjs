import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Жыццё",
  "locale": "be",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Жыццё",
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
    "set:html": "<p>У сферы практычнага жыцця мы заўсёды выяўляем кантрасты, якія здзіўляюць. Заможныя людзі з цудоўным жыллём і мноствам сяброў часам пакутуюць жудасна. Сціплыя пралетарыі з кіркай і рыдлёўкай або людзі сярэдняга класа часам жывуць у поўным шчасці.</p>\n<p>Многія архімільянеры пакутуюць ад імпатэнцыі, а багатыя матроны горка плачуць з-за нявернасці мужа…</p>\n<p>Багатыя людзі зямлі падобныя да грыфаў у залатых клетках, у гэты час яны не могуць жыць без “ахоўнікаў”…</p>\n<p>Дзяржаўныя дзеячы цягнуць ланцугі, яны ніколі не вольныя, яны ходзяць паўсюль у асяроддзі ўзброеных да зубоў людзей…</p>\n<p>Вывучым гэтую сітуацыю больш дэталёва. Нам трэба ведаць, што такое жыццё. Кожны мае права меркаваць, як хоча…</p>\n<p>Што б ні казалі, пэўна, ніхто нічога не ведае, жыццё аказваецца праблемай, якую ніхто не разумее…</p>\n<p>Калі людзі жадаюць бясплатна расказаць нам гісторыю свайго жыцця, яны цытуюць падзеі, імёны і прозвішчы, даты і г.д., і адчуваюць задавальненне, расказваючы свае гісторыі…</p>\n<p>Гэтыя бедныя людзі не ведаюць, што іх гісторыі няпоўныя, таму што падзеі, імёны і даты - гэта толькі знешні бок фільма, не хапае ўнутранага боку…</p>\n<p>Важна ведаць “станы свядомасці”, кожнай падзеі адпавядае той ці іншы душэўны стан.</p>\n<p>Станы ўнутраныя, а падзеі знешнія, знешнія падзеі - гэта не ўсё…</p>\n<p>Пад унутранымі станамі разумеюць добрыя ці дрэнныя намеры, клопаты, дэпрэсію, забабоны, страх, падазронасць, міласэрнасць, самаацэнку, самапераацэнку; стану шчасця, стану радасці і г.д., і г.д., і г.д.</p>\n<p>Несумненна, унутраныя стану могуць дакладна суадносіцца са знешнімі падзеямі або ўзнікаць з іх, або не мець да іх ніякага дачынення…</p>\n<p>У любым выпадку стану і падзеі розныя. Не заўсёды падзеі дакладна супадаюць з адпаведнымі станамі</p>\n<p>Унутраны стан прыемнай падзеі можа не супадаць з ёй. Унутраны стан непрыемнай падзеі можа не супадаць з ёй. Падзеі, якіх доўга чакалі, калі яны адбыліся, мы адчулі, што чагосьці не хапае…</p>\n<p>Сапраўды, не хапала адпаведнага ўнутранага стану, які павінен быў спалучацца са знешняй падзеяй…</p>\n<p>Часта нечаканая падзея аказваецца той, якая даставіла нам найлепшыя моманты…</p>"
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
const url = "src/content/docs/be/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/be/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/be/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
