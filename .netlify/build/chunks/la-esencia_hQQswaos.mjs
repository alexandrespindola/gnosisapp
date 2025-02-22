import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Essence",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. L'Essence",
    "order": 4
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
    "set:html": "<p>Ce qui rend chaque nouveau-né beau et adorable, c’est son Essence ; celle-ci constitue en elle-même sa véritable réalité…</p>\n<p>La croissance normale de l’Essence chez toute créature est certes très résiduelle, incipiente…</p>\n<p>Le corps humain croît et se développe selon les lois biologiques de l’espèce, cependant ces possibilités sont en elles-mêmes très limitées pour l’Essence…</p>\n<p>Incontestablement, l’Essence ne peut croître par elle-même sans aide, qu’à un degré infime…</p>\n<p>Franchement et sans ambages, nous dirons que la croissance spontanée et naturelle de l’Essence n’est possible que pendant les trois, quatre et cinq premières années de l’âge, c’est-à-dire, dans la première étape de la vie…</p>\n<p>Les gens pensent que la croissance et le développement de l’Essence se réalisent toujours de manière continue, selon la mécanique de l’évolution, mais le Gnosticisme Universel enseigne clairement que cela ne se produit pas ainsi…</p>\n<p>Afin que l’Essence croisse davantage, quelque chose de très spécial doit se produire, quelque chose de nouveau doit être réalisé.</p>\n<p>Je veux me référer de manière emphatique au travail sur soi-même. Le développement de l’Essence n’est possible qu’à base de travaux conscients et de souffrances volontaires…</p>\n<p>Il est nécessaire de comprendre que ces travaux ne se réfèrent pas à des questions de profession, de banques, de menuiserie, de maçonnerie, de réparation de lignes ferroviaires ou d’affaires de bureau…</p>\n<p>Ce travail est pour toute personne qui a développé la personnalité ; il s’agit de quelque chose de Psychologique…</p>\n<p>Nous savons tous que nous avons en nous ce que l’on appelle l’EGO, le MOI, MOI-MÊME, SOI-MÊME…</p>\n<p>Malheureusement, l’Essence se trouve embouteillée, enfermée, entre l’EGO et ceci est lamentable.</p>\n<p>Dissoudre le MOI Psychologique, désintégrer ses éléments indésirables, est urgent, inéluctable, impératif… tel est le sens du travail sur soi-même.</p>\n<p>Nous ne pourrions jamais libérer l’Essence sans désintégrer préalablement le MOI Psychologique…</p>\n<p>Dans l’Essence se trouvent la Religion, le BOUDDHA, la Sagesse, les particules de douleur de notre Père qui est aux Cieux et toutes les données dont nous avons besoin pour l’AUTO-REALISATION INTIME DE L’ÊTRE.</p>\n<p>Personne ne pourrait anéantir le MOI Psychologique sans éliminer préalablement les éléments inhumains que nous portons en nous…</p>\n<p>Nous devons réduire en cendres la cruauté monstrueuse de ces temps : l’envie qui malheureusement est devenue le ressort secret de l’action ; la convoitise insupportable qui a rendu la vie si amère : la médisance dégoûtante ; la calomnie qui cause tant de tragédies ; les ivresses ; l’immonde luxure qui sent si mauvais ; etc., etc., etc.</p>\n<p>À mesure que toutes ces abominations se réduisent en poussière cosmique, l’Essence, en plus de s’émanciper, croîtra et se développera harmonieusement…</p>\n<p>Incontestablement, quand le MOI Psychologique est mort, l’Essence resplendit en nous…</p>\n<p>L’Essence libre nous confère une beauté intime ; de cette beauté émanent le bonheur parfait et le véritable Amour…</p>\n<p>L’Essence possède de multiples sens de perfection et d’extraordinaires pouvoirs naturels…</p>\n<p>Quand nous “Mourons en Nous-Mêmes”, quand nous dissolvons le MOI Psychologique, nous jouissons des précieux sens et pouvoirs de l’Essence…</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
