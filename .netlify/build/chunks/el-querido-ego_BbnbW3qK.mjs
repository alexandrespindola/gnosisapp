import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Dragi Ego",
  "locale": "sr",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. Dragi Ego",
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
    "set:html": "<p>Pošto su više i niže dva dela iste stvari, nije na odmet postaviti sledeći zaključak: „VIŠE JA, NIŽE JA“ su dva aspekta istog mračnog i pluralizovanog EGO-a.</p>\n<p>Takozvano „BOŽANSKO JA“ ili „VIŠE JA“, „ALTER EGO“ ili nešto slično, je zaista trik „MOG JA“, oblik SAMOOBMANE.</p>\n<p>Kada JA želi da se nastavi ovde i na onom svetu, SAMOOBMANJUJE se lažnim konceptom Besmrtnog Božanskog JA…</p>\n<p>Niko od nas nema pravo, trajno, nepromenljivo, večno, neizrecivo „Ja“, itd., itd., itd.</p>\n<p>Niko od nas zaista nema pravu i autentičnu Jedinstvo Bića; nažalost, mi čak ni ne posedujemo legitiman individualitet.</p>\n<p>Ego, iako se nastavlja i posle groba, ipak ima početak i kraj.</p>\n<p>Ego, JA, nikada nije nešto individualno, unitarno, unitotalno. Očigledno je JA „JA-OVI“.</p>\n<p>U Istočnom Tibetu se „JA-OVI“ nazivaju „PSIHIČKIM AGREGATIMA“ ili jednostavno „VREDNOSTIMA“, bile one pozitivne ili negativne.</p>\n<p>Ako o svakom „Ja“ razmišljamo kao o različitoj osobi, možemo kategorički potvrditi sledeće: „Unutar svake osobe koja živi na svetu, postoje mnoge osobe“.</p>\n<p>Nesumnjivo, unutar svakog od nas žive mnoge različite osobe, neke bolje, neke gore…</p>\n<p>Svaki od ovih Ja-ova, svaka od ovih osoba bori se za prevlast, želi da bude ekskluzivna, kontroliše intelektualni mozak ili emocionalne i motoričke centre kad god može, dok ga drugi ne potisne…</p>\n<p>Doktrinu mnogih Ja-ova su u Istočnom Tibetu predavali pravi Vidovnjaci, autentični Prosvetljeni…</p>\n<p>Svaki od naših psiholoških nedostataka personifikovan je u ovom ili onom Ja. Pošto imamo hiljade, pa čak i milione nedostataka, očigledno je da mnogi ljudi žive u nama.</p>\n<p>U psihološkim pitanjima smo jasno pokazali da subjekti paranoici, egolatri i mitomani ni za živu glavu ne bi napustili kult dragog Ega.</p>\n<p>Nesumnjivo, takvi ljudi smrtno mrze doktrinu mnogih „Ja-ova“.</p>\n<p>Kada neko zaista želi da upozna sebe, mora da se samoposmatra i pokuša da upozna različite „Ja-ove“ koji se nalaze unutar ličnosti.</p>\n<p>Ako neki od naših čitalaca još uvek ne razume ovu doktrinu mnogih „Ja-ova“, to je isključivo zbog nedostatka prakse u oblasti samoposmatranja.</p>\n<p>Kako neko praktikuje Unutrašnje Samoposmatranje, tako sam otkriva mnoge ljude, mnoge „Ja-ove“, koji žive unutar naše sopstvene ličnosti.</p>\n<p>Oni koji negiraju doktrinu mnogih Ja-ova, koji obožavaju Božansko JA, nesumnjivo se nikada ozbiljno nisu samoposmatrali. Ovog puta govoreći u Sokratovskom stilu, reći ćemo da ti ljudi ne samo da ne znaju, već i ne znaju da ne znaju.</p>\n<p>Svakako nikada ne bismo mogli da upoznamo sebe, bez ozbiljnog i dubokog samoposmatranja.</p>\n<p>Dok god se bilo koji subjekt nastavi da se smatra kao Jedan, jasno je da će svaka unutrašnja promena biti više nego nemoguća.</p>"
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
const url = "src/content/docs/sr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sr/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
