import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Den Fantastiska Trappan",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Den Fantastiska Trappan",
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
    "set:html": "<p>Vi måste längta efter en sann förändring, komma ut ur denna tråkiga rutin, detta rent mekaniska, tröttsamma liv…</p>\n<p>Det första vi måste förstå med full klarhet är att var och en av oss, vare sig det är borgare eller proletär, välbeställd eller medelklass, rik eller fattig, faktiskt befinner sig på en viss nivå av varande…</p>\n<p>En alkoholists nivå av varande är annorlunda än en nykterists, och en prostituerads helt annorlunda än en jungfrus. Det vi säger är ovedersägligt, obestridligt…</p>\n<p>När vi kommer till den här delen av vårt kapitel förlorar vi inget på att föreställa oss en stege som sträcker sig nedifrån och upp, vertikalt och med många steg…</p>\n<p>Utan tvekan befinner vi oss på något av dessa steg; steg nedanför kommer det att finnas sämre människor än vi; steg ovanför kommer det att finnas bättre människor än vi…</p>\n<p>I denna extraordinära vertikal, i denna underbara stege, är det tydligt att vi kan hitta alla nivåer av varande… varje person är annorlunda och detta kan ingen motbevisa…</p>\n<p>Otvekligt talar vi inte nu om fula eller vackra ansikten, och det handlar inte heller om ålder. Det finns unga och gamla människor, äldre som redan är på väg att dö och nyfödda barn…</p>\n<p>Frågan om tid och år; detta med att födas, växa, utvecklas, gifta sig, fortplanta sig, åldras och dö, är exklusivt för horisontalen…</p>\n<p>I den “underbara stegen”, i vertikalen, passar inte begreppet tid in. På stegen på en sådan skala kan vi bara hitta “nivåer av varande”…</p>\n<p>Folkets mekaniska hopp duger inte till något; de tror att saker och ting kommer att bli bättre med tiden; så tänkte våra far- och morföräldrar; händelserna har just kommit för att bevisa motsatsen…</p>\n<p>“Nivån av varande” är det som räknas och detta är vertikalt; vi befinner oss på ett steg men vi kan klättra upp till ett annat steg…</p>\n<p>Den “underbara stegen” som vi talar om och som hänvisar till de olika “nivåerna av varande” har verkligen inget att göra med linjär tid…</p>\n<p>En högre “nivå av varande” ligger omedelbart ovanför oss från ögonblick till ögonblick…</p>\n<p>Den ligger inte i någon avlägsen horisontell framtid, utan här och nu; inom oss själva; i vertikalen…</p>\n<p>Det är uppenbart och vem som helst kan förstå att de två linjerna – horisontella och vertikala – möts från ögonblick till ögonblick i vårt psykologiska inre och bildar ett kors…</p>\n<p>Personligheten utvecklas och vecklar ut sig i livets horisontella linje. Den föds och dör inom sin linjära tid; den är förgänglig; det finns ingen morgondag för den dödes personlighet; det är inte varat…</p>\n<p>Varatets nivåer; varat självt, är inte av tiden, det har inget att göra med den horisontella linjen; det finns inom oss själva. Nu, i vertikalen…</p>\n<p>Det vore uppenbart absurt att söka vårt eget varande utanför oss själva…</p>\n<p>Det skadar inte att fastställa följande som en följdsats: Titlar, grader, befordringar etc., i den yttre fysiska världen, skulle på intet sätt ge upphov till autentisk upphöjelse, omvärdering av varat, övergång till ett högre steg i “varatets nivåer”…</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
