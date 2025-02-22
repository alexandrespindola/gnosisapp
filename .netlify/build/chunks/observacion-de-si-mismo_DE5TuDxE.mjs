import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Observación de Si Mismo",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "21. Observación de Si Mismo",
    "order": 21
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
    "set:html": "<p>La Auto-Observación íntima de si mismo es un medio práctico para lograr una transformación radical.</p>\n<p>Conocer y observar son diferentes. Muchos confunden la observación de si, con el conocer. Se conoce que estamos sentados en una silla en una sala, más esto no significa que estemos observando la silla.</p>\n<p>Conocemos que en un instante dado nos encontramos en un estado negativo, tal vez con algún problema o preocupados por este o aquel asunto o en estado de desasosiego o incertidumbre, etc., pero esto no significa que lo estemos observando.</p>\n<p>¿Siente usted antipatía por alguien? ¿Le cae mal cierta persona? ¿Por qué? Ud. dirá que conoce a esa persona… ¡Por favor!, Obsérvela, conocer nunca es observar; no confunda el conocer con el observar…</p>\n<p>La observación de si que es un ciento por ciento activa, es un medio de cambio de si, mientras el conocer, que es pasivo, no lo es.</p>\n<p>Ciertamente conocer no es un acto de atención. La atención dirigida hacia dentro de uno mismo, hacia lo que está sucediendo en nuestro interior, si es algo positivo, activo…</p>\n<p>En el caso de una persona a quien se tiene antipatía así porque si, porque nos viene en gana y muchas veces sin motivo alguno, uno advierte la multitud de pensamientos que se acumulan en la mente, el grupo de voces que hablan y gritan desordenadamente dentro de uno mismo, lo que están diciendo, las emociones desagradables que surgen en nuestro interior, el sabor desagradable que todo este deja en nuestra psiquis, etc., etc., etc.</p>\n<p>Obviamente en tal estado nos damos cuenta también de que interiormente estamos tratando muy mal a la persona a quien tenemos antipatía.</p>\n<p>Mas para ver todo esto se necesita incuestionablemente de una atención dirigida intencionalmente hacia adentro de si mismo; no de una atención pasiva.</p>\n<p>La atención dinámica proviene realmente del lado observante, mientras los pensamientos y las emociones pertenecen al lado observado.</p>\n<p>Todo esto nos hace comprender que el conocer es algo completamente pasivo y mecánico, en contraste evidente con la observación de si que es un acto consciente.</p>\n<p>No queremos con esto decir que no exista la observación mecánica de si, más tal tipo de observación nada tiene que ver con la auto-observación psicológica a que nos estamos refiriendo.</p>\n<p>Pensar y observar resultan también muy diferentes. Cualquier sujeto puede dañe el lujo de pensar sobre si mismo todo lo que quiera, pero esto no quiere decir que se este observando realmente.</p>\n<p>Necesitamos ver a los distintos “Yoes” en acción, descubrirlos en nuestra psiquis, comprender que dentro de cada uno de ellos existe un porcentaje de nuestra propia conciencia, arrepentirnos de haberlos creado, etc.</p>\n<p>Entonces exclamaremos. “¿Pero qué está haciendo este Yo?” “¿Qué está diciendo?” “¿Qué es lo que quiere?” “¿Por qué me atormenta con su lujuria?”, “¿Con su ira?”, etc., etc., etc.</p>\n<p>Entonces veremos dentro de si mismos, todo ese tren de pensamientos, emociones, deseos, pasiones, comedias privadas, dramas personales, elaboradas mentiras, discursos, excusas, morbosidades, lechos de placer, cuadros de lascivia, etc., etc., etc.</p>\n<p>Muchas veces antes de dormimos en el preciso instante de transición entre vigilia y sueño sentimos dentro de nuestra propia mente distintas voces que hablan entre si, son los distintos Yoes que deben romper en tales momentos toda conexión con los distintos centros de nuestra máquina orgánica a fin de sumergirse luego en el mundo molecular, en la “Quinta Dimensión”.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/observacion-de-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/observacion-de-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/observacion-de-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
