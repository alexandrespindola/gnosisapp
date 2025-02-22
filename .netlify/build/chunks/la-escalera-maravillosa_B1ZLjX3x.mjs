import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Escalera Maravillosa",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. La Escalera Maravillosa",
    "order": 2
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
    "set:html": "<p>Tenemos que anhelar un cambio verdadero, salir de esta rutina aburridora, de esta vida meramente mecanicista, cansona…</p>\n<p>Lo que primero debemos comprender con entera claridad es que cada uno de nosotros ya sea burgués o proletario, acomodado o de la clase media, rico o miserable, se encuentra realmente en tal o cual Nivel de Ser…</p>\n<p>El Nivel de Ser del borracho es diferente al del abstemio y el de la prostituta muy distinto al de la doncella. Esto que estamos diciendo es irrefutable, irrebatible…</p>\n<p>Al llegar a esta parte de nuestro capítulo, nada perdemos con imaginamos una escalera que se extiende de abajo hacia arriba, verticalmente y con muchísimos escalones…</p>\n<p>Incuestionablemente en algún escalón de estos nos encontramos nosotros; escalones abajo habrá gentes peores que nosotros; escalones arriba se encontrarán personas mejores que nosotros…</p>\n<p>En esta Vertical extraordinaria, en esta escalera maravillosa, es claro que podemos encontrar todos los Niveles de Ser… cada persona es diferente y esto nadie puede refutarlo. ..</p>\n<p>Indubitablemente no estamos ahora hablando de caras feas o bonitas, ni tampoco se trata de cuestión de edades. Hay gentes jóvenes y viejas, ancianos que ya están para morir y niños recién nacidos…</p>\n<p>La cuestión del tiempo y de los años; eso de nacer, crecer, desarrollarse, casarse, reproducirse, envejecerse y morir, es exclusivo de la Horizontal…</p>\n<p>En la “Escalera Maravillosa”, en la Vertical el concepto tiempo no cabe. En los escalones de tal escala sólo podemos encontrar “Niveles de Ser”…</p>\n<p>La esperanza mecánica de la gente no sirve para nada; creen que con el tiempo las cosas serán mejores; así pensaban nuestros abuelos y bisabuelos; los hechos precisamente han venido a demostrar lo contrario…</p>\n<p>El “Nivel de Ser” es lo que cuenta y esto es Vertical; nos hallamos en un escalón pero podemos subir a otro escalón. ..</p>\n<p>La “Escalera Maravillosa” de la que estamos hablando y que se refiere a los distintos “Niveles de Ser”, ciertamente, nada tiene que ver con el tiempo lineal…</p>\n<p>Un “Nivel de Ser” más alto está inmediatamente por encima de nosotros de instante en instante…</p>\n<p>No está en ningún remoto futuro horizontal, sino aquí y ahora; dentro de nosotros mismos; en la Vertical…</p>\n<p>Es ostensible y cualquiera lo puede comprender, que las dos líneas —Horizontal y Vertical— se encuentran de momento en momento en nuestro interior Psicológico y forman Cruz…</p>\n<p>La personalidad se desarrolla y desenvuelve en la línea Horizontal de la Vida. Nace y muere dentro de su tiempo lineal; es perecedera; no existe ningún mañana para la personalidad del muerto; no es el Ser…</p>\n<p>Los Niveles del Ser; el Ser mismo, no es del tiempo, nada tiene que ver con la Línea Horizontal; se encuentra dentro de nosotros mismos. Ahora, en la Vertical…</p>\n<p>Resultaría manifiestamente absurdo buscar a nuestro propio Ser fuera de si mismos…</p>\n<p>No está de más sentar como corolario lo siguiente: Títulos, grados, ascensos, etc., en el mundo físico exterior, en modo alguno originarían exaltación auténtica, reevaluación del Ser, paso a un escalón superior en los “Niveles del Ser”…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
