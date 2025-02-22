import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Lični događaji",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Lični događaji",
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
    "set:html": "<p>Potpuno intimno samoosmatranje Sopstva postaje neizbežno kada se radi o otkrivanju pogrešnih psiholoških stanja.</p>\n<p>Nesumnjivo se pogrešna unutrašnja stanja mogu ispraviti ispravnim postupcima.</p>\n<p>Budući da je unutrašnji život magnet koji privlači spoljašnje događaje, hitno moramo, bez odlaganja, ukloniti pogrešna psihološka stanja iz naše psihe.</p>\n<p>Ispravljanje pogrešnih psiholoških stanja je neophodno kada se želi fundamentalno promeniti priroda određenih neželjenih događaja.</p>\n<p>Promena našeg odnosa prema određenim događajima je moguća ako iz naše unutrašnjosti uklonimo određena apsurdna psihološka stanja.</p>\n<p>Destruktivne spoljašnje situacije mogle bi postati bezopasne, pa čak i konstruktivne, inteligentnom korekcijom pogrešnih unutrašnjih stanja.</p>\n<p>Može se promeniti priroda neprijatnih događaja koji nam se dešavaju kada se intimno pročistimo. Onaj ko nikada ne ispravlja apsurdna psihološka stanja, verujući da je veoma jak, postaje žrtva okolnosti.</p>\n<p>Uređivanje naše neuređene unutrašnje kuće je od vitalnog značaja kada se želi promeniti tok nesrećnog života.</p>\n<p>Ljudi se žale na sve, pate, plaču, protestuju, želeli bi da promene život, da izađu iz nesreće u kojoj se nalaze, nažalost ne rade na sebi.</p>\n<p>Ljudi ne žele da shvate da unutrašnji život privlači spoljašnje okolnosti i da ako su one bolne, to je zbog apsurdnih unutrašnjih stanja.</p>\n<p>Spoljašnje je samo odraz unutrašnjeg, onaj ko se iznutra promeni, stvara novi red stvari.</p>\n<p>Spoljašnji događaji nikada ne bi bili toliko važni kao način reagovanja na njih.</p>\n<p>Da li ste ostali smireni pred onim ko vas vređa? Da li ste sa zadovoljstvom primili neprijatna ispoljavanja svojih bližnjih?</p>\n<p>Kako ste reagovali na neverstvo voljene osobe? Da li ste se prepustili otrovu ljubomore? Da li ste ubili? Da li ste u zatvoru?</p>\n<p>Bolnice, groblja ili panteoni, zatvori, puni su iskrenih zabludelih koji su apsurdno reagovali na spoljašnje događaje.</p>\n<p>Najbolje oružje koje čovek može koristiti u životu je ispravno psihološko stanje.</p>\n<p>Može se razoružati zveri i razotkriti izdajnici pomoću odgovarajućih unutrašnjih stanja.</p>\n<p>Pogrešna unutrašnja stanja nas pretvaraju u bespomoćne žrtve ljudske izopačenosti.</p>\n<p>Naučite da se suočite sa najneprijatnijim događajima u praktičnom životu sa odgovarajućim unutrašnjim stavom…</p>\n<p>Ne identifikujte se ni sa jednim događajem; zapamtite da sve prolazi; naučite da gledate na život kao na film i primi ćete koristi…</p>\n<p>Ne zaboravite da vas događaji bez ikakve vrednosti mogu dovesti do nesreće, ako iz svoje psihe ne uklonite pogrešna unutrašnja stanja.</p>\n<p>Svaki spoljašnji događaj nesumnjivo zahteva odgovarajuću kartu; to jest, precizno psihološko stanje.</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
