import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Das Wesen",
  "locale": "de",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Das Wesen",
    "order": 4
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
    "set:html": "<p>Was jedes neugeborene Kind schön und liebenswert macht, ist seine Essenz; diese stellt an sich seine wahre Realität dar…</p>\n<p>Das normale Wachstum der Essenz in jedem Geschöpf ist sicherlich sehr gering, beginnend…</p>\n<p>Der menschliche Körper wächst und entwickelt sich gemäß den biologischen Gesetzen der Art, jedoch sind solche Möglichkeiten für die Essenz an sich sehr begrenzt…</p>\n<p>Zweifellos kann die Essenz nur von selbst, ohne Hilfe, in sehr geringem Maße wachsen…</p>\n<p>Offen und ohne Umschweife gesagt, ist das spontane und natürliche Wachstum der Essenz nur während der ersten drei, vier und fünf Lebensjahre möglich, das heißt, in der ersten Lebensphase…</p>\n<p>Die Leute denken, dass das Wachstum und die Entwicklung der Essenz immer kontinuierlich gemäß der Mechanik der Evolution stattfindet, aber der universelle Gnostizismus lehrt klar, dass dies nicht der Fall ist…</p>\n<p>Damit die Essenz mehr wächst, muss etwas Besonderes geschehen, etwas Neues muss getan werden.</p>\n<p>Ich möchte mich nachdrücklich auf die Arbeit an sich selbst beziehen. Die Entwicklung der Essenz ist nur durch bewusste Arbeit und freiwilliges Leiden möglich…</p>\n<p>Es ist notwendig zu verstehen, dass sich diese Arbeiten nicht auf Fragen des Berufs, der Banken, der Zimmerei, des Maurerhandwerks, der Reparatur von Eisenbahnlinien oder Büroangelegenheiten beziehen…</p>\n<p>Diese Arbeit ist für jede Person, die die Persönlichkeit entwickelt hat; es handelt sich um etwas Psychologisches…</p>\n<p>Wir alle wissen, dass wir in uns das haben, was man EGO, ICH, MICH SELBST nennt…</p>\n<p>Leider ist die Essenz zwischen dem EGO eingesperrt, eingeschlossen, und das ist bedauerlich.</p>\n<p>Das psychologische ICH aufzulösen, seine unerwünschten Elemente zu desintegrieren, ist dringend, unaufschiebbar, unabwendbar… das ist der Sinn der Arbeit an sich selbst.</p>\n<p>Wir könnten die Essenz niemals befreien, ohne zuvor das psychologische ICH zu desintegrieren…</p>\n<p>In der Essenz liegt die Religion, der BUDDHA, die Weisheit, die Schmerzpartikel unseres Vaters im Himmel und alle Daten, die wir für die INTIME SELBSTVERWIRKLICHUNG DES SEINS benötigen.</p>\n<p>Niemand könnte das psychologische ICH vernichten, ohne zuvor die unmenschlichen Elemente, die wir in uns tragen, zu beseitigen…</p>\n<p>Wir müssen die monströse Grausamkeit dieser Zeit zu Asche reduzieren: den Neid, der unglücklicherweise zur geheimen Triebfeder des Handelns geworden ist; die unerträgliche Gier, die das Leben so bitter gemacht hat: die widerliche Übelrede; die Verleumdung, die so viele Tragödien verursacht; die Trunkenheit; die unsaubere Lust, die so übel riecht; usw., usw., usw.</p>\n<p>In dem Maße, wie all diese Gräuel zu kosmischem Staub reduziert werden, wird die Essenz nicht nur emanzipiert, sondern auch harmonisch wachsen und sich entwickeln…</p>\n<p>Zweifellos, wenn das psychologische ICH gestorben ist, erstrahlt in uns die Essenz…</p>\n<p>Die freie Essenz verleiht uns innere Schönheit; aus dieser Schönheit entspringen vollkommenes Glück und wahre Liebe…</p>\n<p>Die Essenz besitzt vielfältige Sinne der Perfektion und außergewöhnliche natürliche Kräfte…</p>\n<p>Wenn wir “In uns selbst sterben”, wenn wir das psychologische ICH auflösen, genießen wir die kostbaren Sinne und Kräfte der Essenz…</p>"
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
const url = "src/content/docs/de/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/de/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
