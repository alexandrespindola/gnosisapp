import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Le Cher Ego",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Le Cher Ego",
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
    "set:html": "<p>Étant donné que supérieur et inférieur sont deux sections d’une même chose, il n’est pas inutile d’énoncer le corollaire suivant : “MOI SUPÉRIEUR, MOI INFÉRIEUR” sont deux aspects du même EGO ténébreux et pluralisé.</p>\n<p>Le soi-disant “MOI DIVIN” ou “MOI SUPÉRIEUR”, “ALTER EGO” ou quelque chose du genre, est certainement une ruse du “MOI-MÊME”, une forme d’AUTO-TROMPERIE.</p>\n<p>Quand le MOI veut continuer ici et dans l’au-delà, il s’auto-trompe avec le faux concept d’un MOI Divin Immortel…</p>\n<p>Aucun d’entre nous n’a un “Moi” véritable, permanent, immuable, éternel, ineffable, etc., etc., etc.</p>\n<p>Aucun d’entre nous n’a en vérité une véritable et authentique Unité d’Être ; malheureusement, nous ne possédons même pas une individualité légitime.</p>\n<p>L’Ego, bien qu’il continue au-delà de la tombe, a cependant un commencement et une fin.</p>\n<p>L’Ego, le MOI, n’est jamais quelque chose d’individuel, d’unitaire, d’univototal. Évidemment, le MOI est “DES MOIS”.</p>\n<p>Dans l’Est du Tibet, les “MOIS” sont appelés “AGRÉGATS PSYCHIQUES” ou simplement “Valeurs”, qu’ils soient positifs ou négatifs.</p>\n<p>Si nous pensons à chaque “Moi” comme à une personne différente, nous pouvons affirmer avec emphase ce qui suit : “À l’intérieur de chaque personne qui vit dans le monde, il existe de nombreuses personnes”.</p>\n<p>Incontestablement, à l’intérieur de chacun de nous vivent de très nombreuses personnes différentes, certaines meilleures, d’autres pires…</p>\n<p>Chacun de ces Mois, chacune de ces personnes lutte pour la suprématie, veut être exclusive, contrôle le cerveau intellectuel ou les centres émotionnel et moteur chaque fois qu’il le peut, tandis qu’un autre le déplace…</p>\n<p>La Doctrine des nombreux Mois a été enseignée dans l’Est du Tibet par les vrais Clairvoyants, par les authentiques Illuminés…</p>\n<p>Chacun de nos défauts psychologiques est personnifié dans tel ou tel Moi. Comme nous avons des milliers et même des millions de défauts, ostensiblement, beaucoup de gens vivent à l’intérieur de nous.</p>\n<p>En matière psychologique, nous avons pu clairement constater que les sujets paranoïaques, égocentriques et mythomanes n’abandonneraient pour rien au monde le culte de l’Ego chéri.</p>\n<p>Incontestablement, ces gens détestent mortellement la doctrine des nombreux “Mois”.</p>\n<p>Quand on veut vraiment se connaître soi-même, on doit s’auto-observer et essayer de connaître les différents “Mois” qui sont à l’intérieur de la personnalité.</p>\n<p>Si certains de nos lecteurs ne comprennent pas encore cette doctrine des nombreux “Mois”, c’est exclusivement dû au manque de pratique en matière d’Auto-Observation.</p>\n<p>À mesure que l’on pratique l’Auto-Observation Intérieure, on découvre par soi-même beaucoup de gens, beaucoup de “Mois”, qui vivent à l’intérieur de notre propre personnalité.</p>\n<p>Ceux qui nient la doctrine des nombreux Mois, ceux qui adorent un MOI Divin, indubitablement ne se sont jamais Auto-Observés sérieusement. Parlant cette fois dans un style Socratique, nous dirons que ces gens non seulement ignorent, mais en plus ignorent qu’ils ignorent.</p>\n<p>Certainement, nous ne pourrions jamais nous connaître nous-mêmes sans l’auto-observation sérieuse et profonde.</p>\n<p>Tant qu’un sujet quelconque continuera à se considérer comme Un, il est clair que tout changement intérieur sera plus qu’impossible.</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
