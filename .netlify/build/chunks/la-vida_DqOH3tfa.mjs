import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "The Life",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. The Life",
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
    "set:html": "<p>In the realm of practical life, we always discover contrasts that astonish. Wealthy people with magnificent residences and many friends sometimes suffer terribly. Humble labourers with pickaxes and shovels, or people from the middle class, often live in complete happiness.</p>\n<p>Many multi-millionaires suffer from sexual impotence, and wealthy matrons bitterly lament their husbands’ infidelity…</p>\n<p>The rich of the earth seem like vultures in golden cages; these days they cannot live without “bodyguards”…</p>\n<p>Statesmen drag chains; they are never free, walking everywhere surrounded by people armed to the teeth…</p>\n<p>Let us study this situation more closely. We need to know what life is. Everyone is free to have their own opinion…</p>\n<p>Say what they will, certainly no one knows anything; life is a problem that no one understands…</p>\n<p>When people want to tell us the story of their life for free, they cite events, names and surnames, dates, etc., and feel satisfaction in making their accounts…</p>\n<p>These poor people are unaware that their stories are incomplete because events, names and dates are only the external aspect of the film; the internal aspect is missing…</p>\n<p>It is urgent to know “states of consciousness”; each event corresponds to such and such a state of mind.</p>\n<p>States are internal, and events are external; external events are not everything…</p>\n<p>Understand by internal states the good or bad dispositions, worries, depression, superstition, fear, suspicion, mercy, self-consideration, overestimation of oneself; states of feeling happy, states of joy, etc., etc., etc.</p>\n<p>Unquestionably, internal states can correspond exactly with external events or be originated by them, or have no relation to them whatsoever…</p>\n<p>In any case, states and events are different. Events do not always correspond exactly with related states.</p>\n<p>The internal state of a pleasant event might not correspond with it. The internal state of an unpleasant event might not correspond with it. Events awaited for a long time, when they came, we felt that something was missing…</p>\n<p>Certainly, the corresponding internal state that should have combined with the external event was missing…</p>\n<p>Often the event that was not expected turns out to be the one that has provided us with the best moments…</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
