import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ubuzima",
  "locale": "rw",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Ubuzima",
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
    "set:html": "<p>Mu buzima busanzwe, buri gihe duhura n’ibintu bitangaje bidutera kumirwa. Abantu bakize bafite amazu meza n’inshuti nyinshi, rimwe na rimwe bababara cyane. … Abakozi bicisha bugufi bakora imirimo y’amaboko cyangwa abantu bo mu rwego rwo hagati, akenshi babaho banezerewe rwose.</p>\n<p>Abantu benshi bafite za miliyari nyinshi barwara indwara yo kutagira ubushake bwo gukora imibonano mpuzabitsina kandi abagore bakize bararira amarira menshi kubera ubudahemuka bw’abagabo babo…</p>\n<p>Abakire bo ku isi basa n’ibisiga biri mu nzu z’izahabu, muri ibi bihe ntibabasha kubaho badafite “abarinzi”…</p>\n<p>Abanyapolitiki bakuru baraziritse iminyururu, ntibigera babohoka, bagenda ahantu hose bakikijwe n’abantu bitwaje intwaro…</p>\n<p>Reka twige iyi miterere y’ibintu neza. Tugomba kumenya icyo ubuzima ari cyo. Buri wese afite uburenganzira bwo gutanga ibitekerezo uko ashaka…</p>\n<p>Nubwo abantu bavuga ibyo bashaka, nta muntu n’umwe uzi ikintu icyo ari cyo cyose, ubuzima bugaragara nk’ikibazo nta n’umwe usobanukirwa…</p>\n<p>Iyo abantu bashaka kutubwira ku buntu amateka y’ubuzima bwabo, bavuga ibyabaye, amazina n’amazina y’irangamimerere, amatariki, n’ibindi, kandi bakumva bishimye iyo babivuze…</p>\n<p>Abo bantu bakennye ntibazi ko inkuru zabo zidakamilutse kubera ko ibyabaye, amazina n’amatariki, ari isura yo hanze y’ifilimi gusa, hakenewe isura yo imbere…</p>\n<p>Ni ngombwa kumenya “imimerere y’ubwenge”, buri kintu cyose gihuye n’imimerere runaka y’umutima.</p>\n<p>Imimerere ni yo imbere kandi ibintu ni ibyo hanze, ibyabaye hanze si byo byose…</p>\n<p>Imimerere yo imbere ni nk’imyifatire myiza cyangwa mibi, impungenge, kwiheba, kwizera ibihwihwi, ubwoba, gushidikanya, impuhwe, kwiyitaho, kwiyemera cyane; imimerere yo kumva wishimye, imimerere yo kunezerwa, n’ibindi, n’ibindi, n’ibindi.</p>\n<p>Nta gushidikanya ko imimerere yo imbere ishobora guhura neza n’ibyabaye hanze cyangwa igaterwa nabyo, cyangwa ntibibe bifitanye isano…</p>\n<p>Uko biri kose, imimerere n’ibyabaye biratandukanye. Ntabwo buri gihe ibyabaye bihuza neza n’imimerere isa.</p>\n<p>Imimerere yo imbere y’ikintu gishimishije ishobora kutajyana nacyo. Imimerere yo imbere y’ikintu kidashimishije ishobora kutajyana nacyo. Ibyabaye byarategerejwe igihe kirekire, iyo byabaye twumva hari ikintu kibura…</p>\n<p>Mu by’ukuri, hari habura imimerere yo imbere yagombaga guhuzwa n’ikintu cyo hanze…</p>\n<p>Akenshi ikintu umuntu atari yiteze kiba ari cyo kimuzaniye ibihe byiza kurusha ibindi…</p>"
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
const url = "src/content/docs/rw/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/rw/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
