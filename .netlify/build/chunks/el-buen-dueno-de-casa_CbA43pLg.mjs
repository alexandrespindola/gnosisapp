import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "El Buen Dueño de Casa",
  "locale": "es",
  "statusTranslation": "original",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "19. El Buen Dueño de Casa",
    "order": 19
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
    "set:html": "<p>Apartarse uno de los efectos desastrosos de la vida, en estos tiempos tenebrosos, ciertamente es muy difícil pero indispensable, de otro modo es devorado por la vida.</p>\n<p>Cualquier trabajo que uno haga sobre si mismo con el propósito de lograr un desarrollo anímico y espiritual, se relaciona siempre con el aislamiento muy bien entendido, pues bajo la influencia de la vida tal como siempre la vivimos, no es posible desarrollar otra cosa que la personalidad.</p>\n<p>En modo alguno intentamos oponernos al desarrollo de la personalidad, obviamente ésta es necesaria en la existencia, más ciertamente es algo meramente artificial, no es lo verdadero, lo real en nosotros.</p>\n<p>Si el pobre mamífero intelectual equivocadamente llamado hombre no se aísla, sino que se identifica con todos los sucesos de la vida práctica y derrocha sus fuerzas en emociones negativas y en auto-consideraciones personales y en vana palabrería insustancial de charla ambigua, nada edificante, ningún elemento real puede desarrollarse en él, fuera de lo que pertenece al mundo de la mecanicidad.</p>\n<p>Ciertamente quien quiera de verdad lograr en si el desarrollo de la Esencia, debe llegar a estar herméticamente cerrado. Esto se refiere a algo íntimo estrechamente relacionado con el silencio.</p>\n<p>La frase viene de los antiguos tiempos, cuando se enseñaba secretamente una Doctrina sobre el desarrollo interior del hombre vinculada con el nombre de Hermes.</p>\n<p>Si uno quiere que algo real crezca en su interioridad, es claro que debe evitar el escape de sus energías psíquicas.</p>\n<p>Cuando uno tiene escapes de energía y no está aislado en su intimidad, es incuestionable que no podrá lograr el desarrollo de algo real en su psiquis.</p>\n<p>La vida ordinaria común y corriente quiere devorarnos implacablemente; nosotros debemos luchar contra la vida diariamente, debemos aprender a nadar contra la corriente…</p>\n<p>Este trabajo va en contra de la vida, se trata de algo muy distinto a lo de todos los días y que sin embargo debemos practicar de instante en instante; quiero referirme a la Revolución de la Conciencia.</p>\n<p>Es evidente que si nuestra actitud hacia la vida diaria es fundamentalmente equivocada; si creemos que todo de marchamos bien, así por que si, vendrán los desengaños…</p>\n<p>Las gentes quieren que las cosas les salgan bien, “así porque si”, porque todo debe marchar de acuerdo con sus planes, más la cruda realidad es diferente, en tanto uno no cambie interiormente, gústele o no le guste será siempre victima, de las circunstancias.</p>\n<p>Se dice y se escribe sobre la vida, muchas estupideces sentimentales, más este Tratado de Sicología Revolucionaria es diferente.</p>\n<p>Esta Doctrina va al grano, a los hechos concretos, claros y definitivos; afirma enfáticamente que el “Animal Intelectual” equivocadamente llamado hombre, es un bípedo mecánico, inconsciente, dormido.</p>\n<p>“El Buen Dueño de Casa” jamás aceptaría la Psicología Revolucionaria; cumple con todos sus deberes como padre, esposo, etc., y por ello piensa de si mismo lo mejor, pero sólo sirve a los fines de la naturaleza y eso es todo.</p>\n<p>Por oposición diremos que también existe “El Buen dueño de Casa” que nada contra la corriente, que no quiere dejarse devorar por la vida; empero, estos sujetos son muy escasos en el mundo, no abundan nunca.</p>\n<p>Cuando uno piensa de acuerdo con las ideas de este Tratado de Psicología Revolucionaria, obtiene una correcta visión de la vida.</p>"
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
const url = "src/content/docs/tratado-de-psicologia-revolucionaria/el-buen-dueno-de-casa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-buen-dueno-de-casa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tratado-de-psicologia-revolucionaria/el-buen-dueno-de-casa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
