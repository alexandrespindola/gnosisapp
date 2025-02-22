import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Livet",
  "locale": "da",
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
    "set:html": "<p>På livets praktiske område opdager vi altid kontraster, der forbløffer. Velhavende mennesker med en storslået bolig og mange venskaber lider undertiden forfærdeligt. .. Ydmyge arbejdere med hakke og spade eller folk fra middelklassen lever undertiden i fuldkommen lykke.</p>\n<p>Mange stenrige mænd lider af seksuel impotens, og rige fruer græder bittert over deres mænds utroskab…</p>\n<p>Jordens rige ligner gribbe i gyldne bure, for i disse tider kan de ikke leve uden “livvagter”…</p>\n<p>Statsmænd slæber rundt på lænker, de er aldrig frie, de går overalt omgivet af folk, der er bevæbnede til tænderne…</p>\n<p>Lad os studere denne situation mere detaljeret. Vi har brug for at vide, hvad livet er. Enhver er fri til at mene, hvad de vil…</p>\n<p>Uanset hvad folk siger, ved ingen i virkeligheden noget, livet er et problem, som ingen forstår…</p>\n<p>Når folk gratis ønsker at fortælle os historien om deres liv, citerer de begivenheder, navne og efternavne, datoer osv., og de føler tilfredshed ved at fortælle deres historier…</p>\n<p>Disse stakkels mennesker er uvidende om, at deres historier er ufuldstændige, fordi begivenheder, navne og datoer kun er filmens ydre aspekt, det indre aspekt mangler…</p>\n<p>Det er presserende at kende “bevidsthedstilstande”, til hver begivenhed svarer den ene eller den anden sindsstemning.</p>\n<p>Tilstande er indre, og begivenheder er ydre, eksterne begivenheder er ikke alt…</p>\n<p>Med indre tilstande menes gode eller dårlige dispositioner, bekymringer, depression, overtro, frygt, mistanke, barmhjertighed, selvoptagethed, overvurdering af sig selv; tilstande af at føle sig lykkelig, tilstande af glæde osv., osv., osv.</p>\n<p>Det er ubestrideligt, at de indre tilstande præcist kan svare til de ydre begivenheder eller være forårsaget af disse, eller ikke have nogen relation til dem…</p>\n<p>Under alle omstændigheder er tilstande og begivenheder forskellige. Ikke altid stemmer hændelser nøjagtigt overens med beslægtede tilstande.</p>\n<p>Den indre tilstand af en behagelig begivenhed stemmer muligvis ikke overens med den. Den indre tilstand af en ubehagelig begivenhed stemmer muligvis ikke overens med den. Begivenheder, der er ventet længe, følte vi, da de kom, at der manglede noget…</p>\n<p>Der manglede bestemt den tilsvarende indre tilstand, der skulle kombineres med den ydre begivenhed…</p>\n<p>Mange gange viser den begivenhed, der ikke var ventet, sig at være den, der har givet os de bedste øjeblikke…</p>"
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
const url = "src/content/docs/da/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/da/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
