import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Acusar-se a Un Mateix",
  "locale": "ca",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Acusar-se a Un Mateix",
    "order": 5
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
    "set:html": "<p>L’Essència que cadascú de nosaltres porta al seu interior, ve de dalt, del Cel, de les estrelles…</p>\n<p>Inqüestionablement l’Essència meravellosa prové de la nota “LA” (La Via Làctia, la Galàxia en què vivim)</p>\n<p>Preciosa l’Essència passa a través de la nota “SOL” (El Sol) i després de la nota “FA” (La Zona Planetària) entra en aquest món i penetra en el nostre propi interior.</p>\n<p>Els nostres pares van crear el cos apropiat per a la recepció d’aquesta Essència que ve de les Estrelles…</p>\n<p>Treballant intensament sobre nosaltres mateixos i sacrificant-nos pels nostres semblants, tornarem victoriosos al si profund d’Urània…</p>\n<p>Nosaltres estem vivint en aquest món per algun motiu, per a alguna cosa, per algun factor especial…</p>\n<p>Òbviament en nosaltres hi ha molt que hem de veure, estudiar i comprendre, si és que en realitat anhelem saber alguna cosa sobre nosaltres mateixos, sobre la nostra pròpia vida…</p>\n<p>Tràgica és l’existència d’aquell que mor sense haver conegut el motiu de la seva vida…</p>\n<p>Cadascú de nosaltres ha de descobrir per si mateix el sentit de la seva pròpia vida, allò que el manté presoner a la presó del dolor…</p>\n<p>Ostensiblement hi ha en cadascú de nosaltres alguna cosa que ens amarga la vida i contra la qual necessitem lluitar fermament…</p>\n<p>No és indispensable que continuem en desgràcia, és impostergable reduir a polseguera còsmica això que ens fa tan febles i infeliços.</p>\n<p>De res serveix engreir-nos amb títols, honors, diplomes, diners, vano racionalisme subjectiu, conegudes virtuts, etc., etc., etc.</p>\n<p>No hem d’oblidar mai que la hipocresia i les ximples vanitats de la falsa personalitat, fan de nosaltres gent ximple, rància, retardatària, reaccionària, incapaç per veure el nou…</p>\n<p>La mort té molts significats tant positius com negatius.</p>\n<p>Considerem aquella magnífica observació del “Gran KABIR Jesús el Crist”. “Que els morts sepultin els seus morts”. Molta gent encara que viu està de fet morta per a tot possible treball sobre si mateixa i per tant, per a qualsevol transformació íntima.</p>\n<p>Són persones embotellades entre els seus dogmes i creences; gent petrificada en els records de molts ahirs; individus plens de prejudicis ancestrals; persones esclaves del que diran, espantosament tèbies, indiferents, a vegades “sabiondes” convençudes d’estar en la veritat perquè així els ho van dir, etc., etc., etc.</p>\n<p>No volen aquesta gent entendre que aquest món és un “Gimnàs Psicològic” mitjançant el qual seria possible aniquilar aquesta lletjor secreta que tots portem a dins…</p>\n<p>Si aquesta pobre gent comprengués l’estat tan lamentable en què es troben, tremolarien d’horror…</p>\n<p>Però, aquestes persones pensen sempre de si mateixes el millor; es vanten de les seves virtuts, se senten perfectes, bondadoses, servicials, nobles, caritatives, intel·ligents, complidores dels seus deures, etc.</p>\n<p>La vida pràctica com a escola és formidable però prendre-la com una finalitat en si mateixa, és manifestament absurd.</p>\n<p>Els qui prenen la vida en si mateixa, tal com es viu diàriament, no han comprès la necessitat de treballar sobre si mateixos per aconseguir una “Transformació Radical”.</p>\n<p>Desgraciadament la gent viu mecànicament, mai han sentit dir res sobre el treball interior…</p>\n<p>Canviar és necessari però la gent no sap com canviar; pateixen molt i ni tan sols saben perquè pateixen…</p>\n<p>Tenir diners no ho és tot. La vida de moltes persones riques sol ser veritablement tràgica…</p>"
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
const url = "src/content/docs/ca/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ca/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
