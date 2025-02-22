import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "De Forskellige Jeg'er",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. De Forskellige Jeg'er",
    "order": 10
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
    "set:html": "<p>Det rationelle pattedyr, fejlagtigt kaldet mennesket, besidder i virkeligheden ikke en defineret individualitet.</p>\n<p>Ubestrideligt er denne mangel på psykologisk enhed i humanoiden årsagen til så mange vanskeligheder og bitterhed.</p>\n<p>Den fysiske krop er en komplet enhed og arbejder som en organisk helhed, medmindre den er syg.</p>\n<p>Men humanoidens indre liv er på ingen måde en psykologisk enhed.</p>\n<p>Det mest alvorlige af alt dette, på trods af hvad de forskellige pseudo-esoteriske og pseudo-okkultistiske skoler siger, er fraværet af psykologisk organisation i bunden af hvert individ.</p>\n<p>Under sådanne forhold eksisterer der bestemt ikke harmonisk arbejde som en helhed i folks indre liv.</p>\n<p>Humanoiden er, med hensyn til sin indre tilstand, en psykologisk mangfoldighed, en sum af “jeg’er”.</p>\n<p>De illustrerede ignoranter i denne mørke æra tilbeder “JEG’ET”, de forguder det, de sætter det på altrene, de kalder det “ALTER EGO”, “HØJERE JEG”, “GUDDOMMELIGT JEG” osv., osv., osv.</p>\n<p>“De kloge hoveder” i denne mørke tidsalder, vi lever i, vil ikke indse, at “Højere Jeg” eller “Lavere Jeg” er to sektioner af det samme pluraliserede Ego…</p>\n<p>Humanoiden har bestemt ikke et “PERMANENT JEG”, men en mangfoldighed af forskellige infrahumane og absurde “jeg’er”.</p>\n<p>Det stakkels intellektuelle dyr, fejlagtigt kaldet mennesket, ligner et hus i uorden, hvor der i stedet for en herre er mange tjenere, der altid vil bestemme og gøre, hvad der passer dem…</p>\n<p>Den største fejl ved billig pseudo-esoterisme og pseudo-okkultisme er at antage, at andre besidder, eller at man har et “PERMANENT og UFORANDERLIGT JEG” uden begyndelse og uden ende…</p>\n<p>Hvis de, der tænker sådan, vågnede bevidsthed, selv for et øjeblik, kunne de tydeligt bevise for sig selv, at den rationelle humanoid aldrig er den samme i lang tid…</p>\n<p>Det intellektuelle pattedyr ændrer sig kontinuerligt fra et psykologisk synspunkt…</p>\n<p>At tro, at hvis en person hedder Luis, er han altid Luis, er noget som en meget dårlig joke…</p>\n<p>Den person, der kaldes Luis, har i sig selv andre “jeg’er”, andre egoer, der udtrykker sig gennem hans personlighed på forskellige tidspunkter, og selvom Luis ikke kan lide grådighed, vil et andet “jeg” i ham - lad os kalde ham Pepe - gerne grådighed og så videre…</p>\n<p>Ingen person er den samme kontinuerligt, det er virkelig ikke nødvendigt at være meget klog for fuldt ud at indse de utallige ændringer og modsætninger i hvert individ…</p>\n<p>At antage, at nogen besidder et “PERMANENT og UFORANDERLIGT JEG”, svarer naturligvis til et misbrug over for næsten og over for sig selv…</p>\n<p>Inde i hver person bor mange mennesker, mange “jeg’er”, dette kan bekræftes af enhver vågen, bevidst person selv og direkte…</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
