import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Autoaccusarsi",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "5. Autoaccusarsi",
    "order": 5
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
    "set:html": "<p>L’Essenza che ognuno di noi porta dentro di sé, viene dall’alto, dal Cielo, dalle stelle…</p>\n<p>Incontestabilmente l’Essenza meravigliosa proviene dalla nota “LA” (La Via Lattea, la Galassia in cui viviamo)</p>\n<p>Preziosa l’Essenza passa attraverso la nota “SOL” (Il Sole) e poi dalla nota “FA” (La Zona Planetaria) entra in questo mondo e penetra nel nostro stesso interno.</p>\n<p>I nostri genitori hanno creato il corpo appropriato per la ricezione di questa Essenza che viene dalle Stelle…</p>\n<p>Lavorando intensamente su noi stessi e sacrificandoci per i nostri simili, ritorneremo vittoriosi al seno profondo di Urania…</p>\n<p>Noi stiamo vivendo in questo mondo per un motivo, per qualcosa, per un qualche fattore speciale…</p>\n<p>Ovviamente in noi c’è molto che dobbiamo vedere, studiare e comprendere, se è che in realtà aneliamo sapere qualcosa su noi stessi, sulla nostra stessa vita…</p>\n<p>Tragica è l’esistenza di colui che muore senza aver conosciuto il motivo della sua vita…</p>\n<p>Ognuno di noi deve scoprire da sé il senso della propria vita, ciò che lo mantiene prigioniero nella prigione del dolore…</p>\n<p>Evidentemente c’è in ognuno di noi qualcosa che ci amareggia la vita e contro la quale dobbiamo lottare fermamente…</p>\n<p>Non è indispensabile che continuiamo in disgrazia, è improcrastinabile ridurre in polvere cosmica ciò che ci rende così deboli e infelici.</p>\n<p>A nulla serve insuperbirci con titoli, onori, diplomi, denaro, vano razionalismo soggettivo, risapute virtù, ecc., ecc., ecc.</p>\n<p>Non dobbiamo dimenticare mai che l’ipocrisia e le stupide vanità della falsa personalità, fanno di noi gente torpe, rancida, ritardataria, reazionaria, incapace di vedere il nuovo…</p>\n<p>La morte ha molti significati, tanto positivi quanto negativi.</p>\n<p>Consideriamo quella magnifica osservazione del “Gran Kabir Gesù il Cristo”. “Che i morti seppelliscano i loro morti”. Molte persone, benché vivano, sono di fatto morte per ogni possibile lavoro su se stesse e, quindi, per qualsiasi trasformazione intima.</p>\n<p>Sono persone imbottigliate tra i loro dogmi e credenze; gente pietrificata nei ricordi di molti ieri; individui pieni di pregiudizi ancestrali; persone schiave del “cosa diranno”, spaventosamente tiepide, indifferenti, a volte “saputelle” convinte di essere nella verità perché così gli è stato detto, ecc., ecc., ecc.</p>\n<p>Non vogliono queste persone capire che questo mondo è una “Palestra Psicologica” mediante la quale sarebbe possibile annichilire quella bruttura segreta che tutti portiamo dentro…</p>\n<p>Se queste povere persone comprendessero lo stato così lamentevole in cui si trovano, tremerebbero di orrore…</p>\n<p>Eppure, tali persone pensano sempre di sé il meglio; si vantano delle loro virtù, si sentono perfette, bondadosas, servizievoli, nobili, caritatevoli, intelligenti, adempienti ai loro doveri, ecc.</p>\n<p>La vita pratica come scuola è formidabile, ma prenderla come fine in sé stessa è manifestamente assurdo.</p>\n<p>Coloro che prendono la vita in sé stessa, così come si vive quotidianamente, non hanno compreso la necessità di lavorare su sé stessi per ottenere una “Trasformazione Radicale”.</p>\n<p>Sfortunatamente le persone vivono meccanicamente, non hanno mai sentito dire qualcosa sul lavoro interiore…</p>\n<p>Cambiare è necessario, ma le persone non sanno come cambiare; soffrono molto e nemmeno sanno perché soffrono…</p>\n<p>Avere denaro non è tutto. La vita di molte persone ricche è spesso veramente tragica…</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/acusarse-a-si-mismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
