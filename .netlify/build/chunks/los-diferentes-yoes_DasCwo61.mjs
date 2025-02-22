import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Les Différents Moi",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Les Différents Moi",
    "order": 10
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
    "set:html": "<p>Le Mammifère Rationnel, appelé à tort homme, ne possède pas réellement une individualité définie.</p>\n<p>Incontestablement, ce manque d’unité Psychologique chez l’Humanoïde est la cause de tant de difficultés et d’amertumes.</p>\n<p>Le corps physique est une unité complète et travaille comme un tout organique, à moins d’être malade.</p>\n<p>Cependant, la vie intérieure de l’Humanoïde n’est en aucun cas une unité psychologique.</p>\n<p>Le plus grave de tout cela, en dépit de ce que disent les diverses écoles de type Pseudo-Ésotérique et Pseudo-Occultiste, est l’absence d’organisation Psychologique dans le fond intime de chaque sujet.</p>\n<p>Certainement, dans de telles conditions, il n’existe pas de travail harmonieux comme un tout, dans la vie intérieure des personnes.</p>\n<p>L’Humanoïde, par rapport à son état intérieur, est une multiplicité psychologique, une somme de “Moi”.</p>\n<p>Les ignorants instruits de cette époque ténébreuse, rendent un culte au “MOI”, ils l’idéalisent, le placent sur les autels, l’appellent “ALTER EGO”, “MOI SUPÉRIEUR”, “MOI DIVIN”, etc., etc., etc.</p>\n<p>Ils ne veulent pas se rendre compte, les “Savants” de cet âge noir dans lequel nous vivons, que “Moi Supérieur” ou “Moi Inférieur”, sont deux sections du même Ego pluralisé…</p>\n<p>L’Humanoïde n’a certainement pas un “MOI Permanent” mais une multitude de différents “Moi” Infrahumains et absurdes.</p>\n<p>Le pauvre animal intellectuel, appelé à tort homme, est semblable à une maison en désordre où, au lieu d’un maître, il existe de nombreux serviteurs qui veulent toujours commander et faire ce qui leur plaît…</p>\n<p>La plus grande erreur du Pseudo-Ésotérisme et du Pseudo-Occultisme bon marché, est de supposer que les autres possèdent ou que l’on a un “MOI Permanent et Immuable” sans commencement et sans fin…</p>\n<p>Si ceux qui pensent ainsi éveillaient leur conscience, ne serait-ce qu’un instant, ils pourraient constater clairement par eux-mêmes que l’Humanoïde rationnel n’est jamais le même bien longtemps…</p>\n<p>Le mammifère intellectuel, du point de vue psychologique, est en changement continuel…</p>\n<p>Penser que si une personne s’appelle Luis, elle est toujours Luis, ressemble à une blague de très mauvais goût…</p>\n<p>Ce sujet que l’on appelle Luis a en lui-même d’autres “Moi”, d’autres egos, qui s’expriment à travers sa personnalité à différents moments et bien que Luis n’aime pas la cupidité, un autre “Moi” en lui — appelons-le Pepe — aime la cupidité et ainsi de suite…</p>\n<p>Aucune personne n’est la même de manière continue, il n’est vraiment pas nécessaire d’être très savant pour se rendre compte pleinement des innombrables changements et contradictions de chaque sujet…</p>\n<p>Supposer que quelqu’un possède un “Moi Permanent et Immuable” équivaut bien sûr à un abus envers son prochain et envers soi-même…</p>\n<p>À l’intérieur de chaque personne vivent de nombreuses personnes, de nombreux “Moi”, cela peut être vérifié par soi-même et de manière directe, par toute personne éveillée, consciente…</p>"
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
const url = "src/content/docs/fr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
