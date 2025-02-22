import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Različiti Ja",
  "locale": "hr",
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
    "set:html": "<p>Sisavac razuman pogrešno nazvan čovjekom, zapravo ne posjeduje definiranu individualnost.</p>\n<p>Nesumnjivo je taj nedostatak psihološkog jedinstva u humanoidu uzrok toliko poteškoća i gorčina.</p>\n<p>Fizičko tijelo je potpuna cjelina i funkcionira kao organska cjelina, osim ako nije bolesno.</p>\n<p>Međutim, unutarnji život humanoida ni na koji način nije psihološka cjelina.</p>\n<p>Najozbiljnije od svega, unatoč onome što govore razne škole pseudo-ezoterijskog i pseudo-okultističkog tipa, jest nedostatak psihološke organizacije u intimnoj srži svakog subjekta.</p>\n<p>U takvim uvjetima, naravno, ne postoji skladan rad kao cjelina u unutarnjem životu ljudi.</p>\n<p>Humanoid je, što se tiče njegovog unutarnjeg stanja, psihološka mnoštvo, zbroj “ja”.</p>\n<p>Neznalice prosvijetljeni ovog mračnog doba štuju “JA”, obožavaju ga, stavljaju ga na oltare, nazivaju ga “ALTER EGO”, “VIŠE JA”, “BOŽANSKO JA” itd., itd., itd.</p>\n<p>“Sveznalice” ovog mračnog doba u kojem živimo ne žele shvatiti da su “Više Ja” ili “Niže Ja” dva dijela istog pluraliziranog Ega…</p>\n<p>Humanoid zasigurno nema “Trajno JA” već mnoštvo različitih infrahumanih i apsurdnih “ja”.</p>\n<p>Jadna intelektualna životinja pogrešno nazvana čovjekom slična je kući u neredu gdje umjesto jednog gospodara, postoje mnogi sluge koji uvijek žele zapovijedati i raditi što im se prohtije…</p>\n<p>Najveća pogreška jeftinog pseudo-ezoterizma i pseudo-okultizma je pretpostavka da drugi posjeduju ili da se ima “Trajno i Nepromjenjivo JA” bez početka i kraja…</p>\n<p>Ako bi se oni koji tako misle probudili svijesti makar na trenutak, mogli bi jasno sami posvjedočiti da humanoid razuman nikada nije isti dugo vremena…</p>\n<p>Intelektualni sisavac se s psihološkog gledišta neprestano mijenja…</p>\n<p>Misliti da ako se netko zove Luis da je uvijek Luis, ispada kao šala vrlo lošeg ukusa…</p>\n<p>Taj subjekt kojeg zovu Luis ima u sebi druga “ja”, druge egoe, koji se izražavaju kroz njegovu osobnost u različitim trenucima i iako Luis ne voli pohlepu, drugo “ja” u njemu — nazovimo ga Pepe — voli pohlepu i tako dalje…</p>\n<p>Nitko nije isti kontinuirano, stvarno ne treba biti mudar da bi se shvatili brojni mijenjajući se i proturječnosti svakog subjekta…</p>\n<p>Pretpostaviti da netko posjeduje “Trajno i Nepromjenjivo JA” svakako je zlouporaba prema bližnjemu i prema samome sebi…</p>\n<p>Unutar svake osobe žive mnoge osobe, mnoga “ja”, to može provjeriti sama i izravno svaka osoba probuđena, svjesna…</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
