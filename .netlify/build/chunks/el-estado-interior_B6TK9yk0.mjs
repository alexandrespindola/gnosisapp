import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Det inre tillståndet",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "7. Det inre tillståndet",
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
    "set:html": "<p>Att kombinera inre tillstånd med yttre händelser på rätt sätt är att leva intelligent…</p>\n<p>Varje intelligent upplevd händelse kräver sitt motsvarande specifika inre tillstånd…</p>\n<p>Men tyvärr tänker människor, när de ser tillbaka på sina liv, att det i sig uteslutande består av yttre händelser…</p>\n<p>Stackars människor! De tror att om en viss händelse inte hade hänt dem, skulle deras liv ha varit bättre…</p>\n<p>De antar att lyckan mötte dem och att de förlorade chansen att vara lyckliga…</p>\n<p>De beklagar det förlorade, gråter över det de föraktade, stönar när de minns gamla misstag och olyckor…</p>\n<p>Människor vill inte inse att vegeterande inte är att leva och att förmågan att existera medvetet uteslutande beror på kvaliteten på själens inre tillstånd…</p>\n<p>Det spelar verkligen ingen roll hur vackra livets yttre händelser är, om vi inte befinner oss i lämpligt inre tillstånd i sådana stunder, kan de bästa händelserna verka monotona, tröttsamma eller helt enkelt tråkiga…</p>\n<p>Någon väntar med spänning på bröllopsfesten, det är en händelse, men det kan hända att de är så oroliga i just det ögonblicket av händelsen, att de verkligen inte njuter av det alls och att allt blir lika torrt och kallt som ett protokoll…</p>\n<p>Erfarenheten har lärt oss att inte alla människor som deltar i en bankett eller en dans verkligen njuter…</p>\n<p>Det saknas aldrig en tråkmåns på den bästa festen, och de läckraste bitarna gläder vissa och får andra att gråta…</p>\n<p>Mycket sällan vet människor hur man förtroligt kombinerar den yttre händelsen med det lämpliga inre tillståndet…</p>\n<p>Det är beklagligt att människor inte vet hur man lever medvetet: de gråter när de borde skratta och skrattar när de borde gråta…</p>\n<p>Kontroll är annorlunda: Den vise kan vara glad men aldrig fylld av galen frenesi; ledsen men aldrig förtvivlad och nedslagen… lugn mitt i våldet; nykter i orgien; kysk mitt i lystnaden, etc.</p>\n<p>Melankoliska och pessimistiska människor tänker det värsta om livet och önskar uppriktigt inte att leva…</p>\n<p>Varje dag ser vi människor som inte bara är olyckliga, utan dessutom – och vad värre är – gör livet bittert för andra också…</p>\n<p>Sådana människor skulle inte förändras ens om de dagligen levde från fest till fest; den psykologiska sjukdomen bär de inom sig… sådana människor har definitivt perversa inre tillstånd…</p>\n<p>Men dessa individer kallar sig själva rättfärdiga, heliga, dygdiga, ädla, hjälpsamma, martyrer, etc., etc., etc.</p>\n<p>De är människor som tycker för mycket om sig själva; människor som älskar sig själva väldigt mycket…</p>\n<p>Individer som tycker mycket synd om sig själva och som alltid letar efter kryphål för att undvika sitt eget ansvar…</p>\n<p>Sådana människor är vana vid de lägre känslorna och det är uppenbart att de därför dagligen skapar psykiska element som är omänskliga.</p>\n<p>Olyckliga händelser, motgångar, elände, skulder, problem, etc., är exklusivt för de människor som inte vet hur man lever…</p>\n<p>Vem som helst kan skaffa sig en rik intellektuell kultur, men väldigt få människor har lärt sig att leva rätt…</p>\n<p>När man vill separera de yttre händelserna från medvetandets inre tillstånd, visar man konkret sin oförmåga att existera värdigt.</p>\n<p>De som lär sig att medvetet kombinera yttre händelser och inre tillstånd går på framgångens väg…</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/el-estado-interior.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
