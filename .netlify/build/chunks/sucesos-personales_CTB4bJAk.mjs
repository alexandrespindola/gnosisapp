import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Persönliche Ereignisse",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Persönliche Ereignisse",
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
    "set:html": "<p>Völlige, intime Selbstbeobachtung ist unerlässlich, wenn es darum geht, fehlerhafte psychologische Zustände zu entdecken.</p>\n<p>Zweifellos können falsche innere Zustände durch korrekte Vorgehensweisen korrigiert werden.</p>\n<p>Da das Innenleben der Magnet ist, der äußere Ereignisse anzieht, müssen wir mit größter, unaufschiebbarer Dringlichkeit falsche psychologische Zustände aus unserer Psyche entfernen.</p>\n<p>Falsche psychologische Zustände zu korrigieren, ist unerlässlich, wenn man die Natur bestimmter unerwünschter Ereignisse grundlegend verändern will.</p>\n<p>Unsere Beziehung zu bestimmten Ereignissen zu verändern, ist möglich, wenn wir in unserem Inneren gewisse absurde psychologische Zustände beseitigen.</p>\n<p>Destruktive äußere Situationen könnten durch die intelligente Korrektur falscher innerer Zustände harmlos und sogar konstruktiv werden.</p>\n<p>Man kann die Natur unangenehmer Ereignisse, die uns widerfahren, verändern, wenn man sich innerlich reinigt. Wer niemals die absurden psychologischen Zustände korrigiert und sich für sehr stark hält, wird zum Opfer der Umstände.</p>\n<p>Ordnung in unser unordentliches inneres Haus zu bringen, ist lebenswichtig, wenn man den Lauf einer unglücklichen Existenz verändern will.</p>\n<p>Die Leute beschweren sich über alles, leiden, weinen, protestieren, möchten ihr Leben verändern, dem Unglück entkommen, in dem sie sich befinden, aber leider arbeiten sie nicht an sich selbst.</p>\n<p>Die Leute wollen nicht erkennen, dass das Innenleben äußere Umstände anzieht und dass diese schmerzhaft sind, weil es absurde innere Zustände gibt.</p>\n<p>Das Äußere ist nur das Spiegelbild des Inneren; wer sich innerlich verändert, bewirkt eine neue Ordnung der Dinge.</p>\n<p>Äußere Ereignisse wären niemals so wichtig wie die Art und Weise, wie man auf sie reagiert.</p>\n<p>Bist du dem Beleidiger gegenüber gelassen geblieben? Hast du die unangenehmen Äußerungen deiner Mitmenschen freudig entgegengenommen?</p>\n<p>Wie hast du auf die Untreue des geliebten Menschen reagiert? Hast du dich vom Gift der Eifersucht mitreißen lassen? Hast du getötet? Bist du im Gefängnis?</p>\n<p>Die Krankenhäuser, die Friedhöfe, die Gefängnisse sind voll von aufrichtigen Irrenden, die absurd auf äußere Ereignisse reagiert haben.</p>\n<p>Die beste Waffe, die ein Mensch im Leben einsetzen kann, ist ein korrekter psychologischer Zustand.</p>\n<p>Man kann wilde Tiere entwaffnen und Verräter entlarven durch angemessene innere Zustände.</p>\n<p>Falsche innere Zustände machen uns zu wehrlosen Opfern der menschlichen Perversität.</p>\n<p>Lernt, den unangenehmsten Ereignissen des praktischen Lebens mit einer angemessenen inneren Haltung zu begegnen…</p>\n<p>Identifiziert euch nicht mit irgendeinem Ereignis; denkt daran, dass alles vorübergeht; lernt, das Leben wie einen Film zu sehen, und ihr werdet die Vorteile erhalten…</p>\n<p>Vergesst nicht, dass wertlose Ereignisse euch ins Unglück stürzen könnten, wenn ihr die falschen inneren Zustände nicht aus eurer Psyche entfernt.</p>\n<p>Jedes äußere Ereignis braucht zweifellos das passende Ticket, d.h. den präzisen psychologischen Zustand.</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
