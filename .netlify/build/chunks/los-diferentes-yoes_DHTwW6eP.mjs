import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Berbagai Diri",
  "locale": "id",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Berbagai Diri",
    "order": 10
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
    "set:html": "<p>Mamalia rasional yang keliru disebut manusia, sebenarnya tidak memiliki individualitas yang jelas.</p>\n<p>Tidak diragukan lagi, kurangnya kesatuan psikologis dalam Humanoid ini, adalah penyebab dari begitu banyak kesulitan dan kepahitan.</p>\n<p>Tubuh fisik adalah satu kesatuan yang lengkap dan bekerja sebagai keseluruhan organik, kecuali jika sakit.</p>\n<p>Namun, kehidupan batin Humanoid sama sekali bukan merupakan kesatuan psikologis.</p>\n<p>Yang paling serius dari semua ini, terlepas dari apa yang dikatakan oleh berbagai sekolah jenis Pseudo-Esoteris dan Pseudo-Okultis, adalah tidak adanya organisasi Psikologis di lubuk hati setiap subjek.</p>\n<p>Tentu saja dalam kondisi seperti itu, tidak ada pekerjaan harmonis sebagai satu kesatuan, dalam kehidupan batin seseorang.</p>\n<p>Humanoid, sehubungan dengan keadaan batinnya, adalah sebuah multiplisitas psikologis, sebuah jumlah “Aku”.</p>\n<p>Orang-orang bodoh terpelajar di zaman kelam ini, memuja “AKU”, mendewakannya, menempatkannya di atas altar, menyebutnya “ALTER EGO”, “AKU SUPERIOR”, “AKU ILAHI”, dll., dll., dll.</p>\n<p>Para “Bijak” dari zaman kegelapan tempat kita hidup ini tidak mau menyadari bahwa “Aku Superior” atau “Aku Inferior”, adalah dua bagian dari Ego yang sama yang dijamakkan…</p>\n<p>Humanoid tentu saja tidak memiliki “AKU Permanen” tetapi banyak “Aku” yang berbeda yang Infra-manusiawi dan tidak masuk akal.</p>\n<p>Hewan intelektual malang yang keliru disebut manusia, mirip dengan rumah yang berantakan di mana alih-alih seorang tuan, ada banyak pelayan yang selalu ingin memerintah dan melakukan apa yang mereka inginkan…</p>\n<p>Kesalahan terbesar dari Pseudo-Esoterisme dan Pseudo-Okultisme murahan, adalah menganggap bahwa orang lain memiliki atau bahwa seseorang memiliki “AKU Permanen dan Tidak Berubah” tanpa awal dan tanpa akhir…</p>\n<p>Jika mereka yang berpikir demikian membangkitkan kesadaran meskipun hanya sesaat, mereka dapat membuktikan dengan jelas sendiri, bahwa Humanoid rasional tidak pernah sama untuk waktu yang lama…</p>\n<p>Mamalia intelektual dari sudut pandang psikologis, terus berubah…</p>\n<p>Berpikir bahwa jika seseorang bernama Luis, dia selalu Luis, agak seperti lelucon yang sangat buruk…</p>\n<p>Subjek yang disebut Luis ini memiliki “Aku” lain dalam dirinya, ego lain, yang mengekspresikan diri melalui kepribadiannya pada saat yang berbeda dan meskipun Luis tidak menyukai keserakahan, “Aku” lain dalam dirinya —sebut saja Pepe— menyukai keserakahan dan seterusnya…</p>\n<p>Tidak ada orang yang sama secara terus menerus, sebenarnya tidak perlu terlalu bijaksana untuk menyadari sepenuhnya perubahan dan kontradiksi yang tak terhitung jumlahnya dari setiap subjek…</p>\n<p>Menganggap bahwa seseorang memiliki “AKU Permanen dan Tidak Berubah” tentu saja sama dengan penyalahgunaan terhadap sesama dan terhadap diri sendiri…</p>\n<p>Di dalam setiap orang hidup banyak orang, banyak “Aku”, ini dapat diverifikasi sendiri dan secara langsung, oleh setiap orang yang terbangun, sadar…</p>"
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
const url = "src/content/docs/id/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/id/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/id/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
