import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Escalier Merveilleux",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. L'Escalier Merveilleux",
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
    "set:html": "<p>Nous devons aspirer à un changement véritable, sortir de cette routine ennuyeuse, de cette vie purement mécaniste, fatigante…</p>\n<p>Ce que nous devons d’abord comprendre avec une entière clarté, c’est que chacun d’entre nous, bourgeois ou prolétaire, aisé ou de la classe moyenne, riche ou misérable, se trouve réellement à tel ou tel Niveau d’Être…</p>\n<p>Le Niveau d’Être de l’ivrogne est différent de celui de l’abstinent et celui de la prostituée très différent de celui de la jeune fille. Ce que nous disons est irréfutable, incontestable…</p>\n<p>En arrivant à cette partie de notre chapitre, nous ne perdons rien à imaginer un escalier qui s’étend de bas en haut, verticalement et avec de très nombreuses marches…</p>\n<p>Incontestablement, nous nous trouvons sur l’une de ces marches ; en dessous de nous, il y aura des gens pires que nous ; au-dessus de nous, il y aura des personnes meilleures que nous…</p>\n<p>Dans cette Verticale extraordinaire, dans cet escalier merveilleux, il est clair que nous pouvons trouver tous les Niveaux d’Être… chaque personne est différente et personne ne peut le réfuter…</p>\n<p>Indubitablement, nous ne parlons pas ici de visages laids ou beaux, ni de question d’âge. Il y a des gens jeunes et vieux, des vieillards sur le point de mourir et des enfants nouveau-nés…</p>\n<p>La question du temps et des années ; cette idée de naître, grandir, se développer, se marier, se reproduire, vieillir et mourir, est exclusive de l’Horizontale…</p>\n<p>Dans l‘“Escalier Merveilleux”, dans la Verticale, le concept de temps n’a pas sa place. Sur les marches de cette échelle, nous ne pouvons trouver que des “Niveaux d’Être”…</p>\n<p>L’espoir mécanique des gens ne sert à rien ; ils croient qu’avec le temps les choses iront mieux ; c’est ce que pensaient nos grands-parents et arrière-grands-parents ; les faits ont précisément démontré le contraire…</p>\n<p>Le “Niveau d’Être” est ce qui compte et c’est Vertical ; nous nous trouvons sur une marche mais nous pouvons monter à une autre marche…</p>\n<p>L‘“Escalier Merveilleux” dont nous parlons et qui se réfère aux différents “Niveaux d’Être”, n’a certainement rien à voir avec le temps linéaire…</p>\n<p>Un “Niveau d’Être” plus élevé est immédiatement au-dessus de nous d’instant en instant…</p>\n<p>Il n’est pas dans un futur horizontal lointain, mais ici et maintenant ; à l’intérieur de nous-mêmes ; dans la Verticale…</p>\n<p>Il est ostensible et n’importe qui peut le comprendre, que les deux lignes —Horizontale et Verticale— se rencontrent d’instant en instant à l’intérieur de notre psyché et forment une Croix…</p>\n<p>La personnalité se développe et se déploie sur la ligne Horizontale de la Vie. Elle naît et meurt dans son temps linéaire ; elle est périssable ; il n’y a pas de lendemain pour la personnalité du mort ; ce n’est pas l’Être…</p>\n<p>Les Niveaux de l’Être ; l’Être lui-même, n’est pas du temps, n’a rien à voir avec la Ligne Horizontale ; il se trouve à l’intérieur de nous-mêmes. Maintenant, dans la Verticale…</p>\n<p>Il serait manifestement absurde de chercher notre propre Être en dehors de nous-mêmes…</p>\n<p>Il n’est pas inutile de poser comme corollaire ce qui suit : Les titres, les grades, les promotions, etc., dans le monde physique extérieur, n’engendreraient en aucun cas une exaltation authentique, une réévaluation de l’Être, un passage à un échelon supérieur dans les “Niveaux de l’Être”…</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
