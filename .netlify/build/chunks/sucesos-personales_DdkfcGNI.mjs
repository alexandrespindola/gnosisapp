import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Sucesos Personales",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Sucesos Personales",
    "order": 9
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
    "set:html": "<p>Plena auto-observación íntima del Mí Mismo, resulta inaplazable cuando se trata de descubrir estados psicológicos equivocados.</p>\n<p>Incuestionablemente los estados interiores equivocados pueden ser corregidos mediante procedimientos correctos.</p>\n<p>Como quiera que la vida interior es el imán que atrae los eventos exteriores, necesitamos con urgencia máxima inaplazable, eliminar de nuestra psiquis los estados psicológicos erróneos.</p>\n<p>Corregir estados psicológicos equivocados es indispensable cuando se quiera alterar fundamentalmente la naturaleza de ciertos eventos indeseables.</p>\n<p>Alterar nuestra relación con determinados eventos, es posible si eliminamos de nuestro interior ciertos estados psicológicos absurdos.</p>\n<p>Situaciones exteriores destructivas, podrían convertirse en inofensivas y hasta constructivas mediante la inteligente corrección de los estados interiores erróneos.</p>\n<p>Uno puede cambiar la naturaleza de los eventos desagradables que nos ocurren, cuando se purifica íntimamente. Quien jamás corrige los estados psicológicos absurdos, creyéndose muy fuerte se convierte en víctima de las circunstancias.</p>\n<p>Poner orden en nuestra desordenada casa interior es vital, cuando se desea cambiar el curso de una desgraciada existencia.</p>\n<p>Las gentes se quejan de todo, sufren, lloran, protestan, quisieran cambiar de vida, salir del infortunio en que se encuentran, desafortunadamente no trabajan sobre si mismas.</p>\n<p>No quieren darse cuenta las gentes que la vida interior atrae circunstancias exteriores y que si éstas son dolorosas se debe a los estados interiores absurdos.</p>\n<p>Lo exterior es tan sólo el reflejo de lo interior, quien cambia interiormente origina un nuevo orden de cosas.</p>\n<p>Los eventos exteriores jamás serian tan importantes, como el modo de reaccionar ante los mismos.</p>\n<p>¿Permanecisteis sereno ante el insultador? ¿Recibiste con agrado las manifestaciones desagradables de vuestros semejantes?</p>\n<p>¿De qué manera reaccionasteis ante la infidelidad del ser amado? ¿Te dejaste llevar por el veneno de los celos? ¿Mataste? ¿Estáis en la cárcel?</p>\n<p>Los hospitales, los cementerios o panteones, las cárceles, están llenos de sinceros equivocados que reaccionaron en forma absurda ante los eventos exteriores.</p>\n<p>La mejor arma que un hombre puede usar en la vida, es un estado Psicológico correcto.</p>\n<p>Uno puede desarmar fieras y desenmascarar traidores, mediante estados interiores apropiados.</p>\n<p>Los estados interiores equivocados nos convierten en víctimas indefensas de la perversidad humana.</p>\n<p>Aprended a enfrentaros ante los sucesos más desagradables de la vida práctica con una actitud interior apropiada…</p>\n<p>No os identifiquéis con ningún acontecimiento; recordad que todo pasa; aprended a ver la vida como una película y recibiréis los beneficios…</p>\n<p>No olvidéis que acontecimientos sin ningún valor podrían llevaros a la desgracia, si no elimináis de vuestra Psiquis los estados interiores equivocados.</p>\n<p>Cada evento exterior necesita, incuestionablemente del billete apropiado; es decir, del estado Psicológico preciso.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
