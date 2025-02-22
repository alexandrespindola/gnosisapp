import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psychological Rebellion",
  "locale": "en",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Psychological Rebellion",
    "order": 3
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
    "set:html": "<p>It’s worth reminding our readers that there is a mathematical point within ourselves…</p>\n<p>Unquestionably, such a point is never found in the past, nor in the future…</p>\n<p>Whoever wants to discover this mysterious point must look for it here and now, within themselves, exactly at this moment, not a second ahead, not a second behind…</p>\n<p>The two sticks, Vertical and Horizontal, of the Holy Cross meet at this point…</p>\n<p>We find ourselves, then, from moment to moment, before two paths: the Horizontal and the Vertical…</p>\n<p>It is obvious that the Horizontal is very “corny”, “everyone’s doing it”, “everyone’s joining in”, “everyone’s on board”…</p>\n<p>It is evident that the Vertical is different; it is the path of intelligent rebels, of Revolutionaries…</p>\n<p>When one remembers oneself, when one works on oneself, when one does not identify with all the problems and sorrows of life, one is in fact going down the Vertical Path…</p>\n<p>Certainly, it is never an easy task to eliminate negative emotions; to lose all identification with our own train of life; problems of all kinds, business, debts, payment of bills, mortgages, telephone, water, electricity, etc., etc., etc.</p>\n<p>The unemployed, those who for one reason or another have lost their jobs, their work, evidently suffer from lack of money and to forget their case, not to worry, or identify with their own problem, is in fact frighteningly difficult.</p>\n<p>Those who suffer, those who cry, those who have been victims of some betrayal, of ill-treatment in life, of ingratitude, of slander or of some fraud, really forget themselves, their real intimate Being, they identify completely with their moral tragedy…</p>\n<p>Work on oneself is the fundamental characteristic of the Vertical Path. No one could tread the Path of the Great Rebellion if they never worked on themselves…</p>\n<p>The work we are referring to is of a Psychological type; it deals with a certain transformation of the present moment in which we find ourselves. We need to learn to live from moment to moment…</p>\n<p>For example, a person who is desperate because of some sentimental, economic or political problem has obviously forgotten themselves…</p>\n<p>Such a person, if they stop for a moment, if they observe the situation and try to remember themselves and then strive to understand the meaning of their attitude…</p>\n<p>If they reflect a little, if they think that everything passes; that life is illusory, fleeting and that death reduces all the vanities of the world to ashes…</p>\n<p>If they understand that their problem is ultimately nothing more than a “flash in the pan”, a will-o’-the-wisp that soon goes out, they will suddenly see with surprise that everything has changed…</p>\n<p>Transforming mechanical reactions is possible through logical confrontation and Intimate Self-Reflection of the Being…</p>\n<p>It is evident that people react mechanically to the various circumstances of life…</p>\n<p>Poor people! They always tend to become victims. When someone flatters them, they smile; when they humiliate them, they suffer. They insult if they are insulted; they wound if they are wounded; they are never free; their fellow human beings have the power to take them from joy to sadness, from hope to despair.</p>\n<p>Each of those people who go down the Horizontal Path is like a musical instrument, where each of their fellow human beings plays what they please…</p>\n<p>Whoever learns to transform mechanical relationships, in fact gets on the “Vertical Path”.</p>\n<p>This represents a fundamental change in the “Level of Being”, an extraordinary result of “Psychological Rebellion”.</p>"
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
const url = "src/content/docs/en/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/en/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
