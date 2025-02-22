import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kehidupan",
  "locale": "ms",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Kehidupan",
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
    "set:html": "<p>Dalam ranah kehidupan praktikal, kita sentiasa menemui kontras yang memeranjatkan. Orang berada dengan kediaman mewah dan ramai kawan, kadangkala menderita dengan teruk… Buruh kasar yang sederhana atau orang kelas menengah, kadangkala hidup dalam kebahagiaan yang sempurna.</p>\n<p>Ramai jutawan menderita masalah seksual dan wanita kaya meratapi pengkhianatan suami…</p>\n<p>Orang kaya di dunia ini kelihatan seperti burung hering dalam sangkar emas, pada masa kini mereka tidak boleh hidup tanpa “pengawal peribadi”…</p>\n<p>Para negarawan menyeret rantai, tidak pernah bebas, berjalan ke mana-mana dikelilingi orang bersenjata hingga ke gigi…</p>\n<p>Mari kita kaji situasi ini dengan lebih teliti. Kita perlu tahu apa itu kehidupan. Setiap orang bebas untuk berpendapat seperti yang mereka mahu…</p>\n<p>Apa pun yang mereka katakan, sesungguhnya tiada siapa yang tahu apa-apa, kehidupan menjadi masalah yang tidak difahami oleh sesiapa…</p>\n<p>Apabila orang ingin menceritakan kisah hidup mereka secara percuma, mereka menyebut peristiwa, nama dan nama keluarga, tarikh, dan lain-lain, dan berasa puas hati apabila membuat cerita mereka…</p>\n<p>Orang-orang malang ini tidak menyedari bahawa cerita mereka tidak lengkap kerana peristiwa, nama dan tarikh hanyalah aspek luaran filem, aspek dalaman hilang…</p>\n<p>Adalah penting untuk mengetahui “keadaan kesedaran”, setiap peristiwa sepadan dengan keadaan emosi tertentu.</p>\n<p>Keadaan adalah dalaman dan peristiwa adalah luaran, peristiwa luaran bukanlah segalanya…</p>\n<p>Yang dimaksudkan dengan keadaan dalaman ialah kecenderungan yang baik atau buruk, kebimbangan, kemurungan, kepercayaan karut, ketakutan, syak wasangka, belas kasihan, pertimbangan diri, terlalu tinggi menganggap diri sendiri; keadaan berasa gembira, keadaan kegembiraan, dan lain-lain, dan lain-lain.</p>\n<p>Tidak dapat dinafikan, keadaan dalaman boleh sepadan dengan tepat dengan peristiwa luaran atau berasal daripadanya, atau tidak mempunyai kaitan dengannya sama sekali…</p>\n<p>Walau apa pun, keadaan dan peristiwa adalah berbeza. Tidak semua peristiwa sepadan dengan tepat dengan keadaan yang berkaitan.</p>\n<p>Keadaan dalaman peristiwa yang menyenangkan mungkin tidak sepadan dengannya. Keadaan dalaman peristiwa yang tidak menyenangkan mungkin tidak sepadan dengannya. Peristiwa yang dinanti-nantikan sekian lama, apabila tiba, kita merasakan ada sesuatu yang hilang…</p>\n<p>Sesungguhnya, keadaan dalaman yang sepadan yang sepatutnya digabungkan dengan peristiwa luaran telah hilang…</p>\n<p>Selalunya peristiwa yang tidak dijangka menjadi peristiwa yang memberikan kita saat-saat terbaik…</p>"
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
const url = "src/content/docs/ms/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ms/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/ms/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
