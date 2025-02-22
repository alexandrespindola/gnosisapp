import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Različiti Ja",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Različiti Ja",
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
    "set:html": "<p>Razumni sisar, pogrešno nazvan čovekom, zapravo ne poseduje definisanu individualnost.</p>\n<p>Nesumnjivo je taj nedostatak psihološkog jedinstva u humanoidu uzrok tolikih poteškoća i gorčina.</p>\n<p>Fizičko telo je potpuna jedinica i funkcioniše kao organska celina, osim ako nije bolesno.</p>\n<p>Međutim, unutrašnji život humanoida ni u kom slučaju nije psihološka celina.</p>\n<p>Najozbiljnija stvar od svega toga, uprkos onome što govore različite pseudo-ezoterične i pseudo-okultne škole, jeste odsustvo psihološke organizacije u intimnoj pozadini svakog subjekta.</p>\n<p>U takvim uslovima, sigurno ne postoji harmoničan rad kao celine, u unutrašnjem životu ljudi.</p>\n<p>Humanoid, u pogledu svog unutrašnjeg stanja, je psihološka množina, suma “Ja”.</p>\n<p>Ilustrovani neznalice ovog mračnog doba obožavaju “JA”, ga idolizuju, stavljaju ga na oltare, nazivaju ga “ALTER EGO”, “VIŠE JA”, “BOŽANSKO JA”, itd., itd., itd.</p>\n<p>“Sveznalice” ovog crnog doba u kojem živimo ne žele da shvate da su “Više Ja” ili “Niže Ja” dva dela istog pluralizovanog Ega…</p>\n<p>Humanoid sigurno nema “TRAJNO JA” već mnoštvo različitih infrahumanih i apsurdnih “Ja”.</p>\n<p>Jadna intelektualna životinja, pogrešno nazvana čovekom, slična je kući u neredu gde umesto jednog gospodara, postoji mnogo sluga koji uvek žele da naređuju i rade ono što im se prohte…</p>\n<p>Najveća greška jeftinog pseudo-ezoterizma i pseudo-okultizma je pretpostavka da drugi poseduju ili da se ima “TRAJNO i NEPROMENLJIVO JA” bez početka i bez kraja…</p>\n<p>Ako bi oni koji tako misle probudili svest makar na trenutak, mogli bi jasno da uoče sami, da razumni humanoid nikada nije isti dugo vremena…</p>\n<p>Intelektualni sisar sa psihološke tačke gledišta se neprekidno menja…</p>\n<p>Misliti da ako se neko zove Luis da je uvek Luis, ispadne kao šala veoma lošeg ukusa…</p>\n<p>Taj subjekt koji se zove Luis ima u sebi druge “Ja”, druge egoe, koji se izražavaju kroz njegovu ličnost u različitim trenucima i iako Luis ne voli pohlepu, drugo “Ja” u njemu - nazovimo ga Pepe - voli pohlepu i tako redom…</p>\n<p>Nijedna osoba nije ista na kontinuiran način, zaista ne treba biti mnogo mudar da bi se shvatila suština bezbrojnih promena i protivrečnosti svakog subjekta…</p>\n<p>Pretpostavka da neko poseduje “TRAJNO i NEPROMENLJIVO JA” svakako je ekvivalentna zloupotrebi prema bližnjem i prema sebi samom…</p>\n<p>Unutar svake osobe žive mnoge osobe, mnoga “Ja”, ovo može proveriti samostalno i direktno, svaka probuđena, svesna osoba…</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
