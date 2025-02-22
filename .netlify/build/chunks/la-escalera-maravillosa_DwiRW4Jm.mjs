import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Čudesno stubište",
  "locale": "hr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Čudesno stubište",
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
    "set:html": "<p>Moramo čeznuti za istinskom promjenom, izaći iz ove dosadne rutine, iz ovog puko mehaničkog, zamornog života…</p>\n<p>Ono što prvo moramo shvatiti s potpunom jasnoćom jest da se svatko od nas, bio on buržuj ili proleter, imućan ili srednjeg staleža, bogat ili bijedan, zapravo nalazi na takvoj ili onakvoj Razini Bića…</p>\n<p>Razina Bića pijanice razlikuje se od one apstinenta, a razina prostitutke vrlo se razlikuje od one djevice. Ovo što govorimo je neosporivo, neoborivo…</p>\n<p>Dolazeći do ovog dijela našeg poglavlja, ništa ne gubimo ako zamislimo stubište koje se proteže odozdo prema gore, okomito i s mnogo stepenica…</p>\n<p>Nesumnjivo se nalazimo na nekoj od tih stepenica; niže na stepenicama bit će ljudi gori od nas; više na stepenicama bit će ljudi bolji od nas…</p>\n<p>Na ovoj izvanrednoj Vertikali, na ovom prekrasnom stubištu, jasno je da možemo pronaći sve Razine Bića… svaka je osoba drugačija i to nitko ne može opovrgnuti…</p>\n<p>Nedvojbeno sada ne govorimo o ružnim ili lijepim licima, niti se radi o pitanju godina. Ima mladih i starih ljudi, staraca koji su spremni umrijeti i tek rođene djece…</p>\n<p>Pitanje vremena i godina; to rađanje, rast, razvoj, vjenčanje, razmnožavanje, starenje i umiranje, isključivo je Horizontalno…</p>\n<p>Na “Prekrasnom stubištu”, na Vertikali, pojam vremena ne postoji. Na stepenicama takvog stubišta možemo pronaći samo “Razine Bića”…</p>\n<p>Mehanička nada ljudi ne služi ničemu; vjeruju da će s vremenom stvari biti bolje; tako su mislili naši djedovi i pradjedovi; činjenice su upravo dokazale suprotno…</p>\n<p>“Razina Bića” je ono što je važno, a to je Vertikalno; nalazimo se na jednoj stepenici, ali se možemo popeti na drugu stepenicu…</p>\n<p>“Prekrasno stubište” o kojem govorimo, a koje se odnosi na različite “Razine Bića”, zasigurno nema nikakve veze s linearnim vremenom…</p>\n<p>Viša “Razina Bića” je neposredno iznad nas iz trenutka u trenutak…</p>\n<p>Nije u nekoj udaljenoj horizontalnoj budućnosti, već ovdje i sada; unutar nas samih; u Vertikali…</p>\n<p>Očito je i svatko to može shvatiti, da se dvije linije - Horizontalna i Vertikalna - susreću iz trenutka u trenutak u našoj Psihološkoj unutrašnjosti i tvore Križ…</p>\n<p>Osobnost se razvija i odvija na Horizontalnoj liniji Života. Rađa se i umire unutar svog linearnog vremena; prolazna je; za osobnost mrtvaca ne postoji sutra; to nije Biće…</p>\n<p>Razine Bića; samo Biće, nije od vremena, nema nikakve veze s Horizontalnom Linijom; nalazi se unutar nas samih. Sada, u Vertikali…</p>\n<p>Bilo bi očito apsurdno tražiti vlastito Biće izvan sebe…</p>\n<p>Ne bi bilo loše postaviti sljedeće kao zaključak: Titule, stupnjevi, napredovanja, itd., u vanjskom fizičkom svijetu, ni na koji način ne bi izazvali autentično uzvišenje, reevaluaciju Bića, prelazak na višu stepenicu u “Razinama Bića”…</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
