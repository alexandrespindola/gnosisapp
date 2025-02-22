import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "L'amato Ego",
  "locale": "it",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "11. L'amato Ego",
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
    "set:html": "<p>Poiché superiore e inferiore sono due sezioni della stessa cosa, non è superfluo stabilire il seguente corollario: “IO SUPERIORE, IO INFERIORE” sono due aspetti dello stesso EGO tenebroso e pluralizzato.</p>\n<p>Il cosiddetto “IO DIVINO” o “IO SUPERIORE”, “ALTER EGO” o qualcosa del genere, è certamente un trucco dell‘“IO STESSO”, una forma di AUTO-INGANNO.</p>\n<p>Quando l’IO vuole continuare qui e nell’aldilà, si auto-inganna con il falso concetto di un IO Divino Immortale…</p>\n<p>Nessuno di noi ha un “Io” vero, permanente, immutabile, eterno, ineffabile, ecc., ecc., ecc.</p>\n<p>Nessuno di noi ha in verità una vera e autentica Unità di Essere; sfortunatamente non possediamo nemmeno una legittima individualità.</p>\n<p>L’Ego, anche se continua oltre la tomba, ha tuttavia un principio e una fine.</p>\n<p>L’Ego, l’IO, non è mai qualcosa di individuale, unitario, unitotale. Ovviamente l’IO è “IOES”.</p>\n<p>Nel Tibet Orientale gli “IOES” sono chiamati “AGGREGATI PSICHICI” o semplicemente “Valori”, siano questi ultimi positivi o negativi.</p>\n<p>Se pensiamo a ogni “Io” come a una persona diversa, possiamo affermare in modo enfatico quanto segue: “Dentro ogni persona che vive nel mondo, esistono molte persone”.</p>\n<p>Indubbiamente dentro ognuno di noi vivono moltissime persone diverse, alcune migliori, altre peggiori…</p>\n<p>Ognuno di questi Ioes, ognuna di queste persone lotta per la supremazia, vuole essere esclusiva, controlla il cervello intellettuale o i centri emotivo e motorio ogni volta che può, mentre un altro lo spiazza…</p>\n<p>La Dottrina dei molti Ioes fu insegnata nel Tibet Orientale dai veri Chiaroveggenti, dagli autentici Illuminati…</p>\n<p>Ognuno dei nostri difetti psicologici è personificato in tale o tal altro Io. Poiché abbiamo migliaia e anche milioni di difetti, ostensibilmente vive molta gente nel nostro interiore.</p>\n<p>In questioni psicologiche abbiamo potuto evidenziare chiaramente che i soggetti paranoici, egolatri e mitomani per nulla al mondo abbandonerebbero il culto del caro Ego.</p>\n<p>Indubbiamente tali genti odiano mortalmente la dottrina dei molti “Ioes”.</p>\n<p>Quando uno vuole veramente conoscere sé stesso, deve auto-osservarsi e cercare di conoscere i diversi “Ioes” che sono dentro la personalità.</p>\n<p>Se qualcuno dei nostri lettori non comprende ancora questa dottrina dei molti “Ioes”, è dovuto esclusivamente alla mancanza di pratica in materia di Auto-Osservazione.</p>\n<p>Man mano che uno pratica l’Auto-Osservazione Interiore, va scoprendo da sé molte genti, molti “Ioes”, che vivono dentro la nostra stessa personalità.</p>\n<p>Coloro che negano la dottrina dei molti Ioes, coloro che adorano un IO Divino, indubbiamente non si sono mai Auto-Osservati seriamente. Parlando questa volta in stile Socratico diremo che queste genti non solo ignorano, ma inoltre ignorano di ignorare.</p>\n<p>Certamente non potremmo mai conoscere noi stessi, senza l’auto-osservazione seria e profonda.</p>\n<p>Fintanto che un soggetto qualsiasi continua a considerarsi come Uno, è chiaro che qualsiasi cambiamento interiore sarà qualcosa di più che impossibile.</p>"
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
const url = "src/content/docs/it/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/it/tratado-de-psicologia-revolucionaria/el-querido-ego.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
