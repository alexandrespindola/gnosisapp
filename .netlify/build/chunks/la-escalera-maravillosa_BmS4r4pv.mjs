import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Den fantastiske trappen",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Den fantastiske trappen",
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
    "set:html": "<p>Vi må lengte etter en virkelig forandring, komme oss ut av denne kjedelige rutinen, dette rent mekaniske, slitsomme livet …</p>\n<p>Det første vi må forstå med full klarhet er at hver og en av oss, enten vi er borgere eller proletarer, velstående eller fra middelklassen, rike eller fattige, faktisk befinner oss på et eller annet Vesenets Nivå …</p>\n<p>Vesenets Nivå til en alkoholiker er annerledes enn en avholdsmanns, og prostituertens er veldig forskjellig fra en jomfrus. Det vi sier her er ugjendrivelig, ubestridelig …</p>\n<p>Når vi kommer til denne delen av kapittelet vårt, taper vi ingenting på å forestille oss en stige som strekker seg nedenfra og opp, vertikalt og med mange trinn …</p>\n<p>Ubestridelig befinner vi oss på et av disse trinnene; trinnene nedenfor vil det være verre folk enn oss; trinnene over vil det være bedre mennesker enn oss …</p>\n<p>I denne ekstraordinære Vertikalen, i denne fantastiske stigen, er det klart at vi kan finne alle Vesenets Nivåer … hver person er forskjellig og dette kan ingen tilbakevise. ..</p>\n<p>Utvilsomt snakker vi ikke nå om stygge eller vakre ansikter, og det handler heller ikke om alder. Det finnes unge og gamle mennesker, eldre som er klare til å dø og nyfødte barn …</p>\n<p>Spørsmålet om tid og år; det med å bli født, vokse, utvikle seg, gifte seg, reprodusere seg, bli gammel og dø, er eksklusivt for Horisontalen …</p>\n<p>I den “Fantastiske Stigen”, i Vertikalen, er ikke tid et begrep som passer inn. I trinnene på en slik stige kan vi bare finne “Vesenets Nivåer” …</p>\n<p>Folkets mekaniske håp tjener ingenting; de tror at ting vil bli bedre med tiden; det trodde våre besteforeldre og oldeforeldre; fakta har nettopp vist det motsatte …</p>\n<p>“Vesenets Nivå” er det som teller og dette er Vertikalt; vi befinner oss på et trinn, men vi kan klatre opp til et annet trinn. ..</p>\n<p>Den “Fantastiske Stigen” som vi snakker om og som refererer til de forskjellige “Vesenets Nivåer”, har absolutt ingenting med lineær tid å gjøre …</p>\n<p>Et høyere “Vesenets Nivå” er umiddelbart over oss fra øyeblikk til øyeblikk …</p>\n<p>Det er ikke i noen fjern horisontal fremtid, men her og nå; inni oss selv; i Vertikalen …</p>\n<p>Det er tydelig og hvem som helst kan forstå det, at de to linjene – Horisontal og Vertikal – møtes fra øyeblikk til øyeblikk i vårt Psykologiske indre og danner et Kors …</p>\n<p>Personligheten utvikler seg og utfolder seg i Livets Horisontale linje. Den blir født og dør innenfor sin lineære tid; den er forgjengelig; det finnes ingen morgendag for den dødes personlighet; det er ikke Vesenet …</p>\n<p>Vesenets Nivåer; selve Vesenet, er ikke av tid, har ingenting å gjøre med den Horisontale Linjen; den finnes inni oss selv. Nå, i Vertikalen …</p>\n<p>Det ville være åpenbart absurd å lete etter vårt eget Vesen utenfor oss selv …</p>\n<p>Det skader ikke å fastslå følgende som en slutning: Titler, grader, opprykk, etc., i den ytre fysiske verden, ville på ingen måte gi autentisk opphøyelse, reevaluering av Vesenet, et skritt oppover i “Vesenets Nivåer” …</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
