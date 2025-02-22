import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Charla",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "22. La Charla",
    "order": 22
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
    "set:html": "<p>Resulta urgente, inaplazable, impostergable, observar la charla interior y el lugar preciso de donde proviene.</p>\n<p>Incuestionablemente la charla interior equivocada es la “Causa Causorun” de muchos estados psíquicos inarmónicos y desagradables en el presente y también en el futuro.</p>\n<p>Obviamente esa vana palabrería insustancial de charla ambigua y en general toda plática perjudicial, dañina, absurda, manifiesta en el mundo exterior, tiene su origen en la conversación interior equivocada.</p>\n<p>Se sabe que existe en la Gnosis la practica esotérica del silencio interior; esto lo conocen nuestros discípulos de “Tercera Cámara”.</p>\n<p>No está de más decir con entera claridad que el silencio interior debe referirse específicamente a algo muy preciso y definido.</p>\n<p>Cuando el proceso del pensar se agota intencionalmente durante la meditación interior profunda, se logra el silencio interior; más no es esto lo que queremos explicar en el presente capítulo.</p>\n<p>“Vaciar la mente” o “ponerla en blanco” para lograr realmente el silencio interior, tampoco es lo que intentamos explicar ahora en estos párrafos.</p>\n<p>Practicar el silencio interior a que nos estamos refiriendo, tampoco significa impedir que algo penetre en la mente.</p>\n<p>Realmente estamos hablando ahora mismo de un tipo de silencio interior muy diferente. No se trata de algo vago general…</p>\n<p>Queremos practicar el silencio interior en relación con algo que ya esté en la mente, persona, suceso, asunto propio o ajeno, lo que nos contaron, lo que hizo fulano, etc., pero sin tocarlo con la lengua interior, sin discurso intimo…</p>\n<p>Aprender a callar no solamente con la lengua exterior, sino también, además, con la lengua secreta, interna, resulta extraordinario, maravilloso.</p>\n<p>Muchos callan exteriormente, mas con su lengua interior desollan vivo al prójimo. La charla interior venenosa y malévola, produce confusión interior.</p>\n<p>Si se observa la charla interior equivocada se verá que está hecha de verdades a medias, o de verdades que se relacionan entre si de un modo más o menos incorrecto, o algo que se agregó o se omitió.</p>\n<p>Desgraciadamente nuestra vida emocional se fundamenta exclusivamente en la “auto-simpatía”.</p>\n<p>Para colmo de tanta infamia sólo simpatizamos con nosotros mismos, con nuestro tan “querido Ego”, y sentimos antipatía y hasta odio con aquellos que no simpatizan con nosotros.</p>\n<p>Nos queremos demasiado a si mismos, somos narcisistas en un ciento por ciento, esto es irrefutable, irrebatible</p>\n<p>En tanto continuemos embotellados en la “auto-simpatía”, cualquier desarrollo del Ser, se hace algo más que imposible.</p>\n<p>Necesitamos aprender a ver el punto de vista ajeno. Es urgente saber ponernos en la posición de los otros.</p>\n<p>“Así que, todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos”. (Mateo: VII, 12)</p>\n<p>Lo que verdaderamente cuenta en estos estudios es la manera como los hombres se comportan interna e invisiblemente los unos con los otros.</p>\n<p>Desafortunadamente y aunque seamos muy corteses, hasta sinceros a veces, no hay duda de que invisible e internamente nos tratamos muy mal los unos a los otros.</p>\n<p>Gentes aparentemente muy bondadosas, arrastran diariamente a sus semejantes hacia la cueva secreta de si mismos, para hacer con éstos, todo lo que se les antoje. (Vejaciones, burla, escarnio, etc.)</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/la-charla.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-charla.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-charla.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
