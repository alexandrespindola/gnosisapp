import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Der innere Zustand",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Der innere Zustand",
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
    "set:html": "<p>Innere Zustände korrekt mit äußeren Ereignissen zu verbinden, bedeutet, intelligent zu leben…</p>\n<p>Jedes intelligent erlebte Ereignis erfordert seinen entsprechenden spezifischen inneren Zustand…</p>\n<p>Doch leider denken die Menschen, wenn sie ihr Leben Revue passieren lassen, dass dieses an sich ausschließlich aus äußeren Ereignissen besteht…</p>\n<p>Arme Menschen! Sie denken, dass ihr Leben besser verlaufen wäre, wenn dieses oder jenes Ereignis nicht geschehen wäre…</p>\n<p>Sie vermuten, dass das Glück an ihnen vorbeigezogen ist und sie die Chance verpasst haben, glücklich zu sein…</p>\n<p>Sie beklagen das Verlorene, beweinen das Verachtete, jammern in Erinnerung an alte Stolpersteine und Unglücke…</p>\n<p>Die Menschen wollen nicht erkennen, dass vegetieren nicht leben bedeutet und dass die Fähigkeit, bewusst zu existieren, ausschließlich von der Qualität der inneren Zustände der Seele abhängt…</p>\n<p>Es spielt sicherlich keine Rolle, wie schön die äußeren Ereignisse des Lebens sind, wenn wir uns in solchen Momenten nicht im entsprechenden inneren Zustand befinden, können uns die besten Ereignisse eintönig, lästig oder einfach nur langweilig erscheinen…</p>\n<p>Jemand erwartet sehnsüchtig die Hochzeitsfeier, es ist ein Ereignis, aber es könnte passieren, dass man im entscheidenden Moment des Ereignisses so besorgt ist, dass man daran keinerlei Freude empfindet und alles so trocken und kalt wie ein Protokoll wird…</p>\n<p>Die Erfahrung hat uns gelehrt, dass nicht alle Menschen, die an einem Bankett oder einem Ball teilnehmen, es wirklich genießen…</p>\n<p>Bei den besten Festen fehlt nie ein Langweiler, und die köstlichsten Stücke erfreuen die einen und bringen die anderen zum Weinen…</p>\n<p>Sehr selten sind die Menschen, die das äußere Ereignis vertraulich mit dem passenden inneren Zustand verbinden können…</p>\n<p>Es ist bedauerlich, dass die Menschen nicht bewusst leben können: Sie weinen, wenn sie lachen sollten, und lachen, wenn sie weinen sollten…</p>\n<p>Kontrolle ist anders: Der Weise mag fröhlich sein, aber niemals von wahnsinnigem Wahnsinn erfüllt; traurig, aber niemals verzweifelt und niedergeschlagen… gelassen inmitten von Gewalt; enthaltsam in der Orgie; keusch inmitten der Lust usw.</p>\n<p>Melancholische und pessimistische Menschen denken das Schlimmste vom Leben und wollen ehrlich gesagt nicht leben…</p>\n<p>Wir sehen jeden Tag Menschen, die nicht nur unglücklich sind, sondern – und was noch schlimmer ist – auch das Leben anderer verbittern…</p>\n<p>Solche Menschen würden sich nicht ändern, selbst wenn sie täglich von Fest zu Fest leben würden; die psychische Krankheit tragen sie in sich… solche Menschen haben definitiv perverse innere Zustände…</p>\n<p>Dennoch bezeichnen sich diese Subjekte selbst als gerecht, heilig, tugendhaft, edel, hilfsbereit, Märtyrer usw., usw., usw.</p>\n<p>Es sind Menschen, die sich selbst zu viel zumuten; Menschen, die sich selbst sehr lieben…</p>\n<p>Individuen, die sich selbst sehr bemitleiden und die immer nach Auswegen suchen, um sich ihren eigenen Verantwortlichkeiten zu entziehen…</p>\n<p>Solche Menschen sind an minderwertige Emotionen gewöhnt und es ist offensichtlich, dass sie aus diesem Grund täglich unmenschliche psychische Elemente erschaffen.</p>\n<p>Unglückliche Ereignisse, Schicksalsschläge, Elend, Schulden, Probleme usw. sind ausschließlich für jene Menschen reserviert, die nicht wissen, wie man lebt…</p>\n<p>Jeder kann sich eine reiche intellektuelle Kultur aneignen, aber nur sehr wenige Menschen haben gelernt, richtig zu leben…</p>\n<p>Wer die äußeren Ereignisse von den inneren Bewusstseinszuständen trennen will, beweist konkret seine Unfähigkeit, würdevoll zu existieren.</p>\n<p>Wer lernt, äußere Ereignisse und innere Zustände bewusst zu kombinieren, geht den Weg des Erfolgs…</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
