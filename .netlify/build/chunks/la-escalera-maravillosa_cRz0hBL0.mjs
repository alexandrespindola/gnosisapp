import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Чудесно степениште",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Чудесно степениште",
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
    "set:html": "<p>Moramo žudeti za istinskom promenom, izaći iz ove dosadne rutine, iz ovog čisto mehanicističkog, zamornog života…</p>\n<p>Ono što prvo moramo shvatiti u potpunosti je da se svako od nas, bio buržuj ili proleter, imućan ili iz srednje klase, bogat ili jadan, zaista nalazi na takvom ili onakvom Nivou Bića…</p>\n<p>Nivo Bića pijanice je drugačiji od nivoa Bića trezvenjaka, a nivo Bića prostitutke veoma različit od nivoa Bića device. Ovo što govorimo je neosporno, nepobitno…</p>\n<p>Kada stignemo do ovog dela našeg poglavlja, ništa ne gubimo ako zamislimo stepenište koje se proteže odozdo prema gore, vertikalno i sa mnogo stepenika…</p>\n<p>Nesumnjivo se na nekom od ovih stepenika nalazimo mi; stepenicama ispod biće ljudi gorih od nas; stepenicama iznad će se nalaziti ljudi bolji od nas…</p>\n<p>U ovoj izvanrednoj Vertikali, u ovom divnom stepeništu, jasno je da možemo pronaći sve Nivoe Bića… svaka osoba je drugačija i to niko ne može da opovrgne…</p>\n<p>Nesumnjivo, sada ne govorimo o ružnim ili lepim licima, niti se radi o pitanju godina. Ima mladih i starih ljudi, staraca koji su spremni za umiranje i novorođenih beba…</p>\n<p>Pitanje vremena i godina; to rađanja, rasta, razvoja, venčanja, razmnožavanja, starenja i umiranja, ekskluzivno je za Horizontalu…</p>\n<p>Na “Divnom Stepeništu”, u Vertikali, koncept vremena ne postoji. Na stepenicama takve skale možemo pronaći samo “Nivoe Bića”…</p>\n<p>Mehanička nada ljudi ne služi ničemu; veruju da će s vremenom stvari biti bolje; tako su mislili naši dede i prade, a činjenice su upravo dokazale suprotno…</p>\n<p>“Nivo Bića” je ono što je važno i to je Vertikala; nalazimo se na jednom stepeniku, ali možemo se popeti na drugi stepenik…</p>\n<p>“Divno Stepenište” o kojem govorimo i koje se odnosi na različite “Nivoe Bića”, sigurno nema nikakve veze sa linearnim vremenom…</p>\n<p>“Nivo Bića” viši od našeg je odmah iznad nas iz trenutka u trenutak…</p>\n<p>Ne nalazi se u nekoj udaljenoj horizontalnoj budućnosti, već ovde i sada; unutar nas samih; u Vertikali…</p>\n<p>Očigledno je i svako to može shvatiti, da se dve linije – Horizontala i Vertikala – susreću iz trenutka u trenutak unutar naše Psihologije i formiraju Krst…</p>\n<p>Ličnost se razvija i odvija u horizontalnoj liniji Života. Rađa se i umire unutar svog linearnog vremena; prolazna je; ne postoji sutra za ličnost mrtvog; nije Biće…</p>\n<p>Nivoi Bića; samo Biće, nije od vremena, nema nikakve veze sa Horizontalnom Linijom; nalazi se unutar nas samih. Sada, u Vertikali…</p>\n<p>Bilo bi očigledno apsurdno tražiti sopstveno Biće izvan sebe…</p>\n<p>Neće škoditi ako utvrdimo sledeće kao posledicu: Titule, zvanja, unapređenja, itd., u fizičkom spoljašnjem svetu, ni na koji način ne bi izazvali autentično uzdizanje, reevaluaciju Bića, prelazak na viši stepenik u “Nivoima Bića”…</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
