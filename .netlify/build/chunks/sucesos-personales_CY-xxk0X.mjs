import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Wydarzenia Osobiste",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Wydarzenia Osobiste",
    "order": 9
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
    "set:html": "<p>Dogłębna, intymna autoobserwacja Jaźni jest nieodzowna, gdy chodzi o odkrywanie błędnych stanów psychologicznych.</p>\n<p>Niewątpliwie błędne stany wewnętrzne można korygować za pomocą właściwych procedur.</p>\n<p>Ponieważ życie wewnętrzne jest magnesem, który przyciąga zdarzenia zewnętrzne, pilnie i bez zwłoki musimy usunąć z naszej psychiki błędne stany psychologiczne.</p>\n<p>Korygowanie błędnych stanów psychologicznych jest niezbędne, gdy chce się zasadniczo zmienić naturę pewnych niepożądanych zdarzeń.</p>\n<p>Zmiana naszej relacji z określonymi zdarzeniami jest możliwa, jeśli usuniemy z naszego wnętrza pewne absurdalne stany psychologiczne.</p>\n<p>Destrukcyjne sytuacje zewnętrzne mogłyby stać się nieszkodliwe, a nawet konstruktywne, dzięki inteligentnej korekcie błędnych stanów wewnętrznych.</p>\n<p>Można zmienić naturę nieprzyjemnych zdarzeń, które nas spotykają, gdy się wewnętrznie oczyścimy. Ten, kto nigdy nie koryguje absurdalnych stanów psychologicznych, wierząc, że jest bardzo silny, staje się ofiarą okoliczności.</p>\n<p>Uporządkowanie naszego zabałaganionego wewnętrznego domu jest niezbędne, gdy chce się zmienić bieg nieszczęsnego życia.</p>\n<p>Ludzie narzekają na wszystko, cierpią, płaczą, protestują, chcieliby zmienić życie, wydostać się z nieszczęścia, w którym się znajdują, niestety nie pracują nad sobą.</p>\n<p>Ludzie nie chcą zdać sobie sprawy, że życie wewnętrzne przyciąga okoliczności zewnętrzne, a jeśli są one bolesne, to z powodu absurdalnych stanów wewnętrznych.</p>\n<p>To, co zewnętrzne, jest tylko odzwierciedleniem tego, co wewnętrzne, ten, kto zmienia się wewnętrznie, zapoczątkowuje nowy porządek rzeczy.</p>\n<p>Zdarzenia zewnętrzne nigdy nie byłyby tak ważne, jak sposób reagowania na nie.</p>\n<p>Czy pozostałeś spokojny wobec obelżywego? Czy z zadowoleniem przyjąłeś nieprzyjemne przejawy ze strony bliźnich?</p>\n<p>Jak zareagowałeś na niewierność ukochanej osoby? Czy dałeś się ponieść jadowi zazdrości? Zabiłeś? Jesteś w więzieniu?</p>\n<p>Szpitale, cmentarze lub panteony, więzienia są pełne szczerych osób w błędzie, które zareagowały w absurdalny sposób na wydarzenia zewnętrzne.</p>\n<p>Najlepszą bronią, jaką człowiek może użyć w życiu, jest właściwy stan psychologiczny.</p>\n<p>Można rozbroić bestie i zdemaskować zdrajców za pomocą odpowiednich stanów wewnętrznych.</p>\n<p>Błędne stany wewnętrzne czynią nas bezbronnymi ofiarami ludzkiej przewrotności.</p>\n<p>Nauczcie się stawiać czoła najbardziej nieprzyjemnym wydarzeniom w życiu praktycznym z odpowiednią postawą wewnętrzną…</p>\n<p>Nie identyfikujcie się z żadnym wydarzeniem; pamiętajcie, że wszystko przemija; nauczcie się postrzegać życie jako film, a otrzymacie korzyści…</p>\n<p>Nie zapominajcie, że wydarzenia bez żadnej wartości mogą doprowadzić was do nieszczęścia, jeśli nie usuniecie z waszej psychiki błędnych stanów wewnętrznych.</p>\n<p>Każde zdarzenie zewnętrzne niewątpliwie potrzebuje odpowiedniego biletu; to znaczy precyzyjnego stanu psychologicznego.</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
