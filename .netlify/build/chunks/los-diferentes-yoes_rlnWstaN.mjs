import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "De forskjellige jegene",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. De forskjellige jegene",
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
    "set:html": "<p>Det rasjonelle pattedyret, feilaktig kalt menneske, besitter egentlig ingen definert individualitet.</p>\n<p>Uten tvil er denne mangelen på psykologisk enhet hos humanoiden årsaken til så mange vanskeligheter og bitterhet.</p>\n<p>Den fysiske kroppen er en komplett enhet og fungerer som en organisk helhet, med mindre den er syk.</p>\n<p>Men humanoidens indre liv er på ingen måte en psykologisk enhet.</p>\n<p>Det mest alvorlige av alt, til tross for hva de forskjellige pseudo-esoteriske og pseudo-okkultistiske skolene sier, er fraværet av psykologisk organisering i det indre hos hvert individ.</p>\n<p>Under slike forhold eksisterer det absolutt ikke noe harmonisk arbeid som en helhet i folks indre liv.</p>\n<p>Humanoiden er, med hensyn til sin indre tilstand, en psykologisk mangfoldighet, en sum av “jeg”.</p>\n<p>De opplyste ignorantene i denne mørke tidsalderen dyrker “JEG’ET”, de forguder det, setter det på alteret, kaller det “ALTER EGO”, “HØYERE JEG”, “GUDDOMMELIG JEG”, osv., osv., osv.</p>\n<p>De “klokehodene” i denne svarte tidsalderen vi lever i vil ikke innse at “Høyere Jeg” eller “Lavere Jeg” er to seksjoner av det samme pluraliserte egoet…</p>\n<p>Humanoiden har absolutt ikke et “Permanent JEG”, men en mengde forskjellige infrahumane og absurde “Jeg”.</p>\n<p>Det stakkars intellektuelle dyret, feilaktig kalt menneske, ligner et hus i uorden der det i stedet for én herre finnes mange tjenere som alltid vil bestemme og gjøre som de vil…</p>\n<p>Den største feilen ved billig pseudo-esoterisme og pseudo-okkultisme er å anta at andre besitter eller at man har et “Permanent og Uforanderlig JEG” uten begynnelse og uten slutt…</p>\n<p>Hvis de som tenker slik våknet bevissthet, selv om det bare var for et øyeblikk, kunne de tydelig bevise for seg selv at den rasjonelle humanoiden aldri er den samme lenge…</p>\n<p>Det intellektuelle pattedyret endrer seg kontinuerlig fra et psykologisk synspunkt…</p>\n<p>Å tro at hvis en person heter Luis, så er han alltid Luis, er noe som en vits av svært dårlig smak…</p>\n<p>Det subjektet som kalles Luis har i seg selv andre “Jeg”, andre egoer, som uttrykker seg gjennom hans personlighet til forskjellige tider, og selv om Luis ikke liker grådighet, liker et annet “Jeg” i ham – la oss kalle ham Pepe – grådighet, og så videre…</p>\n<p>Ingen person er den samme kontinuerlig, det er egentlig ikke nødvendig å være veldig klok for å innse de utallige endringene og motsetningene hos hvert subjekt…</p>\n<p>Å anta at noen besitter et “Permanent og Uforanderlig JEG” tilsvarer selvfølgelig et overgrep mot nesten og mot seg selv…</p>\n<p>Inne i hver person bor det mange personer, mange “Jeg”, dette kan verifiseres direkte av enhver våken, bevisst person…</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
