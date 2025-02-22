import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "The Beloved Ego",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. The Beloved Ego",
    "order": 11
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
    "set:html": "<p>Since higher and lower are two sections of the same thing, it is worth stating the following corollary: “HIGHER SELF, LOWER SELF” are two aspects of the same dark and pluralised EGO.</p>\n<p>The so-called “DIVINE SELF” or “HIGHER SELF”, “ALTER EGO” or something similar, is certainly a trick of the “MYSELF”, a form of SELF-DECEPTION.</p>\n<p>When the SELF wants to continue here and in the hereafter, it Self-Deceives with the false concept of an Immortal Divine SELF…</p>\n<p>None of us has a true, permanent, immutable, eternal, ineffable “Self”, etc., etc., etc.</p>\n<p>None of us truly has a real and authentic Unity of Being; unfortunately, we don’t even possess a legitimate individuality.</p>\n<p>The Ego, although it continues beyond the grave, has a beginning and an end.</p>\n<p>The Ego, the SELF, is never something individual, unitary, unitotal. Obviously, the SELF is “SELVES”.</p>\n<p>In Eastern Tibet, “SELVES” are called “PSYCHIC AGGREGATES” or simply “Values,” whether positive or negative.</p>\n<p>If we think of each “Self” as a different person, we can emphatically assert the following: “Within each person living in the world, there are many people”.</p>\n<p>Unquestionably, within each of us live many different people, some better, some worse…</p>\n<p>Each of these Selves, each of these people, fights for supremacy, wants to be exclusive, controls the intellectual brain or the emotional and motor centres whenever it can, while another displaces it…</p>\n<p>The Doctrine of the many Selves was taught in Eastern Tibet by the true Clairvoyants, by the authentic Enlightened Ones…</p>\n<p>Each of our psychological defects is personified in such and such a Self. Since we have thousands and even millions of defects, ostensibly many people live within us.</p>\n<p>In psychological matters, we have clearly evidenced that paranoid, egomaniacal, and mythomaniac subjects would never abandon the cult of the beloved Ego.</p>\n<p>Unquestionably, such people mortally hate the doctrine of the many “Selves”.</p>\n<p>When one truly wants to know oneself, one must self-observe and try to know the different “Selves” that are within the personality.</p>\n<p>If any of our readers do not yet understand this doctrine of the many “Selves”, it is exclusively due to a lack of practice in Self-Observation.</p>\n<p>As one practices Inner Self-Observation, one discovers for oneself many people, many “Selves”, who live within our own personality.</p>\n<p>Those who deny the doctrine of the many Selves, those who worship a Divine SELF, undoubtedly have never seriously Self-Observed. Speaking this time in the Socratic style, we will say that these people not only ignore, but also ignore that they ignore.</p>\n<p>Certainly, we could never know ourselves without serious and profound self-observation.</p>\n<p>As long as any subject continues to consider himself as One, it is clear that any inner change will be more than impossible.</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
