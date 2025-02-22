import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "El Mundo de las Relaciones",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "23. El Mundo de las Relaciones",
    "order": 23
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
    "set:html": "<p>El mundo de relaciones tiene tres aspectos muy diferentes que en forma precisa necesitamos aclarar.</p>\n<p>Primero: Estamos relacionados con el cuerpo planetario. Es decir con el cuerpo físico.</p>\n<p>Segundo: Vivimos en el planeta Tierra y por secuencia lógica estamos relacionados con el mundo exterior y con las cuestiones que atañen a nosotros, familiares, negocios, dineros, cuestiones del oficio, profesión, política, etc., etc., etc.</p>\n<p>Tercero: La relación del hombre consigo mismo. Para la mayoría de las gentes este tipo de relación no tiene la menor importancia.</p>\n<p>Desafortunadamente a las gentes sólo les interesan los dos primeros tipos de relaciones, mirando con la más absoluta indiferencia el tercer tipo.</p>\n<p>Alimento, salud, dinero, negocios, constituyen realmente las principales preocupaciones del “Animal Intelectual” equivocadamente llamado “hombre”.</p>\n<p>Ahora bien: Resulta evidente que tanto el cuerpo físico como los asuntos del mundo son exteriores a nosotros mismos.</p>\n<p>El Cuerpo Planetario (cuerpo físico), a veces se encuentra enfermo, a veces sano y así sucesivamente.</p>\n<p>Creemos siempre tener algún conocimiento de nuestro cuerpo físico, más en realidad ni los mejores científicos del mundo saben mucho sobre el cuerpo de carne y hueso.</p>\n<p>No hay duda de que el cuerpo físico dada su tremenda y complicada organización, está ciertamente mucho más allá de nuestra comprensión.</p>\n<p>En lo que respecta al segundo tipo de relaciones, somos siempre víctimas de las circunstancias; es lamentable que todavía no hayamos aprendido a originar conscientemente las circunstancias.</p>\n<p>Son muchas las gentes incapaces de adaptarse a nada o a nadie o tener éxito verdadero en la vida.</p>\n<p>Al pensar en si mismos desde el ángulo del trabajo esotérico Gnóstico, se hace urgente averiguar con cual de estos tres tipos de relaciones estamos en falta.</p>\n<p>Puede suceder el caso concreto de que estemos equivocadamente relacionados con el cuerpo físico y a consecuencia de ello estemos enfermos.</p>\n<p>Puede suceder que estemos mal relacionados con el mundo exterior y como resultado tengamos conflictos, problemas económicos y sociales, etc., etc., etc.</p>\n<p>Puede que estemos mal relacionados consigo mismos y que secuencialmente suframos mucho por falta, de iluminación interior.</p>\n<p>Obviamente si la lámpara de nuestra recámara no se encuentra conectada a la instalación eléctrica, nuestro aposento estará en tinieblas.</p>\n<p>Quienes sufren por falta de iluminación interior, deben conectar su mente con los Centros Superiores de su Ser.</p>\n<p>Incuestionablemente necesitamos establecer correctas relaciones no solo con nuestro Cuerpo Planetario (cuerpo físico) y con el mundo exterior, sino también con cada una de las partes de nuestro propio Ser.</p>\n<p>Los enfermos pesimistas cansados de tantos médicos y medicinas, ya no desean curarse y los pacientes optimistas luchan por vivir.</p>\n<p>En el Casino de Montecarlo muchos millonarios que perdieron su fortuna en el juego, se suicidaron. Millones de madres pobres trabajan para sostener a sus hijos.</p>\n<p>Son incontables los aspirantes deprimidos que por falta de poderes psíquicos y de iluminación intima, han renunciado al trabajo esotérico sobre si mismos. Pocos son los que saben aprovechar las adversidades.</p>\n<p>En tiempos de rigurosa tentación, abatimiento y desolación, uno debe apelar a la íntima recordación de si mismo.</p>\n<p>En el fondo de cada uno de nos está la TONANZIN Azteca, la STELLA MARIS, la ISIS Egipcia, Dios Madre, aguardándonos para sanar nuestro adolorido corazón.</p>\n<p>Cuando uno mismo se da el choque del “Recuerdo de Si”, se produce realmente un cambio milagroso en todo él trabajo del cuerpo, de modo que las células reciben un alimento diferente.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/el-mundo-de-las-relaciones.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-mundo-de-las-relaciones.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-mundo-de-las-relaciones.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
