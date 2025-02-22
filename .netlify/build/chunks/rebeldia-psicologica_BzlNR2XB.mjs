import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Психолошка побуна",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Психолошка побуна",
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
    "set:html": "<p>Nije na odmet podsetiti naše čitaoce da unutar nas postoji matematička tačka…</p>\n<p>Nesumnjivo, ta tačka se nikada ne nalazi u prošlosti, niti u budućnosti…</p>\n<p>Ko želi da otkrije tu misterioznu tačku, mora je tražiti ovde i sada, unutar sebe, upravo u ovom trenutku, ni sekund unapred, ni sekund unazad…</p>\n<p>Dve grede, vertikalna i horizontalna, Svetog Krsta, susreću se u toj tački…</p>\n<p>Nalazimo se, dakle, iz trenutka u trenutak pred dva Puta: Horizontalnim i Vertikalnim…</p>\n<p>Očigledno je da je Horizontalni put vrlo „sladunjav“, njime idu „Mile i svi ostali“, „Žika i svi koji pristižu“, „Đura i svi redom“…</p>\n<p>Očigledno je da je Vertikalni put drugačiji; to je put inteligentnih buntovnika, put Revolucionara…</p>\n<p>Kada se čovek seća sebe, kada radi na sebi, kada se ne identifikuje sa svim problemima i mukama života, on zapravo ide Vertikalnim putem…</p>\n<p>Zaista, nikada nije lak zadatak eliminisati negativne emocije; izgubiti svaku identifikaciju sa sopstvenim tokom života; problemima svake vrste, poslovima, dugovima, plaćanjem računa, hipoteka, telefona, vode, struje, itd., itd., itd.</p>\n<p>Nezaposleni, oni koji su iz ovog ili onog razloga izgubili posao, očigledno pate zbog nedostatka novca i zaboraviti svoj slučaj, ne brinuti se, niti se identifikovati sa sopstvenim problemom, zaista je užasno teško.</p>\n<p>Oni koji pate, oni koji plaču, oni koji su bili žrtve neke izdaje, lošeg postupka u životu, nezahvalnosti, klevete ili neke prevare, zaista zaboravljaju na sebe, na svoje stvarno intimno Biće, potpuno se identifikuju sa svojom moralnom tragedijom…</p>\n<p>Rad na sebi je fundamentalna karakteristika Vertikalnog Puta. Niko ne bi mogao da korača Putem Velike Pobune ako nikada ne bi radio na sebi…</p>\n<p>Rad na koji se pozivamo je psihološkog tipa; bavi se određenom transformacijom sadašnjeg trenutka u kojem se nalazimo. Potrebno je da naučimo da živimo iz trenutka u trenutak…</p>\n<p>Na primer, osoba koja je očajna zbog nekog sentimentalnog, ekonomskog ili političkog problema, očigledno je zaboravila na sebe…</p>\n<p>Ta osoba, ako se zaustavi na trenutak, ako posmatra situaciju i pokuša da se seti sebe i onda se potrudi da razume smisao svog stava…</p>\n<p>Ako malo razmisli, ako pomisli na to da sve prolazi; da je život iluzoran, prolazan i da smrt pretvara u pepeo sve taštine sveta…</p>\n<p>Ako shvati da njegov problem u suštini nije ništa više od „vatre od slame“, varke koja se brzo gasi, videće iznenada sa iznenađenjem da se sve promenilo…</p>\n<p>Transformacija mehaničkih reakcija je moguća putem logičke konfrontacije i Intimne Samo-Refleksije Bića…</p>\n<p>Očigledno je da ljudi reaguju mehanički na različite okolnosti života…</p>\n<p>Jadni ljudi! Obično uvek postaju žrtve. Kada im neko laska, oni se smeju; kada ih ponižavaju, oni pate. Vređaju ako su uvređeni; povređuju ako su povređeni; nikada nisu slobodni; njihovi bližnji imaju moć da ih prenesu od radosti do tuge, od nade do očaja.</p>\n<p>Svaka osoba od onih koje idu Horizontalnim Putem, liči na muzički instrument, gde svaki od njegovih bližnjih svira ono što mu padne na pamet…</p>\n<p>Ko nauči da transformiše mehaničke reakcije, zapravo se upušta u „Vertikalni Put“.</p>\n<p>Ovo predstavlja fundamentalnu promenu u „Nivou Bića“, izvanredan rezultat „Psihološke Pobune“.</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
