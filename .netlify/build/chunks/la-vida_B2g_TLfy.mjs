import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Hayot",
  "locale": "uz",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Hayot",
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
    "set:html": "<p>Amaliy hayot sohasida biz har doim hayratlanarli ziddiyatlarni kashf etamiz. Boy-badavlat odamlar ajoyib turar joy va ko’plab do’stlar bilan ba’zan dahshatli azob chekishadi. … Oddiy, mehnatkash proletarlar yoki o’rta sinf vakillari ba’zan to’liq baxtda yashaydilar.</p>\n<p>Ko’p archimillionerlar jinsiy ojizlikdan aziyat chekishadi va boy xonimlar erining xiyonatidan achchiq yig’lashadi…</p>\n<p>Yer yuzidagi boylar oltin qafaslardagi burgutlarga o’xshaydi, hozirgi vaqtda ular “qo’riqchilar”siz yashay olmaydilar…</p>\n<p>Davlat arboblari zanjirlarni sudrab yurishadi, ular hech qachon erkin emaslar, ular har doim tish-tirnog’igacha qurollangan odamlar bilan o’ralgan holda yurishadi…</p>\n<p>Keling, bu vaziyatni batafsil o’rganib chiqaylik. Hayot nima ekanligini bilishimiz kerak. Har kim o’zi xohlaganidek fikr bildirishga haqli…</p>\n<p>Nima deyishmasin, hech kim hech narsa bilmaydi, hayot hech kim tushunmaydigan muammoga aylanadi…</p>\n<p>Odamlar bizga o’z hayotlari haqidagi hikoyani bepul aytib berishni xohlaganlarida, ular voqealar, ismlar va familiyalar, sanalar va hokazolarni keltirishadi va o’z hikoyalarini aytishdan mamnun bo’lishadi…</p>\n<p>Bu bechora odamlar o’z hikoyalari to’liq emasligini bilishmaydi, chunki voqealar, ismlar va sanalar faqatgina filmining tashqi ko’rinishi, ichki ko’rinishi yo’q…</p>\n<p>Har bir voqeaga muayyan ruhiy holat mos kelishini bilish juda muhim.</p>\n<p>Holatlar ichki, voqealar esa tashqi, tashqi voqealar hammasi emas…</p>\n<p>Ichki holatlar deganda yaxshi yoki yomon kayfiyatlar, tashvishlar, depressiya, xurofot, qo’rquv, gumon, rahm-shafqat, o’zini hurmat qilish, o’zini haddan tashqari baholash; baxtli his qilish holatlari, zavq holatlari va hokazo, va hokazo, va hokazo.</p>\n<p>Shubhasiz, ichki holatlar tashqi voqealarga to’liq mos kelishi yoki ulardan kelib chiqishi yoki ular bilan hech qanday aloqasi bo’lmasligi mumkin…</p>\n<p>Har qanday holatda ham, holatlar va voqealar har xil. Har doim ham voqealar tegishli holatlarga to’liq mos kelavermaydi.</p>\n<p>Yoqimli voqeaning ichki holati unga mos kelmasligi mumkin. Yoqimsiz voqeaning ichki holati unga mos kelmasligi mumkin. Uzoq vaqt davomida kutilgan voqealar kelganda, biz nimadir etishmayotganini his qilamiz…</p>\n<p>Albatta, tashqi voqea bilan birlashtirilishi kerak bo’lgan tegishli ichki holat etishmayotgan edi…</p>\n<p>Ko’pincha kutilmagan voqea bizga eng yaxshi lahzalarni taqdim etadigan voqea bo’lib chiqadi…</p>"
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
const url = "src/content/docs/uz/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uz/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/uz/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
