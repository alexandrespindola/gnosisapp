import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Det Kjære Ego",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Det Kjære Ego",
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
    "set:html": "<p>Ettersom øvre og nedre er to seksjoner av den samme tingen, er det verdt å slå fast følgende korollar: “JEG ØVRE, JEG NEDRE” er to aspekter av det samme mørke og pluraliserte EGO.</p>\n<p>Det såkalte “GUDDOMMELIGE JEG” eller “HØYERE JEG”, “ALTER EGO” eller noe lignende, er i virkeligheten et triks fra “MEG SELV”, en form for SELV-BEDRAG.</p>\n<p>Når JEG-et ønsker å fortsette her og i det hinsidige, BEDRAR det seg selv med det falske konseptet om et Udødelig Guddommelig JEG…</p>\n<p>Ingen av oss har et sant, permanent, uforanderlig, evig, ubeskrivelig “Jeg”, osv., osv., osv.</p>\n<p>Ingen av oss har i sannhet en ekte og autentisk Enhet av Vesen; dessverre besitter vi ikke engang en legitim individualitet.</p>\n<p>Egoet, selv om det fortsetter forbi graven, har likevel en begynnelse og en slutt.</p>\n<p>Egoet, JEG-et, er aldri noe individuelt, enhetlig, totalt. Åpenbart er JEG-et “JEG-ER”.</p>\n<p>I Øst-Tibet blir “JEG-ER” kalt “PSYKISKE AGGREGATER” eller bare “Verdier”, enten disse sistnevnte er positive eller negative.</p>\n<p>Hvis vi tenker på hvert “Jeg” som en annen person, kan vi ettertrykkelig hevde følgende: “Inne i hver person som lever i verden, eksisterer det mange personer”.</p>\n<p>Ubestridelig lever det inne i hver og en av oss utallige forskjellige mennesker, noen bedre, andre verre…</p>\n<p>Hvert av disse Jeg-ene, hver av disse personene kjemper for herredømme, ønsker å være eksklusiv, kontrollerer den intellektuelle hjernen eller de emosjonelle og motoriske sentrene hver gang de kan, mens en annen fortrenger dem…</p>\n<p>Læren om de mange Jeg-ene ble undervist i Øst-Tibet av de sanne Klarsynte, av de autentiske Opplyste…</p>\n<p>Hver av våre psykologiske defekter er personifisert i et eller annet Jeg. Ettersom vi har tusenvis og til og med millioner av defekter, bor det åpenbart mange mennesker i oss.</p>\n<p>I psykologiske spørsmål har vi tydelig kunnet påvise at paranoide, egosentriske og mytomane subjekter aldri i livet ville forlate dyrkelsen av det kjære Ego.</p>\n<p>Ubestridelig hater slike mennesker læren om de mange “Jeg-ene” dødelig.</p>\n<p>Når man virkelig ønsker å kjenne seg selv, må man selv-observere og prøve å kjenne de forskjellige “Jeg-ene” som er inne i personligheten.</p>\n<p>Hvis noen av våre lesere ennå ikke forstår denne læren om de mange “Jeg-ene”, skyldes det utelukkende mangel på praksis i selv-observasjon.</p>\n<p>Etter hvert som man praktiserer Indre Selv-Observasjon, oppdager man selv mange mennesker, mange “Jeg-er”, som lever inne i vår egen personlighet.</p>\n<p>De som fornekter læren om de mange Jeg-ene, de som tilber et Guddommelig JEG, har utvilsomt aldri Selv-Observert seg seriøst. For å snakke denne gangen i sokratisk stil vil vi si at disse menneskene ikke bare er ignorante, men i tillegg ignorerer de at de er ignorante.</p>\n<p>Vi kunne absolutt aldri kjenne oss selv uten seriøs og dyp selv-observasjon.</p>\n<p>Så lenge et hvilket som helst subjekt fortsetter å betrakte seg selv som Ett, er det klart at enhver indre endring vil være mer enn umulig.</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
