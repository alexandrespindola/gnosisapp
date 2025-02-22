import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ngurndan",
  "locale": "ff",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Ngurndan",
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
    "set:html": "<p>E nder daande nguurndam, fawaaki men tawaa ko to bannge seedaaɗe ɗe hawrataa. Yimɓe ɓee jogiiɓe jawdi keewndi e galleeji moƴƴiɗi e gongaaji, e wakkatiiji goɗɗi ɓe ngonaa e ɗuuɗude. .. Fulɓe golloɓe e njamndi e piyoŋe maa yimɓe ɓee nder hakkunde nguurndam, nguurndam maɓɓe maa ngonaa e wakkatiiji goɗɗi nder nder laawol.</p>\n<p>Ɓuri e miliyaardeeriin ɓee ɗuuɗude ɓe ngonaa e hannde laawol rewɓe e rewɓe jawdiɗi ɓe ngonaa e waawiide e waawiide dow gaññe suusiiɓe …</p>\n<p>Jawdiɓe e leydi ndii mbaɗee e taƴe hakkunde kaaje kaŋŋe, nder wakkatiiji ɗii ɓe mbaawaa nguurndam dow “gardeejje-ɓaleeɓe”…</p>\n<p>Gorkooji nguurnaaji ɓe ngonaa e hoore cappe, ɓe ngonaa e jeyaaɓe, ɓe ngonaa e hawtaade e yimɓe kaɓtooɓe haa ɗaande …</p>\n<p>Ndaaren kaalisa ndii ɓurnde ɓaleeje. Men ɓaaɗi e anndude ko nguurndam. Kala gooto ko jeyaaɗo e miijoowo ko o faalaani …</p>\n<p>Ngarten ko ngarten tawaa hay gooto anndaa hay huunde, nguurndam ko jaɓɓere nde hay gooto faamaa …</p>\n<p>Nde yimɓe ɓee nani e haalaaka men e haalaaka men taarike nguurndam maɓɓe ngam alaa, ɓe ngonaa e yewtude aadaaji, inɗe e inɗe yimɓe, dateeji, ekn., e ɓe ngonaa e nanude e nder e haalaaki maɓɓe …</p>\n<p>Ɓee fulɓe miskin ɓee ko ɓe anndaa haalaaki maɓɓe ko ɓe timmaaɗi ngam aadaaji, inɗe e dateeji, ko tan ko ɓale e dow filim, ko ɓaaɗi ko ɓale e nder …</p>\n<p>Ko gasdi e anndude “halle nguurndam”, aadaaji kala ko heɓi ko halle anndam.</p>\n<p>Halleeji ko nder e aadaaji ko dow, aadaaji dow ko ngalaa …</p>\n<p>Faamaa ngam halleeji nder e haala moƴƴe maa bonɗe, cigili, nguraanu, ginnaji, kulol, hakke, yurmeende, e hakke e hoore mum, e dewgol e hoore mum; halleeji e nanndee e seyo, halleeji e ngule, ekn., ekn., ekn.</p>\n<p>Ko goonga halleeji nder e haalaaje ɗe hawraaka e aadaaji dow maa ngonaaka tan e maɓɓe, maa ngalaa e haalaaka e maɓɓe …</p>\n<p>E nder maaje halleeji e aadaaji ko seedaaɗi. Ko tan ko nguurndam ngonaaka e hawraaka e halleeji afineeji</p>\n<p>Halle e nder e aada moƴƴe maa ngonaaka e hawraaka e maaje. Halle e nder e aada bonde maa ngonaaka e hawraaka e maaje. Aadaaji ɗe ngonaa e haɓɓaade e wakkati keewɗi, nde ngonaa e nanndee men nanndi e ko ɓaaɗi …</p>\n<p>Ko goonga ko ɓaaɗi e halle nder e ɗe potaa e hawraaka e aada dow …</p>\n<p>Keewɗi wakkati aada ɗe ngonaaka e haɓɓaade ko ɓurnde wakkati moƴƴiɗi e men heɓtanii …</p>"
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
const url = "src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ff/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
