import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "El Estado Interior",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. El Estado Interior",
    "order": 7
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
    "set:html": "<p>Combinar estados interiores con acontecimientos exteriores en forma correcta, es saber vivir inteligentemente…</p>\n<p>Cualquier evento inteligentemente vivenciado exige su correspondiente estado interior específico…</p>\n<p>Empero, desafortunadamente las gentes cuando revisan su vida, piensan que ésta en si misma está constituida exclusivamente por eventos exteriores…</p>\n<p>¡Pobres gentes! piensan que si tal o cual acontecimiento no les hubiese sucedido, su vida habría sido mejor…</p>\n<p>Suponen que la suerte les salió al encuentro y que perdieron la oportunidad de ser felices…</p>\n<p>Lamentan lo perdido, lloran lo que despreciaron, gimen recordando los viejos tropiezos y calamidades…</p>\n<p>No quieren darse cuenta las gentes que vegetar no es vivir y que la capacidad para existir conscientemente depende exclusivamente de la calidad de los estados interiores del Alma…</p>\n<p>No importa ciertamente cuan hermosos sean los acontecimientos externos de la vida, si no nos encontramos en tales momentos en el estado interior apropiado, los mejores eventos pueden parecernos monótonos, cansones o simplemente aburridores…</p>\n<p>Alguien aguarda con ansiedad la fiesta de bodas, es un acontecimiento, más podría suceder que se estuviese tan preocupado en el momento preciso del evento, que realmente no gustase en ello ningún deleite y que todo aquello se tornase tan árido y frío como un protocolo…</p>\n<p>La experiencia nos ha enseñado que no todas las personas que asisten a un banquete o a un baile, gozan de verdad…</p>\n<p>Nunca falta un aburrido en el mejor de los festejos y las piezas más deliciosas alegran a unos y hacen llorar a otros…</p>\n<p>Muy raras son las personas que saben combinar confidentemente el evento externo con el estado interno apropiado…</p>\n<p>Es lamentable que las gentes no sepan vivir conscientemente: lloran cuando deben reír y ríen cuando deben llorar…</p>\n<p>Control es diferente: El sabio puede estar alegre más nunca Jamás lleno de loco frenesí; Triste pero nunca desesperado y abatido… sereno en medio de la violencia; abstemio en la orgía; casto entre la lujuria, etc.</p>\n<p>Las personas melancólicas y pesimistas piensan de la vida lo peor y francamente no desean vivir…</p>\n<p>Todos los días vemos gentes que no solamente son infelices, sino que además —y lo que es peor—, hacen también amarga la vida de los demás…</p>\n<p>Gentes así no cambiarían ni viviendo diariamente de fiesta en fiesta; la enfermedad psicológica la llevan en su interior… tales personas poseen estados íntimos definitivamente perversos…</p>\n<p>Sin embargo esos sujetos se auto-califican como justos, santos, virtuosos, nobles, serviciales, mártires, etc., etc., etc.</p>\n<p>Son gentes que se auto-consideran demasiado; personas que se quieren mucho a si mismas…</p>\n<p>Individuos que se apiadan mucho de si mismos y que siempre buscan escapatorias para eludir sus propias responsabilidades…</p>\n<p>Personas así están acostumbradas a las emociones inferiores y es ostensible que por tal motivo crean diariamente elementos psíquicos infrahumanos.</p>\n<p>Los eventos desgraciados, reveses de fortuna, miseria, deudas, problemas, etc., son exclusividad de aquellas personas que no saben vivir…</p>\n<p>Cualquiera puede formarse una rica cultura intelectual, más son muy pocas las personas que han aprendido a vivir rectamente…</p>\n<p>Cuando uno quiere separar los eventos exteriores de los estados interiores de la conciencia, demuestra concretamente su incapacidad para existir dignamente.</p>\n<p>Quienes aprenden a combinar conscientemente eventos exteriores y estados interiores, marchan por el camino del éxito…</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
