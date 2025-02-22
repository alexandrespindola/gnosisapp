import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Жашоо",
  "locale": "ky",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Жашоо",
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
    "set:html": "<p>Турмуштук тажрыйбада бизди таң калтырган карама-каршылыктарды ар дайым табабыз. Бай адамдар кооз резиденциясы жана көптөгөн достору менен кээде коркунучтуу азап чегишет. … Балка-кетмен кармаган жөнөкөй жумушчулар же орто класстагы адамдар кээде толук бактылуу жашашат.</p>\n<p>Көптөгөн миллиардерлер жыныстык алсыздыктан жапа чегишет, ал эми бай аялдар күйөөлөрүнүн ишенимсиздигинен катуу ыйлашат…</p>\n<p>Жердеги байлар алтын капастардын ичиндеги бүркүттөргө окшош, азыркы учурда алар “жан сакчылары” жок жашай алышпайт…</p>\n<p>Мамлекеттик адамдар чынжырларды сүйрөп жүрүшөт, алар эч качан эркин эмес, алар бардык жерде тиштерине чейин куралданган адамдар менен курчалган…</p>\n<p>Бул кырдаалды кененирээк карап көрөлү. Биз жашоо эмне экенин билишибиз керек. Ар ким өз каалагандай ой жүгүртүүгө эркин…</p>\n<p>Эмне дешпесин, чындыгында эч ким эч нерсе билбейт, жашоо эч ким түшүнбөгөн маселе болуп саналат…</p>\n<p>Адамдар бизге өздөрүнүн жашоосунун тарыхын бекер айтып берүүнү каалаганда, алар окуяларды, ысымдарды жана фамилияларды, даталарды ж.б. келтиришет жана өздөрүнүн окуяларын айтып жатып ырахат алышат…</p>\n<p>Тилекке каршы ал адамдар алардын окуялары толук эмес экенин билишпейт, анткени окуялар, ысымдар жана даталар бул тасманын сырткы көрүнүшү гана, ички көрүнүшү жетишпейт…</p>\n<p>Ар бир окуяга тигил же бул маанай дал келген “аң-сезимдин абалын” билүү өтө маанилүү.</p>\n<p>Абалдар ички, ал эми окуялар тышкы, тышкы окуялар баары эмес…</p>\n<p>Ички абалдар деп жакшы же жаман маанай, тынчсыздануу, депрессия, ырым-жырым, коркуу, шектенүү, боорукердик, өзүн-өзү сыйлоо, өзүн өзү баалоо; бактылуу болуу абалы, кубаныч абалы ж.б. түшүнүлөт.</p>\n<p>Талашсыз, ички абалдар тышкы окуяларга дал келиши мүмкүн же алардан келип чыгышы мүмкүн, же аларга эч кандай тиешеси жок болушу мүмкүн…</p>\n<p>Кандай болгон күндө да, абалдар жана окуялар ар башка. Окуялар дайыма эле окшош абалдарга дал келе бербейт</p>\n<p>Жагымдуу окуянын ички абалы ага дал келбеши мүмкүн. Жагымсыз окуянын ички абалы ага дал келбеши мүмкүн. Көптөн күткөн окуялар келгенде, биз бир нерсе жетишпей жатканын сездик…</p>\n<p>Албетте, сырткы окуя менен айкалыштырыла турган тиешелүү ички абал жетишпей жаткан…</p>\n<p>Көп учурда күтүлбөгөн окуя бизге эң жакшы көз ирмемдерди тартуулайт…</p>"
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
const url = "src/content/docs/ky/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ky/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ky/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
