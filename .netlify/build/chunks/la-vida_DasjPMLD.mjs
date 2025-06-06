import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Өмір",
  "locale": "kk",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Өмір",
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
    "set:html": "<p>Тәжірибелік өмір саласында бізді әрдайым таң қалдыратын қарама-қайшылықтарды байқаймыз. Бай адамдар керемет резиденциялары және көптеген достары бола тұра, кейде қорқынышты азап шегеді… Қара жұмыс істейтін қарапайым жұмысшылар немесе орта тап өкілдері кейде толық бақытта өмір сүреді.</p>\n<p>Көптеген мультимиллионерлер жыныстық дәрменсіздіктен зардап шегеді, ал бай әйелдер күйеулерінің опасыздығына ащы жылайды…</p>\n<p>Жер бетіндегі байлар алтын қапастағы құзғындарға ұқсайды, қазіргі уақытта олар “дене қорғаушыларысыз” өмір сүре алмайды…</p>\n<p>Мемлекет қайраткерлері кісен тағады, олар ешқашан еркін болмайды, олар барлық жерде тіске дейін қаруланған адамдармен қоршалған…</p>\n<p>Бұл жағдайды мұқият зерттейік. Бізге өмірдің не екенін білу керек. Әркім өзі қалағандай пікір білдіруге ерікті…</p>\n<p>Не десе де, шын мәнінде ешкім ештеңе білмейді, өмір ешкім түсінбейтін мәселеге айналады…</p>\n<p>Адамдар бізге өз өмірбаяндарын тегін айтқысы келгенде, олар оқиғаларды, аттар мен фамилияларды, күндерді және т.б. келтіреді және әңгімелерін айтудан қанағаттанады…</p>\n<p>Бұл бейшара адамдар өз әңгімелерінің толық емес екенін білмейді, өйткені оқиғалар, аттар мен күндер - бұл фильмнің сыртқы көрінісі ғана, ішкі көрінісі жетіспейді…</p>\n<p>Әр оқиғаға белгілі бір көңіл-күй сәйкес келетін “сана күйлерін” білу өте маңызды.</p>\n<p>Күйлер ішкі, ал оқиғалар сыртқы, сыртқы оқиғалар бәрі емес…</p>\n<p>Ішкі күйлер деп жақсы немесе жаман ниеттерді, уайымдарды, депрессияны, ырымшылдықты, қорқынышты, күдікті, мейірімділікті, өзіне-өзі қарауды, өзін-өзі жоғары бағалауды; өзін бақытты сезіну күйлерін, қуаныш күйлерін және т.б., және т.б., және т.б. түсініңіз.</p>\n<p>Сөзсіз, ішкі күйлер сыртқы оқиғаларға дәл сәйкес келуі немесе олардың әсерінен пайда болуы мүмкін немесе олармен ешқандай байланысы болмауы мүмкін…</p>\n<p>Қалай болғанда да, күйлер мен оқиғалар әртүрлі. Әрқашан оқиғалар сәйкес күйлерге дәл сәйкес келе бермейді.</p>\n<p>Жағымды оқиғаның ішкі күйі оған сәйкес келмеуі мүмкін. Жағымсыз оқиғаның ішкі күйі оған сәйкес келмеуі мүмкін. Ұзақ уақыт күткен оқиғалар келген кезде, біз бір нәрсенің жетіспейтінін сездік…</p>\n<p>Сыртқы оқиғамен біріктірілуі керек сәйкес ішкі күйдің жетіспейтіні анық…</p>\n<p>Көбінесе күтпеген оқиға бізге ең жақсы сәттерді сыйлайтын оқиға болып шығады…</p>"
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
const url = "src/content/docs/kk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kk/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
