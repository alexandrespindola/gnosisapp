import { j as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro/server_D5RFOXkj.mjs';
import { $ as $$Image } from './_astro_assets_D9DAVLmb.mjs';

const frontmatter = {
  "title": "Felaktiga stater",
  "locale": "sv",
  "statusTranslation": "automatic",
  "coverImage": "https://lhvmrqwrcowdvduuaukz.supabase.co/storage/v1/object/public/strapi-uploads/small_cover-tratado-de-psicologia-revolucionaria.webp-5e15e1cec4e0ebebcde5d7fc7565d8fd.webp",
  "sidebar": {
    "label": "8. Felaktiga stater",
    "order": 8
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
    "set:html": "<p>Utan tvekan är det vid en noggrann observation av Jaget alltid oundgängligt och brådskande att göra en fullständig logisk åtskillnad mellan de yttre händelserna i det praktiska livet och medvetandets inre tillstånd.</p>\n<p>Vi behöver snarast veta var vi befinner oss i ett givet ögonblick, både i förhållande till medvetandets inre tillstånd och den specifika naturen hos den yttre händelse som drabbar oss.</p>\n<p>Livet i sig är en serie händelser som bearbetas genom tid och rum…</p>\n<p>Någon sade: “Livet är en kedja av lidanden som människan bär intrasslad i själen…”</p>\n<p>Var och en är fri att tänka som man vill; jag tror att de flyktiga njutningarna av ett kort ögonblick alltid följs av besvikelse och bitterhet…</p>\n<p>Varje händelse har sin speciella karakteristiska smak och de inre tillstånden är också av olika slag; detta är obestridligt, oemotsägligt…</p>\n<p>Säkert hänvisar det inre arbetet med sig själv med eftertryck till medvetandets olika psykologiska tillstånd…</p>\n<p>Ingen kan förneka att vi bär på många misstag inom oss och att det finns felaktiga tillstånd…</p>\n<p>Om vi verkligen vill förändras behöver vi snarast och brådskande radikalt förändra dessa felaktiga medvetandetillstånd…</p>\n<p>Den absoluta förändringen av de felaktiga tillstånden ger upphov till fullständiga förändringar i det praktiska livet…</p>\n<p>När man arbetar seriöst med de felaktiga tillstånden kan livets obehagliga händelser uppenbarligen inte längre såra en lika lätt…</p>\n<p>Vi säger något som bara är möjligt att förstå genom att uppleva det, känna det verkligen på själva fältet av fakta…</p>\n<p>Den som inte arbetar med sig själv är alltid offer för omständigheterna; det är som en ynklig vedträ bland oceanens stormiga vatten…</p>\n<p>Händelserna förändras ständigt i sina många kombinationer; de kommer en efter en i vågor, det är influenser…</p>\n<p>Visst finns det bra och dåliga händelser; vissa händelser kommer att vara bättre eller sämre än andra…</p>\n<p>Att förändra vissa händelser är möjligt; att förändra resultat, modifiera situationer, etc., ligger säkert inom antalet möjligheter.</p>\n<p>Men det finns faktiska situationer som verkligen inte kan förändras; i de senare fallen måste de accepteras medvetet, även om vissa är mycket farliga och till och med smärtsamma…</p>\n<p>Utan tvekan försvinner smärtan när vi inte identifierar oss med det problem som har uppstått…</p>\n<p>Vi bör betrakta livet som en successiv serie av inre tillstånd; en autentisk historia om vårt speciella liv består av alla dessa tillstånd…</p>\n<p>Genom att granska hela vår egen existens kan vi själva verifiera direkt att många obehagliga situationer var möjliga tack vare felaktiga inre tillstånd…</p>\n<p>Alexander den store, även om han alltid var måttlig av naturen, hängav sig av stolthet åt de excesser som orsakade hans död…</p>\n<p>Frans I dog på grund av ett smutsigt och avskyvärt äktenskapsbrott, som historien fortfarande minns mycket väl…</p>\n<p>När Marat mördades av en pervers nunna dog han av högmod och avund, han trodde sig vara absolut rättvis…</p>\n<p>Damerna i Hjortparken avslutade utan tvekan helt vitaliteten hos den fruktansvärda horkarlen som kallades LUIS XV.</p>\n<p>Många är de människor som dör av ambition, ilska eller svartsjuka, detta vet psykologerna mycket väl…</p>\n<p>Så snart vår vilja oåterkalleligt bekräftas i en absurd tendens blir vi kandidater till pantheon eller kyrkogård…</p>\n<p>Otello blev mördare på grund av svartsjuka och fängelset är fullt av uppriktiga missförstådda…</p>"
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
const url = "src/content/docs/sv/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const file = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/prometeu/Documentos/Astro/gnosisapp/src/content/docs/sv/tratado-de-psicologia-revolucionaria/estados-equivocados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
