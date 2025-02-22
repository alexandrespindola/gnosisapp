import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Ribellione Psicologica",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "3. Ribellione Psicologica",
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
    "set:html": "<p>Non è superfluo ricordare ai nostri lettori che esiste un punto matematico dentro di noi…</p>\n<p>Indubbiamente, tale punto non si trova mai nel passato, né nel futuro…</p>\n<p>Chiunque voglia scoprire questo punto misterioso, deve cercarlo qui e ora, dentro di sé, esattamente in questo istante, né un secondo avanti, né un secondo indietro…</p>\n<p>I due pali Verticale e Orizzontale della Santa Croce si incontrano in questo punto…</p>\n<p>Ci troviamo quindi di istante in istante di fronte a due Cammini: l’Orizzontale e il Verticale…</p>\n<p>È evidente che l’Orizzontale è molto “sdolcinato”, lo percorrono “Vincenzo e tutta la gente”, “Villegas e chiunque arrivi”, “Don Raimondo e tutto il mondo”…</p>\n<p>È evidente che il Verticale è diverso; è il cammino dei ribelli intelligenti, quello dei Rivoluzionari…</p>\n<p>Quando uno si ricorda di sé stesso, quando lavora su sé stesso, quando non si identifica con tutti i problemi e le pene della vita, di fatto percorre il Sentiero Verticale…</p>\n<p>Certamente non è mai facile eliminare le emozioni negative; perdere ogni identificazione con il nostro tenore di vita; problemi di ogni genere, affari, debiti, pagamento di cambiali, mutui, telefono, acqua, luce, ecc., ecc., ecc.</p>\n<p>I disoccupati, coloro che per un motivo o per l’altro hanno perso il posto di lavoro, evidentemente soffrono per mancanza di denaro e dimenticare il proprio caso, non preoccuparsi, né identificarsi con il proprio problema, risulta di fatto spaventosamente difficile.</p>\n<p>Coloro che soffrono, coloro che piangono, coloro che sono stati vittime di un tradimento, di un cattivo pagamento nella vita, di un’ingratitudine, di una calunnia o di una frode, in realtà si dimenticano di sé stessi, del proprio reale Essere intimo, si identificano completamente con la loro tragedia morale…</p>\n<p>Il lavoro su sé stessi è la caratteristica fondamentale del Cammino Verticale. Nessuno potrebbe calcare il Sentiero della Grande Ribellione se non lavorasse mai su sé stesso…</p>\n<p>Il lavoro a cui ci stiamo riferendo è di tipo Psicologico; si occupa di una certa trasformazione del momento presente in cui ci troviamo. Abbiamo bisogno di imparare a vivere di istante in istante…</p>\n<p>Per esempio, una persona che si trova disperata per un problema sentimentale, economico o politico ovviamente si è dimenticata di sé stessa…</p>\n<p>Tale persona, se si ferma un istante, se osserva la situazione e cerca di ricordarsi di sé stessa e poi si sforza di comprendere il senso del suo atteggiamento…</p>\n<p>Se riflette un po’, se pensa che tutto passa; che la vita è illusoria, fugace e che la morte riduce in cenere tutte le vanità del mondo…</p>\n<p>Se comprende che il suo problema in fondo non è altro che un “fuoco di paglia”, un fuoco fatuo che presto si spegne, vedrà improvvisamente con sorpresa che tutto è cambiato…</p>\n<p>Trasformare le reazioni meccaniche è possibile mediante il confronto logico e l’Auto-Riflessione Intima dell’Essere…</p>\n<p>È evidente che le persone reagiscono meccanicamente alle diverse circostanze della vita…</p>\n<p>Povere persone! Solitamente diventano sempre vittime. Quando qualcuno le adula sorridono; quando le umiliano, soffrono. Insultano se vengono insultate; feriscono se vengono ferite; non sono mai libere; i loro simili hanno il potere di portarle dalla gioia alla tristezza, dalla speranza alla disperazione.</p>\n<p>Ogni persona di quelle che percorrono il Cammino Orizzontale, assomiglia a uno strumento musicale, dove ognuno dei suoi simili suona ciò che gli viene in mente…</p>\n<p>Chi impara a trasformare le relazioni meccaniche, di fatto si incammina per il “Cammino Verticale”.</p>\n<p>Questo rappresenta un cambiamento fondamentale nel “Livello di Essere”, risultato straordinario della “Ribellione Psicologica”.</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/rebeldia-psicologica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
