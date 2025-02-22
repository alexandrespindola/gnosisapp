import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Estimat Ego",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. L'Estimat Ego",
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
    "set:html": "<p>Com que superior i inferior són dues seccions d’una mateixa cosa, no està de més establir el següent corol·lari: “JO SUPERIOR, JO INFERIOR” són dos aspectes del mateix EGO tenebrós i pluralitzat.</p>\n<p>L’anomenat “JO DIVÍ” o “JO SUPERIOR”, “ALTER EGO” o quelcom per l’estil, és certament una argúcia del “MI MATEIX”, una forma d’AUTOENGANY.</p>\n<p>Quan el JO vol continuar aquí i a l’altra vida, s’Auto-Enganya amb el fals concepte d’un JO Diví Immortal…</p>\n<p>Cap de nosaltres té un “Jo” veritable, permanent, immutable, etern, inefable, etc., etc., etc.</p>\n<p>Cap de nosaltres té en veritat una veritable i autèntica Unitat d’Ésser; desafortunadament ni tan sols posseïm una legítima individualitat.</p>\n<p>L’Ego encara que continua més enllà del sepulcre, té no obstant això un principi i una fi.</p>\n<p>L’Ego, el JO, mai és quelcom individual, unitari, unitotal. Òbviament el JO és “JOES”.</p>\n<p>Al Tibet Oriental als “JOES” se’ls denominen “AGREGATS PSÍQUICS” o simplement “Valors” siguin aquests últims positius o negatius.</p>\n<p>Si pensem en cada “Jo” com una persona diferent, podem asseverar en forma emfàtica el següent: “Dins de cada persona que viu al món, existeixen moltes persones”.</p>\n<p>Inqüestionablement dins de cada un de nosaltres viuen moltíssimes persones diferents, algunes millors, altres pitjors…</p>\n<p>Cada un d’aquests Joes, cada una d’aquestes persones lluita per la supremacia, vol ser exclusiva, controla el cervell intel·lectual o els centres emocional i motor cada vegada que pot, mentre un altre el desplaça…</p>\n<p>La Doctrina dels molts Joes va ser ensenyada al Tibet Oriental pels veritables Clarividents, pels autèntics Il·luminats…</p>\n<p>Cada un dels nostres defectes psicològics està personificat en tal o qual Jo. Com que tenim milers i fins i tot milions de defectes, ostensiblement viu molta gent en el nostre interior.</p>\n<p>En qüestions psicològiques hem pogut evidenciar clarament que els subjectes paranoics, egòlatres i mitòmans per res del món abandonarien el culte a l’estimat Ego.</p>\n<p>Inqüestionablement tals gents odien mortalment la doctrina dels molts “Joes”.</p>\n<p>Quan un de veritat vol conèixer-se a si mateix, ha d’auto-observar-se i tractar de conèixer els diferents “Joes” que estan ficats dins de la personalitat.</p>\n<p>Si algun dels nostres lectors no comprèn encara aquesta doctrina dels molts “Joes”, es deu exclusivament a la falta de pràctica en matèria d’Auto-Observació.</p>\n<p>A mesura que un practica l’Auto-Observació Interior, va descobrint per si mateix a moltes gents, a molts “Joes”, que viuen dins de la nostra pròpia personalitat.</p>\n<p>Els qui neguen la doctrina dels molts Joes, els qui adoren a un JO Diví, indubtablement mai s’han Auto-Observat seriosament. Parlant aquesta vegada en estil Socràtic direm que aquesta gent no només ignora sinó a més ignora que ignora.</p>\n<p>Certament mai podríem conèixer-nos a si mateixos, sense l’auto-observació seriosa i profunda.</p>\n<p>Mentre que un subjecte qualsevol segueixi considerant-se com a Un, és clar que qualsevol canvi interior serà quelcom més que impossible.</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
