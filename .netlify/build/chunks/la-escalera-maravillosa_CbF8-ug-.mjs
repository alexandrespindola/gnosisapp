import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Cudowne Schody",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. Cudowne Schody",
    "order": 2
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
    "set:html": "<p>Musimy pragnąć prawdziwej zmiany, wyrwać się z tej nudnej rutyny, z tego czysto mechanicznego, męczącego życia…</p>\n<p>Pierwszą rzeczą, którą musimy zrozumieć z całkowitą jasnością, jest to, że każdy z nas, czy to burżuj, czy proletariusz, zamożny czy z klasy średniej, bogaty czy biedny, tak naprawdę znajduje się na takim czy innym Poziomie Istnienia…</p>\n<p>Poziom Istnienia pijaka różni się od poziomu abstynenta, a poziom prostytutki bardzo różni się od poziomu dziewicy. To, co mówimy, jest niepodważalne, niezaprzeczalne…</p>\n<p>Dochodząc do tej części naszego rozdziału, nic nie tracimy, wyobrażając sobie drabinę, która rozciąga się z dołu do góry, pionowo i z bardzo wieloma szczeblami…</p>\n<p>Niewątpliwie na którymś z tych szczebli się znajdujemy; szczeble poniżej będą zajmować ludzie gorsi od nas; szczeble powyżej będą zajmować ludzie lepsi od nas…</p>\n<p>Na tej niezwykłej Płaszczyźnie Pionowej, na tej wspaniałej drabinie, jest jasne, że możemy znaleźć wszystkie Poziomy Istnienia… każda osoba jest inna i nikt nie może temu zaprzeczyć…</p>\n<p>Niewątpliwie nie mówimy teraz o brzydkich czy ładnych twarzach, ani nie chodzi o kwestię wieku. Są ludzie młodzi i starzy, starcy, którzy już umierają, i nowo narodzone dzieci…</p>\n<p>Kwestia czasu i lat; to narodziny, wzrost, rozwój, małżeństwo, rozmnażanie, starzenie się i śmierć, jest wyłączną domeną Płaszczyzny Poziomej…</p>\n<p>Na “Wspaniałej Drabinie”, na Płaszczyźnie Pionowej, pojęcie czasu nie ma zastosowania. Na szczeblach takiej drabiny możemy znaleźć tylko “Poziomy Istnienia”…</p>\n<p>Mechaniczna nadzieja ludzi na nic się nie zda; wierzą, że z czasem wszystko będzie lepiej; tak myśleli nasi dziadkowie i pradziadkowie; fakty pokazały dokładnie odwrotnie…</p>\n<p>“Poziom Istnienia” jest tym, co się liczy, a to jest Płaszczyzna Pionowa; znajdujemy się na jednym szczeblu, ale możemy wejść na inny szczebel…</p>\n<p>“Wspaniała Drabina”, o której mówimy i która odnosi się do różnych “Poziomów Istnienia”, z pewnością nie ma nic wspólnego z czasem linearnym…</p>\n<p>Wyższy “Poziom Istnienia” znajduje się bezpośrednio nad nami z chwili na chwilę…</p>\n<p>Nie znajduje się w żadnej odległej, poziomej przyszłości, ale tu i teraz; w nas samych; na Płaszczyźnie Pionowej…</p>\n<p>Jest oczywiste i każdy może to zrozumieć, że dwie linie – Pozioma i Pionowa – spotykają się w danym momencie w naszym wnętrzu Psychologicznym i tworzą Krzyż…</p>\n<p>Osobowość rozwija się i rozwija na Poziomej Linii Życia. Rodzi się i umiera w swoim linearnym czasie; jest przemijająca; nie istnieje żadne jutro dla osobowości zmarłego; to nie jest Istota…</p>\n<p>Poziomy Istnienia; sama Istota, nie pochodzi z czasu, nie ma nic wspólnego z Linią Poziomą; znajduje się w nas samych. Teraz, na Płaszczyźnie Pionowej…</p>\n<p>Byłoby to oczywiście absurdalne, gdyby szukać własnej Istoty poza sobą…</p>\n<p>Nie zaszkodzi przedstawić następującego wniosku: Tytuły, stopnie, awanse itp. w zewnętrznym świecie fizycznym w żaden sposób nie spowodowałyby autentycznego wywyższenia, przewartościowania Istoty, przejścia na wyższy szczebel w “Poziomach Istnienia”…</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
