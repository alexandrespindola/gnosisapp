import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Skada Maravilhoza",
  "locale": "kea",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Skada Maravilhoza",
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
    "set:html": "<p>Nu ten ki anseia pa un mudansa verdaderu, sai di es rutina xatu, di es vida meramenti mecanicista, cansativa…</p>\n<p>Kuzé ki nu ten ki konprende ku klaridadi total é ma kada un di nos, se é burgês ô proletáriu, riku ô klasi média, riku ô miserável, sta dja na un Nível di Ser…</p>\n<p>Nível di Ser di bébadu é diferenti di kel di alkoólatra y kel di prostituta mutu diferenti di kel di donzela. Es ki nu sta ta fla é irrefutável, irrebatível…</p>\n<p>Tantu ki nu txiga na es parti di nos kapítulu, nu ka ta perdi nada ku imajina un skada ki ta stendi di baxu pa riba, vertikalmenti y ku txeu di degrau…</p>\n<p>Inkuestionavelmenti na algun degrau di es nos ta atxa; degrau na baxu ta ten algen pior ki nos; degrau na riba ta atxa pesoas midjor ki nos…</p>\n<p>Na es Vertikal straordináriu, na es skada maraviozu, é klaru ki nu pode atxa tudu Níveis di Ser… kada pessoa é diferenti y es ninhun pode refuta-l…</p>\n<p>Indubitablementi nu ka sta ta papia di karas feiu ô bonitu, nenhun tanbê ka sta ta trata di kuestion di idadi. Ten algen joven y velhu, ansion ki dja sta pa more y mininus ki kaba di nase…</p>\n<p>Kuestion di tenpu y di anus; kel di nase, krexe, dizenvolve, kaza, riproduzi, envelhese y more, é eskluzivu di Horizontal…</p>\n<p>Na “Skada Maraviozu”, na Vertikal konseitu tenpu ka ta servi. Na degraus di tal skala nu pode atxa “Níveis di Ser”…</p>\n<p>Speransa mecanicu di algen ka ta servi pa nada; es ta kru ma ku tenpu kuzas ta ser midjor; asina ki nos bisavós ta pensa; fatus djustamenti bin mostra kel kontrariu…</p>\n<p>“Nível di Ser” é kel ki ta konta y es é Vertikal; nu sta na un degrau ma nu pode subi pa otu degrau…</p>\n<p>“Skada Maraviozu” di kel ki nu sta ta papia y ki ta riferi na diferenti “Níveis di Ser”, sertamenti, nada ka ten a ver ku tenpu linear…</p>\n<p>Un “Nível di Ser” mas altu sta diretu na riba di nos di instante en instante…</p>\n<p>Ka sta na ninhun futur remótu horizontal, sinón aki y agóra; dentru di nos mésmu; na Vertikal…</p>\n<p>É ostensível y kualker un pode konprende, ki dos linha —Horizontal y Vertikal— ta atxa di momentu en momentu na nos interior Psicológico y ta forma Krus…</p>\n<p>Personalidadi ta dizenvolve y ta dizenrola na linha Horizontal di Vida. Ta nase y ta more dentru di se tenpu linear; é perecível; ka ten ninhun manhan pa personalidadi di mortu; ka é Ser…</p>\n<p>Níveis di Ser; Ser mésmu, ka é di tenpu, nada ka ten a ver ku Linha Horizontal; ta atxa dentru di nos mésmu. Agóra, na Vertikal…</p>\n<p>Ta rezultadu manifestamenti absurd buska nos propiu Ser fora di si mésmu…</p>\n<p>Ka sta di más seda komu koroláriu kel ki ta sigi: Títulus, graus, asensons, etc., na mundu físiku steriór, di modu ninhun ta orijina ezaltaçon autentiku, riavaliaçon di Ser, pasa pa un degrau superior na “Níveis di Ser”…</p>"
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
const url = "src/content/docs/kea/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kea/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/kea/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
