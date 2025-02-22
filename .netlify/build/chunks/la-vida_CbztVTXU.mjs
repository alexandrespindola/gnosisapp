import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Vie",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. La Vie",
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
    "set:html": "<p>Dans le domaine de la vie pratique, nous découvrons toujours des contrastes surprenants. Des gens riches, avec de magnifiques résidences et de nombreuses amitiés, souffrent parfois terriblement. Des prolétaires humbles, travaillant à la pioche, ou des personnes de la classe moyenne, vivent parfois dans un bonheur complet.</p>\n<p>Beaucoup d’archimillionnaires souffrent d’impuissance sexuelle et de riches matrones pleurent amèrement l’infidélité de leur mari…</p>\n<p>Les riches de la terre ressemblent à des vautours dans des cages dorées, car en ces temps, ils ne peuvent pas vivre sans “garde du corps”…</p>\n<p>Les hommes d’État traînent des chaînes, ne sont jamais libres, et sont partout entourés de gens armés jusqu’aux dents…</p>\n<p>Étudions cette situation plus en détail. Nous devons savoir ce qu’est la vie. Chacun est libre d’opiner comme il le souhaite…</p>\n<p>Quoi qu’on en dise, personne ne sait rien, la vie est un problème que personne ne comprend…</p>\n<p>Quand les gens souhaitent nous raconter gratuitement l’histoire de leur vie, ils citent des événements, des noms et prénoms, des dates, etc., et ressentent une satisfaction en faisant leurs récits…</p>\n<p>Ces pauvres gens ignorent que leurs récits sont incomplets car les événements, les noms et les dates ne sont que l’aspect externe du film, il manque l’aspect interne…</p>\n<p>Il est urgent de connaître les “états de conscience”, à chaque événement correspondant tel ou tel état d’âme.</p>\n<p>Les états sont intérieurs et les événements sont extérieurs, les événements externes ne sont pas tout…</p>\n<p>Il faut entendre par états intérieurs les bonnes ou mauvaises dispositions, les préoccupations, la dépression, la superstition, la crainte, la suspicion, la miséricorde, la considération de soi, la surestimation de soi-même ; les états de se sentir heureux, les états de joie, etc., etc., etc.</p>\n<p>Incontestablement, les états intérieurs peuvent correspondre exactement aux événements extérieurs ou être provoqués par ceux-ci, ou n’avoir aucun rapport avec eux…</p>\n<p>En tout cas, les états et les événements sont différents. Les événements ne correspondent pas toujours exactement aux états apparentés.</p>\n<p>L’état intérieur d’un événement agréable pourrait ne pas correspondre à celui-ci. L’état intérieur d’un événement désagréable pourrait ne pas correspondre à celui-ci. Des événements attendus pendant longtemps, quand ils sont arrivés, nous avons senti qu’il manquait quelque chose…</p>\n<p>Il manquait certainement l’état intérieur correspondant qui devait se combiner avec l’événement extérieur…</p>\n<p>Souvent, l’événement auquel on ne s’attendait pas finit par être celui qui nous a procuré les meilleurs moments…</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
