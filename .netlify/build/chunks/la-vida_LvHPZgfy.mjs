import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kehidupan",
  "locale": "id",
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
    "set:html": "<p>Di bidang kehidupan praktis, kita selalu menemukan kontras yang mencengangkan. Orang-orang kaya dengan tempat tinggal megah dan banyak teman, terkadang menderita dengan sangat mengerikan. .. Kaum proletar sederhana yang bekerja keras atau orang-orang dari kelas menengah, terkadang hidup dalam kebahagiaan yang lengkap.</p>\n<p>Banyak miliarder menderita impotensi seksual dan wanita kaya menangisi perselingkuhan suami mereka dengan getir…</p>\n<p>Orang kaya di bumi tampak seperti burung nasar di antara sangkar emas, saat ini mereka tidak dapat hidup tanpa “pengawal”…</p>\n<p>Para negarawan menyeret rantai, mereka tidak pernah bebas, mereka berjalan ke mana-mana dikelilingi oleh orang-orang bersenjata lengkap…</p>\n<p>Mari kita pelajari situasi ini lebih cermat. Kita perlu tahu apa itu hidup. Setiap orang bebas berpendapat sesukanya…</p>\n<p>Apa pun yang mereka katakan, tentu saja tidak ada yang tahu apa-apa, hidup adalah masalah yang tidak dipahami oleh siapa pun…</p>\n<p>Ketika orang ingin menceritakan kisah hidup mereka secara gratis, mereka menyebutkan peristiwa, nama dan marga, tanggal, dll., dan merasa puas saat membuat cerita mereka…</p>\n<p>Orang-orang malang itu tidak tahu bahwa cerita mereka tidak lengkap karena peristiwa, nama, dan tanggal, hanyalah aspek eksternal dari film, aspek internalnya hilang…</p>\n<p>Sangat mendesak untuk mengetahui “keadaan kesadaran”, setiap peristiwa sesuai dengan keadaan mental tertentu.</p>\n<p>Keadaan itu internal dan peristiwa itu eksternal, peristiwa eksternal bukanlah segalanya…</p>\n<p>Yang dimaksud dengan keadaan internal adalah disposisi baik atau buruk, kekhawatiran, depresi, takhayul, ketakutan, kecurigaan, belas kasihan, pertimbangan diri, terlalu melebih-lebihkan diri sendiri; keadaan merasa bahagia, keadaan gembira, dll., dll., dll.</p>\n<p>Tidak dapat disangkal bahwa keadaan internal dapat berhubungan persis dengan peristiwa eksternal atau berasal dari peristiwa eksternal ini, atau tidak memiliki hubungan sama sekali dengan peristiwa eksternal…</p>\n<p>Bagaimanapun, keadaan dan peristiwa berbeda. Tidak selalu peristiwa sesuai persis dengan keadaan yang terkait</p>\n<p>Keadaan internal dari peristiwa yang menyenangkan mungkin tidak sesuai dengannya. Keadaan internal dari peristiwa yang tidak menyenangkan mungkin tidak sesuai dengannya. Peristiwa yang ditunggu-tunggu dalam waktu lama, ketika datang kita merasa ada sesuatu yang hilang…</p>\n<p>Tentu saja keadaan Internal yang sesuai yang harus digabungkan dengan peristiwa eksternal hilang…</p>\n<p>Seringkali peristiwa yang tidak diharapkan menjadi peristiwa yang memberi kita momen terbaik…</p>"
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
const url = "src/content/docs/id/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/id/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/id/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
