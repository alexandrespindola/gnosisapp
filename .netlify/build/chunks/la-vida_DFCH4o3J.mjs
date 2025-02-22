import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Hayat",
  "locale": "tr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "6. Hayat",
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
    "set:html": "<p>Pratik yaşam alanında her zaman şaşırtan zıtlıklar keşfederiz. Muhteşem evlere ve birçok arkadaşa sahip varlıklı insanlar, bazen korkunç derecede acı çekerler. .. Kazma kürekle çalışan mütevazı işçiler veya orta sınıf insanlar, bazen tam bir mutluluk içinde yaşarlar.</p>\n<p>Birçok milyarder cinsel iktidarsızlıktan muzdariptir ve zengin kadınlar kocalarının sadakatsizliğine acı bir şekilde ağlarlar…</p>\n<p>Yeryüzünün zenginleri, altın kafesler içindeki akbabalara benziyor, bu zamanlarda “koruma” olmadan yaşayamazlar…</p>\n<p>Devlet adamları zincirler sürükler, asla özgür değiller, her yerde dişlerine kadar silahlı insanlarla çevrilidirler…</p>\n<p>Bu durumu daha yakından inceleyelim. Hayatın ne olduğunu bilmemiz gerekiyor. Herkes istediği gibi fikir beyan etmekte özgürdür…</p>\n<p>Ne derlerse desinler, kesinlikle kimse bir şey bilmiyor, hayat kimsenin anlamadığı bir sorun olarak karşımıza çıkıyor…</p>\n<p>İnsanlar bize hayat hikayelerini ücretsiz olarak anlatmak istediklerinde, olayları, adları ve soyadlarını, tarihleri ​​vb. sıralarlar ve anlattıklarından memnuniyet duyarlar…</p>\n<p>Bu zavallı insanlar, anlattıklarının eksik olduğunun farkında değiller çünkü olaylar, isimler ve tarihler filmin sadece dış görünüşü, iç görünüşü eksik…</p>\n<p>“Bilinç hallerini” bilmek acil bir ihtiyaçtır, her olaya şu ya da bu ruh hali karşılık gelir.</p>\n<p>Haller içseldir ve olaylar dışsaldır, dışsal olaylar her şey değildir…</p>\n<p>İç hallerinden iyi veya kötü eğilimler, endişeler, depresyon, batıl inanç, korku, şüphe, merhamet, kendini beğenmişlik, kendini aşırı değerlendirme anlaşılmalıdır; mutlu hissetme halleri, neşe halleri vb., vb., vb.</p>\n<p>Şüphesiz, iç haller dış olaylarla tam olarak örtüşebilir veya bunlardan kaynaklanabilir ya da onlarla hiçbir ilişkisi olmayabilir…</p>\n<p>Her durumda, haller ve olaylar farklıdır. Olaylar her zaman ilgili hallerle tam olarak örtüşmez.</p>\n<p>Hoş bir olayın iç hali, olayın kendisiyle örtüşmeyebilir. Hoş olmayan bir olayın iç hali, olayın kendisiyle örtüşmeyebilir. Uzun zamandır beklenen olaylar geldiğinde, bir şeylerin eksik olduğunu hissederiz…</p>\n<p>Kesinlikle, dış olayla birleşmesi gereken ilgili iç hal eksikti…</p>\n<p>Çoğu zaman beklenmedik bir olay bize en iyi anları yaşatır.</p>"
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
const url = "src/content/docs/tr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/la-vida.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
