import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Acusarse a Si Mismo",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Acusarse a Si Mismo",
    "order": 5
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
    "set:html": "<p>La Esencia que cada uno de nosotros lleva en su Interior, viene de arriba, del Cielo, de las estrellas…</p>\n<p>Incuestionablemente la Esencia maravillosa proviene de la nota “LA” (La Vía Láctea, la Galaxia en que vivimos)</p>\n<p>Preciosa la Esencia pasa a través de la nota “SOL” (El Sol) y luego de la nota “FA” (La Zona Planetaria) entra en este mundo y penetra en nuestro propio interior.</p>\n<p>Nuestros padres crearon el cuerpo apropiado para la recepción de esta Esencia que viene de las Estrellas…</p>\n<p>Trabajando intensamente sobre nosotros mismos y sacrificándonos por nuestros semejantes, regresaremos victoriosos al seno profundo de Urania…</p>\n<p>Nosotros estamos viviendo en este mundo por algún motivo, para algo, por algún factor especial…</p>\n<p>Obviamente en nosotros hay mucho que debemos ver, estudiar y comprender, si es que en realidad anhelamos saber algo sobre nosotros mismos, sobre nuestra propia vida…</p>\n<p>Trágica es la existencia de aquel que muere sin haber conocido el motivo de su vida…</p>\n<p>Cada uno de nosotros debe descubrir por si mismo el sentido de su propia vida, aquello que lo mantiene prisionero en la cárcel del dolor…</p>\n<p>Ostensiblemente hay en cada uno de nosotros algo que nos amarga la vida y contra lo cual necesitamos luchar firmemente…</p>\n<p>No es indispensable que continuemos en desgracia, es impostergable reducir a polvareda cósmica eso que nos hace tan débiles e infelices.</p>\n<p>De nada sirve engreírnos con títulos, honores, diplomas, dinero, vano racionalismo subjetivo, consabidas virtudes, etc., etc., etc.</p>\n<p>No debemos olvidar jamás que la hipocresía y las tontas vanidades de la falsa personalidad, hacen de nosotros gentes torpes, rancias, retardatarias, reaccionarias, incapaces para ver lo nuevo…</p>\n<p>La muerte tiene muchos significados tanto positivos como negativos.</p>\n<p>Consideremos aquella magnifica observación del “Gran KABIR Jesús el Cristo”. “Que los muertos sepulten a sus muertos”. Muchas gentes aunque viven están de hecho muertas para todo posible trabajo sobre si mismas y por ende, para cualquier transformación íntima.</p>\n<p>Son personas embotelladas entre sus dogmas y creencias; gentes petrificadas en los recuerdos de muchos ayeres; individuos llenos de prejuicios ancestrales; personas esclavas del que dirán, espantosamente tibias, indiferentes, a veces “sabiondas” convencidas de estar en la verdad porque así se lo dijeron, etc., etc., etc.</p>\n<p>No quieren esas gentes entender que este mundo es un “Gimnasio Psicológico” mediante el cual seria posible aniquilar esa fealdad secreta que todos llevamos dentro…</p>\n<p>Si esas pobres gentes comprendieran el estado tan lamentable en que se encuentran, temblarían de horror…</p>\n<p>Empero, tales personas piensan siempre de si mismas lo mejor; se jactan de sus virtudes, se sienten perfectas, bondadosas, serviciales, nobles, caritativas, inteligentes, cumplidoras de sus deberes, etc.</p>\n<p>La vida práctica como escuela es formidable pero tomarla como un fin en si misma, es manifiestamente absurdo.</p>\n<p>Quienes toman la vida en si misma, tal como se vive diariamente, no han comprendido la necesidad de trabajar sobre si mismos para lograr una “Transformación Radical”.</p>\n<p>Desgraciadamente las gentes viven mecánicamente, nunca han oído decir algo sobre el trabajo interior…</p>\n<p>Cambiar es necesario pero las gentes no saben como cambiar; sufren mucho y ni siquiera saben porque sufren…</p>\n<p>Tener dinero no es todo. La vida de muchas personas ricas suele ser verdaderamente trágica…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
