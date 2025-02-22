import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Wrong States",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Wrong States",
    "order": 8
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
    "set:html": "<p>Undoubtedly, in the rigorous observation of the Self, it is always imperative and unavoidable to make a complete logical distinction between the external events of practical life and the intimate states of consciousness.</p>\n<p>We urgently need to know where we are situated at any given moment, both in relation to the intimate state of consciousness and the specific nature of the external event that is happening to us.</p>\n<p>Life itself is a series of events that are processed through time and space…</p>\n<p>Someone said: “Life is a chain of martyrdoms that man carries entangled in the Soul…”</p>\n<p>Everyone is free to think as they wish; I believe that ephemeral pleasures of a fleeting instant are always followed by disappointment and bitterness…</p>\n<p>Each event has its own special characteristic flavour, and the interior states are likewise of a different kind; this is incontrovertible, irrefutable…</p>\n<p>Certainly, the inner work on oneself refers emphatically to the various psychological states of consciousness…</p>\n<p>No one could deny that we carry many errors within us and that there are misguided states…</p>\n<p>If we truly want to change, we urgently need to radically modify these misguided states of consciousness…</p>\n<p>The absolute modification of misguided states brings about complete transformations in the realm of practical life…</p>\n<p>When one works seriously on the misguided states, obviously the unpleasant events of life can no longer hurt you so easily…</p>\n<p>We are saying something that can only be understood by experiencing it, by really feeling it in the very field of facts…</p>\n<p>He who does not work on himself is always a victim of circumstances; he is like a miserable log in the stormy waters of the ocean…</p>\n<p>Events change incessantly in their multiple combinations; they come one after another in waves, they are influences…</p>\n<p>Certainly there are good and bad events; some events will be better or worse than others…</p>\n<p>Modifying certain events is possible; altering results, modifying situations, etc., is certainly within the realm of possibilities.</p>\n<p>However, there are factual situations that truly cannot be altered; in these latter cases, they must be consciously accepted, even if some are very dangerous and even painful…</p>\n<p>Undoubtedly, pain disappears when we do not identify with the problem that has arisen…</p>\n<p>We must consider life as a successive series of inner states; an authentic history of our particular life is formed by all these states…</p>\n<p>By reviewing the totality of our own existence, we can verify for ourselves directly that many unpleasant situations were possible thanks to misguided inner states…</p>\n<p>Alexander the Great, although always temperate by nature, gave himself up out of pride to the excesses that led to his death…</p>\n<p>Francis I died as a result of a dirty and abominable adultery, which history still remembers very well…</p>\n<p>When Marat was assassinated by a perverse nun, he was dying of pride and envy, believing himself to be absolutely righteous…</p>\n<p>The ladies of the Deer Park undoubtedly completely ended the vitality of the dreadful fornicator called LOUIS XV.</p>\n<p>Many people die from ambition, anger or jealousy, this is well known by Psychologists…</p>\n<p>As soon as our will is irrevocably confirmed in an absurd tendency, we become candidates for the pantheon or cemetery…</p>\n<p>Othello, due to jealousy, became a murderer, and the prison is full of sincere misguided people…</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
