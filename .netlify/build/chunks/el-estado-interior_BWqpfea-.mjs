import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "İç Devlet",
  "locale": "tr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. İç Devlet",
    "order": 7
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
    "set:html": "<p>İçsel durumları dışsal olaylarla doğru bir şekilde birleştirmek, akıllıca yaşamayı bilmektir…</p>\n<p>Akıllıca yaşanan her olay, kendine özgü bir içsel durum gerektirir…</p>\n<p>Ne yazık ki, insanlar hayatlarını gözden geçirdiklerinde, hayatın sadece dışsal olaylardan oluştuğunu düşünürler…</p>\n<p>Zavallı insanlar! Şöyle ya da böyle bir olay başlarına gelmeseydi, hayatlarının daha iyi olacağını düşünürler…</p>\n<p>Şansın onlarla karşılaştığını ve mutlu olma fırsatını kaçırdıklarını varsayarlar…</p>\n<p>Kaybedilenlere hayıflanırlar, küçümsedikleri şeylere ağlarlar, eski tökezlemeleri ve felaketleri hatırlayarak inlerler…</p>\n<p>İnsanlar, vejetatif olmanın yaşamak olmadığını ve bilinçli var olma yeteneğinin tamamen Ruh’un içsel durumlarının kalitesine bağlı olduğunu anlamak istemezler…</p>\n<p>Hayatın dışsal olayları ne kadar güzel olursa olsun, o anlarda uygun içsel durumda değilsek, en iyi olaylar bile bize monoton, sıkıcı veya sadece can sıkıcı gelebilir…</p>\n<p>Biri düğün partisini endişeyle bekler, bu bir olaydır, ancak olay anında o kadar endişeli olabilir ki, bundan hiçbir zevk almaz ve her şey bir protokol kadar kurak ve soğuk hale gelir…</p>\n<p>Deneyim bize, bir ziyafete veya baloya katılan herkesin gerçekten zevk almadığını öğretmiştir…</p>\n<p>En iyi kutlamalarda bile her zaman sıkılan biri vardır ve en lezzetli parçalar bazılarını mutlu ederken bazılarını ağlatır…</p>\n<p>Dışsal olayı uygun içsel durumla güvenle birleştirmeyi bilen çok az insan vardır…</p>\n<p>İnsanların bilinçli yaşamayı bilmemesi üzücü: gülmeleri gerektiğinde ağlarlar ve ağlamaları gerektiğinde gülerler…</p>\n<p>Kontrol farklıdır: Bilge insan neşeli olabilir ama asla çılgın bir coşkuyla dolu olmaz; Üzgün ​​ama asla umutsuz ve çökmüş değil… şiddetin ortasında sakin; sefahat içinde perhizkar; şehvet arasında iffetli vb.</p>\n<p>Melankolik ve karamsar insanlar hayat hakkında en kötüsünü düşünürler ve açıkçası yaşamak istemezler…</p>\n<p>Her gün sadece mutsuz olmakla kalmayıp, daha da kötüsü, başkalarının hayatını da acılaştıran insanlar görüyoruz…</p>\n<p>Böylesi insanlar her gün partiden partiye yaşasalar bile değişmezlerdi; psikolojik hastalıklarını içlerinde taşırlar… böyle insanlar kesinlikle sapkın içsel durumlara sahiptir…</p>\n<p>Ancak bu kişiler kendilerini adil, aziz, erdemli, soylu, yardımsever, şehit vb. olarak nitelendirirler.</p>\n<p>Kendilerini çok gören, kendilerini çok seven insanlardır…</p>\n<p>Kendilerine çok acıyan ve her zaman kendi sorumluluklarından kaçmak için kaçış yolları arayan bireyler…</p>\n<p>Böylesi insanlar aşağı duygulara alışkındır ve bu nedenle her gün insanlık dışı psişik unsurlar yarattıkları açıktır.</p>\n<p>Talihsiz olaylar, talihsizlikler, sefalet, borçlar, sorunlar vb., yaşamayı bilmeyen insanların ayrıcalığıdır…</p>\n<p>Herkes zengin bir entelektüel kültür oluşturabilir, ancak doğru yaşamayı öğrenen çok az insan vardır…</p>\n<p>Dışsal olayları bilincin içsel durumlarından ayırmak istediğinizde, somut olarak onurlu bir şekilde var olma yeteneksizliğinizi gösterirsiniz.</p>\n<p>Dışsal olayları ve içsel durumları bilinçli olarak birleştirmeyi öğrenenler, başarı yolunda ilerlerler…</p>"
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
const url = "src/content/docs/tr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
