import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Tangga Ajaib",
  "locale": "id",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Tangga Ajaib",
    "order": 2
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
    "set:html": "<p>Kita harus merindukan perubahan sejati, keluar dari rutinitas yang membosankan ini, dari kehidupan yang sekadar mekanistis dan menjemukan ini…</p>\n<p>Hal pertama yang harus kita pahami dengan sangat jelas adalah bahwa setiap kita, baik borjuis maupun proletar, berada atau dari kelas menengah, kaya atau miskin, sebenarnya berada pada Tingkat Keberadaan tertentu…</p>\n<p>Tingkat Keberadaan seorang pemabuk berbeda dengan orang yang tidak minum alkohol, dan Tingkat Keberadaan seorang pelacur sangat berbeda dengan seorang perawan. Apa yang kita katakan ini tak terbantahkan, tak terbantahkan…</p>\n<p>Sesampainya kita pada bagian bab ini, tidak ada ruginya kita membayangkan sebuah tangga yang membentang dari bawah ke atas, secara vertikal dan dengan banyak anak tangga…</p>\n<p>Tidak diragukan lagi kita berada di salah satu anak tangga ini; di anak tangga bawah akan ada orang-orang yang lebih buruk dari kita; di anak tangga atas akan ada orang-orang yang lebih baik dari kita…</p>\n<p>Dalam Vertikal yang luar biasa ini, dalam tangga yang indah ini, jelas bahwa kita dapat menemukan semua Tingkat Keberadaan… setiap orang berbeda dan ini tidak dapat disangkal oleh siapa pun…</p>\n<p>Tidak diragukan lagi kita tidak berbicara tentang wajah jelek atau cantik, juga bukan masalah usia. Ada orang muda dan tua, orang tua yang sudah akan meninggal dan bayi yang baru lahir…</p>\n<p>Masalah waktu dan tahun; hal lahir, tumbuh, berkembang, menikah, bereproduksi, menua, dan mati, adalah eksklusif untuk Horisontal…</p>\n<p>Dalam “Tangga Ajaib”, dalam Vertikal, konsep waktu tidak berlaku. Pada anak tangga skala itu kita hanya dapat menemukan “Tingkat Keberadaan”…</p>\n<p>Harapan mekanis orang tidak berguna; mereka percaya bahwa seiring waktu keadaan akan menjadi lebih baik; demikianlah yang dipikirkan kakek dan nenek buyut kita; fakta justru membuktikan sebaliknya…</p>\n<p>“Tingkat Keberadaan” adalah yang penting dan ini adalah Vertikal; kita berada di satu anak tangga tetapi kita dapat naik ke anak tangga lain…</p>\n<p>“Tangga Ajaib” yang kita bicarakan dan yang mengacu pada berbagai “Tingkat Keberadaan”, tentu saja, tidak ada hubungannya dengan waktu linier…</p>\n<p>“Tingkat Keberadaan” yang lebih tinggi berada tepat di atas kita dari saat ke saat…</p>\n<p>Itu tidak berada di masa depan horizontal yang jauh, tetapi di sini dan sekarang; di dalam diri kita sendiri; di Vertikal…</p>\n<p>Jelas dan siapa pun dapat memahami, bahwa kedua garis—Horizontal dan Vertikal—bertemu dari saat ke saat di dalam interior Psikologis kita dan membentuk Salib…</p>\n<p>Kepribadian berkembang dan terurai di garis Horizontal Kehidupan. Lahir dan mati dalam waktu linearnya; itu fana; tidak ada hari esok untuk kepribadian orang mati; itu bukanlah Sang Diri…</p>\n<p>Tingkat Keberadaan; Sang Diri itu sendiri, bukan berasal dari waktu, tidak ada hubungannya dengan Garis Horizontal; itu terletak di dalam diri kita sendiri. Sekarang, di Vertikal…</p>\n<p>Akan sangat absurd untuk mencari Diri kita sendiri di luar diri kita sendiri…</p>\n<p>Tidak ada salahnya untuk menetapkan hal berikut sebagai akibatnya: Gelar, tingkatan, promosi, dll., di dunia fisik luar, sama sekali tidak akan menimbulkan pengagungan otentik, reevaluasi Diri, langkah ke anak tangga yang lebih tinggi dalam “Tingkat Keberadaan”…</p>"
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
const url = "src/content/docs/id/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/id/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/id/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
