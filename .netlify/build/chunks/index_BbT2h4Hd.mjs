import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';
import { $ as $$LanguageSelector } from './LanguageSelector_7LJauNiM.mjs';

const frontmatter = {
  "title": "ספרים גנוסטיים",
  "description": "ספרייה גנוסטית בינלאומית",
  "template": "splash",
  "lang": "he",
  "hero": {
    "tagline": "ברוכים הבאים ללימודים גנוסטיים",
    "image": {
      "file": "../../../assets/sol-de-acuario.webp"
    },
    "actions": [{
      "text": "צפה בספרים",
      "link": "books",
      "icon": "right-arrow"
    }, {
      "text": "מידע נוסף על קורס הגנוזיס",
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
const url = "src/content/docs/he/index.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/he/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/he/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
