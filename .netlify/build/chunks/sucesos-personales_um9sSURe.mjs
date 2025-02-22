import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Személyes Események",
  "locale": "hu",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Személyes Események",
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
    "set:html": "<p>A Belső Én mély, önkéntes megfigyelése elengedhetetlen, ha helytelen pszichológiai állapotokat akarunk feltárni.</p>\n<p>Kétségtelen, hogy a helytelen belső állapotok helyes eljárásokkal korrigálhatók.</p>\n<p>Mivel a belső élet az a mágnes, amely vonzza a külső eseményeket, sürgősen, haladéktalanul el kell távolítanunk pszichénkből a téves pszichológiai állapotokat.</p>\n<p>A helytelen pszichológiai állapotok korrigálása elengedhetetlen, ha alapvetően meg akarjuk változtatni bizonyos nemkívánatos események természetét.</p>\n<p>A meghatározott eseményekhez való viszonyunk megváltoztatható, ha eltávolítunk magunkból bizonyos abszurd pszichológiai állapotokat.</p>\n<p>A pusztító külső helyzetek ártalmatlanná, sőt konstruktívvá válhatnak a helytelen belső állapotok intelligens korrekciójával.</p>\n<p>Megváltoztathatja az életében előforduló kellemetlen események természetét, ha bensőleg megtisztul. Aki soha nem korrigálja az abszurd pszichológiai állapotokat, és azt hiszi, hogy nagyon erős, az az áldozatává válik a körülményeknek.</p>\n<p>Rendet tenni a rendetlen belső házunkban létfontosságú, ha meg akarjuk változtatni egy szerencsétlen élet folyását.</p>\n<p>Az emberek mindenre panaszkodnak, szenvednek, sírnak, tiltakoznak, meg akarják változtatni az életüket, ki akarnak kerülni abból a szerencsétlenségből, amiben vannak, sajnos nem dolgoznak önmagukon.</p>\n<p>Az emberek nem akarják észrevenni, hogy a belső élet külső körülményeket vonz, és ha ezek fájdalmasak, az az abszurd belső állapotok miatt van.</p>\n<p>A külső csak a belső tükörképe, aki belül változik, új rendet teremt.</p>\n<p>A külső események soha nem lennének olyan fontosak, mint az, ahogyan reagálunk rájuk.</p>\n<p>Maradtál nyugodt a sértegető előtt? Örömmel fogadtad embertársaid kellemetlen megnyilvánulásait?</p>\n<p>Hogyan reagáltál a szeretett személy hűtlenségére? Hagytad, hogy eluralkodjon rajtad a féltékenység mérge? Öltél? Börtönben vagy?</p>\n<p>A kórházak, a temetők, a börtönök tele vannak őszinte, tévedő emberekkel, akik abszurd módon reagáltak a külső eseményekre.</p>\n<p>A legjobb fegyver, amelyet egy ember használhat az életben, egy helyes pszichológiai állapot.</p>\n<p>Meg lehet fegyverteleníteni vadakat és le lehet leplezni árulókat, megfelelő belső állapotokkal.</p>\n<p>A helytelen belső állapotok az emberi gonoszság védtelen áldozataivá tesznek bennünket.</p>\n<p>Tanuljatok meg a gyakorlati élet legkellemetlenebb eseményeivel szemben is megfelelő belső hozzáállással szembenézni…</p>\n<p>Ne azonosuljatok semmilyen eseménnyel; emlékezzetek, hogy minden elmúlik; tanuljatok meg úgy tekinteni az életre, mint egy filmre, és élvezni fogjátok az előnyöket…</p>\n<p>Ne feledjétek, hogy értéktelen események is szerencsétlenségbe sodorhatnak benneteket, ha nem távolítjátok el a helytelen belső állapotokat a pszichétekből.</p>\n<p>Minden külső esemény kétségtelenül a megfelelő jegyet igényli; vagyis a pontos pszichológiai állapotot.</p>"
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
const url = "src/content/docs/hu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hu/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
