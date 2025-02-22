import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Rebeldía Psicológica",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Rebeldía Psicológica",
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
    "set:html": "<p>No está de más recordar a nuestros lectores, que existe un punto matemático dentro de nosotros mismos…</p>\n<p>Incuestionablemente tal punto, jamás se encuentra en el pasado, ni tampoco en el futuro…</p>\n<p>Quien quiera descubrir ese punto misterioso, debe buscarlo aquí y ahora, dentro de si mismo, exactamente en este instante, ni un segundo adelante, ni un segundo atrás…</p>\n<p>Los dos palos Vertical y Horizontal de la Santa Cruz, se encuentran, en este punto…</p>\n<p>Nos hallamos pues de instante en instante ante dos Caminos: el Horizontal y el Vertical…</p>\n<p>Es ostensible que el Horizontal es muy “cursi”, por él andan “Vicente y toda la gente”, “Villegas y todo el que llega”, “Don Raimundo y todo el mundo”…</p>\n<p>Es evidente que el Vertical es diferente; es el camino los rebeldes inteligentes, el de los Revolucionarios…</p>\n<p>Cuando uno se acuerda de si mismo, cuando trabaja sobre si mismo, cuando no se identifica con todos los problemas y penas de la vida, de hecho va por la Senda Vertical…</p>\n<p>Ciertamente jamás resulta tarea fácil eliminar las emociones negativas; perder toda identificación con nuestro propio tren de vida; problemas de toda índole, negocios, deudas, pago de letras, hipotecas, teléfono, agua, luz, etc., etc., etc.</p>\n<p>Los desocupados, aquellos que por tal o cual motivo han perdido el empleo, el trabajo, evidentemente sufren por falta de dinero y olvidar su caso, no preocuparse, ni identificarse con su propio problema, resulta de hecho espantosamente difícil.</p>\n<p>Quienes sufren, quienes lloran, aquellos que han sido víctimas de alguna traición, de un mal pago en la vida, de una Ingratitud, de una calumnia o de algún fraude, realmente se olvidan de si mismos, de su real Ser íntimo, se identifican completamente con su tragedia moral…</p>\n<p>El trabajo sobre si mismo es la característica fundamental del Camino Vertical. Nadie podría hollar la Senda de la Gran Rebeldía, si jamás trabajase sobre si mismo…</p>\n<p>El trabajo al que nos estamos refiriendo es de tipo Psicológico; se ocupa de cierta transformación del momento presente en que nos encontramos. Necesitamos aprender a vivir de instante en instante…</p>\n<p>Por ejemplo, una persona que se encuentra desesperada por algún problema sentimental, económico o político obviamente se ha olvidado de si misma…</p>\n<p>Tal persona si se detiene un instante, si observa la situación y trata de recordarse a si mismo y luego se esfuerza en comprender el sentido de su actitud…</p>\n<p>Si reflexiona un poco, si piensa en que todo pasa; en que la vida es ilusoria, fugaz y en que la muerte reduce a cenizas todas las vanidades del mundo…</p>\n<p>Si comprende que su problema en el fondo no es más que una “llamarada de petate”, un fuego fatuo que pronto se apaga, vera de pronto con sorpresa que todo ha cambiado. ..</p>\n<p>Transformar reacciones mecánicas es posible mediante la confrontación lógica y la Auto- Reflexión Intima del Ser…</p>\n<p>Es evidente que las gentes reaccionan mecánicamente ante las diversas circunstancias de la vida…</p>\n<p>¡Pobres gentes!, Suelen siempre convertirse en víctimas. Cuando alguien les adula sonríen; cuando les humillan, sufren. Insultan si se les insulta; hieren si se les hiere; nunca son libres; sus semejantes tienen poder para llevarles de la alegría a la tristeza, de la esperanza a la desesperación.</p>\n<p>Cada persona de esas que van por el Camino Horizontal, se parece a un instrumento musical, donde cada uno de sus semejantes toca lo que le viene en gana…</p>\n<p>Quien aprende a transformar las relaciones mecánicas, de hecho se mete por el “Camino Vertical”.</p>\n<p>Esto representa un cambio fundamental en el “Nivel de Ser” resultado extraordinario de la “Rebeldía Psicológica”.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
