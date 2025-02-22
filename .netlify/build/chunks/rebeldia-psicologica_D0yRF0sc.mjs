import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Psihološka pobuna",
  "locale": "hr",
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
    "set:html": "<p>Nije naodmet podsjetiti naše čitatelje da unutar nas samih postoji matematička točka…</p>\n<p>Nesumnjivo, ta se točka nikada ne nalazi u prošlosti, niti u budućnosti…</p>\n<p>Tko želi otkriti tu misterioznu točku, mora je potražiti ovdje i sada, unutar sebe, točno u ovom trenutku, ni sekundu unaprijed, ni sekundu unatrag…</p>\n<p>Dvije crte, okomita i vodoravna, Svetog Križa susreću se u ovoj točki…</p>\n<p>Nalazimo se, dakle, iz trenutka u trenutak pred dva Puta: vodoravnim i okomitim…</p>\n<p>Očito je da je vodoravni vrlo “sladunjav”, njime hodaju “Ivica i sva ekipa”, “Mile i svi koji stižu”, “Gospodin Štef i cijeli svijet”…</p>\n<p>Očito je da je okomiti drugačiji; to je put inteligentnih buntovnika, put revolucionara…</p>\n<p>Kada se čovjek sjeti sebe, kada radi na sebi, kada se ne poistovjećuje sa svim problemima i tugama života, zapravo ide okomitim Putem…</p>\n<p>Svakako nije lako eliminirati negativne emocije; izgubiti svu identifikaciju s vlastitim životnim putem; problemi svih vrsta, poslovi, dugovi, plaćanje rata, hipoteke, telefon, voda, struja, itd., itd., itd.</p>\n<p>Nezaposleni, oni koji su iz ovog ili onog razloga izgubili posao, očito pate zbog nedostatka novca i zaboraviti svoj slučaj, ne brinuti se, niti se poistovjećivati ​​s vlastitim problemom, zapravo je užasno teško.</p>\n<p>Oni koji pate, oni koji plaču, oni koji su bili žrtve neke izdaje, lošeg postupanja u životu, nezahvalnosti, klevete ili neke prijevare, doista zaboravljaju na sebe, na svoje stvarno unutarnje Biće, potpuno se poistovjećuju sa svojom moralnom tragedijom…</p>\n<p>Rad na sebi temeljna je karakteristika okomitog Puta. Nitko ne bi mogao kročiti Putom Velike Pobune ako nikada ne bi radio na sebi…</p>\n<p>Rad o kojem govorimo je psihološkog tipa; bavi se određenom transformacijom sadašnjeg trenutka u kojem se nalazimo. Moramo naučiti živjeti iz trenutka u trenutak…</p>\n<p>Na primjer, osoba koja je očajna zbog nekog sentimentalnog, ekonomskog ili političkog problema očito je zaboravila na sebe…</p>\n<p>Takva osoba, ako zastane na trenutak, ako promatra situaciju i pokuša se sjetiti sebe, a zatim se potrudi razumjeti smisao svog stava…</p>\n<p>Ako malo razmisli, ako razmišlja o tome da sve prolazi; da je život iluzoran, prolazan i da smrt pretvara u pepeo sve taštine svijeta…</p>\n<p>Ako shvati da njegov problem u biti nije ništa više od “vatre od slame”, varljive vatre koja se ubrzo gasi, iznenada će sa iznenađenjem vidjeti da se sve promijenilo…</p>\n<p>Transformirati mehaničke reakcije moguće je logičnom konfrontacijom i Intimnom Samo-Refleksijom Bića…</p>\n<p>Očito je da ljudi reagiraju mehanički na različite životne okolnosti…</p>\n<p>Jadni ljudi! Uvijek se obično pretvore u žrtve. Kad im netko laska, smiješe se; kad ih ponižavaju, pate. Vrijeđaju ako ih se vrijeđa; ranjavaju ako ih se ranjava; nikada nisu slobodni; njihovi bližnji imaju moć voditi ih od radosti do tuge, od nade do očaja.</p>\n<p>Svaka osoba od onih koji idu vodoravnim Putem nalikuje glazbenom instrumentu, gdje svaki od njegovih bližnjih svira što mu padne na pamet…</p>\n<p>Tko nauči transformirati mehaničke odnose, zapravo kreće “okomitim Putem”.</p>\n<p>Ovo predstavlja temeljnu promjenu u “Razini Bića”, izvanredan rezultat “Psihološke Pobune”.</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
