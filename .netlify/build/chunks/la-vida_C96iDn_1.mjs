import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Lífið",
  "locale": "is",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Lífið",
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
    "set:html": "<p>Á sviði hins hagnýta lífs finnum við alltaf andstæður sem vekja furðu. Efnafólk með stórbrotna bústaði og marga vini þjáist stundum hræðilega. .. Auðmjúkir verkamenn með hakka og skóflu eða fólk úr millistéttinni lifa hins vegar oft í fullkominni hamingju.</p>\n<p>Margir ofurríkir menn þjást af kyngetuleysi og ríkar matrónur gráta beisklega yfir framhjáhaldi eiginmannsins…</p>\n<p>Ríkismenn jarðarinnar virðast vera hrægammar í gullbúrum, þessa dagana geta þeir ekki lifað án “lífvörða”…</p>\n<p>Stjórnmálamenn draga á eftir sér fjötra, þeir eru aldrei frjálsir, þeir ganga um allt umkringdir fólki vopnuðu upp í tennurnar…</p>\n<p>Við skulum rannsaka þessar aðstæður nánar. Við þurfum að vita hvað lífið er. Hver og einn er frjáls að hafa sína skoðun…</p>\n<p>Hvað sem fólk segir, þá veit vissulega enginn neitt, lífið er vandamál sem enginn skilur…</p>\n<p>Þegar fólk vill segja okkur sögu sína ókeypis, þá vitna þau í atburði, nöfn og ættarnöfn, dagsetningar o.s.frv., og finna fyrir ánægju við að segja sögurnar sínar…</p>\n<p>Þetta aumingja fólk veit ekki að sögur þeirra eru ófullkomnar vegna þess að atburðir, nöfn og dagsetningar eru aðeins ytra útlit myndarinnar, hið innra útlit vantar…</p>\n<p>Það er brýnt að þekkja “vitundarástand”, hverjum atburði samsvarar tiltekið andlegt ástand.</p>\n<p>Ástandið er innra og atburðirnir ytri, ytri atburðir eru ekki allt…</p>\n<p>Með innra ástandi er átt við góða eða slæma skapgerð, áhyggjur, þunglyndi, hjátrú, ótta, tortryggni, miskunn, sjálfsálit, ofmat á sjálfum sér; ástand þess að vera hamingjusamur, ástand gleði, o.s.frv., o.s.frv., o.s.frv.</p>\n<p>Óumdeilanlega geta innri ástand samsvarað nákvæmlega ytri atburðum eða stafað af þeim, eða haft ekkert samband við þá…</p>\n<p>Í öllum tilvikum eru ástand og atburðir mismunandi. Ekki alltaf samsvara atburðir nákvæmlega skyldum ástandi</p>\n<p>Innra ástand ánægjulegs atburðar gæti ekki samsvarað honum. Innra ástand óþægilegs atburðar gæti ekki samsvarað honum. Atburðir sem beðið hefur verið eftir í langan tíma, þegar þeir komu fannst okkur eitthvað vanta…</p>\n<p>Vissulega vantaði samsvarandi innra ástand sem átti að sameinast ytri atburðinum…</p>\n<p>Oft er það atburðurinn sem ekki var búist við sem hefur veitt okkur bestu stundirnar…</p>"
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
const url = "src/content/docs/is/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/is/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/is/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
