import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "La Scala Meravigliosa",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "2. La Scala Meravigliosa",
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
    "set:html": "<p>Dobbiamo anelare a un cambiamento vero, uscire da questa routine noiosa, da questa vita meramente meccanicistica, estenuante…</p>\n<p>La prima cosa che dobbiamo comprendere con assoluta chiarezza è che ognuno di noi, borghese o proletario, benestante o della classe media, ricco o miserabile, si trova realmente in un determinato Livello dell’Essere…</p>\n<p>Il Livello dell’Essere dell’ubriaco è diverso da quello dell’astemio e quello della prostituta molto diverso da quello della fanciulla. Questo che stiamo dicendo è inconfutabile, inoppugnabile…</p>\n<p>Arrivati a questa parte del nostro capitolo, nulla perdiamo immaginando una scala che si estende dal basso verso l’alto, verticalmente e con moltissimi gradini…</p>\n<p>Incontestabilmente in qualche gradino di questi ci troviamo noi; gradini sotto ci saranno persone peggiori di noi; gradini sopra si troveranno persone migliori di noi…</p>\n<p>In questa Verticale straordinaria, in questa scala meravigliosa, è chiaro che possiamo trovare tutti i Livelli dell’Essere… ogni persona è diversa e questo nessuno può confutarlo…</p>\n<p>Indubbiamente non stiamo ora parlando di facce brutte o belle, né si tratta di questione di età. Ci sono persone giovani e vecchie, anziani che stanno per morire e bambini appena nati…</p>\n<p>La questione del tempo e degli anni; questo del nascere, crescere, svilupparsi, sposarsi, riprodursi, invecchiare e morire, è esclusivo dell’Orizzontale…</p>\n<p>Nella “Scala Meravigliosa”, nella Verticale il concetto tempo non esiste. Nei gradini di tale scala possiamo trovare solo “Livelli dell’Essere”…</p>\n<p>La speranza meccanica della gente non serve a nulla; credono che con il tempo le cose saranno migliori; così pensavano i nostri nonni e bisnonni; i fatti precisamente hanno dimostrato il contrario…</p>\n<p>Il “Livello dell’Essere” è ciò che conta e questo è Verticale; ci troviamo in un gradino ma possiamo salire a un altro gradino…</p>\n<p>La “Scala Meravigliosa” di cui stiamo parlando e che si riferisce ai diversi “Livelli dell’Essere”, certamente, non ha nulla a che vedere con il tempo lineare…</p>\n<p>Un “Livello dell’Essere” più alto è immediatamente sopra di noi di istante in istante…</p>\n<p>Non è in nessun remoto futuro orizzontale, ma qui e ora; dentro noi stessi; nella Verticale…</p>\n<p>È ostensibile e chiunque lo può comprendere, che le due linee —Orizzontale e Verticale— si incontrano di momento in momento nel nostro interiore Psicologico e formano una Croce…</p>\n<p>La personalità si sviluppa e si dispiega nella linea Orizzontale della Vita. Nasce e muore dentro il suo tempo lineare; è peritura; non esiste alcun domani per la personalità del morto; non è l’Essere…</p>\n<p>I Livelli dell’Essere; l’Essere stesso, non è del tempo, non ha nulla a che vedere con la Linea Orizzontale; si trova dentro noi stessi. Ora, nella Verticale…</p>\n<p>Risulterebbe manifestamente assurdo cercare il nostro proprio Essere fuori di sé stessi…</p>\n<p>Non è di troppo fissare come corollario quanto segue: titoli, gradi, promozioni, ecc., nel mondo fisico esteriore, in alcun modo originerebbero esaltazione autentica, rivalutazione dell’Essere, passaggio a un gradino superiore nei “Livelli dell’Essere”…</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/la-escalera-maravillosa.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
