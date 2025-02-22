import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "De Innerlijke Staat",
  "locale": "nl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. De Innerlijke Staat",
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
    "set:html": "<p>Het correct combineren van innerlijke toestanden met uiterlijke gebeurtenissen, is weten hoe je intelligent leeft…</p>\n<p>Elke intelligent beleefde gebeurtenis vereist zijn overeenkomstige specifieke innerlijke toestand…</p>\n<p>Maar helaas denken mensen, wanneer ze hun leven herzien, dat het op zichzelf uitsluitend bestaat uit uiterlijke gebeurtenissen…</p>\n<p>Arme mensen! Ze denken dat als die of die gebeurtenis hen niet was overkomen, hun leven beter zou zijn geweest…</p>\n<p>Ze veronderstellen dat het geluk hen niet gunstig gezind was en dat ze de kans om gelukkig te zijn hebben gemist…</p>\n<p>Ze betreuren wat verloren is gegaan, ze huilen om wat ze hebben veracht, ze kreunen bij het herinneren van oude struikelblokken en rampen…</p>\n<p>Mensen willen niet beseffen dat vegeteren niet leven is en dat het vermogen om bewust te bestaan uitsluitend afhangt van de kwaliteit van de innerlijke toestanden van de Ziel…</p>\n<p>Het maakt zeker niet uit hoe mooi de uiterlijke gebeurtenissen van het leven zijn, als we ons op die momenten niet in de juiste innerlijke toestand bevinden, kunnen de beste gebeurtenissen ons eentonig, vervelend of gewoonweg saai lijken…</p>\n<p>Iemand wacht vol spanning op het huwelijksfeest, het is een gebeurtenis, maar het zou kunnen gebeuren dat ze op het precieze moment van de gebeurtenis zo bezorgd zijn dat ze er helemaal geen plezier aan beleven en dat alles zo droog en koud wordt als een protocol…</p>\n<p>De ervaring heeft ons geleerd dat niet alle mensen die een banket of een dans bijwonen, er echt van genieten…</p>\n<p>Er is altijd wel een saaie piet op het beste feest en de heerlijkste stukken maken sommigen blij en doen anderen huilen…</p>\n<p>Er zijn maar weinig mensen die op vertrouwelijke wijze de uiterlijke gebeurtenis met de juiste innerlijke toestand weten te combineren…</p>\n<p>Het is jammer dat mensen niet bewust weten te leven: ze huilen wanneer ze moeten lachen en lachen wanneer ze moeten huilen…</p>\n<p>Controle is anders: De wijze kan vrolijk zijn maar nooit vol van krankzinnige razernij; verdrietig maar nooit wanhopig en terneergeslagen… sereen midden in het geweld; geheelonthouder in de orgie; kuis te midden van de lust, enz.</p>\n<p>Melancholische en pessimistische mensen denken het slechtste over het leven en willen eerlijk gezegd niet leven…</p>\n<p>We zien elke dag mensen die niet alleen ongelukkig zijn, maar die bovendien - en dat is erger - ook het leven van anderen verbitteren…</p>\n<p>Zulke mensen zouden niet veranderen, zelfs niet als ze dagelijks van feest naar feest zouden leven; de psychologische ziekte dragen ze in zich… zulke mensen bezitten absoluut perverse innerlijke toestanden…</p>\n<p>Toch kwalificeren die subjecten zichzelf als rechtvaardig, heilig, deugdzaam, nobel, behulpzaam, martelaar, enz., enz., enz.</p>\n<p>Het zijn mensen die zichzelf te veel vinden; mensen die veel van zichzelf houden…</p>\n<p>Individuen die veel medelijden hebben met zichzelf en die altijd zoeken naar uitwegen om hun eigen verantwoordelijkheden te ontlopen…</p>\n<p>Zulke mensen zijn gewend aan de lagere emoties en het is duidelijk dat ze om die reden dagelijks infrahumane psychische elementen creëren.</p>\n<p>Ongelukkige gebeurtenissen, tegenslagen, ellende, schulden, problemen, enz., zijn uitsluitend voor mensen die niet weten hoe ze moeten leven…</p>\n<p>Iedereen kan een rijke intellectuele cultuur vormen, maar er zijn maar weinig mensen die hebben geleerd om oprecht te leven…</p>\n<p>Wanneer iemand de uiterlijke gebeurtenissen wil scheiden van de innerlijke toestanden van het bewustzijn, toont hij concreet zijn onvermogen om waardig te bestaan.</p>\n<p>Degenen die leren om bewust uiterlijke gebeurtenissen en innerlijke toestanden te combineren, bewandelen het pad van succes…</p>"
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
const url = "src/content/docs/nl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/nl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
