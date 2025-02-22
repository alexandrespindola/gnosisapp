import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Statul Interior",
  "locale": "ro",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Statul Interior",
    "order": 7
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
    "set:html": "<p>A combina corect stările interioare cu evenimentele exterioare înseamnă a ști să trăiești inteligent…</p>\n<p>Orice eveniment trăit inteligent necesită o stare interioară specifică corespunzătoare…</p>\n<p>Cu toate acestea, din păcate, când oamenii își revizuiesc viața, cred că aceasta este constituită exclusiv din evenimente exterioare…</p>\n<p>Bieteri oameni! Cred că, dacă nu li s-ar fi întâmplat un anumit eveniment, viața lor ar fi fost mai bună…</p>\n<p>Presupun că norocul le-a ieșit în cale și că au pierdut ocazia de a fi fericiți…</p>\n<p>Regretă ce au pierdut, plâng ce au disprețuit, gem amintindu-și de vechile poticniri și calamități…</p>\n<p>Oamenii nu vor să-și dea seama că a vegeta nu înseamnă a trăi și că capacitatea de a exista conștient depinde exclusiv de calitatea stărilor interioare ale Sufletului…</p>\n<p>Nu contează cât de frumoase sunt evenimentele externe ale vieții, dacă nu ne aflăm în acele momente în starea interioară potrivită, cele mai bune evenimente ni se pot părea monotone, obositoare sau pur și simplu plictisitoare…</p>\n<p>Cineva așteaptă cu nerăbdare petrecerea de nuntă, este un eveniment, dar s-ar putea întâmpla să fie atât de preocupat în momentul precis al evenimentului, încât să nu guste nicio plăcere și totul să devină la fel de arid și rece ca un protocol…</p>\n<p>Experiența ne-a învățat că nu toți cei care participă la un banchet sau la un dans se bucură cu adevărat…</p>\n<p>Nu lipsește niciodată un plictisit la cea mai bună petrecere, iar piesele cele mai delicioase îi bucură pe unii și îi fac pe alții să plângă…</p>\n<p>Foarte rare sunt persoanele care știu să combine în mod încrezător evenimentul extern cu starea internă potrivită…</p>\n<p>Este regretabil că oamenii nu știu să trăiască conștient: plâng când ar trebui să râdă și râd când ar trebui să plângă…</p>\n<p>Controlul este diferit: Înțeleptul poate fi vesel, dar niciodată plin de frenezie nebună; trist, dar niciodată disperat și abătut… senin în mijlocul violenței; abstinent în orgie; cast între luxură, etc.</p>\n<p>Persoanele melancolice și pesimiste gândesc despre viață ce e mai rău și sincer nu doresc să trăiască…</p>\n<p>În fiecare zi vedem oameni care nu numai că sunt nefericiți, dar, ceea ce este și mai rău, amărăsc și viața celorlalți…</p>\n<p>Astfel de oameni nu s-ar schimba nici dacă ar trăi zilnic din petrecere în petrecere; boala psihologică o poartă în interior… astfel de persoane posedă stări intime definitiv perverse…</p>\n<p>Cu toate acestea, acești subiecți se auto-califică drept drepți, sfinți, virtuoși, nobili, serviabili, martiri, etc., etc., etc.</p>\n<p>Sunt oameni care se auto-consideră prea mult; persoane care se iubesc mult pe sine…</p>\n<p>Indivizi care se autocompătimesc foarte mult și care caută mereu scăpări pentru a se sustrage de propriile responsabilități…</p>\n<p>Astfel de persoane sunt obișnuite cu emoțiile inferioare și este evident că, din acest motiv, creează zilnic elemente psihice infrahumane.</p>\n<p>Evenimentele nefericite, eșecurile de avere, mizeria, datoriile, problemele etc. sunt exclusivitatea acelor persoane care nu știu să trăiască…</p>\n<p>Oricine își poate forma o bogată cultură intelectuală, dar sunt foarte puține persoanele care au învățat să trăiască corect…</p>\n<p>Când cineva vrea să separe evenimentele exterioare de stările interioare ale conștiinței, demonstrează concret incapacitatea sa de a exista demn.</p>\n<p>Cei care învață să combine conștient evenimentele exterioare și stările interioare merg pe drumul succesului…</p>"
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
const url = "src/content/docs/ro/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ro/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
