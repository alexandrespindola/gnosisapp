import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Esencia",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. La Esencia",
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
    "set:html": "<p>Lo que hace bello y adorable a todo niño recién nacido es su Esencia; ésta constituye en si misma su verdadera realidad…</p>\n<p>El normal crecimiento de la Esencia en toda criatura, ciertamente es muy residual, incipiente…</p>\n<p>El cuerpo humano crece y se desarrolla de acuerdo con as leyes biológicas de la especie, sin embargo tales posibilidades resultan por si mismas muy limitadas para la Esencia…</p>\n<p>Incuestionablemente la Esencia sólo puede crecer por si misma sin ayuda, en pequeñísimo grado…</p>\n<p>Hablando francamente y sin ambages diremos que el crecimiento espontáneo y natural de la Esencia, sólo es posible durante los primeros tres, cuatro y cinco años de edad, es decir, en la primera etapa de la vida…</p>\n<p>La gente piensa que el crecimiento y desarrollo de la Esencia se realiza siempre en forma continua, de acuerdo con la mecánica de la evolución, más el Gnosticismo Universal enseña claramente que esto no ocurre así…</p>\n<p>Con el fin de que la Esencia crezca mas, algo muy especial debe suceder, algo nuevo hay que realizar.</p>\n<p>Quiero referirme en forma enfática al trabajo sobre si mismo. El desarrollo de la Esencia únicamente es posible a base de trabajos conscientes y padecimientos voluntarios…</p>\n<p>Es necesario comprender que estos trabajos no se refieren a cuestiones de profesión, bancos, carpintería, albañilería, arreglo de líneas férreas o asuntos de oficina…</p>\n<p>Este trabajo es para toda persona que ha desarrollado la personalidad; se trata de algo Psicológico…</p>\n<p>Todos nosotros sabemos que tenemos dentro de si mismos eso que se llama EGO, YO, MI MISMO, SI MISMO…</p>\n<p>Desgraciadamente la Esencia se encuentra embotellada, enfrascada, entre el ECO y esto es lamentable.</p>\n<p>Disolver el YO Psicológico, desintegrar sus elementos indeseables, es urgente, inaplazable, impostergable… así es el sentido del trabajo sobre si mismo.</p>\n<p>Nunca podríamos libertar la Esencia sin desintegrar previamente el YO Psicológico…</p>\n<p>En la Esencia está la Religión, el BUDDHA, la Sabiduría, las partículas de dolor de nuestro Padre que esta en los Cielos y todos los datos que necesitamos para la AUTO-REALIZACION INTIMA DEL SER.</p>\n<p>Nadie podría aniquilar el YO Psicológico sin eliminar previamente los elementos inhumanos que llevamos dentro…</p>\n<p>Necesitamos reducir a cenizas la crueldad monstruosa de estos tiempos: la envidia que desgraciadamente ha venido a convertirse en el resorte secreto de la acción; la codicia insoportable que ha vuelto la vida tan amarga: la asqueante maledicencia; la calumnia que tantas tragedias origina; las borracheras; la inmunda lujuria que huele tan feo; etc., etc., etc.</p>\n<p>A medida que todas esas abominaciones se van reduciendo a polvareda cósmica, la Esencia además de emanciparse, crecerá y se desarrollará armoniosamente…</p>\n<p>Incuestionablemente cuando el YO Psicológico ha muerto, resplandece en nosotros la Esencia…</p>\n<p>La Esencia libre nos confiere belleza intima; de tal belleza emanan la felicidad perfecta y el verdadero Amor…</p>\n<p>La Esencia posee múltiples sentidos de perfección y extraordinarios poderes naturales…</p>\n<p>Cuando “Morimos en Si Mismos”, cuando disolvemos el YO Psicológico, gozamos de los preciosos sentidos y poderes de la Esencia…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
