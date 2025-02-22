import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Voljeni Ego",
  "locale": "hr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Voljeni Ego",
    "order": 11
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
    "set:html": "<p>Budući da su gornje i donje dvije sekcije iste stvari, nije naodmet iznijeti sljedeći korolar: “JA GORNJI, JA DONJI” su dva aspekta istog mračnog i pluraliziranog EGA.</p>\n<p>Takozvani “BOŽANSKI JA” ili “VIŠI JA”, “ALTER EGO” ili nešto slično, zasigurno je trik “MOG JA”, oblik SAMOOBMANE.</p>\n<p>Kada JA želi nastaviti ovdje i na onom svijetu, Samoobmanjuje se lažnim konceptom Božanskog Besmrtnog JA…</p>\n<p>Nitko od nas nema istinsko, trajno, nepromjenjivo, vječno, neizrecivo itd., itd., itd. “Ja”.</p>\n<p>Nitko od nas zapravo nema istinsko i autentično Jedinstvo Bića; nažalost, ne posjedujemo čak ni legitiman individualitet.</p>\n<p>Ego, iako se nastavlja i nakon groba, ipak ima početak i kraj.</p>\n<p>Ego, JA, nikada nije nešto individualno, jedinstveno, unitotalno. Očito je JA “JA-ovi”.</p>\n<p>U istočnom Tibetu se “JA-ovi” nazivaju “PSIHIČKI AGREGATI” ili jednostavno “Vrijednosti”, bilo pozitivne ili negativne.</p>\n<p>Ako mislimo na svaki “Ja” kao na različitu osobu, možemo kategorički tvrditi sljedeće: “Unutar svake osobe koja živi na svijetu, postoje mnoge osobe”.</p>\n<p>Neupitno, unutar svakog od nas živi mnogo različitih ljudi, neki bolji, neki gori…</p>\n<p>Svaki od ovih Ja, svaka od ovih osoba bori se za prevlast, želi biti ekskluzivan, kontrolira intelektualni mozak ili emocionalne i motoričke centre kad god može, dok ga drugi ne pomaknu…</p>\n<p>Doktrinu o mnogim Ja učili su u istočnom Tibetu pravi Vidovnjaci, autentični Prosvijetljeni…</p>\n<p>Svaki od naših psiholoških nedostataka utjelovljen je u ovom ili onom Ja. Budući da imamo tisuće, pa čak i milijune nedostataka, očito mnogo ljudi živi unutar nas.</p>\n<p>U psihološkim pitanjima uspjeli smo jasno dokazati da paranoični, egolatari i mitomani ni za što na svijetu ne bi napustili kult voljenog Ega.</p>\n<p>Neupitno, takvi ljudi smrtno mrze doktrinu o mnogim “Ja-ovima”.</p>\n<p>Kada se netko istinski želi upoznati, mora se samo-promatrati i pokušati upoznati različite “Ja-ove” koji su unutar osobnosti.</p>\n<p>Ako netko od naših čitatelja još uvijek ne razumije ovu doktrinu o mnogim “Ja-ovima”, to je isključivo zbog nedostatka prakse u materiji Samo-Promatranja.</p>\n<p>Kako se prakticira Unutarnje Samo-Promatranje, sami otkrivamo mnoge ljude, mnoge “Ja-ove”, koji žive unutar naše vlastite osobnosti.</p>\n<p>Oni koji negiraju doktrinu o mnogim Ja-ovima, koji štuju Božanski JA, bez sumnje se nikada nisu ozbiljno Samo-Promatrali. Govoreći ovaj put u Sokratovskom stilu, reći ćemo da ti ljudi ne samo da ne znaju, već i ne znaju da ne znaju.</p>\n<p>Sigurno se nikada ne bismo mogli upoznati bez ozbiljnog i dubokog samo-promatranja.</p>\n<p>Sve dok se bilo koji subjekt nastavlja smatrati Jednim, jasno je da će svaka unutarnja promjena biti više nego nemoguća.</p>"
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
const url = "src/content/docs/hr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/hr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
