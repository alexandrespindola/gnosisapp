import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Jiyan",
  "locale": "kmr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Jiyan",
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
    "set:html": "<p>Di qada jiyana pratîk de em her dem rastî nakokiyên ecêb tên. Kesên dewlemend ên ku xwedî niştecîhek mezin û gelek heval in, carinan bi awayekî tirsnak diêşin. Proletarên nizm ên bi pîk û belayan an jî kesên ji çîna navîn, carinan di nav bextewariyek bêkêmasî de dijîn.</p>\n<p>Gelek arşmilyarder ji bêhêziya zayendî dikişînin û matronên dewlemend bi talî ji bêbaweriya mêrê xwe digirîn…</p>\n<p>Dewlemendên dinyayê di van deman de wek pilingên di nav qefesên zêr de xuya dikin, bêyî “cerdevan” nikarin bijîn…</p>\n<p>Zilamên dewletê zincîran dikişînin, qet azad nabin, li her derê bi kesên çekdar ên heta diranan dorpêçkirî digerin…</p>\n<p>Em vî halî bi berfirehî lêkolîn bikin. Divê em bizanibin jiyan çi ye. Her kes azad e ku bi awayê ku dixwaze bifikire…</p>\n<p>Çi dibêjin bila bibêjin, bi rastî kes tiştekî nizane, jiyan dibe pirsgirêkek ku kes jê fêm nake…</p>\n<p>Dema ku mirov dixwazin bê pere çîroka jiyana xwe ji me re vebêjin, bûyer, nav û paşnav, tarîx û hwd. vedibêjin û dema ku çîrokên xwe dibêjin kêfxweş dibin…</p>\n<p>Ew mirovên belengaz nizanin ku çîrokên wan ne temam in ji ber ku bûyer, nav û tarîx tenê aliyê derve yê fîlmê ne, aliyê hundir kêm e…</p>\n<p>Pêwîst e ku meriv “rewşên hişmendiyê” bizanibe, her bûyerek bi vî rengî an jî rewşek derûnî ya din re têkildar e.</p>\n<p>Rewş hundir in û bûyer derve ne, bûyerên derve ne her tişt in…</p>\n<p>Ji rewşên hundir, meylên baş an xirab, fikar, depresyon, xurafe, tirs, guman, dilovanî, xwe-hesibandin, zêde nirxandina xwe; rewşên xwe bextewar hîs dikin, rewşên kêfê hwd., hwd., hwd. fêm bikin.</p>\n<p>Bêguman, rewşên hundir dikarin tam bi bûyerên derve re têkildar bin an jî ji wan derkevin, an jî bi wan re têkiliyek tune be…</p>\n<p>Di her rewşê de, rewş û bûyer cuda ne. Her dem bûyer bi tamî bi rewşên nêzîk re têkildar nabin</p>\n<p>Rewşa hundir a bûyerek xweş dibe ku bi wê re têkildar nebe. Rewşa hundir a bûyerek ne xweş dibe ku bi wê re têkildar nebe. Bûyerên ku em demek dirêj li bendê bûn, dema ku hatin me hîs kir ku tiştek kêm e…</p>\n<p>Bê guman rewşa hundir a têkildar ku diviyabû bi bûyera derve re were berhev kirin kêm bû…</p>\n<p>Gelek caran bûyera ku ne dihate hêvîkirin dibe ya ku kêliyên herî baş daye me…</p>"
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
const url = "src/content/docs/kmr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kmr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kmr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
