import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Eventi Personali",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "9. Eventi Personali",
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
    "set:html": "<p>La piena auto-osservazione intima del Sé è imprescindibile quando si tratta di scoprire stati psicologici errati.</p>\n<p>Indubbiamente, gli stati interiori errati possono essere corretti mediante procedure corrette.</p>\n<p>Poiché la vita interiore è la calamita che attrae gli eventi esteriori, abbiamo urgente, massima e imprescindibile necessità di eliminare dalla nostra psiche gli stati psicologici errati.</p>\n<p>Correggere stati psicologici errati è indispensabile quando si vuole alterare fondamentalmente la natura di certi eventi indesiderabili.</p>\n<p>Alterare la nostra relazione con determinati eventi è possibile se eliminiamo dal nostro interno certi stati psicologici assurdi.</p>\n<p>Situazioni esteriori distruttive potrebbero convertirsi in inoffensive e persino costruttive mediante l’intelligente correzione degli stati interiori errati.</p>\n<p>Si può cambiare la natura degli eventi spiacevoli che ci accadono, quando ci si purifica intimamente. Chi non corregge mai gli stati psicologici assurdi, credendosi molto forte, diventa vittima delle circostanze.</p>\n<p>Mettere ordine nella nostra disordinata casa interiore è vitale quando si desidera cambiare il corso di una sfortunata esistenza.</p>\n<p>Le persone si lamentano di tutto, soffrono, piangono, protestano, vorrebbero cambiare vita, uscire dalla sfortuna in cui si trovano, sfortunatamente non lavorano su se stesse.</p>\n<p>Le persone non vogliono rendersi conto che la vita interiore attrae circostanze esteriori e che se queste sono dolorose è a causa degli stati interiori assurdi.</p>\n<p>L’esteriore è solo il riflesso dell’interiore, chi cambia interiormente origina un nuovo ordine di cose.</p>\n<p>Gli eventi esteriori non sarebbero mai così importanti come il modo di reagire ad essi.</p>\n<p>Siete rimasti sereni di fronte all’insultatore? Avete ricevuto con piacere le manifestazioni spiacevoli dei vostri simili?</p>\n<p>In che modo avete reagito all’infedeltà della persona amata? Vi siete lasciati trasportare dal veleno della gelosia? Avete ucciso? Siete in prigione?</p>\n<p>Ospedali, cimiteri, prigioni sono pieni di sinceri che si sono sbagliati e hanno reagito in modo assurdo agli eventi esteriori.</p>\n<p>L’arma migliore che un uomo può usare nella vita è uno stato psicologico corretto.</p>\n<p>Si possono disarmare fiere e smascherare traditori, mediante stati interiori appropriati.</p>\n<p>Gli stati interiori errati ci convertono in vittime indifese della perversità umana.</p>\n<p>Imparate ad affrontare gli eventi più spiacevoli della vita pratica con un atteggiamento interiore appropriato…</p>\n<p>Non identificatevi con nessun avvenimento; ricordate che tutto passa; imparate a vedere la vita come un film e ne riceverete i benefici…</p>\n<p>Non dimenticate che avvenimenti senza alcun valore potrebbero portarvi alla disgrazia se non eliminate dalla vostra psiche gli stati interiori errati.</p>\n<p>Ogni evento esteriore ha bisogno, indubbiamente, del biglietto appropriato; ovvero, dello stato psicologico preciso.</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/sucesos-personales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
