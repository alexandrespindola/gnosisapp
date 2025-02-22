import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "États Erronés",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. États Erronés",
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
    "set:html": "<p>Incontestablement, dans l’observation rigoureuse du Moi, il est toujours impérieux et inéluctable d’établir une distinction logique complète entre les événements extérieurs de la vie pratique et les états intimes de la conscience.</p>\n<p>Nous devons absolument savoir où nous nous situons à un moment donné, tant par rapport à l’état intime de la conscience qu’à la nature spécifique de l’événement extérieur qui nous arrive.</p>\n<p>La vie en elle-même est une série d’événements qui se déroulent à travers le temps et l’espace…</p>\n<p>Quelqu’un a dit : “La vie est une chaîne de martyres que l’homme traîne enchevêtrée dans son âme…”</p>\n<p>Chacun est libre de penser ce qu’il veut ; je crois qu’aux plaisirs éphémères d’un instant fugace succèdent toujours le désenchantement et l’amertume…</p>\n<p>Chaque événement a sa saveur caractéristique particulière et les états intérieurs sont eux aussi de nature différente ; c’est incontestable, irréfutable…</p>\n<p>Certes, le travail intérieur sur soi-même se réfère de manière emphatique aux divers états psychologiques de la conscience…</p>\n<p>Personne ne pourrait nier que nous portons en nous de nombreuses erreurs et qu’il existe des états erronés…</p>\n<p>Si nous voulons vraiment changer, nous devons d’urgence et de manière inéluctable modifier radicalement ces états erronés de la conscience…</p>\n<p>La modification absolue des états erronés entraîne des transformations complètes dans le domaine de la vie pratique…</p>\n<p>Quand on travaille sérieusement sur les états erronés, il est évident que les événements désagréables de la vie ne peuvent plus nous blesser aussi facilement…</p>\n<p>Nous disons quelque chose qu’il n’est possible de comprendre qu’en le vivant, en le ressentant réellement sur le terrain même des faits…</p>\n<p>Celui qui ne travaille pas sur lui-même est toujours victime des circonstances ; il est comme un misérable morceau de bois flottant sur les eaux tumultueuses de l’océan…</p>\n<p>Les événements changent sans cesse dans leurs multiples combinaisons ; ils viennent les uns après les autres en vagues, ce sont des influences…</p>\n<p>Certes, il existe de bons et de mauvais événements ; certains événements seront meilleurs ou pires que d’autres…</p>\n<p>Modifier certains événements est possible ; altérer des résultats, modifier des situations, etc., est certainement du domaine des possibles.</p>\n<p>Mais il existe des situations de fait qui ne peuvent vraiment pas être modifiées ; dans ces derniers cas, il faut les accepter consciemment, même si certaines sont très dangereuses et même douloureuses…</p>\n<p>Incontestablement, la douleur disparaît lorsque nous ne nous identifions pas au problème qui s’est présenté…</p>\n<p>Nous devons considérer la vie comme une série successive d’états intérieurs ; une histoire authentique de notre vie en particulier est formée de tous ces états…</p>\n<p>En revisitant la totalité de notre propre existence, nous pouvons vérifier par nous-mêmes de manière directe que de nombreuses situations désagréables ont été possibles grâce à des états intérieurs erronés…</p>\n<p>Alexandre le Grand, bien qu’il ait toujours été tempérant par nature, s’est livré par orgueil à des excès qui ont causé sa mort…</p>\n<p>François Ier est mort à cause d’un adultère sale et abominable, dont l’histoire se souvient encore très bien…</p>\n<p>Lorsque Marat a été assassiné par une religieuse perverse, il mourait d’orgueil et d’envie, se croyant absolument juste…</p>\n<p>Les dames du Parc aux Cerfs ont incontestablement anéanti toute la vitalité de l’effroyable fornicateur nommé LOUIS XV.</p>\n<p>Nombreux sont ceux qui meurent par ambition, colère ou jalousie, les psychologues le savent très bien…</p>\n<p>Dès que notre volonté se confirme irrévocablement dans une tendance absurde, nous devenons des candidats pour le panthéon ou le cimetière…</p>\n<p>Othello, à cause de la jalousie, est devenu un assassin et la prison est pleine d’égarés sincères…</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
