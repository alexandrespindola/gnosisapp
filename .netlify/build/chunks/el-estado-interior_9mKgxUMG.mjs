import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'État intérieur",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. L'État intérieur",
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
    "set:html": "<p>Combiner correctement les états intérieurs avec les événements extérieurs, c’est savoir vivre intelligemment…</p>\n<p>Tout événement vécu intelligemment exige son état intérieur spécifique correspondant…</p>\n<p>Cependant, malheureusement, lorsque les gens passent en revue leur vie, ils pensent qu’elle est constituée exclusivement d’événements extérieurs…</p>\n<p>Pauvres gens ! Ils pensent que si tel ou tel événement ne leur était pas arrivé, leur vie aurait été meilleure…</p>\n<p>Ils supposent que la chance ne leur a pas souri et qu’ils ont perdu l’opportunité d’être heureux…</p>\n<p>Ils regrettent ce qui est perdu, pleurent ce qu’ils ont méprisé, gémissent en se souvenant des vieux faux pas et des calamités…</p>\n<p>Les gens ne veulent pas se rendre compte que végéter n’est pas vivre et que la capacité à exister consciemment dépend exclusivement de la qualité des états intérieurs de l’Âme…</p>\n<p>Peu importe à quel point les événements extérieurs de la vie sont beaux, si nous ne nous trouvons pas dans l’état intérieur approprié à ces moments-là, les meilleurs événements peuvent nous sembler monotones, ennuyeux ou simplement lassants…</p>\n<p>Quelqu’un attend avec impatience la fête de mariage, c’est un événement, mais il pourrait arriver qu’il soit si préoccupé au moment précis de l’événement, qu’il n’y ait aucun plaisir et que tout devienne aussi aride et froid qu’un protocole…</p>\n<p>L’expérience nous a appris que toutes les personnes qui assistent à un banquet ou à un bal n’en profitent pas vraiment…</p>\n<p>Il y a toujours un ennuyeux dans la meilleure des festivités et les morceaux les plus délicieux réjouissent certains et font pleurer les autres…</p>\n<p>Il est très rare que les gens sachent combiner en toute confiance l’événement extérieur avec l’état interne approprié…</p>\n<p>Il est regrettable que les gens ne sachent pas vivre consciemment : ils pleurent quand ils devraient rire et rient quand ils devraient pleurer…</p>\n<p>Le contrôle est différent : le sage peut être joyeux mais jamais rempli de frénésie folle ; triste mais jamais désespéré et abattu… serein au milieu de la violence ; sobre dans l’orgie ; chaste parmi la luxure, etc.</p>\n<p>Les personnes mélancoliques et pessimistes pensent du pire de la vie et ne souhaitent franchement pas vivre…</p>\n<p>Tous les jours, nous voyons des gens qui non seulement sont malheureux, mais aussi - et ce qui est pire - rendent également la vie des autres amère…</p>\n<p>Des gens comme ça ne changeraient pas même en vivant quotidiennement de fête en fête ; la maladie psychologique, ils l’ont à l’intérieur… ces personnes possèdent des états intimes définitivement pervers…</p>\n<p>Cependant, ces sujets se qualifient eux-mêmes de justes, saints, vertueux, nobles, serviables, martyrs, etc., etc., etc.</p>\n<p>Ce sont des gens qui se surestiment beaucoup ; des personnes qui s’aiment beaucoup elles-mêmes…</p>\n<p>Des individus qui s’apitoient beaucoup sur eux-mêmes et qui cherchent toujours des échappatoires pour éluder leurs propres responsabilités…</p>\n<p>Des personnes comme ça sont habituées aux émotions inférieures et il est ostensible que pour cette raison, elles créent quotidiennement des éléments psychiques infra-humains.</p>\n<p>Les événements malheureux, les revers de fortune, la misère, les dettes, les problèmes, etc., sont l’exclusivité de ces personnes qui ne savent pas vivre…</p>\n<p>N’importe qui peut se former une riche culture intellectuelle, mais très peu de personnes ont appris à vivre correctement…</p>\n<p>Quand on veut séparer les événements extérieurs des états intérieurs de la conscience, on démontre concrètement son incapacité à exister dignement.</p>\n<p>Ceux qui apprennent à combiner consciemment événements extérieurs et états intérieurs, marchent sur le chemin du succès…</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
