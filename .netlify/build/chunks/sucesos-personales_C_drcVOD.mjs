import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Zvaitika Zvahupenyu",
  "locale": "sn",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Zvaitika Zvahupenyu",
    "order": 9
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
    "set:html": "<p>Kuzviongorora kwakadzama uye pachokwadi kwemunhu, kunokosha zvikuru pakutsvaga mamiriro ezvinhu asiri iwo epfungwa.</p>\n<p>Hazvina mubvunzo kuti mamiriro ezvinhu asiri iwo emukati anogona kugadziriswa nenzira dzakakodzera.</p>\n<p>Sezvo hupenyu hwemukati huri magineti inokwezva zviitiko zvekunze, tinoda nekukurumidza, kudzima kubva mundangariro dzedu mamiriro ezvinhu asiri iwo epfungwa.</p>\n<p>Kugadzirisa mamiriro ezvinhu asiri iwo epfungwa kunokosha zvikuru kana munhu achida kuchinja zvakanyanya maitiro ezvimwe zviitiko zvisingadiwi.</p>\n<p>Kuchinja hukama hwedu nezviitiko zvakati, zvinobvira kana tikabvisa kubva mukati medu mamwe mamiriro ezvinhu asina musoro epfungwa.</p>\n<p>Mamiriro ezvinhu ekunze anoparadza, anogona kushanduka kuva asina njodzi uye anotovaka kuburikidza nekugadziriswa kwakangwara kwemamiriro ezvinhu emukati asiri iwo.</p>\n<p>Munhu anogona kuchinja maitiro ezviitiko zvisingafadzi zvinoitika kwatiri, kana akazvichenesa mukati. Uyo asingambogadzirise mamiriro ezvinhu asina musoro epfungwa, achizviona semunhu akasimba, anova obirwa nezviitiko.</p>\n<p>Kuronga imba yedu yemukati isina kurongeka kunokosha, kana munhu achida kuchinja mafambiro ehupenyu husina mufaro.</p>\n<p>Vanhu vanonyunyuta pamusoro pezvose, vanotambura, vanochema, vanoprotesta, vanoda kuchinja hupenyu hwavo, kubuda munhamo yavari, zvinosuruvarisa kuti havashandi pavari pachavo.</p>\n<p>Vanhu havadi kuziva kuti hupenyu hwemukati hunokwezva mamiriro ezvinhu ekunze uye kuti kana aya ari marwadzo zvinokonzerwa nemamiriro ezvinhu asina musoro emukati.</p>\n<p>Zviri kunze ingori mufananidzo wezviri mukati, uyo anochinja mukati anokonzera hurongwa hutsva hwezvinhu.</p>\n<p>Zviitiko zvekunze hazvifaniri kunge zvakakosha zvakadaro, senzira yekuitira nazvo.</p>\n<p>Wakamboramba wakadzikama here pamberi pemutukisi? Wakagamuchira nemufaro here zviratidzo zvisingafadzi zvevavakidzani vako?</p>\n<p>Wakaita sei paakanga asingatendeseki kune waunoda? Wakarega here uchiendeswa neuchetura hwegodo? Wakauraya here? Uri mujeri here?</p>\n<p>Zvipatara, makuva, majeri, zvizere nevakatendeseka vakarasika vakaita zvisina musoro kuzviitiko zvekunze.</p>\n<p>Chombo chakanakisisa chingashandiswa nemurume muupenyu, imamiriro ezvinhu akakodzera epfungwa.</p>\n<p>Munhu anogona kurwisa zvikara ndokufumura vatengesi, kuburikidza nemamiriro ezvinhu emukati akakodzera.</p>\n<p>Mamiriro ezvinhu asiri iwo emukati anotishandura kuva vanyajambwa vasina dziviriro vekuipa kwevanhu.</p>\n<p>Dzidzai kutarisana nezviitiko zvisingafadzi zvikuru zveupenyu hwezuva nezuva nemafungiro akakodzera emukati…</p>\n<p>Musazvifanane nechero chiitiko; rangarirai kuti zvose zvinopfuura; dzidzai kuona upenyu sefirimu uye muchagamuchira zvikomborero…</p>\n<p>Musakanganwa kuti zviitiko zvisina kukosha zvinogona kukuendesai kunhamo, kana musingabvisi kubva mundangariro dzenyu mamiriro ezvinhu asiri iwo epfungwa.</p>\n<p>Chiitiko chese chekunze chinoda, pasina mubvunzo, tiketi rakakodzera; kureva, mamiriro ezvinhu epfungwa chaiwo.</p>"
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
const url = "src/content/docs/sn/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
