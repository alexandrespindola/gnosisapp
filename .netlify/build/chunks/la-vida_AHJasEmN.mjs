import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ny Fiainana",
  "locale": "mg",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Ny Fiainana",
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
    "set:html": "<p>Eo amin’ny sehatry ny fiainana andavanandro, mahita fifanoherana mahagaga hatrany isika. Ny olona manankarena manana trano fonenana tsara tarehy sy namana maro, indraindray mijaly mafy. .. Ny mpiasa an-tsitrapo ambany saranga na ny olona ao amin’ny saranga antonontonony, matetika miaina amin’ny fahasambarana tanteraka.</p>\n<p>Maro ny mpanefoefo tsy afaka manao firaisana ara-nofo ary ny vehivavy manankarena mitomany fatratra noho ny tsy fivadihan’ny vadiny…</p>\n<p>Ny manankarena eto an-tany dia toa voromahery ao anaty tranom-bolamena, amin’izao fotoana izao dia tsy afaka miaina raha tsy misy “mpiambina”…</p>\n<p>Ny lehiben’ny fanjakana dia mitondra rojo vy, tsy afaka amin’ny fahalalahana mihitsy, mandehandeha eny rehetra eny izy ireo voahodidin’ny olona mitam-piadiana hatrany an-tampon-doha…</p>\n<p>Andeha isika handinika akaiky kokoa ity toe-javatra ity. Mila mahafantatra isika hoe inona no atao hoe fiainana. Malalaka ny tsirairay manome ny heviny araka izay itiavany azy…</p>\n<p>Na inona na inona lazain’izy ireo dia tena tsy misy mahalala na inona na inona, ny fiainana dia olana izay tsy azon’iza na iza…</p>\n<p>Rehefa te hilaza amintsika maimaim-poana ny tantaram-piainany ny olona, dia mitanisa zava-nitranga, anarana sy fanampin’anarana, daty, sns., ary mahatsapa fahafaham-po rehefa mitantara izany…</p>\n<p>Tsy fantatr’ireo olona mahantra ireo fa tsy feno ny tantarany satria ny zava-nitranga, anarana ary daty, dia ny endrika ivelany amin’ny sarimihetsika ihany, ny endrika anatiny no tsy hita…</p>\n<p>Maika ny mahafantatra ny “toe-tsaina”, ny zava-nitranga tsirairay dia mifanandrify amin’ny toe-po iray na hafa.</p>\n<p>Ny fanjakana dia ao anatiny ary ny zava-nitranga dia ivelany, ny zava-mitranga ivelany dia tsy ny zava-drehetra…</p>\n<p>Ny dikan’ny hoe toe-javatra anatiny dia ny toe-tsaina tsara na ratsy, ny tebiteby, ny fahaketrahana, ny finoanoam-poana, ny tahotra, ny ahiahy, ny famindram-po, ny fiheveran-tena, ny fiheveran-tena ho ambony loatra; toe-javatra mahatsiaro ho sambatra, toe-javatra mahafinaritra, sns., sns., sns.</p>\n<p>Tsy azo lavina fa ny toe-javatra anatiny dia mety hifanandrify tsara amin’ny zava-mitranga ivelany na avy amin’izy ireo, na tsy misy ifandraisany amin’izany…</p>\n<p>Na ahoana na ahoana, ny fanjakana sy ny zava-nitranga dia samy hafa. Tsy mifanaraka tsara amin’ny fanjakana mitovy hatrany ny zava-miseho</p>\n<p>Ny toe-javatra anatiny amin’ny zava-nitranga mahafinaritra dia mety tsy hifanaraka amin’izany. Ny toe-javatra anatiny amin’ny zava-nitranga tsy mahafinaritra dia mety tsy hifanaraka amin’izany. Ny zava-nitranga nandrasana hatry ny ela, rehefa tonga dia tsapanay fa misy zavatra tsy ampy…</p>\n<p>Azo antoka fa tsy ampy ny toe-javatra anatiny mifanandrify izay tokony ho natambatra tamin’ny zava-nitranga ivelany…</p>\n<p>Imbetsaka, ny zava-nitranga izay tsy nampoizina dia tonga ireo izay nanome anay fotoana tsara indrindra…</p>"
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
const url = "src/content/docs/mg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/mg/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
