import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Die Nachahmung",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-educacion-fundamental.webp-2d51a7828a2b1309555be27f7e2a61a0.webp",
  "sidebar": {
    "label": "2. Die Nachahmung",
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
    "set:html": "<p>Es ist bereits vollständig bewiesen, dass ANGST die freie INITIATIVE behindert. Die schlechte wirtschaftliche Situation von Millionen von Menschen ist zweifellos auf das zurückzuführen, was man ANGST nennt.</p>\n<p>Das verängstigte Kind sucht seine geliebte Mutter und klammert sich an sie, um Sicherheit zu finden. Der verängstigte Ehemann klammert sich an seine Frau und fühlt, dass er sie viel mehr liebt. Die verängstigte Ehefrau sucht ihren Mann und ihre Kinder und fühlt, dass sie sie „viel“ mehr liebt.</p>"
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
const url = "src/content/docs/de/educacion-fundamental/la-imitacion.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/educacion-fundamental/la-imitacion.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/educacion-fundamental/la-imitacion.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
