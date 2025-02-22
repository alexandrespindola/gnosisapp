import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "El Trabajo Esotérico Gnóstico",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "31. El Trabajo Esotérico Gnóstico",
    "order": 31
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
    "set:html": "<p>Es urgente estudiar la Gnosis y utilizar las ideas prácticas que en esta obra damos para trabajar seriamente sobre si mismos.</p>\n<p>Sin embargo no podríamos trabajar sobre si mismos con la intención de disolver tal o cual “Yo” sin haberlo observado previamente.</p>\n<p>La observación de si mismo permite que penetre un rayo de luz en nuestro interior.</p>\n<p>Cualquier “Yo” se expresa en la cabeza de un modo, en el corazón de otro modo y en el sexo de otro modo.</p>\n<p>Necesitamos observar al “Yo” que en un momento dado hallamos atrapado, urge verlo en cada uno de estos tres centros de nuestro organismo.</p>\n<p>En relación con otras gentes si estamos alertas y vigilantes como el vigía en época de guerra, nos auto-descubrimos.</p>\n<p>¿Recuerda Ud. a qué hora le hirieron su vanidad? ¿Su orgullo? ¿Qué fue lo que más le contrarió en el día? ¿Por qué tuvo esa contrariedad? ¿Cuál su causa secreta? Estudie esto, observe su cabeza, corazón y sexo…</p>\n<p>La vida práctica es una escuela maravillosa; en la inter-relación podemos descubrir esos “Yoes” que en nuestro interior cargamos.</p>\n<p>Cualquier contrariedad, cualquier incidente, puede conducirnos mediante la auto-observación íntima, al descubrimiento de un “Yo”, ya sea éste de amor propio, envidia, celos, ira, codicia, sospecha, calumnia, lujuria, etc., etc., etc.</p>\n<p>Necesitamos conocemos a si mismos antes de poder conocer a los demás. Es urgente aprender a ver el punto de vista ajeno.</p>\n<p>Si nos ponemos en el lugar de los demás, descubrimos que los defectos psicológicos que a otros endilgamos, los tenemos muy sobrados en nuestro interior.</p>\n<p>Amar al prójimo es indispensable, mas uno no podría amar a otros si antes no aprende a ponerse en la posición de otra persona en el trabajo esotérico.</p>\n<p>La crueldad continuará existiendo sobre la faz de la tierra, en tanto no hayamos aprendido a ponernos en el lugar de otros.</p>\n<p>¿Mas si uno no tiene el valor de verse a si mismo, cómo podría colocarse en el lugar de otros?</p>\n<p>Por qué habríamos de ver exclusivamente la parte mala de otras personas?</p>\n<p>La antipatía mecánica hacia otra persona que por vez primera conocemos, indica que no sabemos ponernos en el lugar del prójimo, que no amamos al prójimo, que tenemos la conciencia demasiado dormida.</p>\n<p>¿Nos cae muy antipática determinada persona? ¿Por que motivo? ¿Tal vez bebe? Observémonos… ¿Estamos seguros de nuestra virtud? ¿Estamos seguros de no cargar en nuestro interior el “Yo” de la embriaguez?</p>\n<p>Mejor seria que al ver un borracho haciendo payasadas dijéramos: “Este soy yo, que payasadas estoy haciendo.</p>\n<p>Es usted una mujer honesta y virtuosa y por ello le cae mal cierta dama; siente antipatía por ella. ¿Por qué? ¿Se siente muy segura de si misma? ¿Cree usted que dentro de su interior no tiene el “Yo” de la lujuria? ¿Piensa que aquella dama desacreditada por sus escándalos y lascivias es perversa? ¿Está usted segura de que en su interior no existe la lascivia y perversidad que usted ve en esa mujer?</p>\n<p>Mejor sería que se auto-observase íntimamente y que en profunda meditación ocupase el lugar de aquella mujer a quien aborrece.</p>\n<p>Es urgente valorizar el trabajo esotérico Gnóstico, es indispensable comprenderlo y apreciarlo si es que en realidad anhelamos un cambio radical.</p>\n<p>Se hace indispensable saber amar a nuestros semejantes, estudiar la Gnosis y llevar esta enseñanza a todas las gentes, de lo contrario caeremos en el egoísmo.</p>\n<p>Si uno se dedica al trabajo esotérico sobre si mismo, pero no da la enseñanza a los demás, su progreso íntimo se torna muy difícil por falta de amor al prójimo.</p>\n<p>“El que da, recibe y mientras más de, mas recibirá, pero al que nada da hasta lo que tiene le será quitado”. Esa es la Ley.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/el-trabajo-esoterico-gnostico.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-trabajo-esoterico-gnostico.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-trabajo-esoterico-gnostico.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
