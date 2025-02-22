import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Turli Xilliklar",
  "locale": "uz",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Turli Xilliklar",
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
    "set:html": "<p>Xato ravishda odam deb atalgan aqliy sutemizuvchi hayvon, aslida aniq shaxsiyatga ega emas.</p>\n<p>Shubhasiz, insonda psixologik birlikning yo’qligi ko’plab qiyinchiliklar va achchiqlanishlarga sabab bo’ladi.</p>\n<p>Fizik tanasi to’liq birlikdir va kasal bo’lmasa, organik butunlik sifatida ishlaydi.</p>\n<p>Biroq, insonning ichki hayoti hech qanday psixologik birlik emas.</p>\n<p>Barcha narsalarning eng jiddiysi shundaki, turli xil psevdo-ezoterik va psevdo-okultizm maktablari nima deyishidan qat’i nazar, har bir sub’ektning ichki tubida psixologik tashkilot yo’q.</p>\n<p>Albatta, bunday sharoitda odamlarning ichki hayotida yaxlit sifatida uyg’un ish yo’q.</p>\n<p>Inson, o’zining ichki holati nuqtai nazaridan, psixologik ko’plik, “Men” larning yig’indisidir.</p>\n<p>Ushbu qorong’u davrning bilimsiz ziyolilari “MEN” ga sig’inadilar, uni ilohiylashtiradilar, uni qurbongohlarga qo’yadilar, uni “ALTER EGO”, “OLIY MEN”, “ILOHIY MEN” va hokazo deb ataydilar.</p>\n<p>Biz yashayotgan ushbu qora davrning “Bilgichlari” “Oliy Men” yoki “Quyi Men” ko’plab Ego’ning ikkita qismidan iborat ekanligini tushunishni xohlamaydilar…</p>\n<p>Insonda albatta “Doimiy Men” yo’q, balki turli xil insoniylikka zid va bema’ni “Men” lar ko’p.</p>\n<p>Odam deb xato atalgan bechora aqlli hayvon, xo’jayin o’rniga har doim buyruq berishni va xohlagan narsasini qilishni istagan ko’plab xizmatchilar bor bo’lgan tartibsiz uyga o’xshaydi …</p>\n<p>Arzon psevdo-ezoterizm va psevdo-okultizmning eng katta xatosi - bu boshqalarda yoki o’zida boshlanishi va oxiri bo’lmagan “Doimiy va O’zgarmas Men” bor deb taxmin qilishdir…</p>\n<p>Agar shunday o’ylaydiganlar bir zumga bo’lsa ham ongini uyg’otsalar, ular aqliy inson uzoq vaqt davomida hech qachon bir xil bo’lmasligini aniq ko’rsatadilar…</p>\n<p>Aqliy sutemizuvchi psixologik nuqtai nazardan doimiy ravishda o’zgarib turadi …</p>\n<p>Agar biror kishi o’zini Luis deb atasa, u har doim Luis deb o’ylash, juda yomon hazilga o’xshaydi …</p>\n<p>Luis deb ataladigan sub’ektning o’zida boshqa “Men” lar, boshqa egolar bor, ular uning shaxsiyati orqali turli vaqtlarda ifodalanadi va Luis ochko’zlikni yoqtirmasa ham, uning ichidagi boshqa “Men” - uni Pepe deb ataymiz - ochko’zlikni yoqtiradi va hokazo…</p>\n<p>Hech bir kishi doimiy ravishda bir xil emas, har bir sub’ektning son-sanoqsiz o’zgarishlari va ziddiyatlarini to’liq anglash uchun juda aqlli bo’lish shart emas…</p>\n<p>Kimdir “Doimiy va O’zgarmas Men” ga ega deb taxmin qilish, albatta, qo’shniga va o’ziga nisbatan suiiste’mol qilish demakdir…</p>\n<p>Har bir inson ichida ko’plab odamlar, ko’plab “Men” lar yashaydi, buni har bir uyg’oq, ongli odam o’zi tekshirishi va bevosita bilishi mumkin…</p>"
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
const url = "src/content/docs/uz/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uz/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uz/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
