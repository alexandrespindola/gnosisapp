import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';
import { $ as $$LanguageSelector } from './LanguageSelector_7LJauNiM.mjs';

const frontmatter = {
  "title": "ഗ്നോസ്റ്റിക് പുസ്തകങ്ങൾ",
  "description": "അന്തർദേശീയ ഗ്നോസ്റ്റിക് ലൈബ്രറി",
  "template": "splash",
  "lang": "ml",
  "hero": {
    "tagline": "ഗ്നോസ്റ്റിക് പഠനങ്ങളിലേക്ക് സ്വാഗതം",
    "image": {
      "file": "../../../assets/sol-de-acuario.webp"
    },
    "actions": [{
      "text": "പുസ്തകങ്ങൾ കാണുക",
      "link": "educacion-fundamental/prefacio",
      "icon": "right-arrow"
    }, {
      "text": "ഗ്നോസിസ് കോഴ്സിനെക്കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ",
      "link": "https://starlight.astro.build",
      "icon": "external",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$LanguageSelector, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/ml/index.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ml/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ml/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
