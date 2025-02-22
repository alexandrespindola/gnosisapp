import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Nuostabūs laiptai",
  "locale": "lt",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Nuostabūs laiptai",
    "order": 2
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
    "set:html": "<p>Turime trokšti tikro pokyčio, ištrūkti iš šios nuobodžios rutinos, šio grynai mechaninio, erzinančio gyvenimo…</p>\n<p>Pirmiausia turime visiškai aiškiai suprasti, kad kiekvienas iš mūsų, ar tai būtų buržua, ar proletaras, pasiturintis, ar vidurinės klasės, turtingas, ar vargšas, iš tikrųjų yra tam tikrame Būties Lygyje…</p>\n<p>Girtuoklio Būties Lygis skiriasi nuo abstinento, o prostitutės – nuo mergelės. Tai, ką sakome, yra nenuginčijama, neįveikiama…</p>\n<p>Pasiekę šią savo skyriaus dalį, nieko neprarasime įsivaizduodami laiptus, kurie driekiasi iš apačios į viršų, vertikaliai ir su daugybe pakopų…</p>\n<p>Neginčijamai ant kurios nors iš šių pakopų esame mes; pakopomis žemiau bus žmonių, blogesnių už mus; pakopomis aukščiau bus geresnių už mus žmonių…</p>\n<p>Šioje nepaprastoje Vertikalėje, šiuose nuostabiuose laiptuose, aišku, kad galime rasti visus Būties Lygius… kiekvienas žmogus yra skirtingas ir to niekas negali paneigti…</p>\n<p>Be abejo, mes dabar nekalbame apie negražius ar gražius veidus, taip pat tai nėra amžiaus klausimas. Yra jaunų ir senų žmonių, senukų, kurie jau ruošiasi mirti, ir ką tik gimusių kūdikių…</p>\n<p>Laiko ir metų klausimas; tai, kas yra gimti, augti, vystytis, tuoktis, daugintis, senti ir mirti, priklauso tik Horizontaliai…</p>\n<p>“Nuostabiuose laiptuose”, Vertikalėje, laiko sąvoka netelpa. Ant tokio mastelio pakopų galime rasti tik “Būties Lygius”…</p>\n<p>Mechaninė žmonių viltis niekam netinka; jie tiki, kad laikui bėgant viskas bus geriau; taip galvojo mūsų seneliai ir proseneliai; faktai būtent įrodė priešingai…</p>\n<p>“Būties Lygis” yra tai, kas svarbu, ir tai yra Vertikalu; esame ant pakopos, bet galime pakilti ant kitos pakopos…</p>\n<p>“Nuostabūs laiptai”, apie kuriuos kalbame ir kurie susiję su skirtingais “Būties Lygiais”, tikrai neturi nieko bendra su linijiniu laiku…</p>\n<p>Aukštesnis “Būties Lygis” yra iškart virš mūsų akimirka po akimirkos…</p>\n<p>Jis yra ne kažkokioje tolimoje horizontalioje ateityje, o čia ir dabar; mūsų pačių viduje; Vertikalėje…</p>\n<p>Akivaizdu ir kiekvienas gali suprasti, kad dvi linijos – Horizontalė ir Vertikalė – susitinka akimirka po akimirkos mūsų Psichologiniame viduje ir sudaro Kryžių…</p>\n<p>Asmenybė vystosi ir rutuliojasi Horizontalioje Gyvenimo linijoje. Gimsta ir miršta savo linijiniu laiku; yra trapus; mirusiojo asmenybei rytojaus nėra; tai nėra Būtis…</p>\n<p>Būties Lygiai; pati Būtis, nepriklauso laikui, neturi nieko bendra su Horizontalia Linija; yra mūsų pačių viduje. Dabar, Vertikalėje…</p>\n<p>Būtų akivaizdžiai absurdiška ieškoti savo paties Būties už savęs…</p>\n<p>Nenorėtume nustatyti kaip išvadą, kad pavadinimai, laipsniai, paaukštinimai ir t. t. išoriniame fiziniame pasaulyje jokiu būdu nesukeltų autentiško išaukštinimo, Būties pervertinimo, perėjimo į aukštesnę pakopą “Būties Lygiuose”…</p>"
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
const url = "src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lt/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
