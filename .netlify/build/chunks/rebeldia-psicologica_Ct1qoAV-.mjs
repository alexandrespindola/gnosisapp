import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psihološka pobuna",
  "locale": "bs",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Psihološka pobuna",
    "order": 3
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
    "set:html": "<p>Nije na odmet podsjetiti naše čitatelje da unutar nas samih postoji matematička točka…</p>\n<p>Nesumnjivo, ta točka se nikada ne nalazi u prošlosti, niti u budućnosti…</p>\n<p>Tko želi otkriti tu tajanstvenu točku, mora je tražiti ovdje i sada, unutar sebe, točno u ovom trenutku, ni sekunde unaprijed, ni sekunde unazad…</p>\n<p>Dva štapa, okomiti i vodoravni, Svetog Križa, susreću se u ovoj točki…</p>\n<p>Nalazimo se, dakle, iz trenutka u trenutak pred dva Puta: vodoravnim i okomitim…</p>\n<p>Očito je da je vodoravni vrlo “slađunjav”, njime hodaju “Ivica i svi ljudi”, “Mile i svi koji dolaze”, “Ivo i cijeli svijet”…</p>\n<p>Očito je da je okomiti drugačiji; to je put inteligentnih buntovnika, put revolucionara…</p>\n<p>Kada se čovjek sjeti samoga sebe, kada radi na sebi, kada se ne poistovjećuje sa svim problemima i tugama života, zapravo ide okomitim Putem…</p>\n<p>Doista, nikada nije lako ukloniti negativne emocije; izgubiti svaku identifikaciju s vlastitim životnim tokom; problemima svih vrsta, poslovima, dugovima, plaćanjem računa, hipotekama, telefonom, vodom, strujom, itd., itd., itd.</p>\n<p>Nezaposleni, oni koji su iz ovog ili onog razloga izgubili posao, očito pate zbog nedostatka novca, a zaboraviti svoj slučaj, ne brinuti se niti se poistovjetiti sa svojim problemom, zapravo je strahovito teško.</p>\n<p>Oni koji pate, koji plaču, oni koji su bili žrtve neke izdaje, loše naplate u životu, nezahvalnosti, klevete ili neke prevare, doista zaboravljaju na sebe, na svoje stvarno intimno Biće, potpuno se poistovjećuju sa svojom moralnom tragedijom…</p>\n<p>Rad na sebi je temeljna karakteristika okomitog Puta. Nitko ne bi mogao kročiti Putem Velike Pobune, ako nikada ne bi radio na sebi…</p>\n<p>Rad o kojem govorimo je psihološkog tipa; bavi se određenom transformacijom sadašnjeg trenutka u kojem se nalazimo. Moramo naučiti živjeti iz trenutka u trenutak…</p>\n<p>Na primjer, osoba koja je očajna zbog nekog sentimentalnog, ekonomskog ili političkog problema, očito je zaboravila na sebe…</p>\n<p>Takva osoba, ako zastane na trenutak, ako promotri situaciju i pokuša se sjetiti sebe, a zatim se potrudi razumjeti smisao svog stava…</p>\n<p>Ako malo razmisli, ako pomisli da sve prolazi; da je život iluzoran, prolazan i da smrt svodi na pepeo sve taštine svijeta…</p>\n<p>Ako shvati da njegov problem u biti nije ništa više od “vatre od slame”, varljiva vatra koja se ubrzo gasi, iznenada će s iznenađenjem vidjeti da se sve promijenilo…</p>\n<p>Transformacija mehaničkih reakcija moguća je logičkom konfrontacijom i Intimnom Samo-Refleksijom Bića…</p>\n<p>Očito je da ljudi mehanički reagiraju na različite životne okolnosti…</p>\n<p>Jadni ljudi! Uvijek se pretvaraju u žrtve. Kada im netko laska, smiješe se; kada ih ponižavaju, pate. Vrijeđaju ako ih se vrijeđa; ranjavaju ako ih se ranjava; nikada nisu slobodni; njihovi bližnji imaju moć voditi ih od radosti do tuge, od nade do očaja.</p>\n<p>Svaka osoba od onih koje idu vodoravnim Putem, nalikuje glazbenom instrumentu, gdje svatko od njezinih bližnjih svira što mu se prohtije…</p>\n<p>Tko nauči transformirati mehaničke odnose, zapravo ulazi na “okomiti Put”.</p>\n<p>Ovo predstavlja temeljnu promjenu u “Razini Bića”, izvanredan rezultat “Psihološke Pobune”.</p>"
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
const url = "src/content/docs/bs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
