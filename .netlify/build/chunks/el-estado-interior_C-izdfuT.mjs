import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Lo Stato Interiore",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Lo Stato Interiore",
    "order": 7
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
    "set:html": "<p>Combinare correttamente stati interiori ed eventi esterni significa saper vivere intelligentemente…</p>\n<p>Qualsiasi evento vissuto in modo intelligente esige il suo corrispondente stato interiore specifico…</p>\n<p>Tuttavia, sfortunatamente, quando le persone rivedono la loro vita, pensano che questa sia costituita esclusivamente da eventi esterni…</p>\n<p>Povere persone! Pensano che se un determinato evento non fosse accaduto, la loro vita sarebbe stata migliore…</p>\n<p>Suppongono che la fortuna le abbia incontrate e che abbiano perso l’opportunità di essere felici…</p>\n<p>Rimpiangono ciò che è stato perso, piangono ciò che hanno disprezzato, gemono ricordando i vecchi inciampi e le calamità…</p>\n<p>Le persone non vogliono rendersi conto che vegetare non è vivere e che la capacità di esistere consapevolmente dipende esclusivamente dalla qualità degli stati interiori dell’Anima…</p>\n<p>Non importa certamente quanto belli siano gli eventi esterni della vita, se non ci troviamo in tali momenti nello stato interiore appropriato, gli eventi migliori possono sembrarci monotoni, fastidiosi o semplicemente noiosi…</p>\n<p>Qualcuno aspetta con ansia la festa di nozze, è un evento, ma potrebbe succedere che sia così preoccupato nel momento preciso dell’evento, da non provare alcun piacere e che tutto diventi arido e freddo come un protocollo…</p>\n<p>L’esperienza ci ha insegnato che non tutte le persone che partecipano a un banchetto o a un ballo, si divertono davvero…</p>\n<p>Non manca mai un annoiato nella migliore delle feste e i pezzi più deliziosi rallegrano alcuni e fanno piangere altri…</p>\n<p>Molto rare sono le persone che sanno combinare confidentemente l’evento esterno con lo stato interno appropriato…</p>\n<p>È lamentabile che le persone non sappiano vivere consapevolmente: piangono quando dovrebbero ridere e ridono quando dovrebbero piangere…</p>\n<p>Controllo è differente: Il saggio può essere allegro ma mai pieno di folle frenesia; Triste ma mai disperato e abbattuto… sereno in mezzo alla violenza; astemio nell’orgia; casto tra la lussuria, ecc.</p>\n<p>Le persone malinconiche e pessimiste pensano il peggio della vita e francamente non desiderano vivere…</p>\n<p>Ogni giorno vediamo persone che non solo sono infelici, ma che inoltre — e ciò che è peggiore — rendono anche amara la vita degli altri…</p>\n<p>Persone così non cambierebbero nemmeno vivendo quotidianamente di festa in festa; la malattia psicologica la portano nel loro interno… tali persone possiedono stati intimi definitivamente perversi…</p>\n<p>Tuttavia questi soggetti si auto-qualificano come giusti, santi, virtuosi, nobili, servizievoli, martiri, ecc., ecc., ecc.</p>\n<p>Sono persone che si auto-considerano troppo; persone che si amano molto…</p>\n<p>Individui che si compiangono molto e che cercano sempre scappatoie per eludere le proprie responsabilità…</p>\n<p>Persone così sono abituate alle emozioni inferiori ed è ostensibile che per tale motivo creano quotidianamente elementi psichici infrahumani.</p>\n<p>Gli eventi sfortunati, i rovesci di fortuna, la miseria, i debiti, i problemi, ecc., sono esclusiva di quelle persone che non sanno vivere…</p>\n<p>Chiunque può formarsi una ricca cultura intellettuale, ma sono molto poche le persone che hanno imparato a vivere rettamente…</p>\n<p>Quando uno vuole separare gli eventi esterni dagli stati interiori della coscienza, dimostra concretamente la sua incapacità di esistere dignitosamente.</p>\n<p>Coloro che imparano a combinare consapevolmente eventi esterni e stati interiori, marciano sulla via del successo…</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
