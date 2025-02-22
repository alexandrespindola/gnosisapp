import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Faits personnels",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Faits personnels",
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
    "set:html": "<p>Une auto-observation intime et complète de soi est indispensable lorsqu’il s’agit de découvrir des états psychologiques erronés.</p>\n<p>Incontestablement, les états intérieurs erronés peuvent être corrigés par des procédures appropriées.</p>\n<p>Étant donné que la vie intérieure est l’aimant qui attire les événements extérieurs, nous devons éliminer de notre psyché, avec une urgence maximale et absolue, les états psychologiques erronés.</p>\n<p>Corriger les états psychologiques erronés est indispensable si l’on veut modifier fondamentalement la nature de certains événements indésirables.</p>\n<p>Modifier notre relation avec certains événements est possible si nous éliminons de notre intérieur certains états psychologiques absurdes.</p>\n<p>Des situations extérieures destructrices pourraient devenir inoffensives, voire constructives, grâce à la correction intelligente des états intérieurs erronés.</p>\n<p>On peut changer la nature des événements désagréables qui nous arrivent en se purifiant intimement. Celui qui ne corrige jamais les états psychologiques absurdes, se croyant très fort, devient victime des circonstances.</p>\n<p>Mettre de l’ordre dans notre maison intérieure désordonnée est vital si l’on souhaite changer le cours d’une existence malheureuse.</p>\n<p>Les gens se plaignent de tout, souffrent, pleurent, protestent, aimeraient changer de vie, sortir du malheur dans lequel ils se trouvent, mais malheureusement, ils ne travaillent pas sur eux-mêmes.</p>\n<p>Les gens ne veulent pas se rendre compte que la vie intérieure attire les circonstances extérieures et que si celles-ci sont douloureuses, c’est à cause des états intérieurs absurdes.</p>\n<p>L’extérieur n’est que le reflet de l’intérieur, celui qui change intérieurement crée un nouvel ordre de choses.</p>\n<p>Les événements extérieurs ne seraient jamais aussi importants que la façon de réagir à ceux-ci.</p>\n<p>Êtes-vous resté serein face à l’insulteur ? Avez-vous accueilli avec plaisir les manifestations désagréables de vos semblables ?</p>\n<p>Comment avez-vous réagi à l’infidélité de l’être aimé ? Vous êtes-vous laissé emporter par le venin de la jalousie ? Avez-vous tué ? Êtes-vous en prison ?</p>\n<p>Les hôpitaux, les cimetières, les prisons sont remplis de sincères personnes qui se sont trompées et qui ont réagi de manière absurde face aux événements extérieurs.</p>\n<p>La meilleure arme qu’un homme puisse utiliser dans la vie est un état psychologique correct.</p>\n<p>On peut désarmer des bêtes féroces et démasquer des traîtres grâce à des états intérieurs appropriés.</p>\n<p>Les états intérieurs erronés font de nous des victimes sans défense de la perversité humaine.</p>\n<p>Apprenez à affronter les événements les plus désagréables de la vie pratique avec une attitude intérieure appropriée…</p>\n<p>Ne vous identifiez à aucun événement ; souvenez-vous que tout passe ; apprenez à voir la vie comme un film et vous en recevrez les bénéfices…</p>\n<p>N’oubliez pas que des événements sans aucune valeur pourraient vous mener au malheur si vous n’éliminez pas de votre psyché les états intérieurs erronés.</p>\n<p>Chaque événement extérieur a incontestablement besoin du billet approprié ; c’est-à-dire, de l’état psychologique précis.</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
