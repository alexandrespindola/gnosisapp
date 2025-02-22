import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Livet",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Livet",
    "order": 6
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
    "set:html": "<p>På livets praktiske område oppdager vi alltid kontraster som forbløffer. Velstående mennesker med praktfulle boliger og mange venner, lider noen ganger grusomt. .. Ydmyke arbeidere med hakke og spade eller folk fra middelklassen, lever ofte i full lykke.</p>\n<p>Mange multimilliardærer lider av seksuell impotens og rike matroner gråter bittert over ektemannens utroskap…</p>\n<p>Jordens rike virker som gribber i gullbur, for tiden kan de ikke leve uten “livvakter”…</p>\n<p>Statsmenn sleper lenker, de er aldri frie, de går overalt omgitt av folk bevæpnet til tennene…</p>\n<p>La oss studere denne situasjonen nærmere. Vi trenger å vite hva livet er. Hver og en står fritt til å mene hva de vil…</p>\n<p>Uansett hva folk sier, vet ingen noe med sikkerhet, livet er et problem som ingen forstår…</p>\n<p>Når folk ønsker å fortelle oss historien om livet sitt gratis, siterer de hendelser, navn og etternavn, datoer osv., og de føler tilfredshet når de forteller sine historier…</p>\n<p>Disse stakkars menneskene vet ikke at historiene deres er ufullstendige fordi hendelser, navn og datoer bare er det ytre aspektet av filmen, det indre aspektet mangler…</p>\n<p>Det er viktig å kjenne “bevissthetstilstander”, til hver hendelse tilsvarer en eller annen sinnsstemning.</p>\n<p>Tilstandene er indre og hendelsene er ytre, de ytre hendelsene er ikke alt…</p>\n<p>Med indre tilstander menes gode eller dårlige disposisjoner, bekymringer, depresjon, overtro, frykt, mistanke, barmhjertighet, selvmedlidenhet, overvurdering av seg selv; tilstander av å føle seg lykkelig, tilstander av glede, osv., osv., osv.</p>\n<p>Det er utvilsomt at indre tilstander kan samsvare nøyaktig med ytre hendelser eller være forårsaket av dem, eller ikke ha noen sammenheng med dem…</p>\n<p>Uansett er tilstander og hendelser forskjellige. Hendelser samsvarer ikke alltid nøyaktig med beslektede tilstander</p>\n<p>Den indre tilstanden til en hyggelig hendelse samsvarer kanskje ikke med den. Den indre tilstanden til en ubehagelig hendelse samsvarer kanskje ikke med den. Hendelser ventet på lenge, da de kom følte vi at noe manglet…</p>\n<p>Det manglet absolutt den tilsvarende indre tilstanden som skulle kombineres med den ytre hendelsen…</p>\n<p>Mange ganger viser det seg at hendelsen som ikke ble forventet er den som har gitt oss de beste øyeblikkene…</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
