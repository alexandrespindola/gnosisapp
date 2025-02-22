import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "The Essence",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. The Essence",
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
    "set:html": "<p>What makes every newborn child beautiful and adorable is their Essence; this constitutes their true reality in itself…</p>\n<p>The normal growth of the Essence in every creature is certainly very residual, incipient…</p>\n<p>The human body grows and develops according to the biological laws of the species, however such possibilities are in themselves very limited for the Essence…</p>\n<p>Undoubtedly, the Essence can only grow by itself without help, to a very small degree…</p>\n<p>Frankly and without ambiguity, we will say that the spontaneous and natural growth of the Essence is only possible during the first three, four and five years of age, that is, in the first stage of life…</p>\n<p>People think that the growth and development of the Essence always takes place continuously, according to the mechanics of evolution, but Universal Gnosticism clearly teaches that this does not happen…</p>\n<p>In order for the Essence to grow more, something very special must happen, something new must be done.</p>\n<p>I want to refer emphatically to the work on oneself. The development of the Essence is only possible on the basis of conscious work and voluntary suffering…</p>\n<p>It is necessary to understand that these works do not refer to matters of profession, banks, carpentry, masonry, railway line repair or office matters…</p>\n<p>This work is for every person who has developed a personality; it is something Psychological…</p>\n<p>We all know that we have within ourselves that which is called EGO, I, MYSELF, SELF…</p>\n<p>Unfortunately, the Essence is bottled up, trapped, within the EGO and this is regrettable.</p>\n<p>Dissolving the Psychological EGO, disintegrating its undesirable elements, is urgent, unpostponable, imperative… this is the meaning of the work on oneself.</p>\n<p>We could never liberate the Essence without first disintegrating the Psychological EGO…</p>\n<p>In the Essence is Religion, the BUDDHA, Wisdom, the particles of pain of our Father who is in Heaven and all the data we need for the INTIMATE SELF-REALISATION OF THE BEING.</p>\n<p>No one could annihilate the Psychological EGO without first eliminating the inhuman elements that we carry within…</p>\n<p>We need to reduce to ashes the monstrous cruelty of these times: the envy that unfortunately has become the secret spring of action; the unbearable greed that has made life so bitter: the disgusting slander; the calumny that causes so many tragedies; the drunkenness; the filthy lust that smells so bad; etc., etc., etc.</p>\n<p>As all those abominations are reduced to cosmic dust, the Essence, in addition to becoming emancipated, will grow and develop harmoniously…</p>\n<p>Undoubtedly, when the Psychological EGO has died, the Essence shines in us…</p>\n<p>The free Essence confers on us intimate beauty; from such beauty emanate perfect happiness and true Love…</p>\n<p>The Essence possesses multiple senses of perfection and extraordinary natural powers…</p>\n<p>When we “Die in Ourselves”, when we dissolve the Psychological EGO, we enjoy the precious senses and powers of the Essence…</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
