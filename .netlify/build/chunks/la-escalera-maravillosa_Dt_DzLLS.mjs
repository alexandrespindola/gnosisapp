import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "The Wonderful Staircase",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. The Wonderful Staircase",
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
    "set:html": "<p>We must yearn for real change, to escape this boring routine, this merely mechanistic, tiresome life…</p>\n<p>What we must first understand with complete clarity is that each of us, whether bourgeois or proletarian, well-off or middle class, rich or miserable, is actually at such and such a Level of Being…</p>\n<p>The Level of Being of the drunkard is different from that of the teetotaller, and that of the prostitute very different from that of the maiden. What we are saying is irrefutable, unanswerable…</p>\n<p>As we reach this part of our chapter, we lose nothing by imagining a staircase that extends from bottom to top, vertically and with many steps…</p>\n<p>Undoubtedly, we find ourselves on one of these steps; below us on the steps there will be people worse than us; above us on the steps there will be people better than us…</p>\n<p>In this extraordinary Vertical, on this wonderful staircase, it is clear that we can find all the Levels of Being… each person is different and no one can refute this…</p>\n<p>Undoubtedly, we are not now talking about ugly or beautiful faces, nor is it a question of age. There are young and old people, old people who are about to die and new-born babies…</p>\n<p>The question of time and years; that of being born, growing, developing, marrying, reproducing, ageing and dying, is exclusive to the Horizontal…</p>\n<p>On the “Wonderful Staircase”, in the Vertical, the concept of time does not fit. On the steps of such a scale we can only find “Levels of Being”…</p>\n<p>The mechanical hope of the people is useless; they believe that things will get better with time; that’s what our grandparents and great-grandparents thought; the facts have precisely come to prove the opposite…</p>\n<p>The “Level of Being” is what counts and this is Vertical; we are on one step but we can climb to another step…</p>\n<p>The “Wonderful Staircase” of which we are speaking and which refers to the different “Levels of Being”, certainly has nothing to do with linear time…</p>\n<p>A higher “Level of Being” is immediately above us from instant to instant…</p>\n<p>It is not in any remote horizontal future, but here and now; within ourselves; in the Vertical…</p>\n<p>It is ostensible and anyone can understand that the two lines —Horizontal and Vertical— meet from moment to moment within our Psychological interior and form a Cross…</p>\n<p>The personality develops and unfolds in the Horizontal line of Life. It is born and dies within its linear time; it is perishable; there is no tomorrow for the personality of the dead; it is not the Being…</p>\n<p>The Levels of Being; the Being itself, is not of time, has nothing to do with the Horizontal Line; it is found within ourselves. Now, in the Vertical…</p>\n<p>It would be manifestly absurd to look for our own Being outside of ourselves…</p>\n<p>It is worth setting down the following as a corollary: Titles, degrees, promotions, etc., in the external physical world, would in no way give rise to authentic exaltation, re-evaluation of the Being, passage to a higher step in the “Levels of Being”…</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
