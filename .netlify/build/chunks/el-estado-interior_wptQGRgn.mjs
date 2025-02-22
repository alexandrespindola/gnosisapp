import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "The Inner State",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. The Inner State",
    "order": 7
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
    "set:html": "<p>To correctly combine inner states with outer events is to know how to live intelligently…</p>\n<p>Any event lived intelligently demands its corresponding specific inner state…</p>\n<p>However, unfortunately, when people review their lives, they think that life itself is made up exclusively of external events…</p>\n<p>Poor people! they think that if this or that event had not happened to them, their lives would have been better…</p>\n<p>They assume that luck passed them by and that they lost the opportunity to be happy…</p>\n<p>They lament what was lost, weep for what they despised, groan remembering old stumbles and calamities…</p>\n<p>People do not want to realise that vegetating is not living and that the capacity to exist consciously depends exclusively on the quality of the inner states of the Soul…</p>\n<p>It certainly does not matter how beautiful the external events of life are, if we are not in the appropriate inner state at such moments, the best events may seem monotonous, tiresome or simply boring…</p>\n<p>Someone anxiously awaits the wedding party, it is an event, but it could happen that they are so preoccupied at the precise moment of the event, that they really do not enjoy any delight in it and that everything becomes as arid and cold as a protocol…</p>\n<p>Experience has taught us that not all people who attend a banquet or a dance, truly enjoy it…</p>\n<p>There is always someone bored at the best of celebrations, and the most delicious pieces cheer some and make others cry…</p>\n<p>Very rare are the people who know how to confidently combine the external event with the appropriate internal state…</p>\n<p>It is regrettable that people do not know how to live consciously: they cry when they should laugh and laugh when they should cry…</p>\n<p>Control is different: The wise person can be cheerful but never full of crazy frenzy; sad but never desperate and dejected… serene in the midst of violence; abstemious in the orgy; chaste among lust, etc.</p>\n<p>Melancholy and pessimistic people think the worst of life and frankly do not want to live…</p>\n<p>Every day we see people who are not only unhappy, but also - and what is worse - make the lives of others bitter as well…</p>\n<p>People like this would not change even if they lived daily from party to party; they carry the psychological illness inside them… such people possess intimately perverse states…</p>\n<p>However, these subjects self-qualify as righteous, holy, virtuous, noble, helpful, martyrs, etc., etc., etc.</p>\n<p>They are people who overrate themselves; people who love themselves very much…</p>\n<p>Individuals who pity themselves greatly and who always look for ways to avoid their own responsibilities…</p>\n<p>People like this are accustomed to inferior emotions and it is ostensible that for this reason they create daily subhuman psychic elements.</p>\n<p>The unfortunate events, reversals of fortune, misery, debts, problems, etc., are the exclusivity of those people who do not know how to live…</p>\n<p>Anyone can form a rich intellectual culture, but very few people have learned to live rightly…</p>\n<p>When one wants to separate external events from the inner states of consciousness, one concretely demonstrates one’s inability to exist with dignity.</p>\n<p>Those who learn to consciously combine external events and inner states, march on the path to success…</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
