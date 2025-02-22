import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Personlige Begivenheder",
  "locale": "da",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Personlige Begivenheder",
    "order": 9
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
    "set:html": "<p>Plena, intim selvobservation er uopsættelig, når det gælder om at opdage forkerte psykologiske tilstande.</p>\n<p>Ubestrideligt kan forkerte indre tilstande korrigeres ved hjælp af korrekte procedurer.</p>\n<p>Eftersom det indre liv er den magnet, der tiltrækker de ydre begivenheder, har vi et presserende og uopsætteligt behov for at fjerne de forkerte psykologiske tilstande fra vores psyke.</p>\n<p>Det er afgørende at korrigere forkerte psykologiske tilstande, når man ønsker fundamentalt at ændre naturen af visse uønskede begivenheder.</p>\n<p>Det er muligt at ændre vores forhold til bestemte begivenheder, hvis vi fjerner visse absurde psykologiske tilstande fra vores indre.</p>\n<p>Destruktive ydre situationer kunne blive harmløse og endda konstruktive gennem intelligent korrektion af forkerte indre tilstande.</p>\n<p>Man kan ændre naturen af de ubehagelige begivenheder, der sker os, når man renser sig indvendigt. Den, der aldrig korrigerer de absurde psykologiske tilstande og tror sig selv for stærk, bliver et offer for omstændighederne.</p>\n<p>Det er afgørende at skabe orden i vores uordentlige indre hus, når man ønsker at ændre kursen for en ulykkelig tilværelse.</p>\n<p>Folk klager over alt, lider, græder, protesterer, ønsker at ændre deres liv, komme ud af den ulykke, de befinder sig i, men desværre arbejder de ikke med sig selv.</p>\n<p>Folk vil ikke indse, at det indre liv tiltrækker ydre omstændigheder, og at hvis disse er smertefulde, skyldes det absurde indre tilstande.</p>\n<p>Det ydre er blot et spejlbillede af det indre; den, der ændrer sig indvendigt, skaber en ny orden.</p>\n<p>De ydre begivenheder ville aldrig være så vigtige som måden at reagere på dem.</p>\n<p>Forblev du rolig over for den, der fornærmede dig? Modtog du behageligt dine medmenneskers ubehagelige manifestationer?</p>\n<p>Hvordan reagerede du på den elskedes utroskab? Lod du dig rive med af jalousiens gift? Dræbte du? Er du i fængsel?</p>\n<p>Hospitaler, kirkegårde eller pantheoner, fængsler er fyldt med oprigtige, misforståede mennesker, der reagerede absurd på ydre begivenheder.</p>\n<p>Det bedste våben, et menneske kan bruge i livet, er en korrekt psykologisk tilstand.</p>\n<p>Man kan afvæbne vilddyr og afsløre forrædere gennem passende indre tilstande.</p>\n<p>Forkerte indre tilstande gør os til forsvarsløse ofre for menneskelig perversitet.</p>\n<p>Lær at møde de mest ubehagelige begivenheder i det praktiske liv med en passende indre holdning…</p>\n<p>Identificér dig ikke med nogen begivenhed; husk, at alt går over; lær at se livet som en film, og du vil modtage fordelene…</p>\n<p>Glem ikke, at begivenheder uden nogen værdi kan føre dig til ulykke, hvis du ikke fjerner de forkerte indre tilstande fra din psyke.</p>\n<p>Hver ydre begivenhed har ubestrideligt brug for den passende billet; det vil sige den præcise psykologiske tilstand.</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
