import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Personal Events",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Personal Events",
    "order": 9
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
    "set:html": "<p>Full intimate self-observation of oneself is indispensable when it comes to discovering incorrect psychological states.</p>\n<p>Undoubtedly, incorrect inner states can be corrected through correct procedures.</p>\n<p>Since the inner life is the magnet that attracts outer events, we urgently need to eliminate erroneous psychological states from our psyche.</p>\n<p>Correcting incorrect psychological states is essential when one wants to fundamentally alter the nature of certain undesirable events.</p>\n<p>Altering our relationship with certain events is possible if we eliminate certain absurd psychological states from within.</p>\n<p>Destructive external situations could become harmless and even constructive through the intelligent correction of erroneous inner states.</p>\n<p>One can change the nature of unpleasant events that happen to us when one purifies oneself intimately. Whoever never corrects absurd psychological states, believing themselves to be very strong, becomes a victim of circumstances.</p>\n<p>Putting order in our disordered inner house is vital when one wants to change the course of an unfortunate existence.</p>\n<p>People complain about everything, suffer, cry, protest, would like to change their lives, get out of the misfortune they find themselves in, unfortunately, they do not work on themselves.</p>\n<p>People do not want to realise that the inner life attracts outer circumstances and that if these are painful, it is due to absurd inner states.</p>\n<p>The external is only a reflection of the internal; whoever changes internally originates a new order of things.</p>\n<p>External events would never be as important as the way we react to them.</p>\n<p>Did you remain calm in the face of the insulter? Did you gladly receive the unpleasant manifestations of your fellow human beings?</p>\n<p>How did you react to the infidelity of your loved one? Did you let yourself be carried away by the poison of jealousy? Did you kill? Are you in prison?</p>\n<p>Hospitals, cemeteries or pantheons, prisons, are full of sincerely mistaken people who reacted absurdly to external events.</p>\n<p>The best weapon a man can use in life is a correct psychological state.</p>\n<p>One can disarm beasts and unmask traitors through appropriate inner states.</p>\n<p>Incorrect inner states turn us into defenseless victims of human perversity.</p>\n<p>Learn to face the most unpleasant events of practical life with an appropriate inner attitude…</p>\n<p>Do not identify with any event; remember that everything passes; learn to see life as a movie and you will receive the benefits…</p>\n<p>Do not forget that events of no value could lead you to misfortune if you do not eliminate incorrect inner states from your psyche.</p>\n<p>Each external event undoubtedly needs the appropriate ticket; that is, the precise psychological state.</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
