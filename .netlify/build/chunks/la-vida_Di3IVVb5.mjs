import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Vida",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. La Vida",
    "order": 6
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
    "set:html": "<p>En el terreno de la vida práctica descubrimos siempre contrastes que asombran. Gentes adineradas con magnífica residencia y muchas amistades, a veces sufren espantosamente. .. Humildes proletarios de pico y pala o personas de la clase media, suelen vivir a veces en completa felicidad.</p>\n<p>Muchos archimillonarios sufren de impotencia sexual y ricas matronas lloran amargamente la infidelidad del marido…</p>\n<p>Los ricos de la tierra parecen buitres entre jaulas de oro, por estos tiempos no pueden vivir sin “guarda-espaldas”…</p>\n<p>Los hombres de estado arrastran cadenas, nunca están libres, andan por doquiera rodeados de gente armada hasta los dientes…</p>\n<p>Estudiemos esta situación más detenidamente. Necesitamos saber que es la vida. Cada cual es Libre de opinar como quiera…</p>\n<p>Digan lo que digan ciertamente nadie sabe nada, la vida resulta un problema que ninguno entiende…</p>\n<p>Cuando las gentes desean contarnos gratuitamente la historia de su vida, citan acontecimientos, nombres y apellidos, fechas, etc., y sienten satisfacción al hacer sus relatos…</p>\n<p>Esas pobres gentes ignoran que sus relatos están incompletos porque eventos, nombres y fechas, es tan sólo el aspecto externo de la película, falta el aspecto interno…</p>\n<p>Es urgente conocer “estados de conciencia”, a cada evento le corresponde tal o cual estado anímico.</p>\n<p>Los estados son interiores y los eventos son exteriores, los acontecimientos externos no son todo…</p>\n<p>Entiéndase por estados interiores las buenas o malas disposiciones, las preocupaciones, la depresión, la superstición, el temor, la sospecha, la misericordia, la auto-consideración, la sobre-estimación de Si mismo; estados de sentirse feliz, estados de gozo, etc., etc., etc.</p>\n<p>Incuestionablemente los estados interiores pueden corresponderse exactamente con los acontecimientos exteriores o ser originados por éstos, o no tener relación alguna con los mismos…</p>\n<p>En todo caso estados y eventos son diferentes. No siempre los sucesos se corresponden exactamente con estados afines</p>\n<p>El estado interior de un evento agradable podría no corresponderse con el mismo. El estado interior de un evento desagradable podría no corresponderse con el mismo. Acontecimientos aguardados durante mucho tiempo, cuando vinieron sentimos que faltaba algo…</p>\n<p>Ciertamente faltaba el correspondiente estado Interior que debía combinarse con el acontecimiento exterior…</p>\n<p>Muchas veces el acontecimiento que no se esperaba viene a ser el que mejores momentos nos ha proporcionado…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
