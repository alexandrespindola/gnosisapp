import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Osobni događaji",
  "locale": "hr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Osobni događaji",
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
    "set:html": "<p>Temeljna auto-promatranje vlastitog Ja neophodno je kada je riječ o otkrivanju pogrešnih psiholoških stanja.</p>\n<p>Nesporno je da se pogrešna unutarnja stanja mogu ispraviti ispravnim postupcima.</p>\n<p>Budući da je unutarnji život magnet koji privlači vanjske događaje, hitno moramo ukloniti pogrešna psihološka stanja iz naše psihe.</p>\n<p>Ispravljanje pogrešnih psiholoških stanja neophodno je ako želimo temeljito promijeniti prirodu određenih neželjenih događaja.</p>\n<p>Promjena našeg odnosa prema određenim događajima moguća je ako iz naše unutrašnjosti uklonimo određena apsurdna psihološka stanja.</p>\n<p>Destruktivne vanjske situacije mogle bi postati bezopasne, pa čak i konstruktivne inteligentnim ispravljanjem pogrešnih unutarnjih stanja.</p>\n<p>Čovjek može promijeniti prirodu neugodnih događaja koji mu se događaju kada se intimno pročisti. Onaj tko nikada ne ispravlja apsurdna psihološka stanja, vjerujući da je vrlo jak, postaje žrtva okolnosti.</p>\n<p>Dovođenje reda u našu neurednu unutarnju kuću je vitalno kada se želi promijeniti tijek nesretnog života.</p>\n<p>Ljudi se žale na sve, pate, plaču, prosvjeduju, žele promijeniti život, izaći iz nesreće u kojoj se nalaze, nažalost ne rade na sebi.</p>\n<p>Ljudi ne žele shvatiti da unutarnji život privlači vanjske okolnosti i da su one bolne zbog apsurdnih unutarnjih stanja.</p>\n<p>Vanjsko je samo odraz unutarnjeg, onaj tko se iznutra promijeni stvara novi poredak stvari.</p>\n<p>Vanjski događaji nikada ne bi bili toliko važni kao način na koji reagiramo na njih.</p>\n<p>Jeste li ostali mirni pred onim koji vas vrijeđa? Jeste li s radošću primili neugodne manifestacije svojih bližnjih?</p>\n<p>Kako ste reagirali na nevjeru voljene osobe? Jeste li se prepustili otrovu ljubomore? Jeste li ubili? Jeste li u zatvoru?</p>\n<p>Bolnice, groblja, zatvori puni su iskrenih zabludjelih koji su apsurdno reagirali na vanjske događaje.</p>\n<p>Najbolje oružje koje čovjek može koristiti u životu je ispravno psihološko stanje.</p>\n<p>Čovjek može razoružati zvijeri i razotkriti izdajnike primjerenim unutarnjim stanjima.</p>\n<p>Pogrešna unutarnja stanja pretvaraju nas u bespomoćne žrtve ljudske izopačenosti.</p>\n<p>Naučite se suočiti s najneugodnijim događajima praktičnog života s primjerenim unutarnjim stavom…</p>\n<p>Ne identificirajte se ni s jednim događajem; zapamtite da sve prolazi; naučite gledati život kao film i primit ćete koristi…</p>\n<p>Ne zaboravite da vas događaji bez ikakve vrijednosti mogu odvesti u nesreću ako iz svoje psihe ne uklonite pogrešna unutarnja stanja.</p>\n<p>Svaki vanjski događaj nedvojbeno treba odgovarajuću kartu; to jest, precizno psihološko stanje.</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
