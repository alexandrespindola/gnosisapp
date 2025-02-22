import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'Essenza",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "4. L'Essenza",
    "order": 4
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
    "set:html": "<p>Ciò che rende bello e adorabile ogni neonato è la sua Essenza; questa costituisce in sé la sua vera realtà…</p>\n<p>La normale crescita dell’Essenza in ogni creatura, certamente è molto residuale, incipiente…</p>\n<p>Il corpo umano cresce e si sviluppa secondo le leggi biologiche della specie, tuttavia tali possibilità risultano di per sé molto limitate per l’Essenza…</p>\n<p>Indubbiamente l’Essenza può crescere da sola, senza aiuto, solo in piccolissima parte…</p>\n<p>Parlando francamente e senza ambagi diremo che la crescita spontanea e naturale dell’Essenza, è possibile solo durante i primi tre, quattro e cinque anni di età, cioè, nella prima fase della vita…</p>\n<p>La gente pensa che la crescita e lo sviluppo dell’Essenza avvenga sempre in forma continua, secondo la meccanica dell’evoluzione, ma il Gnosticismo Universale insegna chiaramente che questo non avviene così…</p>\n<p>Affinché l’Essenza cresca di più, qualcosa di molto speciale deve succedere, qualcosa di nuovo bisogna realizzare.</p>\n<p>Voglio riferirmi in forma enfatica al lavoro su se stessi. Lo sviluppo dell’Essenza è possibile unicamente sulla base di lavori consapevoli e sofferenze volontarie…</p>\n<p>È necessario comprendere che questi lavori non si riferiscono a questioni di professione, banche, carpenteria, muratura, sistemazione di linee ferroviarie o affari d’ufficio…</p>\n<p>Questo lavoro è per ogni persona che ha sviluppato la personalità; si tratta di qualcosa di Psicologico…</p>\n<p>Tutti noi sappiamo che abbiamo dentro di noi ciò che si chiama EGO, IO, ME STESSO, SÉ STESSO…</p>\n<p>Sfortunatamente l’Essenza si trova imbottigliata, imprigionata, tra l’EGO e questo è lamentabile.</p>\n<p>Dissolvere l’IO Psicologico, disintegrare i suoi elementi indesiderabili, è urgente, improrogabile, indifferibile… così è il senso del lavoro su se stessi.</p>\n<p>Non potremmo mai liberare l’Essenza senza disintegrare previamente l’IO Psicologico…</p>\n<p>Nell’Essenza c’è la Religione, il BUDDHA, la Saggezza, le particelle di dolore di nostro Padre che è nei Cieli e tutti i dati che ci servono per l’AUTO-REALIZZAZIONE INTIMA DELL’ESSERE.</p>\n<p>Nessuno potrebbe annichilire l’IO Psicologico senza eliminare previamente gli elementi inumani che portiamo dentro…</p>\n<p>Dobbiamo ridurre in cenere la crudeltà mostruosa di questi tempi: l’invidia che sfortunatamente è venuta a convertirsi nella molla segreta dell’azione; l’avidità insopportabile che ha reso la vita così amara: l’asqueante maldicenza; la calunnia che tante tragedie origina; le sbornie; l’immonda lussuria che puzza così tanto; ecc., ecc., ecc.</p>\n<p>A misura che tutte queste abominazioni si vanno riducendo in polvere cosmica, l’Essenza oltre ad emanciparsi, crescerà e si svilupperà armonicamente…</p>\n<p>Indubbiamente quando l’IO Psicologico è morto, risplende in noi l’Essenza…</p>\n<p>L’Essenza libera ci conferisce bellezza intima; da tale bellezza emanano la felicità perfetta e il vero Amore…</p>\n<p>L’Essenza possiede molteplici sensi di perfezione e straordinari poteri naturali…</p>\n<p>Quando “Moriamo in Noi Stessi”, quando dissolviamo l’IO Psicologico, godiamo dei preziosi sensi e poteri dell’Essenza…</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/la-esencia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
