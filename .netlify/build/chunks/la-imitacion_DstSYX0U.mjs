import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Imitation",
  "locale": "fr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-educacion-fundamental.webp-2d51a7828a2b1309555be27f7e2a61a0.webp",
  "sidebar": {
    "label": "2. L'Imitation",
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
    "set:html": "<p>Il est déjà totalement démontré que la PEUR empêche la libre INITIATIVE. La mauvaise situation économique de millions de personnes est sans aucun doute due à ce qu’on appelle la PEUR.</p>\n<p>L’enfant effrayé cherche sa chère maman et s’accroche à elle pour trouver de la sécurité. Le mari effrayé s’accroche à sa femme et sent qu’il l’aime beaucoup plus. L’épouse effrayée cherche son mari et ses enfants et sent qu’elle les aime “beaucoup” plus.</p>"
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
const url = "src/content/docs/fr/educacion-fundamental/la-imitacion.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/educacion-fundamental/la-imitacion.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/fr/educacion-fundamental/la-imitacion.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
