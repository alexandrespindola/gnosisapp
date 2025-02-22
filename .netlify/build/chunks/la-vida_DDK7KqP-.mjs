import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "An Saol",
  "locale": "ga",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. An Saol",
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
    "set:html": "<p>I réimse na beatha praiticiúla, faighimid amach i gcónaí codarsnachtaí a chuireann iontas orainn. Daoine saibhre le cónaithe mhaorga agus a lán cairde, uaireanta bíonn siad ag fulaingt go scanrúil. .. Is minic a bhíonn proletarians humble de phioc agus sluasaid nó daoine den lucht oibre lárnacha, ina gcónaí i sonas iomlán.</p>\n<p>Tá go leor archimillionaires ag fulaingt ó neamhábaltacht ghnéasach agus tá máithreacha saibhre ag caoineadh go searbh faoi neamhchreideamh a bhfear céile…</p>\n<p>Is cosúil go bhfuil na saibhir ar an talamh cosúil le vultures i measc cages óir, na laethanta seo ní féidir leo maireachtáil gan “coimircithe”…</p>\n<p>Tarraingíonn fir stáit slabhraí, níl siad saor riamh, siúlann siad timpeall timpeallaithe ag daoine armtha go dtí na fiacla…</p>\n<p>Déanaimis staidéar ar an staid seo níos mine. Ní mór dúinn fios a bheith againn cad é an saol. Tá gach duine saor chun tuairim a nochtadh de réir mar is mian leo…</p>\n<p>Cibé rud a deir siad, níl a fhios ag aon duine aon rud go cinnte, is fadhb é an saol nach dtuigeann aon duine…</p>\n<p>Nuair a bhíonn daoine ag iarraidh scéal a saoil a insint dúinn saor in aisce, luann siad imeachtaí, ainmneacha agus sloinnte, dátaí, etc., agus bíonn siad sásta lena gcuid scéalta a insint…</p>\n<p>Níl a fhios ag na boicht sin go bhfuil a gcuid scéalta neamhiomlán mar nach bhfuil in imeachtaí, ainmneacha agus dátaí ach gné sheachtrach an scannáin, tá an ghné inmheánach in easnamh…</p>\n<p>Tá sé práinneach “stáit Chonaic” a bheith ar eolas againn, freagraíonn staid mheabhrach áirithe do gach imeacht.</p>\n<p>Tá na stáit inmheánach agus tá na himeachtaí seachtrach, ní hé gach rud atá sna himeachtaí seachtracha…</p>\n<p>Tuigtear de réir stáit inmheánacha na droch-shocrúcháin nó na dea-shocrúcháin, na himní, an dúlagar, an chreideamh, an eagla, an amhras, an trócaire, an féinmheas, an ró-mheastachán ort féin; stáit de bheith sásta, stáit de lúcháir, etc., etc., etc.</p>\n<p>Gan amhras, is féidir leis na stáit inmheánacha freagairt go díreach do na himeachtaí seachtracha nó a bheith de bhunadh na n-imeachtaí seachtracha, nó gan aon bhaint a bheith acu leo…</p>\n<p>Ar aon nós, tá stáit agus imeachtaí difriúil. Ní fhreagraíonn na himeachtaí go díreach i gcónaí do stáit ghaolmhara.</p>\n<p>Ní fhéadfadh staid inmheánach imeachta taitneamhaí freagairt dó. Ní fhéadfadh staid inmheánach imeachta míthaitneamhaí freagairt dó. Imeachtaí a bhí ag súil leo le fada an lá, nuair a tháinig siad, bhraith muid go raibh rud éigin in easnamh…</p>\n<p>Go deimhin bhí an staid Inmheánach comhfhreagrach a bhí ceaptha a bheith in éineacht leis an imeacht sheachtrach in easnamh…</p>\n<p>Is minic gurb é an ócáid ​​nach raibh súil léi an ócáid ​​​​is fearr a thug chuimhneacháin dúinn…</p>"
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
const url = "src/content/docs/ga/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ga/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ga/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
