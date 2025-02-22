import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Kişisel Olaylar",
  "locale": "tr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Kişisel Olaylar",
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
    "set:html": "<p>Yanlış psikolojik durumları keşfetmek söz konusu olduğunda, benliğin tam ve samimi bir şekilde gözlemlenmesi ertelenemez bir gerekliliktir.</p>\n<p>Tartışmasız bir şekilde, yanlış içsel durumlar doğru yöntemlerle düzeltilebilir.</p>\n<p>İç dünya dış olayları çeken bir mıknatıs olduğu için, yanlış psikolojik durumları psişimizden acilen ve ertelenemez bir şekilde çıkarmamız gerekiyor.</p>\n<p>Bazı istenmeyen olayların doğasını temelde değiştirmek isteniyorsa, yanlış psikolojik durumları düzeltmek vazgeçilmezdir.</p>\n<p>İçimizde bulunan bazı saçma psikolojik durumları ortadan kaldırırsak, belirli olaylarla olan ilişkimizi değiştirmek mümkündür.</p>\n<p>Yıkıcı dışsal durumlar, yanlış içsel durumların akıllıca düzeltilmesiyle zararsız ve hatta yapıcı hale gelebilir.</p>\n<p>Kişi, başına gelen tatsız olayların doğasını, içtenlikle arınarak değiştirebilir. Saçma psikolojik durumları asla düzeltmeyen ve kendini çok güçlü sanan kişi, koşulların kurbanı olur.</p>\n<p>Talihsiz bir varoluşun seyrini değiştirmek istenildiğinde, dağınık iç dünyamıza düzen getirmek hayati önem taşır.</p>\n<p>İnsanlar her şeyden şikayet eder, acı çeker, ağlar, protesto eder, hayatlarını değiştirmek, içinde bulundukları talihsizlikten kurtulmak isterler, ne yazık ki kendileri üzerinde çalışmazlar.</p>\n<p>İnsanlar, iç dünyanın dışsal koşulları çektiğini ve bunlar acı vericiyse, bunun saçma içsel durumlardan kaynaklandığını fark etmek istemezler.</p>\n<p>Dışsal olan, sadece içsel olanın bir yansımasıdır; içsel olarak değişen, yeni bir düzen yaratır.</p>\n<p>Dışsal olaylar, onlara nasıl tepki verdiğimiz kadar asla önemli olamaz.</p>\n<p>Hakaret edene karşı sakin kaldın mı? Benzerlerinin nahoş tezahürlerini memnuniyetle karşıladın mı?</p>\n<p>Sevdiğinin ihanetine nasıl tepki verdin? Kıskançlık zehrine kapıldın mı? Öldürdün mü? Hapiste misin?</p>\n<p>Hastaneler, mezarlıklar, hapishaneler, dışsal olaylara karşı saçma bir şekilde tepki veren samimi ama yanılmış insanlarla dolu.</p>\n<p>Bir insanın hayatta kullanabileceği en iyi silah, doğru bir psikolojik durumdur.</p>\n<p>Uygun içsel durumlar aracılığıyla canavarları etkisiz hale getirebilir ve hainleri maskesini düşürebilirsiniz.</p>\n<p>Yanlış içsel durumlar bizi insanlığın kötülüğünün savunmasız kurbanları yapar.</p>\n<p>Pratik hayattaki en nahoş olaylarla uygun bir iç tutumla yüzleşmeyi öğrenin…</p>\n<p>Hiçbir olayla özdeşleşmeyin; her şeyin geçtiğini unutmayın; hayatı bir film olarak görmeyi öğrenin ve faydalarını alacaksınız…</p>\n<p>Yanlış içsel durumları psişinizden çıkarmazsanız, değersiz olayların sizi felakete sürükleyebileceğini unutmayın.</p>\n<p>Her dışsal olay, tartışmasız bir şekilde uygun bir bilete; yani, kesin psikolojik duruma ihtiyaç duyar.</p>"
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
const url = "src/content/docs/tr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
