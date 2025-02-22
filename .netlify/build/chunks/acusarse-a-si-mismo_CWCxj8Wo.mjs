import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Anklage seg selv",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Anklage seg selv",
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
    "set:html": "<p>Essensen som hver enkelt av oss bærer i sitt indre, kommer ovenfra, fra Himmelen, fra stjernene…</p>\n<p>Utvilsomt kommer den fantastiske Essensen fra tonen “LA” (Melkeveien, galaksen vi lever i)</p>\n<p>Den dyrebare Essensen passerer gjennom tonen “SOL” (Solen) og deretter gjennom tonen “FA” (Planetsonen) før den kommer inn i denne verden og trenger inn i vårt eget indre.</p>\n<p>Våre foreldre skapte den passende kroppen for mottak av denne Essensen som kommer fra stjernene…</p>\n<p>Ved å arbeide intenst med oss selv og ofre oss for våre medmennesker, vil vi seirende vende tilbake til Uranias dype skjød…</p>\n<p>Vi lever i denne verden av en grunn, for noe, på grunn av en spesiell faktor…</p>\n<p>Det er åpenbart mye i oss som vi må se, studere og forstå, hvis vi virkelig ønsker å vite noe om oss selv, om vårt eget liv…</p>\n<p>Tragisk er eksistensen til den som dør uten å ha kjent motivet for sitt liv…</p>\n<p>Hver og en av oss må selv oppdage meningen med sitt eget liv, det som holder oss fanget i smertens fengsel…</p>\n<p>Tydeligvis er det i hver og en av oss noe som gjør livet bittert for oss og som vi må kjempe hardt mot…</p>\n<p>Det er ikke nødvendig at vi fortsetter i ulykke, det er presserende å redusere til kosmisk støv det som gjør oss så svake og ulykkelige.</p>\n<p>Det er nytteløst å smykke oss med titler, æresbevisninger, diplomer, penger, tom subjektiv rasjonalisme, velkjente dyder, etc., etc., etc.</p>\n<p>Vi må aldri glemme at hykleri og de dumme forfengelighetene til den falske personligheten gjør oss til klønete, utdaterte, forsinkende, reaksjonære mennesker, ute av stand til å se det nye…</p>\n<p>Døden har mange betydninger, både positive og negative.</p>\n<p>La oss vurdere den fantastiske observasjonen til den “Store KABIR Jesus Kristus”. “La de døde begrave sine døde”. Mange mennesker, selv om de lever, er faktisk døde for alt mulig arbeid med seg selv og dermed for enhver intim transformasjon.</p>\n<p>De er mennesker innelåst i sine dogmer og overbevisninger; mennesker forstenet i minnene fra mange dager siden; individer fulle av fordommer fra forfedrene; mennesker som er slaver av hva andre vil si, skremmende lunkne, likegyldige, noen ganger “allvitende” overbevist om at de er i sannheten fordi de har blitt fortalt det, etc., etc., etc.</p>\n<p>Disse menneskene vil ikke forstå at denne verden er et “Psykologisk Treningsstudio” der det vil være mulig å utslette den hemmelige styggheten som vi alle bærer inni oss…</p>\n<p>Hvis disse stakkars menneskene forsto den beklagelige tilstanden de er i, ville de skjelve av skrekk…</p>\n<p>Likevel tenker slike mennesker alltid det beste om seg selv; de skryter av sine dyder, de føler seg perfekte, godhjertede, hjelpsomme, noble, barmhjertige, intelligente, pliktoppfyllende, etc.</p>\n<p>Det praktiske livet som skole er formidabelt, men å ta det som et mål i seg selv er åpenbart absurd.</p>\n<p>De som tar livet i seg selv, slik det leves daglig, har ikke forstått behovet for å jobbe med seg selv for å oppnå en “Radikal Transformasjon”.</p>\n<p>Dessverre lever folk mekanisk, de har aldri hørt noe om indre arbeid…</p>\n<p>Det er nødvendig å forandre seg, men folk vet ikke hvordan de skal forandre seg; de lider mye og vet ikke engang hvorfor de lider…</p>\n<p>Det er ikke alt å ha penger. Livet til mange rike mennesker pleier å være virkelig tragisk…</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
