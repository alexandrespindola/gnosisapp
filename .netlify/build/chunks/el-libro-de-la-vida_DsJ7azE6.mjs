import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "El Libro de la Vida",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "16. El Libro de la Vida",
    "order": 16
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
    "set:html": "<p>Una persona es lo que es su vida. Eso que continúa mas allá de la muerte, es la vida. Este es el significado del libro de la vida que se abre con la muerte.</p>\n<p>Mirada esta cuestión desde un punto de vista estrictamente psicológico, un día cualquiera de nuestra vida, es realmente una pequeña réplica de la totalidad de la vida.</p>\n<p>De todo esto podemos inferir lo siguiente: Si un hombre no trabaja sobre si mismo hoy, no cambiara nunca.</p>\n<p>Cuando se afirma que se quiere trabajar sobre si mismo, y no se trabaja hoy aplazando para mañana, tal afirmación será un simple proyecto y nada mas, porque en él hoy está la réplica de toda nuestra vida.</p>\n<p>Existe por ahí un dicho vulgar que dice: “No dejéis para mañana lo que se puede hacer hoy mismo”.</p>\n<p>Si un hombre dice: “Trabajaré sobre mí mismo, mañana”, nunca trabajará sobre si mismo, por que siempre habrá un mañana.</p>\n<p>Esto es muy similar a cierto aviso, anuncio o letrero que algunos comerciantes ponen en sus tiendas: “HOY NO FIO, MAÑANA SI”.</p>\n<p>Cuando algún necesitado llega a solicitar crédito, topa con el terrible aviso, y si vuelve al otro día, encuentra otra vez el desdichado anuncio o letrero.</p>\n<p>Esto es lo que se llama en sicología la “enfermedad del mañana”. Mientras un hombre diga “mañana”, nunca cambiará.</p>\n<p>Necesitamos con urgencia máxima, inaplazable, trabajar sobre si mismo hoy, no soñar perezosamente en un futuro o en una oportunidad extraordinaria.</p>\n<p>Esos que dicen: “Voy antes a hacer esto o aquello y luego trabajaré”. Jamás trabajarán sobre si mismos, esos son los moradores de la tierra mencionados en las Sagradas Escrituras.</p>\n<p>Conocí a un poderoso terrateniente que decía: “Necesito primero redondearme y luego trabajar sobre Mí Mismo”.</p>\n<p>Cuando enfermó de muerte le visité, entonces le hice la siguiente pregunta: “¿Todavía queréis redondearte?”</p>\n<p>“Lamento de verdad haber perdido el tiempo”, me respondió. Días después murió, después de haber reconocido su error.</p>\n<p>Aquel hombre tenia muchas tierras, pero quería adueñarse de las propiedades vecinas, “redondearse”, a fin de que su hacienda quedase exactamente limitada por cuatro caminos.</p>\n<p>“¡Basta a cada día su afán!”, dijo el Gran KABIR JESÚS. Auto-observarnos hoy mismo, en lo tocante al día siempre recurrente, miniatura de nuestra vida entera.</p>\n<p>Cuando un hombre comienza a trabajar sobre si mismo, hoy mismo cuando observa sus disgustos y penas, marcha por el camino del éxito.</p>\n<p>No sería posible eliminar lo que no conocemos. Debemos observar antes nuestros propios errores.</p>\n<p>Necesitamos no sólo conocer nuestro día, sino también la relación, con el mismo. Hay cierto día ordinario que cada persona experimenta directamente, excepto los sucesos insólitos, inusitados.</p>\n<p>Resulta interesante observar la recurrencia diaria, la repetición de palabras y acontecimientos, para cada persona, etc.</p>\n<p>Esa repetición o recurrencia de eventos y palabras, merece ser estudiada, nos conduce al auto-conocimiento.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/el-libro-de-la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-libro-de-la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-libro-de-la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
