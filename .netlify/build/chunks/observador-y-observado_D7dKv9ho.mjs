import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Observador y Observado",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "13. Observador y Observado",
    "order": 13
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
    "set:html": "<p>Es muy claro y no resulta difícil comprender, que cuando alguien empieza a observarse a si mismo seriamente desde el punto de vista que no es Uno sino Muchos, comienza realmente a trabajar sobre todo eso que carga dentro.</p>\n<p>Es óbice, obstáculo, tropiezo, para el trabajo de Auto-observación Intima, los siguientes defectos Psicológicos: Mitomanía, (Delirio de Grandeza, creerse un Dios) Egolatría, (Creencia en un YO Permanente; adoración a cualquier especie de Alter-Ego) Paranoia. (Sabiondez, Auto-suficiencia, engreimiento, creerse infalible, orgullo místico, persona que no sabe ver el punto de vista ajeno)</p>\n<p>Cuando se continúa con la convicción absurda que se es Uno, que se posee un Yo permanente, resulta algo mas que imposible el trabajo serio sobre si mismo.</p>\n<p>Quien siempre se cree Uno, nunca será capaz de separarse de sus propios elementos indeseables. Considerará a cada pensamiento, sentimiento, deseo, emoción, pasión, afecto, etc., etc., etc., como funcionalismos diferentes, inmodificables, de su propia naturaleza y hasta se justificará ante los demás diciendo que tales o cuales defectos personales son de carácter hereditario…</p>\n<p>Quien acepta la Doctrina de los Muchos Yoes, comprende a base de observación que cada deseo, pensamiento acción, pasión, etc., corresponde a este u otro Yo distinto, diferente…</p>\n<p>Cualquier atleta de la Auto-Observación intima, trabaja muy seriamente dentro de si mismo y se esfuerza por apartar de su Psiquis los diversos elementos indeseables que carga dentro…</p>\n<p>Si uno de verdad y muy sinceramente comienza a observarse internamente, resulta dividiéndose en dos: Observador y Observado.</p>\n<p>Si tal división no se produjera, es evidente que nunca daríamos un paso adelante en la Vía maravillosa del Auto-Conocimiento.</p>\n<p>¿Cómo podríamos observarnos a si mismos si cometemos el error de no querer dividirnos entre Observador y Observado?</p>\n<p>Si tal división no se produjera, es obvio que nunca daríamos un paso adelante en el camino del Auto-Conocimiento.</p>\n<p>Indubitablemente cuando esta división no se sucede continuamos identificados con todos los procesos del Yo Pluralizado…</p>\n<p>Quien se identifica con los diversos procesos del Yo Pluralizado, es siempre victima de las circunstancias.</p>\n<p>¿Cómo podría modificar circunstancias aquel que no se conoce a si mismo? ¿Cómo podría conocerse a si mismo quien nunca se ha observado internamente? ¿De qué manera podría alguien auto-observarse si no se divide previamente en Observador y Observado?</p>\n<p>Ahora bien, nadie puede empezar a cambiar radicalmente en tanto no sea capaz de decir: “Este deseo es un Yo animal que debo eliminar”; “este pensamiento egoísta es otro Yo que me atormenta y que necesito desintegrar”; “este sentimiento que hiere mi corazón es un Yo intruso que necesito reducir a polvareda cósmica”; etc., etc., etc.</p>\n<p>Naturalmente esto es imposible para quien nunca se ha dividido entre Observador y Observado.</p>\n<p>Quien toma todos sus procesos Psicológicos como funcionalismos de un Yo Único, Individual y Permanente, se encuentra tan identificado con todos sus errores, los tiene tan unidos a si mismo, que ha perdido por tal motivo la capacidad para separarlos de su Psiquis.</p>\n<p>Obviamente personas así jamás pueden cambiar radicalmente, son gentes condenadas al más rotundo fracaso.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/observador-y-observado.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/observador-y-observado.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/observador-y-observado.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
