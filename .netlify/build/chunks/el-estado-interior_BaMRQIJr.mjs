import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Stan Wewnętrzny",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Stan Wewnętrzny",
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
    "set:html": "<p>Umiejętne łączenie stanów wewnętrznych z wydarzeniami zewnętrznymi to inteligentne życie…</p>\n<p>Każde inteligentnie przeżyte wydarzenie wymaga odpowiadającego mu specyficznego stanu wewnętrznego…</p>\n<p>Niestety, ludzie, analizując swoje życie, myślą, że składa się ono wyłącznie z wydarzeń zewnętrznych…</p>\n<p>Biedni ludzie! Myślą, że gdyby takie czy inne wydarzenie im się nie przydarzyło, ich życie byłoby lepsze…</p>\n<p>Uważają, że szczęście ich ominęło i stracili szansę na bycie szczęśliwymi…</p>\n<p>Żałują tego, co stracili, płaczą nad tym, czym pogardzili, jęczą, wspominając stare potknięcia i nieszczęścia…</p>\n<p>Ludzie nie chcą zdać sobie sprawy, że wegetacja to nie życie i że zdolność do świadomego istnienia zależy wyłącznie od jakości wewnętrznych stanów Duszy…</p>\n<p>Nie ma znaczenia, jak piękne są zewnętrzne wydarzenia w życiu, jeśli w takich momentach nie znajdujemy się w odpowiednim stanie wewnętrznym, najlepsze wydarzenia mogą wydawać się monotonne, męczące lub po prostu nudne…</p>\n<p>Ktoś z niecierpliwością czeka na przyjęcie weselne, to wydarzenie, ale może się zdarzyć, że w konkretnym momencie wydarzenia będzie tak zmartwiony, że naprawdę nie poczuje w tym żadnej przyjemności i wszystko stanie się tak jałowe i zimne jak protokół…</p>\n<p>Doświadczenie nauczyło nas, że nie wszyscy ludzie, którzy uczestniczą w bankiecie lub tańcu, naprawdę się bawią…</p>\n<p>Nigdy nie brakuje nudziarza na najlepszej imprezie, a najsmaczniejsze potrawy jednych uszczęśliwiają, a innych doprowadzają do płaczu…</p>\n<p>Bardzo rzadko zdarzają się osoby, które potrafią z ufnością łączyć wydarzenie zewnętrzne z odpowiednim stanem wewnętrznym…</p>\n<p>Szkoda, że ludzie nie potrafią żyć świadomie: płaczą, gdy powinni się śmiać, i śmieją się, gdy powinni płakać…</p>\n<p>Kontrola to coś innego: Mędrzec może być radosny, ale nigdy nie pełen szalonego szaleństwa; smutny, ale nigdy zrozpaczony i przygnębiony… spokojny pośród przemocy; abstynent na orgii; czysty pośród żądzy, itd.</p>\n<p>Osoby melancholijne i pesymistyczne myślą o życiu najgorzej i szczerze nie chcą żyć…</p>\n<p>Codziennie widzimy ludzi, którzy nie tylko są nieszczęśliwi, ale na dodatek – co gorsza – zatruwają życie innym…</p>\n<p>Tacy ludzie nie zmieniliby się, nawet gdyby codziennie żyli od imprezy do imprezy; chorobę psychiczną noszą w sobie… takie osoby posiadają definitywnie perwersyjne stany wewnętrzne…</p>\n<p>Jednak ci ludzie określają się jako sprawiedliwi, święci, cnotliwi, szlachetni, uczynni, męczennicy, itd., itd., itd.</p>\n<p>To ludzie, którzy mają o sobie zbyt wysokie mniemanie; osoby, które bardzo siebie kochają…</p>\n<p>Osoby, które bardzo się nad sobą użalają i zawsze szukają wymówek, by uniknąć własnej odpowiedzialności…</p>\n<p>Osoby takie są przyzwyczajone do niższych emocji i jest oczywiste, że z tego powodu codziennie tworzą psychiczne elementy podludzkie.</p>\n<p>Nieszczęśliwe wydarzenia, niepowodzenia losu, nędza, długi, problemy itp. są wyłączną domeną osób, które nie potrafią żyć…</p>\n<p>Każdy może zdobyć bogatą kulturę intelektualną, ale bardzo niewiele osób nauczyło się żyć uczciwie…</p>\n<p>Kiedy ktoś chce oddzielić wydarzenia zewnętrzne od stanów wewnętrznych świadomości, konkretnie demonstruje swoją niezdolność do godnego istnienia.</p>\n<p>Ci, którzy uczą się świadomie łączyć wydarzenia zewnętrzne i stany wewnętrzne, podążają drogą sukcesu…</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
