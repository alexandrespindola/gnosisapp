import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Criaturas Mecánicas",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "17. Criaturas Mecánicas",
    "order": 17
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
    "set:html": "<p>De ninguna manera podríamos negar la Ley de Recurrencia procesándose en cada momento de nuestra vida.</p>\n<p>Ciertamente en cada día de nuestra existencia, existe repetición de eventos, estados de conciencia, palabra, deseos, pensamientos, voliciones, etc.</p>\n<p>Es obvio que cuando uno no se auto-observa, no puede darse cuenta de esta incesante repetición diaria.</p>\n<p>Resulta evidente que quien no siente interés alguno por observarse a si mismo, tampoco desea trabajar para lograr una verdadera transformación radical.</p>\n<p>Para colmo de los colmos hay gentes que quieren transformarse sin trabajar sobre si mismos.</p>\n<p>No negamos el hecho de que cada cual tiene derecho a la real felicidad del espíritu, más también es cierto, que la felicidad sería algo más que imposible si no trabajamos sobre si mismos.</p>\n<p>Uno puede cambiar íntimamente, cuando de verdad consigue modificar sus reacciones ante los diversos hechos que le sobrevienen diariamente.</p>\n<p>Empero no podríamos modificar nuestra forma de reaccionar ante los hechos de la vida práctica, sino trabajáramos seriamente sobre si mismos.</p>\n<p>Necesitamos cambiar nuestra manera de pensar, ser menos negligentes, volvemos más serios y tomar la vida en forma diferente, en su sentido real y practico.</p>\n<p>Empero, si continuamos así tal como estamos, comportándonos en la misma forma todos los días, repitiendo los mismos errores, con la misma negligencia de siempre, cualquier posibilidad de cambio quedará de hecho eliminada.</p>\n<p>Si uno de verdad quiere llegar a conocerse a si mismo, debe empezar por observar su propia conducta, ante los sucesos de cualquier día de la vida.</p>\n<p>No queremos decir con esto que no deba uno observarse a si mismo diariamente, sólo queremos afirmar que se debe empezar por observar un primer día.</p>\n<p>En todo debe haber un comienzo, y empezar por observar nuestra conducta en cualquier día de nuestra vida, es un buen comienzo.</p>\n<p>Observar nuestras reacciones mecánicas ante todos esos pequeños detalles de alcoba, hogar, comedor, casa, calle, trabajo, etc., etc., etc., lo que uno dice, siente y piensa, es ciertamente lo más indicado.</p>\n<p>Lo importante es ver luego como o de que manera puede uno cambiar esas reacciones; empero, si creemos que somos buenas personas, que nunca nos comportamos en forma inconsciente y equivocada, nunca cambiaremos.</p>\n<p>Ante todo necesitamos comprender que somos personas-máquinas, simples marionetas controladas por agentes secretos, por Yoes ocultos.</p>\n<p>Dentro de nuestra persona viven muchas personas, nunca somos idénticos; a veces se manifiesta en nosotros una persona mezquina, otras veces una persona irritable, en cualquier otro instante una persona espléndida, benevolente, más tarde una persona escandalosa o calumniadora, después un santo, luego un embustero, etc.</p>\n<p>Tenemos gente de toda clase dentro de cada uno de nosotros, Yoes de toda especie. Nuestra personalidad no es mas que una marioneta, un muñeco parlante, algo mecánico.</p>\n<p>Empecemos por comportamos conscientemente durante una pequeña parte del día; necesitamos dejar de ser simples máquinas aunque sea durante por breves minutos diarios, esto influirá decisivamente sobre nuestra existencia.</p>\n<p>Cuando nos Auto-Observamos y no hacemos lo que tal o cual Yo quiere, es claro que empezamos a dejar de ser máquinas.</p>\n<p>Un sólo momento, en que se está bastante consciente, como para dejar de ser máquina, si se hace voluntariamente, suele modificar radicalmente muchas circunstancias desagradables.</p>\n<p>Desgraciadamente vivimos diariamente una vida mecanicista, rutinaria, absurda. Repetimos sucesos, nuestros hábitos son los mismos, nunca hemos querido modificarlos, son el carril mecánico por donde circula el tren de nuestra miserable existencia, empero, pensamos de nosotros lo mejor…</p>\n<p>Por donde quiera abundan los “MITOMANOS”, los que se creen Dioses; criaturas mecánicas, rutinarias, personajes del lodo de la tierra, míseros muñecos movidos por diversos Yoes; gentes así no trabajarán sobre si mismos…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/criaturas-mecanicas.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/criaturas-mecanicas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/criaturas-mecanicas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
