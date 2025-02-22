import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "El Querido Ego",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. El Querido Ego",
    "order": 11
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
    "set:html": "<p>Como quiera que superior e inferior son dos secciones de una misma cosa, no está de más sentar el siguiente corolario: “YO SUPERIOR, YO INFERIOR” son dos aspectos del mismo EGO tenebroso y pluralizado.</p>\n<p>El denominado “YO DIVINO” o “YO SUPERIOR”, “ALTER EGO” o algo por el estilo, es ciertamente una triquiñuela del “MI MISMO”, una forma de AUTO-ENGAÑO.</p>\n<p>Cuando el YO quiere continuar aquí y en el mas allá, se Auto-Engaña con el falso concepto de un YO Divino Inmortal…</p>\n<p>Ninguno de nosotros tiene un “Yo” verdadero, permanente, inmutable, eterno, inefable, etc., etc., etc.</p>\n<p>Ninguno de nosotros tiene en verdad una verdadera y auténtica Unidad de Ser; desafortunadamente ni siquiera poseemos una legítima individualidad.</p>\n<p>El Ego aunque continúa más allá del sepulcro, tiene sin embargo un principio y un fin.</p>\n<p>El Ego, el YO, nunca es algo individual, unitario, unitotal. Obviamente el YO es “YOES”.</p>\n<p>En él Tibet Oriental a los “YOES” se les denominan “AGREGADOS PSIQUICOS” o simplemente “Valores” sean estos últimos positivos o negativos.</p>\n<p>Si pensamos en cada “Yo” como una persona diferente, podemos aseverar en forma enfática lo siguiente: “Dentro de cada persona que vive en el mundo, existen muchas personas”.</p>\n<p>Incuestionablemente dentro de cada uno de nosotros viven muchísimas personas diferentes, algunas mejores, otras peores…</p>\n<p>Cada uno de estos Yoes, cada una de estas personas lucha por la supremacía, quiere ser exclusiva, controla el cerebro intelectual o los centros emocional y motor cada vez que puede, mientras otro lo desplaza…</p>\n<p>La Doctrina de los muchos Yoes fue enseñada en el Tibet Oriental por los verdaderos Clarividentes, por los auténticos Iluminados…</p>\n<p>Cada uno de nuestros defectos psicológicos está personificado en tal o cual Yo. Como quiera que tenemos millares y hasta millones de defectos, ostensiblemente vive mucha gente en nuestro interior.</p>\n<p>En cuestiones psicológicas hemos podido evidenciar claramente que los sujetos paranoicos, ególatras y mitómanos por nada de la vida abandonarían el culto al querido Ego.</p>\n<p>Incuestionablemente tales gentes odian mortalmente la doctrina de los muchos “Yoes”.</p>\n<p>Cuando uno de verdad quiere conocerse a si mismo, debe auto-observarse y tratar de conocer los diferentes “Yoes” que están metidos dentro de la personalidad.</p>\n<p>Si alguno de nuestros lectores no comprende todavía esta doctrina de los muchos “Yoes”, se debe exclusivamente a la falta de práctica en materia de Auto-Observación.</p>\n<p>A medida que uno practica la Auto-Observación Interior, va descubriendo por si mismo a muchas gentes, a muchos “Yoes”, que viven dentro de nuestra propia personalidad.</p>\n<p>Quienes niegan la doctrina de los muchos Yoes, quienes adoran a un YO Divino, indubitablemente jamás se han Auto-Observado seriamente. Hablando esta vez en estilo Socrático diremos que esas gentes no sólo ignoran sino además ignoran que ignoran.</p>\n<p>Ciertamente jamás podríamos conocemos a si mismos, sin la auto-observación seria y profunda.</p>\n<p>En tanto un sujeto cualquiera siga considerándose cono Uno, es claro que cualquier cambio interior será algo mas que imposible.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
