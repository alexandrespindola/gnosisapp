import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Self-incrimination",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Self-incrimination",
    "order": 5
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
    "set:html": "<p>The Essence that each of us carries within comes from above, from Heaven, from the stars…</p>\n<p>Undeniably, the marvellous Essence comes from the note “LA” (The Milky Way, the Galaxy in which we live).</p>\n<p>Precious Essence passes through the note “SOL” (The Sun) and then from the note “FA” (The Planetary Zone) enters this world and penetrates into our very being.</p>\n<p>Our parents created the appropriate body for the reception of this Essence that comes from the Stars…</p>\n<p>Working intensely on ourselves and sacrificing ourselves for our fellow human beings, we shall return victorious to the deep bosom of Urania…</p>\n<p>We are living in this world for a reason, for something, for some special factor…</p>\n<p>Obviously, there is much in us that we must see, study and understand, if we truly yearn to know something about ourselves, about our own life…</p>\n<p>Tragic is the existence of one who dies without having known the reason for their life…</p>\n<p>Each of us must discover for themselves the meaning of their own life, that which keeps them imprisoned in the jail of pain…</p>\n<p>Evidently, there is in each of us something that embitters our life and against which we need to fight firmly…</p>\n<p>It is not indispensable that we continue in disgrace, it is imperative to reduce to cosmic dust that which makes us so weak and unhappy.</p>\n<p>It is useless to pride ourselves on titles, honours, diplomas, money, vain subjective rationalism, well-known virtues, etc., etc., etc.</p>\n<p>We must never forget that hypocrisy and the foolish vanities of the false personality make us clumsy, stale, backward, reactionary people, incapable of seeing what is new…</p>\n<p>Death has many meanings, both positive and negative.</p>\n<p>Let us consider that magnificent observation of the “Great KABIR Jesus the Christ”. “Let the dead bury their dead”. Many people, although alive, are in fact dead to all possible work on themselves and therefore, to any intimate transformation.</p>\n<p>They are people bottled up in their dogmas and beliefs; people petrified in the memories of many yesterdays; individuals full of ancestral prejudices; people enslaved to what others will say, frighteningly lukewarm, indifferent, sometimes “know-it-alls” convinced that they are in the truth because they were told so, etc., etc., etc.</p>\n<p>These people do not want to understand that this world is a “Psychological Gymnasium” through which it would be possible to annihilate that secret ugliness that we all carry within…</p>\n<p>If these poor people understood the lamentable state they are in, they would tremble with horror…</p>\n<p>However, such people always think the best of themselves; they boast of their virtues, they feel perfect, kind, helpful, noble, charitable, intelligent, dutiful, etc.</p>\n<p>Practical life as a school is formidable, but to take it as an end in itself is manifestly absurd.</p>\n<p>Those who take life in itself, as it is lived daily, have not understood the need to work on themselves to achieve a “Radical Transformation”.</p>\n<p>Unfortunately, people live mechanically, they have never heard anything about inner work…</p>\n<p>Change is necessary, but people do not know how to change; they suffer a lot and do not even know why they suffer…</p>\n<p>Having money is not everything. The life of many rich people is often truly tragic…</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
