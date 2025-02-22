import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Čudesno stepenište",
  "locale": "bs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Čudesno stepenište",
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
    "set:html": "<p>Moramo žuditi za istinskom promjenom, izaći iz ove dosadne rutine, iz ovog čisto mehaničkog, zamornog života…</p>\n<p>Ono što prvo moramo shvatiti s potpunom jasnoćom jest da se svatko od nas, bio buržuj ili proleter, imućan ili pripadnik srednje klase, bogat ili siromašan, uistinu nalazi na određenoj Razini Bivanja…</p>\n<p>Razina Bivanja pijanice razlikuje se od one apstinenta, a ona prostitutke vrlo se razlikuje od one djevice. Ovo što govorimo je neoborivo, neosporno…</p>\n<p>Dolazeći do ovog dijela našeg poglavlja, ništa ne gubimo ako zamislimo stubište koje se proteže od dna prema gore, okomito i s mnogo stepenica…</p>\n<p>Neosporno se na nekoj od tih stepenica nalazimo mi; stepenice ispod bit će ljudi gori od nas; stepenice iznad nalazit će se ljudi bolji od nas…</p>\n<p>U ovoj izvanrednoj Vertikali, na ovom prekrasnom stubištu, jasno je da možemo pronaći sve Razine Bivanja… svaka osoba je drugačija i to nitko ne može opovrgnuti…</p>\n<p>Nesumnjivo, sada ne govorimo o ružnim ili lijepim licima, niti se radi o pitanju godina. Ima mladih i starih ljudi, staraca koji su spremni umrijeti i tek rođene djece…</p>\n<p>Pitanje vremena i godina; to rađanje, rast, razvoj, vjenčanje, razmnožavanje, starenje i umiranje, isključivo je Horizontalno…</p>\n<p>Na “Prekrasnom stubištu”, u Vertikali, koncept vremena ne postoji. Na stepenicama takve ljestvice možemo pronaći samo “Razine Bivanja”…</p>\n<p>Mehanička nada ljudi ne služi ničemu; vjeruju da će s vremenom stvari biti bolje; tako su mislili naši djedovi i pradjedovi; činjenice su upravo dokazale suprotno…</p>\n<p>“Razina Bivanja” je ono što je važno i to je Vertikalno; nalazimo se na jednoj stepenici, ali se možemo popeti na drugu stepenicu…</p>\n<p>“Prekrasno stubište” o kojem govorimo i koje se odnosi na različite “Razine Bivanja”, zasigurno nema nikakve veze s linearnim vremenom…</p>\n<p>Viša “Razina Bivanja” nalazi se neposredno iznad nas iz trenutka u trenutak…</p>\n<p>Nije u nekoj dalekoj horizontalnoj budućnosti, već ovdje i sada; unutar nas samih; u Vertikali…</p>\n<p>Očito je i svatko može razumjeti da se dvije linije —Horizontalna i Vertikalna— susreću iz trenutka u trenutak unutar naše Psihološke unutrašnjosti i tvore Križ…</p>\n<p>Osobnost se razvija i odvija u horizontalnoj liniji života. Rađa se i umire unutar svog linearnog vremena; prolazna je; ne postoji sutra za osobnost mrtvaca; to nije Biće…</p>\n<p>Razine Bića; samo Biće, nije od vremena, nema nikakve veze s Horizontalnom Linijom; nalazi se unutar nas samih. Sada, u Vertikali…</p>\n<p>Bilo bi očito apsurdno tražiti vlastito Biće izvan sebe…</p>\n<p>Ne bi bilo loše postaviti sljedeće kao zaključak: Titule, stupnjevi, napredovanja, itd., u vanjskom fizičkom svijetu, ni na koji način ne bi uzrokovali autentično uzdizanje, reevaluaciju Bića, prelazak na višu stepenicu u “Razinama Bivanja”…</p>"
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
const url = "src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
