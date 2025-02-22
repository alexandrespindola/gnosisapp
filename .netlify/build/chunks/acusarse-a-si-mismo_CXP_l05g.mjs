import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Anklage sig selv",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Anklage sig selv",
    "order": 5
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
    "set:html": "<p>Essensen, som hver enkelt af os bærer indeni, kommer ovenfra, fra himlen, fra stjernerne…</p>\n<p>Uomtvisteligt stammer den vidunderlige essens fra tonen “LA” (Mælkevejen, galaksen vi lever i).</p>\n<p>Den kostbare essens passerer gennem tonen “SOL” (Solen) og derefter tonen “FA” (Den planetariske zone) trænger ind i denne verden og penetrerer vores indre.</p>\n<p>Vores forældre skabte den rette krop til at modtage denne essens, der kommer fra stjernerne…</p>\n<p>Ved at arbejde intenst på os selv og ofre os for vores medmennesker, vil vi vende sejrrigt tilbage til Uranías dybe skød…</p>\n<p>Vi lever i denne verden af en grund, for noget, på grund af en særlig faktor…</p>\n<p>Det er tydeligt, at der er meget i os, vi skal se, studere og forstå, hvis vi virkelig længes efter at vide noget om os selv, om vores eget liv…</p>\n<p>Tragisk er eksistensen for den, der dør uden at have kendt formålet med sit liv…</p>\n<p>Hver enkelt af os må selv opdage meningen med sit eget liv, det, der holder ham fanget i smertens fængsel…</p>\n<p>Tilsyneladende er der i hver af os noget, der forbitrer vores liv, og som vi er nødt til at kæmpe kraftigt imod…</p>\n<p>Det er ikke bydende nødvendigt, at vi fortsætter i ulykke, det kan ikke udsættes at reducere det, der gør os så svage og ulykkelige, til kosmisk støv.</p>\n<p>Det nytter ikke noget at prale af titler, æresbevisninger, diplomer, penge, tom subjektiv rationalisme, velkendte dyder osv. osv. osv.</p>\n<p>Vi må aldrig glemme, at hykleri og det falske personligheds tåbelige forfængeligheder gør os til klodsede, gamle, hæmmende, reaktionære mennesker, ude af stand til at se det nye…</p>\n<p>Døden har mange betydninger, både positive og negative.</p>\n<p>Lad os betragte den storslåede observation af “Den Store KABIR Jesus Kristus”. “Lad de døde begrave deres døde”. Mange mennesker, selvom de lever, er faktisk døde for ethvert muligt arbejde på sig selv og dermed for enhver indre forvandling.</p>\n<p>De er mennesker indespærret i deres dogmer og overbevisninger; mennesker forstenet i minderne om mange gårsdage; individer fulde af forfædres fordomme; mennesker slaver af, hvad andre vil sige, frygteligt lunkne, ligegyldige, nogle gange “kloge hoveder”, overbeviste om, at de er i sandheden, fordi de er blevet fortalt det, osv. osv. osv.</p>\n<p>Disse mennesker vil ikke forstå, at denne verden er et “Psykologisk Træningscenter”, hvorigennem det ville være muligt at tilintetgøre den hemmelige grimhed, vi alle bærer indeni…</p>\n<p>Hvis disse stakkels mennesker forstod den beklagelige tilstand, de befinder sig i, ville de ryste af rædsel…</p>\n<p>Men sådanne mennesker tænker altid det bedste om sig selv; de praler af deres dyder, de føler sig perfekte, godhjertede, hjælpsomme, ædle, velgørende, intelligente, pligtopfyldende osv.</p>\n<p>Det praktiske liv som en skole er formidabelt, men at tage det som et mål i sig selv er åbenlyst absurd.</p>\n<p>De, der tager livet i sig selv, som det leves dagligt, har ikke forstået nødvendigheden af at arbejde på sig selv for at opnå en “Radikal Transformation”.</p>\n<p>Ulykkeligvis lever folk mekanisk, de har aldrig hørt noget om indre arbejde…</p>\n<p>Det er nødvendigt at ændre sig, men folk ved ikke, hvordan de skal ændre sig; de lider meget og ved ikke engang, hvorfor de lider…</p>\n<p>At have penge er ikke alt. Mange rige menneskers liv er ofte virkelig tragiske…</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
