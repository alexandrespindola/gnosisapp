import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Različiti Ja",
  "locale": "bs",
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
    "set:html": "<p>Razumni sisavac, pogrešno nazvan čovjekom, zapravo ne posjeduje definiranu individualnost.</p>\n<p>Nesumnjivo je taj nedostatak psihološkog jedinstva u humanoida uzrok tolikih poteškoća i gorčina.</p>\n<p>Fizičko tijelo je cjelovita jedinica i funkcionira kao organska cjelina, osim ako nije bolesno.</p>\n<p>Međutim, unutarnji život humanoida ni u kojem slučaju nije psihološka cjelina.</p>\n<p>Najozbiljnija stvar od svega ovoga, usprkos onome što govore razne škole pseudo-ezoterijskog i pseudo-okultističkog tipa, jest nedostatak psihološke organizacije u intimnoj srži svakog subjekta.</p>\n<p>U takvim uvjetima, zasigurno, ne postoji harmoničan rad kao cjelina u unutarnjem životu ljudi.</p>\n<p>Humanoid je, u odnosu na svoje unutarnje stanje, psihološka mnoštvo, zbroj “ja”.</p>\n<p>Neuki, a obrazovani ljudi ovog mračnog doba, štuju “JA”, obožavaju ga, stavljaju ga na oltare, nazivaju ga “ALTER EGO”, “VIŠE JA”, “BOŽANSKO JA”, itd., itd., itd.</p>\n<p>“Pametnjakovići” ovog mračnog doba u kojem živimo ne žele shvatiti da su “Više Ja” ili “Niže Ja” dva dijela istog pluraliziranog Ega…</p>\n<p>Humanoid zasigurno nema “TRAJNO JA” nego mnoštvo različitih infrahumanih i apsurdnih “ja”.</p>\n<p>Jadna intelektualna životinja, pogrešno nazvana čovjekom, slična je kući u neredu, gdje umjesto jednog gospodara, postoji mnogo slugu koji uvijek žele zapovijedati i raditi ono što im se prohtije…</p>\n<p>Najveća pogreška jeftinog pseudo-ezoterizma i pseudo-okultizma jest pretpostavka da drugi posjeduju ili da se ima “TRAJNO i NEPROMJENJIVO JA” bez početka i bez kraja…</p>\n<p>Ako bi oni koji tako misle probudili svijest, makar i na trenutak, mogli bi jasno sami svjedočiti da razumni humanoid nikada nije isti zadugo…</p>\n<p>Intelektualni sisavac se s psihološkog gledišta neprestano mijenja…</p>\n<p>Misliti da ako se osoba zove Luis, da je uvijek Luis, zvuči kao šala vrlo lošeg ukusa…</p>\n<p>Taj subjekt kojeg se zove Luis ima u sebi druga “ja”, druge egoe, koji se izražavaju kroz njegovu osobnost u različitim trenucima i iako Luis ne voli pohlepu, drugo “ja” u njemu – nazovimo ga Pepe – voli pohlepu i tako redom…</p>\n<p>Nitko nije isti kontinuirano, zapravo ne treba biti mudar da bi se u potpunosti shvatilo bezbroj promjena i proturječnosti svakog subjekta…</p>\n<p>Pretpostaviti da netko posjeduje “TRAJNO i NEPROMJENJIVO JA” zasigurno je zlouporaba prema bližnjemu i prema samome sebi…</p>\n<p>Unutar svake osobe žive mnoge osobe, mnoga “ja”, to može provjeriti sam i izravno svaka probuđena, svjesna osoba…</p>"
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
const url = "src/content/docs/bs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
