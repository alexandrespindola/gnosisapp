import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Den indre tilstanden",
  "locale": "nb",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Den indre tilstanden",
    "order": 7
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
    "set:html": "<p>Å kombinere indre tilstander med ytre hendelser på en riktig måte, er å leve intelligent…</p>\n<p>Enhver intelligent opplevd hendelse krever sin tilsvarende spesifikke indre tilstand…</p>\n<p>Men dessverre tror folk, når de ser tilbake på livet sitt, at det i seg selv utelukkende består av ytre hendelser…</p>\n<p>Stakkars folk! De tror at hvis den ene eller den andre hendelsen ikke hadde skjedd dem, ville livet deres vært bedre…</p>\n<p>De antar at lykken møtte dem, og at de mistet muligheten til å være lykkelige…</p>\n<p>De beklager det tapte, gråter over det de foraktet, stønner og minnes gamle snublesteiner og ulykker…</p>\n<p>Folk vil ikke innse at å vegetere ikke er å leve, og at evnen til å eksistere bevisst utelukkende avhenger av kvaliteten på sjelens indre tilstander…</p>\n<p>Det spiller absolutt ingen rolle hvor vakre de ytre hendelsene i livet er, hvis vi ikke befinner oss i den rette indre tilstanden i slike øyeblikk, kan de beste hendelsene virke monotone, slitsomme eller rett og slett kjedelige…</p>\n<p>Noen venter spent på bryllupsfesten, det er en hendelse, men det kan skje at man er så bekymret i selve øyeblikket at man egentlig ikke nyter det i det hele tatt, og at alt blir like tørt og kaldt som en protokoll…</p>\n<p>Erfaring har lært oss at ikke alle som deltar i en bankett eller en dans, virkelig nyter det…</p>\n<p>Det mangler aldri en kjedelig person i den beste feiringen, og de deiligste stykkene gleder noen og får andre til å gråte…</p>\n<p>Svært få mennesker vet hvordan de trygt kan kombinere den ytre hendelsen med den passende indre tilstanden…</p>\n<p>Det er beklagelig at folk ikke vet hvordan de skal leve bevisst: de gråter når de skal le, og de ler når de skal gråte…</p>\n<p>Kontroll er annerledes: Den vise kan være glad, men aldri fylt av vanvittig galskap; trist, men aldri fortvilet og nedtrykt… rolig midt i volden; avholdsmann i orgiet; kysk blant lyst, osv.</p>\n<p>Melankolske og pessimistiske mennesker tenker det verste om livet og ønsker ærlig talt ikke å leve…</p>\n<p>Hver dag ser vi folk som ikke bare er ulykkelige, men som i tillegg – og det som er verre – også gjør livet bittert for andre…</p>\n<p>Slike mennesker ville ikke forandre seg selv om de levde daglig fra fest til fest; den psykologiske sykdommen bærer de inni seg… slike mennesker har definitivt perverse indre tilstander…</p>\n<p>Likevel kaller disse subjektene seg selv rettferdige, hellige, dydige, edle, hjelpsomme, martyrer, osv., osv., osv.</p>\n<p>Det er folk som anser seg selv for mye; folk som er veldig glad i seg selv…</p>\n<p>Individer som synes veldig synd på seg selv og som alltid leter etter smutthull for å unngå sitt eget ansvar…</p>\n<p>Slike mennesker er vant til de lavere følelsene, og det er tydelig at de av den grunn skaper psykiske elementer som er mindre enn menneskelige daglig.</p>\n<p>Ulykkelige hendelser, tilbakeslag, elendighet, gjeld, problemer osv., er utelukkende for de som ikke vet hvordan de skal leve…</p>\n<p>Hvem som helst kan tilegne seg en rik intellektuell kultur, men det er svært få mennesker som har lært å leve rettskaffent…</p>\n<p>Når man ønsker å skille ytre hendelser fra bevissthetens indre tilstander, demonstrerer man konkret sin manglende evne til å eksistere verdig.</p>\n<p>De som lærer å bevisst kombinere ytre hendelser og indre tilstander, går på veien til suksess…</p>"
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
const url = "src/content/docs/nb/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nb/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
