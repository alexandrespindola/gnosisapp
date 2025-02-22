import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "I diversi sé",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "10. I diversi sé",
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
    "set:html": "<p>Il Mammifero Razionale erroneamente chiamato uomo, in realtà non possiede una individualità definita.</p>\n<p>Incontestabilmente questa mancanza di unità psicologica nell’Umanoide, è la causa di tante difficoltà e amarezze.</p>\n<p>Il corpo fisico è una unità completa e lavora come un tutto organico, a meno che non sia malato.</p>\n<p>Eppure, la vita interiore dell’Umanoide in alcun modo è una unità psicologica.</p>\n<p>La cosa più grave di tutto questo, a dispetto di ciò che dicono le diverse scuole di tipo Pseudo-Esoterico e Pseudo-Occultista, è l’assenza di organizzazione psicologica nel fondo intimo di ogni soggetto.</p>\n<p>Certamente in tali condizioni, non esiste lavoro armonioso come un tutto, nella vita interiore delle persone.</p>\n<p>L’Umanoide, rispetto al suo stato interiore, è una molteplicità psicologica, una somma di “Io”.</p>\n<p>Gli ignoranti illustrati di questa epoca tenebrosa, rendono culto all‘“IO”, lo idolatrano, lo mettono sugli altari, lo chiamano “ALTER EGO”, “IO SUPERIORE”, “IO DIVINO”, ecc., ecc., ecc.</p>\n<p>Non vogliono rendersi conto i “Sapientoni” di questa età nera in cui viviamo, che “Io Superiore” o “Io Inferiore”, sono due sezioni dello stesso Ego pluralizzato…</p>\n<p>L’Umanoide non ha certamente un “IO Permanente” ma una moltitudine di differenti “Io” Infrahumani e assurdi.</p>\n<p>Il povero animale intellettuale erroneamente chiamato uomo, è simile a una casa in disordine dove invece di un padrone, esistono molti servitori che vogliono sempre comandare e fare ciò che gli viene in mente…</p>\n<p>Il maggior errore dello Pseudo-Esoterismo e Pseudo-Occultismo a buon mercato, è supporre che gli altri possiedano o che si abbia un “IO Permanente e Immutabile” senza principio e senza fine…</p>\n<p>Se quelli che così pensano risvegliassero coscienza anche solo per un istante, potrebbero evidenziare chiaramente da soli, che l’Umanoide razionale non è mai lo stesso per molto tempo…</p>\n<p>Il mammifero intellettuale dal punto di vista psicologico, sta cambiando continuamente…</p>\n<p>Pensare che se una persona si chiama Luigi è sempre Luigi, risulta qualcosa come una barzelletta di molto cattivo gusto…</p>\n<p>Quel soggetto a cui si chiama Luigi ha in sé stesso altri “Io”, altri ego, che si esprimono attraverso la sua personalità in differenti momenti e anche se Luigi non ama la codicia, un altro “Io” in lui — chiamiamolo Peppino — ama la codicia e così successivamente…</p>\n<p>Nessuna persona è la stessa in forma continua, realmente non si necessita essere molto saggi per rendersi conto pienamente degli innumerevoli cambiamenti e contraddizioni di ogni soggetto…</p>\n<p>Supporre che qualcuno possieda un “Io Permanente e Immutabile” equivale senz’altro a un abuso nei confronti del prossimo e verso sé stessi…</p>\n<p>Dentro ogni persona vivono molte persone, molti “Io”, questo lo può verificare da sé e in forma diretta, qualsiasi persona sveglia, cosciente…</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/los-diferentes-yoes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
