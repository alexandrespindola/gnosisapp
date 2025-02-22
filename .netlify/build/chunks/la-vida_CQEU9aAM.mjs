import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ar Vuhez",
  "locale": "br",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Ar Vuhez",
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
    "set:html": "<p>E tachenn ar vuhez pleustrek e kavomp atav kenglotañsoù a souezh. Tud binvidik gant un annez meurdezus ha kalz mignoned, a c’houzañv spouronus a-wechoù… Proletaerien izel a labour gant ar picoù pe tud eus ar renkadoù etre, a vez o vevañ a-wechoù e plijadur klok.</p>\n<p>Kalz arc’hvillionaerien a c’houzañv diwar divouezhrevelezh ha matronez pinvidik a ouel c’hwerv direizhder o gwaz…</p>\n<p>Ar re binvidik war an douar a seblant bezhin e-touez kaouedoù aour, er mareoù-mañ ne c’hallont ket bevañ hep “gwarded-korf”…</p>\n<p>Gwazed ar Stad a stlej chadennoù, n’int ket dieub morse, redek a reont dre bep lec’h kelc’hiet gant tud armet betek an dent…</p>\n<p>Studiemm ar saviad-mañ dre bell. Ezhomm hon eus da c’houzout petra eo ar vuhez. Pep hini a zo dieub da reiñ e ali evel ma kar…</p>\n<p>Petra bennak ma lavaront n’eus den ebet a oar netra, ar vuhez a zeu da vezañ ur gudenn na gompren den ebet…</p>\n<p>Pa fell d’an dud kontañ istor o buhez dimp evit netra, e venegont darvoudoù, anvioù-bihan hag anvioù-familh, deiziadoù, hag all, ha santout a reont plijadur o kontañ o istorioù…</p>\n<p>An dud paour-se n’ouzont ket ez eo diechu o istorioù peogwir an darvoudoù, anvioù ha deiziadoù n’int nemet ar pezh a weler eus ar film, mankout a ra ar pezh a zo en diabarzh…</p>\n<p>Urgent eo anavezout “stadoù emskiant”, da bep darvoud e klot an eil pe egile stad spered.</p>\n<p>Ar stadoù a zo diabarzh hag an darvoudoù a zo diavaez, an darvoudoù diavaez n’int ket pep tra…</p>\n<p>Komprenit dre stadoù diabarzh an dispozisionoù mat pe fall, ar prederioù, an diwaskadenn, an dreistkredennoù, ar spont, ar vurutellerezh, an drugarez, an em-soñjal, ar gourvezañs eus an Hemañ e-unan; stadoù en em santout eürus, stadoù joa, hag all, hag all, hag all.</p>\n<p>Hep mar e c’hall ar stadoù diabarzh klotañ rik gant an darvoudoù diavaez pe bezañ orinet ganto, pe n’o devez ket a liamm ebet gant ar re-se…</p>\n<p>E pep degouezh ez eo disheñvel ar stadoù hag an darvoudoù. Ne glot ket atav an darvoudoù rik gant stadoù kar</p>\n<p>Stad diabarzh un darvoud plijus ne c’hallfe ket klotañ gantañ. Stad diabarzh un darvoud displijus ne c’hallfe ket klotañ gantañ. Darvoudoù bet gortozet e-pad pell amzer, pa zeujont e santomp e vanke un dra bennak…</p>\n<p>Sur e vanke ar stad diabarzh a glote hag a oa dleet d’en em unaniñ gant an darvoud diavaez…</p>\n<p>Meur a wech an darvoud na veze ket gortozet a zeu da vezañ an hini en deus degaset deomp ar prantadoù gwellañ…</p>"
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
const url = "src/content/docs/br/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/br/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/br/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
