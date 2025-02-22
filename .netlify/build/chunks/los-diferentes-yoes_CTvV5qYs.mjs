import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Los Diferentes Yoes",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Los Diferentes Yoes",
    "order": 10
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
    "set:html": "<p>El Mamífero Racional equivocadamente llamado hombre, realmente no posee una individualidad definida.</p>\n<p>Incuestionablemente esta falta de unidad Psicológica en el Humanoide, es la causa de tantas dificultades y amarguras.</p>\n<p>El cuerpo físico es una unidad completa y trabaja como un todo orgánico, a menos de estar enfermo.</p>\n<p>Empero, la vida interior del Humanoide en modo alguno es una unidad psicológica.</p>\n<p>Lo más grave de todo esto, a despecho de lo que digan las diversas escuelas de tipo Seudo-Esotérico y Seudo-Ocultista, es la ausencia de organización Psicológica en el fondo íntimo de cada sujeto.</p>\n<p>Ciertamente en tales condiciones, no existe trabajo armonioso como un todo, en la vida interior de las personas.</p>\n<p>El Humanoide, respecto de su estado interior, es una multiplicidad psicológica, una suma de “Yoes”.</p>\n<p>Los ignorantes ilustrados de esta época tenebrosa, le rinden culto al “YO”, lo endiosan, lo ponen en los altares, lo llaman “ALTER EGO”, “YO SUPERIOR”, “YO DIVINO”, etc., etc., etc.</p>\n<p>No quieren darse cuenta los “Sabihondos” de esta edad negra en que vivimos, que “Yo Superior” o “Yo Inferior”, son dos secciones del mismo Ego pluralizado…</p>\n<p>El Humanoide no tiene ciertamente un “YO Permanente” sino una multitud de diferentes “Yoes” Infrahumanos y absurdos.</p>\n<p>El pobre animal intelectual equivocadamente llamado hombre, es semejante a una casa en desorden dónde en vez de un amo, existen muchos criados que quieren siempre mandar y hacer lo que les viene en gana…</p>\n<p>El mayor error del Seudo-Esoterismo y Seudo-Ocultismo barato, es suponer que los otros poseen o que se tiene un “YO Permanente e Inmutable” sin principio y sin fin…</p>\n<p>Si esos que así piensan despertaran consciencia aunque fuese por un instante, podrían evidenciar claramente por si mismos, que el Humanoide racional nunca es el mismo por mucho tiempo…</p>\n<p>El mamífero intelectual desde el punto de vista psicológico, esta cambiando continuamente…</p>\n<p>Pensar que si una persona se llama Luis es siempre Luis, resulta algo así como una broma de muy mal gusto…</p>\n<p>Ese sujeto a quien se llama Luis tiene en si mismo otros “Yoes”, otros egos, que se expresan a través de su personalidad en diferentes momentos y aunque Luis no guste de la codicia, otro “Yo” en él —llamémosle Pepe— gusta de la codicia y así sucesivamente…</p>\n<p>Ninguna persona es la misma en forma continua, realmente no se necesita ser muy sabio como para darse cuenta cabal de los innumerables cambios y contradicciones de cada sujeto…</p>\n<p>Suponer que alguien posee un “Yo Permanente e Inmutable” equivale desde luego a un abuso para con el prójimo y para consigo mismo…</p>\n<p>Dentro de cada persona viven muchas personas, muchos “Yoes”, esto lo puede verificar por si mismo y en forma directa, cualquier persona despierta, consciente…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
