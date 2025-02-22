import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Różne Ja",
  "locale": "pl",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. Różne Ja",
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
    "set:html": "<p>Ssaki rozumne błędnie zwane człowiekiem, w rzeczywistości nie posiadają zdefiniowanej indywidualności.</p>\n<p>Niewątpliwie ten brak jedności psychologicznej w humanoidzie jest przyczyną tylu trudności i goryczy.</p>\n<p>Ciało fizyczne jest kompletną całością i pracuje jako całość organiczna, chyba że jest chore.</p>\n<p>Jednakże życie wewnętrzne humanoida w żaden sposób nie jest jednością psychologiczną.</p>\n<p>Najpoważniejsze w tym wszystkim, wbrew temu, co mówią różne szkoły pseudo-ezoteryczne i pseudo-okultystyczne, jest brak organizacji psychologicznej w głębi każdego podmiotu.</p>\n<p>Z pewnością w takich warunkach nie ma harmonijnej pracy jako całości w życiu wewnętrznym ludzi.</p>\n<p>Humanoid, w odniesieniu do swojego stanu wewnętrznego, jest mnogością psychologiczną, sumą “Ja”.</p>\n<p>Ignoranci oświeceni tej mrocznej epoki oddają cześć “JA”, ubóstwiają je, stawiają na ołtarzach, nazywają “ALTER EGO”, “JA WYŻSZE”, “JA BOSKIE” itp., itd., itd.</p>\n<p>“Mądralińscy” tej czarnej epoki, w której żyjemy, nie chcą zdać sobie sprawy, że “Ja Wyższe” lub “Ja Niższe” to dwie sekcje tego samego Ego, które uległo pluralizacji…</p>\n<p>Humanoid z pewnością nie ma “JA Stałego”, ale mnogość różnych “Ja” nieludzkich i absurdalnych.</p>\n<p>Biedne zwierzę intelektualne błędnie zwane człowiekiem jest podobne do domu w nieładzie, gdzie zamiast jednego pana jest wielu służących, którzy zawsze chcą rozkazywać i robić, co im się podoba…</p>\n<p>Największym błędem taniego pseudo-ezoteryzmu i pseudo-okultyzmu jest zakładanie, że inni posiadają lub że posiada się “JA Stałe i Niezmienne” bez początku i końca…</p>\n<p>Gdyby ci, którzy tak myślą, obudzili świadomość, choćby na chwilę, mogliby wyraźnie zobaczyć na własne oczy, że humanoid rozumny nigdy nie jest taki sam przez długi czas…</p>\n<p>Ssaki intelektualne z psychologicznego punktu widzenia ciągle się zmieniają…</p>\n<p>Myślenie, że jeśli ktoś nazywa się Luis, to zawsze jest Luisem, jest czymś w rodzaju bardzo niesmacznego żartu…</p>\n<p>Ten podmiot, który nazywa się Luis, ma w sobie inne “Ja”, inne ego, które wyrażają się poprzez jego osobowość w różnych momentach i chociaż Luis nie lubi chciwości, inne “Ja” w nim – nazwijmy je Pepe – lubi chciwość i tak dalej…</p>\n<p>Żadna osoba nie jest taka sama w sposób ciągły, naprawdę nie trzeba być bardzo mądrym, aby zdać sobie sprawę z niezliczonych zmian i sprzeczności u każdego podmiotu…</p>\n<p>Zakładanie, że ktoś posiada “JA Stałe i Niezmienne”, jest z pewnością nadużyciem w stosunku do bliźniego i do samego siebie…</p>\n<p>Wewnątrz każdej osoby żyje wiele osób, wiele “Ja”, to może zweryfikować na własne oczy i bezpośrednio każda osoba przebudzona, świadoma…</p>"
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
const url = "src/content/docs/pl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/pl/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
