import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Obutonde",
  "locale": "lg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Obutonde",
    "order": 4
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
    "set:html": "<p>Ekintu ekifuula omwana omuto alaze obulungi n’okwagala kwe Essensiya ye; eno ye mbeera ye entuufu…</p>\n<p>Okukula kw’Essensiya okwa bulijjo mu buli kitonde, mazima ddala kusembayo, kwatandika butandisi…</p>\n<p>Omubiri gw’omuntu gukula era gukulaakulana okusinziira ku mateeka g’ebiramu ag’ekika, naye ebintu ng’ebyo byokka bikoma ku Essensiya…</p>\n<p>Tewali kubuusabuusa nti Essensiya ekula yokka awatali buyambi, mu mutindo mutono nnyo…</p>\n<p>Singa twogera mu butuufu era nga tetukikweka, tujja kugamba nti okukula kw’Essensiya okwetondese n’okwa bulijjo, kusoboka mu myaka esatu, ena n’etaano egy’obuto, kwe kugamba, mu mutendera ogusooka ogw’obulamu…</p>\n<p>Abantu balowooza nti okukula n’enkulaakulana y’Essensiya bulijjo bikolebwa mu ngeri etalema, okusinziira ku mateeka g’okukyuka, naye Obugnositiko bw’Ensi yonna bujigiriza lwatu nti kino tekibaawo bwe kityo…</p>\n<p>Okusobola okukula kw’Essensiya okusingako, waliwo ekintu ekitali kya bulijjo ekirina okubaawo, waliwo ekintu ekipya ekirina okukolebwa.</p>\n<p>Njagala okwogera mu ngeri ennyonnyofu ku mulimu gw’omuntu ku lulwe. Enkulaakulana y’Essensiya esoboka okuyita mu mirimu egikolebwa mu magezi n’okubonabona okwagalwa…</p>\n<p>Kyetaagisa okutegeera nti emirimu gino tegikwata ku nsonga z’omulimu, bbanka, bubazzi, bwazimbi, kulongoosa masiraale oba nsonga z’omu ofiisi…</p>\n<p>Omulimu guno gwa buli muntu eyeekulakulanyizza obuntu; kintu kya Psychology…</p>\n<p>Ffenna tumanyi nti tulina munda yaffe ekyo kye bayita EGO, NZE, NZE MWENNYINI, MMEKA…</p>\n<p>Eky’ennaku, Essensiya eri mu butto, esibidde wakati mu ECO era kino kibi nnyo.</p>\n<p>Okusaanyaawo NZE Psychology, okutattana ebintu byayo ebitali bya kwagala, kyanguwa, tekirina kulwa, tekiyinza kuggwaamu maanyi… bwe butyo obukulu bw’omulimu ku lulwe.</p>\n<p>Tetuyinza kuta Essensiya nga tetusaanyizzaawo NZE Psychology…</p>\n<p>Mu Essensiya mulimu Eddiini, BUDDHA, Amagezi, obutoffaali bw’obulumi bwa Kitaffe ali mu Ggulu n’ebintu byonna bye twetaaga okwesanga mu mutima gw’Omuntu.</p>\n<p>Tewali n’omu ayinza okusaanyaawo NZE Psychology nga tamaze kusirisa bintu ebitali bya buntu bye tulina munda…</p>\n<p>Twetaaga okusaanyaawo obukambwe obw’entiisa obw’ebiro bino: obuggya ekyo ekyatuuse okufuuka ekintu ekyekusifu eky’omulembe oguno; omululu ogutaguminkirize ogufuule obulamu okuba obubi: obulumi obunyiiza; obulimba obuleeta ennaku nnyingi; obutamiivu; obwenzi obucaafu obuwunya obubi nnyo; n’ebirala, n’ebirala, n’ebirala.</p>\n<p>Nga eby’emizizo byonna bigenda bikendeera okufuuka enfuufu, Essensiya okuggyako okuta, era ejja kukulaakulana mu ngeri etabaganye…</p>\n<p>Tewali kubuusabuusa nti NZE Psychology bw’efa, Essensiya etangaala mu ffe…</p>\n<p>Essensiya engamba etuwa obulungi obw’omunda; okuva mu bulungi ng’obwo mwe muva essanyu eggulumivu n’okwagala okw’amazima…</p>\n<p>Essensiya erina amakulu amangi ag’obutuukirivu n’amaanyi ag’obutonde ag’enjawulo…</p>\n<p>Bwe “Tuffa mu Ffe Bwennyini”, bwe tusaanyaawo NZE Psychology, twenyumirwa amakulu ag’omuwendo omungi n’amaanyi g’Essensiya…</p>"
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
const url = "src/content/docs/lg/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lg/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/lg/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
