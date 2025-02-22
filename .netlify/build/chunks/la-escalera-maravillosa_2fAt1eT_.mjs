import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Die Wonderlike Leer",
  "locale": "af",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Die Wonderlike Leer",
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
    "set:html": "<p>Ons moet ‘n ware verandering begeer, uit hierdie vervelige roetine, hierdie bloot meganistiese, irriterende lewe breek…</p>\n<p>Wat ons eers met volkome helderheid moet verstaan, is dat elkeen van ons, of ons nou bourgeois of proletariër, gegoed of middelklas, ryk of arm is, werklik op ‘n spesifieke Vlak van Bestaan is…</p>\n<p>Die Vlak van Bestaan van ‘n dronkaard verskil van dié van ‘n geheelonthouer, en dié van ‘n prostituut verskil baie van dié van ‘n maagd. Dit wat ons sê, is onweerlegbaar, onbetwisbaar…</p>\n<p>Wanneer ons hierdie deel van ons hoofstuk bereik, verloor ons niks deur ‘n leer voor te stel wat van onder na bo strek, vertikaal en met baie trappe…</p>\n<p>Ongetwyfeld bevind ons onsself op een van hierdie trappe; trappe onder ons sal mense erger as ons wees; trappe bo sal mense beter as ons wees…</p>\n<p>In hierdie buitengewone Vertikaal, in hierdie wonderlike leer, is dit duidelik dat ons al die Vlakke van Bestaan kan vind… elke persoon is anders en niemand kan dit weerlê nie…</p>\n<p>Ongetwyfeld praat ons nie nou van lelike of mooi gesigte nie, en dit gaan ook nie oor ouderdom nie. Daar is jong en ou mense, bejaardes wat gereed is om te sterf en pasgebore babas…</p>\n<p>Die kwessie van tyd en jare; daardie van gebore word, groei, ontwikkel, trou, voortplant, oud word en sterf, is uitsluitlik van die Horisontaal…</p>\n<p>In die “Wonderlike Leer”, in die Vertikaal, pas die konsep van tyd nie. Op die trappe van so ‘n leer kan ons slegs “Vlakke van Bestaan” vind…</p>\n<p>Die meganiese hoop van mense dien geen doel nie; hulle glo dat dinge mettertyd beter sal word; so het ons oupas en oumagrootjies gedink; die feite het juis die teendeel bewys…</p>\n<p>Die “Vlak van Bestaan” is wat tel en dit is Vertikaal; ons bevind ons op ‘n trap, maar ons kan na ‘n ander trap klim…</p>\n<p>Die “Wonderlike Leer” waarvan ons praat en wat verwys na die verskillende “Vlakke van Bestaan”, het sekerlik niks met lineêre tyd te doen nie…</p>\n<p>‘n “Vlak van Bestaan” hoër is onmiddellik bo ons van oomblik tot oomblik…</p>\n<p>Dit is nie in ‘n afgeleë horisontale toekoms nie, maar hier en nou; binne onsself; in die Vertikaal…</p>\n<p>Dit is duidelik en enigiemand kan verstaan dat die twee lyne - Horisontaal en Vertikaal - oomblik vir oomblik in ons Psigologiese binnekant ontmoet en ‘n Kruis vorm…</p>\n<p>Die persoonlikheid ontwikkel en ontvou in die Horisontale lyn van die Lewe. Dit word gebore en sterf binne sy lineêre tyd; dit is verganklik; daar is geen môre vir die persoonlikheid van die dooie nie; dit is nie die Self nie…</p>\n<p>Die Vlakke van die Self; die Self self, is nie van tyd nie, het niks met die Horisontale Lyn te doen nie; dit is binne onsself. Nou, in die Vertikaal…</p>\n<p>Dit sal klaarblyklik absurd wees om ons eie Self buite onsself te soek…</p>\n<p>Dit is nie verkeerd om die volgende as ‘n gevolgtrekking te maak nie: Titels, grade, bevorderings, ens., in die fisiese uiterlike wêreld, sal geensins ‘n outentieke verheffing, herwaardering van die Self, ‘n stap na ‘n hoër trap in die “Vlakke van Bestaan” tot gevolg hê nie…</p>"
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
const url = "src/content/docs/af/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/af/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/af/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
