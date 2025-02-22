import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Das Leben",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Das Leben",
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
    "set:html": "<p>Im Bereich des praktischen Lebens entdecken wir immer wieder erstaunliche Gegensätze. Wohlhabende Menschen mit prächtigen Häusern und vielen Freunden leiden manchmal entsetzlich. .. Bescheidene Proletarier mit Spitzhacke und Schaufel oder Menschen der Mittelschicht leben manchmal in vollkommenem Glück.</p>\n<p>Viele Multimillionäre leiden unter sexueller Impotenz, und reiche Matronen beweinen bitterlich die Untreue ihres Mannes…</p>\n<p>Die Reichen der Erde scheinen Geier in goldenen Käfigen zu sein, heutzutage können sie nicht ohne “Leibwächter” leben…</p>\n<p>Staatsmänner schleppen Ketten mit sich herum, sie sind niemals frei, sie sind überall von bis an die Zähne bewaffneten Leuten umgeben…</p>\n<p>Untersuchen wir diese Situation genauer. Wir müssen wissen, was das Leben ist. Jeder kann seine Meinung frei äußern…</p>\n<p>Was auch immer die Leute sagen, sicherlich weiß niemand etwas, das Leben ist ein Problem, das niemand versteht…</p>\n<p>Wenn Leute uns unentgeltlich die Geschichte ihres Lebens erzählen wollen, nennen sie Ereignisse, Namen und Nachnamen, Daten usw. und empfinden Befriedigung, wenn sie ihre Geschichten erzählen…</p>\n<p>Diese armen Leute ignorieren, dass ihre Geschichten unvollständig sind, weil Ereignisse, Namen und Daten nur der äußere Aspekt des Films sind, der innere Aspekt fehlt…</p>\n<p>Es ist dringend notwendig, “Bewusstseinszustände” zu kennen, jedem Ereignis entspricht ein bestimmter seelischer Zustand.</p>\n<p>Die Zustände sind innerlich und die Ereignisse sind äußerlich, die äußeren Ereignisse sind nicht alles…</p>\n<p>Unter inneren Zuständen versteht man gute oder schlechte Verfassungen, Sorgen, Depressionen, Aberglauben, Furcht, Argwohn, Barmherzigkeit, Selbstbetrachtung, Selbstüberschätzung; Zustände des Glücklichseins, Zustände der Freude usw. usw. usw.</p>\n<p>Zweifellos können innere Zustände genau mit äußeren Ereignissen übereinstimmen oder von diesen verursacht werden oder in keinerlei Beziehung zu ihnen stehen…</p>\n<p>In jedem Fall sind Zustände und Ereignisse unterschiedlich. Nicht immer entsprechen die Ereignisse genau den entsprechenden Zuständen.</p>\n<p>Der innere Zustand eines angenehmen Ereignisses muss nicht mit diesem übereinstimmen. Der innere Zustand eines unangenehmen Ereignisses muss nicht mit diesem übereinstimmen. Ereignisse, auf die wir lange gewartet haben, bei deren Eintreten fühlten wir, dass etwas fehlte…</p>\n<p>Sicherlich fehlte der entsprechende innere Zustand, der mit dem äußeren Ereignis kombiniert werden sollte…</p>\n<p>Oft ist es das unerwartete Ereignis, das uns die besten Momente beschert hat…</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
