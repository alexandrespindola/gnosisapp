import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Hwaro",
  "locale": "sn",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Hwaro",
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
    "set:html": "<p>Chinhu chinoita kuti mwana mutsva ave akanaka uye anodiwa hunhu hwake; hunhu uhu ndihwo hwechokwadi hwake…</p>\n<p>Kukura kwehunhu hwemunhu mumwana wese kunongova kushoma, kutanga…</p>\n<p>Muviri wemunhu unokura nekukura maererano nemitemo yebiological yerudzi, zvisinei zvingaitika zvakadaro zvinoganhurirwa zvakanyanya kune hunhu…</p>\n<p>Zvisingakundiki, hunhu hunogona kukura pachahwo pasina rubatsiro, kusvika padiki…</p>\n<p>Kutaura chokwadi uye pasina kukurudzira tichati kukura kwepanyama uye kwechisikigo kweHunhu, kunogoneka chete mumakore matatu, mana uye mashanu ekutanga ehupenyu, ndiko kuti, muchikamu chekutanga chehupenyu…</p>\n<p>Vanhu vanofunga kuti kukura nekukura kweHunhu kunoitika nguva dzose, maererano nemichina yekushanduka-shanduka, asi Universal Gnosticism inodzidzisa zvakajeka kuti izvi hazviitike…</p>\n<p>Kuitira kuti Hunhu hukure zvakanyanya, chimwe chinhu chakakosha chinofanira kuitika, chimwe chinhu chitsva chinofanira kuitwa.</p>\n<p>Ndinoda kutaura zvakasimba nezvebasa pamusoro pako. Kukura kweHunhu kunogoneka chete pahwaro hwemabasa ekuziva uye kutambura kwechido…</p>\n<p>Zvakakosha kunzwisisa kuti mabasa aya haareve nyaya dzebasa, mabhangi, kuveza, kuvaka, kugadzirisa migwagwa yezvitima kana nyaya dzehofisi…</p>\n<p>Basa iri nderemunhu wese akagadzira hunhu; inyaya yePsychological…</p>\n<p>Tese tinoziva kuti tine mukati medu icho chinonzi EGO, I, MYSELF, SELF…</p>\n<p>Zvinosuruvarisa, Hunhu hwakakiiwa, hwakavharirwa, pakati peECO uye izvi zvinosuwisa.</p>\n<p>Kuparadza iyo Psychological I, kuparadza zvinhu zvayo zvisingadiwe, kunokurumidza, hakusi kwekunonoka, hakusi kwekugadziriswa… iyi ndiyo pfungwa yebasa pauri…</p>\n<p>Hatingambosunungura Hunhu tisati taparadza Psychological I…</p>\n<p>MuHunhu mune Chitendero, BUDDHA, Uchenjeri, zvikamu zvemashungu zveBaba vedu vari Kudenga uye ruzivo rwese rwatinoda kuitira INTIMATE SELF-REALIZATION YEMUNHU.</p>\n<p>Hapana anogona kuparadza iyo Psychological I asina kutanga abvisa zvinhu zvisiri zvevanhu zvatinazvo mukati…</p>\n<p>Tinoda kuderedza kusvika kumadota hutsinye hwemazuva ano: godo iro rinosuwisa ravakatanga kuita chitubu chakavanzika chechiito; ruchiva rusingatsungiririki rwaita kuti hupenyu huve hunovava: kutaura kwakashata kunosemesa; kunyomba kunokonzeresa njodzi dzakawanda; udhakwa; ruchiva rune tsvina runonhuwa zvinosemesa; nezvimwewo, nezvimwewo, nezvimwewo.</p>\n<p>Sezvo zvinonyangadza izvo zviri kuderera kuita guruva re cosmic, Hunhu kuwedzera pakusunungurwa, huchakura uye hukura zvinoenderana…</p>\n<p>Zvisingakundiki kana Psychological I yafa, Hunhu hunopenya matiri…</p>\n<p>Hunhu hwakasununguka hunotipa runako rwepedyo; kubva murunako rwakadai kunobuda mufaro wakakwana uye Rudo rwechokwadi…</p>\n<p>Hunhu hune pfungwa dzakawanda dzekukwana uye masimba echisikigo anoshamisa…</p>\n<p>Kana “Tichifa muZvatiri”, kana tikaparadza Psychological I, tinonakidzwa nepfungwa dzinokosha uye masimba eHunhu…</p>"
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
const url = "src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sn/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
