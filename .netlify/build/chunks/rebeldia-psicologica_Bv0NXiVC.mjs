import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Rébellion Psychologique",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Rébellion Psychologique",
    "order": 3
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
    "set:html": "<p>Il n’est pas inutile de rappeler à nos lecteurs qu’il existe un point mathématique en nous-mêmes…</p>\n<p>Incontestablement, ce point ne se trouve jamais dans le passé, ni dans le futur…</p>\n<p>Quiconque veut découvrir ce point mystérieux doit le chercher ici et maintenant, en lui-même, exactement à cet instant, pas une seconde avant, pas une seconde après…</p>\n<p>Les deux piliers Vertical et Horizontal de la Sainte Croix se rencontrent en ce point…</p>\n<p>Nous nous trouvons donc d’instant en instant face à deux Chemins : l’Horizontal et le Vertical…</p>\n<p>Il est ostensible que l’Horizontal est très “kitsch”, c’est celui que suivent “Vicente et tout le monde”, “Villegas et tous ceux qui arrivent”, “Don Raimundo et tout le monde”…</p>\n<p>Il est évident que le Vertical est différent ; c’est le chemin des rebelles intelligents, celui des Révolutionnaires…</p>\n<p>Quand on se souvient de soi-même, quand on travaille sur soi-même, quand on ne s’identifie pas à tous les problèmes et peines de la vie, de fait, on emprunte la Voie Verticale…</p>\n<p>Il est certain qu’il n’est jamais facile d’éliminer les émotions négatives ; de perdre toute identification avec notre propre train de vie ; problèmes de toutes sortes, affaires, dettes, paiements de traites, hypothèques, téléphone, eau, électricité, etc., etc., etc.</p>\n<p>Les chômeurs, ceux qui pour telle ou telle raison ont perdu leur emploi, leur travail, souffrent évidemment du manque d’argent et oublier leur cas, ne pas s’inquiéter, ni s’identifier à leur propre problème, est de fait terriblement difficile.</p>\n<p>Ceux qui souffrent, ceux qui pleurent, ceux qui ont été victimes d’une trahison, d’une mauvaise action dans la vie, d’une ingratitude, d’une calomnie ou d’une escroquerie, s’oublient réellement eux-mêmes, leur véritable Être intime, s’identifient complètement à leur tragédie morale…</p>\n<p>Le travail sur soi-même est la caractéristique fondamentale du Chemin Vertical. Personne ne pourrait fouler le Sentier de la Grande Rébellion, s’il ne travaillait jamais sur lui-même…</p>\n<p>Le travail auquel nous faisons référence est de type Psychologique ; il s’occupe d’une certaine transformation du moment présent dans lequel nous nous trouvons. Nous devons apprendre à vivre d’instant en instant…</p>\n<p>Par exemple, une personne qui se trouve désespérée par un problème sentimental, économique ou politique s’est évidemment oubliée elle-même…</p>\n<p>Une telle personne, si elle s’arrête un instant, si elle observe la situation et essaie de se souvenir d’elle-même, puis s’efforce de comprendre le sens de son attitude…</p>\n<p>Si elle réfléchit un peu, si elle pense que tout passe ; que la vie est illusoire, fugitive et que la mort réduit en cendres toutes les vanités du monde…</p>\n<p>Si elle comprend que son problème au fond n’est qu’un “feu de paille”, un feu follet qui s’éteint bientôt, elle verra soudain avec surprise que tout a changé…</p>\n<p>Transformer les réactions mécaniques est possible grâce à la confrontation logique et à l’Auto-Réflexion Intime de l’Être…</p>\n<p>Il est évident que les gens réagissent mécaniquement aux diverses circonstances de la vie…</p>\n<p>Pauvres gens ! Ils deviennent toujours des victimes. Quand quelqu’un les flatte, ils sourient ; quand on les humilie, ils souffrent. Ils insultent si on les insulte ; ils blessent si on les blesse ; ils ne sont jamais libres ; leurs semblables ont le pouvoir de les faire passer de la joie à la tristesse, de l’espoir au désespoir.</p>\n<p>Chaque personne de celles qui suivent le Chemin Horizontal ressemble à un instrument de musique, où chacun de ses semblables joue ce qui lui plaît…</p>\n<p>Celui qui apprend à transformer les relations mécaniques, de fait, s’engage sur le “Chemin Vertical”.</p>\n<p>Cela représente un changement fondamental dans le “Niveau d’Être”, résultat extraordinaire de la “Rébellion Psychologique”.</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
