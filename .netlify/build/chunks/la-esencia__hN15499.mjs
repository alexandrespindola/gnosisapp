import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Esencja",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. Esencja",
    "order": 4
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
    "set:html": "<p>Tym, co czyni każdego nowo narodzonego pięknego i uroczego, jest jego Esencja; ona sama w sobie stanowi jego prawdziwą rzeczywistość…</p>\n<p>Normalny wzrost Esencji w każdym stworzeniu jest z pewnością bardzo szczątkowy, początkujący…</p>\n<p>Ciało ludzkie rośnie i rozwija się zgodnie z biologicznymi prawami gatunku, jednak takie możliwości same w sobie są bardzo ograniczone dla Esencji…</p>\n<p>Niewątpliwie Esencja może rosnąć sama z siebie, bez pomocy, w bardzo małym stopniu…</p>\n<p>Mówiąc szczerze i bez ogródek, powiemy, że spontaniczny i naturalny wzrost Esencji jest możliwy tylko w ciągu pierwszych trzech, czterech i pięciu lat życia, czyli w pierwszym etapie życia…</p>\n<p>Ludzie myślą, że wzrost i rozwój Esencji zawsze odbywa się w sposób ciągły, zgodnie z mechaniką ewolucji, ale Uniwersalny Gnostycyzm wyraźnie uczy, że tak nie jest…</p>\n<p>Aby Esencja rosła bardziej, musi się wydarzyć coś bardzo specjalnego, coś nowego trzeba zrobić.</p>\n<p>Chcę się w sposób stanowczy odnieść do pracy nad sobą. Rozwój Esencji jest możliwy tylko na podstawie świadomej pracy i dobrowolnego cierpienia…</p>\n<p>Konieczne jest zrozumienie, że ta praca nie odnosi się do kwestii zawodu, banków, stolarstwa, murarstwa, naprawy linii kolejowych lub spraw biurowych…</p>\n<p>Ta praca jest dla każdej osoby, która rozwinęła osobowość; chodzi o coś psychologicznego…</p>\n<p>Wszyscy wiemy, że mamy w sobie to, co nazywa się EGO, JA, MOJE JA, SIEBIE…</p>\n<p>Niestety, Esencja jest uwięziona, zamknięta w EGO i to jest godne pożałowania.</p>\n<p>Rozpuszczenie Psychologicznego JA, dezintegracja jego niepożądanych elementów, jest pilne, niecierpiące zwłoki, nieodkładalne… taki jest sens pracy nad sobą.</p>\n<p>Nigdy nie moglibyśmy uwolnić Esencji bez wcześniejszej dezintegracji Psychologicznego JA…</p>\n<p>W Esencji jest Religia, BUDDHA, Mądrość, cząstki bólu naszego Ojca, który jest w Niebie i wszystkie dane, których potrzebujemy do INTYMNEJ SAMOREALIZACJI BYTU.</p>\n<p>Nikt nie mógłby unicestwić Psychologicznego JA bez wcześniejszego wyeliminowania nieludzkich elementów, które nosimy w sobie…</p>\n<p>Musimy obrócić w popiół okrucieństwo potworne tych czasów: zawiść, która niestety stała się tajnym motorem działania; nieznośną chciwość, która uczyniła życie tak gorzkim: obrzydliwe oszczerstwa; oszczerstwo, które powoduje tyle tragedii; pijaństwo; brudną żądzę, która tak brzydko pachnie; itd., itd., itd.</p>\n<p>W miarę jak wszystkie te obrzydliwości zamieniają się w kosmiczny pył, Esencja, oprócz emancypacji, będzie rosła i rozwijała się harmonijnie…</p>\n<p>Niewątpliwie, gdy Psychologiczne JA umiera, w nas jaśnieje Esencja…</p>\n<p>Wolna Esencja obdarza nas wewnętrznym pięknem; z tego piękna emanuje doskonałe szczęście i prawdziwa Miłość…</p>\n<p>Esencja posiada wiele cech doskonałości i niezwykłe naturalne moce…</p>\n<p>Kiedy „Umieramy w Sobie”, kiedy rozpuszczamy Psychologiczne JA, cieszymy się cennymi zmysłami i mocami Esencji…</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
