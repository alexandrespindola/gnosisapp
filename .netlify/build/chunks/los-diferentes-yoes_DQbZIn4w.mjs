import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Farklı Benlikler",
  "locale": "tr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Farklı Benlikler",
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
    "set:html": "<p>Yanlışlıkla insan olarak adlandırılan Rasyonel Memeli, aslında tanımlı bir bireyselliğe sahip değildir.</p>\n<p>Tartışmasız bir şekilde, insansıdaki bu Psikolojik birlik eksikliği, pek çok zorluğun ve acılığın nedenidir.</p>\n<p>Fiziksel beden tam bir birimdir ve hasta olmadığı sürece organik bir bütün olarak çalışır.</p>\n<p>Ancak insansının iç yaşamı hiçbir şekilde psikolojik bir birlik değildir.</p>\n<p>Tüm bunların en kötüsü, çeşitli Sahte-Ezoterik ve Sahte-Okültist okulların söylediklerine rağmen, her öznenin derinliklerinde Psikolojik organizasyonun olmamasıdır.</p>\n<p>Elbette bu tür koşullarda, insanların iç yaşamında bir bütün olarak uyumlu bir çalışma yoktur.</p>\n<p>İnsansı, iç durumu açısından, psikolojik bir çokluktur, bir “Ben”ler toplamıdır.</p>\n<p>Bu karanlık çağın aydınlanmış cahilleri, “BEN”e taparlar, onu tanrılaştırırlar, onu sunaklara koyarlar, ona “ALTER EGO”, “YÜCE BEN”, “İLÂHÎ BEN” vb. derler.</p>\n<p>İçinde yaşadığımız bu kara çağın “Bilgiçleri”, “Yüce Ben” veya “Aşağı Ben”in, aynı çoğullaştırılmış Ego’nun iki bölümü olduğunu anlamak istemezler…</p>\n<p>İnsansının kesinlikle “Kalıcı bir BEN”i değil, çok sayıda farklı İnsanlıkdışı ve saçma “Ben”i vardır.</p>\n<p>Yanlışlıkla insan olarak adlandırılan zavallı entelektüel hayvan, bir efendi yerine, sürekli emir vermek ve canları ne isterse onu yapmak isteyen birçok hizmetçinin olduğu karmakarışık bir eve benzer…</p>\n<p>Ucuz Sahte-Ezoterizm ve Sahte-Okültizmin en büyük hatası, başkalarının sahip olduğunu veya bir kişinin başlangıcı ve sonu olmayan “Kalıcı ve Değişmez bir BEN”e sahip olduğunu varsaymaktır…</p>\n<p>Eğer böyle düşünenler bir anlığına bile bilinçlenseydi, rasyonel insansının uzun süre aynı olmadığını açıkça kendileri kanıtlayabilirlerdi…</p>\n<p>Entelektüel memeli psikolojik açıdan sürekli değişmektedir…</p>\n<p>Bir kişi Luis olarak adlandırılıyorsa, her zaman Luis olduğunu düşünmek, çok kötü bir şaka gibi bir şeydir…</p>\n<p>Luis olarak adlandırılan bu öznenin içinde, kişiliği aracılığıyla farklı zamanlarda ifade bulan başka “Ben”leri, başka egoları vardır ve Luis açgözlülükten hoşlanmasa da, içindeki başka bir “Ben” -ona Pepe diyelim- açgözlülükten hoşlanır ve bu böyle devam eder…</p>\n<p>Hiç kimse sürekli olarak aynı değildir, aslında her öznenin sayısız değişimini ve çelişkisini tam olarak anlamak için çok bilge olmaya gerek yoktur…</p>\n<p>Birinin “Kalıcı ve Değişmez bir BEN”e sahip olduğunu varsaymak, kesinlikle komşuya ve kendine karşı bir istismara eşdeğerdir…</p>\n<p>Her insanın içinde birçok insan, birçok “Ben” yaşar, bunu uyanık, bilinçli herhangi bir kişi kendisi ve doğrudan doğrulayabilir…</p>"
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
const url = "src/content/docs/tr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/tr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
