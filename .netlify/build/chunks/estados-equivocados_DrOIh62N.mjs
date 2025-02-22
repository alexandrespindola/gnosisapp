import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Feilaktige tilstander",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Feilaktige tilstander",
    "order": 8
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
    "set:html": "<p>Utvilsomt, i den strenge observasjonen av Selvet, er det alltid uunngåelig og påtrengende å gjøre en fullstendig logisk differensiering i forhold til de ytre hendelsene i det praktiske livet og de indre bevissthetstilstandene.</p>\n<p>Vi trenger snarest å vite hvor vi befinner oss i et gitt øyeblikk, både i forhold til den indre bevissthetstilstanden, og i den spesifikke naturen til den ytre hendelsen som skjer med oss.</p>\n<p>Livet i seg selv er en serie hendelser som behandles gjennom tid og rom…</p>\n<p>Noen sa: “Livet er en lenke, av martyrier som mannen bærer viklet inn i sjelen…”</p>\n<p>Enhver er veldig fri til å tenke som de vil; jeg tror at de flyktige gledene i et flyktig øyeblikk, alltid etterfølges av skuffelse og bitterhet…</p>\n<p>Hver hendelse har sin spesielle karakteristiske smak og de indre tilstandene er også av forskjellig slag; dette er uomtvistelig, uigjendrivelig…</p>\n<p>Visstnok refererer det indre arbeidet med seg selv på en ettertrykkelig måte til de forskjellige psykologiske bevissthetstilstandene…</p>\n<p>Ingen kan nekte at vi bærer mange feil inni oss og at det finnes feilaktige tilstander…</p>\n<p>Hvis vi virkelig ønsker å endre oss, trenger vi snarest og påtrengende å radikalt endre disse feilaktige bevissthetstilstandene…</p>\n<p>Den absolutte modifikasjonen av de feilaktige tilstandene, gir opphav til fullstendige transformasjoner på det praktiske livets område…</p>\n<p>Når man jobber seriøst med de feilaktige tilstandene, kan åpenbart ikke de ubehagelige hendelsene i livet lenger såre en så lett…</p>\n<p>Vi sier noe som bare er mulig å forstå ved å oppleve det, ved å føle det virkelig på selve hendelsenes område…</p>\n<p>Den som ikke jobber med seg selv er alltid offer for omstendighetene; er som en elendig trestokk i det stormfulle havets vann…</p>\n<p>Hendelsene endrer seg ustanselig i sine mange kombinasjoner; de kommer etter hverandre i bølger, de er påvirkninger…</p>\n<p>Visstnok finnes det gode og dårlige hendelser; noen hendelser vil være bedre eller verre enn andre…</p>\n<p>Å endre visse hendelser er mulig; å endre resultater, modifisere situasjoner, osv., er absolutt innenfor antallet muligheter.</p>\n<p>Men det finnes faktiske situasjoner som virkelig ikke kan endres; i disse siste tilfellene må de aksepteres bevisst, selv om noen er veldig farlige og til og med smertefulle…</p>\n<p>Utvilsomt forsvinner smerten når vi ikke identifiserer oss med problemet som har oppstått…</p>\n<p>Vi bør betrakte livet som en suksessiv serie av indre tilstander; en autentisk historie om vårt eget liv er dannet av alle disse tilstandene…</p>\n<p>Ved å gjennomgå helheten av vår egen eksistens, kan vi selv verifisere direkte, at mange ubehagelige situasjoner var mulige takket være feilaktige indre tilstander…</p>\n<p>Aleksander den store, selv om han alltid var måteholden av natur, ga seg av stolthet til de overdrivelsene som forårsaket hans død…</p>\n<p>Frans I døde på grunn av et skittent og avskyelig utroskap, som historien fortsatt husker godt…</p>\n<p>Da Marat ble myrdet av en pervers nonne, døde han av hovmod og misunnelse, han trodde selv at han var absolutt rettferdig…</p>\n<p>Damene i Hjorteparken avsluttet utvilsomt fullstendig vitaliteten til den grusomme horbukken ved navn LUIS XV.</p>\n<p>Mange er de som dør av ambisjoner, sinne eller sjalusi, dette vet psykologene veldig godt…</p>\n<p>Så snart vår vilje bekreftes ugjenkallelig i en absurd tendens, blir vi kandidater til panteon eller kirkegård…</p>\n<p>Otello ble morder på grunn av sjalusi og fengselet er fullt av oppriktige feilaktige…</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
