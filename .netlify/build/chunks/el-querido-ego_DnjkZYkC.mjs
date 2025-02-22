import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Det Kære Ego",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Det Kære Ego",
    "order": 11
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
    "set:html": "<p>Da over- og underordnet er to sektioner af den samme ting, er det passende at fremsætte følgende korollar: “JEG OVERORDNET, JEG UNDERORDNET” er to aspekter af det samme dunkle og pluraliserede EGO.</p>\n<p>Det såkaldte “GUDDOMMELIGE JEG” eller “OVERORDNEDE JEG”, “ALTER EGO” eller noget i den stil, er i sandhed et trick fra “MIT SELV”, en form for SELV-BEDRAG.</p>\n<p>Når JEG’et ønsker at fortsætte her og i det hinsides, bedrager det sig selv med det falske koncept om et Guddommeligt Udødeligt JEG…</p>\n<p>Ingen af os har et sandt, permanent, uforanderligt, evigt, ubeskriveligt “Jeg” osv., osv., osv.</p>\n<p>Ingen af os har i sandhed en ægte og autentisk Enhed af Væren; desværre besidder vi ikke engang en legitim individualitet.</p>\n<p>Selvom Egoet fortsætter hinsides graven, har det dog en begyndelse og en ende.</p>\n<p>Egoet, JEG’et, er aldrig noget individuelt, enhedsmæssigt, totalt enhedsmæssigt. Åbenbart er JEG’et “JEG’ER”.</p>\n<p>I Østtibet kaldes “JEG’ERNE” for “PSYKISKE AGGREGATER” eller simpelthen “Værdier”, hvad enten de sidste er positive eller negative.</p>\n<p>Hvis vi tænker på hvert “Jeg” som en forskellig person, kan vi eftertrykkeligt hævde følgende: “Inden i hver person, der lever i verden, findes der mange personer”.</p>\n<p>Uomtvisteligt lever der inden i hver enkelt af os mange forskellige personer, nogle bedre, andre værre…</p>\n<p>Hver af disse Jeg’er, hver af disse personer kæmper for overherredømmet, ønsker at være eksklusiv, kontrollerer den intellektuelle hjerne eller de følelsesmæssige og motoriske centre, hver gang den kan, mens en anden fortrænger den…</p>\n<p>Læren om de mange Jeg’er blev undervist i Østtibet af de sande Klarsynede, af de autentiske Oplyste…</p>\n<p>Hver af vores psykologiske defekter er personificeret i et eller andet Jeg. Da vi har tusinder og endda millioner af defekter, bor der åbenlyst mange mennesker inde i os.</p>\n<p>I psykologiske spørgsmål har vi tydeligt kunnet påvise, at paranoide, selvdyrkende og mytomaniske personer for intet i verden ville opgive dyrkelsen af det kære Ego.</p>\n<p>Uomtvisteligt hader sådanne mennesker dødeligt læren om de mange “Jeg’er”.</p>\n<p>Når man virkelig ønsker at kende sig selv, må man selv-observere og forsøge at lære de forskellige “Jeg’er” at kende, der er inde i personligheden.</p>\n<p>Hvis nogen af vores læsere endnu ikke forstår denne lære om de mange “Jeg’er”, skyldes det udelukkende manglende praksis i selv-observation.</p>\n<p>Efterhånden som man praktiserer Indre Selv-Observation, opdager man selv mange mennesker, mange “Jeg’er”, der lever inde i vores egen personlighed.</p>\n<p>De, der benægter læren om de mange Jeg’er, de, der tilbeder et Guddommeligt Jeg, har utvivlsomt aldrig Selv-Observeret sig selv seriøst. Denne gang vil vi i en sokratisk stil sige, at disse mennesker ikke kun er ignorante, men også ignorerer, at de er ignorante.</p>\n<p>Vi kunne bestemt aldrig kende os selv uden seriøs og dyb selv-observation.</p>\n<p>Så længe et hvilket som helst subjekt fortsætter med at betragte sig selv som Én, er det klart, at enhver indre ændring vil være mere end umulig.</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
