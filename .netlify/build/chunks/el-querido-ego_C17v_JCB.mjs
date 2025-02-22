import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Das geliebte Ego",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Das geliebte Ego",
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
    "set:html": "<p>Da oben und unten zwei Abschnitte derselben Sache sind, ist es nicht verkehrt, den folgenden Schluss zu ziehen: “OBERES ICH, UNTERES ICH” sind zwei Aspekte desselben dunklen und pluralisierten Egos.</p>\n<p>Das sogenannte “GÖTTLICHE ICH” oder “OBERE ICH”, “ALTER EGO” oder ähnliches, ist sicherlich ein Trick des “ICH SELBST”, eine Form der SELBSTTÄUSCHUNG.</p>\n<p>Wenn das ICH hier und im Jenseits fortbestehen will, täuscht es sich selbst mit dem falschen Konzept eines unsterblichen Göttlichen ICH…</p>\n<p>Keiner von uns hat ein wahres, permanentes, unveränderliches, ewiges, unsagbares usw., usw., usw. “Ich”.</p>\n<p>Keiner von uns besitzt wirklich eine wahre und authentische Einheit des Seins; leider besitzen wir nicht einmal eine legitime Individualität.</p>\n<p>Das Ego hat zwar ein Fortbestehen über das Grab hinaus, hat aber dennoch einen Anfang und ein Ende.</p>\n<p>Das Ego, das ICH, ist niemals etwas Individuelles, Einheitliches, Einheitstotales. Offensichtlich ist das ICH “ICHES”.</p>\n<p>Im Osten Tibets werden die “ICHES” als “PSYCHISCHE AGGREGATE” oder einfach als “Werte” bezeichnet, seien diese nun positiv oder negativ.</p>\n<p>Wenn wir jedes “Ich” als eine andere Person betrachten, können wir nachdrücklich Folgendes behaupten: “In jeder Person, die auf der Welt lebt, existieren viele Personen”.</p>\n<p>Unbestreitbar leben in jedem von uns unzählige verschiedene Personen, einige besser, andere schlechter…</p>\n<p>Jedes dieser Iches, jede dieser Personen kämpft um die Vorherrschaft, will exklusiv sein, kontrolliert das intellektuelle Gehirn oder die emotionalen und motorischen Zentren, wann immer es kann, während ein anderes es verdrängt…</p>\n<p>Die Lehre von den vielen Iches wurde im Osten Tibets von den wahren Hellsehern, von den authentischen Erleuchteten gelehrt…</p>\n<p>Jeder unserer psychologischen Defekte ist in dem einen oder anderen Ich personifiziert. Da wir Tausende und sogar Millionen von Defekten haben, leben offensichtlich viele Menschen in unserem Inneren.</p>\n<p>In psychologischen Fragen konnten wir deutlich feststellen, dass paranoide, egomanische und lügensüchtige Subjekte um nichts in der Welt den Kult des geliebten Egos aufgeben würden.</p>\n<p>Unbestreitbar hassen solche Leute die Lehre von den vielen “Iches” bis aufs Mark.</p>\n<p>Wenn man sich wirklich selbst erkennen will, muss man sich selbst beobachten und versuchen, die verschiedenen “Iches” kennenzulernen, die sich in der Persönlichkeit befinden.</p>\n<p>Wenn einer unserer Leser diese Lehre von den vielen “Iches” noch nicht versteht, liegt das ausschließlich am Mangel an Übung in der Selbstbeobachtung.</p>\n<p>Je mehr man die Innere Selbstbeobachtung praktiziert, desto mehr entdeckt man von selbst viele Menschen, viele “Iches”, die in unserer eigenen Persönlichkeit leben.</p>\n<p>Wer die Lehre von den vielen Iches leugnet, wer ein Göttliches ICH verehrt, hat sich zweifellos noch nie ernsthaft selbst beobachtet. Im sokratischen Stil gesprochen, würden wir sagen, dass diese Leute nicht nur ignorant sind, sondern auch ignorieren, dass sie ignorant sind.</p>\n<p>Wir könnten uns sicherlich niemals selbst erkennen, ohne die ernsthafte und tiefgründige Selbstbeobachtung.</p>\n<p>Solange ein beliebiges Subjekt sich weiterhin als Eines betrachtet, ist klar, dass jede innere Veränderung mehr als unmöglich sein wird.</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
