import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Voljeni Ego",
  "locale": "bs",
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
    "set:html": "<p>Budući da su gornje i donje dvije sekcije iste stvari, ne bi bilo na odmet postaviti sljedeći korolar: “JA GORNJE, JA DONJE” su dva aspekta istog mračnog i pluraliziranog Ega.</p>\n<p>Takozvani “BOŽANSKI JA” ili “GORNJE JA”, “ALTER EGO” ili nešto slično, je zasigurno trik “MOJEG JA”, oblik SAMO-OBMANE.</p>\n<p>Kada JA želi nastaviti ovdje i na onom svijetu, Samo-Obmanjuje se lažnim konceptom Božanskog Besmrtnog JA…</p>\n<p>Nitko od nas nema istinsko, trajno, nepromjenjivo, vječno, neizrecivo “Ja”, itd., itd., itd.</p>\n<p>Nitko od nas uistinu nema istinsko i autentično Jedinstvo Bića; nažalost, ne posjedujemo čak ni legitimnu individualnost.</p>\n<p>Ego, iako se nastavlja i nakon groba, ipak ima svoj početak i kraj.</p>\n<p>Ego, JA, nikada nije nešto individualno, unitarno, unitotalno. Očito, JA je “JA-ovi”.</p>\n<p>U istočnom Tibetu se “JA-ovi” nazivaju “PSIHIČKI AGREGATI” ili jednostavno “Vrijednosti”, bilo da su ove potonje pozitivne ili negativne.</p>\n<p>Ako mislimo na svaki “Ja” kao na različitu osobu, možemo kategorički tvrditi sljedeće: “Unutar svake osobe koja živi na svijetu, postoje mnoge osobe”.</p>\n<p>Neupitno, unutar svakoga od nas žive mnoge različite osobe, neke bolje, neke gore…</p>\n<p>Svaki od ovih Ja-ova, svaka od ovih osoba se bori za prevlast, želi biti ekskluzivna, kontrolira intelektualni mozak ili emocionalne i motoričke centre kad god može, dok ga drugi ne pomakne…</p>\n<p>Doktrinu o mnogim Ja-ovima su u istočnom Tibetu podučavali pravi Vidovnjaci, autentični Prosvijetljeni…</p>\n<p>Svaki od naših psiholoških nedostataka je personificiran u tom i tom Ja. Budući da imamo tisuće, pa čak i milijune nedostataka, očito je da mnogo ljudi živi u nama.</p>\n<p>U psihološkim pitanjima smo jasno mogli dokazati da subjekti paranoični, egolatrični i mitomani nikada ne bi napustili kult dragog Ega.</p>\n<p>Neupitno, takvi ljudi smrtno mrze doktrinu o mnogim “Ja-ovima”.</p>\n<p>Kada se netko zaista želi upoznati, mora se samo-promatrati i pokušati upoznati različite “Ja-ove” koji su smješteni unutar osobnosti.</p>\n<p>Ako neki od naših čitatelja još uvijek ne razumije ovu doktrinu o mnogim “Ja-ovima”, to je isključivo zbog nedostatka prakse u samo-promatranju.</p>\n<p>Kako čovjek prakticira unutarnje samo-promatranje, otkriva sam po sebi mnoge ljude, mnoge “Ja-ove”, koji žive unutar naše vlastite osobnosti.</p>\n<p>Oni koji negiraju doktrinu o mnogim Ja-ovima, koji obožavaju Božansko JA, nedvojbeno se nikada nisu ozbiljno samo-promatrali. Govoreći ovaj put u Sokratovom stilu, reći ćemo da ti ljudi ne samo da ne znaju, već i ne znaju da ne znaju.</p>\n<p>Zasigurno se nikada ne bismo mogli upoznati bez ozbiljnog i dubokog samo-promatranja.</p>\n<p>Sve dok bilo koji subjekt nastavi smatrati sebe Jednim, jasno je da će svaka unutarnja promjena biti više nego nemoguća.</p>"
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
const url = "src/content/docs/bs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/bs/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
